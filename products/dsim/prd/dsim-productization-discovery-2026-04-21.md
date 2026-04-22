# DSIM Productization Discovery
## Required Inputs, Account Setup Model, and Gap Analysis vs. DSA

**Date:** 2026-04-21
**Last updated:** 2026-04-21 (Scintilla integration addendum)
**Status:** DISCOVERY DRAFT — for internal PM/Engineering alignment
**Author:** PM OS (for discussion)
**Scope:** What a brand must provide to set up DSIM in a production environment, mapped against DSA's existing COLAB/account setup pattern, with gap analysis and productization requirements.

> **April 21 update:** Walmart rebranded Luminate as **Scintilla** and significantly expanded its data offering (see Section 2A). All references to "Walmart Luminate" in this document now mean Scintilla. Architecture implications are covered in Section 2A and the updated gap analysis in Section 4.

---

## 1. How DSA Account Setup Works Today (Reference Model)

DSA onboards a brand through a **COLAB file** — a structured configuration document that defines everything the system needs to begin tracking and reporting.

The COLAB file contains:

| Input Category | What's Captured | Format |
|---|---|---|
| Brand list | Brand names and sub-brands to track | Text list |
| SKU list | UPC/ASIN/Item IDs for each brand's products | CSV |
| Retailer list | Which retailer channels to track (Walmart, Amazon, Target, etc.) | Selection |
| Keyword list | Search terms to track for Share of Search measurement | Text list per brand |
| Content guidelines | Expected PDP content standards (title, bullets, images, A+) — for Content Quality scoring | Per-SKU spec |
| Discount bucket rules | Price thresholds that define a "promotion" for Pricing & Promotion module | Rule set |

**COLAB Studio (Aug 2025):** Web tool for self-serve COLAB creation — brands can input this directly without DataWeave CS mediation.

DSA then delivers 6 KPI modules on a continuous basis:
- Availability (in-stock rate, OOS detection)
- Share of Search (SoS)
- Share of Category (SoC)
- Content Quality
- Ratings & Reviews
- Price & Promotion

**Key principle for DSIM:** DSA's 6 KPI modules are the *shelf-signal inputs* for DSIM's model. DSIM's question is: "How much did changes in these KPIs causally drive sales outcomes?"

---

## 2. What DSIM Needs on Top of DSA

DSIM requires three data streams that DSA alone does not provide:

### Data Stream 1: DSA Shelf KPIs (Already in DSA)
**Minimum viable:** Availability (daily in-stock rate) + Share of Search (daily cadence)
**Better:** All 6 DSA KPI modules at daily granularity, by SKU, by store cluster
**Source:** DataWeave DSA platform (preferred) or Profitero / NielsenIQ / Stackline via file-based integration
**Lookback required:** Minimum 90 days; recommended 180 days for seasonal coverage

