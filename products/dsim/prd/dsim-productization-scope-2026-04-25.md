# DSIM Productization Scope Definition
**Date:** April 25, 2026
**Status:** PLANNING DOCUMENT — execution begins when PMF gate is hit (2 paying accounts + $150K ARR)
**Input:** Productization discovery Q&A (April 25, 2026) + dsim-productization-discovery-2026-04-21.md
**Audience:** PM, Data Science lead, Engineering lead
**[DRAFT FOR DISCUSSION — all timelines are directional, not committed]**

---

## Context: What the Q&A Confirmed

Before this document, productization scope had several critical unknowns. This section records what the Q&A resolved.

| Question | Answer | Implication |
|---|---|---|
| Where does Robyn run? | **Unknown — need to confirm** | Hold model execution layer scope until confirmed. Slack DS lead: "Where does Robyn run for Lactalis, and who owns the code?" |
| Engineering capacity for DSIM | 1 dedicated engineer + 1 data scientist | Phase 1 achievable in 4–6 months with focused scope. Parallel work not feasible. |
| PMF gate | 2 paying accounts + $150K ARR (confirmed) | Productization FRD is planning-only. Engineering execution starts when gate is hit. |
| Lactalis data onboarding | DSA shelf data automated (Lactalis is prod DSA customer); Walmart Connect partially automated; Scintilla sales data partially manual | DSA shelf data is not the gap. Scintilla automation and model infrastructure are. |
| Delivery timeline | 6–10 weeks (on benchmark) | Phase 1 target: 4 weeks (2 weeks setup + 2 weeks model run + delivery) |
| Biggest pain | BOTH model running/tuning AND output presentation/buy-in | Two parallel Phase 1 priorities, plus one immediate fix (output redesign, no engineering needed) |
| Non-DSA brands | Three paths viable: file-based, API integration with external platform, manual COLAB-style setup | Extend DataWeave's existing COLAB framework to DSIM rather than building net-new |
| MVP output | All four: sales decomposition + explicit reallocation + store-cluster breakdown + confidence intervals | Every delivery must include all four. No partial deliveries. |
| Next PoC fix | Explicit reallocation recommendation first (2 weeks, no engineering) | Do this immediately, before Phase 0 improvement work |

---

## Immediate Actions (Before Phase 0 Improvements — No Engineering Required)

These can be completed in the next 2 weeks and improve the next PoC delivery materially.

### Action 1: Add Explicit Reallocation Output to Tableau Template
**What:** Add a "Recommended Reallocation" section to every DSIM Tableau delivery. Currently DSIM shows iROI by channel and point of diminishing returns. It does NOT explicitly say "move $X/day from Channel A to Channel B."

**The specific fix:**
- Add one Tableau view: "Recommended Reallocation"
- Show: Current budget allocation per channel, Recommended allocation, Expected incremental lift from the change, Confidence interval
- Text callout example: "Moving $22K/day from Onsite Search (0.83 iROI, 63% of budget) to Offsite Display (1.55 iROI, 22% of budget) is estimated to generate +$X in incremental sales within 30 days [95% CI: $X–$Y]."
- Show the saturation ceiling per channel: "Offsite Display can absorb up to $Z/day before hitting diminishing returns."

**Why it matters:** Leadership meeting (April 24) explicitly called out that all three campaign recommendations said "increase spend." The reallocation framing — moving money across channels, not just asking for more — is what Finance and RGM buyers need to justify the engagement.

**Owner:** Data Science + CS
**Timeline:** 2 weeks
**Dependency:** None — this is a Tableau template redesign, not a model change

### Action 2: Confirm Robyn Model Infrastructure
**What:** Slack the Data Science lead who ran Lactalis with:
> "Quick question before an engineering session — where did the Robyn model run for Lactalis, and who owns the code? Specifically: (a) what environment / machine, (b) how long does a full model run take, and (c) is the model code generalized or Lactalis-specific?"

**Why it matters:** The entire Phase 1 model execution scope — and its timeline — cannot be estimated until this is known. If Robyn runs locally on one person's laptop with hardcoded Lactalis assumptions, Phase 1 is 4+ months. If it's partially containerized, Phase 1 is 2 months.

**Owner:** PM
**Timeline:** This week
**Dependency:** None

### Action 3: Scintilla Pre-Qualification for Pipeline Accounts
**What:** Before Bush Brothers, Beiersdorf, or Magic Spoon PoC scoping calls, run the 4-question Scintilla pre-qualification:
1. "Do you currently have Scintilla access?"
2. "Is it Basic or Charter?"
3. "If Charter, which modules are active? (Channel Performance, Digital Landscapes, Insights Activation, Shopper Behavior, Scintilla In-Store)"
4. "What is the data export format — API, BI Link, or Cloud Feeds?"

