# DSIM — Digital Shelf Impact Measurement
## Team-Internal Strategy & Competitive Intelligence
**Last updated:** April 2026 | **Status:** Live document — refresh before any customer conversation
**Owner:** PM | **Audience:** DataWeave Sales, CS, Leadership, Engineering

---

> **What to use this for:**
> - Before a DSIM sales call: read Section 3 (competitor you're likely to face) and Section 5 (objection handling)
> - Before a QBR: pull the success metrics from Section 2 and the proof points from Section 1
> - Before leadership review: Section 4 (market context) gives the strategic framing
> - Before engineering planning: Section 6 (productization phases)

---

## 1. The Pitch in Plain English

CPG brands spend $1M–$5M+ per year on Walmart Connect advertising. They get a ROAS number. They don't know:
- How much of that lift was going to happen anyway (the baseline)
- Whether their 72% in-stock rate during the campaign was suppressing the media return
- Whether moving $X from Sponsored Search to Offsite Display would produce more incremental sales
- Whether their Kids/Baby sub-brand's media spend is creating a halo effect lifting Adult SKUs

DSIM answers all four — in one model, at the store-cluster level, in 10 weeks.

**The Lactalis proof (our only current reference engagement):**
- R² = 91%, MAPE = 5.9% — better than most MMM engagements at 2× the speed
- Identified $30K/day in misallocated media spend (63% of budget in Onsite Search at 0.83 iROI; only 22% in Offsite Display at 1.55 iROI)
- Surfaced: 78% in-stock during peak media periods — ad spend amplifying an OOS problem
- Quantified halo: Adult sub-brand receiving +12% sales lift from Kids/Baby media spend
- 17 store clusters, each with distinct channel response — national ROAS was hiding the real picture

**The one-sentence wedge for every deal:** *"You wouldn't let the student grade their own test."*

---

## 2. Success Metrics (Current Targets)

| Metric | Baseline | Target | Timeline |
|---|---|---|---|
| Paying accounts signed | 0 (Lactalis was internal PoC) | 2 accounts | Q3 2026 (end Aug) |
| ARR from services | $0 | $300K–$500K | Q3 2026 |
| PoC-to-paid conversion | Unknown | ≥ 50% | Per PoC cycle |
| Time-to-first-insight | 13 weeks (Lactalis) | ≤ 10 weeks | Per engagement |
| Model accuracy (MAPE) | 5.9% (Lactalis) | ≤ 8% floor | Per engagement |
| Referenceable account | 0 | 1 by name | Q4 2026 |

**PMF threshold for productization investment:** 2 paying accounts + $150K+ total ARR → trigger DSIM native product sprint.

---

## 3. Competitive Landscape — Who You'll Face in Deals

### The Three-Way Split

The market has three categories. DSIM competes differently in each:

| Category | Players | Buyer | DSIM Position |
|---|---|---|---|
| **Activation-Led** | CommerceIQ, Pacvue | Retail media ops | "We're the independent measurement layer above their activation. No conflict." |
| **Campaign Measurement** | Incremental.com, Skai | Analytics team | "We surface shelf signals as outputs; they remove them as noise. Different questions." |
| **Shelf-Native Diagnostic** | **DataWeave DSIM** | RGM / Finance | Uncontested. No one else answers: "which of 6 levers drove incremental sales at the store cluster level?" |

---

### Competitor Quick Reference

#### CommerceIQ
**Threat: HIGH** | 2,200+ brands | $136.6M revenue | 38% YoY growth
- December 2025: Launched standalone **Incrementality Estimation Module** (not just bundled)
- BUT: observational model (keyword/propensity, 14-day window) — NOT holdout/test-and-control
- Walmart Connect's own April 2025 product launch called this methodology type inferior to "gold-standard test-and-control backed by real, verified sales data"
- Publishes NO MAPE, NO R² equivalent
- Named Walmart customers: Mondelēz ($4M wasted media saved), PepsiCo, Reckitt, Georgia Pacific
- **Our pitch:** "Show us their MAPE. Show us their R². We have 5.9% and 91%."

#### Incremental.com
**Threat: HIGH — measurement-only** | 44 employees | $18.8M total funding | WPP Connected Partner
- Walmart Connect measurement partner since July 2024; elevated April 2025
- **Critical finding:** Uses shelf signals (search rank, buy box, inventory) as CONTROL VARIABLES to remove confounders — NOT as deliverables. They strip shelf noise out; they don't surface shelf opportunity.
- Ensemble causal model (econometric + experiments); IAB/MRC compliant
- No published MAPE or R² equivalent
- Named customers: Bayer (Amazon, via Skai integration); rest anonymous
- **Our pitch:** "Incremental tells you if media worked. DSIM tells you what shelf conditions constrained it. When a brand using Incremental finds us, they're a warm prospect — already sold on the concept."

#### Pacvue
**Threat: MEDIUM-HIGH** | 70,000+ brands | ~$104M revenue | Acquired by Assembly (PE)
- CEO changed September 2024: Sandeep Kella out, Rahul Choraria in
- Incrementality Console: launched Amazon-first (Sept 2024); Walmart equivalent unconfirmed as of April 2026
- Observational model, no geo-lift or holdout; bundled with activation
- No named U.S. CPG Walmart incrementality case study
- G2: 15 reviews only (surprisingly low for 70K+ brands)
- **Our pitch:** "Pacvue tells you your Amazon iROAS. For Walmart at the store-cluster level, they have a gap. We fill it."

#### Profitero
**Threat: HIGH (shelf incumbent)** | 9,000+ brands | Publicis-owned
- **March 2026:** Sarah Hofstetter (independent president/chairwoman) departed. Ethan Goodman (Publicis insider) took over. The last non-Publicis narrative anchor is gone.
- Profitero+ bundles Mars United Commerce managed services — not standalone SaaS anymore
- Measurement requires Pacvue as the causal layer: "Pacvue's Incrementality Console allowed Panasonic to measure incremental uplift" (their own case study)
- IDC MarketScape Leader October 2025 — strong positioning but monitoring, not causation
- **Our pitch:** "Profitero tells you what changed. DSIM tells you what each change was worth. And their measurement runs through Publicis — is that the neutral number your CFO needs?"

#### Skai
**Threat: MEDIUM** | 2,000+ brands | Published pricing at skai.io ($114K–$756K/year)
- Always-on incrementality modeling claim but no published methodology details
- The I-COM-winning Bayer case study: measurement was Incremental.com, not Skai's own tool
- **G2 2026:** "retail-media coverage feels uneven: data can lag, feature parity varies by retailer (notably Walmart)" — reviewer named Walmart explicitly
- No shelf signals in incrementality model
- **Our pitch:** "Skai's Walmart coverage specifically lags per their own G2 reviews. Their best incrementality result required a third-party. We're built natively for Walmart with shelf signals as outputs."

#### Analytic Partners / Measured / Haus
**Threat: STRUCTURAL** | CFO/Finance conversation owners
- AP: 3-6 month delivery, no real-time shelf signals, $150K–$500K/engagement
- Measured/Haus: geo-lift holdout + Bayesian MMM; DTC-first; no CPG-Walmart reference base
- **Our pitch:** "AP tells you the quarterly picture. DSIM tells you what to act on this week. And DSIM's 5.9% MAPE beats AP's 10-15% industry average on the retail media attribution layer."

#### Walmart Connect (Native Tools)
**Threat: SPECIAL** | Free, first-party, methodologically superior on media
- Search Incrementality (April 2025 GA): randomized control testing, first-party POS data
- The best possible answer to "was my Walmart Connect Sponsored Search incremental?"
- **It does NOT answer:** which shelf lever capped the lift; what the store-cluster variance looks like; whether budget reallocation across 6 levers would produce more return
- **Our pitch:** "Walmart Connect measures their media. DSIM measures everything that determines whether that media can succeed — availability, content, SoS, competitive pressure. They're inputs to DSIM, not competition."

---

## 4. Market Context (Why Now)

- **75%** of CPG advertisers cite incrementality as their #1 measurement challenge (Skai 2026 survey)
- Only **20%** are proficient at both measuring AND applying insights
- CommerceIQ's standalone measurement module (Dec 2025) = category validation event. The biggest activation platform said "brands want measurement without activation." We were ahead of this.
- Walmart launched native Search Incrementality (April 2025) + Scintilla In-Store (Feb 2026) = Walmart is investing in measurement infrastructure. Our Scintilla connector is a data advantage, not a competitive threat.
- The CPG-Walmart reference base is **unclaimed**: Measured, Haus, Incremental.com, Pacvue, Skai all have weak or anonymous Walmart CPG case studies. First to land P&G, PepsiCo, or Kraft Heinz on Walmart owns the segment narrative.

---

## 5. Objection Handling — Sales Cheat Sheet

| Objection | What They Mean | Response |
|---|---|---|
| "We use CommerceIQ/Pacvue for incrementality" | Their media ops team likes their current tool | "They're grading their own test. CIQ's model is keyword/14-day/observational — Walmart Connect publicly called that methodology inferior in April 2025. DSIM publishes 5.9% MAPE and 91% R². CIQ publishes nothing." |
| "We use Incremental.com" | They've invested in measurement | "Great — they've solved 'did media work?' DSIM solves 'was the shelf ready for it?' Brands using Incremental are our warmest prospects." |
| "We use Skai" | Activation-first team | "Skai's Walmart coverage lags per G2. Their best iROAS case study (Bayer) used Incremental.com for measurement, not Skai's tool. At $114K–$756K/year for activation, DSIM's $50K PoC is a separate budget line." |
| "Profitero already gives us shelf intelligence" | Monitoring is meeting their need | "Profitero tells you what changed. DSIM tells you what each change was worth in dollars. And Profitero is now fully inside Publicis — is that the neutral measurement your CFO needs for the JBP?" |
| "We have Analytic Partners for MMM" | Finance team relationship | "AP gives you the quarterly picture. DSIM gives you always-on shelf attribution at the store-cluster level at 5.9% MAPE vs. AP's 10-15%. They're complementary — DSIM's outputs improve AP's model quality on the retail media layer." |
| "Scintilla gives us our Walmart ROAS" | They think the data exists | "Scintilla's ROAS is Walmart's last-touch attribution. It tells you what correlated with sales. It cannot remove the baseline, model whether your OOS rate capped the lift, or decompose across 6 shelf levers. DSIM takes Scintilla as an input and produces the causal story." |
| "We don't have Scintilla Charter" | Data access concern | "DSIM works without Scintilla. We need DSA shelf KPIs + Walmart Connect API + a sales data export. Scintilla makes the model richer, but we can start with what you have." |
| "The PoC price is too high" | Budget/procurement friction | "The Lactalis PoC identified $30K/day in misallocated spend. If DSIM surfaces a reallocation opportunity 10% that size, it pays for itself before delivery. And at $50–75K, this is a category manager's budget, not IT procurement." |
| "CommerceIQ launched a standalone measurement tool" | Awareness of market shifts | "They launched in December 2025 — we've seen it. Their standalone tool uses an observational model with a 14-day attribution window, no holdouts, no shelf signals. It validates the category. It doesn't compete on our methodology." |

---

## 6. Pricing Reference

**DSIM Services Pricing (indicative — confirm with Sales before quoting):**

| Tier | Price | Scope |
|---|---|---|
| PoC (10 weeks) | $50K–$75K | 1 brand, 1 retailer (Walmart), 1 category |
| Annual Engagement | $150K–$200K/yr | 1 brand portfolio, quarterly refresh, Tableau dashboard |
| Enterprise (Multi-brand) | $250K–$400K/yr | 3+ sub-brands, monthly updates, executive reviews |

**Value-based anchor (use in pricing conversations):**
Lactalis: $10.9M/year identified opportunity at $30K/day. DSIM fee at 1.5–2% of identified opportunity = $165K–$220K — which is exactly where annual engagement pricing sits.

**Competitive pricing context:**
- Skai Standard tier: $114K/year (activation platform, published on their website)
- Analytic Partners MMM: $150K–$500K+ per engagement (quarterly delivery, no shelf signals)
- CommerceIQ entry: $25K/year (observational model, bundled; standalone module pricing not disclosed)

---

## 7. Target Accounts (Priority Order)

**Q2 2026 PoC targets:**
1. **Clorox** — likely existing DataWeave DSA relationship; Walmart Connect spender; named in launch scope decision
2. **Mondelēz (Oreo, Ritz)** — multi-sub-brand complexity mirrors Lactalis; halo effect likely strong; existing DSA relationship possible
3. **Kraft Heinz** — availability-sensitive; annual JBP creates urgency; VP RGM outreach via LinkedIn

**Warm prospect signal:** Any brand currently using Incremental.com or that mentions "we measure incrementality but can't explain why the lift varies by week" — those are pre-qualified DSIM buyers.

**Parent company strategy:** One P&G deal unlocks Tide, Gain, Pampers, Head & Shoulders, Gillette etc. Target the parent company analytics/RGM lead first.

---

## 8. Productization Roadmap

| Phase | Timeline | What It Enables |
|---|---|---|
| **P0 — Services-Led (NOW)** | Q2–Q3 2026 | Manual onboarding; Tableau delivery; 2-3 simultaneous engagements max |
| **P1 — Assisted Productization** | 6–9 months post-PMF | DSIM Account Setup Wizard + Walmart Connect API connector; onboarding 1-2 weeks vs. 4+ |
| **P2 — Native Delivery** | 12–18 months | Native DSIM dashboard replacing Tableau; Scintilla connector; model refresh automation |
| **P3 — Reallocation Simulator** | 2027+ (roadmap) | Live Walmart Connect bid integration; activation converges on DataWeave's terms |

**PMF trigger for P1 investment:** 2 paying accounts signed + $150K+ total ARR.

**Critical engineering unknowns before P1 scope commitment:**
- Robyn model infrastructure: where does it run, who owns it, can it be containerized?
- Walmart Connect API: is there an existing DataWeave integration framework to extend?
- Scintilla connector: Cloud Feeds vs. API Feeds for Channel Performance data?
(See full `products/dsim/prd/dsim-productization-discovery-2026-04-21.md` for details)

---

## 9. Discovery Questions for Qualifying Calls

Ask these three. If all answers are "no" or "we think so but can't prove it," the brand is a qualified DSIM prospect:

1. *"Can you tell us today which Walmart Connect channel — Onsite Search vs. Offsite Display vs. Sponsored Brands — generated the most net-new incremental sales per dollar? Not ROAS — truly incremental, net of what would have sold organically?"*

2. *"During your last major Walmart media push, what was your in-stock rate? Did you catch it in real-time or after the quarter closed?"*

3. *"Do you have sub-brands where one brand's media spend may be lifting a sister brand's organic sales — and is that accounted for in your current media attribution?"*

---

## 10. Notion Sync Note

This document is the Notion-ready export of DSIM team intelligence. It should be copied into the DSIM Notion page.

**Since there is no active Notion MCP connection in this session, the sync must be done manually:**
1. Open the existing DSIM Notion page
2. Replace the competitive landscape section with content from Section 3 above
3. Update the objection handling table in Section 5
4. Confirm the productization roadmap in Section 8 matches the current engineering plan

**Refresh cadence:** This export should be regenerated every 60 days. Run `/competitor-analysis [company]` for any competitor with a named deal in flight.

---

*Source documents: `insider-data/dsim/competitive-landscape-deepdive.md`, `products/dsim/presentations/dsim-gtm-plan-services-led-2026-04-21.md`, `products/dsim/prd/dsim-productization-discovery-2026-04-21.md`, `insider-data/competitor-profiles/` (CommerceIQ, Incremental.com, Pacvue, Profitero, Skai — all created April 2026)*
*Next full competitive refresh: July 2026 | Trigger refresh early if: CommerceIQ updates methodology, Incremental.com ships new features, any competitor announces Walmart-specific measurement partnership*
