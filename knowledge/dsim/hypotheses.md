# DSIM Hypotheses
**Domain:** Digital Shelf Impact Measurement
**Last updated:** 2026-05-06
**Format:** H-XX — patterns observed once or twice; needs more data before promotion to rules.md

---

## H-01: Finance/RGM buyer may be the durable budget holder — not eCommerce

**Observation:** eCommerce leaders control DSIM outputs operationally but Finance/RGM leaders control annual budget allocations and approve measurement investments. Incremental.com's Bayer case study was championed by a measurement/analytics function, not an eCommerce team. Lactalis primary users are eCommerce team but Persona 2 (Finance/RGM) is explicitly called out as the budget-unlock persona.

**Why it matters:** If DSIM sells to eCommerce only, it competes in the media ops budget (against Skai/CIQ). If it sells to Finance/RGM, it occupies the measurement budget (against Incremental.com) — higher ACV, stickier renewal, less churn risk from media team reorganizations.

**Evidence:** `dsim-positioning-and-personas-2026-04-25.md` (Persona 2 analysis); `icp-buyer-behavior-research-2026-04-25.md` (Finance receives last-touch ROAS, not iROAS); Incremental.com buyer persona data (`competitor-deep-dive-profitero-skai-incremental-2026-04-25.md`).

**Needs:** At least one closed deal where Finance/RGM was the budget approver to confirm. CSM validation framework from `dsim-positioning-and-personas-2026-04-25.md` tests this.

**Promotion trigger:** 2 of first 3 paying accounts have Finance/RGM as contract signatory → promote to rules.md R-XX.

---

## H-02: Explicit budget reallocation output is the conversion-rate differentiator at PoC review

**Observation:** The current PoC output (Lactalis) shows decomposition but does NOT explicitly say "move $X from Channel A to Channel B." This is identified as a gap in `dsim-productization-scope-2026-04-25.md` and `dsim-positioning-and-personas-2026-04-25.md`. The hypothesis is that adding this explicit line item to every Tableau delivery will materially improve PoC-to-paid conversion because it answers the "so what do I do now?" question buyers have after seeing the decomposition.

**Why it matters:** PoC-to-paid ≥50% is the stated success metric. Decomposition without recommendation is academic; recommendation is what drives the CFO approval.

**Evidence:** Gap identified in productization scope doc; Lactalis pain point called out explicitly in multiple source docs; immediate action item (2 weeks, no engineering required) in productization scope.

**Needs:** Observe PoC-to-paid rate before vs. after adding reallocation output.

**Promotion trigger:** PoC-to-paid rate improves ≥15pp after adding explicit reallocation → promote to rules.md.

---

## H-03: Scintilla Charter tier is a reliable pipeline qualification gate

**Observation:** DSIM requires Scintilla Charter for daily POS + nil-pick data. Basic tier (free) has zero API access. Brands without Charter cannot use DSIM without upgrading. Hypothesis: Scintilla pre-qualification will eliminate 20-40% of pipeline accounts early, but brands with Charter + active ROAS questions from Walmart Connect are nearly certain to convert to a discovery conversation.

**Why it matters:** Pre-qualifying on Scintilla access avoids burning weeks on accounts that can't technically use DSIM. Scintilla Charter as a positive signal (not just a gate) could be used to target accounts proactively via Walmart's partner lists.

**Evidence:** `dsim-productization-discovery-2026-04-21.md` (Scintilla tier requirement); `walmart-scintilla-platform-overview.md` (Scintilla as sales qualifier framing); productization scope Immediate Action 3.

**Needs:** Run Scintilla pre-qualification on Q2 2026 pipeline (Clorox, Mondelēz, Kraft Heinz, Bush Brothers, Beiersdorf, Magic Spoon) and observe disqualification rate.

**Promotion trigger:** 3+ pipeline accounts evaluated; disqualification rate + conversion rate from Charter-holding accounts documented.

---

## H-04: Methodology white paper is the single highest-leverage marketing investment

