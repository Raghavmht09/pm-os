# OKRs & Roadmap
Last updated: 2026-05-05

> Source: DSIM GTM plan (2026-04-21), productization scope (2026-04-25), launch scope decision (2026-04-16), team internal (2026-04-24).

## Current OKRs — Q2/Q3 2026

**Objective 1: Validate DSIM product-market fit with paying customers before committing productization engineering investment**

- KR1: 2 paying DSIM accounts signed (MSA or SOW) → Current: 0 | Target: 2 | Status: 🔴 BEHIND — pipeline building phase
- KR2: $150K+ ARR from DSIM services → Current: $0 | Target: $150K | Status: 🔴 BEHIND — blocked on KR1
- KR3: PoC-to-paid conversion ≥50% → Current: No data | Target: ≥50% | Status: 🟡 TRACKING — first PoC deals not closed yet
- KR4: Time-to-first-insight ≤10 weeks → Current: 13 weeks (Lactalis) | Target: ≤10 weeks | Status: 🟡 IN PROGRESS — Tableau template improvements underway

**Full ARR aspiration Q3 2026:** $300K–$500K from services contracts.
**PMF gate (triggers Phase 1 productization engineering):** KR1 + KR2 both hit simultaneously.

**Objective 2: Deliver DSA content override for GeekSpeak × Lassonde — establish repeatable template for agency-managed brands**

- KR1: Content override PRD v1.0 accepted by engineering → Current: Draft submitted | Target: Accepted | Status: 🟡 IN REVIEW
- KR2: Veracite override mechanism with RBAC + audit log shipped → Current: Pre-dev | Target: v1 live | Status: 🔴 NOT STARTED
- KR3: GeekSpeak able to override match classifications without DataWeave CS intervention → Current: Manual only | Target: Self-serve | Status: 🔴 NOT STARTED

---

## Roadmap — This Quarter (Q2 2026)

### DSIM — Services-Led (No Engineering Until PMF Gate)

| Item | Status | Owner | Dependencies |
|---|---|---|---|
| Explicit reallocation output in Tableau template | 🟡 IN PROGRESS | DS + CS | None — Tableau redesign only |
| Standardized Tableau output package (4 MVP outputs) | 🟡 IN PROGRESS | DS | Reallocation output design |
| Robyn model infrastructure confirmation (Slack DS lead) | 🟡 PENDING | PM | — |
| DSIM intake form (COLAB equivalent) | 🔴 NOT STARTED | CS + DS | Robyn infra confirmed |
| Scintilla pre-qualification protocol | 🟡 IN PROGRESS | CS / Brian | Before Bush Brothers call |
| Bush Brothers scoping call | 🟡 SCHEDULED | Brian / CS | May 2026 |
| Beiersdorf follow-up | 🟡 IN QUEUE | CS | Q2 2026 |
| Magic Spoon first conversation | 🟡 IN QUEUE | CS | End Q2 2026 |
| Clorox warm outreach (via existing DSA relationship) | 🔴 NOT STARTED | CS lead | CS relationship owner confirmed |
| Mondelēz outreach | 🔴 NOT STARTED | Sales / CS | CS relationship owner confirmed |

### DSA — GeekSpeak × Lassonde

| Item | Status | Owner | Dependencies |
|---|---|---|---|
| Content override mechanism (Veracite) | 🔴 PRE-DEV | Arun Kumar T, Sada, Sanket, Pandu | PRD acceptance |
| RBAC for external enablers (GeekSpeak) | 🔴 PRE-DEV | Engineering | Content override scope |
| Audit log for every override action | 🔴 PRE-DEV | Engineering | Scoped in PRD v1.0 |
| Share of Search setup — 6 Canadian banners | 🟡 IN PROGRESS | Delivery team | GeekSpeak keyword inputs |
| SKU list + keyword inputs from GeekSpeak | 🟡 AWAITING | GeekSpeak (Trisha/Ali) | Customer action |

---

## Roadmap — Next Quarter (Q3/Q4 2026 — Tentative)

**Themes (if PMF gate is hit Q2):**
- Phase 1 DSIM productization: Scintilla Cloud Feeds connector + Robyn model pipeline automation
- Multi-retailer expansion feasibility (Target first — feasibility confirmed but deferred)
- Walmart Data Ventures partner program (one agreement vs. per-brand credentials)

**Phase 1 engineering items (planning-only, triggered by PMF gate):**

| Item | Priority | Engineering Effort | Dependency |
|---|---|---|---|
| Scintilla Cloud Feeds connector | CRITICAL PATH | 3–5 weeks | 2+ Charter-tier accounts confirmed |
| Robyn model execution pipeline (containerize) | CRITICAL PATH | 6–10 wks (local) or 2–4 wks (partial) | Robyn infra confirmed |
| Walmart Connect API continuous ingestion | HIGH | 4–6 weeks | Saurabh Sharma prototype check |
| DSIM Account Setup Wizard (brand-facing form) | MEDIUM | 3–4 weeks | Intake form validated in services |

---

## Parking Lot

| Item | Deferred Date | Reason | Revisit Trigger |
|---|---|---|---|
| Multi-retailer (Target, Instacart) | 2026-04-16 | Q4 2026 earliest. Walmart pipeline first. | Walmart adoption <20% of TAM by end Q2, OR customer churn risk on multi-retailer |
| Native DSIM dashboard (replaces Tableau) | 2026-04-25 | Phase 2. PMF must stabilize. | 5+ paying accounts OR repeated customer feedback on Tableau limitations |
| Reallocation simulator (interactive "what if") | 2026-04-25 | Phase 2. | PMF stable + customer pull |
| Profitero file integration for non-DSA brands | 2026-04-25 | Phase 2. Not blocking PMF. | 3+ pipeline accounts using Profitero |
| Kroger (84.51° data) | 2026-04-25 | Phase 2. Feasibility confirmed. | Walmart base stable |

---

## Decision Log Reference

- **2026-04-16:** Walmart-only DSIM launch (not multi-retailer). `decisions/roadmap/2026-04-16-dsim-launch-scope.md`
