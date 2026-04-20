# DSIM — Market Research & Agent Plan of Action
**Product:** Digital Shelf Impact Measurement (DSIM) — DataWeave
**Retailer focus:** Walmart (baseline)
**Prepared:** April 16, 2026
**Status:** Research-based draft. All [VERIFY] claims require live-web validation before use in external materials.

---

## 1. What DSIM Is — Product Brief for Agents

DSIM is DataWeave's digital marketing mix model for retail brands selling on Walmart. It is **not** a media activation platform, **not** a reporting dashboard, and **not** a traditional MMM consultancy engagement.

**How it works:**

```
DSA KPI Inputs                    Sales Outcome
─────────────────────             ────────────────────
Share of Search (SOS)             Walmart online sales
Share of Category (SOC)           (store-aggregate level,
Pricing & Promotions              last 3 months rolling)
Ratings & Reviews           ──→   DSIM model predicts:
Content compliance               - Baseline sales
Availability / OOS               - Incremental impact
Sponsored visibility               per KPI lever
Competitive pressure
```

**What DSIM answers for a brand:**
> "If I improve my share of search from 12% to 18% in the Snacks category on Walmart, what is the predicted dollar impact on my sales — by store cluster?"

**Model validation benchmarks (internal, per battlecard):**
- ~5.9% MAPE forecast accuracy
- High R-squared with stable variance
- Store-cluster localization: groups store locations by shopping behavior, not geography
- Reference engagement: $500K+ annualized incremental revenue opportunity unlocked through budget reallocation

**Data sources DSIM uses:**
1. DataWeave's own Digital Shelf Analytics platform (SOS, SOC, content, availability, pricing, reviews)
2. Integration with third-party DSA platforms (e.g., Profitero — KPI or file-based integration)
3. Walmart Luminate or brand-provided sales data (online channel, store-aggregate level)
4. Walmart Connect API data (ad spend, attributed sales, ROAS — to separate media lift from organic shelf lift)

**What makes it defensible:**
- Shelf-data moat: DataWeave's crawl infrastructure is production-grade, normalized across retailers, and real-time — competitors can reference it via integration but cannot replicate the underlying data quality
- No activation conflict: DataWeave does not sell media, run campaigns, or sit inside an agency — the output is brand-controlled, vendor-neutral measurement
- Store-cluster granularity: DSIM models at store cluster level, not national aggregate — directly actionable for field teams and RGM

---

## 2. Competitive Landscape — Full Intelligence Brief

### 2.1 Threat Map

DSIM sits at the intersection of three markets. No single competitor currently occupies the same quadrant.

```
High shelf-data depth + High impact modeling = DSIM's quadrant (currently uncontested)

HIGH SHELF · HIGH IMPACT        ← DataWeave DSIM target position
HIGH SHELF · LOW IMPACT         ← Profitero, Intelligence Node, Ascential Edge (today)
LOW SHELF · HIGH IMPACT         ← Analytic Partners, Nielsen, Circana, Measured/Haus
LOW SHELF · MEDIUM IMPACT       ← Pacvue, Skai, Flywheel (retail media platforms)
```

### 2.2 Competitor Profiles

> Source: DSIM_Competitive_BattleCards_1.pptx (April 2026) — verified internally.
> Training-data claims labeled [VERIFY].

---

#### CommerceIQ — HIGH THREAT (Closest 1:1 match)

**What they are:** Unified Retail Ecommerce Management (REM) platform — sales analytics, retail media, content, and digital shelf in one stack. 2,200+ brands, 650+ retailers. iROAS-native optimization using 50+ real-time signals. [VERIFY: current platform scope, retailer coverage — commerceiq.com]

**How they measure incrementality:** iROAS is embedded in the activation engine — model and action are inseparable. Closed-loop automation executes bid/budget changes on the incremental signal. Methodology is not published; no MAPE/R-squared equivalents disclosed. [VERIFY: current methodology documentation]

**Pricing:** Not publicly listed. Estimated $150K–$500K+ enterprise annually (percentage-of-managed-spend or SaaS). [VERIFY]

**Key accounts:** Nestlé, Colgate, Whirlpool (per internal battlecard). [VERIFY: current case studies at commerceiq.com]

**Weaknesses vs. DSIM:**
- Incrementality is inseparable from media activation — cannot be sold as standalone analytics to Finance/RGM buyers
- Black-box methodology; not defensible to a CFO without vendor explanation
- No published MAPE or R-squared equivalents
- Store-cluster granularity weaker than DSIM's decomposition
- Full-platform rollout creates change-management overhead

