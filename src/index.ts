#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import axios from "axios";
import { endpoints } from "./endpoints";

const API_KEY = process.env.ASTROCHALIT_API_KEY;
if (!API_KEY) {
  console.error("ASTROCHALIT_API_KEY environment variable is required.");
  process.exit(1);
}

const BASE_URL = "https://service.astrochalit.com/api";

const server = new McpServer({
  name: "AstroChalit API MCP Server",
  version: "1.0.0",
});

endpoints.forEach((endpoint) => {
  // @ts-ignore
  server.tool(
    endpoint.name,
    endpoint.description,
    endpoint.schema,
    async (args: any) => {
      try {
        let url = `${BASE_URL}/astro${endpoint.path}`;
        
        // Handle path parameters (e.g. /horoscope/:signName)
        for (const [key, value] of Object.entries(args)) {
          if (url.includes(`:${key}`)) {
             url = url.replace(`:${key}`, String(value));
          }
        }
        
        const response = await axios({
            method: endpoint.method.toLowerCase(),
            url,
            data: endpoint.method === 'POST' ? args : undefined,
            params: endpoint.method === 'GET' ? args : undefined,
            headers: { 'Authorization': API_KEY }
        });
        
        return {
          content: [{ type: "text", text: JSON.stringify(response.data, null, 2) }]
        };
      } catch (error: any) {
        const errorMsg = error.response?.data?.message || error.message || "Unknown error occurred";
        return {
          content: [{ type: "text", text: `Failed to fetch ${endpoint.name}: ${errorMsg}` }],
          isError: true,
        };
      }
    }
  );
});

async function run() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(`AstroChalit MCP Server running on stdio with ${endpoints.length} tools`);
}

run().catch(console.error);
