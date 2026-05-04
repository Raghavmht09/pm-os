# Amazon DSIM Portability Blueprint
**Date:** April 25, 2026
**Scope:** How DataWeave's Walmart DSIM ports to Amazon — what stays, what changes, engineering effort
**Use:** Multi-retailer expansion planning, engineering scoping

---

## Bottom Line

Roughly **60% of model architecture and lever logic ports directly**; **40% requires re-engineering** — primarily around the missing store-cluster construct, fulfillment variability, and a fundamentally different first-party data surface (AMC + Brand Analytics replace Scintilla/Luminate).

Total effort to first Amazon PoC (non-AMC tier): **~3.5–4.5 months**. Add **~1.5–2 months** for AMC tier.

---

## Amazon's Data Ecosystem for CPG Brands

CPG brands on Amazon access a fragmented but rich data stack — different from Walmart's consolidated Luminate/Scintilla model.

| Source | What it gives | Granularity |
|---|---|---|
| **Amazon Brand Analytics (ABA)** | Search Terms Report (top 3 ASINs clicked + click/conversion share per query), Top Search Terms (weekly ranks), Demographics, Item Comparison, Repeat Purchase Behavior | Weekly, ASIN-level, no customer-level join |
| **Amazon Marketing Cloud (AMC)** | Clean room (AWS-based) for DSP and Sponsored Ads. SQL-queryable, pseudonymized user-level events: impressions, clicks, ASIN purchases, NTB | Lookback up to 12.5 months. Paid feature for advanced datasets |
| **Amazon Attribution API** | Off-Amazon media → on-Amazon conversion attribution for vendors and sellers | Free. Search, social, display, video |
| **Amazon Ads API** | Sponsored Products, Sponsored Brands, Sponsored Display, DSP campaign + reporting data | Daily, campaign/ad-group/keyword/ASIN level |
| **Subscribe & Save (S&S)** | Reported via Vendor/Seller Central; subscriber counts and forecasted demand | ASIN-weekly, not customer-level outside AMC |
| **Vendor Central (1P) ARA** | Shipped revenue, sourcing, traffic (Glance Views), conversion, replenishment | Weekly. ARA Premium gives geographic shipment data at zip/DMA |
| **Seller Central (3P) Business Reports** | Sessions, unit session %, Buy Box % | Daily, ASIN-level |

**Granularity summary:** SKU/ASIN — yes everywhere. Daily — yes for Ads API and AMC; weekly for ABA. Geographic — limited (ARA Premium DMA-level for 1P; AMC zip-level via DSP). Customer-level — only inside AMC clean room (pseudonymized).

---

## What Maps Cleanly from Walmart DSIM

| DSIM Lever (Walmart) | Amazon Equivalent | Source |
|---|---|---|
| Share of Search (DSA) | SoV in ABA Top Search Terms + organic rank tracking | DSA (already built) + ABA |
| Availability | In-stock rate + Featured Offer (Buy Box) win % | DSA + Seller/Vendor Central |
| Content quality | Listing quality score, A+/Premium A+ presence, image count, review volume/velocity | DSA |
| Pricing | Price competitiveness vs. Featured Offer, Lowest Price | DSA (production) |
| Retail media | Sponsored Products + Brands + Display + DSP spend/impressions/clicks | Amazon Ads API |

DataWeave's DSA shelf-scraping infrastructure is the **largest re-usable asset**. The Robyn Bayesian MMM core, adstock/saturation curves, and decomposition logic port unchanged. Tableau delivery layer ports unchanged.

---

## What Does NOT Map Cleanly — 4 Hard Gaps

### 1. No Store-Cluster Equivalent
Walmart DSIM clusters ~4,700 stores by demographics/format. Amazon has no physical stores.

**Replacement options:**
- **DMA-level clustering** using ARA Premium shipment data (1P only) or AMC zip-rollups
- **ASIN-cluster** model — group ASINs by category/velocity/price tier and decompose at ASIN-cluster level instead of geo-cluster
- **Customer-cohort clustering** inside AMC (Prime vs. non-Prime, NTB vs. repeat, S&S vs. one-time)

**Recommendation:** ASIN-cluster as default, customer-cohort as upsell tier requiring AMC.

### 2. Fulfillment Variability
FBA vs. FBM vs. Vendor-shipped each have different Buy Box eligibility, Prime badge, and conversion rates. Walmart 1P doesn't have this complexity. DSIM needs a fulfillment-mode covariate per ASIN-day.

### 3. Halo Effect Modeling Differs
Walmart halo is mostly category adjacency in-store. Amazon halo includes:
- DSP off-site impressions → on-Amazon search
- Sponsored Brands → branded search lift
- S&S subscription → recurring base

