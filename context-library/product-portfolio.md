# DataWeave Product Portfolio
Last updated: 2026-05-05

## Products I Own

- **DSIM (Digital Shelf Impact Measurement)** — Primary focus. Bayesian MMM that quantifies causal sales impact of digital shelf KPIs on Walmart. Pre-productization phase (services-led, Tableau delivery). PM gate: 2 paying accounts + $150K ARR before engineering sprint.
- **DSA (Digital Shelf Analytics)** — Co-ownership / supporting PM. Content audit, share of search, availability tracking, content compliance scoring. Active customer: Lassonde (via GeekSpeak). Platform: Veracite (internal spec/match management).

## Product Area Map — Full DataWeave Suite

| Product | Status | Notes |
|---|---|---|
| Digital Shelf Analytics (DSA) | Live, production | Core platform. Veracite powers content audit. Canadian retailer coverage active (Loblaws, Walmart CA, Metro, etc.) |
| DSIM (Digital Shelf Impact Measurement) | Pre-PMF, services-led | Bayesian MMM on Walmart. Lactalis PoC complete. Phase 0/1 productization scoped. |
| Pricing Intelligence | Live | Not my primary area |
| Content Analytics / Content Optimization | Live (part of DSA) | Veracite content match engine |
| Assortment Analytics | Live | Not my primary area |
| Share of Search | Live (part of DSA) | Daily crawl, active for Lassonde/GeekSpeak |
| Attribute Extraction | Live (AI-powered) | Supports DSA content audit |
| Sentiment Analysis | Live | Not my primary area |
| Hyperlocal Analytics | Live | Not my primary area |
| Flyers / Promo Intelligence | Live | Not my primary area |
| Data Collection API | Live | Crawl infrastructure underlies all products |

## DSIM — Current State

- **Phase:** Services-led (pre-productization). Tableau delivery model.
- **Reference engagement:** Lactalis (internal PoC, not paying). R²=91%, MAPE=5.9%, identified $30K/day in misallocated media.
- **PMF gate:** 2 paying accounts + $150K ARR → triggers Phase 1 engineering.
- **Active pipeline:** Bush Brothers (May meeting), Beiersdorf (Q2 follow-up), Magic Spoon (end Q2), ShopHop (positive signal).
- **Target accounts for first paying:** Clorox, Mondelēz (both named in launch scope decision as beta candidates).
- **Delivery timeline:** ≤10 weeks from data onboarding to first dashboard. Lactalis took 13 weeks.
- **Immediate actions in-flight:** (1) Explicit reallocation output added to Tableau template (2-week task, no engineering), (2) Robyn model infrastructure confirmation pending (Action with DS lead), (3) Scintilla pre-qualification protocol for pipeline accounts.

## DSA — Current State (Geekspeak/Lassonde project)

- **Active project:** GeekSpeak × Lassonde — content audit + share of search for Canadian retailers (6 banners: Walmart CA, Loblaws, Real Canadian Superstore, No Frills, Voila, Metro/Maxi).
- **PRD status:** Draft v1.0 authored 2026-04-16 by Raghav Mehta.
- **Key feature being built:** Content override mechanism via Veracite — external enablers (GeekSpeak) can override automated content match classifications with RBAC + audit trail.
- **Engineering stakeholders:** Arun Kumar T (Eng Lead), Sada, Sanket, Pandu.
- **Known gap:** No override mechanism exists today; every crawl overwrites prior results; no state management or audit trail.
- **Phase 0 precedent:** Lactalis (same GeekSpeak team) — share of search live, content audit was manual one-off POC.

## Key Metrics — DSIM

| Metric | Baseline | Target | Timeline |
|---|---|---|---|
| Paying accounts signed | 0 | 2 | Q3 2026 (end Aug) |
| ARR (services) | $0 | $300K–$500K | Q3 2026 |
| PoC-to-paid conversion | Unknown | ≥50% | Per PoC cycle |
| Time-to-first-insight | 13 weeks (Lactalis) | ≤10 weeks | Per engagement |
| MAPE floor | 5.9% (Lactalis) | ≤8% | Per engagement |
| Referenceable account | 0 | 1 by name | Q4 2026 |

## Known Gaps vs. Competitors

| Gap Area | Competitor Advantage | DSIM Counter |
|---|---|---|
| Multi-retailer | CommerceIQ, Profitero cover Amazon + Walmart + Target | Walmart-only Q2. Multi-retailer (Target/Kroger) deferred Q4 2026 |
| Scale / brand count | CIQ: 2,200+ brands; Pacvue: 70,000+ brands | DSIM: pre-PMF. Counter: depth not breadth |
| Native UI / always-on dashboard | Pacvue, Skai, CIQ have live dashboards | DSIM delivers Tableau. Phase 2: native dashboard |
| Methodology transparency | Competitors publish no MAPE/R² | DSIM advantage: 5.9% MAPE + 91% R² published |
| Agency neutrality | Profitero (Publicis-owned), CIQ (Assembly PE) | DSIM: vendor-neutral, no activation revenue |
