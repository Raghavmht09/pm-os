# customer-signals — hypotheses
Last updated: 2026-05-13
Sources: GeekSpeak/Lassonde engagement (Apr–May 2026); Confluence module research (2026-05-13)

## H-PERSONA-01: "Category manager" and "Ecommerce lead" personas are under-defined in current product Confluence
**Observation (2026-05-13):** Comprehensive scan of 9 Confluence pages (PI Overview Feb 2026, Shopbop PRD Feb 2026, AI Wrapper Mar 2026, AA AI Wrapper Jul 2025 [STALE], AI-Guided MM May 2026, Bulk Match PRD Apr 2026, MM Enhancements Apr 2026, Match Overview May 2025 [STALE], MM Widget Help Jun 2025 [STALE]) found: "category manager" appears only in the stale Jul 2025 AA doc; "ecommerce lead" appears nowhere; PI docs use "Pricing Analyst"; MM docs use "Data Ops" and "client teams."
**Why it matters:** Concept A (embedded contextual nudges) and Concept C (agent builder) cannot ship persona-targeted UX without confirmed persona definitions. Risk: build for an invented persona, ship to mismatch.
**Evidence so far:** 1 documentation scan. CSM Playbook page (3 line 857768097, Oct 2025) not yet pulled — may contain definitions.
**Needs:** CSM-led interview round, 6 customers minimum, define JTBD + daily cadence + KPIs for both personas. Pull CSM Playbook page first.
**Promotion trigger:** 6 CSM interviews + 2 customer interviews confirm consistent persona definitions → promote to rules.md as canonical persona model.

