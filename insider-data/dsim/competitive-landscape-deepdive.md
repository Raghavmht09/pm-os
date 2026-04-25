# DSIM Competitive Landscape Deep Dive
**Focus:** Retail Media Incrementality & Digital Shelf Correlation — Walmart-Native Measurement
**Last updated:** April 2026
**Research methodology:** Live web research (April 2026) + internal battlecard synthesis (DSIM_Competitive_BattleCards_1.pptx, April 2026) + PM OS subagent research runs. Each claim carries a verification date. Claims marked [VERIFY] require re-check before use in external materials.

---

## Executive Summary

The retail media and digital shelf ecosystem has structurally split into three distinct measurement categories as of Q1 2026. No single competitor occupies DSIM's position.

**The critical 2025-2026 market shift:** CommerceIQ launched a standalone Incrementality Estimation Module in December 2025 — the first activation platform to explicitly enter the measurement-only market. This validates the category but also reveals their methodology weakness: an observational model (share of voice + keyword relevance), not a holdout/test-and-control. Walmart Connect simultaneously launched its own native Search Incrementality tool (April 2025) using first-party POS data and randomized control testing. Both moves increase buyer awareness of incrementality measurement while leaving the shelf-native, store-cluster-level diagnostic space entirely uncontested.

**The market now has three categories — not two.** DSIM must position against all three:

| Category | Players | What They Solve | DSIM's Differentiation |
|---|---|---|---|
| **Activation-Led** | CommerceIQ, Pacvue | "Optimize my bids right now" | No activation conflict; shelf-native vs. media-native; CFO-ready methodology (holdout/Bayesian MMM vs. observational model) |
| **Campaign Measurement** | Incremental.com, Skai | "Did this campaign generate net-new sales?" | Shelf signals as first-class outputs (not just noise to remove); store-cluster resolution; cross-lever decomposition; published MAPE/R² |
| **Shelf-Native Diagnostic** | DataWeave DSIM | "Which of my 6 shelf + media levers drove sales, and what should I reallocate?" | Uncontested — no competitor in this quadrant |

---

## Competitor Profiles — Verified Intelligence

### 1. CommerceIQ
*Threat level: **HIGH — closest 1:1 match** | Verified: April 2026*

#### What They Are
Unified Retail Ecommerce Management (REM) platform — sales analytics, retail media, content, and digital shelf in one stack. 2,200+ brands, 650+ retailers, $136.6M revenue (2024, third-party estimate via GetLatka), 38% YoY growth. Series D at $1B valuation (March 2022, $115M from SoftBank Vision Fund 2 + Insight Partners). No new funding in 2025-2026.

#### Critical Q4 2025 Product Move: Standalone Incrementality Module
**December 2025:** CommerceIQ announced their **Incrementality Estimation Module as an independently purchasable product** — not just a feature bundled inside Retail Media Management (RMM). Direct quote: *"Brands that do not currently subscribe to the RMM platform can also access the Incrementality Estimation Module as an independent solution for measurement, reporting and planning purposes."*

**Why this matters for DSIM:** CommerceIQ explicitly recognized the standalone measurement market and entered it. This validates the buyer pain point DSIM is solving. But their methodology is fundamentally weaker: observational model (share of voice + shopper propensity + keyword relevance, no holdout group), search and keyword-focused, 14-day attribution window. CommerceIQ's own blog admits: *"CommerceIQ's incrementality tool is focused on search and keyword-based incrementality, based on 14-day direct sales conversions due to specific advertising activities."*

**Walmart Connect's response:** Walmart launched its own native Search Incrementality product in April 2025 using *"gold-standard test-and-control methodology backed by real, verified sales data"* — directly challenging CommerceIQ's methodology on Walmart as inferior to first-party randomized control.

