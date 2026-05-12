# DSIM Knowledge Base
**Domain:** Digital Shelf Impact Measurement
**Last updated:** 2026-05-06
**Sources:** 22 total (4 Notion pages + 18 local files, all April 2026)

---

## 1. Product Identity

**What DSIM is:** A Bayesian marketing mix model (MMM) that decomposes what drove incremental Walmart sales across 6 levers: Share of Search (SoS), Content Quality Score (CQS), Availability (OSA/OOS), Pricing, Retail Media spend, and Assortment. Output is a Tableau-delivered sales decomposition + explicit reallocation recommendation.

**What DSIM is NOT:**
- Not a media activation platform (no bid management, no campaign execution)
- Not a reporting dashboard (no real-time alerts, no ongoing monitoring)
- Not a replacement for DSA (runs on top of DSA shelf signals as input)
- Not a traditional MMM (faster, shelf-native, Walmart-specific — not a portfolio-level tool)

**Official status as of April 2026:** Pre-productization. One PoC delivered (Lactalis/Black Talus brand, Walmart). Seeking 2 paying accounts to trigger productization investment.

**Naming:** "Digital Shelf Impact Model" (internal) vs. "Digital Shelf Impact Measurement" — naming debate unresolved April 24 meeting. Internal shorthand: DSIM.

Sources: Notion Apr 10, Apr 16, Apr 24; `dsim-productization-discovery-2026-04-21.md`

---

## 2. Technical Architecture

### Algorithm Stack
- **Primary model:** Robyn (open-source Bayesian MMM, R package) for adstock/saturation modeling and sales decomposition
- **Supporting methods:** Random Forest, Ridge Regression, GAM (Generalized Additive Models), PCA
- **Critical gap:** Robyn has ZERO Confluence documentation. Likely runs locally on ad-hoc environment. Robyn infrastructure must be confirmed with DS lead before any productization scoping. [Source: `dsim-productization-discovery-2026-04-21.md`]

### 4-Step Modeling Process
1. **Store Clustering** — segment Walmart's ~4,700 US stores by behavioral/demographic similarity
2. **Correlation Analysis** — evaluate 50-60+ KPIs from three data streams for model inputs
3. **Sales Deconstruction** — Bayesian decomposition of what drove sales change across 6 levers
4. **Response Curves** — incremental ROI curves per lever for reallocation optimization

### Store-Cluster Architecture
- Lactalis PoC produced 17 behavioral clusters (4 major + 16-20 sub-clusters) among 4,700 Walmart stores
- Clusters are DSIM's primary unit of analysis — "fix content in these 47 store clusters" not "fix content nationally"
- Store-cluster localization is the single feature no competitor (CIQ, Incremental.com, Profitero, Skai) replicates
- [Source: `dsim-team-internal-april-2026.md`, `competitive-landscape-deepdive.md`]

### Three Data Streams
1. **DSA shelf KPIs** — Availability, Share of Search, Content Quality, Pricing, Competitive pressure. DataWeave's production crawl infrastructure (live).
2. **Walmart Connect campaign data** — via Walmart Connect Stats API (OAuth 2.0 authentication confirmed by Saurabh Sharma, May 2025 Confluence 2893316140). Critical constraint: 30-90 day lookback only → requires continuous warehouse ingestion from Day 1.
3. **Walmart Scintilla** (formerly Luminate, rebranded 2026) — brand sales intelligence portal. Two access tiers: Basic (free, zero API) vs. Charter (paid, Cloud Feeds + API Feeds + BI Link). Charter is required for DSIM. Brands must hold Charter subscription.

Sources: `dsim-productization-discovery-2026-04-21.md`, `walmart-scintilla-platform-overview.md`

---

## 3. Proof of Concept — Lactalis Results

**Client:** Lactalis (Black Talus brand, Walmart), origin ~1 year before April 2026

**Accuracy metrics:**
- R² = 91% (historical fit)
- MAPE = 5.9% (mean absolute percentage error)
- 80-85% forward-looking accuracy

**Key findings from Lactalis PoC:**
- $30K/day in media spend identified as misallocated
- 78% in-stock rate during peak promotional period (identified as risk lever)
- +12% Adult segment sales driven by Kids/Baby brand halo (cross-brand halo discovered)
- 17 store clusters identified
- ~50% of sales from baseline demand, ~23% from promotions, -5% competitor detraction (Stonyfield results cited in Apr 10 Notion meeting)
- Retail media example: increasing on-site paid search by $2,700/day (from $9,200 to $11,900) → $7,500 in additional daily sales

