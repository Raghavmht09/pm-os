# DSIM Expansion Research — Master Synthesis
**Date:** April 25, 2026
**Scope:** 5 parallel research tracks — competitor depth (CIQ+Pacvue, Profitero+Skai+Incremental), retailer expansion (Amazon, Kroger+Target+Costco+BestBuy), cross-category (Fashion+Electronics+Home/DIY)
**Use:** Executive summary for leadership; roadmap input for product + GTM

---

## Top-Line Findings

### 1. Competitor Budget Lines Are Distinct — DSIM Must Pick One
The 5 measurement-adjacent competitors map cleanly to 3 distinct budget lines at a CPG brand:

| Budget Line | Owned By | Competitor Default |
|---|---|---|
| **Shelf ops** | VP eCommerce / Digital Shelf Director | Profitero |
| **Media ops** | Director Retail Media | Pacvue, Skai, CommerceIQ |
| **Measurement / marketing analytics** | VP Measurement / Head of Marketing Effectiveness | Incremental.com |

**Recommendation:** DSIM should pull from the **measurement budget line** (not media ops, not shelf ops). Pitch with Incremental.com-style framing but produce **store-cluster operational output Incremental structurally cannot match** (because their model treats shelf as control, not signal). Profitero+/Pacvue and Skai's Impact Navigator are soft underbellies — both need a causal layer DSIM provides.

### 2. Methodology Opacity Is the Single Biggest Competitive Wedge
Every competitor — CIQ Incrementality Module, Pacvue (no published methodology at all), Skai Impact Navigator, Incremental.com ensemble — gets the same complaint from analytics-mature buyers: **"We don't know how the model works."**

**Action:** Publish DSIM methodology white paper. Robyn + Bayesian priors + cluster hierarchy. Lead with R²=91% / MAPE=5.9%. Most competitors will not respond — they cannot.

### 3. Walmart-First Discipline Holds — But Kroger Is Real Next
Multi-retailer expansion ranking: **Kroger > Target > Amazon > BestBuy. Defer Costco.**

| Retailer | Effort | Why this rank |
|---|---|---|
| Kroger | 4–5 mo | 84.51° transaction data closest to Scintilla. Same buyer profile as Walmart DSIM. Lowest CAC for second retailer |
| Target | 5–7 mo | Same buyer (often same human). DataWeave shelf coverage strong. Roundel API closedness widens model CI |
| Amazon | 3.5–4.5 mo (Tier 1), +1.5–2 mo (AMC) | Different buyer entirely. Largest TAM. ASIN-cluster instead of store-cluster. New levers (S&S, Prime cohort, DSP halo) |
| BestBuy | 6–8 mo + GTM rebuild | Different buyer (OEM vendor marketing). Episodic demand requires model recalibration |
| Costco | 9–12+ mo | No transaction data feed at any price. Defer — not on 12-month horizon |

**Note:** Amazon ranks differently than Kroger because despite larger TAM, Amazon requires different buyer persona, different anchor brand, different competitive opponents (CIQ + Pacvue, not Profitero). Kroger preserves the existing GTM motion. **Sequencing recommendation: Kroger → Target → Amazon.**

### 4. Cross-Category Expansion: Home/DIY Is The Real First Step
Cross-category ranking: **Home/DIY > Consumer Electronics > Fashion.**

- **Home/DIY:** DataWeave already serves Home Depot via DSA. Store-cluster geographic modeling is the vertical's #1 pain. Sell into existing relationships.
- **Consumer Electronics:** Highest MMM maturity, highest ACV ($400–800K), but new buyer (OEM vendor marketing) and episodic demand requires model recalibration.
- **Fashion:** Lowest fit — needs returns/markdown/size matrix as new levers, lowest ACV, bifurcated buyer (DTC over-tooled, wholesale skeptical).

