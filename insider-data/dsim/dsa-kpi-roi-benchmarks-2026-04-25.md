# DSA KPI Dollar Value: Third-Party Benchmark Research
**Purpose:** Credibility substrate for DataWeave DSIM — external proof that improving individual digital shelf KPIs drives incremental sales independent of media spend
**Research date:** April 25, 2026
**Use:** Use these benchmarks in the DSIM sales conversation to answer "how do you know improving [KPI] is worth $X?" without requiring belief in the DSIM model output itself

---

## 1. Share of Search → Sales

**Best available: e.fundamentals benchmark + Profitero page-rank data**

- **1% increase in Share of Search ≈ 0.5% increase in sales** — e.fundamentals analysis of CPG brands in ecommerce. Most-cited ratio in trade content. [VERIFY: original e.fundamentals study — confirm sample, categories, and retailer scope before using in external materials. Source: efundamentals.com]

**Structural drivers (why SoS matters mechanically):**
- 35% of products added to basket on Walmart.com come through search
- 60% of all search-driven basket adds come from top 4 positions
- 70% come from page 1
Source: e.fundamentals research, widely cited in trade press

**Profitero page-rank-to-sales translation (2024 report):**
- Moving from page 2 to page 1 organically: **+37% sales increase** on average
- Moving from page 2 to top 5 organic spots: **up to +89% sales increase**
- Paid search (sponsored): **average +21% sales uplift**
Source: [The Impact of Winning Search — Profitero 2024](https://www.profitero.com/reports/the-impact-of-winning-search-2024)

**Gap flag:** No published Walmart-specific "1% SoS → $Y sales" study from Walmart, Nielsen, or IRI confirmed. DataWeave's own dataset is the most defensible source for a Walmart-specific coefficient — prioritize this as an internal analysis sprint.

---

## 2. In-Stock Rate / OSA → Sales

**Best available: IHL Global OOS magnitude + HBR/NielsenIQ behavioral evidence**

**Global magnitude:**
- **$1.2 trillion in global retail sales lost to out-of-stocks in 2023** (of $1.77T total inventory distortion). Source: [IHL Group 2023 Retail Inventory Distortion Study — Retail TouchPoints](https://www.retailtouchpoints.com/features/industry-insights/ihl-study-inventory-distortion-will-cost-retailers-1-77-trillion-in-2023)
- **7.4% of CPG sales lost to stockouts in 2021** — industry tracking

**Consumer behavior when OOS:**
- **40%+ of customers go to a different retailer** when their preferred product is OOS (HBR, 2024, citing P&G-funded study)
- **9% of shoppers permanently switch retailers** after a single OOS experience (NielsenIQ, 2024)
- **20% of online cart abandonments** caused by OOS items (Baymard Institute)
Source: [How Online Retailers Can Avoid Costly Out-of-Stock Issues — HBR, October 2024](https://hbr.org/2024/10/how-online-retailers-can-avoid-costly-out-of-stock-issues)

**For DSIM positioning:** "A brand at 72% in-stock is suppressing ~28% of potential impressions and conversions, consistent with industry OOS loss rates of 7–8% of category sales." The Walmart-specific suppression-per-SKU figure requires DataWeave's internal transaction data. [ASSUMPTION — confirm with Walmart Connect or DataWeave data before using in sales materials]

---

## 3. Content Quality Score → Conversion

**Best available: Walmart's own CQS program data (surfaced via Stratably)**

- **Improving CQS from 70 to 90: average +13% increase in conversion rate** — Walmart internal findings, surfaced via Stratably live session
- **Improving CQS through attribute completeness alone: average +15% lift in sales** — also improves ad placement eligibility through relevancy scoring
Source: [Takeaways from our Live Session on Walmart Content Quality Scores — Stratably](https://stratably.com/takeaways-from-our-live-session-on-walmart-content-quality-scores/)

**Demand-side rationale:**
- Salsify 2024 consumer research consistently shows incomplete content is a primary conversion drop-off driver (Walmart-specific percentages not publicly broken out)
- Salsify connected directly to Walmart's OmniSpec API in 2024; 2.3M+ SKUs uploaded by 1P and 3P sellers
Source: [Salsify 2024 Consumer Research Report](https://www.salsify.com/resources/report/2024-consumer-research-report)

**For DSIM positioning:** The 70→90 CQS = +13% CVR is the cleanest Walmart-sourced number available. DataWeave can show where a specific brand's products sit on that curve and translate it to a dollar value.

---

## 4. Ratings & Reviews → Conversion

**Best available: PowerReviews 2023 Walmart.com benchmark report (1M+ reviews, 550+ brands)**

**Review count thresholds:**
- **1 review:** +10% lift in orders vs. zero reviews
- **31–50 reviews:** +98.6% conversion lift vs. zero reviews
- **101–250 reviews:** +153% higher conversion rate vs. no reviews
- **500+ reviews (Beauty):** +92% additional lift above the 101–250 tier

**Star rating:**
- Products rated **4.75–4.99 stars** have the highest conversion rates
- Products above **4.25 stars** generate a healthy conversion increase
- CPG brands on Walmart average **4.6 stars** — brand differentiation happens in review *volume*, not star rating

Source: [Walmart.com Ratings & Reviews Benchmarks 2023 — PowerReviews](https://www.powerreviews.com/walmart-2023/) | [PDF](https://www.powerreviews.com/wp-content/uploads/2023/10/2023-Ratings-Reviews-Report_-Walmart-Edition-1.pdf)

**For DSIM positioning:** The jump from 0→50 reviews nearly doubling conversion is the most actionable threshold. A brand with 15 reviews on a key SKU has a quantifiable gap to a defined benchmark. DSIM can flag this per-SKU in the decomposition output.

---

## 5. IAB Anti-MMM Research — Confirmed Reports & Key Quotes

Three IAB documents confirmed. Jeeva's characterization is substantially accurate.

### Report 1: "Is Your Legacy Measurement Sabotaging Your Growth in the Retail Media Era?"
**Published:** April 7, 2026
**Authors:** Collin Colburn (VP Commerce & Retail Media, IAB) and Priyash Shahane (Manager of Measurement Science, Instacart)
**URL:** https://www.iab.com/blog/is-your-legacy-measurement-sabotaging-growth-in-the-retail-media-era/

Key quotes:
1. *"MMM was designed for a different media environment and, when applied to retail media without adaptation, produces outputs that systematically misattribute sales and push brands toward suboptimal budget decisions."*
2. *"Retail media is designed to be always on — budgets rarely turn off or fluctuate in ways that classic MMM can detect. MMM needs spend variation to reveal impact; the model sees constant activity, so it infers no effect and pushes it into the baseline."*
3. *"The most effective marketers will no longer ask 'which methodology is best?' but 'which methodology is appropriate for the signal, channel, and decision at hand?'"* — Collin Colburn

**Note on date:** This is the April 2026 publication. Verify with Jeeva whether this is the document he cited or whether there's an earlier blog post from April 2024. The argument in this report matches the summary from the leadership discussion.

### Report 2: "Retail Media Advanced Measurement and Data Collaboration"
**Published:** October 31, 2024
**URL:** https://www.iab.com/guidelines/retail-media-advanced-measurement-and-data-collaboration/

Key quotes:
1. *"Retail media now provides closed-loop, SKU-level, transaction-level measurement. With this direct evidence available, correlational modeling is not only unnecessary — it is outdated. While MMM infers impact, closed-loop reporting and incremental sales lift testing prove it causally."*
2. The report positions MMM as one of five measurement methodologies — demoting it from primary to secondary tool.

[VERIFY] The specific Walmart Connect head "not technically causal" quote was not surfaced in public search results. Likely from the accompanying IAB webinar: https://www.iab.com/events/iab-connected-commerce-webinar-2-data-collaboration-incrementality/

### Report 3: "Guidelines for Incremental Measurement in Commerce Media"
**Published:** November 3, 2025 (IAB U.S. and IAB Europe, joint)
**URL:** https://www.iab.com/guidelines/guidelines-for-incremental-measurement-in-commerce-media/

Key quotes:
1. *"Incrementality [is] the causal impact of marketing by identifying the additional business outcomes directly driven by a campaign or tactic, compared to what would have occurred in the absence of marketing activity."* — establishes causal measurement as the industry gold standard
2. Explicitly ranks measurement methods by "causal strength" — MMM placed in lower-causal-strength tier
3. Built on three core principles: **credible counterfactuals, control of bias, and separation of signal from noise** — criteria that standard MMM fails to meet for retail media

### Bonus Report 4: "Modernizing MMM Best Practices for Marketers"
**Published:** December 2025
**URL:** https://www.iab.com/guidelines/modernizing-mmm-best-practices-for-marketers/
Explicitly acknowledges MMM's limitations for always-on channels and fragmented commerce media. Useful as "even MMM's own governance body admits these constraints" citation.

---

## Key Gaps to Close

| Gap | Recommended action |
|---|---|
| No Walmart-specific SoS → sales coefficient from a credible third party | Run DataWeave's internal analysis across 3–5 CPG brand accounts; publish as proprietary benchmark |
| Walmart OOS suppression rate for ecommerce specifically (not physical stores) | Use DataWeave client OSA + sales data to calculate category-level suppression for Walmart.com |
| Walmart Connect head "MMM not causal" exact quote | Confirm whether in Oct 2024 PDF or webinar transcript; request full webinar recording from IAB |
| e.fundamentals "1% SoS = 0.5% sales" methodology detail | Contact e.fundamentals or source original white paper to confirm retailer scope and sample |

---

*All IAB URLs confirmed live as of April 2026. Benchmark stats marked [VERIFY] require additional confirmation before use in external sales materials.*
