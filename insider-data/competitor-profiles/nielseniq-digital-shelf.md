# Competitor Profile: NielsenIQ Digital Shelf (including Data Impact by NIQ)
Last updated: 2026-05-07
Sources: User-supplied competitive intelligence (baseline, verified internally April 2026); insider-data/dsim/plan-of-action.md (April 2026); insider-data/dsim/competitive-landscape-deepdive.md (April 2026); insider-data/dsim/dsim-positioning-and-personas-2026-04-25.md; insider-data/competitor-profiles/skai.md (Skai/NIQ alliance section, April 2026); insider-data/dsim/DSIM_Competitive_BattleCards_1.pptx (April 2026, internal); Claude training knowledge on NIQ/Ascential/Data Impact through August 2025 — all training-knowledge claims marked [VERIFY]

**Note on web research:** Web search tools were permission-denied during this research session. Claims derived from training knowledge (vs. internal documents) are marked [VERIFY: check source before using in external materials].

---

## TL;DR (sales battlecard)

**Their pitch:** "The only digital shelf solution that connects shelf performance directly to Nielsen's legacy market measurement data — giving CPG brands a single omnichannel truth."

**Best for:** Large global CPG manufacturers (Top 50 by revenue) who are already Nielsen POS/syndicated data customers, have 75+ country footprints, and need category management and shelf analytics in a single vendor relationship. Particularly strong with headquarters-level decisions and global standardization mandates.

**DataWeave wins when:**
1. The buyer is eCommerce-native (not category management) — NIQ's UX heritage is category analytics, not shelf ops
2. Speed and granularity matter — NIQ's syndicated data cycle is weeks; DataWeave DSA crawls daily with zipcode granularity
3. The brand needs explainable match logic — Veracite's three match states (Matched / Unmatched / Delisted) vs. NIQ's black-box content matching; DataWeave can defend every classification
4. Budget < $500K — NIQ's enterprise bundling and minimum commitments favor the largest CPG players

**DataWeave loses when:**
1. The account already has a deep NIQ POS relationship and wants to add shelf analytics under one contract
2. The requirement is global (75+ countries, 1,000+ retailers) — NIQ's coverage footprint is currently unmatched
3. The buyer's primary use case is market share measurement, not operational shelf execution — NIQ's heritage owns this conversation

---

## Product Portfolio

| Product / Module | Description | Competes With DataWeave's |
|---|---|---|
| **NIQ Digital Shelf** (formerly Ascential Edge Digital Shelf) | Core monitoring platform: availability, content quality, pricing, search rank/SoS, ratings & reviews across 1,000+ retailers in 75 countries. The renamed digital shelf product post-Ascential acquisition. [VERIFY: current product name on nielseniq.com — may be fully rebranded or still co-marketed as "Ascential Edge"] | DSA (all 5 KPI modules) |
| **Data Impact by NIQ** | E-commerce measurement and analytics layer — connects shelf data (placement, pricing, promotions) to retailer sales outcomes. Heritage: Data Impact SAS (Paris-based startup, acquired by NIQ ~2022). Position: the "analytical bridge" between shelf data and revenue impact. [VERIFY: current Data Impact integration status and branding post-acquisition] | DSIM (partial) — descriptive revenue correlation, not causal MMM |
| **Brandbank by NIQ** | Product content management, syndication, and enrichment. Maintains a library of standardized product imagery, nutritional data, and attribute data, syndicated to retailers. [VERIFY: current Brandbank product naming post-acquisition] | DSA Content Quality module; COP (Content Optimization Platform) |
| **Perpetua by NIQ** (formerly Perpetua.io) | Retail media automation and optimization — Sponsored Products, Sponsored Brands, DSP bid management across Amazon, Walmart, Instacart, and Criteo. [VERIFY: Perpetua integration depth post-NIQ acquisition; may have been partially rolled into broader NIQ Commerce suite] | Adjacent to DSIM (retail media activation); not a direct DSA competitor |
| **NIQ Market Measurement / Scantrack** | Legacy POS syndicated data — in-store and omnichannel market share tracking. The heritage asset. 6–8 week data lag, national/regional granularity. | No direct overlap with DSA; indirect overlap with DSIM in the "measure sales impact" conversation |
| **NIQ Byzzer** | SMB-tier analytics portal — Nielsen data at reduced price point for smaller CPG brands. [VERIFY: current positioning and whether digital shelf is included in Byzzer tier] | Indirectly competes with DataWeave for mid-market CPG if digital shelf modules are bundled in |
| **NIQ Connect / Omnimarket** | Omnichannel view combining e-commerce panel data + POS data. Sold as the "unified" online + offline sales view. [VERIFY: current product name — was previously NielsenIQ Omnisales/Connect] | Competes with DSIM's "connect shelf to sales" narrative at the strategic/CFO level |

