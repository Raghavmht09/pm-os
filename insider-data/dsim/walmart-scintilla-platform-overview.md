# Walmart Scintilla — Platform Overview & DSIM Integration Intelligence
**Formerly known as:** Walmart Luminate
**Prepared:** 2026-04-21
**Relevance:** Scintilla is the single most important external data platform for DSIM. It is Walmart's brand intelligence portal — brands with Scintilla access hold the majority of DSIM's required raw inputs under one credential set.

---

## What Scintilla Is

Walmart's official supplier and brand intelligence platform. Provides brands selling on Walmart.com and in Walmart stores with access to sales performance, shopper behavior, search and shelf data, media campaign data, and field execution metrics. Gated by Walmart — brand access is supplier-invitation based, not self-serve. Not all brands have all modules.

**Key fact for DSIM sales motion:** Brands that already have Scintilla access are pre-qualified for DSIM onboarding — the data is there; they just can't explain the causal story behind it. This is the entry point.

---

## The Six Scintilla Modules

### 1. Channel Performance (Sales + Supply Chain)
*DSIM priority: CRITICAL*

| Data Point | DSIM Use |
|---|---|
| Daily POS sales (units + dollars) by item, store, channel | Core outcome variable for DSIM model |
| In-store vs. e-commerce sales split | Defines model scope (Walmart.com vs. omnichannel) |
| Online pickup, delivery, ship-to-home sales | Channel decomposition in model output |
| Store-level, DC, and fulfillment-center inventory on hand | Inventory constraint input |
| Weeks of supply / stock cover | Supply constraint signal |
| **Out-of-stock rate and on-shelf availability** | **Availability lever input — official Walmart data vs. crawl estimate** |
| **Nil-pick rate** (online orders unable to be fulfilled) | **"Phantom availability" — superior to crawl-based OOS; shows fulfillment gap** |
| OTIF score | Supply chain health control variable |
| PO fill rate and PO status | Upstream supply constraint |
| Demand forecasts (store-level) | Forward-looking control variable |
| Gross margin and unit retail price | Profitability context for iROI framing |
| Velocity (sales per store per week) | Per-cluster benchmark for store-cluster model |

**Key insight:** Nil-pick rate is a signal DataWeave DSA cannot produce — it reflects orders that appeared fulfilled online but failed at the warehouse level. Adding nil-pick to the availability lever makes DSIM's OOS modeling materially more accurate than Lactalis PoC.

---

### 2. Shopper Behavior (Basket + Transaction)
*DSIM priority: MEDIUM-HIGH*

| Data Point | DSIM Use |
|---|---|
| **Household penetration and buyer count** | Enables new-user acquisition attribution in iROI |
| **Repeat rate and purchase frequency** | Baseline demand calibration; separates repeat from incremental |
| Brand loyalty / share of wallet | Competitive context input |
| **Trialist vs. repeat buyer mix** | Split iROI into "new users acquired" vs. "repeat frequency driven" |
| **Brand-switching and source-of-volume** | Official confirmation of halo effects (Lactalis Kids/Baby → Adult) |
| Product substitution patterns | Competitive cannibalisation modeling |
| Basket-pairing / cross-purchase affinity | Cross-sub-brand halo effect validation |
| Assortment overlap and incrementality | Portfolio-level model inputs |
| Category share and competitor share | Competitive shelf context; reinforces DSA SoC |
| Cross-retailer performance benchmarks | DSIM scope note: Walmart-only in Phase 1 |

**Key insight:** Trialist vs. repeat buyer segmentation enables DSIM to report iROI separately for *new user acquisition* and *repeat purchase frequency*. The Lactalis PoC reported aggregate incremental sales — Scintilla Shopper Behavior makes this bifurcation possible.

---

### 3. Customer Perception (Survey + Qualitative)
*DSIM priority: LOW (indirect)*

NPS, satisfaction scores, concept test ratings, purchase intent, packaging/flavor/messaging test scores, verbatim feedback, demographic cuts. Not direct model inputs, but useful for contextualizing why availability or content quality spikes at specific periods.

---

### 4. Digital Landscapes (Pre-Purchase on Walmart.com / App)
*DSIM priority: HIGH*

| Data Point | DSIM Use |
|---|---|
| Search term volume and rank | Supplements DataWeave DSA SoS data with official Walmart data |
| Share of search within category | Reinforces DSA SoS lever |
| **PDP views and impressions** | NEW — top-of-funnel signal; DSIM currently doesn't have this |
| **Click-through rate from search and browse** | Conversion funnel — between SoS and purchase |
| **Add-to-cart rate and cart abandonment** | Conversion funnel intermediate outcome |
| **Conversion rate** | Conversion funnel outcome; splits content/UX impact from media impact |
| Browse path / category navigation | Category-level demand signal |
| **Organic vs. sponsored placement performance** | Directly what DSIM decomposes — official Walmart data vs. model estimate |
| Content quality and PDP attribute coverage | Reinforces DataWeave DSA content compliance module |