These require AMC SQL queries, not just Robyn covariates.

### 4. Competitive Pressure
Walmart category shelf is finite and observable via DSA. Amazon's algorithmic carousel ("Customers also bought," "Frequently bought together," sponsored placements within PDPs) shifts daily and is partially unobservable. Expect MAPE to widen from 5.9% (Lactalis) to ~8–10% on a comparable Amazon PoC.

---

## New Levers Amazon Enables That Walmart Doesn't

| New Lever | Source | What It Adds |
|---|---|---|
| **Subscribe & Save retention lift** | AMC + S&S reports | Decompose recurring revenue from net-new acquisition. Quantify subscription "annuity" |
| **DSP off-Amazon → on-Amazon halo** | AMC | Measure incremental on-platform sales from off-Amazon DSP. Walmart Connect has no equivalent |
| **Prime vs. non-Prime attribution** | AMC | Prime customers convert ~3x faster; pricing/availability lever weights differ materially |
| **Review velocity → search rank → conversion chain** | DSA + ABA | Reviews are measurable upstream variable in A9/COSMO ranking. Walmart's algorithm is less review-weighted |

---

## Buyer Persona — Different from Walmart

**Almost always a different buyer than the Walmart Channel lead.** Typical titles: VP/Director Amazon, Head of eCommerce – Amazon, Senior Manager Amazon Marketplace.

**KPIs differ:** Glance Views, Featured Offer share, TACoS (Total ACoS), Brand Halo Sales (NTB %), S&S subscriber growth — vs. Walmart's POS sales, in-stock %, Connect ROAS.

**Tool stack is Amazon-tilted:** Pacvue, CommerceIQ, Perpetua, Helium 10, Jungle Scout, Profitero (Amazon module), Stackline.

**Sales motion implication:** DSIM-Amazon needs a separate ABM list from Walmart DSIM. Lactalis-style PoC reference will not carry over — need an Amazon-native anchor brand. Displacement competitor is **CommerceIQ + Pacvue measurement modules**, not Profitero.

---

## Output / KPI Deliverables — Amazon DSIM Tableau

- **Incremental sales decomposition by Ads campaign type** — Sponsored Products vs. Sponsored Brands vs. Sponsored Display vs. DSP, with adstock-adjusted contribution
- **Featured Offer (Buy Box) loss → suppressed sales $** — Daily ASIN-level, attributed to cause (price, stock, fulfillment, suppression)
- **S&S attributable lift** — Subscriber-acquisition cost per channel, retained revenue projection
- **Search rank → CTR → conversion → sales chain** — Per high-priority keyword, per ASIN-cluster
- **Prime vs. non-Prime decomposition** — Lever elasticities split by cohort (AMC tier only)
- **Halo: DSP off-Amazon → on-Amazon branded search lift** (AMC tier only)
- **Cross-retailer view** (if Walmart DSIM also licensed) — Unified lever decomposition Walmart + Amazon. Strategic upsell.

---

## Engineering Implications

| Integration | Complexity | Estimate |
|---|---|---|
| Amazon Ads API (SP, SB, SD, DSP reporting) | **Low–Medium** | ~4–6 eng-weeks |
| Amazon Brand Analytics ingestion | **Medium** | ~6–8 eng-weeks (no public API; report download via Seller/Vendor Central) [VERIFY: SP-API now exposes some ABA endpoints] |
| Amazon Attribution API | **Low** | ~2–3 eng-weeks |
| AMC clean room | **High** | ~12–16 eng-weeks (AWS account setup per advertiser, SQL query authoring, paid-feature gating) |
| Vendor Central / Seller Central reports | **Medium** | ~8–10 eng-weeks (SP-API for sellers; Vendor Central more closed) |
| FBA/FBM fulfillment-mode covariate | **Low** | ~2 eng-weeks |
| Robyn model adaptation (ASIN-cluster + fulfillment + Prime cohort) | **Medium** | ~6–8 DS-weeks for v1, 2–3 PoC iterations |

**Recommend phased GTM:**
- **Tier 1** (Ads API + DSA + Vendor/Seller reports) ships first
- **Tier 2** (AMC + Attribution) ships as premium add-on tied to higher ASP

---

## Open Questions for the Team

1. 1P (Vendor Central) or 3P (Seller Central) anchor brand for the Amazon PoC? Data shape differs materially.
2. Do we license AMC ourselves (per-advertiser instances) or require the customer to grant query access to theirs? Latter is faster, former is the platform play.
3. ASIN-cluster vs. DMA-cluster as the default decomposition unit — needs a PoC bake-off.

---

*Last verified: April 25, 2026. [DRAFT FOR DISCUSSION — engineering estimates directional only]*
