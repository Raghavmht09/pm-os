# digital-shelf — knowledge
Last updated: 2026-05-07
Sources: DSA_Product_Overview.docx, PRD-geekspeak-lassonde-content-audit.md, Geekspeak DSA implementation weekly sync.md, transcript-1.md, transcript-2.md, transcript-3.md, context-library/product-portfolio.md, Confluence CSM space (ID 3518890005 Feb 2026), Confluence PROD space (DSA Ask Me Widget ID 3653500947 Apr 2026, Sprint trackers Apr 2026, SoS feature PRDs, HLD DSA Data Modelling ID 2882437122)

---

## 1. Product Identity

**DSA (Digital Shelf Analytics)** is DataWeave's brand-facing SaaS. It continuously monitors and measures how a brand's products appear and perform across retailer e-commerce platforms. Core question it answers: "Is my product visible, available, correctly presented, and winning against competitors — right now, across every retailer, location, and category?"

DSA is the revenue engine of the DataWeave brand product suite. COP, DSIM, and Assortment Intelligence all extend or depend on DSA data. Understanding DSA is foundational to every adjacent product conversation.

**Current co-ownership scope (Raghav):** DSA — Content Audit + Share of Search workstreams, specifically the Veracite-powered content match management and the GeekSpeak enabler model.

---

## 2. Five KPI Modules

| Module | Core Question | Score Buckets | Primary Persona |
|---|---|---|---|
| Availability | Is my product in stock and purchasable? | Low: 0–20 / Moderate: 20–40 / High: 40–100 | Supply chain, Category ops |
| Share of Search (SoS) | Do shoppers find my product in keyword search results? | Low: 0–10 / Moderate: 10–20 / High: 20–100 | Performance marketing, eComm Manager |
| Share of Category (SoC) | Is my product visible when shoppers browse category pages? | Low: 0–10 / Moderate: 10–20 / High: 20–100 | Category manager, JBP season |
| Content Quality (CQ) | Does my product page meet brand content standards? | Low: 0–20 / Moderate: 20–40 / High: 40–100 | Content team, Brand manager |
| Ratings & Reviews (RnR) | How is my product rated and is sentiment improving? | Low: 1–2.9 / Moderate: 3–3.9 / High: 4+ (out of 5) | Brand health, Marketing |
| Price & Promotion (P&P) | How is my product priced vs competitors and how deep are discounts? | Not bucketed; configurable discount thresholds | Pricing team, Trade marketing |

Modules are sold as subscriptions. Not all are enabled by default per account. Module activation is a direct revenue lever.

---

## 3. Scoring Model — Universal Rules

- All scores are **0–100** (RnR is out of 5, normalised to 100 for health score averaging)
- A **product instance** = one product at one specific location (zipcode)
- All scores are **averages of product instances**, not distinct products
  - A product tracked at 50 zipcodes contributes 50 instances to the average
- Retailer-level score = average of all matched product instances on that retailer on that date
- Brand-level score = average across all matched products for that brand
- Geographic score = average of all products × all retailers for that city/zipcode
- **PM alert:** A brand with high geographic coverage (many zipcodes) can score differently from one tracked in fewer locations. Always check "total products tracked" and "refresh frequency" in the stats panel when interpreting scores.

---

## 4. UX Architecture

**4-panel navigation model** used throughout:
- Panel 1 (far left): Top-level module selector — Dashboard, Detailed Views, Alerts
- Panel 2: Sub-module or list selector (e.g., list of keywords, categories, products)
- Panel 3: Selected item detail or main dashboard view
- Panel 4: KPI tab detail for selected item (in Detailed Views only)

**Default landing page:** SKU Overview (since Aug 2023 update, replaced the Scorecard as default).

**Universal widget controls (every widget, top-right corner):**
- "i" button: contextual help for the widget
- ⋮ three-dot menu: download options (XLSX always available; some support image export)
- Search bar (where applicable): by SKU code or product title

**Universal time aggregator:** Daily / Weekly / Monthly / Quarterly / Yearly. Controls all widgets on the page simultaneously.

**Universal filter system:** Manufacturer, Retailer, Brand, Category, Subcategory, SKU ID, City/State/Zipcode. Applied filters propagate across all widgets on the page.

---