**Lactalis user behavior:**
- Primary users: eCommerce team
- Secondary users: retail media team + Publicis agency team
- Citrus Ad (Publicis) is Lactalis's retail media management tool

Sources: `dsim-team-internal-april-2026.md`; Notion Apr 10, Apr 24

---

## 4. Positioning and Personas

### Official Positioning Decision (as of Apr 16, 2026)
Primary: "MMM for retail media" — lightweight, faster (3 months vs. years for traditional MMM), forward-looking, combines marketing spend + DSA + sales.

**Unresolved positioning tension (Apr 24 meeting):**
- Eddie: "Stay away from MMM branding — too academic for eCommerce buyers"
- Jeeva: "Ride the IAB anti-MMM wave — differentiate as the modern alternative"
- Resolution pending next meeting

### Three Positioning Options (from `dsim-positioning-and-personas-2026-04-25.md`)
- **Option A (retail media measurement lens):** "iROAS you can trust" — targets eCommerce/Retail Media buyer
- **Option B (sales decomposition all levers):** "What actually drove your Walmart sales" — broadest positioning
- **Option C (budget reallocation intelligence):** "Move budget to highest incremental return lever" — targets Finance/RGM
- **Recommendation:** Option B as "what," Option C as wedge for Finance, Option A as eCommerce use case

### Three Primary Personas
**Persona 1 — eCommerce / Retail Media Leader**
- Title: VP eCommerce, Director Retail Media, Director Digital Commerce
- Owns: $500K-$5M+ Walmart Connect budget
- Measured on: ROAS, iROAS, SoS, OSA, digital shelf KPIs
- Buys from: measurement budget or media ops budget
- Pain: no independent iROAS; must trust Walmart Connect's own reported ROAS

**Persona 2 — Finance / RGM Leader**
- Title: VP Revenue Growth Management, Director RGM, VP/Director Marketing Finance
- Role: reviews and approves budget requests; lacks independent measurement framework
- Uses: Circana/NielsenIQ for macro trends, Scintilla for Walmart data
- Receives: last-touch platform ROAS from Walmart Connect + Pacvue (insufficient for budget defense)
- Pain: no store-cluster incremental attribution; cannot distinguish defensive vs. offensive spend
- Buy angle: NOT "cut media budget" but "make sure money flows to highest incremental return lever"

**Persona 3 — Brand / Category Manager**
- Secondary persona; consumes outputs; not the budget holder
- Cares about: SoS changes, content scores, assortment gaps at cluster level

Sources: `dsim-positioning-and-personas-2026-04-25.md`, `icp-buyer-behavior-research-2026-04-25.md`

---

## 5. Competitive Landscape (all claims: April 2026)

### Three Competitive Categories
1. **Activation-Led** (CIQ, Pacvue) — buy from media ops/activation budget; observational models; no shelf signals as outputs
2. **Campaign Measurement** (Incremental.com, Skai Impact Navigator) — buy from measurement budget; shelf as control variable, not output
3. **Shelf-Native Diagnostic** (DSIM) — UNCONTESTED position combining shelf signals as model inputs AND outputs with store-cluster localization

### Competitor Profiles

**CommerceIQ (CIQ)**
- Threat level: HIGH
- Incrementality Module: launched Dec 2025, standalone product; observational model (last-touch + cross-channel, no published MAPE/R²); 14-day attribution window
- AllyAI at 76% account adoption (Q4 2025)
- 268% Q/Q net ARR growth Q4 2025
- Buyer: VP/Sr. Director eCommerce, $500M-$5B CPG; quarterly ~4.5x ROAS goal
- G2 pain: "Incrementality numbers don't match internal MMM," "Walmart data feels bolted on," "14 products stitched together," 6-month implementation, 20%+ YoY price increase
- Source: `competitor-deep-dive-ciq-pacvue-2026-04-25.md`

**Pacvue**
- Threat level: MEDIUM
- Revenue: ~$104M
- Incrementality Console: Amazon-first (Sept 2024); Walmart equivalent unconfirmed April 2026
- ~40% revenue from agency channel (structural conflict with vendor neutrality pitch)
- CEO: Rahul Choraria (since Sept 2024)
- G2 pain: "Walmart Connect features lag Amazon by 6-12 months," "AI recommendations black box," "Luminate data lags 7+ days"
- Source: `competitor-deep-dive-ciq-pacvue-2026-04-25.md`

