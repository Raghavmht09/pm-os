# Pacvue — Competitor Profile
**Threat level:** MEDIUM-HIGH
**Last updated:** April 2026
**Research method:** Live web verification (April 2026)
**Sources:** pacvue.com (product pages, blog, 2025 Year in Review), enterprisetimes.co.uk, adexchanger.com, walmartconnect.com, atom11.co (pricing), GetLatka (revenue), G2 (review snippets)

---

## Company Overview
- **Ownership:** Acquired by Assembly (global marketing services, private equity-backed)
- **Revenue:** ~$104.4M (2024, third-party estimate, GetLatka)
- **Scale:** 70,000+ brands and agencies, 100+ marketplaces
- **Gartner:** Not in any Gartner Magic Quadrant as of May 2025
- **CEO (since Sept 2024):** Rahul Choraria (former COO, PE background via Advent International + Vista Equity)
- **CRO (since May 2025):** Ross McNab (from Vistar Media, T-Mobile acquired Vistar for $650M in Jan 2025)
- **CPO (since May 2025):** Sunava Dutta (promoted internally)

## Product Architecture
Commerce Operating System — activation-first:
- Sponsored Ads (Amazon, Walmart, Target, Instacart, 100+ RMNs)
- Onsite + Offsite Display management
- Incrementality Console (launched Sept 2024)
- Market & Competitive Intelligence
- Data-as-a-Service

## Incrementality Console — September 2024 (Amazon-First)
**Key finding: launched Amazon-only and Walmart not confirmed equivalent as of April 2026.**

Quote from launch announcement: *"At launch, Pacvue iROAS is available across Amazon, with retailers to be added over the coming months."*

**Methodology:** Multi-variable modeled — accounts for baseline demand, seasonality, pricing/promotional activity, inventory signals. **NOT geo-lift or holdout.** Entirely observational/modeled. Bundled within platform — not sold standalone.

**Signal source:** AMC (Amazon Marketing Cloud) data for Amazon. For Walmart: reliant on Walmart Connect API closed-loop attribution (national/online by default).

**No shelf-signal integration in incrementality model.** Content quality, SoS, competitive pricing are not modeled as incrementality variables. Inventory is listed as one signal but not as a surfaced output.

**No store-cluster or geographic granularity confirmed.** No documentation of geo-lift testing, regional attribution, or Walmart store-cluster analysis.

## Walmart-Specific Capabilities (2025-2026)
| Capability | Status |
|---|---|
| Walmart Connect Premium+ Partner | ✅ Active |
| Sponsored Search + Display management | ✅ (Display launched Feb 2025 as Walmart Display API beta partner) |
| iROAS measurement on Walmart | ❌ Amazon-first; Walmart equivalence unconfirmed |
| Scintilla data integration | ❌ No evidence found |
| Store-cluster attribution | ❌ No documentation |

**Context:** Walmart launched its own native Search Incrementality (April 2025) using first-party randomized control testing. This positions Walmart's tool above Pacvue's modeled layer for Walmart-specific media measurement.

## Pricing Signals
**No public pricing.** Custom enterprise contracts.
- Third-party estimates: ~$500/month SMB floor; $3,000–$5,000/month for agencies managing $500K+/month spend (atom11.co, 2025)
- Contract structure: annual with 2-4 week onboarding
- Revenue implies enterprise-centric: $104M / 70,000 brands implies very low average across all tiers, suggesting a long tail of small advertisers and large enterprise ACV driving revenue

## Customer Sentiment (G2)
- 15 reviews total, 4.3/5 stars (April 2026 — notably low review count for 70K+ brand claim)
- G2 snippet: "Users consistently praise reporting features and automation capabilities"
- No specific measurement complaints confirmed (small sample; full review text requires authentication)
- [VERIFY: g2.com/products/pacvue for detailed complaint themes, especially Walmart measurement]

## Named Customers (2025-2026)
| Brand | Evidence | Walmart-Specific? |
|---|---|---|
| Duracell | $1M+ Amazon vendor fee recovery | No — Amazon |
| Mars (via WPP) | +155% sales growth in KSA | No — Saudi Arabia |
| Panasonic (via Channel Bakers) | +33% iROAS with Profitero SIM integration | No — Amazon |
| Colgate | +275% Prime Day sales | No — Amazon |
| "Leading Energy Drink Brand" | +138% media sales lift on Walmart Connect | Yes (anonymous) |
| "Fashion Advertiser" (via KINESSO) | +20% ad-attributed sales on Walmart Connect | Yes (anonymous) |

**No named U.S. CPG brand with a public Walmart incrementality success story as of April 2026.**

## DSIM Displacement Narrative
1. **Walmart incrementality gap:** "Pacvue's iROAS launched Amazon-first. For your Walmart Connect question, you're still relying on Pacvue's modeled layer or Walmart's own attribution — neither is vendor-neutral or store-cluster-level."
2. **Store-cluster:** "Pacvue can tell you your national Walmart Connect ROAS. DSIM tells you which of your 17 store clusters had wasted spend because availability was running below 80% during your campaign windows."
3. **Don't compete on activation:** DSIM is the diagnostic layer that makes Pacvue's execution better. Target RGM/Finance — not the media ops buyer Pacvue owns. "Pacvue executes the campaign. DSIM tells you whether the shelf was ready for it."

## DSIM Competitive Risks from Pacvue
- 70,000+ brands means broad market reach and account penetration
- Assembly (PE owner) likely to push measurement product investment to defend vs. CommerceIQ
- Walmart Display API beta partner status shows deep Walmart activation integration
- If they achieve geo-lift/holdout capability on Walmart, the measurement story improves significantly

---
*Profile maintained by PM OS | /competitor-analysis Pacvue to refresh*
