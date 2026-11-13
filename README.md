# AstroChalit MCP Server

[![npm version](https://img.shields.io/npm/v/astrochalit-mcp.svg)](https://www.npmjs.com/package/astrochalit-mcp)
[![npm downloads](https://img.shields.io/npm/dm/astrochalit-mcp.svg)](https://www.npmjs.com/package/astrochalit-mcp)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

Official Model Context Protocol (MCP) server for the **AstroChalit / Vedic Astrology API** suite.

This server allows AI assistants (like **Claude Desktop**, **Cursor**, **Windsurf**, and any MCP-compliant client) to natively query real-time Vedic astrology calculations, horoscopes, Kundli (natal birth charts), Panchang, matchmaking, Dashas, and Numerology directly via natural language.

- **NPM Package**: [https://www.npmjs.com/package/astrochalit-mcp](https://www.npmjs.com/package/astrochalit-mcp)
- **API Documentation & Keys**: [https://www.vedicastrologyapi.com](https://www.vedicastrologyapi.com)

---

## Prerequisites

- **Node.js**: v18.0.0 or higher
- **AstroChalit / VedicAstrologyAPI Key**: Get an API key from [vedicastrologyapi.com](https://www.vedicastrologyapi.com)

---

## Installation & Configuration

### 1. Claude Desktop

1. Open your Claude Desktop configuration file:
   - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

2. Add `astrochalit` to your `mcpServers` configuration:

```json
{
  "mcpServers": {
    "astrochalit": {
      "command": "npx",
      "args": ["-y", "astrochalit-mcp"],
      "env": {
        "ASTROCHALIT_API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}
```

3. Restart Claude Desktop.

---

### 2. Cursor (AI Code Editor)

1. Navigate to **Cursor Settings** &rarr; **Features** &rarr; **MCP Servers**.
2. Click **+ Add New MCP Server**.
3. Fill in the details:
   - **Name**: `astrochalit`
   - **Type**: `command`
   - **Command**: `npx -y astrochalit-mcp`
4. Set the environment variable `ASTROCHALIT_API_KEY=YOUR_API_KEY_HERE`.

---

## Example Usage Prompts

Once configured, simply talk to your assistant in natural language:

- *"What is today's horoscope for Aries?"*
- *"Calculate the Lagna and Navamsha chart for someone born on 15 August 1995 at 14:30 in New Delhi, India."*
- *"Calculate the Sun chart (Surya Kundli) and Moon chart (Chandra Kundli) for birth details 15 August 1995 at 14:30 in New Delhi."*
- *"Check marriage compatibility between a male born 12-05-1992 in Mumbai and a female born 24-08-1994 in Pune."*
- *"What are the current Chaughadiya and Rahu Kaal timings for Delhi today?"*
- *"Calculate the current Vimshottari Dasha period for my birth details."*
- *"Generate a complete numerology reading for John Doe born on 1990-11-20."*

Your assistant will automatically select and call the appropriate tool, fetch the accurate astronomical and astrological calculation, and provide an insightful response.

---

## Available Tools (Over 80+ Astrology Endpoints)

This MCP server provides comprehensive access across the full Vedic astrology system:

### 1. Horoscopes & Daily Predictions
- `get_horoscope` - Daily, weekly, monthly, and yearly horoscopes for all 12 signs.

### 2. Panchang & Muhurtas
- `get_panchang` - Tithi, Vaar, Nakshatra, Yoga, Karana, Sunrise, Sunset.
- `get_chaugadiya_muhurta` - Auspicious and inauspicious daytime and nighttime periods.
- `get_hora_muhurta` - Hourly planetary planetary rulerships.
- `get_hindu_festivals` - Upcoming Hindu calendar festivals and tithis.

### 3. Birth Charts & Divisional Charts (Vargas)
- `get_divisional_chart_d1` (Lagna Chart / Rashi)
- `get_divisional_chart_d2` (Hora - Wealth)
- `get_divisional_chart_d3` (Drekkana - Siblings)
- `get_divisional_chart_d7` (Saptamsha - Children)
- `get_divisional_chart_d9` (Navamsha - Marriage & Dharma)
- `get_divisional_chart_d10` (Dashamsha - Career & Profession)
- `get_divisional_chart_d12` through `get_divisional_chart_d60` (Shashtiamsha)
- `get_sun_chart` (Surya Kundli / Sun as Ascendant - Soul, Vitality, Authority, Career)
- `get_moon_chart` (Chandra Kundli / Moon as Ascendant - Mind, Emotions, Transit Gochar Reference)

### 4. Matchmaking & Compatibility (Kundli Milan)
- `get_ashtakoot` - 36-point Guna Milan matching analysis.
- `get_dashakoot` - South Indian 10-koota compatibility analysis.
- `get_manglik_report` - Manglik Dosha detection and cancellation rules.
- `get_compatibility_check` - Zodiac sign harmony and relationship advice.
- `get_match_birthchart` - Comparative birth chart analysis.

### 5. Dashas (Planetary Periods)
- `get_current_vdasha` & `get_current_vdasha_all` - Current Vimshottari Mahadasha, Antardasha, and Pratyantardasha.
- `get_major_vdasha` - Complete lifetime planetary periods.
- `get_chardasha_current` & `get_major_chardasha` - Jaimini Char Dasha periods.
- `get_yoginidasha_major` - Yogini Dasha timings.

### 6. Numerology
- `get_numerologyreport` - Complete numerology report (Radical, Destiny, Name numbers).
- `get_numerologynumbers` - Core numerological vibratory numbers.
- `get_lifepath_prediction` - Life path guidance and career insights.
- `get_radical_prediction` & `get_numerology_prediction` - Year and destiny predictions.

### 7. Planetary Mechanics & Transits (Gochar)
- `get_planetary_position` - Exact degrees, nakshatras, retrogrades, and speeds of all planets.
- `get_planet_ingress` - Planetary transits into zodiac signs.
- `get_planet_aspects` - Planetary aspects and drishti.
- `get_moon_phases` - Moon phases and lunar illumination.
- `get_bhinnaashtakvarga` & `get_sarvashtakvarga` - Ashtakvarga bindu calculations.

### 8. Dosha Analysis & Astrological Remedies
- `get_kaalsarp_dosha` - Kaal Sarp yoga presence, type, and remedies.
- `get_sadesati_dosha` - Saturn's 7.5 year transit phases and status.
- `get_pitru_dosha` - Ancestral affliction analysis.
- `get_gemstone_suggestion` & `get_rudraksha_suggestion` - Personalized gemstone and rudraksha recommendations based on planetary strength.

---

## Local Development

If you want to run or extend the server locally:

```bash
# 1. Clone the repository
git clone https://github.com/subham-poulima/Astroavastha_api.git

# 2. Enter MCP directory
cd Astroavastha_api_mcp

# 3. Install dependencies
npm install

# 4. Build TypeScript
npm run build

# 5. Run locally
ASTROCHALIT_API_KEY=your_key node build/index.js
```

---

## License

ISC License. Built for the developer and AI community by [AstroChalit](https://www.vedicastrologyapi.com).