### Data Stream 2: Walmart Connect Campaign Data (NEW — not in DSA)
**What's needed:**
- Ad spend by campaign, by week/day
- Impressions, clicks, CTR by campaign
- Attributed sales by campaign (Walmart Connect's own attribution)
- Campaign type breakdown: Sponsored Products, Sponsored Brands, Sponsored Display (Onsite + Offsite)
- Campaign-to-SKU mapping (which campaigns are running for which products)

**Source:** Walmart Connect API (requires API credentials from the brand or their agency)
**Lookback required:** Must match shelf data lookback — minimum 90 days, recommended 180 days

**Current gap:** DataWeave has no native Walmart Connect API ingestion pipeline. This must be built.

### Data Stream 3: eCommerce Sales + Behavioral Data (NEW — not in DSA)

**What's needed (core sales):**
- Walmart.com unit sales and revenue, by SKU, by week
- Store-aggregate level compatible with DSIM's cluster model
- At minimum weekly cadence; daily preferred for model precision

**Source options (in priority order):**
1. **Walmart Scintilla** (formerly Luminate) — strongly preferred; brand's Scintilla access covers sales AND five additional data dimensions that materially improve DSIM's model (see Section 2A below)
2. **Brand internal data export** — CSV/SFTP with sales at Walmart.com channel level
3. **Third-party data provider** — Stackline, Profitero sales estimates (lower quality, last resort)

**Current gap:** No native Scintilla connector or standardized sales data ingestion pipeline.

---

## 2A. Walmart Scintilla — Architecture Implications for DSIM

> **What Scintilla is:** Walmart's brand intelligence portal (formerly Luminate), expanded in 2026 into a comprehensive data platform covering six domains. Brands with Scintilla access already hold a significant portion of DSIM's required raw inputs under one credential set.

### Scintilla's Six Modules and Their DSIM Relevance

| Scintilla Module | Key Data Points | DSIM Relevance | Priority |
|---|---|---|---|
| **Channel Performance** | Daily POS sales by item + store + channel; in-store vs. eComm split; OOS rate; nil-pick rate; OTIF score; velocity (sales/store/week) | **Direct replacement for manual sales data export.** Daily store-level sales is exactly the output variable DSIM models. Nil-pick rate is a superior availability signal vs. crawl-based OOS detection. | **CRITICAL** |
| **Digital Landscapes** | Search term volume + rank; SoS within category; PDP views; CTR; add-to-cart rate; conversion rate; organic vs. sponsored placement performance | **Supplements DataWeave DSA shelf signals with official Walmart data.** Conversion funnel (add-to-cart → conversion → sale) opens a new intermediate outcome layer in the model. | **HIGH** |
| **Insights Activation** | Audience segment sizes; lapsed/trialist/loyalist segments; Walmart Connect campaign response + lift metrics; ROAS tied to in-store + online sales | **Supplements Walmart Connect API data** with official Walmart-side campaign attribution. Trialist vs. repeat buyer segmentation enables DSIM to attribute iROI separately to new-user acquisition vs. repeat purchase frequency. | **HIGH** |
| **Shopper Behavior** | Household penetration; repeat rate; purchase frequency; brand loyalty / share of wallet; trialist vs. repeat buyer mix; brand-switching; source-of-volume; basket affinity | **Opens new model dimensions not in Lactalis PoC.** Brand-switching and source-of-volume enable sub-brand halo effect modeling with official data. Household penetration enables acquisition vs. retention attribution in iROI output. | **MEDIUM-HIGH** |
| **Scintilla In-Store** (2026) | Store-specific sales + inventory; on-shelf availability by store; void detection; planogram compliance; real-time store alerts | **Directly strengthens store-cluster model.** Official Walmart store-level availability is more accurate than crawl-based detection and aligns directly with DSIM's 17-cluster behavioral segmentation. | **MEDIUM-HIGH** |
| **Category Advisor feeds** | Category-level sales, share, growth; on-shelf placement + shelf-share; assortment gaps vs. benchmark; seasonality + trend indices | Competitive context inputs; supplements DSA SoC data with official Walmart category benchmarks. | **MEDIUM** |

### What Scintilla Changes in the Three-Stream Architecture

**Before Scintilla clarity:**
```
Stream 1: DataWeave DSA (shelf KPIs) ──────────┐
Stream 2: Walmart Connect API (media data) ─────┼──→ DSIM Model
Stream 3: Manual Luminate export (sales data) ──┘
```

**After Scintilla clarity:**
```
Stream 1: DataWeave DSA (shelf KPIs)  ───────────────────────────────┐
Stream 2: Walmart Connect API (campaign-level media granularity) ─────┼──→ DSIM Model
Stream 3: Scintilla connector ────────────────────────────────────────┘
          ├─ Channel Performance  → replaces manual sales export
          ├─ Digital Landscapes   → supplements DSA shelf signals
          ├─ Insights Activation  → supplements Walmart Connect API
          ├─ Shopper Behavior     → NEW model dimension
          └─ Scintilla In-Store   → strengthens store-cluster model
```

**Single highest-priority integration to build: Scintilla connector.** One well-built Scintilla API connector covers more of DSIM's data surface area than three separately managed integrations. The Walmart Connect API integration remains necessary for campaign-level ad spend and bid-level data that Scintilla aggregates.

### New Model Dimensions Unlocked by Scintilla

| New Dimension | Scintilla Source | What It Adds to DSIM Output |
|---|---|---|
| **Nil-pick rate** | Channel Performance | Measures actual online fulfillment failure — more accurate than crawl-based OOS detection. Availability lever becomes "shelf availability × fulfillment availability" |
| **Conversion funnel** | Digital Landscapes (add-to-cart rate, CVR) | Adds intermediate outcome layer: shelf KPI → add-to-cart → conversion → sale. Decomposes *where in the funnel* each lever operates |
| **New-user vs. repeat attribution** | Shopper Behavior (trialist vs. repeat buyer) | iROI output splits into "incremental new users acquired" vs. "incremental repeat purchases driven" — far more actionable for RGM planning |
| **Brand-switching source-of-volume** | Shopper Behavior | Confirms halo effects with official data (e.g., Kids/Baby campaign pulling new buyers into Adult sub-brand) |
| **Store-level void detection** | Scintilla In-Store | Improves cluster-level availability signal precision; reduces false positives in availability-constrained-media modeling |

### The "Good Enough" Objection — What Scintilla Cannot Do

Scintilla's Insights Activation module provides ROAS and campaign lift metrics. Expect the objection: *"Scintilla already gives us our Walmart ROAS — why do we need DSIM?"*

Scintilla's ROAS is Walmart's own last-touch attribution. It does not:
- Decompose whether the sale was going to happen without the ad (baseline removal)
- Model whether availability or content quality suppressed or amplified media lift
- Isolate halo effects between sub-brands
- Run store-cluster-level attribution (Scintilla aggregates nationally or by region)
- Tell you which of the 6 shelf levers moved the needle — only that media spend correlated with sales

DSIM's positioning vs. Scintilla is identical to its positioning vs. DataWeave DSA and vs. Pacvue: **"Scintilla tells you what happened. DSIM tells you why."**

---

## 3. Required Brand Inputs — Full Setup Specification

This is the equivalent of a DSIM "COLAB file" — everything a brand must provide before DSIM can run.

### Section A: Brand & Product Configuration (Reuse from DSA COLAB where available)
| Input | Description | Source | Required? |
|---|---|---|---|
| Brand name(s) | Legal brand name + commercial name(s) | Brand | Required |
| Sub-brand list | All sub-brands to model separately (e.g., Lactalis: Président, Cracker Barrel, Galbani) | Brand | Required |
| SKU list (Walmart.com Item IDs) | Walmart item numbers for every modeled SKU | Brand + DataWeave validation | Required |
| Category definition | Primary Walmart category/subcategory for each sub-brand (determines SoS baseline) | Brand + DataWeave | Required |
| Lookback period | Date range for model training (minimum 90 days, recommended 180 days) | Brand decision | Required |

### Section B: Walmart Connect Campaign Configuration (NEW)
| Input | Description | Source | Required? |
|---|---|---|---|
| Walmart Connect API credentials | Advertiser ID + API access token (or agency credentials) | Brand (or media agency) | Required |
| Campaign inventory | List of all active/historical campaigns within the lookback period | Pulled via API | Required |
| Campaign-to-sub-brand mapping | Which campaigns are attributable to which sub-brand(s) | Brand | Required |
| Media channel breakdown | Confirmation that Sponsored Products, Sponsored Brands, Offsite Display are all represented | Brand | Required |
| Agency relationship flag | Whether a DSP or Walmart Connect agency manages media (affects API access path) | Brand | Required |

### Section C: Sales Data Configuration (NEW)
| Input | Description | Source | Required? |
|---|---|---|---|
| Walmart Scintilla access | Brand confirms Scintilla is active; confirm which modules are enabled (see Section F) | Brand | Preferred |
| Sales data format | If not Scintilla: CSV schema definition (date, SKU, units, revenue, Walmart store format) | Brand | Required if no Scintilla |
| Sales data cadence | Weekly minimum; daily preferred | Brand decision | Required |
| Sales data scope | Walmart.com only, or including Walmart Pickup/Delivery, SuperCenter in-store? | Brand | Required (defines model scope) |
| Historical sales export | Same lookback period as shelf + media data | Brand | Required |

### Section D: Business Context Configuration (NEW)
| Input | Description | Source | Required? |
|---|---|---|---|
| Seasonality calendar | Major demand events: holiday, back-to-school, Super Bowl, etc. — used as model control variables | Brand | Strongly recommended |
| Promotional calendar | Trade promotions, price cuts, rollbacks during lookback period | Brand | Required |
| Launch events | New SKU launches, major PDP refreshes, content overhauls within lookback period | Brand | Required |
| Competitive events | Known competitor launches or supply disruptions (e.g., competitor OOS events) | Brand (best effort) | Optional |
| Budget change events | Major Walmart Connect budget shifts within lookback period | Brand | Required |

### Section F: Scintilla Module Configuration (NEW — enabled if brand has Scintilla access)
| Input | Description | Source | Required? |
|---|---|---|---|
| Scintilla access confirmation | Brand confirms active Scintilla account and which modules are provisioned by Walmart | Brand | Required to unlock Scintilla path |
| Channel Performance access | Daily POS sales by item + store; nil-pick rate; OOS rate; OTIF score | Scintilla export / API | Required (replaces manual sales CSV) |
| Digital Landscapes access | SoS, PDP views, CTR, add-to-cart rate, conversion rate | Scintilla export / API | Strongly recommended (supplements DSA) |
| Insights Activation access | Campaign response + lift metrics; trialist vs. loyalist audiences | Scintilla export / API | Strongly recommended (supplements Walmart Connect API) |
| Shopper Behavior access | Household penetration; trialist vs. repeat buyer; brand-switching; source-of-volume | Scintilla export / API | Optional (enables new-user vs. repeat attribution in iROI) |
| Scintilla In-Store access | Store-specific availability; void detection; planogram compliance | Scintilla export / API | Optional (strengthens store-cluster availability signal) |
| Scintilla data export format | Confirm: API access vs. file-based export (CSV/SFTP) — determines integration path | Brand + Walmart supplier agreement | Required |
| Historical Scintilla data range | Confirm: how far back does Scintilla data go for this brand? Minimum 90 days required | Brand | Required |

**Note on Scintilla access gating:** Scintilla access is granted by Walmart at the supplier level — not all brands have all modules. Pre-qualify module availability in the scoping call before designing the data onboarding plan. A brand with only Channel Performance access provides less model richness than a brand with all six modules.

### Section E: Model Configuration (PM/DataWeave-defined, not brand-provided)
| Parameter | Description | Default | Notes |
|---|---|---|---|
| Store cluster method | Group Walmart stores by shopping behavior vs. geography | Behavioral clustering (17 clusters per Lactalis) | Configurable per engagement |
| Modeling granularity | National aggregate vs. store-cluster level | Store-cluster (preferred) | National fallback if sales data lacks store-level attribution |
| Algorithm stack | Robyn (Bayesian MMM) + Random Forest + Ridge Regression + GAM + PCA | Fixed | Internal technical choice; not brand-facing |
| PCA factors | Composite business factors derived from raw KPI signals (e.g., 14 factors from 40+ signals per Lactalis) | Auto-derived | Reviewed with brand before model finalization |
| Refresh cadence | How often the model re-runs (quarterly default) | Quarterly | Monthly or on-event options at premium |

---

## 4. Gap Analysis: DSA Today vs. DSIM Requirements

| Capability | In DSA Today | DSIM Requirement | Gap |
|---|---|---|---|
| Brand/SKU/category configuration | ✅ COLAB file | Same foundation, reusable | None — DSIM inherits |
| Share of Search (daily) | ✅ Core KPI module | Input to DSIM model | None if DSA data at right cadence |
| Availability (daily) | ✅ Core KPI module | Input to DSIM model | None if DSA data at right cadence |
| Content Quality, R&R, Pricing | ✅ Core KPI modules | Secondary model inputs | None if DSA data at right cadence |
| Walmart Connect API ingestion | ❌ Not in DSA | Required (campaign-level spend, impressions, attributed sales) | **NEW: API integration to build** |
| Walmart Scintilla connector | ❌ Not in DSA | Required (sales data, conversion funnel, shopper behavior — replaces Luminate) | **NEW: Highest-priority integration — covers most of Stream 3 in one build** |
| Sales data upload / CSV intake | ❌ Not in DSA | Fallback if no Scintilla | **NEW: standardized intake form + validation** |
| Scintilla module configuration | ❌ Not in DSA | Pre-qualify which Scintilla modules brand has access to | **NEW: module access check in scoping call + onboarding form** |
| Nil-pick rate ingestion | ❌ Not in DSA | From Scintilla Channel Performance; superior availability signal | **NEW: enabled via Scintilla connector** |
| Conversion funnel modeling | ❌ Not in DSA | Add-to-cart + CVR from Scintilla Digital Landscapes | **NEW: opens intermediate outcome layer in model — enabled via Scintilla connector** |
| Shopper behavior inputs | ❌ Not in DSA | Trialist vs. repeat, brand-switching from Scintilla Shopper Behavior | **NEW: enables new-user vs. repeat iROI attribution — enabled via Scintilla connector** |
| Store-level void detection | ❌ Not in DSA | Scintilla In-Store (2026) | **NEW: strengthens store-cluster availability precision — enabled via Scintilla connector** |
| Campaign-to-SKU mapping UI | ❌ Not in DSA | Required for correct attribution | **NEW: campaign mapping configuration step** |
| Seasonality / promo calendar input | ❌ Not in DSA | Model control variables | **NEW: calendar input form** |
| Model execution pipeline | ❌ Not in DSA | Robyn + custom stack, triggered per brand | **NEW: model run infrastructure** |
| Model validation workflow | ❌ Not in DSA | PM + Data Science review before delivery | **NEW: internal QA step** |
| Results delivery (Tableau now) | ❌ Not in product | Tableau dashboard (services-led) / native UI (future) | **Existing: Tableau template; Future: native dashboard** |
| Store-cluster configuration | ❌ Not in DSA | Behavioral cluster definition per brand | **NEW: clustering configuration step** |
| Sub-brand / halo mapping | ❌ Not in DSA | Cross-brand halo effect modeling | **NEW: sub-brand relationship input** |

**Summary (updated for Scintilla):**
- 5 capabilities reusable from DSA (brand/SKU/shelf KPI data)
- 13 net-new capabilities needed for DSIM productization (up from 9 — Scintilla adds 4 new model dimensions)
- **Priority sequencing change:** Scintilla connector now ranked above Walmart Connect API integration — one build covers Channel Performance + Digital Landscapes + Insights Activation + Shopper Behavior + In-Store. Walmart Connect API still required for campaign-level bid granularity Scintilla doesn't expose.

---

## 5. Productization Phases

### Phase 0: Pre-Productization (NOW — services-led)
**Delivery model:** Manual data onboarding via CS + email → DataWeave runs model → Tableau dashboard delivered
**Who does what:** CS collects data in intake doc; Data Science runs model; PM/CS delivers Tableau + presentation
**Constraint:** ~2–3 simultaneous engagements max before capacity ceiling
**Goal:** Validate PMF, generate revenue, identify friction in the intake process

### Phase 1: Assisted Productization (6–9 months)
**Build:** Standardized intake form (DSIM "COLAB equivalent") + Walmart Connect API connector
**Goal:** Reduce onboarding time from 4+ weeks to 1–2 weeks; enable CS to own data intake without engineering support
**Key deliverable:** DSIM Account Setup Wizard (web form) that captures all Section A–D inputs above
**Revenue signal required to trigger:** 2+ paying accounts signed (PMF validated)

### Phase 2: Native Delivery (12–18 months)
**Build:** Luminate connector + native DSIM dashboard (replacing Tableau) + model refresh automation
**Goal:** DSIM functions as a fully in-product module within DataWeave platform; CS and brand can self-serve
**Dependency:** Walmart Connect API integration (Phase 1) must be production-stable before this phase starts
**Revenue signal required to trigger:** $500K+ ARR from DSIM OR 5+ active accounts

---

## 6. Discovery Questions for Engineering Alignment

The following must be answered before Phase 1 scope can be committed:

> **Note:** Questions 1–3 below have been partially answered by pre-engineering research (web analysis + Confluence search, April 21, 2026). See Section 6A for findings. Remaining gaps are marked `[STILL OPEN]`.

1. **Walmart Scintilla API model:** *(Partially answered — see Section 6A Q1)*
   - **What we now know:** Two access tiers exist. Basic = free, all Walmart suppliers, **zero API capability**. Charter = paid, full programmatic access via three delivery modes: API Feeds (OAuth 2.0), BI Link (Tableau/Power BI direct connect), Cloud Feeds (cloud-to-cloud, launched Feb 2025).
   - **Integration path identified:** Brand grants DataWeave a "Third Party Analytics Data Platform" Retail Link account via Supplier One → Apps & Integrations. Charter API requires OAuth 2.0 Client ID + Client Secret. Cloud Feeds (Channel Performance tables) may not require API integration at all — cloud-to-cloud data sync.
   - `[STILL OPEN]` Does DataWeave qualify to become a Walmart Data Ventures partner, and would that unlock a more scalable credential model vs. per-brand credential management? What does the Cloud Feeds schema look like — is it structured enough to ingest directly?

2. **Scintilla module availability per brand:** *(Partially answered — see Section 6A Q2)*
   - **What we now know:** Not a binary question. Brands get Basic automatically; Charter is a separate paid subscription; and within Charter, individual modules (Digital Landscapes, Shopper Behavior, In-Store) are provisioned selectively.
   - **Required pre-qualification questions:** (a) Basic or Charter? (b) If Charter, which modules are active? (c) What is the data export format for each module — API or file-based?
   - `[STILL OPEN]` What is the typical Charter uptake rate in DataWeave's existing brand portfolio? CS/account team should audit current accounts before the engineering session.

3. **Walmart Connect API:** *(Partially answered — see Section 6A Q3)*
   - **What we now know:** DataWeave's engineering team (Saurabh Sharma, May 2025) has already researched this API ecosystem. Stats API covers exactly what DSIM needs: impressions, clicks, CTR, spend, sales (attributed SKU + halo/other SKU), ROAS, CVR. OAuth 2.0 confirmed: Client ID + Client Secret → 15-min Bearer token + WM-specific headers. Historical lookback limited to 30–90 days via API; a local data warehouse is required for 180-day model training periods. Full campaign hierarchy available: campaigns → ad groups → ad items → keywords → placements → stats.
   - `[STILL OPEN]` Is there an existing DataWeave API ingestion framework to extend, or does this require a net-new pipeline? Who at DataWeave engineering holds the context from the May 2025 research (Saurabh Sharma)? Does Scintilla's Insights Activation module provide enough campaign-level data to deprioritize the Walmart Connect API integration for Phase 1 PoCs?

4. **Robyn model infrastructure:** *(Partially answered — see Section 6A Q4)*
   - **What we now know:** Zero Confluence results for "Robyn" across all of DataWeave's internal knowledge base. The Lactalis delivery infrastructure page shows AWS S3 (us-east-1, dw-dsa bucket), Kafka, Python crontab scripts — no DSIM/MMM model infrastructure documented anywhere.
   - **Strong implication:** Robyn runs in an ad-hoc local R environment or notebook, not on any productized DataWeave infrastructure. If confirmed, this is the single largest engineering gap for productization.
   - `[STILL OPEN — TOP PRIORITY for engineering session]` Where exactly does the Robyn model currently run? What is the R package version and dependency stack? How long does a full model run take for a brand like Lactalis (5 sub-brands, 6 months of data)? Is the model containerized? What triggers a model refresh?

5. **DSA data pipeline cadence:** Are DSA shelf KPIs already available at daily granularity for Walmart, or does DSIM require a cadence upgrade (e.g., from weekly to daily)?

6. **Store-cluster computation:** Is the store-cluster behavioral segmentation (17 clusters in Lactalis) a repeatable algorithm, or was it custom-built per engagement? If repeatable, is it productizable as a fixed configuration step?

7. **PCA factor derivation:** The 14 composite factors from 40+ raw signals in Lactalis — is this automatic (derived from input data structure) or manually tuned per engagement? Productization requires it to be automatic.

8. **Multi-brand/multi-SKU scalability:** Lactalis had 5 sub-brands. What is the compute / delivery time scaling for a PepsiCo-scale portfolio (20+ brands across Walmart)?

9. **Data security / brand data isolation:** Campaign spend and sales data is highly sensitive. What is the data isolation model between brands in a multi-tenant DSIM environment?

---

## 6A. Pre-Engineering Research Findings
**Researched:** April 21, 2026 | **Sources:** Web analysis (Walmart Developer Portal, Walmart Data Ventures, third-party integration blogs) + DataWeave Confluence (pages 2893316140, 2804318219)

This section documents what was learned via independent research before the engineering discovery session. The goal was to ground the questions in Section 6 in publicly available facts and internal documentation, so the engineering session focuses on gaps rather than rediscovering known information.

---

### Q1 Finding: Scintilla API Access Model

**Source:** Walmart Data Ventures documentation, Retail Link / Supplier One portal, third-party integration documentation (Crisp, etc.), confirmed April 21, 2026.

**Two-tier access model:**

| Tier | Cost | Who Gets It | API Access | Data Feeds |
|---|---|---|---|---|
| **Basic** | Free | All Walmart suppliers automatically | ❌ None | ❌ None |
| **Charter** | Paid (negotiated with Walmart) | Brands that purchase Charter | ✅ Full API | ✅ API Feeds + Cloud Feeds + BI Link |

**Charter delivery modes (three options, not mutually exclusive):**

| Mode | Description | Notes for DSIM |
|---|---|---|
| **API Feeds** | OAuth 2.0 programmatic pull; brand/DataWeave provides Client ID + Client Secret from developer.walmart.com | Most flexible; per-brand credential management required |
| **BI Link** | Direct connect to Tableau or Power BI; reaching full API parity (per Walmart, July 2025 target) | Already familiar to DSIM's Tableau delivery model; may be fastest to integrate for services-led Phase 0 |
| **Cloud Feeds** | Cloud-to-cloud data sync, launched February 2025; covers Channel Performance tables; no API integration required | Best fit for scalable ingestion of core sales data (the CRITICAL Scintilla module) |

**Integration credential path (two options):**
1. **Brand-level credential sharing:** Brand creates a dedicated "Third Party Analytics Data Platform" account in Retail Link → Supplier One → Apps & Integrations, and shares API credentials with DataWeave. Consistent with how third-party analytics platforms (e.g., Crisp) integrate today. Requires per-brand onboarding.
2. **DataWeave as Walmart Data Ventures partner:** Walmart Data Ventures runs a partner program for registered analytics platforms. If DataWeave qualifies, one partner-level agreement may enable API access across multiple brands without per-brand credential management. [VERIFY — requirements and timeline for partner agreement not confirmed]

**Implication for DSIM productization:**
- Phase 0 / Phase 1: Brand-level credential path via BI Link or API Feeds is viable immediately. Cloud Feeds for Channel Performance is the fastest path to core sales data.
- Phase 2: DataWeave Data Ventures partner agreement is the scalable path. Pursue in parallel with Phase 1 engineering.
- **Pre-qualification gate is mandatory:** No API integration is possible if a brand only has Scintilla Basic. CS must confirm Charter tier before any PoC scoping.

---

### Q2 Finding: Scintilla Module Access Per Brand

**Source:** Walmart Data Ventures documentation, Walmart supplier portal research, confirmed April 21, 2026.

**How module access works:**
- **Basic tier:** No modules are selectively enabled — Basic is an all-or-nothing tier with limited capabilities and no API access.
- **Charter tier:** Module provisioning appears to be selective — a brand may subscribe to Charter without activating every module. Evidence suggests larger enterprise brands (P&G, PepsiCo, Unilever) likely have broader module access than mid-market brands.
- **No self-serve module selection:** Walmart provisions modules at the supplier level based on supplier tier and commercial agreement. Brands cannot simply "turn on" a module.

**CSM scoping call script — required pre-qualification:**
1. "Do you currently have Scintilla access?" → If no: use CSV fallback path (Section 3, Source Option 2)
2. "Is your Scintilla access Basic or Charter?" → If Basic: no API access; negotiate Cloud Feeds or file export workaround
3. "If Charter, which modules do you have active?" → Confirms model richness before PoC scope commitment
4. "What is the data export format for each module — API, BI Link, or Cloud Feeds?" → Determines integration path

**Module priority for DSIM (in order):**

| Priority | Module | Why It Matters | Pre-qualify? |
|---|---|---|---|
| 1 | Channel Performance | Core sales + inventory + nil-pick — replaces manual CSV | Required |
| 2 | Digital Landscapes | SoS, conversion funnel — supplements DSA data | Strongly preferred |
| 3 | Insights Activation | Campaign attribution context — supplements Walmart Connect API | Preferred |
| 4 | Shopper Behavior | New-user vs. repeat iROI — opens new model dimension | Optional (Phase 2) |
| 5 | Scintilla In-Store | Store-level availability, voids — strengthens cluster model | Optional (Phase 2) |

**Fallback path if brand has only Basic or no Scintilla:** Use DataWeave DSA data for shelf KPIs, Walmart Connect API for campaign data, and require brand to provide sales data via manual CSV export. Lower model richness, but viable for Phase 0 engagements.

---

### Q3 Finding: Walmart Connect API — What DataWeave Already Knows

**Source:** Confluence page 2893316140 — "Understanding Walmart's Seller and Advertising Reporting APIs" (Platform space, authored by Saurabh Sharma, May 2025, last updated May 23, 2025).

**Key finding:** DataWeave's engineering team has already conducted a comprehensive review of Walmart's seller and advertising APIs. The following is a synthesis of that research — not new discovery, but confirmation that the foundation exists.

**Authentication model confirmed:**
- Standard: OAuth 2.0 — Client ID + Client Secret from developer.walmart.com Developer Portal
- Token flow: credentials → Token API → Bearer access token (expires ~15 minutes)
- Required headers: `Authorization: Bearer <token>`, `WM_SVC.NAME`, `WM_QOS.CORRELATION_ID`, `WM_CONSUMER.CHANNEL.TYPE`, `WM_MARKET: "us"`
- Token refresh required: applications must handle 15-min expiry with automatic refresh logic
- Digital signature auth (older method) being phased out; OAuth 2.0 is the current standard

**Stats API — exactly what DSIM needs:**

| Metric | Available via Stats API | DSIM Use |
|---|---|---|
| Impressions | ✅ | Media exposure signal |
| Clicks + CTR | ✅ | Pre-purchase engagement |
| Ad Spend | ✅ | Media lever input |
| Attributed Sales (advertised SKU) | ✅ | Direct media attribution |
| Halo Sales (other SKU sales) | ✅ | Cross-SKU halo effect validation |
| ROAS | ✅ | Walmart's own attribution baseline for DSIM to validate against |
| Conversion Rate | ✅ | Funnel intermediate outcome |
| Units Sold | ✅ | Core model output variable |
| Omnichannel attribution (in-store sales from online ads) | ✅ (via "closed-loop measurement") | Offline halo effect modeling |

**Campaign hierarchy available for granular attribution:**
```
Account
└── Campaigns (Sponsored Products / Sponsored Brands / Display)
    └── Ad Groups
        └── Ad Items (SKU-level)
            └── Keywords + Placements + Bid Multipliers
                └── Stats (impressions → clicks → sales at each level)
```

**Critical limitation: historical data lookback**
- Stats API supports approximately 30–90 days of historical data retrieval
- DSIM requires 180 days minimum for seasonal modeling
- **Implication:** DataWeave must build a continuous data warehouse ingestion pipeline from Day 1 of an engagement — not just pull historical data at PoC start. This is a Phase 1 engineering requirement, not a Phase 2 nice-to-have.
- For Phase 0 (services-led): initial engagements may need brand to provide earlier campaign data via Walmart Connect UI export (Excel/CSV) to cover the pre-pipeline period

**Two API families required — not one:**
- **Walmart Connect API:** advertising data (spend, impressions, attributed sales) — what DSIM uses for the media lever
- **Walmart Marketplace API:** seller-side order/sales data — separate family, separate credentials potentially
- **Scintilla supplements both:** Channel Performance replaces Marketplace API for sales data; Insights Activation supplements Connect API for aggregate campaign attribution. This is why the Scintilla connector has become more important than the Marketplace API integration.

**Internal context:** Saurabh Sharma's May 2025 Confluence page is the starting point for the engineering session. He has the existing API research. Before building, confirm with him: (a) was this research followed up with any prototype or integration attempt? (b) what are the rate limits per endpoint? (c) does DataWeave have a registered developer account on developer.walmart.com?

---

### Q4 Finding: Robyn Model Infrastructure — Internal Documentation Gap

**Source:** DataWeave Confluence search (April 21, 2026) — searches for "Robyn", "DSIM", "MMM model", "media mix model".

**Finding:** Zero Confluence pages found for "Robyn" across all of DataWeave's internal knowledge base.

**What this means:**
- The Robyn Bayesian MMM model that powered the Lactalis PoC is completely undocumented internally
- No engineering spec, no deployment runbook, no data pipeline documentation exists for the model
- **Implication:** The model almost certainly runs in an ad-hoc local environment (R notebook or similar), triggered manually per engagement — not on any productized DataWeave infrastructure
- The Lactalis delivery page (Confluence 2804318219) confirms DataWeave's data infrastructure is AWS S3 + Kafka + Python crontab — there is no model execution layer in this stack

**What this means for productization scope:**
The core model infrastructure is the **single largest unknown** in the productization plan. Phase 1 scope cannot be properly estimated without understanding:
1. What environment does Robyn currently run in (R version, key packages, dependencies)?
2. What compute resources does a full Lactalis-scale run require (RAM, time to completion)?
3. Is the model code generalized or Lactalis-specific (hardcoded brand names, category assumptions, etc.)?
4. Who owns the model code — a specific Data Scientist, or is it shared?

If the model is engagement-specific R code with no containerization, Phase 1 effort for "model execution pipeline" grows from 4–6 weeks to 10–14 weeks minimum. The engineering discovery session must surface this before any Phase 1 timeline is committed.

**Recommended action:** Before the engineering session, ask the PM or CS lead who ran Lactalis: "Where did the model run, and who ran it?" This is a 5-minute Slack message that could save 2 weeks of scoping ambiguity.

---

## 7. Recommended Next Step

**Pre-session prep (before engineering discussion):**
- The pre-engineering research in Section 6A has de-risked Scintilla API architecture (Q1, Q2) and Walmart Connect API structure (Q3). These no longer need to be explored from scratch with engineering.
- The critical open question is **Robyn model infrastructure (Q4)** — completely undocumented internally. A 5-minute Slack to the Data Science lead who ran Lactalis ("where did the model run, and who ran it?") before the session will frame the entire productization effort.
- Confirm with Saurabh Sharma (Platform team) whether the May 2025 Walmart API research (Confluence 2893316140) was followed up with any prototype or integration work.

**Suggested agenda for discovery session (updated based on pre-engineering research):**

| # | Topic | Owner | Pre-research status | Time |
|---|---|---|---|---|
| 1 | Robyn model: where does it run, who owns it, what are compute requirements? | Data Science lead | ❌ Undocumented — top priority | 20 min |
| 2 | Lactalis data onboarding walkthrough — map every manual step from data receipt to model output | Data Science + CS | ⚡ Partially known from Lactalis pages | 20 min |
| 3 | Repeatability assessment — which steps are engagement-specific vs. generalizable? | Data Science | ⚡ Partially known | 15 min |
| 4 | DSA data pipeline cadence — daily vs. weekly for shelf KPIs? | Engineering | ❌ Open | 10 min |
| 5 | Walmart Connect API integration — does existing framework exist? Confirm: Saurabh Sharma's research (Confluence 2893316140) was done; has any integration work followed? | Engineering (Saurabh Sharma) | ✅ API structure researched; integration status open | 10 min |
| 6 | Scintilla connector: Cloud Feeds vs. API Feeds for Phase 1 — what is the simpler build for Channel Performance? | Engineering | ✅ Architecture clarified; build approach open | 10 min |
| 7 | Phase 1 rough-order-of-magnitude: Robyn pipeline + Scintilla connector + Walmart Connect API integration — 6 weeks or 6 months? | All | Depends on Q1–Q3 answers | 15 min |

**Pre-session CS action (CSM team):**
- Audit current brand portfolio: which accounts have Scintilla Charter (vs. Basic only)?
- For any brand in the DSIM pipeline: run the 4-question Scintilla pre-qualification script from Section 6A Q2 before the engineering session so the team knows what data integration paths are actually available.

**Output of that session should be:** A draft DSIM Account Setup Spec (the formal productization input spec) that includes: (a) confirmed Robyn infrastructure and compute model, (b) Phase 1 build list with rough-order-of-magnitude effort, (c) Scintilla integration path decision (Cloud Feeds vs. API Feeds), and (d) go/no-go signal for Phase 1 timeline. This spec becomes the foundation for the DSIM FRD.

---

*Prepared: 2026-04-21 | Last updated: 2026-04-21 (pre-engineering research addendum — Section 6A) | Based on: DSA_Product_Overview.docx (April 2026), Lactalis DSIM MMM deck (Sept 2025), Lactalis DSIM Final deck (Jan 2026), DSIM plan-of-action.md, Walmart Scintilla platform overview (April 2026), Walmart Data Ventures documentation (April 2026), DataWeave Confluence page 2893316140 "Understanding Walmart's Seller and Advertising Reporting APIs" (Saurabh Sharma, May 2025), DataWeave Confluence page 2804318219 "Lactalis-US" delivery page (Jan 2026)*
*[DRAFT FOR DISCUSSION — engineering estimates and phase timelines are directional only, not committed]*