**Why it matters:** Scintilla Charter = automated sales data path. Scintilla Basic = manual CSV fallback. The PoC scoping call and timeline depend on this answer.

**Owner:** CS / Brian
**Timeline:** Before next pipeline account scoping call

---

## Phase 0 Improvements (Services-Led — Minimal Engineering)

These improvements happen before Phase 1 is formally triggered, using the services-led motion. Goal: increase the number of simultaneous engagements DataWeave can handle from 2–3 to 4–6, and reduce onboarding time from 4+ weeks to 2 weeks.

### P0.1: DSIM Intake Form (COLAB Equivalent)
**What:** A structured digital intake form that collects all DSIM configuration inputs in one step, replacing the current email/spreadsheet back-and-forth.

**Covers:**
- Brand and SKU configuration (reuses DSA COLAB structure where possible)
- Walmart Connect API credentials and campaign mapping
- Scintilla access confirmation and module inventory
- Seasonality and promotional calendar inputs
- Sales data format (Scintilla path vs. CSV fallback)

**Non-DSA brands:** Use DataWeave's existing COLAB framework and file-sharing process (already in place for DSA, PI, and other modules). DSIM-specific shelf data from non-DataWeave tools (Profitero, Stackline) is accepted as a structured CSV export mapped to the COLAB format. No API integration needed for Phase 0.

**Build type:** Form builder / internal tooling. Not customer-facing UI — for CS to use with the brand during the scoping call.
**Engineering effort:** 2–3 weeks
**Dependency:** Robyn infrastructure confirmed (Action 2) — scope the model configuration section of the form only after

### P0.2: Standardized Model Output Package
**What:** A standard Tableau workbook template that includes all four MVP outputs for every delivery:
1. Sales decomposition chart (lever contributions over time + bar chart)
2. Explicit reallocation recommendation (see Immediate Action 1 above)
3. Store-cluster breakdown (cluster map + allocation efficiency table)
4. Confidence intervals on all lever estimates (error bars on decomposition chart)

**Why:** Currently the Tableau delivery is rebuilt per engagement. Standardizing the template cuts delivery time and ensures every PoC is complete to the same standard.
**Engineering effort:** 1–2 weeks (Tableau template work, not platform engineering)
**Dependency:** Immediate Action 1 (reallocation output design)

---

## Phase 1 Scope (Triggered When PMF Gate Is Hit)

**PMF gate:** 2 paying accounts signed + $150K+ total ARR
**Team:** 1 dedicated engineer + data scientist
**Target timeline:** 4–6 months after PMF gate
**Goal:** Cut onboarding from 4+ weeks to 1–2 weeks; enable 6–10 simultaneous engagements; eliminate manual model intervention

### P1.1: Scintilla Cloud Feeds Connector (CRITICAL PATH)
**What:** Build a programmatic connector to Walmart Scintilla's Cloud Feeds delivery mode for Channel Performance data (daily POS sales, in-stock rate, nil-pick rate).

**Why it's the priority:** Scintilla Channel Performance is the highest-value data stream DSIM needs that isn't yet automated. One well-built Cloud Feeds connector covers the sales data stream for every Charter-tier brand — replacing the current partially-manual Scintilla export process.

**Architecture:**
- Cloud Feeds: cloud-to-cloud data sync (launched Feb 2025); covers Channel Performance tables; no per-API-call latency
- Credential model: Brand creates "Third Party Analytics Data Platform" account in Retail Link → Supplier One → Apps & Integrations; shares Cloud Feeds connection credentials with DataWeave
- Alternative: DataWeave pursues Walmart Data Ventures partner agreement (one agreement = API access across multiple brands — pursue in parallel with Phase 1 engineering)

**Engineering effort:** 3–5 weeks (Cloud Feeds path; BI Link fallback adds 1 week)
**Dependency:** Scintilla pre-qualification results from Phase 0 (P0, Action 3) — need at least 2 Charter-tier accounts to justify build

### P1.2: Model Execution Pipeline (CRITICAL PATH — scope after Robyn confirmed)
**What:** Containerize and automate the Robyn Bayesian MMM model so it can run on any new brand dataset without manual expert intervention.

