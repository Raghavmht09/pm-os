# Competitor Integration Data Flows — Research
**Last updated:** 2026-05-07
**Research question:** What data points flow through competitor integrations (PIM systems like Salsify; DSP platforms like Amazon/Walmart/Pacvue)? API or file-based? What do competitors do with the data downstream?
**Sources:** pacvue.com/blog (May 2026), profitero.com/product/shelf-intelligent-media (May 2026), salsify.com/salsify-partner/profitero (May 2026), stackline.com/beacon (May 2026)

---

## Integration Pattern 1: PIM → DSA Competitor (Salsify → Profitero)

### What flows: Salsify → Profitero
- **Master product content attributes:** titles, descriptions, bullet points, images, rich media (A+/enhanced content), videos
- **Standard supply chain, marketing, and ecommerce attributes** globally
- **Purpose:** Salsify master data becomes Profitero's reference benchmark for content compliance scoring

### What Profitero does with it downstream
- Compares Salsify master vs. crawled retailer PDP → generates compliance score
- Flags "overwritten/degraded" content: retailer changed title, swapped images, stripped bullets
- Integrated brand compliance reports per PDP, per retailer, per attribute
- Supports "set it and forget it" monitoring: brand maintains Salsify once, Profitero audits continuously

### What flows back: Profitero → Salsify
- Content performance signals: which content versions correlate with better traffic/conversion/sales
- Flagged gaps for remediation (compliance failures flagged for content team to fix in PIM)
- Compliance reports integrated back into Salsify workflow

### Integration type
- **API-based** — Salsify is an API-first platform; confirmed integration partner
- **Bidirectional** — content spec flows from Salsify to Profitero; compliance + performance signals flow back

### DataWeave equivalent + gap
- DataWeave has a **read-only Salsify integration** (existing, per GeekSpeak discovery calls)
- Gap: DataWeave's integration is read-only consumption; Profitero's is bidirectional with closed-loop compliance reporting back into PIM
- DataWeave's COLAB is the equivalent of the "reference standard" that Salsify provides to Profitero — but COLAB is manually maintained by customer/agency, not auto-pulled from PIM

---

## Integration Pattern 2: DSA Competitor → DSP Activation (Profitero SIM → Pacvue)

**This is the most mature and operationally sophisticated integration found.**

### What it is
Profitero Shelf Intelligent Media (SIM) — shelf data signals automatically trigger bid/budget changes in Pacvue (retail search) and major DSPs (programmatic).

### Specific shelf signals flowing Profitero → Pacvue
| Signal | Trigger condition | Automated action in Pacvue |
|---|---|---|
| **Competitor ASIN OOS** | Competitor goes out of stock on a retailer | Automatically increase ad bids + budgets to capture orphaned demand |
| **Competitor price drop** | Competitor lowers price (unfavorable price gap) | Reduce bids / shift budget defensively |
| **Competitor price increase** | Competitor raises price (favorable gap) | Increase bids aggressively |
| **Competitor promotion active** | Competitor running discount promo | Adapt bidding strategy, increase defensive spend |
| **Own Buy Box lost** | Brand loses Buy Box on Amazon | Trigger bid adjustment rules or pause certain spend |
| **Own "Best Seller" badge earned** | Product earns Best Seller, #1 New Release badges | Bid up to protect high-visibility position |

### Integration type and mechanics
- **API-based** — Profitero shelf data "integrated directly into Pacvue platform"
- **Unidirectional** — shelf signals flow from Profitero to Pacvue; no confirmed reverse flow
- **Update frequency:** Daily (80M+ products updated daily; automated rules execute daily)
- **Claimed data accuracy:** 95%

### Three delivery modes for SIM
1. **SIM Search via Pacvue** — Retail search bid optimization (Amazon Sponsored Products, Walmart Connect search)
2. **SIM Search via Skai** — Same shelf signals, routed through Skai platform instead
3. **SIM Programmatic** — Direct DSP integration for programmatic (display, video) campaigns

### Supported platforms
Amazon, Walmart Connect, major DSPs (unnamed). Confirmed: Pacvue + Skai as named partners.

### Published performance claims
- 20–55% lower CPC
- 15–50% higher ROAS
- Kraft Heinz Philadelphia cream cheese: 28% increase in new-to-brand buyers, 25% more ad-attributed sales

### DataWeave gap assessment
- DataWeave has **no equivalent activation layer.** DSA provides the shelf signal (SoS, OOS, competitor pricing) but **no automated connection to any DSP or bid management platform exists.**
- A Profitero customer can set: "When competitor X goes OOS on Walmart.com, automatically increase my Walmart Connect bids by 20%." DataWeave users must monitor DSA manually and make bid adjustments themselves.
- Closing this gap requires: formal Pacvue or Skai integration partnership + API connection to push DataWeave shelf signals into the platform

