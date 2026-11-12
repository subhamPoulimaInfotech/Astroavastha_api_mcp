import { 
  birthDetailsSchema, 
  matchmakingSchema, 
  horoscopeSchema, 
  balaSchema, 
  varshphalDetailsSchema, 
  varshphalMonthSchema, 
  varshphalMuddaAntarSchema,
  searchPlaceSchema,
  planetIngressSchema,
  planetAspectsSchema,
  moonPhasesSchema,
  hinduFestivalsSchema,
  numerologySchema,
  biorhythmSchema,
  panchangSchema,
  muhurtaSchema,
  compatibilitySchema,
  bhinnaAshtakvargaSchema,
  charAntarDashaSchema,
  charPratyantarDashaSchema,
  vimshottariAntarSchema,
  vimshottariPratyantarSchema,
  vimshottariSookshmaSchema,
  vimshottariPranaSchema,
  calculateEphemerisSchema,
  calculatePlanetIngressSchema,
  planetaryPositionSchema,
  emptySchema
} from './schemas';

export const endpoints = [
  {
    name: "get_divisional_chart_d1",
    method: "POST",
    path: "/divitionalcharts/d1",
    schema: birthDetailsSchema,
    description: "Execute d1chart AstroChalit API"
  },
  {
    name: "get_divisional_chart_d2",
    method: "POST",
    path: "/divitionalcharts/d2",
    schema: birthDetailsSchema,
    description: "Execute d2chart AstroChalit API"
  },
  {
    name: "get_divisional_chart_d3",
    method: "POST",
    path: "/divitionalcharts/d3",
    schema: birthDetailsSchema,
    description: "Execute d3chart AstroChalit API"
  },
  {
    name: "get_divisional_chart_d4",
    method: "POST",
    path: "/divitionalcharts/d4",
    schema: birthDetailsSchema,
    description: "Execute d4chart AstroChalit API"
  },
  {
    name: "get_divisional_chart_d5",
    method: "POST",
    path: "/divitionalcharts/d5",
    schema: birthDetailsSchema,
    description: "Execute d5chart AstroChalit API"
  },
  {
    name: "get_divisional_chart_d6",
    method: "POST",
    path: "/divitionalcharts/d6",
    schema: birthDetailsSchema,
    description: "Execute d6chart AstroChalit API"
  },
  {
    name: "get_divisional_chart_d7",
    method: "POST",
    path: "/divitionalcharts/d7",
    schema: birthDetailsSchema,
    description: "Execute d7chart AstroChalit API"
  },
  {
    name: "get_divisional_chart_d8",
    method: "POST",
    path: "/divitionalcharts/d8",
    schema: birthDetailsSchema,
    description: "Execute d8chart AstroChalit API"
  },
  {
    name: "get_divisional_chart_d9",
    method: "POST",
    path: "/divitionalcharts/d9",
    schema: birthDetailsSchema,
    description: "Execute d9chart AstroChalit API"
  },
  {
    name: "get_divisional_chart_d10",
    method: "POST",
    path: "/divitionalcharts/d10",
    schema: birthDetailsSchema,
    description: "Execute d10chart AstroChalit API"
  },
  {
    name: "get_divisional_chart_d11",
    method: "POST",
    path: "/divitionalcharts/d11",
    schema: birthDetailsSchema,
    description: "Execute d11chart AstroChalit API"
  },
  {
    name: "get_divisional_chart_d12",
    method: "POST",
    path: "/divitionalcharts/d12",
    schema: birthDetailsSchema,
    description: "Execute d12chart AstroChalit API"
  },
  {
    name: "get_divisional_chart_d16",
    method: "POST",
    path: "/divitionalcharts/d16",
    schema: birthDetailsSchema,
    description: "Execute d16chart AstroChalit API"
  },
  {
    name: "get_divisional_chart_d20",
    method: "POST",
    path: "/divitionalcharts/d20",
    schema: birthDetailsSchema,
    description: "Execute d20chart AstroChalit API"
  },
  {
    name: "get_divisional_chart_d24",
    method: "POST",
    path: "/divitionalcharts/d24",
    schema: birthDetailsSchema,
    description: "Execute d24chart AstroChalit API"
  },
  {
    name: "get_divisional_chart_d27",
    method: "POST",
    path: "/divitionalcharts/d27",
    schema: birthDetailsSchema,
    description: "Execute d27chart AstroChalit API"
  },
  {
    name: "get_divisional_chart_d30",
    method: "POST",
    path: "/divitionalcharts/d30",
    schema: birthDetailsSchema,
    description: "Execute d30chart AstroChalit API"
  },
  {
    name: "get_divisional_chart_d40",
    method: "POST",
    path: "/divitionalcharts/d40",
    schema: birthDetailsSchema,
    description: "Execute d40chart AstroChalit API"
  },
  {
    name: "get_divisional_chart_d45",
    method: "POST",
    path: "/divitionalcharts/d45",
    schema: birthDetailsSchema,
    description: "Execute d45chart AstroChalit API"
  },
  {
    name: "get_divisional_chart_d60",
    method: "POST",
    path: "/divitionalcharts/d60",
    schema: birthDetailsSchema,
    description: "Execute d60chart AstroChalit API"
  },
  {
    name: "get_divisional_chart_d601",
    method: "POST",
    path: "/divitionalcharts/d601",
    schema: birthDetailsSchema,
    description: "Execute d601chart AstroChalit API"
  },
  {
    name: "get_biorhythm",
    method: "POST",
    path: "/biorhythm",
    schema: biorhythmSchema,
    description: "Execute biorhythm AstroChalit API"
  },
  {
    name: "get_panchang",
    method: "POST",
    path: "/panchang",
    schema: panchangSchema,
    description: "Execute panchang AstroChalit API"
  },
  {
    name: "get_kp_planets",
    method: "POST",
    path: "/kp_planets",
    schema: birthDetailsSchema,
    description: "Execute kp_planets AstroChalit API"
  },
  {
    name: "get_kp_birth",
    method: "POST",
    path: "/kp_birth",
    schema: birthDetailsSchema,
    description: "Execute kp_birth AstroChalit API"
  },
  {
    name: "get_kp_significators",
    method: "POST",
    path: "/kp_significators",
    schema: birthDetailsSchema,
    description: "Execute kp_significators AstroChalit API"
  },
  {
    name: "get_kp_planet_significators",
    method: "POST",
    path: "/kp_planet_significators",
    schema: birthDetailsSchema,
    description: "Execute kp_planet_significators AstroChalit API"
  },
  {
    name: "get_kp_house_significators",
    method: "POST",
    path: "/kp_house_significators",
    schema: birthDetailsSchema,
    description: "Execute kp_house_significators AstroChalit API"
  },
  {
    name: "get_kp_house_cups",
    method: "POST",
    path: "/kp_house_cups",
    schema: birthDetailsSchema,
    description: "Execute kp_house_cups AstroChalit API"
  },
  {
    name: "get_jamini",
    method: "POST",
    path: "/jamini",
    schema: birthDetailsSchema,
    description: "Execute jamini AstroChalit API"
  },
  {
    name: "get_char_maha_dasha",
    method: "POST",
    path: "/char_maha_dasha",
    schema: birthDetailsSchema,
    description: "Execute char_maha_dasha AstroChalit API"
  },
  {
    name: "get_char_antar_dasha",
    method: "POST",
    path: "/char_antar_dasha",
    schema: charAntarDashaSchema,
    description: "Execute char_antar_dasha AstroChalit API"
  },
  {
    name: "get_char_pratyantar_dasha",
    method: "POST",
    path: "/char_pratyantar_dasha",
    schema: charPratyantarDashaSchema,
    description: "Execute char_pratyantar_dasha AstroChalit API"
  },
  {
    name: "get_bhinnaashtakvarga",
    method: "POST",
    path: "/bhinna_ashtakvarga",
    schema: bhinnaAshtakvargaSchema,
    description: "Execute bhinnaAshtakVarga AstroChalit API"
  },
  {
    name: "get_sarvashtakvarga",
    method: "POST",
    path: "/sarvashtakvarga",
    schema: birthDetailsSchema,
    description: "Execute sarvashtakvarga AstroChalit API"
  },
  {
    name: "get_dashakoot",
    method: "POST",
    path: "/dashakoot",
    schema: matchmakingSchema,
    description: "Execute dashaKoot AstroChalit API"
  },
  {
    name: "get_ashtakoot",
    method: "POST",
    path: "/ashtakoot",
    schema: matchmakingSchema,
    description: "Execute ashtaKoot AstroChalit API"
  },
  {
    name: "get_manglik_report",
    method: "POST",
    path: "/manglik_report",
    schema: matchmakingSchema,
    description: "Execute manglik_report AstroChalit API"
  },
  {
    name: "get_match_birthchart",
    method: "POST",
    path: "/match_birth_chart",
    schema: matchmakingSchema,
    description: "Execute match_birthChart AstroChalit API"
  },
  {
    name: "get_numerologyreport",
    method: "POST",
    path: "/numerology_report",
    schema: numerologySchema,
    description: "Execute numerologyReport AstroChalit API"
  },
  {
    name: "get_radical_prediction",
    method: "POST",
    path: "/radical_prediction",
    schema: numerologySchema,
    description: "Execute radical_prediction AstroChalit API"
  },
  {
    name: "get_lifepath_prediction",
    method: "POST",
    path: "/lifepath_prediction",
    schema: numerologySchema,
    description: "Execute lifepath_prediction AstroChalit API"
  },
  {
    name: "get_numerology_prediction",
    method: "POST",
    path: "/numerology_prediction",
    schema: numerologySchema,
    description: "Execute numerology_prediction AstroChalit API"
  },
  {
    name: "get_numerologynumbers",
    method: "POST",
    path: "/numerology_numbers",
    schema: numerologySchema,
    description: "Execute numerologyNumbers AstroChalit API"
  },
  {
    name: "get_yogini_sub",
    method: "POST",
    path: "/yogini_sub",
    schema: birthDetailsSchema,
    description: "Execute yogini_sub AstroChalit API"
  },
  {
    name: "get_yogini_maha",
    method: "POST",
    path: "/yogini_maha",
    schema: birthDetailsSchema,
    description: "Execute yogini_maha AstroChalit API"
  },
  {
    name: "get_lalkitab_debts",
    method: "POST",
    path: "/lalkitab_debts",
    schema: birthDetailsSchema,
    description: "Execute lalkitab_debts AstroChalit API"
  },
  {
    name: "get_lalkitab_chart",
    method: "POST",
    path: "/lalkitab_chart",
    schema: birthDetailsSchema,
    description: "Execute lalkitab_chart AstroChalit API"
  },
  {
    name: "get_lalkitab_predictions",
    method: "POST",
    path: "/lalkitab_predictions",
    schema: birthDetailsSchema,
    description: "Execute lalkitab_predictions AstroChalit API"
  },
  {
    name: "get_vimshottari_maha",
    method: "POST",
    path: "/vimshottari_maha",
    schema: birthDetailsSchema,
    description: "Execute vimshottari_maha AstroChalit API"
  },
  {
    name: "get_vimshottari_pratyantar",
    method: "POST",
    path: "/vimshottari_pratyantar",
    schema: vimshottariPratyantarSchema,
    description: "Execute vimshottari_pratyantar AstroChalit API"
  },
  {
    name: "get_vimshottari_sookshma",
    method: "POST",
    path: "/vimshottari_sookshma",
    schema: vimshottariSookshmaSchema,
    description: "Execute vimshottari_sookshma AstroChalit API"
  },
  {
    name: "get_vimshottari_prana",
    method: "POST",
    path: "/vimshottari_prana",
    schema: vimshottariPranaSchema,
    description: "Execute vimshottari_prana AstroChalit API"
  },
  {
    name: "get_vimshottari_antar",
    method: "POST",
    path: "/vimshottari_antar",
    schema: vimshottariAntarSchema,
    description: "Execute vimshottari_antar AstroChalit API"
  },
  {
    name: "get_sadesati_dosha",
    method: "POST",
    path: "/sadesati_dosha",
    schema: birthDetailsSchema,
    description: "Execute sadeSati_dosha AstroChalit API"
  },
  {
    name: "get_kaalsarp_dosha",
    method: "POST",
    path: "/kaalsarp_dosha",
    schema: birthDetailsSchema,
    description: "Execute kaalSarp_dosha AstroChalit API"
  },
  {
    name: "get_pitru_dosha",
    method: "POST",
    path: "/pitru_dosha",
    schema: birthDetailsSchema,
    description: "Execute pitru_dosha AstroChalit API"
  },
  {
    name: "get_manglik_dosha_report",
    method: "POST",
    path: "/manglik_dosha_report",
    schema: birthDetailsSchema,
    description: "Execute manglik_dosha_report AstroChalit API"
  },
  {
    name: "get_varshphal_details",
    method: "POST",
    path: "/varshphal_details",
    schema: varshphalDetailsSchema,
    description: "Execute varshphal_details AstroChalit API"
  },
  {
    name: "get_varshphal_year_chart",
    method: "POST",
    path: "/varshphal_year_chart",
    schema: varshphalDetailsSchema,
    description: "Execute varshphal_year_chart AstroChalit API"
  },
  {
    name: "get_varshphal_month_chart",
    method: "POST",
    path: "/varshphal_month_chart",
    schema: varshphalMonthSchema,
    description: "Execute varshphal_month_chart AstroChalit API"
  },
  {
    name: "get_varshphal_mudda_antar",
    method: "POST",
    path: "/varshphal_mudda_antar",
    schema: varshphalMuddaAntarSchema,
    description: "Execute varshphal_mudda_antar AstroChalit API"
  },
  {
    name: "get_varshphal_mudda",
    method: "POST",
    path: "/varshphal_mudda",
    schema: birthDetailsSchema,
    description: "Execute varshphal_mudda AstroChalit API"
  },
  {
    name: "get_varshphal_saham",
    method: "POST",
    path: "/varshphal_saham",
    schema: varshphalDetailsSchema,
    description: "Execute varshphal_saham AstroChalit API"
  },
  {
    name: "get_varshphal_harsha_bala",
    method: "POST",
    path: "/varshphal_harsha_bala",
    schema: birthDetailsSchema,
    description: "Execute varshphal_harsha_bala AstroChalit API"
  },
  {
    name: "get_get_hora_muhurta",
    method: "POST",
    path: "/hora_muhurta",
    schema: muhurtaSchema,
    description: "Execute get_hora_muhurta AstroChalit API"
  },
  {
    name: "get_get_chaugadiya_muhurta",
    method: "POST",
    path: "/chaugadiya_muhurta",
    schema: muhurtaSchema,
    description: "Execute get_chaugadiya_muhurta AstroChalit API"
  },
  {
    name: "get_get_bala_details",
    method: "POST",
    path: "/get_bala_details/:bala",
    schema: balaSchema,
    description: "Execute get_bala_details AstroChalit API"
  },
  {
    name: "get_compatibility_check",
    method: "GET",
    path: "/compatibility_check",
    schema: compatibilitySchema,
    description: "Execute compatibility_check AstroChalit API"
  },
  {
    name: "get_calculate_ephemeris",
    method: "POST",
    path: "/calculate_ephemeris",
    schema: calculateEphemerisSchema,
    description: "Execute calculate_ephemeris AstroChalit API"
  },
  {
    name: "get_calculate_planet_ingress",
    method: "POST",
    path: "/calculate_planet_ingress",
    schema: calculatePlanetIngressSchema,
    description: "Execute calculate_planet_ingress AstroChalit API"
  },
  {
    name: "get_planet_ingress",
    method: "POST",
    path: "/planet_ingress",
    schema: planetIngressSchema,
    description: "Execute planet_ingress AstroChalit API to get transit/ingress of planets into zodiac signs"
  },
  {
    name: "get_planet_aspects",
    method: "POST",
    path: "/planet_aspects",
    schema: planetAspectsSchema,
    description: "Execute planet_aspects AstroChalit API to get planetary aspects for a month/year"
  },
  {
    name: "get_moon_phases",
    method: "POST",
    path: "/moon_phases",
    schema: moonPhasesSchema,
    description: "Execute moon_phases AstroChalit API to get moon phases for a selected date/month"
  },
  {
    name: "get_hindu_festivals",
    method: "POST",
    path: "/hindu_festivals",
    schema: hinduFestivalsSchema,
    description: "Execute hindu_festivals AstroChalit API to get festivals for a given month and year"
  },
  {
    name: "get_planetary_position",
    method: "POST",
    path: "/planetary_position",
    schema: planetaryPositionSchema,
    description: "Execute planetary_position AstroChalit API"
  },
  {
    name: "get_horoscope",
    method: "GET",
    path: "/horoscope/:signName",
    schema: horoscopeSchema,
    description: "Execute horoscope AstroChalit API"
  },
  {
    name: "get_rudraksha_suggestion",
    method: "POST",
    path: "/rudraksha_suggestion",
    schema: birthDetailsSchema,
    description: "Execute rudraksha_suggestion AstroChalit API"
  },
  {
    name: "get_gemstone_suggestion",
    method: "POST",
    path: "/gemstone_suggestion",
    schema: birthDetailsSchema,
    description: "Execute gemstone_suggestion AstroChalit API"
  },
  {
    name: "get_sun_chart",
    method: "POST",
    path: "/sun_chart",
    schema: birthDetailsSchema,
    description: "Execute sun_chart AstroChalit API"
  },
  {
    name: "get_moon_chart",
    method: "POST",
    path: "/moon_chart",
    schema: birthDetailsSchema,
    description: "Execute moon_chart AstroChalit API"
  },
  {
    name: "get_searchplaceswithname",
    method: "GET",
    path: "/search_place",
    schema: searchPlaceSchema,
    description: "Execute searchPlacesWithName AstroChalit API"
  }
];
