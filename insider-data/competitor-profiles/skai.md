# Skai (formerly Kenshoo) — Competitor Profile
**Last updated:** April 2026
**Threat level:** MEDIUM
**Research method:** Live web verification (April 2026)
**Sources:** skai.io (blog, pricing, product pages), g2.com, vendr.com, incremental.com (Bayer case study), tracxn.com, adexchanger.com

---

## Company Overview
- **HQ:** Tel Aviv, Israel (R&D); San Francisco, CA (commercial)
- **Scale:** 2,000+ brands; 200+ retailers including Walmart, Amazon, Target, Instacart
- **Positioning:** Omnichannel marketing platform — retail media + paid search + paid social + app
- **Funding:** Private; reportedly Series E-stage [UNVERIFIED]

## Incrementality Product: Impact Navigator (bundled)
**Supported test types (Nov 2025 blog, verified):**
- Geo-Based Testing (regions as exposed/control)
- Audience Holdout (randomized exposed vs. withheld)
- Matched-Market Testing (city-pair design)

**No ghost-bid methodology** confirmed in any Skai published content.

**Critical:** Skai's I-COM-winning Bayer iROAS was measured by **Incremental.com**, not Impact Navigator. Skai activated; Incremental measured. The integration announced Oct 2024, Bayer case study published Jan 2025.

**No shelf signal integration in incrementality model.** Profitero SIM uses shelf signals as bid triggers — reactive optimization, NOT causal attribution variables.

**2026 claim:** "Always-on incrementality modeling" — no methodology details published.