**Key insight:** The full conversion funnel (impression → PDP view → add-to-cart → conversion → sale) opens a new model architecture. DSIM currently models shelf KPI → sales. With Scintilla Digital Landscapes, the model gains intermediate outcome variables that decompose *where in the funnel* each lever operates:
- Availability primarily affects add-to-cart (item shown as in stock)
- Content quality primarily affects conversion (PDP convinces)
- Media/SoS primarily affects impressions and CTR
- Pricing affects conversion and add-to-cart

---

### 5. Insights Activation (Audience + Media)
*DSIM priority: HIGH*

| Data Point | DSIM Use |
|---|---|
| Audience segment size and composition | Targeting efficiency context |
| Lapsed buyer, trialist, and loyalist segments | Audience-level iROI segmentation |
| Walmart Connect ad-targeting audiences | Media input data validation |
| **Campaign response and lift metrics** | Supplements Walmart Connect API campaign data |
| **ROAS tied back to in-store + online sales** | Walmart's own attribution — DSIM uses this as input AND produces independent validation |

**Critical positioning note:** Scintilla's Insights Activation gives brands Walmart's official ROAS. This creates the "good enough" objection. Response: Walmart's ROAS is last-touch attribution — it correlates ad spend with sales but cannot remove baseline demand, model shelf constraints, or identify halo effects. DSIM's output is the causal decomposition that explains *why* Scintilla's ROAS is what it is.

---

### 6. Scintilla In-Store (Field Execution, launched 2026)
*DSIM priority: MEDIUM-HIGH*

| Data Point | DSIM Use |
|---|---|
| Store-specific sales and inventory | Official store-level data for cluster model |
| Assigned task completion rate | Field execution health signal |
| **On-shelf availability by store** | Official per-store availability — stronger than crawl-based detection for cluster model |
| Planogram/display compliance | In-store execution control variable |
| **Void detection** | "Ghost inventory" signal — item appears on planogram but isn't on shelf |
| Real-time store alerts | Event detection for model anomalies |

**Key insight for store-cluster model:** Scintilla In-Store provides official Walmart store-level availability and void detection data. The Lactalis PoC used DataWeave crawl data for availability at the cluster level. Scintilla In-Store makes the availability lever in DSIM's store-cluster model significantly more precise.

---

### 7. Category Advisor Feeds
*DSIM priority: MEDIUM*

Category-level sales, share, and growth; on-shelf placement and shelf-share; assortment gaps vs. category benchmark; seasonality and trend indices. Cross-cuts available on most metrics: item/UPC, category/sub-category/department, store/region/market/banner, channel, day/week/period, demographic segments (online).

---

## Scintilla Access Model — What We Know

- **Gated by Walmart:** Access is supplier-invitation based. Not all brands have all modules. Some brands have Channel Performance only; others have full suite access.
- **Formerly Luminate:** The platform was rebranded Scintilla in 2026. References to "Luminate access" in prospect conversations mean the same thing.
- **Access tiers suspected:** Larger brands (P&G, PepsiCo, Unilever) likely have fuller module access. Mid-market brands may have Channel Performance + Digital Landscapes only.
- **API vs. file-based:** [VERIFY — whether Scintilla exposes a programmatic API or is file-export only. Critical for DataWeave's integration architecture decision.]
- **DataWeave partner agreement:** [VERIFY — whether DataWeave can negotiate a partner-level Scintilla data agreement vs. relying on each brand to export and share manually.]

---

## DSIM Positioning vs. Scintilla

| Scintilla Capability | What It Gives Brands | What DSIM Adds |
|---|---|---|
| Channel Performance (ROAS, sales) | What their sales did | Why it happened — which lever drove the increment |
| Digital Landscapes (SoS, conversion) | How search and shelf performed | How much each shelf metric caused sales movement |
| Insights Activation (campaign ROAS) | Walmart's own campaign attribution | Independent causal validation removing baseline and shelf constraints |
| Shopper Behavior (penetration, repeat) | Who bought | Whether media drove new users vs. repeat frequency — and which lever did which |
| Scintilla In-Store (availability, voids) | Where availability failed | How much each availability gap cost in incremental sales |

**One-liner:** "Scintilla tells you what happened. DSIM tells you why — and what to do about it."

---

## Scintilla as DSIM Sales Qualifier

Use Scintilla access as a pre-qualification signal in outbound and inbound motion:

1. **Brands that have Scintilla + have seen their ROAS** → Best entry point. They have the data, they have the question ("why is my ROAS X?"), they're missing the causal layer. Ask: "What does Scintilla tell you about why your ROAS is that number?"

2. **Brands that have Scintilla but haven't fully activated it** → DSIM is the activation use case. They're paying for the data, not using it strategically. Position DSIM as "the analytics layer that makes Scintilla actionable for your RGM team."

3. **Brands that don't have Scintilla** → DSIM can still work with DataWeave DSA + Walmart Connect API + manual sales CSV. Lower data richness, but viable. Use this path for brands where the pain point is strong enough.

---

*Last updated: 2026-04-21 | Source: User-provided Scintilla platform capability overview (April 2026)*
*[VERIFY: Scintilla API access model, DataWeave partner agreement feasibility, module access tiers by brand size]*