**Displacement narrative:**
Position DSIM as the **decision-support and diagnostic layer**, not an activation replacement. Lead with: *"Can you defend those incrementality outputs to your CFO without black-box explanations?"* Deploy MAPE/R-squared proof points — CommerceIQ publishes none. Offer narrow PoC (one category, one retailer, 3 months) vs. CommerceIQ's full-platform requirement. Where CommerceIQ is already deployed: position as complementary, not competitive.

---

#### Profitero — HIGH THREAT (Digital shelf incumbent)

**What they are:** Market-leading DSA platform. 80M+ products, 1,400+ retailers, 70+ countries. [VERIFY: current counts] Acquired by Publicis Groupe. Profitero+ adds analytics layer with partner integrations (Walmart DSP, Skai, Pacvue, Amazon DSP). 9,000+ brands.

**How they measure incrementality:** Monitoring and reporting at the core — tracks what changed on shelf, does not natively decompose causal impact. Profitero+ measurement uses partner integrations for quasi-closed-loop attribution. MMM-grade causal decomposition is not their IP. [VERIFY: Profitero+ measurement methodology depth as of Q1 2026]

**Pricing:** Custom enterprise. Estimated $80K–$400K+ annually (SKU count and retailer coverage-dependent). [VERIFY]

**Weaknesses vs. DSIM:**
- Monitoring heritage, not causal modeling heritage
- Publicis ownership creates perceived channel conflict for brands outside Publicis agencies
- Profitero+ is newer and less proven; methodology is not published at DSIM's standard
- Premium cost when brand only needs the impact layer

**Displacement narrative:**
Concede shelf-monitoring breadth — don't fight it. Position DSIM as the causal impact layer on top of Profitero (or any other monitoring tool). Target RGM/Finance buyer, not the ecommerce ops buyer Profitero owns. Core question: *"Profitero tells you what changed. Can it tell you how much of your sales lift would have happened without the spend?"* On Publicis-skeptical accounts: lean into DataWeave's independence.

---

#### Ascential Edge / NIQ — HIGH THREAT

**What they are:** Digital commerce analytics (placement, pricing, availability monitoring) plus category and market-share reporting. Acquired by NielsenIQ — creates cross-sell into NIQ's POS customer base. Also includes Perpetua (retail media automation) and Brandbank (product content). [VERIFY: post-acquisition product naming and packaging — NIQ may have rebranded Edge components]