## 5. Match Logic (Veracite)

Three match states — critical distinction for ops decisions:
- **Matched:** DataWeave found and is tracking this product on this retailer. Score calculated.
- **Unmatched (Not Matched):** Product exists in brand catalogue but DataWeave couldn't find a match during crawl. May be a DataWeave data quality issue, not a real business event.
- **Delisted:** Product was previously matched but listing is no longer live. Real business event — retailer pulled product or brand discontinued it.

**Unmatched vs Delisted matters:** Unmatched → investigate DataWeave data quality. Delisted → investigate brand/retailer relationship.

---

## 6. Module Detail — Share of Search (SoS)

**Core formula:** SoS score for keyword + retailer = (your products in search results / total products in results) × 100, averaged across all tracked zipcodes.

**Three-way split:** Overall, Organic, Sponsored placements. This split is the critical differentiator for performance marketing accountability. A brand with high Sponsored but low Organic SoS is spending to compensate for weak shelf position.

**Key sub-pages (most used):**
- SoS across Keywords: keyword × retailer matrix. Click any cell to see which products rank for that keyword.
- Keyword Competitive Comparison: stacked bar chart showing SoS per brand broken into rank buckets (Page 1 overall, Ranks 1–5, 6–10, 11–20, >20). Hover shows Organic/Sponsored split per brand. Most analytically powerful view for performance marketing.
- SoS over Time: trend lines per retailer + aggregate

**Most valuable datapoints:**
1. Organic vs Sponsored split — tells whether you're winning organically or only through paid spend
2. Rank bucket distribution — page 1 rank 8 vs rank 2 is very different commercially
3. SoS over Time trend — catch share erosion early, before it shows in sales data

