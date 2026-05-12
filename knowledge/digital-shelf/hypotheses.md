# digital-shelf — hypotheses
Last updated: 2026-05-05
Sources: PRD, sync transcripts, product overview doc, product-portfolio.md

Patterns seen 1–2 times. Needs more data before promoting to rules.md.

---

## H-01: Enabler model as scalable GTM pattern for content audit
**Observation:** GeekSpeak operates DataWeave tooling on behalf of multiple CPG brands (Lactalis, Lassonde). They manage override actions, compliance reporting, and user access centrally for all their brand clients. A single GeekSpeak account effectively multiplies DataWeave's brand reach without DataWeave managing each brand individually.
**Why it matters:** If this model scales (GeekSpeak adds more brands to the platform), it's a force multiplier. One agency contract = N brand footprints. Pricing, seat allocation, and RBAC were all designed for this pattern.
**Evidence so far:** 1 confirmed enabler (GeekSpeak). Lactalis was the precedent; Lassonde productizes it.
**Needs:** 2+ more enabler accounts to confirm the pattern is repeatable and to identify what breaks at scale (e.g., cross-brand RBAC complexity, reporting aggregation across brands).
**Promotion trigger:** Second non-GeekSpeak enabler onboards using the same RBAC + override pattern.

---

## H-02: SoS aggregate views are a near-universal customer ask
**Observation:** In the Apr 29 sync, GeekSpeak immediately asked for two aggregate views — keyword-level aggregation across all retailers, and brand-level aggregation across all retailers and keywords — before the keyword data was even delivered. These felt like natural extensions of the per-keyword per-retailer view.
**Why it matters:** If most SoS customers make this ask, the aggregate views should be in the standard product, not a custom build. Current delivery: custom Tableau.
**Evidence so far:** 1 customer request (GeekSpeak/Lassonde). Lactalis had similar patterns (SoS tracking already live).
**Needs:** Confirm whether other SoS customers (Mars, Grupo Bimbo, Kellanova) also need aggregate views or request custom aggregation dashboards.
**Promotion trigger:** 3+ SoS accounts requesting multi-keyword or multi-retailer rollup views.

---

## H-03: Monthly content crawl cadence creates override backlog risk
**Observation:** With monthly crawl cadence, a batch of new Incorrect flags arrives once per month. If the GeekSpeak team can't process overrides quickly (e.g., new SKUs launched, retailer content refresh), overrides accumulate. The state management design (preserve override if content unchanged) helps, but the monthly batch processing pattern may create peaks in GeekSpeak's workload.
**Why it matters:** If override workload spikes monthly, customer satisfaction could drop even if the product works correctly. Need to understand whether customers prefer continuous override access or batch review.
**Evidence so far:** Observed pattern from GeekSpeak requirements (Apr 2026). Not yet validated post-go-live.
**Needs:** Post-launch data on override activity patterns — when during the month do overrides happen? Are they front-loaded after the crawl?
**Promotion trigger:** Consistent data showing override activity is concentrated in first 3 days after crawl.

---

## H-04: PDP crawl for enriched SoS context is a natural next capability
**Observation (from recent brainstorm):** SoS currently tracks rank and coverage from search results pages. It does not crawl the linked PDPs to understand WHY a SKU ranks where it does (e.g., is it because of better content, more reviews, sponsored placement?). Enriching SoS signals with PDP-level data (CQ score, review count, sponsored status) would enable causal analysis, not just rank tracking.
**Why it matters:** Connecting PDP quality to SoS rank would unlock a much richer story — "your rank dropped because your image count fell below 5, not because of a competitor action." This is also the data DSIM needs for content-to-rank attribution.
**Evidence so far:** Brainstorm discussion only. No customer explicitly requested this yet.
**Needs:** Customer validation — do performance marketing teams want this linkage in their workflow, or is the current rank + coverage sufficient?
**Promotion trigger:** 2+ customers explicitly request PDP-level context alongside SoS rank data.

---

## H-05: French-language content checking is an unlock for Quebec market expansion
**Observation:** Provigo (Quebec-only banner, French-only) was selected as the Uber Eats replacement. This immediately surfaced the question of whether DataWeave can check French-language content against a French source of truth. Currently only English content is being checked.
**Why it matters:** Canadian CPG brands with Quebec presence (especially food & beverage — juice, dairy, frozen foods) need bilingual content compliance. Lassonde is a Quebec-headquartered company; French compliance is not optional for them. If DataWeave can support French content checking, it unlocks the full Canadian market for DSA content audit.
**Evidence so far:** Single open question raised in Apr 29 sync. DataWeave team said they'd confirm feasibility.
**Needs:** Engineering confirmation of French content checking capability. Customer validation of whether bilingual content compliance is a recurring ask.
**Promotion trigger:** DataWeave confirms French content checking is live and a second Canadian customer requests it.

---

## H-06: Override reason codes feed a potential ML improvement loop
**Observation:** The PRD explicitly scopes a v2 initiative: override reason codes (OR-01 to OR-08) feed back to the semantics layer as signals. The semantics team (Suraj's team) can use these inputs to refine match scoring thresholds for specific variation types (e.g., "image marketing labels are always OR-01 and acceptable — stop penalising them"). This creates a human-in-the-loop feedback mechanism that improves scoring accuracy over time.
**Why it matters:** If this v2 loop works, it reduces the volume of overrides needed each month as the model learns. This is a differentiated capability — competitors with no override mechanism have no equivalent feedback loop.
**Evidence so far:** Design intent documented in PRD (Apr 2026). Not yet implemented.
**Needs:** v2 implementation + data showing reduction in monthly override volume after the feedback loop is active.
**Promotion trigger:** Measurable reduction in override volume 3 months after v2 feedback loop activation.

---

## H-07: "Correct - Slightly Modified" state will be the dominant override state
**Observation:** Most override use cases described by GeekSpeak are Incorrect → Correct-Slightly-Modified (acceptable variation, not a genuine error). True bidirectional overrides (Correct → Incorrect via score override for wrong product match) are edge cases.
**Why it matters:** If the majority of overrides are one-directional, the UX priority should be optimising that flow. The score override path (for wrong product matches) is more complex and used less often.
**Evidence so far:** Qualitative observation from transcript-1 where Ali described typical acceptable variations.
**Needs:** Post-launch override action data — ratio of label overrides vs score overrides.
**Promotion trigger:** 80%+ of overrides are label overrides (Incorrect → Correct-Slightly-Modified) across first 3 crawl cycles.