**Observation:** Every named competitor (CIQ, Pacvue, Skai, Incremental.com, Profitero) receives the same G2 complaint: "We don't know how the model works." DSIM has published MAPE=5.9% / R²=91% from Lactalis PoC. No competitor can respond in kind because they have no published methodology. Hypothesis: a DSIM methodology white paper (Robyn + Bayesian priors + cluster hierarchy + Lactalis results) will create a categorical differentiation signal that shortens sales cycles with analytics-mature buyers.

**Why it matters:** Analytics-mature buyers (VP Measurement, Head of Marketing Effectiveness) are DSIM's Finance/RGM persona targets. They evaluate tools on methodological rigor, not demos.

**Evidence:** `dsim-expansion-synthesis-2026-04-25.md` ("Methodology opacity = single biggest competitive wedge"); G2 pain points across all 5 competitor profiles.

**Needs:** Publish white paper; measure impact on inbound leads and sales cycle length for analytics-buyer segment.

**Promotion trigger:** White paper cited in ≥2 discovery calls as reason for initial contact → promote to rules.md.

---

## H-05: eCommerce teams will not voluntarily cut media budgets — reallocation framing across levers is required

**Observation:** From Apr 24 Notion meeting: "E-commerce teams won't voluntarily cut budgets." DSIM's insight that $30K/day is misallocated in media looks like a threat to the eCommerce buyer's budget. Hypothesis: framing DSIM output as cross-lever reallocation ("shift $X from paid search to content investment") rather than media cut ("reduce Walmart Connect by $30K/day") materially reduces buyer resistance during the PoC review.

**Why it matters:** The eCommerce buyer is often the champion but is politically incentivized to protect media budget size. If DSIM's output is perceived as a media budget reduction tool, the champion won't advocate internally.

**Evidence:** Explicit observation in Apr 24 DSIM GTM Internal meeting notes (`insider-data/dsim/DSIM GTM Internal 25-04-2026.md`); Persona 2 framing in `dsim-positioning-and-personas-2026-04-25.md`.

**Needs:** 2+ PoC presentations with explicit cross-lever reallocation framing; observe whether champion resistance decreases.

**Promotion trigger:** 2 PoC reviews with reallocation framing produce no "this threatens our media budget" objection → promote to rules.md.

---

## H-06: Kroger design-partner acquisition depends on 84.51° data-share, not DSIM sales motion

**Observation:** Kroger expansion is ranked #1 on multi-retailer roadmap and rated HIGH model portability. But the critical dependency is a CPG brand willing to authorize 84.51° + KPM data flow into DSIM — this is brand-led, not DataWeave-led. Hypothesis: the bottleneck for Kroger is not DataWeave's engineering or model readiness; it's finding an existing Walmart DSIM customer who also runs KPM and is willing to be the Kroger design partner.

**Why it matters:** If true, Kroger GTM motion should start immediately with existing Walmart pipeline accounts (Clorox, Mondelēz, Kraft Heinz) — ask in discovery whether they run KPM, not wait until Walmart PMF is locked.

**Evidence:** `retailer-expansion-multi-retailer-2026-04-25.md` (critical dependency statement); `dsim-expansion-synthesis-2026-04-25.md` (Kroger design-partner = CPG already running KPM).

**Needs:** Ask Kroger-presence question in Q2 2026 discovery calls; identify at least one brand running both Walmart Connect and KPM.

**Promotion trigger:** Kroger design-partner identified from existing Walmart pipeline → confirms the parallel-track hypothesis; promote to rules.md.

---

## H-07: DSA KPI ROI is not independently established for DataWeave's customer base