**Lassonde/GeekSpeak implementation specifics:**
- Daily crawl
- 50 keywords × 6 Canadian banners = 300 total
- Retailer-specific keyword-to-SKU relevancy mapping (same keyword may have different relevant SKUs per retailer)
- Tracking scope: **page 1 results** (20–40 products). Top-100 tracking is a commercial addendum item.
- Metrics: Average Ranking + Coverage Percentage per keyword per banner
- Non-relevant SKUs (competitor products appearing in search but not in client's product list) are excluded from coverage calculations
- Postal code: 1 per banner initially; DataWeave runs multi-location test before locking in final postal code

**Aggregate views requested by GeekSpeak (Apr 29 sync):**
- Keyword-level aggregate across all retailers: one row showing overall avg rank + coverage % for each keyword
- Highest-level aggregate: brand-level across all retailers in Canada — single average rank + coverage %
- DataWeave team confirmed aggregation is feasible and not difficult to implement

**Retailer list (Lassonde SoS, confirmed as of Apr 2026):**
- Walmart CA, Loblaws, Real Canadian Superstore, No Frills, Voila, Metro, Maxi (6 confirmed banners)
- Uber Eats removed (operates as marketplace — requires store + banner location details, not a clean single-banner comparison)
- Provigo selected as backup/replacement choice (regional Quebec banner, French-only)
- **Open question:** French-language content checking for Provigo — capability not confirmed as of Apr 29 sync

---

## 7. Module Detail — Content Quality / Content Audit

**How CQ is measured:** Score measures deviation from brand-defined reference guidelines. The brand sets the standard; DataWeave scores each product's actual content against those guidelines.

**Attributes tracked (can vary by retailer and brand — defined in COLAB config):**
- Title (length, character count vs guideline; brand name present in title)
- Number of bullet points
- Number of images (min image count)
- Product description length
- Presence of video
- Presence of A+ / Enhanced content

**Content Audit for Lassonde (extended, Veracite-powered):**
Attributes audited per SKU per retailer:
- Primary image (1:1 direct match)
- Secondary images (N×N brute-force matching — each reference image vs all actual images, highest-confidence pair selected)
- Product title (EN + FR)
- Product description (EN + FR)
- Feature bullets
- Ingredients (text)
- Nutrition Facts Table / NFT (sourced via GS1 for Loblaws — tracked but not GeekSpeak's responsibility to supply)
- Preparation instructions
- Reference links on PDP

**Crawl cadence:** Monthly (5th or 10th of each month per agreed schedule)

**Retailers (Lassonde Content Audit):** Metro, Loblaws, Walmart CA, Save On Foods, Giant Tiger + others per brand's coverage

**Score-to-enum mapping (default, configurable per brand):**
- 80–100 → `Correct`
- 0–79 → `Incorrect`
- User override Incorrect→Correct → `Correct - Slightly Modified`
- **Open question:** Is exactly-80 `Correct` or `Incorrect`? Not resolved as of Apr 2026.

**Override system (F1) — key mechanics:**
- Override is attribute-level (per image, per text field), not product-level
- Two modes: (a) Label override — changes displayed label only, score unchanged; (b) Score override — user supplies replacement confidence score
- `system_score` is never overwritten; always preserved in data model
- Override is bidirectional: Incorrect→Correct-Slightly-Modified, AND Correct→lower score (for wrong product match)
- Override is enabled/disabled at brand instance level via Veracite config (not all brands have override by default)
- Override reason codes: 8 predefined buckets (OR-01 through OR-08) + free-text for OR-08 "Other"
- Group override vs per-image override for secondary images (both available, independent of each other)

**Override reason buckets (standard, DataWeave product-level, applied across all brands):**
| Code | Label |
|---|---|
| OR-01 | Image marketing label (promotional badge, price sticker added by retailer) |
| OR-02 | Image typography/topology (tilt, rotation, crop, lighting difference) |
| OR-03 | Text rephrasing (keywords reordered, synonyms used; meaning preserved) |
| OR-04 | Regional/language adaptation (EN+FR variation, "Made in Canada" added/removed) |
| OR-05 | Character/formatting difference (™, ®, punctuation, encoding) |
| OR-06 | Truncation (retailer character limit shortened description; core content present) |
| OR-07 | Secondary image ordering (images present and correct but in different sequence) |
| OR-08 | Other (free-text encouraged but not required) |

**State management (F2):**
- No content change since last crawl → preserve last user override, skip recalculation
- Either reference OR crawled attribute changes → discard override, re-run semantics, reset to new system enum
- Uses existing version comparison service (hash-based)
- Fallback if service unavailable: treat attribute as "changed" (conservative — forces re-score rather than silently retaining stale override)
- UI shows both: current system score/label AND last user action via ⓘ tooltip (actor name, action, UTC timestamp)

**RBAC model (F3):**
- 3 roles: Admin, Editor, Viewer
- Editor: view + override; Viewer: view only (override UI completely hidden, not disabled); Admin: view + edit + user management
- Granular access: restrict by retailer, by category
- Customer admin (GeekSpeak) controls seat allocation — DataWeave does not manage individual user creation
- Seat-based licensing

**Audit logging (F4):**
- Every override logged: actor, timestamp (UTC), SKU ID, retailer, attribute, old value, new value, reason code, free-text
- Immutable — no user (including Admin) can edit or delete entries
- Retrieval: input SKU ID → paginated action history table
- Exportable to CSV

**Output files delivered per brand per crawl cycle:**
1. **Brand-level Scorecard:** Excel/CSV; one row per attribute per retailer; columns: Retailer, Attribute, Total SKUs, # Correct, # Incorrect, # Correct-Slightly-Modified, Compliance %, Last Crawl Date
2. **Retailer-level Baseline Resource File:** Excel multi-sheet; one sheet per retailer; columns: Brand SKUID, Retailer SKUID, UPC, attribute, reference value, crawled value, system score, display enum, last override by, last override at, override reason

**Enabler model (GeekSpeak pattern):**
- Enabler/agency (GeekSpeak) operates DataWeave tooling on behalf of brand (Lassonde)
- Lassonde end-users do not get direct platform access in this engagement
- GeekSpeak acts as operator and manages all override actions, user access, compliance reporting
- Lactalis is the precedent: same GeekSpeak team, same platform; content audit was manual one-off POC for Lactalis; Lassonde productizes it

**GeekSpeak-specific content input format:**
- Files provided via OneDrive (Plytex PIM API is future scope)
- SKU list per retailer: UPC, title (EN+FR), variant info, brand name, description, bullets, ingredients, prep instructions, image URLs
- Images provided in ranked order (primary always first; secondary order varies by retailer — some numbered 1,2,3,4; others named "front", "angle")
- Image classification types (front, back, lifestyle, ingredients, infographic) predefined at account/brand level in Veracite config
- Lassonde image classification types: not yet confirmed (open question as of Apr 2026)

---

## 8. Data Infrastructure

- **Infrastructure:** Fully migrated from Azure to AWS as of March 2026
- **Data pipeline:** crawl → Veracite matching → Semantics normalisation → Athena/S3 storage → DSA dashboard
- **Frontend:** React. Query layer: DuckDB (in PI v2; DSA migration to this architecture underway as part of DSI unification)
- **Kafka:** Message bus between pipeline stages (content audit pipeline)
- **S3:** Data handoff between Product Engineering and BA layer
- **Veracite:** Internal matching engine + spec management + config management for brand/customer onboarding. Match quality is customer-verifiable through Match Management (MM) — customers can approve/disapprove matches.
- **Semantics service (Suraj's team):** AI/ML service that normalises product attributes and powers matching model. Disapproved matches from MM feed back as RL training signals.

---

## 9. COLAB Configuration

Every DSA account is configured through a COLAB file — defines: which brands/SKUs to track, which retailers/categories to crawl, keyword lists for SoS, content quality reference guidelines per retailer, discount bucket thresholds for P&P.

**COLAB Studio** (launched Aug 2025): web tool for creating and validating COLAB files. Currently DSA-only. Reduces onboarding time and dependency on delivery team.

---

## 10. Technical Pipeline — Content Audit (GeekSpeak flow)

```
[GeekSpeak OneDrive]
       ↓ reference content (images + copy)
[Veracite / Ingestion]
       ↓ configuration + reference data
[Crawler]
       ↓ crawled PDP data (images + text)
[Product Engineering — Pipeline / Kafka]
       ↓ message per SKU per attribute
[Semantics Service]
       ↓ confidence score + system enum per attribute
[Override State Engine] ← checks version comparison service
       ↓ final display enum (applying state management)
[Analysis Layer / BA]
       ↓ S3 data
[Tableau / Native Dashboard]
       ↓
[GeekSpeak: Scorecard + Baseline Resource File]
```

**N×N Image Pairing module (Suraj's team, 3 weeks from start):**
- For each reference secondary image, compare against all actual crawled secondary images
- Select highest-confidence pair
- Edge case: reference exists, no actual match → score=0, enum=Incorrect, status=not_found
- Edge case: actual exists, no reference → excluded from scoring, flagged as unmatched_actual

---

## 11. Competitive Landscape

| Competitor | Overlap | DataWeave Differentiator |
|---|---|---|
| Profitero+ | Very similar DSA product. Strong on Amazon. In-house sales estimation layer. | Operational depth in non-Amazon retailers (Canada, India, SA). Configurable content standards (COLAB). Ask Me NLQ AI. DSA+PI+Assortment cross-product combo. |
| Stackline (Beacon/Atlas/Advisor) | Sales & share focused. Forecasting in Beacon. AI-powered Advisor recommendations. | Non-Amazon retailer depth. Weighted SoS with customer-defined weights. Ask Me AI. Missing product callout. |
| NielsenIQ Digital Shelf / Data Impact | Market share + DSA bundle. 1,000+ retailer breadth. POS-based market share. | Daily operational data (NIQ is 6–8 week lag). eComm team daily workflow vs. NIQ quarterly category review. Configurable standards. Ask Me AI. |
| Salsify / Syndigo | PIM and content syndication (not DSA competitors). | DSA + COP are measurement + optimisation layer on top. Complementary, not competing. |
| SKAI | DSP / paid search management. SKAI resells DataWeave DSA data. | Partnership, not competition. |

**DSA real differentiators (confirmed from Confluence + CSM playbook — May 2026):**
1. **Ask Me AI (NLQ)** — launched April 2026. Natural language queries over DSA data. Cross-metric relationship analysis. No published competitor equivalent in DSA module.
2. **Organic vs Sponsored SoS split + Organic Appearance Callout** — proactively surfaces "you can reduce sponsorship on keyword X because you already rank organically top-5." Actionable media budget signal, not just a metric.
3. **Missing Product Callout** — identifies expected brand SKUs absent from search results, with corrective action suggestions. Proactive visibility gap detection.
4. **Weighted SoS** — customer-defined weights by retailer, location, keyword type, rank tier. Enterprise brands with unequal retailer mix get more accurate share signal.
5. **Content Optimizer (COP)** — LLM-powered PDP copy generation from DSA CQ scores. Zappos first production account (May 2026). Closes content monitoring → content action loop.
6. **COLAB configurability** — brand-defined content standards per retailer per attribute. Competitors use platform-defined standards. Critical for regulated categories (bilingual, nutrition labeling).
7. **Daily data refresh** at SKU level — CSM playbook confirms "daily" for fast-moving CPG. NIQ is 6–8 weeks; Profitero is daily for monitoring but advisory cadence is slower.
8. **Non-Amazon, non-US operational depth** — Canada (Loblaws, Metro, No Frills, Walmart CA, Provigo), India (Amazon India, Flipkart, Atomberg), South Africa (Pernod Ricard). Stackline is primarily Amazon + top US retailers.

**What is NOT a DSA differentiator (user-confirmed May 2026):**
- Zipcode-level granularity: capability exists but not a meaningful buying criterion for most customers
- Override/audit trail: table-stakes compliance capability, not differentiated from market expectation

**DSA blind spots vs competitors:**
- No sales linkage → DataWeave DSA measures shelf; cannot answer "what did improving my score by 10 points do to revenue?" with a shipped product
- No forecasting → Stackline Beacon wins any "integrated forecasting" RFP dimension
- Weak integration ecosystem story → Profitero names 6+ integrations publicly; DataWeave names 1 (SKAI reseller)
- Lower retailer breadth for global CPG → Profitero 700+, NIQ 1,000+, DataWeave 25+ countries but thinner at long-tail

---

## 11a. DSA AI Features (confirmed April 2026)

**Ask Me Widget** — Confluence ID 3653500947, launched April 2026:
- AI-powered assistant in DSA dashboard
- Natural language query interface — no filter/dashboard navigation required
- Outputs: text summaries, tables, visualisations
- Capabilities:
  - Retrieve KPIs (availability, SoS, pricing, CQ) instantly
  - Benchmark vs competitors
  - Analyze cross-metric relationships (e.g., "how does availability affect SoS on this retailer?")
  - Drill down from category → brand → SKU without switching views
  - Conversation context preserved across queries
- Documentation: https://dataweave.com/docs/products/dsa/ask-me-your-ai-powered-digital-shelf-assistant/6613
- **Competitive context:** No equivalent published by Profitero, Stackline, or NIQ Digital Shelf specifically for DSA NLQ. Stackline Advisor is recommendation-driven (different pattern). NIQ mentions AI predictive use cases in a 2024 paper but maturity unconfirmed.

**AI infrastructure architecture (HLD, June 2025):**
- Long-term: unified data architecture across all product lines (PI, DSA, Assortment)
- Current DSA RDBMS (PostgreSQL) not scalable for dynamic NLQ → AI wrapper layer sits on top
- Unified Iceberg/S3 Athena store is the long-term target

---

## 11b. SoS AI-Powered Callouts (confirmed feature PRDs)

**Organic Appearance Callout** (Confluence ID 2857205761, Mar 2025 PRD):
- Detects when brand's own products appear BOTH organically AND as sponsored results for the same keyword
- Surface: dashboard callout "Potential to reduce or discontinue sponsorship for X products"
- Detail view: table showing State, City, Zip Code, Sponsored Rank, Organic Rank per SKU per keyword
- Commercial value: media spend optimization signal embedded inside SoS dashboard (not just rank tracking)
- Alert capability: user-set alerts for organic appearances on key keywords

**Missing Product Callout** (Confluence ID 2857074699, Mar 2025 PRD):
- User defines expected products per keyword per retailer
- DSA identifies when expected products are absent from top X search results
- Surface: warning badges in SoS dashboard; filtering to show only missing products
- Corrective action suggestions: content optimization, sponsorship increase, retailer categorization fix
- Alert capability: in-platform and email notifications when a product drops off

**Weighted SoS** (Confluence ID 2505801987, Sep 2025):
- Customer-defined weights across 4 dimensions: Retailer, Location, Rank tier, Keyword type (branded vs generic)
- Weighted average replaces simple average for overall SoS score
- Enterprise brands with heavy Walmart reliance (vs equal-weight multi-retailer) get more accurate share signal
- This is a primary requirement in some customer orgs

---

## 12. DSA → DSIM Data Flow (Input Mapping)

| DSA Module | DSIM Use Case | Commercial Pull |
|---|---|---|
| Availability over Time | OOS → Revenue loss quantification; store clustering; incremental sales decomposition | Highest — supply chain and category teams act immediately |
| Share of Search over Time | SoS rank → Sales correlation; media attribution (organic vs sponsored); agency accountability | High — performance marketing teams |
| Share of Category over Time | Category rank → Market share correlation; JBP season data | High — retailer negotiations |
| Content Quality over Time | Content score → Conversion lift; PDP optimisation ROI | Medium — harder to directly monetise |
| Ratings & Reviews over Time | Consumer trust trend → Long-term brand health signal | Medium-long term |
| Price & Promotion | Discount depth → Margin impact; promo timing → Sales response curve | Situational |
| Alerts | Real-time trigger layer for DSIM action | Operational |

**DSIM critical data requirement:** Availability history + SoS history at daily cadence at SKU × retailer × zipcode level. The Lactalis LU-704 ticket (rejected) was a request for exactly this data at daily cadence — the rejection is likely the root cause of Lactalis's 3-year MMM frustration.

---

## 13. Key Customers (DSA brand-side)

Lactalis US (LHD, LUSY, LAG — Kraft, Stonyfield, Siggi's, President, Galbani), Mars, Grupo Bimbo (Canada), Kellanova, Pernod Ricard (South Africa + global), SKAI (reseller to Conagra, Campbell, ELC), Atomberg (India).

Active co-owned engagement: Lassonde (juice & beverages, ~200-300 SKUs) via GeekSpeak Commerce (CPG agency/enabler). Canadian retailers. First joint customer for DataWeave × GeekSpeak.

---

## 14. Known Gaps & Roadmap Items (as of Apr 2026)

**Active initiatives:**
- Multi-Frequency Support: ready for release (different refresh frequencies per module per account)
- Hierarchy Management (StyleCode/CC grouping): biggest active initiative. Replaces SKU-level analytics with variant-aware grouping. Critical for fashion/apparel.
- COLAB Studio: launched Aug 2025, DSA-only. PI enablement next.
- Content Optimization (COP): LLM-powered PDP optimisation. Takes DSA CQ scores as input. Zappos is first PI customer being onboarded.
- DSI Unification: Merging RPI + DSA product lines into unified data architecture (AWS Athena Iceberg + S3). Reduces tech debt, enables cross-product analytics.
- DSA Arabic Translation (Kellanova): in testing.
- DSIM: Services-led, pre-PMF. Owned by Satya & Bhaswitha. No standalone product page yet.

**Stale documentation (4 broken URLs in public docs — features work, links broken):**
- /share-of-search-analysis-detailed-view/1569
- /content-score-across-retailers/965
- /content-quality-by-attributes-over-time/3530
- /share-of-category-over-time-soc-dashboard/571

---

## 15. User Personas

| Persona | Title | Primary Use |
|---|---|---|
| Champion / Daily User | eComm Manager, Digital Shelf Analyst, Sr. Manager eComm | Reviews KPI dashboards weekly. Runs keyword analysis. Flags issues for content and supply chain teams. |
| Decision-maker | Director / VP Omnichannel, Director eComm | Owns the DSA contract. Uses data in retailer meetings and JBP presentations. Signs renewals. |
| Cross-functional User | Content team, Supply chain manager, Shopper marketing | Receives exports/alerts from DSA champion. Acts on specific module insights (CQ, Availability). |
| Executive Sponsor | CMO, Chief Digital Officer | Consumes scorecard-level views. Approves DSIM expansion. Needs digital shelf ROI story. |
| Enabler (new pattern — GeekSpeak) | CPG agency / managed services operator | Operates DataWeave tooling on behalf of brands. Needs override capability, RBAC, audit trail. Manages multiple brand accounts under one contract. |

---

## 16. Open Questions (active, as of May 2026)

1. French-language content checking capability for Provigo — confirmed or not? (Owner: DataWeave tech)
2. Brand-level scorecard aggregation formula — simple average or weighted? (Owner: Raghav + GeekSpeak Ali)