**Incremental.com**
- Threat level: HIGH (measurement budget overlap)
- Model: Ensemble causal (Bayesian MMM + causal inference + experimental design)
- Key differentiator gap: shelf signals used as CONTROL VARIABLES, not actionable lever outputs
- Partners: WPP Connected Partner (Sept 2025), Walmart Connect official measurement partner (July 2024)
- Size: 44 employees, $18.8M total funding
- Named customer: Bayer (I-COM Global Award winner)
- Usage: quarterly cadence — nobody opens it daily
- ACV: $150K-$500K typical
- Pain: "Black-box ensemble," "Output is a model coefficient, not a store-cluster action," "Doesn't tell us where to fix shelf execution"
- Source: `competitor-deep-dive-profitero-skai-incremental-2026-04-25.md`

**Profitero**
- Threat level: HIGH (existing DSA overlap)
- Ownership: Publicis (Sarah Hofstetter departed March 2026; Ethan Goodman, Publicis insider, took over)
- Profitero+ measurement: requires Pacvue as causal layer — cannot attribute incrementally on its own
- IDC MarketScape Leader designation Oct 2025
- Pricing: $80K-$250K ACV (verify)
- Pain: "Data is descriptive not causal," "Walmart coverage shallower than Amazon," cost creep post-acquisition
- Source: `competitor-deep-dive-profitero-skai-incremental-2026-04-25.md`

**Skai**
- Threat level: MEDIUM
- Impact Navigator: MMM-lite + experimental geo-tests; measurement as separate paid SKU
- Pricing: $114K-$756K/year tiers
- Key signal: Bayer's I-COM award case study used Incremental.com for measurement, Skai for bidding — even Skai's own flagship customer goes elsewhere for measurement
- Pain: "Walmart Connect features lag Amazon 6-12 months," "Impact Navigator outputs feel black-box," "Great for Amazon search, mediocre for everything else"
- Source: `competitor-deep-dive-profitero-skai-incremental-2026-04-25.md`

### DSIM Feature Moat (uncontested as of April 2026)
- Shelf signals as model OUTPUTS (not inputs used as controls)
- Store-cluster localization ("fix these 47 clusters" not "fix nationally")
- Published MAPE/R² (5.9% / 91%)
- Holdout/test-and-control methodology (Bayesian, not observational)
- Scintilla integration (planned)
- Content quality as lever
- Sub-brand halo effect modeling

### Competitive Wedge Statement
"Every competitor — CIQ, Pacvue, Skai Impact Navigator, Incremental.com — gets the same complaint from analytics-mature buyers: 'We don't know how the model works.' DSIM publishes MAPE=5.9% / R²=91%. Most competitors cannot respond because they have no methodology to publish."
Source: `dsim-expansion-synthesis-2026-04-25.md`

---

## 6. Commercial Model

### Pricing (from `dsim-team-internal-april-2026.md` + `plan-of-action.md`)
- PoC: $50K-$75K
- Annual: $150K-$200K/year per brand-retailer pair
- Enterprise: $250K-$400K/year (multi-brand)
- Additional brands (same retailer): $40K/brand
- Value anchor: $30K/day misallocated = $10.9M/year → 1.5-2% of identified opportunity = $165K-$220K annual range

Note: Notion Apr 10 meeting cited "$100K/brand/retailer annually" — this reflects a higher-end estimate or different pricing discussion; current pricing docs show $150-200K as annual standard.

### PMF Gate
- **2 paying accounts + $150K ARR** → triggers P1 productization investment
- Source: `dsim-productization-scope-2026-04-25.md`

