# AstroChalit MCP Server

This is a Model Context Protocol (MCP) server that provides AI assistants (like Claude Desktop and Cursor) native access to the **AstroChalit API**.

By installing this MCP server, your AI assistant can automatically pull real-time Vedic astrology data, including daily horoscopes for any zodiac sign.

## Prerequisites

- Node.js (v18 or higher)
- An active AstroChalit API Key

## Installation & Configuration

### For Claude Desktop

1. Open your Claude Desktop configuration file:
   - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`

2. Add the `astrochalit` server to your `mcpServers` object. Replace `YOUR_API_KEY_HERE` with your actual AstroChalit API key:

```json
{
  "mcpServers": {
    "astrochalit": {
      "command": "npx",
      "args": ["-y", "astrochalit-mcp-server"],
      "env": {
        "ASTROCHALIT_API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}
```

3. Restart Claude Desktop.

## Usage

Once configured, simply ask Claude to use the tool. For example:
- *"What is the daily horoscope for Aries?"*
- *"Can you get the horoscope for Leo and summarize the career advice?"*

Claude will automatically execute the `get_horoscope` tool, fetch the real-time data from the AstroChalit backend, and provide you with a personalized response.

## Development

If you want to run this server locally from the source code:

1. Clone the repository
2. Run `npm install`
3. Run `npm run build`
4. Test the execution: 
   ```bash
   ASTROCHALIT_API_KEY=test_key node build/index.js
   ```

## Available Tools

This MCP server dynamically registers our suite of astrology tools by directly mirroring the AstroChalit backend endpoints.

Key tool categories include:
- **Horoscope**: `get_horoscope`
- **Panchang & Muhurta**: `get_panchang`, `get_chaugadiya_muhurta`, `get_hora_muhurta`
- **Matchmaking (Ashtakoot & Dashakoot)**: `get_ashtakoot`, `get_dashakoot`, `get_match_birthchart`
- **Divisional Charts**: `get_divisional_chart_d1` through `get_divisional_chart_d60`
- **Varshphal (Annual)**: `get_varshphal_details`, `get_varshphal_year_chart`, `get_varshphal_month_chart`, etc.
- **Doshas**: `get_manglik_report`, `get_sadesati_dosha`, `get_kaalsarp_dosha`, `get_pitru_dosha`
- **Numerology**: `get_numerologyreport`, `get_numerologynumbers`, `get_lifepath_prediction`
- **KP Astrology**: `get_kp_planets`, `get_kp_house_cups`, `get_kp_significators`
- **Planetary Calculations**: `get_planetary_position`, `get_planet_aspects`, `get_moon_phases`
- **Remedies**: `get_rudraksha_suggestion`, `get_gemstone_suggestion`

Most tools require a standard set of parameters including `day`, `month`, `year`, `hour`, `minute`, `second`, `latitude`, and `longitude`. Matchmaking tools require these details for both male (`m_day`, etc.) and female (`f_day`, etc.).