**Scope (estimated — subject to Robyn infrastructure confirmation):**
- Containerize Robyn model run (R → Docker)
- Define standard input schema (what format the model expects from the DSIM intake form)
- Automate PCA factor derivation where possible (currently manual per engagement)
- Scheduled model execution (trigger on data receipt + configuration complete)
- Model output validation step (automated check: does output pass quality thresholds before delivery?)

**Engineering effort:** 6–10 weeks (if model is currently local/uncontainerized) OR 2–4 weeks (if partially containerized)
**Dependency:** Action 2 (Robyn infrastructure confirmed) — do not scope this until known

### P1.3: Walmart Connect API Continuous Ingestion Pipeline
**What:** Extend Saurabh Sharma's May 2025 API research into a production ingestion pipeline for Walmart Connect campaign data.

**Why continuous matters:** Walmart Connect API supports only 30–90 days of historical data retrieval. DSIM needs 180 days minimum for seasonal modeling. DataWeave must build a continuous warehouse ingestion pipeline from Day 1 of each engagement — not just pull historical data at PoC start.

**Covers:**
- OAuth 2.0 authentication pipeline (Client ID + Client Secret → Bearer token with auto-refresh)
- Stats API ingestion: impressions, clicks, spend, attributed sales, halo sales, ROAS, CVR
- Campaign hierarchy ingestion: account → campaigns → ad groups → ad items → keywords → placements → stats
- Local data warehouse with 18-month rolling window

**Engineering effort:** 4–6 weeks (foundation exists from Saurabh Sharma's research)
**Pre-check:** Confirm with Saurabh Sharma (a) whether any prototype/integration work followed his May 2025 research, (b) rate limits per endpoint, (c) whether DataWeave has a registered developer account on developer.walmart.com

### P1.4: DSIM Account Setup Wizard (Web Form)
**What:** Upgrade the Phase 0 intake form (P0.1) from a CS-managed spreadsheet to a brand-facing web form that brands can fill out themselves, reducing CS mediation.

**Covers:** All Section A–F inputs from the productization discovery document (brand/SKU config, Walmart Connect credentials, Scintilla access, sales data format, seasonality/promo calendar, sub-brand halo mapping)
**Engineering effort:** 3–4 weeks
**Dependency:** P0.1 (intake form spec validated in services-led engagements before building the web version)

---

## Phase 2 Scope (12–18 months, post-PMF stabilization)

*Scope summary only — detailed design deferred.*

| Item | Description |
|---|---|
| Native DSIM dashboard | Replaces Tableau delivery; brand-facing UI with always-on model view |
| Model refresh automation | Quarterly re-run triggered automatically; weekly for premium tier |
| Profitero file integration | File-based shelf data path for non-DataWeave DSA brands using Profitero |
| Reallocation simulator | "What if I move $X from Channel A to B?" interactive tool |
| Multi-retailer (Kroger) | Second retailer using 84.51° data — feasibility confirmed, scope deferred |
| Walmart Data Ventures partner program | One partner agreement vs. per-brand credentials |

---

## Minimum Viable Output — Every DSIM Delivery

Every DSIM engagement must deliver all four of these outputs. No partial deliveries.

| Output | Format | What it answers |
|---|---|---|
| Sales decomposition chart | Tableau: lever contributions over time + waterfall bar chart | "Which of my 6 shelf and media levers drove incremental Walmart sales, and by how much?" |
| Explicit reallocation recommendation | Tableau: current allocation → recommended allocation → expected lift + CI | "Where should I move my budget to maximize incremental return within my current total spend?" |
| Store-cluster breakdown | Tableau: cluster map + allocation efficiency table per cluster | "Which of my 17 store clusters are under-allocated or over-allocated relative to their media response?" |
| Confidence intervals on all lever estimates | Tableau: error bars on all decomposition values | "How confident is this estimate? What's the range the Finance team can defend?" |

---

## What This Document Is Not

This is a planning document for when the PMF gate is hit. It is not:
- A committed engineering roadmap — no sprint allocation or hire decisions have been made
- A product spec — the FRD (Functional Requirements Document) should be written as a separate deliverable once Phase 1 is triggered and Robyn infrastructure is confirmed
- A services delivery guide — the Tableau template improvements (Immediate Action 1) are separate from this document

---

*Prepared: April 25, 2026 | Based on: productization discovery Q&A (April 25, 2026), dsim-productization-discovery-2026-04-21.md, leadership transcript (April 24, 2026)*
*Next update: after Robyn infrastructure is confirmed (Action 2); after first two PoC accounts sign*
*[DRAFT FOR DISCUSSION — engineering estimates are directional only]*
