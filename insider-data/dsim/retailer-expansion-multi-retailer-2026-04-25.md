# DSIM Multi-Retailer Expansion Feasibility Study
**Date:** April 25, 2026
**Scope:** Kroger, Target, Costco, BestBuy — feasibility of porting DSIM beyond Walmart
**Use:** Roadmap sequencing, design partner prioritization

---

## Recommendation Summary

| Rank | Retailer | Effort | Status |
|---|---|---|---|
| **1** | **Kroger** | 4–5 months | **Strongest fit — pursue next** |
| **2** | **Target** | 5–7 months | Strong second, gated by Roundel API depth |
| **3** | **BestBuy** | 6–8 months + GTM rebuild | Possible but adjacent — defer until #1, #2 prove playbook |
| **4** | **Costco** | 9–12+ months | Defer — structural data unavailability |

---

## Kroger

### Retail Media Platform
**Kroger Precision Marketing (KPM)**, operated jointly with **84.51°** (Kroger's wholly-owned data subsidiary). Capabilities: onsite sponsored products, onsite display, offsite programmatic (audience extension via The Trade Desk + PMP integrations with Roku, Pinterest, Meta), CTV via Kroger Precision Mesh.

**Buyers:** CPG shopper marketing teams + KAMs. Run by Kroger-channel team, not brand-equity media team.

**Pricing:** CPM for display/CTV, CPC for sponsored products, with closed-loop measurement reported in **Stratum** (84.51°'s reporting platform).

### Brand-Side Data Access
**Best-in-class outside Walmart.** Through Stratum and Stratum Insights, brands receive:
- Transaction-level sales (loyalty-card matched, ~96% of Kroger sales tied to a Kroger Plus household)
- Weekly and daily granularity
- Household repeat-purchase, basket affinity, lapsed-buyer cohorts
- Campaign attribution down to incremental sales lift

Search/shelf data is **not** natively offered — brands source externally. Inventory/OOS at store level limited unless brand pays for supply-chain feed (rare).

### DataWeave Shelf Coverage
**Yes** — Kroger.com is part of DataWeave's standard DSA crawl footprint for US grocery. PDP, search rank, content quality, price, OOS at digital level covered. [VERIFY Kroger banner coverage: Fred Meyer, Harris Teeter, Ralphs]

### DSIM Model Portability
**HIGH.** Store-cluster equivalent exists: Kroger's 2,700+ stores across 35 banners give natural geo-clustering (banner × DMA). 84.51° transaction data is the closest analog to Walmart Scintilla — daily, household-level, SKU-level. The 6 levers map cleanly. Robyn priors from Walmart model should transfer with retailer-specific recalibration of media saturation curves.

### Buyer Persona
**Different person from Walmart buyer at most CPGs.** Large CPGs (Lactalis, Unilever, P&G) have a dedicated "Director, Kroger Customer Team" or "VP Kroger" sitting in Cincinnati. Mid-size brands may consolidate under "Director, Grocery Channel."

### Output Value Proposition
DSIM uniquely separates **KPM-driven lift** from **organic SoS, content, and price elasticity** — a decomposition Stratum cannot produce because 84.51° only sees Kroger-mediated touchpoints, not the digital shelf context. **Brands today over-credit KPM. DSIM corrects that.**

### Effort to Launch
**4–5 months.** Biggest blockers:
1. Negotiating 84.51° data-share agreement on behalf of the brand (brand-led, not DataWeave-led)
2. KPM reporting API access (Stratum has API; depth varies by tier)
3. Banner-level cluster definition

**Critical dependency:** A design-partner brand willing to authorize 84.51° + KPM data flow into DSIM.

---

## Target

### Retail Media Platform
**Roundel** (rebranded from Target Media Network in 2019). Capabilities: onsite sponsored products + display, offsite via Roundel Media Studio (programmatic, social, CTV partnerships with Disney, NBCU, Pinterest).

**Buyers:** Target-channel shopper marketing teams.

**Pricing:** CPM/CPC; managed-service heavy, less self-serve than Walmart Connect or KPM.

### Brand-Side Data Access
**More closed than KPM or Walmart Connect.** Roundel reports campaign-level lift but does not expose transaction-level data at 84.51°-equivalent granularity. Target Circle covers smaller share of sales than Kroger Plus [VERIFY: ~80% basket coverage]. Brands receive aggregate weekly POS via Target's Partners Online (POL) portal — SKU × store × week, not household-level. Search/shelf: not offered. Inventory: store-level on-hand visible in POL.

### DataWeave Shelf Coverage
**Yes** — Target.com in DataWeave's DSA US general-merchandise + grocery crawl. Strong PDP/search/price/content coverage.

### DSIM Model Portability
**MEDIUM.** Store-cluster works (~1,950 stores, geo-diverse). The blocker is media-side granularity: Roundel does not expose impression/spend logs at the depth Walmart Connect API provides. Without daily campaign-level media inputs, the Bayesian decomposition's media-lever confidence interval widens materially. POL weekly SKU×store is workable but a step down from Scintilla daily.

### Buyer Persona
At enterprise CPGs, **separate "Director Target" exists**. At mid-size brands often rolls into "Director Mass Channel" alongside Walmart — meaning DSIM may sell to the same human as the Walmart deployment, **lowering CAC**.

### Output Value Proposition
Brands flying blind on Roundel ROI — DSIM provides the only third-party, model-based decomposition of Roundel-driven incrementality vs. shelf factors. High value, but only as good as the media data feed.

### Effort to Launch
**5–7 months.** Blockers:
1. Roundel API access — currently limited; managed-service reporting only for many brands [VERIFY: Roundel self-serve API roadmap 2026]
2. POL data extraction automation
3. Reconciling Target Circle attribution windows with Robyn's adstock parameters

---

## Costco

### Retail Media Platform
**Costco Connect** (launched 2024), in partnership with Criteo for onsite sponsored products. Capabilities are nascent: limited ad inventory, no robust self-serve, limited audience targeting (Costco famously protects member data).

### Brand-Side Data Access
**Severely constrained.** Costco does not share member-level transaction data with brands as a matter of policy. Brands receive aggregate sales reports through buyer relationships — typically monthly or 4-week period, club-level at best, not item × club × day. No loyalty cohort access. No search/shelf data (Costco.com search behavior is opaque). Inventory: minimal visibility outside buyer conversations.

### DataWeave Shelf Coverage
**Partial.** Costco.com has limited SKU breadth (only fraction of in-warehouse assortment online) and aggressive bot defenses [VERIFY current DSA crawl status]. **In-warehouse shelf is not crawlable — no digital twin exists.** Structural data gap.

### DSIM Model Portability
**LOW.** Model assumes (a) sufficient store/cluster sales granularity to fit a Bayesian hierarchical model, (b) media data as usable input, (c) digital shelf as usable input. **Costco fails on all three.** Store-cluster works in theory (~600 US warehouses) but sales output granularity (4-week aggregate, club-level) too coarse for Robyn's daily/weekly adstock decomposition. Most of the 6 levers are unmeasurable.

### Effort to Launch
**9–12+ months, contingent on Costco data policy changes.** Blockers:
1. No transaction data feed available at any price
2. Thin retail media platform
3. Limited digital shelf surface area

**Critical dependency:** Costco choosing to open data access — outside DataWeave's control. **Defer.**

---

## BestBuy

### Retail Media Platform
**Best Buy Ads** (originally powered by CitrusAd / Epsilon-Publicis [VERIFY status of partnership post-2024]). Capabilities: onsite sponsored products, display, offsite via Best Buy's audience graph (My Best Buy loyalty + browsing data, ~37M+ households).

**Buyers:** Vendor marketing teams at OEMs (Samsung, LG, Sony, Apple, HP).

### Brand-Side Data Access
Vendor partner portal provides weekly/daily POS, SKU × store, My Best Buy loyalty cohort attribution for advertised SKUs. Search/shelf data not natively offered. Inventory visibility strong at store level. **Household repeat-purchase less relevant in electronics** (long replacement cycles) — limiting one of DSIM's signal sources.

### DataWeave Shelf Coverage
**Yes** — BestBuy.com in DataWeave's electronics DSA crawl.

### DSIM Model Portability
**MEDIUM-LOW**, but for category reasons not data reasons. ~975 stores give cluster variation. POS granularity workable. The structural issue: **electronics demand is episodic and product-launch-driven**, not continuous CPG velocity. Robyn's adstock + saturation framework was tuned on daily-velocity grocery (Lactalis dairy). Modeling a TV launch is closer to ad-tech attribution than MMM. Model would need recalibration with electronics-specific priors.

### Buyer Persona
**Completely different from Walmart buyer.** OEM vendor marketing leads (Samsung NA, Sony Electronics) — not CPG shopper marketing. New sales motion, new contacts, no overlap with the Lactalis-style buyer DSIM was built for.

### Effort to Launch
**6–8 months** plus a **GTM motion rebuild** to reach OEM buyers. Blockers:
1. Model recalibration for episodic electronics demand
2. New buyer persona = new sales playbook
3. Smaller TAM than CPG-grocery

---

## Final Sequencing

**Recommended:** Kroger → Target → BestBuy. Park Costco.

**Highest-leverage next step:** Identify a Kroger design partner (any Lactalis-equivalent CPG already running KPM).

---

*Last verified: April 25, 2026. [VERIFY] flags must be confirmed before external use.*