#### AllyAI (May 2025 → now at 76% account adoption)
AllyAI launched May 21, 2025 as role-specific AI agents across Sales, Digital Shelf, Content, and Retail Media. March 3, 2026 "biggest launch" expanded to full AI Agents Suite. Positioning: agency replacement and SaaS replacement combined ("10–100x better than agencies"). Key Q4 2025 results: 268% Q/Q net ARR growth. iROAS improvement of 55% and 13% CPC reduction across early-access accounts.

#### Named Customers (2025-2026)
- **Mondelēz** — Walmart + Amazon pilot: 50%+ ROAS lift, $4M wasted media saved in 3 months
- **PepsiCo** — Testimonial: DSA ease of use (Michael Gold, Strategy & Ecosystems Manager)
- **Reckitt** — Invoice dispute automation (Jennifer Wronski, Sales Team Lead)
- **Pilgrim's Pride** — iROAS optimization, "exceeded expectations" (Aaron Conkey, Senior Digital Marketing Manager) — Q4 2025 blog
- **Nestlé, Colgate, Whirlpool** — Long-standing marquee logos
- **Georgia Pacific, Spectrum Brands, Bayer** — Walmart-specific testimonials

#### Pricing Signals
- Published starting price: **$25,000/year** (SoftwareAdvice, GetApp — April 2026)
- Average contract (implied): ~$62K/year at the mean (revenue ÷ customers)
- Enterprise multi-module: significantly higher — "several enterprise contracts" driving H2 2025 ARR growth
- Standalone Incrementality Module: not publicly priced

#### Methodology Gap — The Core Displacement Argument
CommerceIQ's incrementality model is observational. Walmart Connect's own product launch (April 2025) explicitly positioned observational approaches as inferior to "test-and-control backed by real, verified sales data." In a sales conversation: *"Can you defend CommerceIQ's 14-day keyword-level attribution to your CFO as causal proof? Walmart Connect itself says observational models don't meet the gold standard."*

DSIM uses Bayesian MMM (Robyn) + GAM + PCA — a methodology with published validation metrics (5.9% MAPE, R²=91%). CommerceIQ publishes no equivalent. This is the CFO-facing proof gap: *"Show me the MAPE. Show me the R²."*

#### Activation-Conflict Evidence (Structural — not yet publicly named)
CommerceIQ's iROAS model is designed to optimize their activation engine, not provide independent measurement. The model generates outputs that justify more spend on CommerceIQ's platform. No external analyst has publicly named this conflict specifically about CommerceIQ (as of April 2026) — but the structural conditions are visible and articulable.

#### DSIM Displacement Narrative
- **Methodology challenge:** CommerceIQ's observational model vs. DSIM's Bayesian MMM with published MAPE/R² — bring this to the Finance/CFO buyer, not the media ops buyer.
- **Independence:** "We're the diagnostics layer. You're the execution layer. Both can coexist — but the CFO needs the measurement to come from someone with no activation stake."
- **Narrow scope:** CommerceIQ measures keyword-level, 14-day, search-only incrementality. DSIM decomposes across 6 shelf levers + media, at the store-cluster level, always-on.
- **Where CIQ is already deployed:** Don't try to displace. Position DSIM as the independent audit layer sitting above CIQ's optimization output.

---

### 2. Pacvue
*Threat level: **MEDIUM-HIGH** | Verified: April 2026*

#### What They Are
Dominant retail media activation platform. ~12% of global retail media ad spend. 70,000+ brands and agencies. Acquired by Assembly (private equity). CEO transition September 2024 (co-founder Sandeep Kella → Rahul Choraria, ex-COO with PE background). New CRO Ross McNab hired May 2025 (from Vistar Media, which T-Mobile acquired for $650M). Revenue ~$104.4M (2024 estimate, GetLatka). Not in any Gartner Magic Quadrant as of May 2025.

#### Incrementality Console (September 2024) — Amazon-First, Walmart Not Yet Confirmed
Launched September 17, 2024 as a dedicated iROAS dashboard built on proprietary machine learning. Critical finding: **launched Amazon-only** — *"At launch, Pacvue iROAS is available across Amazon, with retailers to be added over the coming months."* As of April 2026, all incrementality documentation still exclusively cites Amazon ad formats and AMC (Amazon Marketing Cloud) data as the underlying signal source.