---

## Pricing Model

No public pricing. All enterprise custom contracts.

**What is known / strongly inferred:**
- Minimum engagement threshold: [INFERRED] Enterprise-only. NIQ does not publish SMB pricing and has no self-serve tier for digital shelf. Contracts are negotiated as part of broader NIQ enterprise relationships. Minimum annual commitment likely $150K+ for digital shelf standalone, significantly more when bundled with market measurement data.
- Bundling leverage: NIQ's primary pricing lever is bundle discounts for brands already paying for Scantrack/POS data. A brand spending $500K–$2M on NIQ market measurement can add digital shelf at a discount that independent vendors cannot match. This is the structural pricing threat — not the shelf product's standalone value.
- Data Impact by NIQ: [INFERRED] Sold as an analytics layer add-on, not a standalone product. Likely priced per brand/retailer scope, similar to market measurement engagement economics.
- Perpetua / Brandbank: [INFERRED] Separate product SKUs from digital shelf; each has its own commercial terms.

**Sales motion:** NIQ's primary GTM is renewal + land-and-expand with the existing market measurement customer base. New logos (non-NIQ customers) are a secondary motion and face a steeper sales cycle without the legacy relationship as the wedge. DataWeave competes most directly in new-logo situations where NIQ does not have a prior commercial relationship.

---

## Capability Comparison