**How they measure incrementality:** Heritage is category analytics and descriptive market share — not causal shelf-lever decomposition. NIQ combination enables POS + ecommerce view but causal retail-media-specific modeling is not a published strength. [VERIFY: NIQ's current retail media measurement product suite]

**Weaknesses vs. DSIM:**
- Post-acquisition integration friction — product roadmap and pricing in flux
- Category analytics and market share heritage, not real-time shelf execution
- Less dynamic than Profitero, CommerceIQ, or DataWeave on competitive shelf monitoring
- Retail media measurement capabilities weaker than specialized platforms
- Two-acquisition bundle story not yet fully integrated

**Displacement narrative:**
Acknowledge NIQ's POS-data strength, then position DSIM as the shelf-and-media impact layer POS data doesn't reach. Speed argument: DSIM updates on shelf-change cadence; NIQ syndicated data is weeks. Target retail media and ecommerce-native buyer — NIQ owns category management. Note acquisition uncertainty vs. DataWeave's focused roadmap.

---

#### Pacvue — MEDIUM THREAT

**What they are:** Dominant retail media management platform. ~12% of global retail media ad spend. [VERIFY: current managed-spend share] 70,000+ brands and agencies. Deep Walmart Connect, Amazon, Target, Instacart integration. AI-driven bidding and dayparting. Adding measurement layers via partnerships.

**How they measure incrementality:** Measurement relies on first-party retailer signals and platform attribution. ROAS-led optimization — incrementality is additive, not the core model. No SKU-cluster shelf-signal integration (availability, content, competitive pricing). [VERIFY: Pacvue's current incrementality measurement product]

**Weaknesses vs. DSIM:**
- ROAS-led; incrementality is not the native output
- No SKU-cluster-level shelf decomposition — national or campaign-level only
- Shelf-signal integration is narrower than purpose-built DSA
- Black-box activation to Finance/RGM buyers
- Channel conflict with agencies

**Displacement narrative:**
Do not compete on activation. Frame DSIM as the measurement and diagnostic layer that makes Pacvue's execution better. Target RGM, Analytics, or Finance buyer — Pacvue's buyer is retail media ops. Core question: *"Pacvue executes the campaign. Can it tell you how much of the lift was already going to happen?"* Shelf-signal depth (availability, pricing, content, competition) is the differentiator. Strategic framing: DSIM sets strategy and guardrails; Pacvue executes within them.

---

#### Skai (formerly Kenshoo) — MEDIUM THREAT

**What they are:** Omnichannel marketing platform — retail media, paid search, paid social, app. Partnerships with Walmart Connect, Amazon Marketing Cloud, Google, Meta. Heavy on incrementality content — ghost-bid methodology, geo-lift testing. 2,000+ brands. [VERIFY: current customer count and recent product evolution — check skai.io]

**How they measure incrementality:** Test-and-control / geo-lift — not shelf-decomposition MMM. Requires campaign design upfront; measures one media channel at a time. Strong Amazon Marketing Cloud closed-loop access. [VERIFY: current methodology documentation]

**Weaknesses vs. DSIM:**
- Experiment-dependent — slow, requires upfront design; DSIM is always-on
- Media-only measurement — does not model availability, content, or competitive shelf dynamics as first-class levers
- No store-cluster localization; typically national
- Feels like a media-agency tool to Finance/RGM buyers
- Tied to activation revenue; implicit recommendation bias

**Displacement narrative:**
Position DSIM as the cross-lever model (shelf + media + pricing + availability) vs. Skai's media-only measurement. Core challenge: *"Skai can tell you the incremental lift of your Sponsored Search campaign. Can it tell you how availability or content interacted with that lift?"* Always-on vs. experiment-dependent cadence. DataWeave's neutrality: no spend bias. Store-cluster localization is a strong differentiator Skai cannot match.

---

#### Intelligence Node — MEDIUM-HIGH THREAT

**What they are:** India-based digital shelf and pricing analytics. Markets AI-driven analytics with 99% accuracy claims. [VERIFY: accuracy methodology and current products] Growing US presence, mid-market focused. Overlaps with DataWeave's core DSA positioning. Aggressive pricing, especially mid-market and APAC.

**Weaknesses vs. DSIM:**
- No published MAPE, R-squared, or methodology validation for incrementality claims
- Weaker retail media integration
- National-level aggregates; no store-cluster localization
- Thinner US enterprise CPG reference base on Walmart-specific use cases
- Lower brand awareness in US ecommerce buyer circles

**Displacement narrative:**
If buyer is anchoring on price, reframe ROI: *"DSIM's $500K+ incremental revenue opportunity makes the cost-delta irrelevant."* Request their incrementality methodology documentation — they will not have a DSIM-equivalent framework. Press on Walmart-specific references. Offer narrow PoC that mid-market buyers can approve without a full procurement cycle.

---

#### Analytic Partners — STRUCTURAL THREAT

**What they are:** One of the most established MMM consultancies. Gartner Magic Quadrant regular. [VERIFY: current MQ placement] Deep CPG and Walmart-brand footprint. Consulting-heavy — dedicated analyst support, bespoke model builds, quarterly deliverables. Strong at integrating traditional media (TV, print, radio) with digital and retail media.

**How they measure:** Full econometric MMM decomposition — 3–6 month delivery cycle. Retail-media-specific methodology lags IAB best-practice per internal battlecard. [VERIFY: Analytic Partners' current retail media MMM treatment]

**Pricing:** $100K–$500K+ per engagement. [VERIFY] Scales with engagement scope, not SKU count.

**Weaknesses vs. DSIM:**
- Slow: 3–6 month delivery; outputs quarterly; DSIM is always-on
- Expensive at scale across a brand portfolio
- Shelf-signal integration weak — models media and promotions, not availability/content/competitive shelf at DSIM's granularity
- No campaign-level or ad-set-level bidding recommendations
- Consulting model doesn't scale without proportional cost increase

**Displacement narrative:**
Do not try to displace the MMM partner. DSIM is the operational, always-on complement to their strategic MMM: *"MMM tells you the quarterly picture; DSIM tells you what to do this week."* Use IAB argument that traditional MMM structurally under-credits retail media. Offer DSIM shelf-decomposition outputs as better inputs into their existing MMM — reducing perceived cannibalization. Price and speed are major advantages.

---

#### Circana (IRI + NPD) — STRUCTURAL THREAT

**What they are:** POS syndicated data leader (IRI + NPD merger). Deep Walmart data relationships. [VERIFY: current Walmart data agreement scope — Luminate partnerships evolving] Strong MMM and retail analytics practice. Sales and Finance teams at most major CPGs are deeply embedded in Circana tools — high switching cost.

**How they measure:** Heritage is descriptive (what happened at POS) — not causal at shelf-lever level. MMM practice produces causal decomposition but quarterly refresh, not real-time. Digital shelf and retail media measurement weaker than specialized players.

**Weaknesses vs. DSIM:**
- Descriptive by nature — tells you what sales did, not which lever drove the incremental unit
- Slow cadence for MMM work (monthly/quarterly, not real-time)
- Post-merger integration still settling
- No connection to online shelf execution at DSIM's granularity

**Displacement narrative:**
Concede the POS battle entirely. DSIM is the digital-shelf and retail-media layer Circana cannot match. Core challenge: *"Circana tells you what your sales did. Can it tell you which Walmart retail media campaign drove incremental units — and whether availability was the constraint?"* Target ecommerce and retail media buyer, not the sales/Finance buyer Circana owns. Offer DSIM outputs as feeds into Circana dashboards — reduce perceived cannibalization.

---

#### Measured / Haus / Sellforte — STRUCTURAL THREAT (Medium severity)

**What they are:** Modern, product-led MMM and incrementality platforms. Measured integrates geo-lift + weekly-refresh MMM. Haus offers Causal MMM rooted in experiments. Sellforte is purpose-built for retail and ecommerce campaign-level ROI. [VERIFY: current capabilities, funding, and status for all three] 4–6 weeks time-to-value vs. 3–6 months for traditional MMM.

**How they measure:** Measured and Haus combine experimental design (geo-lift holdouts, ghost bids) with Bayesian or causal MMM for weekly-refresh incrementality outputs. Methodologically credible on media — but shelf-signal gap is significant.

**Weaknesses vs. DSIM:**
- Media-first worldview — shelf signals are control variables at best, not first-class modeled levers
- Typically national-level; no store-cluster or retailer-location granularity
- Smaller enterprise CPG reference bases for Walmart-specific use cases
- Cannot replicate DataWeave's shelf-data moat

**Displacement narrative:**
Acknowledge their media incrementality credibility. Compete on shelf: *"DSIM models availability, content, pricing, and competition as first-class levers, not just control variables."* Emphasize DataWeave's shelf-data moat — a foundation these platforms cannot replicate. Store-cluster localization is the decisive differentiator. Propose complementary structure: DSIM decomposes shelf performance; they validate media incrementality.

---

### 2.3 Win/Loss Map

| Competitor | Where They Win | Where DSIM Wins |
|---|---|---|
| CommerceIQ | One-stop activation + optimization | CFO-ready decomposition; shelf-cluster granularity; complement to existing activation stack |
| Profitero | Global shelf monitoring breadth | Causal impact layer; Publicis-skeptical brands; RGM/Finance buyer |
| Ascential Edge / NIQ | POS + shelf via NIQ backing | Real-time depth; retail media buyer; roadmap clarity |
| Pacvue | All-in-one retail media activation | Measurement transparency; Finance/RGM buyer; shelf-signal depth |
| Skai | Multi-walled-garden unified reporting | Always-on decomposition; cross-lever vs. media-only; no spend bias |
| Intelligence Node | Price-sensitive mid-market shelf monitoring | Validated methodology; Walmart-specific references; store-cluster localization |
| Analytic Partners | Board-defensible strategic MMM | Speed (weeks vs. months); cost; operational recommendations; shelf-signal integration |
| Circana | POS ecosystem and Finance team lock-in | Digital shelf and retail media lever; ecommerce buyer; real-time cadence |
| Measured/Haus | Modern media incrementality | Shelf-data moat; store-cluster localization; shelf-signal as first-class inputs |

---

## 3. CPG/FMCG Brand Pain Points — What DSIM Solves

*Based on recurring practitioner themes through mid-2025 (G2 reviews, IAB/ANA publications, practitioner commentary). [VERIFY: confirm these themes remain current before using in sales decks]*

### Pain Point 1: Traditional MMM systematically under-credits retail media
CPG analytics leads consistently report their MMM outputs assign low/unstable coefficients to Walmart Connect and Amazon spend — producing ROI figures that contradict closed-loop platform data. Root cause: MMM was designed for TV/print; retail media operates at SKU, keyword, and day-part granularity with fundamentally different signal characteristics. The downstream consequence: retail media budgets get cut in planning cycles even when platform data shows strong returns. **DSIM is built natively for the closed-loop retail-media era.**

### Pain Point 2: No common language between media ROI and shelf execution
The ecommerce and retail media teams (who own Walmart Connect spend) are disconnected from category management and ecommerce ops teams (who own shelf conditions). No vendor connects the two causal streams into one model. The CFO or RGM lead asks *"what drove the incremental unit?"* and gets two separate, non-integrated answers. **DSIM is the first model that answers this question in a single decomposition.**

### Pain Point 3: Incrementality testing is slow, expensive, and operationally fragile
Geo-holdout and ghost-bid experiments are the gold standard, but running them at scale requires significant upfront campaign design, 4–8 weeks per test, agency or platform coordination, and high minimum spend thresholds. For a brand managing 10+ categories across 3+ retailers, this is not operationally viable. Most brands default to last-click ROAS — which they know is wrong but is fast. **DSIM is always-on — no experiment design required.**

### Pain Point 4: Store-level variability is invisible in national aggregate reporting
National ROAS of 4x can coexist with 400 stores where media spend is wasted because OOS rates are running 15%+. No activation platform or measurement vendor currently surfaces this at the store-cluster level as an actionable output. **DSIM's store-cluster localization is a direct answer to this gap.**

### Pain Point 5: Vendor conflicts make measurement outputs politically contested
Agency-owned DSA vendors (Publicis/Profitero), platform-owned measurement (Walmart Connect), and consultancy MMM all have conflicts of interest that make brands distrust the outputs. CPG practitioners increasingly want **independent, brand-controlled measurement** not dependent on any activation vendor. **DataWeave has no agency, no activation revenue, no spend stake — this is a structural positioning advantage.**

---

## 4. KPIs Brands Want DSIM to Move

These are the specific, measurable outcomes a CPG/FMCG brand would want DSIM to influence or validate. Organized by buyer persona.

### For the RGM (Revenue Growth Management) Lead
| KPI | What DSIM Enables |
|---|---|
| Incremental sales volume (by SKU, by store cluster) | Decomposes which shelf lever drove which volume increment |
| Promo ROI vs. everyday price strategy | Models lift contribution of promotional pricing vs. baseline |
| Price elasticity by category | Predicts sales sensitivity to price changes at cluster level |
| Share of category growth | Tracks which levers (content, availability, media) are expanding SOC |

### For the eCommerce / Retail Media Lead
| KPI | What DSIM Enables |
|---|---|
| iROAS (incremental ROAS on Walmart Connect) | Separates media-driven incremental units from organic baseline |
| Share of Search (SOS) improvement → sales impact | Quantifies predicted revenue impact of SOS gain in category |
| Availability rate → lost-sales estimate | Models revenue recovered if OOS events are eliminated |
| Content compliance score → sales impact | Predicts revenue contribution of PDP quality improvements |

### For the Finance / CFO Office
| KPI | What DSIM Enables |
|---|---|
| Defensible budget allocation across shelf levers | Each dollar allocated to a lever (media, pricing, content, availability) has a predicted return |
| Media vs. organic sales decomposition | Separates what would have sold anyway from what media drove |
| Forecast accuracy for Walmart channel | Model's ~5.9% MAPE gives Finance a reliable planning baseline |
| Portfolio-level incremental revenue opportunity | Identifies where reallocating shelf investment delivers the highest return across SKUs |

---

## 5. Target Brand List — Top 50 CPG/FMCG Brands on Walmart

*[VERIFY: all brand-level data sourced from training knowledge through Aug 2025 — confirm against current Walmart supplier data and trade publications before use in outbound]*

### Tier 1: Large (top Walmart supplier relationships) — Prioritize first

#### Daily Food & Beverages
| Brand | Parent Company | Heavy Walmart Retail Media Spender |
|---|---|---|
| Lay's | PepsiCo (Frito-Lay) | Yes |
| Doritos | PepsiCo (Frito-Lay) | Yes |
| Pringles | Kellanova | Likely |
| Ritz Crackers | Mondelez International | Yes |
| Oreo | Mondelez International | Yes |
| Heinz Ketchup | Kraft Heinz | Yes |
| Hellmann's | Unilever | Likely |
| Coca-Cola | The Coca-Cola Company | Yes |
| Pepsi | PepsiCo | Yes |
| Gatorade | PepsiCo | Yes |
| Minute Maid | The Coca-Cola Company | Likely |
| Frank's RedHot | McCormick & Company | Likely |
| Hidden Valley Ranch | Clorox (food division) [VERIFY] | Likely |

#### Breakfast Cereals & Morning Foods
| Brand | Parent Company | Heavy Walmart Retail Media Spender |
|---|---|---|
| Cheerios | General Mills | Yes |
| Honey Bunches of Oats | Post Consumer Brands | Yes |
| Frosted Flakes | Kellanova | Yes |
| Special K | Kellanova | Likely |
| Quaker Oats / Oatmeal | PepsiCo (Quaker Foods) | Yes |
| Pop-Tarts | Kellanova | Yes |
| Jimmy Dean | Tyson Foods | Yes |

#### Grains, Rice, Pasta & Staples
| Brand | Parent Company | Heavy Walmart Retail Media Spender |
|---|---|---|
| Ben's Original | Mars, Inc. | Yes |
| Barilla | Barilla Group (private) | Likely |
| Minute Rice | Riviana Foods (Ebro Foods) [VERIFY] | Likely |

#### Personal Care & Hygiene
| Brand | Parent Company | Heavy Walmart Retail Media Spender |
|---|---|---|
| Dove | Unilever | Yes |
| Head & Shoulders | Procter & Gamble | Yes |
| Pantene | Procter & Gamble | Yes |
| Old Spice | Procter & Gamble | Yes |
| Colgate | Colgate-Palmolive | Yes |
| Crest | Procter & Gamble | Yes |
| Gillette | Procter & Gamble | Yes |
| Axe | Unilever | Likely |

#### Household Cleaning Products
| Brand | Parent Company | Heavy Walmart Retail Media Spender |
|---|---|---|
| Tide | Procter & Gamble | Yes |
| Gain | Procter & Gamble | Yes |
| Dawn | Procter & Gamble | Yes |
| Mr. Clean | Procter & Gamble | Likely |
| Lysol | Reckitt Benckiser | Yes |
| Febreze | Procter & Gamble | Yes |

#### Baby & Family Care
| Brand | Parent Company | Heavy Walmart Retail Media Spender |
|---|---|---|
| Pampers | Procter & Gamble | Yes |
| Huggies | Kimberly-Clark | Yes |
| Johnson's Baby | Kenvue (spun from J&J) [VERIFY] | Likely |

#### Health & Wellness / OTC
| Brand | Parent Company | Heavy Walmart Retail Media Spender |
|---|---|---|
| Tylenol | Kenvue [VERIFY] | Yes |
| Advil | Haleon [VERIFY] | Yes |
| Centrum | Haleon [VERIFY] | Likely |

#### Pet Care
| Brand | Parent Company | Heavy Walmart Retail Media Spender |
|---|---|---|
| Purina (Friskies, Beneful, Dog Chow) | Nestlé | Yes |
| Pedigree | Mars, Inc. | Yes |
| Whiskas | Mars, Inc. | Likely |

#### Frozen & Refrigerated Foods
| Brand | Parent Company | Heavy Walmart Retail Media Spender |
|---|---|---|
| Birds Eye | Conagra Brands | Yes |
| Marie Callender's | Conagra Brands | Likely |
| Healthy Choice | Conagra Brands | Likely |
| Oscar Mayer | Kraft Heinz | Yes |

---

### Tier 2: Mid-Market Brands — Secondary outreach wave
*(High Walmart relevance, but smaller retail media budget — good fit for DSIM's PoC model)*
- Crystal Light (Kraft Heinz)
- Ronzoni (TreeHouse Foods [VERIFY])
- Sellforte-adjacent digital-native brands entering Walmart
- Regional CPG brands scaling Walmart.com presence

---

### Outreach Prioritization Logic

**Lead with Tier 1 parent companies** — one deal with P&G, PepsiCo, or Unilever unlocks multiple brands under the same corporate contract. Prioritize brands that are:
1. Heavy Walmart Connect spenders (they already have the media data DSIM needs as input)
2. In a renewal or growth cycle at Walmart (expansion of Walmart assortment = high urgency to prove shelf ROI)
3. Operating in competitive categories (Snacks, Personal Care, Cleaning — high SOS volatility = more DSIM value)
4. Known to have an internal RGM or eCommerce analytics function (they have the buyer persona)

**Avoid for initial outreach:**
- Brands where Walmart is a minor channel (<10% of total revenue) — low urgency to invest in Walmart-specific measurement
- Brands in highly regulated categories (Pharmaceutical OTC) without ecommerce-native buying teams

---

## 6. Walmart Connect + Luminate — Data Architecture for DSIM Integration

*[VERIFY: all Walmart API/Luminate data sourced from training knowledge through Aug 2025]*

### What Walmart Connect API Provides (DSIM uses as media spend inputs)

| Metric | Available via API | Notes |
|---|---|---|
| Impressions | Yes | Campaign, ad group, SKU level |
| Clicks + CTR | Yes | |
| Ad Spend | Yes | Daily and cumulative |
| Total Attributed Sales (TAS) | Yes | 14-day post-click attribution window [VERIFY] |
| ROAS | Yes | Derived field |
| Total Orders / Units (attributed) | Yes | |
| New-to-Brand (NTB) Orders | Selective | Available for some campaign types [VERIFY] |
| Keyword-level bid data | Yes | Sponsored Products |
| SKU-level performance | Yes | |

**What the API does not provide — DataWeave fills this gap:**
- Organic share of shelf / content compliance
- Competitor pricing, promotions, assortment changes on Walmart.com
- Cross-retailer benchmarking
- Real-time price and promo tracking (API batch refresh T+1 to T+7) [VERIFY]
- Out-of-stock signals at SKU × store × zip level
- Organic keyword rank tracking
- Ratings/review velocity and sentiment
- Assortment gap analysis

### What Walmart Luminate Provides (DSIM uses as sales data input)

| Module | Key Data for DSIM |
|---|---|
| Shopper Behavior | Basket composition, conversion funnels, shopper segments |
| Brand & Category | Market share, category velocity, top items by sales/units |
| Item Performance | Organic sales by SKU, in-store vs. online split |
| Advertising Analytics | Overlap between ad-exposed and organic purchasers |

**Access model:** Subscription-based, brand-direct. Third-party vendor access requires Walmart Luminate Channel Partners certification. [VERIFY: certification requirements and eligibility for DataWeave]

### Native Walmart Incrementality Tools (DSIM competes with / complements)

| Tool | What It Does | DSIM's Edge |
|---|---|---|
| Search Incrementality | Modeled estimate of sales lift from Sponsored Search (view-through + halo) | DSIM adds shelf-lever decomposition — availability, content, competitive pressure not in Walmart's model |
| AdMix Modeling | First-party MMM decomposing sales into media channel contributions | DSIM works at store-cluster level, not national; shelf signals are first-class inputs, not missing |

**Key DSIM positioning vs. Walmart Connect's own tools:**
Walmart Connect's native measurement is first-party, which is a data advantage for the media question. DataWeave's independence is the positioning advantage: DSIM answers the full shelf question (media + availability + content + pricing + competition), not just "how incremental is my Walmart Connect spend?" DataWeave's data is sourced from Walmart.com's public-facing catalog layer — not from Walmart's credentialed internal data systems. This distinction must be accurate before using in any competitive or GTM context. [ASSUMPTION: confirm DataWeave's data sourcing architecture is public-catalog-based, not Luminate-credentialed]

---

## 7. GTM Positioning — Where to Start

### 7.1 Primary Buyer Persona
**RGM (Revenue Growth Management) Lead** or **VP eCommerce / Head of Digital Commerce** at a large CPG/FMCG brand with $500M+ Walmart channel revenue.

Secondary buyers: Category Management Director, VP Marketing Analytics, CFO office (Finance partner to RGM).

**Why RGM is the anchor buyer:**
- Owns the budget allocation question across levers (pricing vs. media vs. trade spend)
- Has the pain point DSIM most directly solves (what drove the incremental unit?)
- Is not served well by either activation vendors (Pacvue/Skai) or traditional MMM consultancies (Analytic Partners) — they need something in between
- Has the cross-functional influence to bring in both the ecommerce ops team (shelf data) and the media team (Walmart Connect data)

### 7.2 Initial GTM Motion — Land with Walmart, Expand to Multi-Retailer

**Phase 1 (Q2 2026): Walmart-only, 2-3 beta accounts**
- Target P&G, PepsiCo, or Unilever — highest Walmart Connect spend, internal RGM functions, multiple brands under one corporate relationship
- Entry motion: a focused PoC in one category (e.g., Tide/Gain for P&G Fabric Care), 3 months of historical data, one decomposition output
- Success metric: demonstrated $500K+ incremental revenue opportunity from shelf reallocation
- Proof point: MAPE accuracy and R-squared validation vs. actual historical sales

**Phase 2 (Q4 2026): Expand to Target + Amazon, expand brand portfolio**
- Use Walmart win as reference for multi-retailer expansion
- DataWeave's existing DSA coverage of Target, Amazon, Instacart makes retailer expansion faster than competitors

**Phase 3 (2027): Category-level ICP expansion**
- From Tier 1 CPG (P&G, PepsiCo, Unilever) → Tier 1.5 (Kraft Heinz, Conagra, General Mills, Kellanova) → Tier 2 mid-market brands

### 7.3 Messaging Hierarchy

| Audience | Primary Message | Proof Point |
|---|---|---|
| RGM Lead | "DSIM tells you which shelf lever drove the incremental unit — and what reallocating that budget would return" | $500K+ incremental revenue opportunity in reference engagement |
| eCommerce Lead | "DSIM separates your media lift from your organic shelf performance — at the store cluster level, not just nationally" | Store-cluster localization; ~5.9% MAPE |
| Finance / CFO | "DSIM produces shelf-lever attribution your MMM vendor cannot match, with model accuracy Finance can defend" | MAPE + R-squared vs. competitor black-box |
| Sales / Account Management | "DSIM gives you a data-backed recommendation for your next Walmart buyer conversation" | Category-level KPI movement predictions |

### 7.4 Competitive Positioning in the Deal

- **If CommerceIQ is in:** DSIM is the independent diagnostics layer. They have execution; you have measurement with no conflict of interest.
- **If Profitero is in:** DSIM is the causal impact layer on top of their monitoring. Integration story — Profitero KPI integration is already in DSIM's architecture.
- **If Analytic Partners is in:** DSIM is the always-on operational layer; AP is the strategic quarterly picture. Shelf decomposition outputs feed into their MMM as better inputs.
- **If Walmart Connect native tools are in:** DSIM answers the full shelf question; Walmart Connect only answers the media question and has a conflict of interest in its own measurement.
- **If no vendor is in:** DSIM is the baseline — the first cross-lever, store-cluster-level shelf impact model the brand has ever had.

---

## 8. Agent Instructions — How to Use This Document

This document is the DSIM market intelligence baseline. Agents operating in this project should use it as follows:

### For `/competitor-analysis [company]`
- Use Section 2.2 as the brief-in and cross-reference point — if a profile already exists at the intelligence level documented here, go deeper on: pricing verification, recent product announcements, named customer wins in 2025–2026, and any methodology changes post their most recent major release.
- Priority order for live research runs: **CommerceIQ → Circana → Measured/Haus → Skai → Analytic Partners**
- Save outputs to `insider-data/competitor-profiles/[company].md` with `Last updated: [date]`

### For `/write-prd [DSIM feature]`
- Trace every requirement back to Section 3 (pain points) or Section 4 (brand KPIs) — these are the customer-signal anchors
- Walmart Connect API integration requirements: reference Section 6 for what data is available vs. what gaps DataWeave fills
- Do not spec any feature that assumes Walmart Luminate credentialed access unless that partnership is confirmed [ASSUMPTION: verify DataWeave's Luminate Channel Partner status]

### For `/gtm-plan [DSIM launch]`
- ICP: CPG/FMCG brand, $500M+ Walmart channel revenue, has internal RGM or eCommerce analytics function, heavy Walmart Connect spender
- Lead targets: P&G (multiple brands), PepsiCo (multiple brands), Unilever, Kraft Heinz, Conagra — in that order
- Use Section 7 (GTM Positioning) as the strategy spine
- Positioning must pass the swap test: "could this be used by Profitero unchanged?" — if yes, it's not specific enough

### For `/product-strategy [DSIM question]`
- Lead with store-cluster localization, shelf-data moat, and vendor neutrality as the three structural advantages
- Any strategy involving multi-retailer expansion: anchor to Phase 2 (Q4 2026) — don't recommend accelerating before Walmart is proven
- Any strategy involving media partnerships: flag the activation-conflict risk per Pacvue/Skai displacement narrative

### For `/brainstorm [DSIM feature or growth question]`
- Shelf-data moat + store-cluster localization are the constraints that competitors cannot easily replicate — solutions should build on these, not ignore them
- The "no activation conflict" positioning is a strategic asset — don't propose features that would introduce a conflict (e.g., DSIM recommending specific ad buys on Walmart Connect)

### For `/review-as-customer` (when reviewing DSIM artifacts)
- Persona: VP RGM at a $2B+ Walmart-native CPG brand (think Conagra, Kraft Heinz, Kellanova)
- Primary question: does this solve the "which lever drove the incremental unit?" question I'm asking my team every quarter?
- Secondary question: can I defend this model output to my CFO without a vendor in the room?

---

**Last updated:** April 16, 2026
**Status:** Research-based draft. All [VERIFY] claims require live-web validation before use in external materials.
**Next actions:**
1. Run `/competitor-analysis CommerceIQ` — highest priority, closest competitor
2. Confirm DataWeave's Walmart Luminate Channel Partner status [ASSUMPTION in Section 6]
3. Validate top 3 target accounts (P&G, PepsiCo, Unilever) have internal RGM functions before outbound
4. Run `/gtm-plan DSIM Walmart Launch` using this document as the intelligence backbone
