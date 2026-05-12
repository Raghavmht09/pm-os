# DSIM — rules
**Last updated:** 2026-05-07
**Sources:** plan-of-action.md, dsim-productization-discovery-2026-04-21.md, dsim-productization-scope-2026-04-25.md, competitive-landscape-deepdive.md, Notion Apr 10/16/24 internal meetings
**Status:** April 2026 confirmed patterns — applied by default in all DSIM work

---

## R-01: DSIM is a measurement product, not a media activation product. Never position it as a bid management or campaign execution tool.
**Rule:** DSIM decomposes what drove incremental Walmart sales across 6 levers (SoS, CQS, Availability, Pricing, Retail Media, Assortment) and outputs a reallocation recommendation. It does NOT manage bids, execute campaigns, or connect to DSP buying. Any PRD requirement, GTM message, or customer demo that implies real-time campaign control is out of scope and misleading.
**Why confirmed:** Explicitly scoped as non-goal in productization discovery doc. Positioning docs draw the line between DSIM (measurement layer) and Skai/CIQ (activation layer) as complementary, not competitive.
**Apply to:** All PRDs, GTM messaging, sales decks, battlecards, demo scripts. If a prospect asks "can it adjust my bids automatically?" → answer is no, it tells you where to move budget, you execute.

---

## R-02: DSIM requires DSA as a prerequisite data source. It cannot be sold standalone.
**Rule:** DSIM consumes DSA shelf signals (availability, content quality score, share of search) as model inputs. Without a live DSA data feed, the shelf-lever decomposition is impossible. Every DSIM prospect must either already be a DSA customer or be onboarded to DSA simultaneously. Do not scope DSIM implementation without confirming DSA data availability.
**Why confirmed:** Technical architecture in productization discovery doc. Lactalis PoC ran on DSA shelf data. Core differentiation claim — "shelf-native MMM" — only holds if shelf data is actually in the model.
**Apply to:** Sales qualification, FRD scoping, pricing proposals, partnership discussions. Flag any DSIM deal that doesn't have a DSA contract.

---

## R-03: Walmart-only scope for V1. Do not commit to multi-retailer in V1 contracts.
**Rule:** DSIM V1 is Walmart-only. Store-cluster architecture, Scintilla data dependency, and Walmart Connect API integration are all Walmart-specific. Multi-retailer expansion (Kroger, Target, Amazon) requires separate model calibration — estimated 3–8 months per retailer depending on data availability. Never include multi-retailer in a V1 statement of work or price proposal without flagging it as a separate engagement.
**Why confirmed:** Productization scope explicitly scopes Walmart-only. Retailer expansion files estimate per-retailer effort. Lactalis PoC is Walmart-only.
**Apply to:** All V1 contracts, pricing proposals, customer onboarding scope, PRD non-goals section.

---

## R-04: Scintilla Charter is a hard technical requirement. Basic tier is a disqualifier.
**Rule:** DSIM requires Scintilla Charter subscription for daily POS data (Channel Performance module) and nil-pick availability signals. Scintilla Basic (free) has no API access. Brands without Charter cannot use DSIM without upgrading. Scintilla Charter upgrade must be explicitly confirmed — or a plan to upgrade confirmed — before DSIM discovery proceeds past initial qualification call.
**Why confirmed:** Walmart Scintilla platform overview doc + productization discovery doc both flag this. Charter = Cloud Feeds + API Feeds + BI Link. Required for the sales decomposition model to run.
**Apply to:** Pipeline qualification checklist, sales discovery template, FRD prerequisites section.

---

## R-05: 6-lever decomposition model is fixed for V1. Do not add levers without a new model calibration cycle.
**Rule:** DSIM V1 decomposes sales across exactly 6 levers: Share of Search, Content Quality Score, Availability (OSA/OOS), Pricing, Retail Media spend, Assortment. Adding a new lever (e.g., reviews, sponsored positioning) requires rerunning the full Robyn model with new variable inputs — this is weeks of data science work, not a dashboard configuration. Scope new levers only as V2 items with explicit DS time estimates.
**Why confirmed:** Model architecture in productization discovery doc. Lactalis PoC validated these 6 levers specifically. Each lever requires correlation analysis + adstock calibration before inclusion.
**Apply to:** PRD requirements, customer onboarding scope, FRD technical specs. If a customer asks "can you add reviews as a lever?" → V2 roadmap item with DS effort estimate required.

