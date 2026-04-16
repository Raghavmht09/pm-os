# Competitor Profiles Index
Last updated: 2026-04-06

This folder contains per-competitor intelligence profiles for DataWeave's primary competitive landscape. Profiles are generated and maintained by `/competitor-analysis [company]`. Do not edit profiles manually — run the skill to refresh.

---

## Primary Competitors

| Company | Focus Area | Competes With | Profile | Last Updated |
|---|---|---|---|---|
| **Profitero** | Pricing Intelligence, Digital Shelf Analytics | Pricing Intelligence, Digital Shelf | [profitero.md](profitero.md) | [run /competitor-analysis Profitero] |
| **Salsify** | Product Experience Management, Content Syndication | Content Analytics, Attribute Extraction | [salsify.md](salsify.md) | [run /competitor-analysis Salsify] |
| **Syndigo** | Content Management, Digital Commerce | Content Analytics, Content Optimization | [syndigo.md](syndigo.md) | [run /competitor-analysis Syndigo] |
| **Intelligence Node** | Pricing Intelligence, Competitive Analytics | Pricing Intelligence, Assortment Analytics | [intelligence-node.md](intelligence-node.md) | [run /competitor-analysis "Intelligence Node"] |
| **42Signals** | Retail Analytics, eCommerce Intelligence | Digital Shelf Analytics, Pricing Intelligence | [42signals.md](42signals.md) | [run /competitor-analysis 42Signals] |

## DSIM-Specific Competitors
Surfaced from `insider-data/battlecards/DSIM_Competitive_BattleCards_1.pptx` (April 2026). These compete specifically on the Digital Shelf Impact Measurement / Walmart incrementality pitch.

| Company | Threat Level | Competes On | Profile |
|---|---|---|---|
| **CommerceIQ** | HIGH — closest 1:1 match | iROAS optimization + digital shelf | [run /competitor-analysis CommerceIQ] |
| **Ascential Edge / NIQ** | HIGH | Digital commerce analytics + NIQ POS data | [run /competitor-analysis "Ascential Edge"] |
| **Pacvue** | MEDIUM | Walmart Connect activation + measurement layers | [run /competitor-analysis Pacvue] |
| **Skai (ex-Kenshoo)** | MEDIUM | Retail media + incrementality experimentation | [run /competitor-analysis Skai] |
| **Analytic Partners** | STRUCTURAL | MMM / CFO-level measurement conversation | [run /competitor-analysis "Analytic Partners"] |
| **Walmart Connect** | SPECIAL CASE | Free first-party incrementality — narrow but deterministic | [no profile needed — monitor Walmart Luminate updates] |

## Adjacent / Emerging Competitors
[Add competitors as they appear in customer conversations or deal evaluations]

| Company | Why Relevant | Date First Mentioned |
|---|---|---|
| [company] | [context] | [date] |

---

## How to Use This Folder

- **Before a competitive deal:** Run `/competitor-analysis [company]` to get a fresh profile with sales battlecard TL;DR
- **After a customer mentions a competitor:** Check if a profile exists here; if > 60 days old, refresh it
- **Before quarterly roadmap planning:** Review all 5 primary profiles for gap analysis inputs

## Staleness Policy
Profiles older than 60 days should be treated as unverified. Key sections that decay fastest:
- Pricing (changes with market conditions)
- Recent product launches (check LinkedIn + their blog)
- G2 ratings and review themes (update quarterly)
