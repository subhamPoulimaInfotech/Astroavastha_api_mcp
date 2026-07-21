"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPlaceSchema = exports.varshphalMuddaAntarSchema = exports.varshphalMonthSchema = exports.varshphalDetailsSchema = exports.balaSchema = exports.horoscopeSchema = exports.matchmakingSchema = exports.birthDetailsSchema = exports.emptySchema = void 0;
const zod_1 = require("zod");
exports.emptySchema = {};
exports.birthDetailsSchema = {
    day: zod_1.z.number().int().min(1).max(31).describe("Day of birth"),
    month: zod_1.z.number().int().min(1).max(12).describe("Month of birth (1-12)"),
    year: zod_1.z.number().int().describe("Year of birth (e.g., 1990)"),
    hour: zod_1.z.number().int().min(0).max(23).describe("Hour of birth (0-23)"),
    minute: zod_1.z.number().int().min(0).max(59).describe("Minute of birth (0-59)"),
    second: zod_1.z.number().int().min(0).max(59).describe("Second of birth (0-59)"),
    latitude: zod_1.z.number().min(-90).max(90).describe("Latitude of birth place"),
    longitude: zod_1.z.number().min(-180).max(180).describe("Longitude of birth place"),
};
exports.matchmakingSchema = {
    m_day: zod_1.z.number().int().min(1).max(31).describe("Male Day of birth"),
    m_month: zod_1.z.number().int().min(1).max(12).describe("Male Month of birth"),
    m_year: zod_1.z.number().int().describe("Male Year of birth"),
    m_hour: zod_1.z.number().int().min(0).max(23).describe("Male Hour of birth"),
    m_minute: zod_1.z.number().int().min(0).max(59).describe("Male Minute of birth"),
    m_second: zod_1.z.number().int().min(0).max(59).describe("Male Second of birth"),
    m_latitude: zod_1.z.number().describe("Male Latitude"),
    m_longitude: zod_1.z.number().describe("Male Longitude"),
    f_day: zod_1.z.number().int().min(1).max(31).describe("Female Day of birth"),
    f_month: zod_1.z.number().int().min(1).max(12).describe("Female Month of birth"),
    f_year: zod_1.z.number().int().describe("Female Year of birth"),
    f_hour: zod_1.z.number().int().min(0).max(23).describe("Female Hour of birth"),
    f_minute: zod_1.z.number().int().min(0).max(59).describe("Female Minute of birth"),
    f_second: zod_1.z.number().int().min(0).max(59).describe("Female Second of birth"),
    f_latitude: zod_1.z.number().describe("Female Latitude"),
    f_longitude: zod_1.z.number().describe("Female Longitude"),
};
exports.horoscopeSchema = {
    signName: zod_1.z.enum([
        "aries", "taurus", "gemini", "cancer",
        "leo", "virgo", "libra", "scorpio",
        "sagittarius", "capricorn", "aquarius", "pisces"
    ]).describe("The zodiac sign in lowercase"),
};
exports.balaSchema = {
    ...exports.birthDetailsSchema,
    bala: zod_1.z.string().describe("The bala type in the path"),
};
exports.varshphalDetailsSchema = {
    ...exports.birthDetailsSchema,
    yearInput: zod_1.z.number().int().describe("Target year (e.g. 2025)"),
};
exports.varshphalMonthSchema = {
    ...exports.birthDetailsSchema,
    monthInput: zod_1.z.number().int().min(1).max(12).describe("Target month (1-12)"),
};
exports.varshphalMuddaAntarSchema = {
    ...exports.birthDetailsSchema,
    mahaDashaInput: zod_1.z.string().describe("Maha dasha input name"),
};
exports.searchPlaceSchema = {
    placeName: zod_1.z.string().describe("Name of the place to search"),
};