---

## R-06: Robyn infrastructure must be confirmed containerizable before any delivery timeline is committed.
**Rule:** DSIM's core model (Robyn, open-source Bayesian MMM in R) has zero Confluence documentation as of April 2026. It likely runs locally on ad-hoc compute. The 4-week delivery target (vs. current 6–10 weeks) is only achievable with a containerized Robyn pipeline. Before committing to a 4-week SLA in any customer contract, confirm with DS lead that Robyn can be containerized. If not containerizable, quote 6–10 weeks.
**Why confirmed:** Productization discovery doc explicitly flags Robyn documentation gap as a blocking risk. Productization scope doc shows 4-week timeline only under containerized execution path.
**Apply to:** Every DSIM SOW or engagement letter that specifies a delivery timeline. Treat as a pre-commit gate.

---

## R-07: The explicit reallocation recommendation ("move $X from Channel A to Channel B") must be in every deliverable. Decomposition alone is not the product.
**Rule:** DSIM output must always include: (1) sales decomposition across 6 levers, AND (2) an explicit budget reallocation recommendation with estimated ROI impact. Delivering decomposition without the "so what" recommendation leaves the customer without actionable output and reduces PoC-to-paid conversion. This is flagged as an immediate action item in the productization scope doc — requires no engineering, just analyst output format update.
**Why confirmed:** Productization scope doc flags this as a 2-week immediate action. Discovery doc identifies "lack of explicit recommendation" as a PoC weakness. Multiple source files emphasize the recommendation as what differentiates DSIM from academic MMM.
**Apply to:** Every Tableau delivery template, analyst SOW, customer-facing output checklist.

---

## R-08: DSIM is Bayesian MMM + holdout testing. Never describe it as last-touch attribution, MTA, or incrementality testing alone.
**Rule:** DSIM's methodology is Robyn (Bayesian MMM) for sales decomposition + response curve modeling, with holdout/geo-test calibration for validation. It is NOT: last-touch attribution (what CIQ/Pacvue report), multi-touch attribution (probabilistic MTA), or pure incrementality testing (what Incremental.com does). Using wrong terminology erodes trust with sophisticated buyers (Finance/RGM, measurement teams) who know the difference.
**Why confirmed:** Competitive landscape doc draws exact methodology lines. Positioning doc explicitly differentiates Bayesian MMM from observational/last-touch models. CIQ 14-day attribution window vs. Robyn's multi-week adstock carry-over is a named differentiator.
**Apply to:** Sales decks, battlecards, demo scripts, case study language, any document going to Finance/RGM personas.

---

## R-09: MAPE target is ≤8%, not a generic "accurate" claim. Lactalis baseline is 5.9%.
**Rule:** When presenting DSIM model accuracy, use specific MAPE (Mean Absolute Percentage Error) figures. Lactalis PoC achieved 5.9% MAPE (industry standard for high-quality MMM is 10–15%). Amazon model expansion is estimated at 8–10% MAPE due to ASIN-cluster vs. store-cluster architecture. Never use vague accuracy language in customer-facing materials — sophisticated buyers (especially Finance/RGM) will ask for the number.
**Why confirmed:** MAPE figures documented in productization discovery doc and retailer expansion files. Lactalis 5.9% is the only confirmed real-world number.
**Apply to:** Customer presentations, RFP responses, competitive differentiator claims, pricing justification.

---

## R-10: Three qualifying discovery questions must be used to assess DSIM fit before any scoping discussion.
**Rule:** Use these three questions to determine if a prospect is a genuine DSIM fit before investing in scoping:
1. "How do you currently measure whether your Walmart Connect spend is driving incremental sales?"
2. "When your shelf scores drop or go OOS, how does that show up in your media ROI reporting?"
3. "Has Finance or RGM ever asked you to prove that media spend outperforms price or content investment?"
If a prospect cannot answer any of these with a real pain (vs. "we don't have that problem"), deprioritize. These questions are calibrated to surface the measurement gap DSIM fills.
**Why confirmed:** Documented in `dsim-team-internal-april-2026.md` as the confirmed discovery framework. Questions map directly to DSIM's three differentiated claims.
**Apply to:** Sales discovery template, CS onboarding checklist, partnership qualification for agency channels.