## H-COST-AI-01: AI Wrapper per-query summarization cost is the binding constraint on B2B AI features
**Observation (2026-05-13):** Confluence AI Wrapper Assortment use case (page 4, Jul 2025) reports $1.16 per Assortment query, of which $1.15 (~99%) is summarization for 500 rows × 4 cols. Caching layer documented as "not yet built" 10+ months ago.
**Why it matters:** Concept D (scheduled exports) is self-funding if cache hits replace re-summarization. Concept C (agent builder) scale economics depend on caching for recurring runs. Without caching, customer-facing chat scaling is bottlenecked at first launch.
**Evidence so far:** 1 cost analysis (Jul 2025) — may be stale; needs current ship-status check.
**Needs:** Verify if caching layer shipped in Apr-May 2026 sprint updates (Confluence open question #5).
**Promotion trigger:** Caching ship status + post-cache per-query cost confirmed → either promote (if still binding) or demote with note (if solved).

---



Patterns seen 1–2 times. Needs more data before promoting to rules.md.

---

## H-01: Customers always want raw data access alongside the dashboard
**Observation:** GeekSpeak explicitly requested backend data access (raw exports) in addition to the scorecard UI. The dashboard alone is insufficient for their workflow — they need to run custom queries and build their own reporting on top of DataWeave's output.
**Why it matters:** If this is a recurring request, the product needs a robust data export layer (CSV, API) as a standard offering, not a custom delivery per account. The OneDrive delivery model is a workaround, not a product capability.
**Evidence so far:** 1 customer (GeekSpeak). Pattern also consistent with enterprise B2B norms (data portability as a table-stakes requirement).
**Needs:** Confirm whether other DSA accounts (Mars, Grupo Bimbo, Kellanova) request raw data access or rely solely on the dashboard.
**Promotion trigger:** 3+ accounts requesting raw data access or API export as part of their onboarding requirements.

---

## H-02: Score calculation methodology is a recurring source of customer distrust
**Observation:** GeekSpeak flagged calculation discrepancies early in the engagement (Apr 15), before any data was even delivered. The concern was about how Not-Available vs Incorrect states factor into compliance percentage. This pre-launch concern suggests methodology transparency is a trust blocker, not just a post-launch complaint.
**Why it matters:** If customers consistently question how scores are calculated, DataWeave needs a methodology documentation artifact (in-product or at onboarding). Opaque scoring is a retention risk — customers who don't trust the score won't act on it.
**Evidence so far:** 1 customer (GeekSpeak/Lassonde). Calculation methodology concerns are common in analytics products generally.
**Needs:** Check if other DSA customers have raised scoring methodology questions during onboarding or QBRs.
**Promotion trigger:** 2+ accounts raise score calculation questions before or within 30 days of go-live.

---

## H-03: Image ordering strictness creates high Incorrect rates that feel unfair to customers
**Observation:** The rule "all out-of-order images = all Incorrect" means a single image in the wrong position marks the entire image set as non-compliant. GeekSpeak confirmed this rule in the Apr 22 meeting, but the strictness may create surprisingly low scores that customers find hard to explain to brand teams.
**Why it matters:** If compliance scores are lower than expected due to ordering strictness, customers may push back on the score rather than fixing the underlying content. This undermines the product's value proposition.
**Evidence so far:** Rule confirmed with 1 customer. No post-launch data on override rates for image ordering vs content mismatch.
**Needs:** Post-launch data on what % of image overrides are for ordering (Correct-Slightly-Modified) vs genuine mismatch (Incorrect).
**Promotion trigger:** >30% of image overrides in first 3 crawl cycles are Correct-Slightly-Modified (ordering acceptable variation).

---

## H-04: Dual-ID SKU matching (client ID + retailer ID) is a standard requirement across all DSA accounts
**Observation:** Apr 15 meeting confirmed UPC alone is insufficient — DataWeave needs both the client's internal SKU ID and the retailer's SKU ID for accurate matching. This was surfaced as a data requirement early in Lassonde's onboarding.
**Why it matters:** If this is a universal matching requirement (not Lassonde-specific), the onboarding data collection template and the product matching pipeline both need to account for it by default. Treating it as a one-off creates technical debt.
**Evidence so far:** 1 customer (Lassonde via GeekSpeak). UPC-only matching failures are architecturally common in CPG retail data.
**Needs:** Confirm whether other DSA accounts required dual-ID matching or whether UPC alone was sufficient.
**Promotion trigger:** 2+ DSA accounts require client ID + retailer ID combination for accurate matching.

---

## H-06: Salsify/PIM integration reduces GeekSpeak's manual file maintenance burden — and may be a pattern for enterprise accounts
**Observation:** GeekSpeak asked about Salsify integration in the Apr 7 kickoff as an alternative to manually maintaining OneDrive reference files. DataWeave confirmed existing read-only Salsify integration. For accounts with PIM systems (Salsify, Akeneo, Plytex), source-of-truth delivery via PIM API eliminates the recurring file handoff process.
**Why it matters:** If enterprise CPG accounts consistently use PIMs, DataWeave should productise PIM integrations as first-class input channels for content audit reference data — not just OneDrive/manual delivery.
**Evidence so far:** 1 customer (GeekSpeak). Salsify integration already exists for other DataWeave customers.
**Needs:** Confirm whether other DSA content audit accounts use Salsify, Akeneo, or other PIMs as their source of truth.
**Promotion trigger:** 2+ content audit accounts request PIM-as-source-of-truth during onboarding.

---

## H-07: Multi-brand structure within single enabler account requires explicit COLAB scoping — not accounted for in standard onboarding
**Observation:** Lassonde has multiple brands (Oasis, Kiju confirmed in Apr 7 kickoff). Both sit within GeekSpeak's enabler account. Separate OneDrive folders per brand × retailer implies separate COLAB configs, separate SKU mappings, and potentially separate scorecard rollups per brand.
**Why it matters:** If the current enabler account model assumes single-brand accounts, multi-brand enablers create setup complexity that may not be captured in standard onboarding templates. Pricing (per brand vs per account), RBAC (which GeekSpeak editor sees which brand), and reporting (per-brand vs cross-brand rollup) all need explicit scoping.
**Evidence so far:** 1 customer (GeekSpeak/Lassonde — 2 brands confirmed). Standard onboarding materials not yet updated for multi-brand pattern.
**Needs:** Confirm whether Lactalis also had multiple brands under the same GeekSpeak account.
**Promotion trigger:** 2+ enabler accounts with 2+ brands each require separate COLAB configs within a single account.

---

## H-08: Scope refusal is a trust-destroying moment — how the system fails matters as much as whether it fails
**Observation (2026-05-14 — Ask Me Phase 2 PRD session):** The P0 hard-block on out-of-scope queries in Ask Me kills the highest-intent user action (exploring what the tool can do). The user who asks "What data sources do you have?" is not trying to break the system — they are trying to understand it. A hard block at this moment communicates "tool doesn't work" more strongly than any onboarding friction.
**Why it matters:** Applies beyond Ask Me — any AI feature in DataWeave's product suite that fails with a hard error rather than a graceful redirect will undercut the AI Defensibility OKR. "Recover-With-Humility" (acknowledge limit + offer 3 in-scope redirects) must be the default failure mode for all AI query interfaces.
**Evidence so far:** 1 live audit observation (Ask Me). Pattern consistent with enterprise AI UX research (Substack / design pattern literature).
**Needs:** Confirm after A3 ships — does redirect click-through rate validate that users accept the redirect rather than abandoning the session?
**Promotion trigger:** A3 redirect click-through rate ≥ 30% confirmed post-GA → promote to rules.md as a DataWeave AI product design principle.

## H-09: Cross-session memory (pins, digests, folder context) is the compounding value layer for enterprise AI tools
**Observation (2026-05-14 — Ask Me Phase 2 PRD):** 100+ unorganized chats and 9+ identical query re-runs per account in the live audit point to a single root cause: Ask Me is stateless across sessions. Each session starts cold. The primary barrier to daily dependency is not feature gaps in any single session — it is the absence of any mechanism for sessions to build on each other.
**Why it matters:** Enterprise users don't value AI tools that require re-explaining the same context every time. The compounding layer (folder instructions, pins, digests) is what transforms Ask Me from a "try it" tool into a "depend on it" tool. This pattern applies to any B2B AI feature DataWeave builds: the memory layer is the retention layer.
**Evidence so far:** 1 product audit (Ask Me). Consistent with general B2B AI product patterns (Substack: Context is Capital).
**Needs:** Confirm after C1/C2 ship — do weekly active pin users have higher session depth and lower churn than non-pin users?
**Promotion trigger:** 60-day post-GA data shows weekly pin users have ≥ 20% higher session depth vs. non-pin users → promote to rules.md.

---

## H-05: French-language content compliance is a Canadian market unlock, not a niche edge case
**Observation:** Provigo (Quebec, French-only) was added as a retailer for Lassonde, immediately surfacing the bilingual compliance question. Lassonde is Quebec-headquartered — French compliance is mandatory for them, not optional.
**Why it matters:** If DataWeave supports French content checking, it unlocks the full Canadian CPG market (all bilingual brands, Quebec-mandated packaging). If not, Canadian accounts will always be partially served.
**Evidence so far:** 1 customer (Lassonde). Engineering feasibility not confirmed as of Apr 29.
**Needs:** Engineering confirmation on French content checking. Check whether other Canadian DSA prospects have raised bilingual requirements.
**Promotion trigger:** Engineering confirms French support + 1 additional Canadian customer requires bilingual compliance.
