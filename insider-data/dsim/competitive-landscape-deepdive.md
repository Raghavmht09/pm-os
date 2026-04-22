# DSIM Competitive Landscape Deep Dive
**Focus:** Retail Media Incrementality & Digital Shelf Correlation (2025-2026 Movement)
**Last updated:** April 17, 2026
**Data Source:** Live web analysis of recent product releases and market positioning (Q1-Q2 2026)

## Executive Summary
The retail media and digital shelf ecosystem is structurally shifting from **media mix planning** to **media mix automation**, driven by an urgent need for accountability beyond basic Return on Ad Spend (ROAS). 

*Incrementality* is now the undisputed "North Star." Brands are demanding measurement solutions that isolate causal lift from baseline demand and adjust based on real-time factors like inventory, search rank, and pricing. 

Across our primary competitors, the dividing line is now between **activation-heavy incrementality** (where models exist to feed immediate bidding algorithms) and **diagnostic incrementality** (where models provide CFO-ready justification for cross-functional budget allocation).

## Competitor Movements (2025–2026)

### 1. CommerceIQ
*Movement toward DSIM value proposition: **VERY HIGH***

- **The Shift:** Emphasizing "media mix automation" to prevent wasted ad spend on products that would have performed well organically. 
- **Core Incrementality Metric:** **iROAS** (Incremental Return on Ad Spend) and the "Incrementality Factor." 
- **Digital Shelf Integration:** Unlike traditional MMMs, CommerceIQ relies on digital shelf signals, specifically Share of Voice (SOV) weighted by page position, keyword traffic (high-intent vs generic), and search relevance. Their core argument is that ad execution must be "inventory-aware."
- **The AI Push:** They are leaning heavily into "Agentic Retail" via "AllyAI," a suite of AI agents automating corrections on the shelf (fixing content, reporting OOS) when media spend is directed toward a PDP.
- **DataWeave Defensibility vs CommerceIQ:** CommerceIQ's incrementality is intertwined with its activation tools. **DataWeave DSIM** remains the *conflict-by-design* neutral measurement layer. If a CFO asks, "Is CommerceIQ's modeling just justifying more spend on CommerceIQ?" DSIM provides independent attribution without the black-box activation conflict.

### 2. Pacvue
*Movement toward DSIM value proposition: **HIGH***

- **The Shift:** Shifting to purely "outcome-driven" retail media. They recently built out a dedicated **Incrementality Console**.
- **Core Incrementality Focus:** Using multi-variable modeling replacing static formulas. They account for baseline demand, seasonality shifts, halo effects, and "retail readiness" (in-stock rates, Buy Box status).
- **Store-Level/Granular Impact:** They allow granular slicing by brand, ad type, and channel, benchmarking incremental lift across diverse RMNs (Target, Walmart, Amazon, TikTok Shop).
- **DataWeave Defensibility vs Pacvue:** Pacvue still anchors heavily around *which campaign to optimize*. **DataWeave DSIM** allows a broader strategic view, separating media lift from organic shelf dynamics down to the **store-cluster granularity** (a capability Pacvue lacks, as it still largely clusters functionally at the channel or tag level).

### 3. Ascential Edge / NIQ (Flywheel)
*Movement toward DSIM value proposition: **MODERATE - SHIFTING LANDSCAPE***

- **The Shift:** Corporate restructuring has altered the terrain. Ascential plc divested its digital commerce branch (Flywheel Digital) to Omnicom, and Ascential itself was acquired by Informa.
- **Core Incrementality Focus:** The core capability (now fragmented across NIQ and Omnicom’s Flywheel) pushes for accounting for "commerce factors" (search rank, pricing, and availability). 
- **DataWeave Defensibility vs Ascential/Flywheel:** Because Flywheel is now part of an agency holding company (Omnicom) and Ascential is restructured, they face the ultimate "channel conflict." Brands outside the Omnicom ecosystem will inherently distrust the independence of the measurement. **DataWeave DSIM** retains independence, combined with near-real-time digital shelf correlation that heavily legacy-bound NIQ struggles to match.

### 4. Profitero
*Movement toward DSIM value proposition: **MODERATE***

- **The Shift:** Under Publicis ownership, Profitero is pushing deeper into incrementality through measurement partnerships rather than pure in-house causal models. They are increasingly positioning their digital shelf monitoring as the foundational layer *needed* to run accurate incrementality tests, although they prioritize serving the broader Publicis agency ecosystem.

### 5. Incremental.com
*Movement toward DSIM value proposition: **HIGH — Closest threat in measurement-only category***
*Added: April 21, 2026 — surfaced via live web research*

