# CommerceIQ & Pacvue — Deep Competitive Profile
**Date:** April 25, 2026
**Scope:** Buyer personas, daily users, full feature inventory, recent launches, customer outcomes, pain points, DSIM productization implications
**Use:** Sales enablement + product roadmap input

---

## CommerceIQ

### Buyer Persona Deep Dive
**Buyer:** VP / Sr. Director of eCommerce or Omnichannel at $500M–$5B CPG brand (Whirlpool, Bush Brothers tier). Reports to CCO or CGO. Wakes up trying to answer: *"Why did Walmart.com sales miss forecast last week, and which lever do I pull this week to recover?"* Carries quarterly retail revenue + retail media ROAS targets — usually blended ~4.5x ROAS goal across Amazon + Walmart + Target.

**Why CIQ wins:** They picked CommerceIQ because (a) it ties retail media spend directly to retail sales (closed loop on a single screen) and (b) the AE pitch is "fire your agency, automate bid management, prove incrementality" — a CFO-friendly cost story. The Dec 2025 Incrementality Module was specifically built to defuse the "is retail media just stealing organic?" boardroom question.

### Daily User Persona
**Daily user:** Retail Media Manager / eCom Analyst, 2–5 years experience, sits inside the eCom team. Logs in 4–6x/day. Core workflow: dayparting bid adjustments, Share of Voice checks, OOS alerts, weekly business review prep.

**Three morning questions:**
1. Which SKUs went OOS or lost Buy Box overnight?
2. Where did my Sponsored Products CPC spike, and is it still profitable?
3. What's my unsold inventory aging report telling me about Q-end markdowns?

### Feature Inventory (April 2026)
- **Campaign Management:** Sponsored Products / Brands / Display automation across Amazon, Walmart Connect, Instacart, Kroger, Target Roundel; dayparting; budget pacing; AI keyword harvesting.
- **Measurement/Analytics:** Incrementality Module (Dec 2025, observational, 14-day attribution window, methodology unpublished); Share of Voice tracker; Digital Shelf Analytics (content score, ratings, BB%); Profit Recovery (chargeback/shortage clawback).
- **Automation:** Auto-replenishment alerts, OOS predictions, content auto-publish, price-war detection.
- **Integrations:** 1P + 3P Amazon, Walmart Luminate (read-only), Instacart, NetSuite, SAP, Snowflake export.
- **Reporting:** Weekly Business Review auto-export, custom dashboards, executive scorecards.
- Pricing: sales-led; reported $75K–$400K ACV range [VERIFY via G2 2025 reviews].

### Recent Launches (12 mo)
- **Dec 2025:** Incrementality Module GA
- **Oct 2025:** "Agentic Co-Pilot" — natural-language query layer over data warehouse
- **Aug 2025:** Expanded Kroger Precision Marketing integration
- **May 2025:** Acquired creative-asset workflow tool (~$15M reported on Crunchbase) [VERIFY]
- **Mar 2025:** Walmart Connect API expansion — search term reports

### Stated Customer Outcomes
- **Colgate-Palmolive:** "30% reduction in wasted ad spend" [VERIFY date]
- **Mars Petcare:** "2x ROAS on Amazon DSP" (2024)
- **Unnamed Top-10 CPG:** "$8M profit recovery in 12 months" via chargeback module
- **No named Walmart-specific incrementality case study** published as of April 2026

### Pain Points (G2 / Reddit / LinkedIn)
- "Incrementality numbers don't match our internal MMM" (G2, Feb 2026 [VERIFY])
- "Implementation took 6 months, not the 8 weeks promised" (multiple G2 reviews 2025)
- "Walmart data is shallower than Amazon — feels bolted on"
- "UI is 14 different products stitched together; users get lost between modules"
- "Pricing creeps every renewal — 20%+ YoY" (LinkedIn post, Mar 2026)
- **Methodology opacity:** "They won't tell us how the incrementality model works" — recurring complaint from analytics-mature buyers

### DSIM Productization Implications
**Build:**
- **Published methodology white paper** (Robyn + Bayesian priors + cluster hierarchy) — directly attacks CIQ's biggest credibility gap
- **Walmart-native depth:** store-cluster decomposition CIQ structurally cannot match (they're Amazon-DNA)
- **6-lever decomposition view** — CIQ shows ROAS; DSIM shows *why* ROAS moved
- **MMM-grade reporting export** for the brand's analytics/finance team (the audience CIQ doesn't serve)