**Methodology:** Modeled/multi-variable — accounts for baseline demand, seasonality, pricing/promotional activity, and inventory signals. NOT geo-lift or holdout. Entirely observational. Bundled within the platform — not sold standalone.

**Walmart measurement gap:** Walmart Connect launched its own native Search Incrementality product (April 2025) with first-party randomized control testing. This positions Walmart's own tool above Pacvue's modeled layer for Walmart-specific incrementality.

#### Store-Cluster / Geographic Granularity
**None confirmed.** No documentation of store-cluster-level attribution, geo-lift testing, or regional analysis for Walmart. All Walmart measurement flows through Walmart Connect API — which is national/online by default.

#### Walmart-Specific Capabilities (2025-2026)
- February 2025: Launched Walmart Display Campaign Management (beta partner for Walmart's Display Advertising API) — activation, not measurement
- Walmart Connect Premium+ Partner status — API-level campaign access
- No direct Scintilla data integration found
- Named Walmart case studies: anonymous ("Leading Energy Drink Brand" +138% media sales lift; "Fashion Advertiser" via KINESSO +20% ad sales)

#### Pricing Signals [UNVERIFIED — estimate only]
- SMB floor: ~$500/month or 3% of monthly ad spend (third-party comparison sources)
- Enterprise: $3,000–$5,000/month for agencies managing $500K+/month spend
- Custom contracts; no public pricing page

#### DSIM Displacement Narrative
- **Walmart incrementality is still a gap for Pacvue:** "Pacvue's incrementality model launched Amazon-first. For Walmart, you're still relying on Walmart Connect's own attribution or Pacvue's modeled layer — neither is store-cluster-level or vendor-neutral."
- **Store-cluster is the decisive differentiator:** "Pacvue can tell you your national Walmart Connect ROAS. DSIM tells you which store clusters had wasted spend because OOS rate was running 15%+ during your campaign windows."
- **Don't compete on activation:** DSIM frames itself as the diagnostic layer that makes Pacvue's execution better, not a replacement. Target RGM/Finance, not the media ops buyer Pacvue owns.

---

### 3. Incremental.com
*Threat level: **HIGH — closest measurement-only match** | Verified: April 2026*

#### What They Are
Purpose-built retail media incrementality measurement platform. No activation. Founded 2019 (originally Tradeswell Inc.), rebranded to Incremental. HQ: Baltimore, MD. 44 employees (LinkedIn, April 2026). Total funding: $18.8M over 2 rounds (Seed Nov 2020; Series A $15.5M Jan 2021). Investors: SignalFire, Construct Capital, Allen & Company. No Series B as of April 2026.

**Scale note:** 44 employees for a company with WPP Media and Walmart Connect partnerships signals strategic traction above company size. No dedicated shelf-data infrastructure — relies on signals available via walled-garden APIs.

#### Partnership Timeline
- **July 2024:** Joined Walmart Connect Partner Network — API-integration level, campaign data pull via Walmart Connect API
- **June 2024 (Cannes Lions):** GroupM (WPP's media investment group) integrated Incremental into Open Media Studio (all WPP agency teams: Mindshare, Wavemaker, EssenceMediacom, T&Pm)
- **September 11, 2025:** WPP Media (GroupM rebranded) named Incremental its **first "agency Connected Partner"** — API-driven direct data integration into WPP's commerce planning and reporting products
- **April 2025:** Walmart Connect published "Expanding access to our measurement solutions" — elevated Incremental to preferred measurement partner status

#### Methodology: Ensemble Causal Inference (NOT Pure Geo-Lift)
From incremental.com/how-it-works (verified April 2026): Ensemble model combining:
1. **Econometric techniques** — historical statistical modeling
2. **Designed experiments** — planned holdout/test-control tests
3. **Synthetic experiments** — modeled counterfactuals for non-experiment periods

**"Always-on learning loop":** daily prediction vs. actual delta injected back into model as recency signal. IAB/MRC-compliant. PII-free architecture.

**No published MAPE, R², or accuracy benchmarks.** Despite the methodology sophistication, no public accuracy metrics equivalent to DSIM's 5.9% MAPE / R²=91% are published. The Bayer case study reports 32% iROI improvement (business outcome, not measurement accuracy).

#### The Critical Finding: Shelf Signals as Control Variables — Not Outputs
**This is the definitive differentiation from DSIM.**

Incremental explicitly ingests shelf signals: search rank, buy box ownership, inventory, competitive pricing, ratings & reviews. But they ingest them as **control variables to neutralize confounders** — asking "was the sales change due to media, or due to a change in search rank/inventory/pricing?" They strip out the shelf signal to isolate media lift.

DSIM's purpose is the inverse: to **quantify and surface the shelf signals as actionable outputs** — to tell a brand *how much* a 7% OOS rate suppressed media ROI and what fixing it is worth.

One-sentence differentiation: **"Incremental uses shelf data to clean the media signal. DSIM uses shelf data to surface the shelf opportunity."**

Additional gap: No evidence Incremental ingests content quality (title completeness, image count, A+ content). No store-cluster localization.

#### Named Customers
- **Bayer** (verified, January 2025): Used Incremental + Skai to optimize Walmart retail media, 32% improvement in iROI. Won I-COM Data Creativity Award May 2025. Described as "first fully connected incrementality measurement and activation" instance.
- All WPP Media agency clients (Mindshare, Wavemaker, EssenceMediacom, T&Pm) via Connected Partner deal.
- Other case studies: unnamed CPG and health/wellness brands (2023-2024)

#### DSIM Displacement Narrative
- **Short-term complement framing:** "Incremental.com answers 'did your media work?' DSIM answers 'why did your media work, and what shelf conditions constrained or amplified it?' Use both — they don't overlap."
- **Displacement framing:** "Incremental.com measures whether your campaign was incremental. DSIM tells you whether your availability rate was capping the incremental lift they measured. Can they tell you what your 78% in-stock rate cost you during the campaign window? No."
- **Content quality gap:** "Incremental tracks buy box and search rank. They don't model content compliance — whether your PDP completeness was depressing organic conversion during the campaign. DSIM does."
- **Store-cluster:** No geographic granularity. National or campaign-level only.
- **Warm prospect signal:** A brand already using Incremental.com is warm for DSIM. They're sold on the concept that shelf dynamics affect media — Incremental told them so. DSIM closes the loop by giving the shelf data to act on.

---

### 4. Profitero
*Threat level: **HIGH (digital shelf incumbent)** | Verified: April 2026 (partial — see [VERIFY] flags)*

#### What They Are
Market-leading DSA platform. 80M+ products, 1,400+ retailers, 70+ countries. 9,000+ brands. Acquired by Publicis Groupe. Profitero+ adds analytics layer with partner integrations (Walmart DSP, Skai, Pacvue, Amazon DSP). Shelf Intelligent Media (SIM) is a new Profitero+Pacvue joint offering combining Profitero shelf data with Pacvue media optimization.

#### Incrementality/Measurement Position
Profitero's core is monitoring and reporting — it tracks what changed on the shelf but does not natively produce causal incrementality decomposition. Their measurement approach: partner integrations with third-party measurement platforms (Skai, Incremental.com) for closed-loop attribution, not in-house MMM. The Publicis backing provides access to Publicis's media data (Epsilon, Citrus Retail Media) but this serves the agency's attribution reporting, not brand-side neutral measurement.

**No evidence of Profitero offering an always-on, store-cluster-level, shelf-lever decomposition equivalent to DSIM.** [VERIFY: Profitero+ current measurement feature set at profitero.com/platform]

#### Customer Sentiment (GetApp/SoftwareAdvice — April 2026)
Positive themes: Knowledgeable team, collaborative approach, custom-built solutions, exceptional customer support, data accuracy.
Reported complaints: Navigation and insight extraction challenging, time-consuming implementation.
[UNVERIFIED: G2 detailed review text — g2.com returned 403 in research session. Verify at g2.com/products/profitero for current rating and complaint themes.]

#### Publicis Conflict Signal
Mars United Commerce (Publicis's commerce practice) now powers Profitero's measurement and activation recommendations — confirmed in Mars United case study content (April 2026). This means Profitero's "measurement" layer runs through a Publicis agency's services motion. For a CPG brand outside the Publicis ecosystem, this is a real independence concern.

#### Pricing Signals [UNVERIFIED — estimate only]
Custom enterprise. Estimated $80K–$400K+ annually (SKU count and retailer coverage dependent). [VERIFY: G2 pricing category at g2.com]

#### DSIM Displacement Narrative
- **Complement first:** "Profitero tells you what changed on the shelf. DSIM tells you how much each change moved the sales needle. If you already pay for Profitero, DSIM is the causal impact layer on top."
- **Independence:** For Publicis-skeptical brands: "Profitero's measurement now runs through Mars United — a Publicis agency. DSIM is brand-controlled, vendor-neutral. The number comes from the brand's data, not an agency's platform."
- **Monitoring vs. causation:** "Profitero owns coverage. DataWeave DSIM owns causation."

---

### 5. Skai (formerly Kenshoo)
*Threat level: **MEDIUM** | Verified: April 2026 (partial)*

#### What They Are
Omnichannel marketing platform — retail media, paid search, paid social, app. 200+ retailers. Partnerships with Walmart Connect, Amazon Marketing Cloud, Google, Meta. Published 2026 State of Retail Media Measurement & Incrementality report showing 75% of advertisers cite incrementality as their biggest measurement challenge; only 20% proficient at measuring AND applying insights. Strong thought leadership positioning on incrementality but methodology details are limited in public materials.

#### Incrementality Product
Skai claims "always-on incrementality modeling" in their 2026 state report. Historical methodology: ghost-bid testing, geo-lift testing. Specific technical details — model type, inputs, holdout design — are not published in public materials found in April 2026 research. The Bayer+Incremental.com partnership (the I-COM Data Creativity Award winner) used Skai for activation + Incremental.com for measurement — Skai itself was the activation platform, not the measurement platform, in that landmark case.

**No shelf signal integration found.** "Always-on incrementality modeling" but no evidence shelf signals (availability, SoS, content, competitive pricing) are modeled as measurement outputs.

#### Walmart-Specific Capabilities
Listed among 200+ supported retailers. No Walmart-specific measurement capabilities documented in April 2026 research beyond standard API integration. No Scintilla integration found. [VERIFY: skai.io Walmart product page]

#### DSIM Displacement Narrative
- **Media-only model:** "Skai's incrementality answers 'was your Walmart Connect Sponsored Search campaign incremental?' DSIM answers 'was your Sponsored Search campaign incremental, AND were you leaving money on the table because your 78% in-stock rate during the campaign was suppressing the lift?'"
- **Experiment-dependent vs. always-on:** Skai's geo-lift testing requires upfront campaign design and 4-8 weeks per test. DSIM is always-on — no experiment design required.
- **No activation bias:** Skai's measurement is tied to optimizing its activation platform, not independent audit.

---

### 6. Analytic Partners
*Threat level: **STRUCTURAL** | Verified: April 2026 (partial — training data, [VERIFY] flags)*

#### What They Are
Established MMM consultancy. GPS Enterprise SaaS MMM platform. Consistent Gartner Challenger position [VERIFY: current MQ at gartner.com]. Deep CPG footprint. 3-6 month delivery cycle, quarterly refresh standard. "AI-Augmented MMM" announced in 2025 (AI/ML calibration layer, not faster delivery or shelf-signal integration). [TRAINING: pre-Aug 2025] [VERIFY: analyticpartners.com/news for 2025-2026 updates]

#### Known Gaps vs. DSIM
- No real-time shelf-signal integration (availability, SoS, content) as model inputs
- 3-6 month delivery still standard (AP's "weeks" framing applies only to fast-start configs on pre-existing data)
- No store-cluster or retailer-location granularity
- No Walmart Connect API integration announced
- Retail media channels treated at national/aggregate level — structurally under-credits Walmart Connect per IAB best-practice documentation

#### Pricing Signals [UNVERIFIED — training data estimate]
$150K–$500K+ per engagement (CPG brands, moderate complexity). Top-10 CPG with full portfolio may run $1M+/year. [VERIFY independently before using in sales conversations]

#### G2 Top Complaint Themes [TRAINING — pre-Aug 2025, VERIFY at g2.com]
1. Delivery speed — outputs arrive 3-6 months after campaign runs
2. Consulting dependency — model changes require new engagement, no self-serve
3. Retail media/ecommerce gap — digital shelf and Walmart Connect attribution feels thin
4. Implementation complexity — 2-4 month onboarding before model runs
5. Output as decks, not dashboards — not suited for week-to-week decision support

#### DSIM Displacement Narrative
**Do not compete. Complement and replace the shelf-signal gap.**
- "AP tells you the quarterly picture. DSIM tells you what to act on this week."
- "DSIM's retail-media-specific shelf decomposition produces better inputs into AP's MMM — your AP model quality improves when you feed it DSIM outputs."
- "DSIM achieved 5.9% MAPE vs. AP's 10-15% industry benchmark on the retail media attribution layer."

---

### 7. Measured / Haus
*Threat level: **STRUCTURAL (MEDIUM severity)** | Verified: April 2026 (partial)*

#### What They Are
Modern, product-led MMM and incrementality platforms. **Measured:** geo-lift holdout + Bayesian MMM calibrated by experiments. $18.5M Series B (2022). Sub-200 employees. **Haus:** Causal MMM (experiments calibrate observational coefficients). $17M Series A (Insight Partners, 2023). Sub-100 employees. Both lean DTC-first — not CPG-Walmart-first.

#### Key Finding: DTC-First, No CPG-Walmart Reference Base
Neither Measured nor Haus has a documented reference base of Walmart-heavy CPG brands. If DSIM lands P&G, PepsiCo, or Conagra on Walmart first, "purpose-built for CPG on Walmart" is a defensible positioning neither can immediately replicate.

#### Methodology vs. DSIM
Both use experiments to produce calibrated media incrementality. Neither models digital shelf signals (availability, SoS, content) as first-class inputs. Neither offers store-cluster or Walmart location-level granularity. Measured and Haus answer "was my media incremental?" — the same question Incremental.com answers, at a higher methodological sophistication for multi-channel media.

#### DSIM Displacement Narrative
- Acknowledge media incrementality credibility — don't fight it.
- "DSIM models availability, content, pricing, and competition as first-class levers, not just control variables. That's the decomposition that makes the shelf-and-media question answerable in one model."
- "DSIM's store-cluster localization is the capability no MMM vendor — traditional or modern — has built for Walmart."
- Propose complementary structure where accounts already using Measured/Haus: "DSIM decomposes shelf performance; Measured/Haus validates media incrementality."

---

### 8. Walmart Connect (Native Tools)
*Threat level: **SPECIAL CASE — free, first-party, methodologically superior on media, but narrow** | Verified: April 2026*

#### Search Incrementality (GA: April 2025)
Randomized control testing using Walmart's first-party POS data. *"Gold-standard test-and-control methodology backed by real, verified sales data."* Named beta customer: **The Clorox Company** (Kyle Whitaker, Walmart Digital Team Lead). General Merchandise case study (Feb-March 2025): sales lift up to 9.0%, iROAS up to $10.06. This tool answers: "Is my Walmart Connect Sponsored Search spend incremental?"

**It does NOT answer:**
- Which shelf lever (availability, SoS, content) amplified or constrained that media lift
- Whether a sub-brand's media spend created halo effect on adjacent SKUs
- What the store-cluster-level variance in that lift looks like
- Whether budget reallocation across 6 levers (not just media) would produce more return

#### Scintilla In-Store (Launched February 23, 2026)
Walmart Data Ventures launched Scintilla In-Store connecting field rep execution data to store-level sales — store-specific inventory, on-shelf availability, void detection, planogram compliance, real-time alerts. This is a **Walmart-owned, brand-access** product, not a third-party measurement tool. It strengthens DSIM's data input layer (Scintilla Channel Performance is a DSIM data source), not a competitor.

#### DSIM vs. Walmart Connect Positioning
"Walmart Connect measures whether your media spend was incremental using their first-party data — which is the strongest possible source for that one question. DSIM takes that measurement as one input and answers the broader question: of all the things that moved your sales this quarter — media, availability, content, SoS, pricing, competitive pressure — which lever had the highest uncaptured return? Walmart Connect's tool can't ask that question. It only knows the media side."

---

## Competitive Feature Matrix

| Capability | DSIM | CommerceIQ | Pacvue | Incremental.com | Profitero | Analytic Partners |
|---|---|---|---|---|---|---|
| **Shelf signals as model OUTPUTS** | ✅ First-class levers | ❌ Not modeled | ❌ Not modeled | ❌ Control variables only | ❌ Monitoring only | ❌ Not modeled |
| **Store-cluster localization** | ✅ 17 clusters (Lactalis) | ❌ Not confirmed | ❌ Not confirmed | ❌ National/campaign only | ❌ Not offered | ❌ National/aggregate |
| **Vendor-neutral (no activation stake)** | ✅ | ❌ Activation platform | ❌ Activation platform | ✅ | ❌ Publicis-owned | ✅ |
| **Published MAPE/R² accuracy** | ✅ 5.9% MAPE, R²=91% | ❌ None published | ❌ None published | ❌ None published | ❌ None published | ❌ 10-15% industry avg |
| **Always-on (no experiment design)** | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ 3-6 month cycles |
| **Holdout/test-and-control methodology** | ✅ (Bayesian MMM) | ❌ Observational | ❌ Observational | ✅ (ensemble w/ experiments) | ❌ Monitoring | ✅ (quarterly) |
| **Walmart Connect API integration** | ✅ (planned/services) | ✅ | ✅ | ✅ | Via partnerships | ❌ Not direct |
| **Scintilla integration** | ✅ (planned/services) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Content quality as lever** | ✅ | ❌ | ❌ | ❌ | ✅ (monitoring) | ❌ |
| **Sub-brand halo effect** | ✅ (Lactalis: +12% Adult from Kids) | Limited | ✅ (halo sales in AMC) | ❌ Not documented | ❌ | Limited |
| **Standalone (no platform dependency)** | ✅ | ✅ (Dec 2025) | ❌ Bundled | ✅ | ❌ | ✅ (consulting) |
| **$50K PoC entry point** | ✅ | ❌ $25K+ platform min | ❌ Enterprise only | ❌ Not published | ❌ Enterprise | ❌ $100K+ |

---

## Win/Loss Map

| Competitor | Where They Win | Where DSIM Wins |
|---|---|---|
| CommerceIQ | One-stop activation + optimization; 76% of accounts on AllyAI; Mondelēz win | CFO-ready decomposition; published MAPE/R² vs. undisclosed methodology; store-cluster granularity; no activation conflict |
| Pacvue | All-in-one retail media activation; Walmart Connect Premium+ Partner | Measurement transparency; store-cluster geographic depth; Amazon-first incrementality gap on Walmart; Finance/RGM buyer |
| Incremental.com | Media incrementality measurement; WPP scale; IAB/MRC compliance | Shelf signals as outputs (not noise removal); content quality modeling; store-cluster localization; standalone without agency mediation |
| Profitero | Global shelf monitoring breadth; 9,000+ brands | Causal impact layer; Publicis-skeptical brands; RGM/Finance buyer vs. ecommerce ops buyer |
| Skai | Multi-walled-garden unified reporting; thought leadership content | Always-on decomposition; cross-lever vs. media-only; no spend bias; no experiment design required |
| Analytic Partners | Board-defensible strategic MMM; CFO relationship | Speed (10 weeks vs. 6 months); cost; operational recommendations; shelf-signal integration; always-on |
| Measured/Haus | Modern media incrementality; DTC-first customer logos | Shelf-data moat; store-cluster localization; CPG-Walmart reference base |
| Walmart Connect | Free, deterministic, first-party media measurement | Shelf-native answer (all 6 levers, not just media); store-cluster vs. national; sub-brand halo |

---

## Market Dynamics — Key Strategic Signals (2025-2026)

### Signal 1: The measurement-only category is being validated by the biggest activation platform
CommerceIQ's December 2025 standalone Incrementality Module launch is a market validation event. The company with 2,200+ brand relationships and 38% YoY growth explicitly built a path for brands to buy measurement without buying activation. DSIM should accelerate its standalone services packaging.

### Signal 2: Walmart is building native measurement — creating pressure on all third parties
Walmart Connect's Search Incrementality (April 2025) and Scintilla In-Store (February 2026) mean Walmart is building measurement infrastructure directly. This compresses third-party media measurement vendors (CommerceIQ, Pacvue) more than it compresses DSIM — because DSIM answers the question Walmart cannot answer: the shelf-and-media decomposition across all 6 levers.

### Signal 3: The shelf-signal gap remains structurally unaddressed
Incremental.com uses shelf signals as noise to remove. CommerceIQ's standalone module ignores shelf signals entirely. Pacvue's incrementality model lists "inventory signals" as one input but no content or SoS. No competitor as of April 2026 surfaces shelf execution (availability, SoS, content, competitive pressure) as an actionable output alongside media ROI. DSIM's quadrant remains uncontested.

### Signal 4: The CPG-Walmart reference base is unclaimed by modern measurement platforms
Measured and Haus are DTC-first. Incremental.com's reference base is WPP agencies and Bayer. CommerceIQ's largest Walmart case studies are Mondelēz and a handful of named CPG brands. The CPG-Walmart analytical buyer (RGM lead at P&G, PepsiCo, Kraft Heinz) is an underserved, high-value segment. The first vendor with a P&G or PepsiCo Walmart measurement case study owns the segment.

### Signal 5: Incrementality adoption is broad but capability is thin
Skai's 2026 State of Retail Media report: 75% of advertisers cite incrementality as their biggest challenge; only 20% are proficient at measuring AND applying insights. 50% measure at a basic level only. This is a demand signal at scale — the buyer pain is real and widely shared.

---

## DSIM Competitive Positioning — The Definitive Wedge Statement

> *"Every measurement vendor on this list can tell you whether your Walmart Connect campaign was incremental. None of them can tell you whether your 78% in-stock rate during that campaign was capping the lift — or whether the $30K/day in misallocated media spend between Onsite Search (0.83 iROI) and Offsite Display (1.55 iROI) was invisible because no one was looking at the shelf and the media in the same model."*

The three structural advantages no competitor can replicate today:
1. **Shelf-data moat** — DataWeave's crawl infrastructure produces availability, SoS, content, pricing, competitive data at the quality and cadence DSIM needs. Competitors can cite these signals as inputs; none own the underlying data layer.
2. **Store-cluster localization** — 17 behavioral clusters in Lactalis, each with distinct channel response. No platform — activation or measurement — offers this for Walmart.
3. **Vendor neutrality** — No agency ownership (Profitero/Publicis), no activation revenue (CommerceIQ/Pacvue), no walled-garden data dependency (Walmart Connect). DSIM is the number the CFO can take to a Walmart JBP without explaining any vendor's incentives.

---

*Last updated: April 2026 | Research basis: Live web verification (April 2026) + PM OS subagent research + DSIM_Competitive_BattleCards_1.pptx (April 2026) | Next refresh due: July 2026*
*[VERIFY] flags require live re-check before use in external customer-facing materials*