### Sales Targets (Q2-Q3 2026)
- Q2 2026 target accounts (priority order): Clorox (#1), Mondelēz (#2), Kraft Heinz (#3)
- Success metrics: 2 paying accounts by Q3 2026, $300K-$500K ARR, PoC-to-paid ≥50%, ≤10 weeks delivery, referenceable account by Q4 2026
- Pipeline as of April 2026: Bush Brothers (May), Beiersdorf, Magic Spoon (Q2), ShopHop (positive)
- Source: `dsim-team-internal-april-2026.md`; Notion Apr 24

### Budget Line Positioning
DSIM should pull from the **measurement / marketing analytics budget**, not media ops or shelf ops.
- Shelf ops budget → Profitero
- Media ops budget → Pacvue, Skai, CIQ
- Measurement budget → Incremental.com (DSIM's target displacement)
- Source: `dsim-expansion-synthesis-2026-04-25.md`

---

## 7. Productization Roadmap

### Current State (P0 — Services-Led)
- Manual model runs; ad-hoc environment; Tableau delivery
- Delivery time: 6-10 weeks
- No DSIM-specific onboarding form (needs equivalent of DSA's COLAB file)

### Immediate Actions (no engineering required)
1. Add explicit reallocation output to every Tableau delivery (2 weeks) — currently missing; Lactalis pain point
2. Confirm Robyn model infrastructure (Slack DS lead) — MUST HAPPEN BEFORE SCOPING P1
3. Scintilla pre-qualification check for all pipeline accounts (verify Charter tier)

### P1 (Assisted Product, 6-9 months from PMF gate)
- **P1.1: Scintilla Cloud Feeds connector** — 3-5 weeks; CRITICAL PATH
- **P1.2: Model execution pipeline** — 6-10 weeks if local; 2-4 weeks if containerized (SCOPE AFTER ROBYN CONFIRMED)
- **P1.3: Walmart Connect API continuous ingestion** — 4-6 weeks (required because 30-90 day API lookback < 180 days needed)
- **P1.4: DSIM Account Setup Wizard** — 3-4 weeks; web form to replace manual COLAB-equivalent

### P2 (12-18 months) / P3 (18+ months)
- Native DSIM tab in DataWeave platform
- Automated model refresh and alerting
- Multi-retailer expansion (Kroger → Target → Amazon)

### Engineering Capacity
- 1 dedicated engineer + 1 data scientist
- Source: `dsim-productization-scope-2026-04-25.md`

### MVP Output Requirements (every delivery)
1. Sales decomposition across 6 levers
2. Explicit reallocation recommendation ("move $X from Channel A to Channel B")
3. Store-cluster breakdown
4. Confidence intervals on all lever estimates
- Source: `dsim-productization-scope-2026-04-25.md`

---

## 8. DSA Shelf Signal ROI Benchmarks

These benchmarks support the "DSA KPI ROI" framing needed to sell DSIM (from `dsa-kpi-roi-benchmarks-2026-04-25.md`):

### Share of Search
- 1% increase in SoS ≈ 0.5% increase in sales (e.fundamentals baseline)
- Page 2 → Page 1 organic: +37% sales (Profitero 2024)
- Top 5 organic position: +89% sales
- Paid search activation: +21% uplift

### Content Quality
- CQS 70→90: +13% CVR (Walmart internal data via Stratably)
- Attribute completeness alone: +15% sales
- Source: `dsa-kpi-roi-benchmarks-2026-04-25.md`

### Reviews
- 31-50 reviews vs. zero: +98.6% conversion
- 101-250 reviews: +153% conversion
- 500+ reviews in Beauty: additional +92%

### Availability (OOS)
- $1.2T in global retail sales lost to OOS in 2023 (IHL Group 2023)
- 40%+ customers go to different retailer when OOS (HBR 2024)
- 9% permanently switch retailers (NielsenIQ 2024)

### IAB Anti-MMM Reports (confirmed live April 7, 2026)
- April 7, 2026 (primary): retail media attribution accuracy critique
- October 31, 2024: "retail media attribution systematically misattributes sales"
- November 3, 2025: follow-up report
- December 2025: updated findings

---

## 9. Walmart Scintilla Platform

**Current name:** Scintilla (rebranded from Luminate in 2026)

### Six Modules (DSIM priority ranked)
1. **Channel Performance (CRITICAL):** daily POS sales by item/store/channel; nil-pick rate (superior availability signal vs. crawl-based OOS)
2. **Digital Landscapes (HIGH):** full conversion funnel — impression → PDP view → add-to-cart → conversion → sale
3. **Insights Activation (HIGH):** supplements Walmart Connect API campaign data
4. **Shopper Behavior (MEDIUM-HIGH):** trialist vs. repeat buyer segmentation for iROI bifurcation
5. **Scintilla In-Store (MEDIUM-HIGH):** launched February 2026; store-level void detection
6. [Module 6 data quality/benchmarks — MEDIUM]

### Access Tiers
- **Basic:** Free; zero API access; manual downloads only
- **Charter:** Paid; Cloud Feeds + API Feeds + BI Link; required for DSIM

### Scintilla Sales Qualifier
Brands with Scintilla Charter + active ROAS question from Walmart Connect = best DSIM entry point. Use as account qualification gate.

Source: `walmart-scintilla-platform-overview.md`, `dsim-productization-discovery-2026-04-21.md`

---

## 10. Multi-Retailer Expansion

### Expansion Ranking (April 2026)

| Rank | Retailer | Effort | Why |
|---|---|---|---|
| 1 | Kroger | 4-5 months | 84.51° transaction data closest to Scintilla; same buyer persona as Walmart; lowest CAC for second retailer |
| 2 | Target | 5-7 months | Often same buyer as Walmart; DataWeave shelf coverage strong; Roundel API limited widening model CI |
| 3 | Amazon | 3.5-4.5 mo (Tier 1) + 1.5-2 mo (AMC) | Different buyer entirely; largest TAM; ASIN-cluster instead of store-cluster |
| 4 | BestBuy | 6-8 months + GTM rebuild | Different buyer (OEM vendor marketing); episodic demand requires model recalibration |
| 5 | Costco | Defer 9-12+ months | No transaction data feed; thin retail media platform; structural data unavailability |

### Kroger Specifics
- Platform: Kroger Precision Marketing (KPM) via 84.51°
- Data: Stratum (84.51° reporting platform); ~96% Kroger sales tied to Kroger Plus household
- Portability: HIGH — 6 levers map cleanly; Robyn priors from Walmart should transfer with recalibration
- Critical dependency: design-partner brand willing to authorize 84.51° + KPM data flow into DSIM
- Source: `retailer-expansion-multi-retailer-2026-04-25.md`

### Amazon Specifics
- ~60% of model ports directly; ~40% requires re-engineering
- Store-cluster → ASIN-cluster (default) + customer-cohort via AMC
- New levers: S&S retention lift, DSP off-Amazon halo, Prime vs. non-Prime attribution, review velocity chain
- MAPE expected: ~8-10% vs. 5.9% (Lactalis Walmart)
- Different buyer: Director/VP Amazon — separate ABM list required
- Competitor on Amazon: CIQ + Pacvue measurement modules (not Profitero)
- Source: `retailer-expansion-amazon-2026-04-25.md`

---

## 11. Cross-Category Expansion

### Expansion Ranking (April 2026)

| Rank | Vertical | ACV Tolerance | Why |
|---|---|---|---|
| 1 | Home/DIY | $250-500K | Existing DataWeave Home Depot DSA relationship; store-cluster modeling = vertical's #1 pain; Pro vs. DIY measurement gap |
| 2 | Consumer Electronics | $400-800K | Highest MMM maturity; buyers already understand Bayesian decomposition; highest ACV |
| 3 | Fashion/Apparel | $150-300K | Needs new levers (returns, markdowns, size matrix); DTC over-tooled; lowest ACV |

### Home/DIY Key Facts
- DataWeave already serves Home Depot via DSA — credibility shortcut + warm intro path
- Pro contractors = 40-55% of revenue for brands like DeWalt, Sherwin-Williams
- Orange Apron Media (Home Depot RMN) + Lowe's One Roof Media Network = primary spend targets
- Pro program ROI measurement is known boardroom gap
- Source: `cross-category-expansion-2026-04-25.md`

---

## 12. ICP — CPG Brand Targets

### Qualification Criteria
- Enterprise CPG with active Walmart channel ($50M+ annual Walmart POS)
- Holds Scintilla Charter subscription (or willing to upgrade)
- Active Walmart Connect media spend ($500K+/year)
- Has eCommerce analyst or retail media manager who will own DSIM outputs
- Has Finance/RGM function asking "is this media spend working?"

### Top Target Accounts (Q2 2026 priority)
1. Clorox
2. Mondelēz
3. Kraft Heinz

### Broader Top-50 CPG Universe (from `plan-of-action.md`)
Tier 1: Procter & Gamble, Unilever, Nestlé, PepsiCo, Coca-Cola, Mars, Mondelēz, Kraft Heinz, Colgate-Palmolive, Kimberly-Clark, Church & Dwight, Henkel, Reckitt, Abbott Nutrition, Danone, General Mills, Campbell's, Conagra, Hershey, Energizer, Spectrum Brands, Edgewell, Prestige Consumer Healthcare, Reynolds Consumer Products

Tier 2: Clorox, Scotts Miracle-Gro, Spectrum Brands, Post Holdings, TreeHouse Foods, B&G Foods, Acosta, Kel Partners, Bimbo Bakeries, Hostess (now J.M. Smucker), Hormel Foods, Pilgrim's Pride, Smithfield, Tyson Foods, Lamb Weston

### Discovery Qualifying Questions (from `dsim-team-internal-april-2026.md`)
1. "How do you currently measure whether your Walmart Connect spend is driving incremental sales?"
2. "When your shelf scores drop or go OOS, how does that show up in your media ROI reporting?"
3. "Has Finance or RGM ever asked you to prove that media spend outperforms price or content investment?"

### Market Statistics (from `icp-buyer-behavior-research-2026-04-25.md`)
- Only 6% of advertisers fully trust retailers' own reported media metrics (Bain 2024)
- 36% of CPG marketers cite difficulty proving incrementality as top challenge (Skai 2025)
- Walmart now includes retail media spend targets in JBP negotiations (Digiday 2025)