### 5. The "Ground To Productize DSIM" Question — Answered
**Build:**
- Published methodology white paper (single biggest competitive wedge)
- 6-lever decomposition view (no competitor offers this)
- Store-cluster decomposition (uncontested across all 5 competitors)
- MMM-grade Tableau export for the analytics/finance buyer
- Explicit reallocation recommendation in every output (current Lactalis pain point)
- Confidence intervals on all lever estimates (Finance/RGM defensibility)

**Do NOT build:**
- Bid management / campaign automation (becomes "CIQ-lite," loses neutrality, attracts agency channel war)
- Chargeback recovery / 1P operations
- Creative workflow / influencer tooling
- Hourly dayparting (operational, not strategic)
- Multi-retailer breadth before Walmart depth is undeniable
- Multi-vertical breadth before CPG depth is undeniable

---

## Detailed Research Files

| Topic | File | Length |
|---|---|---|
| CIQ + Pacvue deep dive | `competitor-deep-dive-ciq-pacvue-2026-04-25.md` | ~1500 words |
| Profitero + Skai + Incremental | `competitor-deep-dive-profitero-skai-incremental-2026-04-25.md` | ~1800 words |
| Amazon DSIM portability | `retailer-expansion-amazon-2026-04-25.md` | ~1300 words |
| Kroger + Target + Costco + BestBuy | `retailer-expansion-multi-retailer-2026-04-25.md` | ~1800 words |
| Fashion + Electronics + Home/DIY | `cross-category-expansion-2026-04-25.md` | ~2000 words |

---

## Decision Framework — "Where Do We Invest Next?"

Based on synthesized findings, the priority order for DSIM's next 18 months:

### Q3 2026 — Lock Walmart PMF
- Close 2 paying Walmart accounts (PMF gate)
- Publish methodology white paper
- Add explicit reallocation output to all Tableau deliveries
- Confirm Robyn infrastructure (the parked question)

### Q4 2026 — Begin Kroger Design Partner
- Identify Kroger design-partner brand (CPG already running KPM)
- Negotiate 84.51° data-share authorization on brand's behalf
- Adapt Robyn priors for Kroger banner-cluster structure

### Q1–Q2 2027 — Kroger PoC + Begin Home/DIY Exploration
- Deliver first Kroger PoC
- Approach existing DataWeave Home Depot accounts for DSIM Home/DIY pilot conversation
- Start Amazon engineering scoping (Ads API + DSA + Vendor reports) — Tier 1 build

### Q3–Q4 2027 — Multi-Retailer Story + Vertical 2
- Launch Amazon DSIM Tier 1 (CPG anchor)
- Add Target as 3rd retailer (gated by Roundel API maturity)
- Decide Home/DIY vs. Consumer Electronics as second vertical

---

## What Becomes Possible If DSIM Gets To "Multi-Retailer + Cross-Category"

The strategic upsell after multi-retailer/multi-vertical: **"Unified lever decomposition across all your retail channels."** No competitor today can decompose lift across Amazon + Walmart + Kroger + Target with the same Bayesian rigor and store/ASIN-cluster output. Profitero is closest on shelf coverage breadth but has no causal model. Incremental.com has the model but no shelf signals as outputs.

This is the **3-year platform pitch:** DSIM as the cross-retailer measurement layer for any brand whose go-to-market is shelf + media at scale.

---

## Critical Assumptions / [VERIFY] Items

These claims should be re-checked before customer-facing use:
- All competitor pricing tiers (re-scrape competitor sites April 2026)
- Recent product launches at all 5 competitors (G2 reviews can date faster than press)
- Walmart Connect head "MMM not technically causal" exact quote (likely from IAB Oct 2024 webinar transcript — confirm)
- Roundel self-serve API roadmap status
- Amazon SP-API ABA endpoint coverage (changing)
- DataWeave Costco.com / Kroger banner crawl coverage status
- Home Depot Orange Apron Media size estimate

---

*Synthesizes: 5 background research agents (CIQ+Pacvue, Profitero+Skai+Incremental, Amazon, multi-retailer survey, cross-category) executed April 25, 2026. All [VERIFY] flags require fresh confirmation before external/customer use.*
