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
  timezone: z.string().optional().describe("Timezone of birth place (e.g. Asia/Kolkata). Defaults to Asia/Kolkata"),
};

export const matchmakingSchema = {
  m_day: z.number().int().min(1).max(31).describe("Male Day of birth"),
  m_month: z.number().int().min(1).max(12).describe("Male Month of birth"),
  m_year: z.number().int().describe("Male Year of birth"),
  m_hour: z.number().int().min(0).max(23).describe("Male Hour of birth"),
  m_min: z.number().int().min(0).max(59).describe("Male Minute of birth"),
  m_lat: z.number().describe("Male Latitude"),
  m_lon: z.number().describe("Male Longitude"),
  f_day: z.number().int().min(1).max(31).describe("Female Day of birth"),
  f_month: z.number().int().min(1).max(12).describe("Female Month of birth"),
  f_year: z.number().int().describe("Female Year of birth"),
  f_hour: z.number().int().min(0).max(23).describe("Female Hour of birth"),
  f_min: z.number().int().min(0).max(59).describe("Female Minute of birth"),
  f_lat: z.number().describe("Female Latitude"),
  f_lon: z.number().describe("Female Longitude"),
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
  place: z.string().describe("Name of the city or place to search (at least 4 characters, e.g. 'Delhi', 'Mumbai')"),
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
  year: z.number().int().describe("Year (2024 to 2026 available)"),
};

export const moonPhasesSchema = {
  selectedDate: z.string().describe("Selected date in YYYY-MM-DD format (e.g. 2024-05-15)"),
};

export const hinduFestivalsSchema = {
  year: z.number().int().describe("Year (e.g. 2024 to 2040)"),
  month: z.number().int().min(1).max(12).describe("Month (1-12)"),
  language: z.enum(["en", "hi"]).default("en").describe("Language: 'en' for English or 'hi' for Hindi. Default: 'en'"),
};

export const numerologySchema = {
  fullName: z.string().describe("Full name of the person"),
  gender: z.enum(["Male", "Female", "Other"]).default("Male").describe("Gender of the person"),
  dateOfBirth: z.string().describe("Date of birth in YYYY-MM-DD format (e.g. 1995-05-15)"),
};

export const biorhythmSchema = {
  dob: z.string().optional().describe("Date of birth in YYYY-MM-DD format (e.g. 1995-05-15)"),
  dateOfBirth: z.string().optional().describe("Alternative date of birth in YYYY-MM-DD format"),
};

export const panchangSchema = {
  date: z.string().describe("Date in YYYY-MM-DD format (e.g. 2026-11-04)"),
  time: z.string().default("10:30:00").describe("Time in HH:MM:SS format (e.g. 10:30:00)"),
  latitude: z.number().min(-90).max(90).describe("Latitude of the location"),
  longitude: z.number().min(-180).max(180).describe("Longitude of the location"),
  timezone: z.string().default("Asia/Kolkata").describe("Timezone (Default: 'Asia/Kolkata')"),
};

export const muhurtaSchema = {
  date: z.string().describe("Date in YYYY-MM-DD format (e.g. 2026-11-04)"),
  latitude: z.number().min(-90).max(90).describe("Latitude of the location"),
  longitude: z.number().min(-180).max(180).describe("Longitude of the location"),
};

export const compatibilitySchema = {
  maleSign: z.enum([
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", 
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
  ]).describe("Zodiac sign of the male (e.g. Aries, Leo)"),
  femaleSign: z.enum([
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", 
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
  ]).describe("Zodiac sign of the female (e.g. Aries, Leo)"),
};

export const bhinnaAshtakvargaSchema = {
  ...birthDetailsSchema,
  planetInput: z.enum([
    "Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn",
    "sun", "moon", "mars", "mercury", "jupiter", "venus", "saturn"
  ]).default("Sun").describe("Planet name to calculate Bhinna Ashtakvarga points for (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn)"),
};

export const charAntarDashaSchema = {
  ...birthDetailsSchema,
  mahadasha_sign: z.string().describe("Sign name for Mahadasha (e.g., Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces)"),
};

export const charPratyantarDashaSchema = {
  ...birthDetailsSchema,
  mahadasha_sign: z.string().describe("Sign name for Mahadasha"),
  antardasha_sign: z.string().describe("Sign name for Antardasha"),
};

export const vimshottariAntarSchema = {
  ...birthDetailsSchema,
  mahaDasha: z.string().describe("Planet name for Maha Dasha (e.g., Sun, Moon, Mars, Rahu, Jupiter, Saturn, Mercury, Ketu, Venus)"),
};

export const vimshottariPratyantarSchema = {
  ...birthDetailsSchema,
  mahaDasha: z.string().describe("Planet name for Maha Dasha"),
  antarDasha: z.string().describe("Planet name for Antar Dasha"),
};

export const vimshottariSookshmaSchema = {
  ...birthDetailsSchema,
  mahaDasha: z.string().describe("Planet name for Maha Dasha"),
  antarDasha: z.string().describe("Planet name for Antar Dasha"),
  pratyantarDasha: z.string().describe("Planet name for Pratyantar Dasha"),
};

export const vimshottariPranaSchema = {
  ...birthDetailsSchema,
  mahaDasha: z.string().describe("Planet name for Maha Dasha"),
  antarDasha: z.string().describe("Planet name for Antar Dasha"),
  pratyantarDasha: z.string().describe("Planet name for Pratyantar Dasha"),
  sookshmaDasha: z.string().describe("Planet name for Sookshma Dasha"),
};

export const calculateEphemerisSchema = {
  selectedMonthNumber: z.number().int().min(1).max(12).describe("Month number (1-12)"),
  selectedYear: z.number().int().describe("Year (e.g. 2024 to 2040)"),
  zodiac: z.enum(["Tropical", "Sidereal"]).default("Tropical").describe("Zodiac system (Default: 'Tropical')"),
  timeZone: z.string().default("Asia/Kolkata").describe("Timezone (Default: 'Asia/Kolkata')"),
};

export const planetaryPositionSchema = {
  ...birthDetailsSchema,
  name: z.string().default("User").describe("Person's name"),
  gender: z.enum(["Male", "Female", "Other"]).default("Male").describe("Gender of person"),
  place: z.string().default("Delhi, India").describe("Birth place"),
};

export const calculatePlanetIngressSchema = {
  planet: z.string().default("Sun").describe("Planet name (e.g. 'Sun', 'Moon', 'Mars')"),
  startDate: z.string().describe("Start date in YYYY-MM-DD format (e.g. '2024-01-01')"),
  endDate: z.string().describe("End date in YYYY-MM-DD format (e.g. '2024-12-31')"),
  timezone: z.string().default("Asia/Kolkata").describe("Timezone in IANA format (Default: 'Asia/Kolkata')"),
  latitude: z.number().default(28.6139).describe("Latitude in decimal degrees"),
  longitude: z.number().default(77.2090).describe("Longitude in decimal degrees"),
  altitude: z.number().default(0).describe("Altitude in meters"),
  calculationMethod: z.string().default("Moshier").describe("Calculation method (e.g. 'Moshier', 'Swiss')"),
  zodiac: z.string().default("Tropical").describe("Zodiac system (e.g. 'Tropical', 'Sidereal')"),
};