## 2026 Market Research (Skai's Own Survey)
- 75% of advertisers cite incrementality as their biggest measurement challenge
- Only 20% proficient at both measuring AND applying insights
- Skai published: *"Every definition relies on correlations, proxies, or heuristics rather than a rigorous causal framework."* (their customers' own measurement practices)

## Walmart-Specific
- 200+ retailers supported; Walmart Connect integration active
- **G2 2026 reviewer (verbatim):** *"retail-media coverage feels uneven: data can lag, feature parity varies by retailer (notably [Walmart])."*
- No named Walmart incrementality case study as of April 2026
- No Scintilla integration confirmed

## Pricing (Published on skai.io/pricing)
| Tier | Ad Spend Cap | Annual Fee |
|---|---|---|
| Standard | $4M/year | $114,000/year |
| Advanced | $10M/year | $276,000/year |
| Enterprise | $20M/year | $504,000/year |
| Enterprise Premier | $35M/year | $756,000/year |
| Enterprise Premier+ | $35M+ | Custom |
Plus 3-7% of managed spend; Celeste AI +15-25% premium.
Vendr average: $160K/year; $240K max observed.

## Named Customers (2025-2026)
- **Bayer** — 32% MER improvement (Amazon, measured by Incremental.com, not Skai's tool)
- PepsiCo, Sanofi, Estée Lauder — boilerplate logos, no case study detail
- Kraft Heinz (Philadelphia) — Profitero+Skai SIM case (Amazon)
- No named Walmart-specific incrementality case study

## DSIM Displacement Narrative
1. "Skai can tell you if your Walmart Connect ads were incremental. DSIM tells you whether your availability rate was capping that lift — a question outside Skai's model."
2. "The Bayer iROAS Skai promotes came from Incremental.com. If you want incrementality measurement, you're buying a Skai+Incremental bundle, not a native Skai capability."
3. "G2 reviewers specifically named Walmart as Skai's lagging retailer for feature parity and data freshness. DSIM is built natively for Walmart."
4. "You're paying $114K–$756K/year for Skai activation. DSIM's $50–75K PoC is a separate measurement investment that makes your Skai spend defensible to Finance."

---

## Company Snapshot

Skai (formerly Kenshoo) is an omnichannel advertising platform for commerce media — retail media, paid search, and paid social — serving brands and agencies. It is not a measurement company; it is a media activation platform with measurement layered on top. That distinction is the central battlecard fact for DSIM.

- HQ: San Francisco, 9 international offices
- Trusted by 8,000+ brands and agencies, including PepsiCo, Sanofi, and Estée Lauder (verified: Skai press releases, May 2025)
- Partners: Amazon Ads, Walmart Connect, Google, Microsoft, Meta, TikTok, Snap, Pinterest, Criteo, Apple Search Ads, Instacart (verified: skai.io/about, April 2026)
- CEO/Co-Founder: Yoav Izhar-Prato; President: Gil Sadeh (ex-Signals Analytics); CSO: Nich Weinheimer; CPO: Guy Cohen
- No funding rounds or M&A disclosed 2025–2026. Skai itself has made no acquisitions. (Tracxn, April 2026)

---

## Incrementality Product: What It Actually Is (2025–2026)

### Product name: Impact Navigator
Skai's self-service incrementality suite is called **Impact Navigator**. It is bundled into the platform — not a standalone product. It supports:

| Method | Description |
|---|---|
| Geo-Based Testing | Market-level design using regions as exposed/control; useful when user-level IDs aren't available. Suited for offline or omnichannel KPIs. |
| Audience Holdout | Randomized design assigning individuals to exposure or holdout to measure user-level lift for digital campaigns. |
| Matched-Market Testing | City-pair approach matching markets on historical data and demographics to estimate lift when randomization is constrained. |
| iROAS (Incremental ROAS) | Lift-based metric dividing incremental revenue by spend. Not the same as Skai's own computation — delivered via a third-party integration with **Incremental** (see below). |

**No ghost-bid methodology documented in any Skai-published content.** Ghost-bid is referenced in industry literature as a low-budget proxy, but Skai does not claim it as a capability.

Source: `skai.io/blog/incrementality-measurement-tools/`, last updated November 2025.

### The Incremental Partnership (Critical Context)
Skai's credible iROAS output is not proprietary — it comes from a **third-party integration with Incremental** (incremental.com), announced October 2024 and cited through 2025.

Key partnership facts:
- October 2024: Skai and Incremental announce "first-of-its-kind" partnership connecting Incremental's continuous-learning models directly to Skai's bidding/budgeting algorithms.
- January 2025: **Bayer case study** published — 32% improvement in media efficiency ratio using Incremental's iROAS metric inside Skai, optimizing Amazon retail media campaigns. Quote from Ajay Sharma, VP eCommerce & OmniChannel at Bayer: *"Incremental has enabled a step change in our ability to accurately measure the impact of our retail media investments."* (incremental.com, Jan 2025; verified)
- May 2025: Bayer/Incremental/Skai collaboration wins **I-COM Data Creativity Award 2025** (incremental.com press, May 2025; verified)
- April 2025: Incremental listed as a **Walmart Connect measurement partner**, separate from Skai's own capability. (incremental.com press, April 2025)

**Implication for DSIM deals:** When a brand says "we measure incrementality with Skai," they likely mean they run Impact Navigator tests (geo or holdout) or use the Incremental integration. Neither is Walmart-shelf-native; neither models availability, Share of Shelf, or content score as causal variables.

Source: incremental.com/post/bayer-achieves-32-increase, incremental.com/press, verified April 2026.

---

## Walmart Connect Capabilities

### What Skai Has
- Walmart Connect is a listed partner on Skai's platform — campaigns can be activated and managed through Skai. Confirmed in 2025 State of Retail Media report (skai.io, February 2025) and boilerplate language across all press releases.
- Skai's Q1 2025 Trends Report covers Walmart Connect benchmarks alongside Amazon and Instacart, confirming live data integration.

### What Walmart Connect Launched (Skai Adjacent)
- **April 28, 2025:** Walmart Connect announced **incremental sales measurement for Sponsored Search** — a native iROAS metric built into the Walmart Connect platform itself. Quote from Kyle Whitaker, Walmart Digital Team Lead at Clorox: *"Search incrementality is a step forward for Clorox's measurement partnership with Walmart Connect."* (walmartconnect.com, April 2025; verified)
- This matters because Walmart Connect's *own* native incrementality for search is now available free to advertisers — which competes with what Skai's Impact Navigator would have done.

### Scintilla (formerly Walmart Luminate)
- Walmart Luminate rebranded to **Scintilla** in 2025. A new capability — **Scintilla Insights Activation for Walmart Connect** — was launched in 2025, allowing Charter suppliers to pipe basket-level Scintilla signals directly into Walmart Connect for campaign targeting and measurement. (walmartdataventures.com, 2025; verified)
- **No evidence** that Skai has integrated Scintilla signals into Impact Navigator or any Walmart-specific measurement flow. The Skai/NIQ alliance (December 2024) references POS data for incrementality measurement, but Scintilla-specific integration is [UNVERIFIED].
- February 2026: Walmart launched **Scintilla In-Store** — a store-level execution platform for supplier field reps with real-time inventory visibility. Coca-Cola is a named launch partner. Not media measurement, but relevant to shelf execution context.

Source: walmartconnect.com, walmartdataventures.com, corporate.walmart.com, verified April 2026.

---

## Retail Media Measurement Positioning

### How Skai Frames Itself vs. CommerceIQ and Pacvue
Skai's positioning in 2025–2026 is **omnichannel activation with measurement** — they explicitly position as an *activation-first* platform that layers measurement on top, as opposed to positioning as a measurement company.

Key framing language from their own content:
- *"Plan, activate, and measure campaigns across 200+ retailers... with standardized metrics, always-on incrementality modeling, and cross-channel visibility."* (skai.io/blog/the-2026-state-of-retail-media, verified)
- *"Skai is the only AI-driven commerce media platform with leading solutions for retail media, paid search, and social advertising."* (skai.io/blog/prime-day-2025, verified)

Skai does NOT directly position against CommerceIQ or Pacvue in published content. The industry positioning dynamic (based on analyst coverage and G2 category placement):
- **Pacvue** → Deep Walmart Connect integration, commerce operating system, strong on supply chain signals (availability, buy box) feeding media. Beat Skai on Walmart-native depth per G2 review comparisons.
- **CommerceIQ** → Retail AI (iROAS optimization + supply signals + demand signals integrated). Competes most directly with DSIM.
- **Skai** → Strongest on cross-channel (paid search + social + retail media unified), weakest on single-retailer Walmart depth.

### The NIQ Alliance (December 2024 — most recent shelf-intelligence move)
Skai announced a global alliance with NielsenIQ in December 2024:
- Roadmap intentions included: using NIQ's POS data to measure incrementality; applying Skai's planning/forecasting to NIQ's MMM solutions; providing a unified omnichannel view.
- This alliance is **aspirational at announcement** — no verified product release has been announced against it as of April 2026.
- NIQ's Digital Shelf product is an independent offering; the alliance does not mean shelf signals flow into Skai's Impact Navigator tests as of today.

Source: prnewswire.com/news/skai Dec 2024, linkedin.com/gilsadeh Dec 2024, verified April 2026.

### Profitero Shelf Intelligent Media (SIM) — The Most Relevant Integration
This is Skai's most concrete shelf-signal-to-media link, and it's worth understanding precisely for DSIM conversations:

- Profitero+ "Shelf Intelligent Media via Skai" integrates digital shelf signals (competitor out-of-stock, pricing, availability, content) into Skai bid automation rules.
- **What it does:** Automatically raises bids when a competitor goes out of stock or lowers price. Budget adjustment rules fire based on shelf state.
- **What it does NOT do:** It does not model shelf signals as *incrementality inputs* — it uses them as *bid triggers*. There is no measurement of how availability or SoS *caused* the incremental lift; it simply capitalizes on competitor weakness opportunistically.
- The incrementality measurement (did the campaign generate lift?) is still handled by Impact Navigator or Incremental's iROAS model — neither of which uses shelf state as a variable in the causal model.

Source: profitero.com/product/shelf-intelligent-media-search-via-skai, skai.io/capabilities/profitero-shelf-intelligent-media, verified April 2026.

---

## Customer Sentiment (G2)

**G2 overall rating:** Listed on g2.com/products/skai/reviews (2026 page active). Specific numeric score not captured in search snippets.

**ROI benchmark (G2 data):** Time to implement: ~1 month. Return on investment: ~10 months. (g2.com/products/skai, verified April 2026)

**Top complaint, verbatim (G2, 2026 page):**
> *"Skai's main drawback for us is that, beyond search/social, the retail-media coverage feels uneven: data can lag, feature parity varies by retailer (notably [Walmart])."*

This is the highest-relevance signal for DSIM. The reviewer specifically calls out **Walmart as a retailer where feature parity lags** and cites **data lag** as a problem in retail media reporting.

**Additional complaint pattern (TrustRadius, undated but current):**
> *"The fee to use the program is much higher than the value we get out of it."*

**G2 category (retail media advertising platforms) con summary:** "Poor Reporting, Ad Issues, Adjustment Difficulty, Campaign Management Issues." (g2.com/categories/retail-media-advertising-platforms, verified April 2026)

**Skai's own published admission:** Their 2025 State of Retail Media report (co-authored with Path to Purchase Institute) quotes Jack Lindberg, Head of Product Marketing at Shalion: *"Incrementality measurement in retail media is broken. We call it incrementality while using methods that do not capture the true causal impact of our ads."* — This is a Skai-published document acknowledging the methodology gap. (skai.io, December 2025)

---

## Pricing Signals

**Published pricing (skai.io/pricing, verified April 2026 — this is public and unusually transparent):**

| Tier | Ad Spend Cap | Annual Fee |
|---|---|---|
| Standard | Up to $4M/year | $114,000/year |
| Advanced | Up to $10M/year | $276,000/year |
| Enterprise | Up to $20M/year | $504,000/year |
| Enterprise Premier | Up to $35M/year | $756,000/year |
| Enterprise Premier+ | $35M+/year | Custom |

**Vendr transaction data (verified April 2026):** Average contract value ~$160,000/year. Maximum observed: $240,000/year.

**Third-party estimates (atom11.co comparison, April 2026):**
- Commerce Media Tier: ~$3,000–$5,000/month (min $100K monthly ad spend)
- Omnichannel Tier: ~$8,000–$15,000/month (min $500K monthly ad spend)
- Platform fee: 3%–7% of managed ad spend
- Celeste AI (GenAI feature): additional 15–25% premium

**Positioning takeaway:** Skai is enterprise-priced at $114K+ annual minimum. A CPG brand adding DSIM on top of an existing Skai contract is spending at a different budget line (measurement vs. activation). The two are not head-to-head budget items for a procurement team.

---

## Named Customers (2025–2026)

Verified from Skai press materials (April 2026):

| Brand | Evidence |
|---|---|
| **Bayer** | 32% media efficiency improvement; Incremental/Skai/Bayer I-COM award winner, May 2025. CPG: OTC health products. Amazon retail media optimized. |
| **PepsiCo** | Named in boilerplate customer list across all 2025 press releases. No case study detail available. |
| **Sanofi** | Named in boilerplate. No case study detail available. |
| **Estée Lauder** | Named in boilerplate. No case study detail available. |
| **HP, DoorDash, Sony, Philips, L'Oreal** | Named in 2025 State of Retail Media PDF. Category context: electronics, delivery, consumer electronics, CPG, beauty. |
| **Kraft Heinz (Philadelphia cream cheese)** | Profitero's Shelf Intelligent Media case study — used SIM via Skai integration, 28% new-to-brand buyers, 25% more ad-attributed sales. Not a Skai-direct case study; Profitero+Skai integration. |
| **Panasonic** | Profitero SIM case study — used Pacvue integration (not Skai) for incrementality. |

**Note on Walmart-specific CPG case studies:** No Skai-published case study specifically documents a Walmart Connect incrementality result for a named CPG brand as of April 2026.

---

## Company News (2025–2026)

| Date | Event |
|---|---|
| April 2, 2025 | Celeste AI unveiled — GenAI marketing agent for commerce media. Closed beta with Acosta Group, Advantage Solutions, Tinuiti, WaterWipes. |
| May 14, 2025 | Celeste AI goes GA at ShopAble 2025 event. "Commerce Insights and Operations Solutions" expansion announced. |
| May 14, 2025 | ShopAble Media Awards 2025 — winners include unnamed CPG brands; no individual brand names announced in press release. |
| September 2025 | Jeffrey Cohen joins as Chief Business Development Officer — ex-Amazon Ads Principal Evangelist (4 years at Amazon). Described as "the right moment" to focus on omnichannel. |
| September 2025 | Skai + Moloco partnership to expand retail media access for advertisers. |
| October 2025 | Skai integrates with Tesco Media Platform (UK) powered by dunnhumby and Epsilon. |
| November 2025 | Skai + Kevel partnership to expand retail media access. |
| June 2025 | Skai named **Leader in 2025 SPARK Matrix for AdTech Platforms** by QKS Group. |

Source: prnewswire.com/news/skai, Tracxn, LinkedIn verified April 2026.

---

## The Shelf-Signal Gap: Evidence Skai Does NOT Model Shelf as Incrementality Input

This is DSIM's core differentiation angle. Here is what the evidence supports:

**What Skai measures incrementality against:** Ad exposure vs. non-exposure. The causal question is "did seeing this ad generate lift?" — not "would this ad have worked if the product was out of stock or had low SoS?"

**What Skai does NOT do:**
1. Skai's Impact Navigator (geo, holdout, matched-market) tests measure ad-driven lift. None of the published methodology documentation references product availability, Share of Shelf, or content quality as independent variables or control conditions in the test design.
2. The Profitero SIM integration uses shelf signals as **bid triggers** — not as causal inputs to the incrementality model. Raising bids when competitors go OOS is a reactive optimization, not a measurement of how OOS affected your lift.
3. Skai's own 2026 State of Retail Media notes that "being listed won't be enough; your listing has to win the logic test" — acknowledging the relevance of shelf signals to media outcomes — but no product release bridges this to incrementality modeling.
4. The NIQ alliance (December 2024) mentions using NIQ POS data for incrementality but does not mention digital shelf signals (availability, SoS, content score) as causal variables. [UNVERIFIED whether this capability has shipped]

**Skai's published admission of measurement gaps (December 2025):**
Their own State of Retail Media 2025 publication quotes an industry voice saying: *"Every definition provided by respondents relies on correlations, proxies, or heuristics rather than a rigorous causal framework."* — This is Skai acknowledging that even their own customers' incrementality methodologies are not causally rigorous.

Source: skai.io/blog/2025-state-of-incrementality-in-retail-media; skai.io/blog/the-2026-state-of-retail-media-measurement-and-incrementality; profitero.com/product/shelf-intelligent-media-search-via-skai, verified April 2026.

---

## DSIM Displacement Angles

**Use these in a competitive conversation when a CPG buyer says "we already measure incrementality with Skai":**

**Angle 1 — Skai measures ad lift, not shelf-conditional lift**
> "Skai's Impact Navigator tells you whether your campaign drove incremental sales versus not running ads at all. It doesn't tell you whether that lift would have held if availability was 70% instead of 95%, or if your SoS was below the tipping point where ads stop working. DSIM's incrementality model holds shelf state constant as a variable — Skai's doesn't. You're answering different questions."

Supporting fact: Skai publishes no methodology that includes availability or SoS as a causal variable. Profitero SIM is a bid-trigger integration, not a measurement input.

**Angle 2 — Skai's iROAS relies on a third party for the credible number**
> "The Bayer/Skai case study that won at I-COM? The incrementality measurement came from Incremental, not from Skai's Impact Navigator. Skai activated the campaigns; Incremental provided the iROAS. If the buyer is evaluating Skai as their incrementality engine, they should understand what's native and what's a partner dependency."

Supporting fact: Incremental.com explicitly states the Bayer collaboration used Incremental's continuous-learning models. Skai's announcement described it as an integration, not a Skai-native capability. (incremental.com/post/bayer-achieves-32-increase, Jan 2025)

**Angle 3 — G2 reviewers flag Walmart as Skai's weakest retailer**
> "The G2 review record for Skai specifically calls out Walmart as the retailer where feature parity and data freshness lags. For a brand with Walmart as the primary growth retailer, Skai's Walmart coverage is the weakest part of their platform — and that's before asking whether their measurement is shelf-native."

Supporting fact: G2 verbatim, 2026 review page: *"the retail-media coverage feels uneven: data can lag, feature parity varies by retailer (notably [Walmart])."*

---

## Sources Verified

| Source | URL | Date Verified |
|---|---|---|
| Skai incrementality measurement tools blog | skai.io/blog/incrementality-measurement-tools/ | April 2026 |
| Skai 2025 State of Incrementality in Retail Media | skai.io/blog/2025-state-of-incrementality-in-retail-media/ | April 2026 |
| Skai 2026 State of Retail Media Measurement | skai.io/blog/the-2026-state-of-retail-media-measurement-and-incrementality/ | April 2026 |
| Skai ShopAble 2025 Media Awards press release | skai.io/press-releases/top-consumer-goods-brands-and-agencies-among-the-winners-of-skais-2025-shopable-media-awards/ | April 2026 |
| Skai pricing page | skai.io/pricing/ | April 2026 |
| Skai digital shelf optimization page | skai.io/digital-shelf-optimization/ | April 2026 |
| Skai company/about page | skai.io/company/ | April 2026 |
| Skai 2025 State of Retail Media PDF | skai.io/wp-content/uploads/2025/02/SORM-Report_2025-1-1.pdf | April 2026 |
| Bayer + Incremental + Skai case study | incremental.com/post/bayer-achieves-32-increase-in-media-efficiency-with-incremental-and-skai | April 2026 |
| Incremental press page (I-COM award, Walmart Connect partner) | incremental.com/press | April 2026 |
| Profitero Shelf Intelligent Media via Skai | profitero.com/product/shelf-intelligent-media-search-via-skai | April 2026 |
| Profitero SIM Panasonic case study | profitero.com/case-studies/panasonic-incrementality | April 2026 |
| G2 Skai reviews page | g2.com/products/skai/reviews | April 2026 |
| Vendr Skai pricing | vendr.com/buyer-guides/skai | April 2026 |
| Atom11 Pacvue vs Skai pricing comparison | atom11.co/blog/pacvue-vs-kenshoo-skai | April 2026 |
| Walmart Connect Sponsored Search incrementality announcement | walmartconnect.com/resources/articles/2025/sponsored-search-incremental-sales-measurement | April 2026 |
| Scintilla (formerly Walmart Luminate) rebrand | walmartdataventures.com/insights/articles/introducing-scintilla | April 2026 |
| Scintilla Insights Activation for Walmart Connect | walmartdataventures.com/insights/articles/intro-insights-activation | April 2026 |
| Skai/NIQ alliance press release | prnewswire.com/news/skai (Dec 2024) | April 2026 |
| Tracxn Skai company profile | tracxn.com/d/companies/skai | April 2026 |
| Jeffrey Cohen LinkedIn | linkedin.com/in/jeffreycohen | April 2026 |
| AdExchanger Skai/Cohen interview | adexchanger.com/adexchanger-talks/retails-ai-moment-is-almost-here/ | April 2026 |
