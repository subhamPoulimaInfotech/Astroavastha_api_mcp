import { z } from "zod";

export const emptySchema = {};

export const birthDetailsSchema = {
  day: z.number().int().min(1).max(31).describe("Day of birth"),
  month: z.number().int().min(1).max(12).describe("Month of birth (1-12)"),
  year: z.number().int().describe("Year of birth (e.g., 1990)"),
  hour: z.number().int().min(0).max(23).describe("Hour of birth (0-23)"),
  minute: z.number().int().min(0).max(59).describe("Minute of birth (0-59)"),
  second: z.number().int().min(0).max(59).describe("Second of birth (0-59)"),
  latitude: z.number().min(-90).max(90).describe("Latitude of birth place"),
  longitude: z.number().min(-180).max(180).describe("Longitude of birth place"),
};

export const matchmakingSchema = {
  m_day: z.number().int().min(1).max(31).describe("Male Day of birth"),
  m_month: z.number().int().min(1).max(12).describe("Male Month of birth"),
  m_year: z.number().int().describe("Male Year of birth"),
  m_hour: z.number().int().min(0).max(23).describe("Male Hour of birth"),
  m_minute: z.number().int().min(0).max(59).describe("Male Minute of birth"),
  m_second: z.number().int().min(0).max(59).describe("Male Second of birth"),
  m_latitude: z.number().describe("Male Latitude"),
  m_longitude: z.number().describe("Male Longitude"),
  f_day: z.number().int().min(1).max(31).describe("Female Day of birth"),
  f_month: z.number().int().min(1).max(12).describe("Female Month of birth"),
  f_year: z.number().int().describe("Female Year of birth"),
  f_hour: z.number().int().min(0).max(23).describe("Female Hour of birth"),
  f_minute: z.number().int().min(0).max(59).describe("Female Minute of birth"),
  f_second: z.number().int().min(0).max(59).describe("Female Second of birth"),
  f_latitude: z.number().describe("Female Latitude"),
  f_longitude: z.number().describe("Female Longitude"),
};

export const horoscopeSchema = {
  signName: z.enum([
    "aries", "taurus", "gemini", "cancer", 
    "leo", "virgo", "libra", "scorpio", 
    "sagittarius", "capricorn", "aquarius", "pisces"
  ]).describe("The zodiac sign in lowercase"),
};

export const balaSchema = {
  ...birthDetailsSchema,
  bala: z.string().describe("The bala type in the path"),
};

export const varshphalDetailsSchema = {
  ...birthDetailsSchema,
  yearInput: z.number().int().describe("Target year (e.g. 2025)"),
};

export const varshphalMonthSchema = {
  ...birthDetailsSchema,
  monthInput: z.number().int().min(1).max(12).describe("Target month (1-12)"),
};

export const varshphalMuddaAntarSchema = {
  ...birthDetailsSchema,
  mahaDashaInput: z.string().describe("Maha dasha input name"),
};

export const searchPlaceSchema = {
  placeName: z.string().describe("Name of the place to search"),
};

export const planetIngressSchema = {
  month: z.number().int().min(1).max(12).describe("Month (1-12)"),
  year: z.number().int().describe("Year (2024 to 2040 available)"),
  planet: z.enum([
    "All", "Sun", "Moon", "Mercury", "Venus", "Mars", 
    "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"
  ]).default("All").describe("Planet name or 'All' to get all planetary ingresses (Default: 'All')"),
  zodiacSystem: z.enum(["Vedic", "Western"]).default("Vedic").describe("Zodiac system: 'Vedic' (Sidereal) or 'Western' (Tropical). Default: 'Vedic'"),
};

export const planetAspectsSchema = {
  month: z.number().int().min(1).max(12).describe("Month (1-12)"),
  year: z.number().int().describe("Year (e.g. 2024 to 2040)"),
};

export const moonPhasesSchema = {
  selectedDate: z.string().describe("Selected date in YYYY-MM-DD format (e.g. 2024-05-15)"),
};

export const hinduFestivalsSchema = {
  year: z.number().int().describe("Year (e.g. 2024 to 2040)"),
  month: z.number().int().min(1).max(12).describe("Month (1-12)"),
  language: z.enum(["en", "hi"]).default("en").describe("Language: 'en' for English or 'hi' for Hindi. Default: 'en'"),
};