| Dimension | DataWeave DSA | NielsenIQ Digital Shelf | DataWeave Advantage | DataWeave Gap |
|---|---|---|---|---|
| **Data freshness / crawl cadence** | Daily (SoS); Monthly (content audit). Configurable via commercial addendum. | [VERIFY: NIQ's exact crawl cadence for digital shelf. Likely daily for top retailers, less frequent for long-tail. Syndicated data is 6–8 week lag.] | Clarity on cadence SLA; alert-based daily monitoring | NIQ has more retail data aggregation infrastructure at scale |
| **Geographic granularity** | Zipcode-level (US); per-account configured via COLAB. ~25+ countries. | Banner- and store-level for major markets; 75 countries total. Global coverage exceeds DataWeave. | Zipcode granularity in US — NIQ is store-cluster, not zipcode-native | Country coverage gap: NIQ covers 75 countries vs DataWeave's ~25+ |
| **Retailer coverage** | 25+ countries, key retail banners (Walmart, Loblaws, Amazon, Target, etc.) | 1,000+ retailers across 75 countries. No retailer is too small for NIQ's network at scale. | Depth at specific accounts (COLAB-level customization per retailer) | NIQ's retailer breadth is unmatched — long-tail and international retailers DataWeave doesn't crawl |
| **Content quality tracking** | Veracite engine: attribute-level match states (Correct / Correct-Modified / Incorrect / etc.), explainable, RBAC override, audit trail. Reference-guideline-based scoring per retailer per COLAB. | Brandbank integration gives NIQ access to a large syndicated product content library. Content scoring exists but explainability and override mechanisms are not a documented differentiator. [VERIFY: NIQ content audit audit-trail and override capability] | Veracite's explainability — every classification is auditable and overridable at the attribute level. The agency enabler model (GeekSpeak) has no equivalent in NIQ's published materials | NIQ's Brandbank gives them syndicated content truth at scale — DataWeave depends on customer-supplied reference content |
| **Search / Share of Search** | Daily crawl, page-1 + top-100 commercial addendum. Organic vs. Sponsored split. Per-keyword, per-retailer, per-location. | SoS tracking across 1,000+ retailers globally. Share of category and search placement tracking. [VERIFY: NIQ's Sponsored vs. Organic split capability] | Organic/Sponsored decomposition is operationally specific and daily; COLAB config allows keyword tailoring per brand | NIQ's keyword tracking at 1,000+ retailers globally — DataWeave cannot match long-tail retailer coverage |
| **Ratings & Reviews** | Live module: star rating, review count, sentiment trend, per-retailer per-location. | R&R monitoring included in digital shelf suite. Brandbank provides quality/completeness layer. | Zipcode granularity in R&R — NIQ likely tracks at retailer/national level | No known DataWeave gap here relative to NIQ's operational R&R |
| **Pricing & Promotion** | Configurable discount bucket thresholds via COLAB. Price elasticity tracking, promo depth, competitor price monitoring. | Pricing and promotional data at 1,000+ retailer coverage — NIQ's strength is breadth, not granularity. | Configurable bucket thresholds = more operationally flexible for brand teams | NIQ's pricing data network at 1,000+ retailers covers channels DataWeave doesn't reach |
| **Predictive / forecasting** | Not a current DSA capability. DSIM (separate product) does causal decomposition, not forward forecasting. | [VERIFY: NIQ's predictive analytics claims for digital shelf. They published a "5 AI use cases" paper in 2024 referencing predictive capabilities.] | DataWeave does not claim prediction; honest positioning vs. over-promised NIQ AI | NIQ's Nielsen heritage + scale = larger training dataset for any predictive model. Significant structural gap if NIQ's predictive models mature. |
| **AI / ML capabilities** | Veracite semantics model (content matching). Attribute Extraction AI. DSIM Bayesian MMM. | Published 5 AI use cases (2024): predictive analytics, location-based insights, AI content scoring, and others. NIQ has resources to invest in ML at scale. [VERIFY: which AI capabilities are currently live vs. roadmap in the 2024 paper] | DSIM's published MAPE/R²=91% validation — NIQ has no equivalent public accuracy benchmarks for any AI product | NIQ's scale gives them model training advantages DataWeave cannot match without equivalent data volume |
| **Sales linkage / revenue impact** | DSIM product (separate) — Bayesian MMM, causal decomposition of shelf levers → Walmart sales. Not bundled with DSA. | Data Impact by NIQ: connects shelf data to retailer e-commerce sales outcomes. Descriptive correlation, not causal MMM. NIQ legacy POS data gives them the strongest omnichannel sales linkage story at the category level. | DSIM's causal methodology (Bayesian MMM, published MAPE/R²) vs. NIQ's descriptive correlation. CFO-defensible causation vs. market share correlation. Speed: DSIM is weeks-to-insight; NIQ's POS data is 6–8 weeks lagged. | At the strategic/category level, NIQ's market share data is the industry standard — DataWeave has no equivalent. The "complete sales picture" narrative favors NIQ. |
| **Market share / syndicated data** | None — DataWeave is shelf-only, not a market measurement vendor. | NIQ's core heritage asset. Scantrack / NielsenIQ Omnisales for POS-based market share. No equivalent in the DataWeave suite. | DataWeave is not trying to compete here — correct positioning avoids this dimension | Critical gap: the CFO/Category VP uses NIQ market share as their source of truth. If NIQ can show "shelf score → market share delta" in one dashboard, it is a compelling account-locking story. |
| **Ecosystem integrations** | Downstream: Salsify/Plytex (deferred v2), Tableau (DSIM delivery). COLAB-based per-account config. | Integrates with NIQ's full data stack (Omnisales, Connect, Scantrack). Perpetua for activation. Skai alliance (December 2024) for retail media measurement. Industry partnerships for retail media activation. [VERIFY: NIQ digital shelf API/integration documentation] | DataWeave's vendor neutrality — no activation stake, no agency affiliate | NIQ's ecosystem breadth: POS data, retail media activation (Perpetua), content (Brandbank), activation partnerships (Skai). DataWeave cannot offer this as a bundle. |
| **UI/UX for daily operational use** | 4-panel navigation model. Built for eCommerce Managers and Digital Shelf Analysts as daily operators. Module-level dashboards with configurable filters. Alert-based threshold monitoring. | [VERIFY: NIQ digital shelf UI/UX specifically. Known complaint pattern: large enterprise platforms like NIQ tend to be complex and built for category managers / quarterly review cycles, not daily shelf ops.] | DataWeave's UI was designed for daily shelf ops workflows — not quarterly reporting. COLAB per-account config means the dashboard is right-sized to each brand's category scope. | NIQ has more development resources. If they invest in UX, the gap narrows quickly. |
| **API access** | Data Collection API live (underlies all products). [VERIFY: whether brand-facing API for DSA data export is a current commercial offering vs. internal infrastructure only] | [VERIFY: NIQ digital shelf API for brand data export and third-party integration. Enterprise APIs are standard for NIQ-tier vendors.] | No confirmed advantage for either party — both likely offer enterprise data export | No known gap |

---

## Positioning and Messaging

**Core claim (2026):** "Digital shelf as the anchor of omnichannel success" — NIQ positions digital shelf analytics not as a standalone monitoring tool but as the connective tissue linking discovery (SoS), trust (content/reviews), and revenue outcomes (market measurement + retail media) in a single omnichannel view. [VERIFY: current NIQ homepage / digital shelf product page messaging — may have evolved post-Ascential integration]

**Proof points NIQ uses:**
- Scale: 1,000+ retailers, 75 countries, >150 companies across 72 countries
- Heritage: Nielsen's 100-year legacy in market measurement — the "truth standard" CPG brands use for category reporting
- Acquisition stack: Ascential Edge (shelf) + Brandbank (content) + Perpetua (activation) + Data Impact (analytics) = single partner covering shelf-to-sales
- AI paper (2024): "5 AI Use Cases for Digital Shelf" — positions NIQ as AI-forward in the category [VERIFY: paper availability and specific claims]
- Skai alliance (December 2024): Using NIQ POS data to improve incrementality measurement and MMM accuracy — positions NIQ as the data layer behind the best retail media measurement

**G2 strengths (training knowledge — [VERIFY: g2.com/products/nielseniQ or similar listing]):**
- Comprehensive data coverage at global scale
- Strong onboarding support for enterprise accounts
- Trusted brand name with CPG procurement teams

**G2 weaknesses / top complaints (training knowledge — [VERIFY: g2.com current reviews]):**
- Platform complexity — steep learning curve, not designed for daily operational workflows
- Data lag — syndicated data cycle creates frustration for brands that need daily signals
- Implementation timelines — long enterprise onboarding cycles
- Limited reviews overall: G2/Capterra review volume for NIQ digital shelf is materially lower than Profitero or Stackline — likely because NIQ's enterprise motion does not drive self-serve sign-ups and review campaigns. Low review volume makes it harder to surface objective complaints.
- [INFERRED from structural comparison and persona intelligence]: NIQ's UX likely optimized for category managers running quarterly reviews, not eCommerce analysts needing daily shelf pulse. This maps to the "6–8 week lagged data" complaint pattern in DSIM persona research.

---

## Customer Overlap

**Accounts mentioned using NIQ as a data source (from DSIM persona research — indirect relationship, not direct competitive displacement):**
- The RGM/Finance persona described in DSIM GTM Internal research explicitly uses "NielsenIQ / Circana for category-level trend analysis. Sees results 6–8 weeks after the fact." — This pattern is described as a pain point, not a strength. It means NIQ is in the account but the buyer is frustrated with lag.
- The eCommerce Brand Manager persona "gets category performance reports from NielsenIQ / Circana but they're 6–8 weeks lagged" — same signal.
- Both personas are active in the DataWeave DSIM pipeline. This means: NIQ is almost certainly in most of DataWeave's Tier 1 pipeline accounts as a market measurement vendor. The question is whether they are also in the digital shelf seat or just the POS/market share seat.

**Known direct competitive evaluations:** None documented in DataWeave's internal materials as of May 2026. [Fill in when known from CS/Sales pipeline intelligence]

---

## Strategic Implications

**1. Where they're taking deals from DataWeave:**
- **Global enterprises with NIQ POS relationships:** When a Nestlé, Unilever, or P&G category planning team drives the technology evaluation, NIQ wins on familiarity, existing contract, and the bundle story. DataWeave is unlikely to win these top-of-funnel if the sponsor is a category manager rather than an eCommerce or digital shelf manager.
- **The market share + shelf combination:** NIQ's ability to say "here's your market share trend (Scantrack) AND here's your shelf performance (Digital Shelf) in one dashboard" is a genuine structural threat that DataWeave cannot counter with product alone. No DataWeave product gives brands market share data.
- **Multi-national mandates:** Any CPG with a 50+ country digital shelf rollout requirement will struggle to choose DataWeave over NIQ's 75-country footprint. NIQ wins the global standardization conversation.

**2. Where DataWeave is winning:**
- **eCommerce-native buyers:** When the sponsor is an eCommerce Manager, Director of Digital Shelf, or a performance marketing lead rather than category management, DataWeave's daily cadence, zipcode granularity, and Veracite explainability are operationally superior.
- **North America-first, Walmart-centric accounts:** NIQ's strength is global breadth; DataWeave's strength is operational depth at key US retailers. For a brand focused on winning Walmart.com, DataWeave's COLAB-level Walmart configuration + daily crawl + DSIM causal measurement is a stronger story than NIQ's category-analytics heritage.
- **Agency-managed brands (enabler model):** DataWeave's RBAC + audit trail + attribute-level override is built for the enabler pattern (GeekSpeak operating on behalf of Lassonde). NIQ has no documented equivalent for this operational model.
- **Methodology transparency:** DataWeave DSIM publishes MAPE=5.9% / R²=91%. NIQ has no equivalent published accuracy benchmarks for any measurement product. The CFO-level buyer who demands methodological rigor can be won with this.
- **New logos without NIQ legacy relationship:** Brands that haven't been NIQ customers historically are significantly easier DataWeave targets. The NIQ bundle story only works if the POS data relationship already exists.

**3. Recommended product/positioning response:**

- **Don't compete on breadth.** NIQ's 1,000+ retailer, 75-country claim is not a fight DataWeave should pick. Concede global breadth; own operational depth.
- **Own the "daily shelf ops" lane explicitly.** Position DataWeave DSA as the tool eCommerce Managers use every day — not the tool category managers pull up for the quarterly business review. NIQ's UX and data cadence are optimized for the quarterly review. DataWeave's are not.
- **Speed as the wedge in NIQ-incumbent accounts.** When NIQ is the existing vendor, the displacement argument is: "NIQ tells you what happened 6 weeks ago. DataWeave tells you what's happening today — with zipcode-level specificity so you can act before the sales impact shows up in Scantrack." Time-to-action, not breadth, is the value claim.
- **Veracite explainability vs. NIQ black box.** In any content audit conversation, the audit trail + override mechanism + attribute-level explainability is a hard differentiator. Push for proof of concept on a contested classification — DataWeave can show which attribute failed and why. Ask NIQ to do the same.
- **DSIM causal measurement vs. Data Impact descriptive correlation.** If the evaluation includes the "connect shelf to sales" requirement, push the buyer to ask NIQ: "Is Data Impact causal or correlational? Can you show me MAPE and R²?" No published answer exists. DSIM can answer both.
- **Avoid the market share conversation.** Do not position DSIM or DSA as a market share product. That conversation benefits NIQ every time. Keep the frame on shelf-to-sales causation (DSIM) and daily operational shelf monitoring (DSA) — both are outside NIQ's natural territory.
- **Post-acquisition integration uncertainty is a legitimate risk to raise.** NIQ acquired Ascential (which held Edge, Brandbank, Perpetua) in 2023 and Data Impact earlier. Multi-acquisition bundling creates real product integration uncertainty — pricing, roadmap, support model, and naming are all in flux. In a competitive situation, ask: "Which team owns the product roadmap for NIQ Digital Shelf? How many integrations are still in-flight post-acquisition?" Contrast with DataWeave's focused roadmap and single PM ownership.

---

## NIQ AI — 5 Use Cases (2024 Paper, researched May 2026)

**Source:** [5 applications of AI for the digital shelf — NIQ, 2024](https://nielseniq.com/global/en/insights/report/2024/5-applications-of-ai-for-the-digital-shelf-2/)

**Overall assessment:** NIQ's AI is **prescriptive recommendation engine**, not demand forecasting. The "predictive" framing is about predicting what content/keyword/pricing changes will improve shelf KPIs — not forward-looking sales forecasting. Maturity is real but scope is narrower than Stackline Beacon.

| # | Use Case | What it does | Persona | Maturity | DataWeave equivalent |
|---|---|---|---|---|---|
| 1 | **AI-Driven Search Optimization** | AI recommendations on keyword density, title structure, content per retailer to improve organic search rank. Evaluates product name visibility, description quality, keyword count vs. each retailer's search algorithm. | eComm Manager | **Shipped** — active feature in NIQ Digital Shelf product page | DataWeave Ask Me + Missing Product Callout (different interface, similar intent) |
| 2 | **Personalized Product Recommendations** | AI agents surfacing which product attributes drive conversion for different shopper segments. Retailer-side data interpreted for brand teams. | Brand Marketing | **Active** — framing suggests consumer-behavior data NIQ surfaces to brands | No direct DataWeave equivalent |
| 3 | **AI-Powered Pricing Optimization** | Real-time competitive pricing intelligence with AI recommendations to stay competitive. Uses 200B+ daily data points from 1,000+ retailers. | Pricing + Category Managers | **Shipped** — consistent with Data Impact product capabilities | DataWeave P&P module (operational monitoring, not AI-driven recommendations) |
| 4 | **AI & Visual Merchandising / Content Compliance** | AI evaluates imagery compliance (brand standards vs. live on retailer PDP), identifies off-brand images, missing content, placement gaps. Powered by Brandbank content library. | Content + Brand Teams | **Shipped** — Brandbank integration is live | DataWeave Content Quality (CQ) + Veracite. DataWeave's COLAB is more configurable; NIQ's Brandbank provides syndicated reference data at scale. |
| 5 | **6 Future AI Developments** | NIQ outlines 6 emerging directions as roadmap — not a shipped product. Details not publicly disclosed. | Industry strategists | **Future roadmap** | — |

**Key competitive insight:**
- NIQ AI use cases 1, 3, 4 are essentially the same capabilities DataWeave DSA has (search optimization guidance, pricing intel, content compliance) — but NIQ delivers them as AI-generated push recommendations, not dashboard metrics. The UX pattern is different.
- DataWeave's Ask Me widget is architecturally more flexible — NLQ across all metrics vs. NIQ's scorecard-style push recommendations. Different approach to the same "tell me what to do" problem.
- NIQ has **no equivalent to Stackline Beacon forecasting** — NIQ AI is prescriptive (improve these attributes to improve these KPIs) not predictive (here's your sales forecast).
- NIQ's structural advantage in AI is **training data scale** — 200B+ daily data points, 56M products — which makes their recommendation models more accurate across long-tail retailers DataWeave doesn't cover.

---

## Acquisition Timeline (for deal conversations)

| Event | Date | Source | Confidence |
|---|---|---|---|
| NielsenIQ acquires Brandbank | ~2020 | Training knowledge | [VERIFY: exact date] |
| NielsenIQ acquires Data Impact SAS | ~2022 | Training knowledge | [VERIFY: exact acquisition date and terms] |
| NielsenIQ acquires Ascential (including Edge digital shelf, Perpetua, WARC, Flywheel) | July 2023 | Training knowledge — Ascential was a public company (LSE-listed); acquisition widely reported | [VERIFY: deal close date and which specific Ascential products were retained vs. divested post-acquisition] |
| Skai announces global alliance with NielsenIQ | December 2024 | insider-data/competitor-profiles/skai.md (April 2026) | HIGH — internally verified |
| NIQ publishes "5 AI Use Cases for Digital Shelf" paper | 2024 | User-supplied baseline (April 2026) | MEDIUM — [VERIFY: paper title, URL, specific claims] |

---

## Data Verification Log

| Claim | Source | Date | Confidence |
|---|---|---|---|
| NIQ Digital Shelf: 1,000+ CPG retailers, 75 countries, banner- and store-level insights | User-supplied competitive intelligence | April 2026 | HIGH — treat as verified baseline |
| Claims >150 companies across 72 countries | User-supplied competitive intelligence | April 2026 | HIGH |
| NIQ/Ascential competitive threat classified as HIGH in DataWeave internal battlecard | insider-data/dsim/plan-of-action.md (DSIM_Competitive_BattleCards_1.pptx, April 2026) | April 2026 | HIGH — internally verified |
| Ascential acquisition included Edge digital shelf, Brandbank, Perpetua | insider-data/dsim/plan-of-action.md | April 2026 | HIGH — internally referenced |
| Post-acquisition product naming and packaging in flux | insider-data/dsim/plan-of-action.md | April 2026 | MEDIUM — explicitly flagged as [VERIFY] in internal docs |
| Skai / NIQ alliance announced December 2024 | insider-data/competitor-profiles/skai.md | April 2026 | HIGH — internally verified |
| NIQ POS data used as incrementality measurement input in Skai alliance | insider-data/competitor-profiles/skai.md | April 2026 | HIGH |
| NIQ digital shelf data integration into Skai's Impact Navigator not confirmed as shipped | insider-data/competitor-profiles/skai.md | April 2026 | HIGH — explicitly flagged as unverified in skai.md |
| RGM/Finance and Brand personas in DSIM ICP use NIQ/Circana for category analytics, 6–8 week lag | insider-data/dsim/dsim-positioning-and-personas-2026-04-25.md | April 2026 | HIGH — internally verified persona research |
| NIQ "5 AI Use Cases" paper published 2024 | User-supplied competitive intelligence | April 2026 | MEDIUM — [VERIFY: URL and full claim list] |
| 2026 NIQ positioning: "Digital shelf as anchor of omnichannel success" | User-supplied competitive intelligence | April 2026 | MEDIUM — [VERIFY: current website messaging] |
| Data Impact by NIQ: connects shelf data to retailer e-commerce sales outcomes | User-supplied competitive intelligence | April 2026 | HIGH |
| G2/Capterra review volume low relative to Profitero | User-supplied competitive intelligence | April 2026 | HIGH |
| NIQ Byzzer product exists for SMB tier | Training knowledge (Claude, through Aug 2025) | — | [VERIFY: current product offering and whether digital shelf is included] |
| NIQ Connect / Omnimarket for omnichannel sales view | Training knowledge (Claude, through Aug 2025) | — | [VERIFY: current product name and scope — naming conventions change post-acquisition] |
| Data Impact SAS acquisition ~2022 | Training knowledge (Claude, through Aug 2025) | — | [VERIFY: exact date and terms at nielseniq.com/press] |
| Ascential acquisition close July 2023 | Training knowledge (Claude, through Aug 2025) | — | [VERIFY: confirm close date and final product retention decisions] |
| NIQ platform complexity and UX complaints (G2) | Training knowledge pattern + structural inference | — | [VERIFY: current G2 reviews at g2.com] |