**Observation:** From `dsim-positioning-and-personas-2026-04-25.md` (Sangeet's critical point): "DSA KPI ROI independent of DSIM is NOT yet established." The benchmarks in `dsa-kpi-roi-benchmarks-2026-04-25.md` (SoS → +0.5% sales, CQS 70→90 → +13% CVR, etc.) are third-party published (Profitero, IHL Group, HBR, NielsenIQ). Hypothesis: DataWeave cannot yet use its own customer data to claim DSA KPI impact because no measurement layer existed. DSIM, when deployed, will generate the first DataWeave-native DSA ROI evidence.

**Why it matters:** The most powerful competitive claim DataWeave can make is "we measured the ROI of our own shelf KPIs using DSIM." Without this, third-party benchmarks are credible but not proprietary evidence.

**Evidence:** `dsim-positioning-and-personas-2026-04-25.md` (Sangeet critique); `dsa-kpi-roi-benchmarks-2026-04-25.md` (all sources are external).

**Needs:** First closed DSIM account with explicit shelf lever decomposition → extract DataWeave-native KPI ROI claims.

**Promotion trigger:** 2 DSIM clients with published shelf lever decomposition → DataWeave has proprietary benchmark data → promote to rules.md.

---

## H-08: The MMM positioning debate resolves based on first two paying accounts' buyer personas

**Observation:** At Apr 16, team decided on "MMM for retail media" as primary positioning. At Apr 24, Eddie pushed back — "too academic for eCommerce buyers." Jeeva defended — "ride IAB anti-MMM wave." Resolution: pending. Hypothesis: the right resolution depends on which buyer persona actually converts in the first 2 accounts. If Finance/RGM signs, "MMM" framing is correct. If eCommerce/Retail Media signs, the positioning should soften toward "sales decomposition" or "reallocation intelligence."

**Why it matters:** Wrong positioning to the wrong buyer will slow conversion. Getting this right in first 2 accounts is more important than resolving it in theory.

**Evidence:** Notion Apr 24 meeting (unresolved tension); `dsim-positioning-and-personas-2026-04-25.md` (three positioning options with buyer alignment).

**Needs:** Track which persona (eCommerce vs. Finance) is the budget approver in first 2 closed deals.

**Promotion trigger:** Both Q3 2026 paying accounts have Finance/RGM as approver → "MMM" framing confirmed → promote to rules.md. Both have eCommerce as approver → "sales decomposition" framing → update knowledge.md.

---

## H-09: 10-week delivery target requires containerized Robyn — not locally-run model

**Observation:** Current DSIM delivery takes 6-10 weeks. Target is 4 weeks (2 weeks setup + 2 weeks model + delivery). P1.2 scope says containerized pipeline = 2-4 weeks; locally-run = 6-10 weeks (no improvement). Hypothesis: meeting the 4-week delivery SLA is impossible without containerizing the Robyn model execution. Therefore Robyn infrastructure confirmation is blocking, not just informational.

**Why it matters:** 4-week delivery is the stated competitive differentiation ("lightweight, faster than traditional MMM"). If DSIM stays at 6-10 weeks, this claim is false.

**Evidence:** `dsim-productization-scope-2026-04-25.md` (P1.2 scope estimates by execution environment); `dsim-productization-discovery-2026-04-21.md` (Robyn zero documentation).

**Needs:** Robyn infrastructure audit (Immediate Action 2 from productization scope doc). Resolution is binary: containerizable or not.

**Promotion trigger:** Robyn infrastructure confirmed as containerizable → promote to rules.md. Not containerizable → update rules.md with engineering path required.

---

## H-10: The 14-day attribution window in CIQ Incrementality Module is a durable wedge, not a temporary gap

**Observation:** CIQ's Dec 2025 Incrementality Module uses a 14-day attribution window. Bayesian adstock modeling (Robyn) captures carry-over effects across weeks or months — structurally longer than any 14-day window. Hypothesis: this is architectural, not a product roadmap gap CIQ will close quickly, because their model is observational/last-touch, not causal/Bayesian.

**Why it matters:** If CIQ can widen attribution windows without rebuilding the model, the wedge closes. If it's architectural, DSIM has 18+ months of head start.

**Evidence:** `competitor-deep-dive-ciq-pacvue-2026-04-25.md` (CIQ 14-day window, observational model); `competitive-landscape-deepdive.md` (DSIM unique on holdout/test-and-control methodology).

**Needs:** Monitor CIQ product releases in 2026 for model methodology changes.

**Promotion trigger:** 3 CIQ product release cycles with no methodology upgrade → confirm as architectural limitation → promote to rules.md.