**Do NOT build:**
- Bid management / campaign automation (becomes "CIQ-lite," loses neutrality)
- Chargeback recovery / 1P operations
- Creative workflow tools
- Multi-retailer breadth before Walmart depth is undeniable

---

## Pacvue

### Buyer Persona Deep Dive
**Buyer:** Director of Retail Media or Head of Amazon at $100M–$2B CPG brand, *or* the agency trading desk lead (Stagwell, Tinuiti, etc. — Pacvue's agency channel is ~40% of revenue per industry chatter [VERIFY]). Reports to VP eCommerce or, at agencies, to the GM. Wakes up solving: *"How do I hit the agency's blended ROAS target across 30 client accounts this week?"*

**Why Pacvue wins:** Best-in-class Amazon Sponsored Ads automation, agency-friendly multi-account architecture, post-Assembly integration with creative + influencer stacks. Buyers picked Pacvue over Skai/Perpetua because of Amazon depth and over CIQ because it's cheaper and faster to deploy.

### Daily User Persona
**Daily user:** Retail Media Trader — could be in-house or agency-side, 1–4 years experience. Lives in Pacvue 6+ hours/day. Manages 50–500 campaigns simultaneously.

**Three morning questions:**
1. Which campaigns hit budget cap before noon yesterday and need pacing fixes?
2. What new competitor keywords showed up in my Share of Voice report?
3. What's my ACOS vs. target by ASIN cluster?

### Feature Inventory (April 2026)
- **Campaign Management:** Sponsored Ads automation (Amazon, Walmart, Instacart, Target, Criteo, Kroger, Chewy, Home Depot); DSP management; Commerce (1P/3P operations); Creative (post-Assembly).
- **Measurement/Analytics:** Pacvue Insights, Share of Voice, Hourly Dayparting Analytics, *no published causal incrementality module as of April 2026*.
- **Automation:** Rule-based bidding, budget rebalancing, anomaly detection, "Pacvue AI" recommendations (Oct 2025).
- **Integrations:** All major retail media networks (~20), Amazon Marketing Cloud, Walmart DSP, Skai/Tinuiti agency stacks.
- **Reporting:** White-label agency dashboards, client-ready exports.
- Pricing: % of ad spend (typically 2–5%) + platform fee. SMB tier ~$2K/mo, Enterprise $20K+/mo [VERIFY]

### Recent Launches (12 mo)
- **Feb 2026:** Home Depot Retail Media integration
- **Oct 2025:** "Pacvue AI" — generative campaign brief + bid recommendations
- **Jul 2025:** Assembly creative integration ("Creative Commerce Cloud")
- **May 2025:** Hourly Dayparting GA for Walmart Connect
- **Jan 2025:** Influencer measurement module (via Assembly's Creators IQ)

### Stated Customer Outcomes
- **Logitech:** "53% increase in ad sales" (2024 [VERIFY])
- **Solo Brands:** "40% reduction in ACOS" (2024)
- **Hint Water:** "3x Walmart Connect ROAS" (2025)
- **Outcomes are uniformly ROAS/ACOS — none claim incremental sales lift**

### Pain Points (G2 / Reddit)
- "Reporting is great for Amazon, weak for Walmart" (G2, Mar 2026 [VERIFY])
- "AI recommendations feel like a black box — just trust us" (r/PPC, Feb 2026)
- "Doesn't answer 'is this ad incremental?' — only 'is ACOS good?'" (LinkedIn, Jan 2026)
- "Post-Assembly, sales motion got pushy — bundling creative we don't want"
- "Walmart Luminate data lags 7+ days in platform"

### DSIM Productization Implications
**Build:**
- **Incrementality answer Pacvue cannot give** — Pacvue's pitch is ROAS optimization; DSIM's pitch is "your ROAS is lying to you, here's the true incremental lift"
- **Agency-readable export format** — Pacvue's daily users (traders) need a one-page "what to tell the brand" output to defend spend in QBRs
- **Walmart store-cluster geography** — Pacvue treats Walmart as one channel; DSIM treats it as 4,600 stores

**Do NOT build:**
- Sponsored Ads bid automation (Pacvue's moat, agency-channel war)
- Creative workflow / influencer tooling
- Hourly dayparting (operational, not strategic)
- Multi-retailer parity before Walmart causal depth is locked

---

## Net Positioning Takeaway

Both competitors sell *activation with measurement attached*. Neither has published causal methodology. DSIM's wedge is the inverse: *measurement-only, methodology-published, Walmart-deep*. Every "should we build X?" question should be answered against that wedge.

---

*Last verified: April 25, 2026. [VERIFY] flags require fresh check before external use.*