- **What they are:** Purpose-built retail media incrementality measurement platform. No activation. Official **Walmart Connect measurement partner** (April 2025). WPP Media named them their first "agency Connected Partner." Multi-retailer model across 100+ RMNs. Partnerships with Skai (Bayer collaboration awarded I-COM Data Creativity 2025).
- **Core model:** Cross-retailer incrementality measurement using geo-lift, causal inference, and Walmart Connect direct API integration. Measures net-new incremental revenue per campaign.
- **How they measure incrementality:** Campaign-scoped, post-period iROAS using causal inference / holdout methodology. API-driven integration with Walmart Connect data. No shelf-signal integration (availability, SoS, content are not modeled as levers). No store-cluster resolution.
- **Key accounts:** WPP agency ecosystem, Bayer. [VERIFY: current CPG brand reference accounts — incremental.com]
- **Pricing:** Not publicly listed. [VERIFY]

**Why this matters for DSIM:** Incremental.com occupies the "vendor-neutral measurement" space that DSIM targets but without shelf signals. A brand already using Incremental.com will ask: "We already have independent incrementality measurement — why do we need DSIM?" The answer is precise: Incremental.com measures whether your campaign was incremental. DSIM measures whether your campaign was incremental AND whether availability was suppressing the lift AND which shelf lever would have produced more return per dollar. They are campaign-level; DSIM is lever-level.

**Weaknesses vs. DSIM:**
- No shelf-signal integration — availability, SoS, content are not modeled; they are ignored
- National or campaign-level resolution — no store-cluster localization
- Media-only model — cannot decompose across the 6 shelf levers DSIM models
- No methodology published with MAPE/R² equivalents at DSIM's standard
- Cross-retailer generalism vs. DSIM's Walmart-native depth

**Displacement narrative:**
Position as complementary in the short term: "Incremental.com answers 'did it work?' DSIM answers 'why did it work and what constrained it?' Use both if you have both." For competitive displacement: press on shelf-signal gap — "Can Incremental.com tell you how much your 78% in-stock rate was capping the incremental lift they measured? No. DSIM can." Store-cluster localization is the decisive differentiator.

---

## Key Market Dynamics & DSIM Counter-Positioning

1. **The Infrastructure Era:** Retail media has exited its pilot phase. Advertisers are complaining of "silos" between eCommerce Ops (shelf) and Digital Marketing (media). Because CommerceIQ and Pacvue lean primarily toward the media buyer, **DSIM must anchor with the RGM (Revenue Growth Management) persona** as the unifying layer.
2. **Channel Conflict is a Feature, Not a Bug:** As Ascential joins Informa/Omnicom and Profitero pushes Publicis synergies, independent measurement platforms are becoming incredibly rare. The central pitch for DSIM over the activation giants is: "You wouldn't let the student grade their own test."
3. **From ROAS to Granular Business Impact:** Incremental volume, contribution to margin, and net-new acquisition are the demands of 2026. DSIM's ability to model out *Store-Cluster* localization is the ultimate wedge, as competitors are still struggling to move beyond high-level "Retail Readiness" signals into granular geographic/cluster decomposition.

## The Three-Way Competitive Split (Updated April 2026)

The market now has three distinct categories — not two. DSIM must position itself against all three:

| Category | Players | What They Solve | DSIM Differentiation |
|---|---|---|---|
| **Activation-Led** | CommerceIQ, Pacvue | "Optimize my bids right now" | No activation conflict; shelf-native vs. media-native; CFO-ready output |
| **Campaign Measurement** | Incremental.com, Skai | "Did this campaign generate net-new sales?" | Shelf signals as first-class inputs; store-cluster resolution; cross-lever decomposition |
| **Shelf-Native Diagnostic** | DataWeave DSIM | "Which of my 6 shelf + media levers drove sales, and what should I change?" | Uncontested — no competitor in this quadrant |

## Next Steps for DSIM
- We must aggressively push the integration of **"Store-Cluster"** methodology, as competitors like Pacvue and CommerceIQ are heavily integrating shelf metrics (like SOS and Availability) into their incrementality equations, but not at the store-cluster geographic level.
- Formalize the term **"Diagnostic Incrementality"** in our external GTM positioning to counter Pacvue/CommerceIQ's "Activation-led Incrementality."
- **Add Incremental.com to all competitive battlecards** — they are the closest positioning neighbor in the measurement-only space and will come up in deals. Displacement narrative: "Incremental.com answers 'did it work?' DSIM answers 'why did it work and what constrained it?'"
- **Watch Walmart Connect's own measurement build** — Walmart Connect is investing in first-party incrementality ("search incrementality, first-party measurement" per Walmart Connect 2026 content). If Walmart builds this natively into Scintilla's Insights Activation module, it could compress the "independent measurement" argument. DSIM's moat remains: shelf-signal integration + store-cluster localization + vendor neutrality from any retailer-owned tool.
