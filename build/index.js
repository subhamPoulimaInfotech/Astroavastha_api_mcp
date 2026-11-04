#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const axios_1 = __importDefault(require("axios"));
const endpoints_1 = require("./endpoints");
const API_KEY = process.env.ASTROCHALIT_API_KEY;
if (!API_KEY) {
    console.error("ASTROCHALIT_API_KEY environment variable is required.");
    process.exit(1);
}
const BASE_URL = "https://service.astrochalit.com/api";
const IS_DEBUG = process.env.DEBUG === 'true';
// Simple in-memory cache to prevent redundant API calls and save quota
const cache = new Map();
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
// Periodically clean up expired cache entries to prevent memory leaks
setInterval(() => {
    const now = Date.now();
    for (const [key, value] of cache.entries()) {
        if (now - value.timestamp > CACHE_TTL_MS) {
            cache.delete(key);
        }
    }
}, CACHE_TTL_MS).unref();
/**
 * Recursively prunes the API response to remove database artifacts
 * and empty values. This drastically reduces the token size
 * sent to the LLM, optimizing the context window and costs.
 */
function pruneData(obj) {
    if (Array.isArray(obj)) {
        const arr = obj.map(pruneData).filter(item => item != null && (typeof item !== 'object' || Object.keys(item).length > 0));
        return arr.length > 0 ? arr : undefined;
    }
    else if (obj !== null && typeof obj === 'object') {
        const newObj = {};
        for (const [k, v] of Object.entries(obj)) {
            // Strip out internal database fields useless to the LLM
            if (['id', '_id', '__v', 'created_at', 'updated_at', 'createdAt', 'updatedAt', 'status'].includes(k)) {
                continue;
            }
            const prunedValue = pruneData(v);
            if (prunedValue !== undefined && prunedValue !== null && prunedValue !== '') {
                if (typeof prunedValue === 'object' && Object.keys(prunedValue).length === 0)
                    continue;
                newObj[k] = prunedValue;
            }
        }
        return newObj;
    }
    return obj;
}
const server = new mcp_js_1.McpServer({
    name: "AstroChalit API MCP Server",
    version: "1.0.0",
});
endpoints_1.endpoints.forEach((endpoint) => {
    server.tool(endpoint.name, endpoint.description, endpoint.schema, async (args) => {
        try {
            if (IS_DEBUG) {
                console.error(`[DEBUG] AI called tool: ${endpoint.name} with args:`, JSON.stringify(args));
            }
            const cacheKey = `${endpoint.name}_${JSON.stringify(args)}`;
            const cached = cache.get(cacheKey);
            // Return cached data if it exists and hasn't expired
            if (cached && (Date.now() - cached.timestamp < CACHE_TTL_MS)) {
                if (IS_DEBUG)
                    console.error(`[DEBUG] Serving ${endpoint.name} from cache (0ms)`);
                return {
                    content: [{ type: "text", text: JSON.stringify(cached.data, null, 2) }]
                };
            }
            let url = `${BASE_URL}/astro${endpoint.path}`;
            // Handle path parameters (e.g. /horoscope/:signName)
            for (const [key, value] of Object.entries(args)) {
                if (url.includes(`:${key}`)) {
                    url = url.replace(`:${key}`, String(value));
                }
            }
            if (IS_DEBUG)
                console.error(`[DEBUG] Fetching from API: ${endpoint.method} ${url}`);
            const startTime = Date.now();
            const response = await (0, axios_1.default)({
                method: endpoint.method.toLowerCase(),
                url,
                data: endpoint.method === 'POST' ? args : undefined,
                params: endpoint.method === 'GET' ? args : undefined,
                headers: { 'Authorization': API_KEY }
            });
            if (IS_DEBUG)
                console.error(`[DEBUG] API Success in ${Date.now() - startTime}ms`);
            // Prune the payload to save context window tokens!
            const prunedData = pruneData(response.data);
            // Store the pruned response in cache
            cache.set(cacheKey, {
                data: prunedData,
                timestamp: Date.now()
            });
            return {
                content: [{ type: "text", text: JSON.stringify(prunedData, null, 2) }]
            };
        }
        catch (error) {
            const errorMsg = error.response?.data?.message || error.message || "Unknown error occurred";
            if (IS_DEBUG)
                console.error(`[DEBUG] API Error in ${endpoint.name}: ${errorMsg}`);
            return {
                content: [{ type: "text", text: `Failed to fetch ${endpoint.name}: ${errorMsg}` }],
                isError: true,
            };
        }
    });
});
async function run() {
    const transport = new stdio_js_1.StdioServerTransport();
    await server.connect(transport);
    console.error(`AstroChalit MCP Server running on stdio with ${endpoints_1.endpoints.length} tools`);
}
run().catch(console.error);
