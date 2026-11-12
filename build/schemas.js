"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePlanetIngressSchema = exports.planetaryPositionSchema = exports.calculateEphemerisSchema = exports.vimshottariPranaSchema = exports.vimshottariSookshmaSchema = exports.vimshottariPratyantarSchema = exports.vimshottariAntarSchema = exports.charPratyantarDashaSchema = exports.charAntarDashaSchema = exports.bhinnaAshtakvargaSchema = exports.compatibilitySchema = exports.muhurtaSchema = exports.panchangSchema = exports.biorhythmSchema = exports.numerologySchema = exports.hinduFestivalsSchema = exports.moonPhasesSchema = exports.planetAspectsSchema = exports.planetIngressSchema = exports.searchPlaceSchema = exports.varshphalMuddaAntarSchema = exports.varshphalMonthSchema = exports.varshphalDetailsSchema = exports.balaSchema = exports.horoscopeSchema = exports.matchmakingSchema = exports.birthDetailsSchema = exports.emptySchema = void 0;
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
    m_min: zod_1.z.number().int().min(0).max(59).describe("Male Minute of birth"),
    m_lat: zod_1.z.number().describe("Male Latitude"),
    m_lon: zod_1.z.number().describe("Male Longitude"),
    f_day: zod_1.z.number().int().min(1).max(31).describe("Female Day of birth"),
    f_month: zod_1.z.number().int().min(1).max(12).describe("Female Month of birth"),
    f_year: zod_1.z.number().int().describe("Female Year of birth"),
    f_hour: zod_1.z.number().int().min(0).max(23).describe("Female Hour of birth"),
    f_min: zod_1.z.number().int().min(0).max(59).describe("Female Minute of birth"),
    f_lat: zod_1.z.number().describe("Female Latitude"),
    f_lon: zod_1.z.number().describe("Female Longitude"),
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
    place: zod_1.z.string().describe("Name of the city or place to search (at least 4 characters, e.g. 'Delhi', 'Mumbai')"),
};
exports.planetIngressSchema = {
    month: zod_1.z.number().int().min(1).max(12).describe("Month (1-12)"),
    year: zod_1.z.number().int().describe("Year (2024 to 2040 available)"),
    planet: zod_1.z.enum([
        "All", "Sun", "Moon", "Mercury", "Venus", "Mars",
        "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"
    ]).default("All").describe("Planet name or 'All' to get all planetary ingresses (Default: 'All')"),
    zodiacSystem: zod_1.z.enum(["Vedic", "Western"]).default("Vedic").describe("Zodiac system: 'Vedic' (Sidereal) or 'Western' (Tropical). Default: 'Vedic'"),
};
exports.planetAspectsSchema = {
    month: zod_1.z.number().int().min(1).max(12).describe("Month (1-12)"),
    year: zod_1.z.number().int().describe("Year (e.g. 2024 to 2040)"),
};
exports.moonPhasesSchema = {
    selectedDate: zod_1.z.string().describe("Selected date in YYYY-MM-DD format (e.g. 2024-05-15)"),
};
exports.hinduFestivalsSchema = {
    year: zod_1.z.number().int().describe("Year (e.g. 2024 to 2040)"),
    month: zod_1.z.number().int().min(1).max(12).describe("Month (1-12)"),
    language: zod_1.z.enum(["en", "hi"]).default("en").describe("Language: 'en' for English or 'hi' for Hindi. Default: 'en'"),
};
exports.numerologySchema = {
    fullName: zod_1.z.string().describe("Full name of the person"),
    gender: zod_1.z.enum(["Male", "Female", "Other"]).default("Male").describe("Gender of the person"),
    dateOfBirth: zod_1.z.string().describe("Date of birth in YYYY-MM-DD format (e.g. 1995-05-15)"),
};
exports.biorhythmSchema = {
    dob: zod_1.z.string().describe("Date of birth in YYYY-MM-DD format (e.g. 1995-05-15)"),
};
exports.panchangSchema = {
    date: zod_1.z.string().describe("Date in YYYY-MM-DD format (e.g. 2026-11-04)"),
    time: zod_1.z.string().default("10:30:00").describe("Time in HH:MM:SS format (e.g. 10:30:00)"),
    latitude: zod_1.z.number().min(-90).max(90).describe("Latitude of the location"),
    longitude: zod_1.z.number().min(-180).max(180).describe("Longitude of the location"),
    timezone: zod_1.z.string().default("Asia/Kolkata").describe("Timezone (Default: 'Asia/Kolkata')"),
};
exports.muhurtaSchema = {
    date: zod_1.z.string().describe("Date in YYYY-MM-DD format (e.g. 2026-11-04)"),
    latitude: zod_1.z.number().min(-90).max(90).describe("Latitude of the location"),
    longitude: zod_1.z.number().min(-180).max(180).describe("Longitude of the location"),
};
exports.compatibilitySchema = {
    maleSign: zod_1.z.enum([
        "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
        "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
    ]).describe("Zodiac sign of the male (e.g. Aries, Leo)"),
    femaleSign: zod_1.z.enum([
        "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
        "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
    ]).describe("Zodiac sign of the female (e.g. Aries, Leo)"),
};
exports.bhinnaAshtakvargaSchema = {
    ...exports.birthDetailsSchema,
    planetInput: zod_1.z.enum([
        "Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Ascendant"
    ]).default("Sun").describe("Planet name to calculate Bhinna Ashtakvarga points for"),
};
exports.charAntarDashaSchema = {
    ...exports.birthDetailsSchema,
    mahadasha_sign: zod_1.z.string().describe("Sign name for Mahadasha (e.g., Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces)"),
};
exports.charPratyantarDashaSchema = {
    ...exports.birthDetailsSchema,
    mahadasha_sign: zod_1.z.string().describe("Sign name for Mahadasha"),
    antardasha_sign: zod_1.z.string().describe("Sign name for Antardasha"),
};
exports.vimshottariAntarSchema = {
    ...exports.birthDetailsSchema,
    mahaDasha: zod_1.z.string().describe("Planet name for Maha Dasha (e.g., Sun, Moon, Mars, Rahu, Jupiter, Saturn, Mercury, Ketu, Venus)"),
};
exports.vimshottariPratyantarSchema = {
    ...exports.birthDetailsSchema,
    mahaDasha: zod_1.z.string().describe("Planet name for Maha Dasha"),
    antarDasha: zod_1.z.string().describe("Planet name for Antar Dasha"),
};
exports.vimshottariSookshmaSchema = {
    ...exports.birthDetailsSchema,
    mahaDasha: zod_1.z.string().describe("Planet name for Maha Dasha"),
    antarDasha: zod_1.z.string().describe("Planet name for Antar Dasha"),
    pratyantarDasha: zod_1.z.string().describe("Planet name for Pratyantar Dasha"),
};
exports.vimshottariPranaSchema = {
    ...exports.birthDetailsSchema,
    mahaDasha: zod_1.z.string().describe("Planet name for Maha Dasha"),
    antarDasha: zod_1.z.string().describe("Planet name for Antar Dasha"),
    pratyantarDasha: zod_1.z.string().describe("Planet name for Pratyantar Dasha"),
    sookshmaDasha: zod_1.z.string().describe("Planet name for Sookshma Dasha"),
};
exports.calculateEphemerisSchema = {
    selectedMonthNumber: zod_1.z.number().int().min(1).max(12).describe("Month number (1-12)"),
    selectedYear: zod_1.z.number().int().describe("Year (e.g. 2024 to 2040)"),
    zodiac: zod_1.z.enum(["Tropical", "Sidereal"]).default("Tropical").describe("Zodiac system (Default: 'Tropical')"),
    timeZone: zod_1.z.string().default("Asia/Kolkata").describe("Timezone (Default: 'Asia/Kolkata')"),
};
exports.planetaryPositionSchema = {
    ...exports.birthDetailsSchema,
    name: zod_1.z.string().default("User").describe("Person's name"),
    gender: zod_1.z.enum(["Male", "Female", "Other"]).default("Male").describe("Gender of person"),
    place: zod_1.z.string().default("Delhi, India").describe("Birth place"),
};
exports.calculatePlanetIngressSchema = {
    planet: zod_1.z.string().default("Sun").describe("Planet name (e.g. 'Sun', 'Moon', 'Mars')"),
    startDate: zod_1.z.string().describe("Start date in YYYY-MM-DD format (e.g. '2024-01-01')"),
    endDate: zod_1.z.string().describe("End date in YYYY-MM-DD format (e.g. '2024-12-31')"),
    timezone: zod_1.z.string().default("Asia/Kolkata").describe("Timezone in IANA format (Default: 'Asia/Kolkata')"),
    latitude: zod_1.z.number().default(28.6139).describe("Latitude in decimal degrees"),
    longitude: zod_1.z.number().default(77.2090).describe("Longitude in decimal degrees"),
    altitude: zod_1.z.number().default(0).describe("Altitude in meters"),
    calculationMethod: zod_1.z.string().default("Moshier").describe("Calculation method (e.g. 'Moshier', 'Swiss')"),
    zodiac: zod_1.z.string().default("Tropical").describe("Zodiac system (e.g. 'Tropical', 'Sidereal')"),
};