---

## Integration Pattern 3: Retailer Data → DSA Platform (Stackline Beacon)

**Different architecture — Stackline internalizes retail data rather than connecting to external DSPs.**

### What flows: Amazon Seller Central → Stackline Beacon
- SKU-level sales history (units sold, revenue, category rank)
- Inventory levels (current stock, days of supply)
- Advertising performance data (spend, impressions, clicks, attributed sales by campaign, keyword, ASIN)
- **Update frequency:** Daily (real-time for some signals)

### What Stackline does with it
- ML model ingests full history → generates 52-week SKU-level demand + inventory forecasts
- Scenario planning: user edits assumptions (ad budget, promo plan) → model recalculates projected sales
- Advisor AI layer ingests forecast + review sentiment → generates "what to do next" recommendations

### Additional API connections
- **Walmart API:** SKU sales history + ad data (less deep than Amazon)
- **Target API:** SKU sales history + ad data (confirmed, depth unverified)

### Key difference from Profitero SIM
| Dimension | Profitero SIM | Stackline Beacon |
|---|---|---|
| Loop type | Open loop → **Automated execution** in DSP | Closed data loop → **Advisory** only (human acts) |
| Shelf signal use | Triggers automatic bid rule changes in Pacvue/DSPs | Feeds forecast model + Advisor recommendations |
| User required? | No — rules fire automatically | Yes — user must act on recommendations |
| Latency | Rules execute same day as signal | Advisor surfaces recommendation; user decides timing |

---

## Integration Pattern 4: NIQ ↔ Skai (Dec 2024 Alliance)

**Newer, less documented.**

### What flows: NIQ → Skai
- NIQ POS data (Scantrack/Omnisales) as incrementality measurement input
- Purpose: improves Skai's retail media attribution models with NIQ's in-store sales data
- Enables "closed-loop" measurement: Skai manages media → NIQ measures if it actually shifted market share

### What flows: Skai → NIQ
- Retail media performance data
- Used to enrich NIQ's omnichannel view (online ad spend + offline sales in same dashboard)

### Current maturity
- Alliance announced December 2024
- Digital shelf data integration into Skai's Impact Navigator: **not confirmed as shipped** as of April 2026 (per Skai profile in competitor-profiles/skai.md)

---

## Summary Table: Integration Types Across Competitors

| Competitor | PIM Integration | DSP/Media Activation | Retail Data APIs | Integration Pattern |
|---|---|---|---|---|
| **Profitero** | Salsify (bidirectional, API) | Pacvue + Skai (shelf signals → auto bid rules) | Amazon, Walmart, 700+ retailers crawled | **Most complete: PIM input + media activation output** |
| **Stackline** | None documented | None (advisory, not automated) | Amazon Seller Central (primary), Walmart, Target | **Retail data ingestion → internal forecast + recommendations** |
| **NIQ Digital Shelf** | Brandbank (owned PIM/content library) | Perpetua (owned retail media platform); Skai alliance (Dec 2024, maturity unclear) | 1,000+ retailers crawled | **PIM-native (Brandbank) + owned activation (Perpetua)** |
| **DataWeave** | Salsify read-only (existing) | None | COLAB-configured per account | **Gap: no activation output; PIM integration is read-only** |

---

## Implications for DataWeave Roadmap + Positioning

### Immediate (no product work)
- DataWeave can frame its SKAI reseller relationship as "shelf data already flows to media activation via SKAI" — this is technically true but not the same as a real-time automated trigger system
- In any RFP that asks about integrations: lead with API/CSV export, Salsify read-only, and SKAI reseller rather than conceding the entire dimension

### 6–12 month BD priority
- **Pacvue formal partnership** is highest value: most brands already use Pacvue; Profitero's SIM via Pacvue is the integration competitors cite most. DataWeave connecting shelf signals (OOS, competitor OOS, SoS drop) to automated Pacvue bid rules would directly match Profitero's strongest integration proof point.
- **Salsify bidirectional upgrade**: existing read-only Salsify integration → bidirectional (compliance reports back to Salsify) closes the PIM integration gap vs. Profitero's Salsify story

### What to not pursue
- Building an owned DSP/activation layer (like NIQ with Perpetua) — wrong level of investment for DataWeave's current stage
- Amazon Seller Central API integration (Stackline pattern) — this requires brands to give DataWeave access to their Seller Central. High bar for trust, high implementation cost. Start with shelf signal → DSP activation (Profitero SIM pattern) instead.