---

## R-11: Top Q2 2026 target accounts are Clorox, Mondelēz, Kraft Heinz. Treat named accounts in plan-of-action.md as the ABM list.
**Rule:** Q2 2026 outreach prioritizes: Clorox, Mondelēz, Kraft Heinz as Tier 1. Tier 2 broader universe includes P&G, Unilever, Nestlé, PepsiCo, Coca-Cola, Mars, Colgate-Palmolive, Kimberly-Clark, Reckitt, General Mills, Conagra, Hershey. These are explicitly listed in plan-of-action.md. Do not add speculative accounts to the ABM list without checking against ICP qualification criteria (Walmart POS $50M+, Scintilla Charter, active Walmart Connect spend).
**Why confirmed:** plan-of-action.md and icp-buyer-behavior-research doc. ICP qualification criteria from productization discovery.
**Apply to:** GTM plans, sales pipeline, ABM targeting, partnership channel development, any "who should we go after" question.

---

## R-12: Competitive displacement framing varies by competitor — use correct displacement argument for each.
**Rule:**
- **vs. CIQ / Pacvue:** "CIQ shows you last-touch ROAS in a 14-day window. DSIM shows you whether that spend actually drove incremental sales vs. what would have happened with no media — with adstock carry-over modeled across weeks."
- **vs. Profitero:** "Profitero is a shelf monitoring platform. DSIM is a causal model. Profitero tells you your content score dropped; DSIM tells you how much revenue that score drop cost you and whether media can offset it."
- **vs. Skai:** "Skai optimizes bids within your current media allocation. DSIM questions the allocation itself — is retail media even the right lever, or would fixing availability drive more sales per dollar?"
- **vs. Incremental.com:** "Incremental.com runs geo holdouts in isolation. DSIM integrates holdout results with shelf signals, Scintilla POS, and 5 other levers simultaneously — giving you cross-lever attribution, not just media lift."
- **vs. Walmart Scintilla (internal):** "Scintilla reports what happened. DSIM decomposes why it happened and what to do next."
**Why confirmed:** Competitive deep-dive docs (CIQ/Pacvue, Profitero/Skai/Incremental), competitive landscape deepdive, positioning doc. All April 2026.
**Apply to:** Battlecards, sales objection handling, competitive positioning in GTM plan, RFP responses.

---

## R-13: Productization trigger is 2 paying accounts, not a timeline milestone.
**Rule:** DSIM productization investment is gated on securing 2 paying accounts (not a date or quarter milestone). "Paying" means signed contract + initial payment received — not LOI, not PoC agreement. Until 2 paying accounts are secured, DSIM operates as a consulting/PoC delivery model, not a scalable product. All roadmap items marked P1.1 (immediate actions) are prerequisites for closing those 2 accounts. Do not scope P1.2 (containerization, portal, scalable delivery) as customer commitments until P1.1 is done and 2 accounts are signed.
**Why confirmed:** Explicitly stated in productization scope doc and Apr 24 internal Notion meeting. Current state: 1 PoC delivered (Lactalis), 0 paying accounts signed.
**Apply to:** Roadmap prioritization, resource requests, engineering sprint planning, leadership reporting on DSIM status.

---

## R-14: Kroger is the confirmed first multi-retailer expansion target. Amazon is second, despite larger TAM.
**Rule:** When discussing DSIM expansion beyond Walmart, Kroger is next — not Amazon, not Target. Kroger's 84.51° transaction data is architecturally closest to Scintilla; the buyer persona is identical to Walmart (same retail media + eComm budget owner); model portability is high (6 levers map cleanly). Amazon requires ASIN-cluster re-architecture (~40% model rebuild) and a different buyer (Director/VP Amazon, separate ABM list). Do not include Amazon in V2 roadmap without flagging it as a separate model architecture effort.
**Why confirmed:** Retailer expansion prioritization in `retailer-expansion-multi-retailer-2026-04-25.md`. Expansion ranking documented with effort estimates.
**Apply to:** Roadmap discussions, customer expansion proposals, partnership talks with Kroger Precision Marketing, investor/leadership updates.
