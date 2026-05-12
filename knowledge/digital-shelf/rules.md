# digital-shelf — rules
Last updated: 2026-05-05
Sources: DSA_Product_Overview.docx, PRD, product-portfolio.md, transcripts

Confirmed patterns — applied by default in all DSA-related work.

---

## R-01: Veracite is the platform name. "Verisight" is wrong.
**Rule:** Always use "Veracite" when referring to DataWeave's internal content match management and spec management platform. "Verisight" appears in older documentation and is incorrect.
**Why confirmed:** Explicitly flagged and corrected in project CLAUDE.md and PRD.
**Apply to:** All PRDs, FRDs, GTM plans, customer-facing docs, Confluence pages. Correct it wherever you encounter it.

---

## R-02: Override is attribute-level, never product-level.
**Rule:** Any override requirement, design discussion, or requirement spec must enforce that override operates at the individual attribute level (per image, per text field). Product-level override is not supported and must not be proposed.
**Why confirmed:** Core design decision in PRD, driven by customer requirement (GeekSpeak). Attribute-level granularity allows compliance percentage to remain meaningful.
**Apply to:** Any new content audit feature, override extension, or reporting requirement. If a stakeholder asks for "product-level override," redirect to attribute-level and explain why.

---

## R-03: system_score is immutable. Override only changes display_enum.
**Rule:** The confidence score computed by the semantics algorithm (system_score) is never overwritten by user override. Override changes the display label (display_enum) or surfaces a user-supplied display score, but the original semantics score is always preserved in the data model.
**Why confirmed:** Core design decision in PRD. Preserving system_score enables future ML feedback loops and audit integrity — if overrides overwrote scores, the feedback mechanism to improve the semantics model would be corrupted.
**Apply to:** Any discussion of override data models, audit requirements, or semantics feedback loops. The system_score = ground truth from the model; display_enum = human-corrected view.

---

## R-04: Content audit crawl is monthly. SoS crawl is daily. These are not configurable per customer request without commercial discussion.
**Rule:** Content audit = monthly cadence (5th or 10th of month). Share of Search = daily crawl. These are the standard packaged cadences. Any request to change crawl frequency requires a commercial discussion (addendum to agreement), not an engineering task.
**Why confirmed:** Established in kickoff call (transcript-1), confirmed in PRD. Top-100 SoS tracking vs page-1 also has a commercial addendum path.
**Apply to:** Any customer request to increase content audit frequency, increase SoS crawl depth, or add locations. Route to commercial/pricing team before engineering.

---

## R-05: Lassonde is operated by GeekSpeak, not Lassonde directly. All platform interactions go through GeekSpeak.
**Rule:** Lassonde end-users do not have direct DataWeave platform access in this engagement. GeekSpeak is the operator. All override actions, user management, compliance reporting, and platform interactions go through GeekSpeak (Trisha, Ali, Katie, Suzanne). Do not design for or promise Lassonde-direct access without a commercial and scope change discussion.
**Why confirmed:** Explicitly scoped as Non-Goal in PRD. Governs who the DataWeave team communicates product questions to.
**Apply to:** Stakeholder mapping, feature design (who needs to use this?), access requests, reporting format discussions.

---

## R-06: DSA scores are averages of product instances (not distinct products). Geographic breadth affects scores.
**Rule:** When interpreting or presenting DSA scores, always factor in the number of tracked instances (products × locations). A brand with 200 zipcodes tracked will score differently from one tracked at 5 zipcodes for the same underlying product performance. Never compare two accounts' absolute scores without checking tracked dimensions.
**Why confirmed:** Explicitly documented in scoring model (product overview doc). Flagged as "PM Alert" in the DSA product overview.
**Apply to:** Any DSIM or DSA analysis, competitive benchmarking, customer reporting, OKR metric interpretation.

---

## R-07: Enabler accounts (agencies operating on behalf of brands) require RBAC + audit trail as non-negotiable features.
**Rule:** Any DSA engagement where an external agency/partner operates the platform on behalf of a brand (enabler model) requires: (a) role-based access control with at minimum Editor/Viewer split, (b) audit trail of all classification actions, (c) customer admin controlling seat allocation without DataWeave involvement. These are not optional features for enabler accounts — they are the minimum viable capability.
**Why confirmed:** Established as Must Have in the GeekSpeak/Lassonde PRD. Validated through the Lactalis → Lassonde precedent. Without RBAC + audit trail, the enabler cannot act on behalf of the brand with accountability.
**Apply to:** Any new enabler/agency onboarding. Any discussion of extending override functionality to new customer types.

---

## R-08: Match state vocabulary has three terms with distinct business implications. Use precisely.
**Rule:**
- **Matched** = tracked, score calculated. Normal state.
- **Unmatched** = product in catalogue, DataWeave couldn't find it. May be a DataWeave data quality issue — investigate before treating as a business event.
- **Delisted** = was previously matched, no longer live. Real business event — retailer pulled product or brand discontinued it.
Confusing Unmatched with Delisted leads to wrong operational responses. "Delisted" triggers brand/retailer relationship review; "Unmatched" triggers DataWeave data quality investigation.
**Why confirmed:** Documented in product overview as a critical distinction. Applies across all DSA modules and customer-facing reporting.
**Apply to:** All availability analysis, customer reporting, DSIM OOS analysis. If a customer reports a product "missing," first determine Unmatched vs Delisted before advising on next steps.

---

## R-09: COLAB file is the source of truth for every account's DSA configuration.
**Rule:** Before designing any feature that varies per account (keyword scope, content quality reference guidelines, discount buckets, module activation), check whether it's a COLAB-level config or a product-level default. COLAB defines: which brands/SKUs to track, which retailers/categories to crawl, keyword lists, content quality reference guidelines per retailer, discount bucket thresholds. Proposing a product-level change when the fix is a COLAB update is a scoping error.
**Why confirmed:** COLAB is the established account configuration mechanism for DSA. COLAB Studio exists to manage it. Every account-specific customer request should first be evaluated as "is this a COLAB config or a product feature?"
**Apply to:** Any customer-specific configuration request, any onboarding discussion, any PRD that references per-brand or per-retailer behaviour.

---

## R-10: Don't design for real-time. DSA is crawl-based; alerts are the real-time layer.
**Rule:** DSA operates on configurable crawl cadences (typically daily). It is not a real-time system. Any requirement for real-time shelf monitoring should be routed to the Alerts module (threshold-based, email notification). Designing a feature that implies real-time data will fail to meet expectations.
**Why confirmed:** Documented explicitly in product overview FAQ section. The Lactalis LU-704 ticket (request for higher frequency daily data for MMM) was rejected — this is a known gap.
**Apply to:** Customer requirements that include "real-time", "instant", "live dashboard." Redirect to alerts + daily cadence as the realistic SLA.

---

## R-11: Override reason codes are product-level, not customer-level. They apply across all brands.
**Rule:** The 8 override reason codes (OR-01 through OR-08) are defined at the DataWeave product level and applied uniformly across all brand accounts. Do not propose customer-specific or brand-specific reason code customisation as a v1 requirement — it creates maintenance complexity and inconsistent semantics feedback signals.
**Why confirmed:** Explicitly stated in PRD section 4.3.1. Reason code standardisation is what enables the v2 ML feedback loop to work across accounts.
**Apply to:** Any customer requesting custom override categories. Any PRD extending the override feature to new accounts.

---

## R-12: For SoS, keyword-to-SKU relevancy mapping is retailer-specific. Same keyword ≠ same product set across retailers.
**Rule:** When configuring or discussing Share of Search, always establish keyword-to-SKU relevancy per retailer, not globally. A keyword like "fruit juice" may have 20 relevant Lassonde SKUs on Loblaws but only 8 on Walmart (because not all SKUs are listed at all retailers). Non-relevant SKUs (products appearing in search results but not in the client's product list) are excluded from coverage calculations.
**Why confirmed:** Established in kickoff transcript (transcript-1) and confirmed in Apr 29 sync. The keyword file format GeekSpeak provides breaks down relevancy by retailer.
**Apply to:** Any SoS configuration, SoS dashboard requirement, SoS data model discussion, or new retailer expansion for SoS.

---

## R-13: Aggregate SoS views (cross-keyword, cross-retailer rollups) are always a customer deliverable, not an afterthought.
**Rule:** When scoping SoS dashboards, always include aggregate views in the initial scope: (a) keyword-level aggregation across all retailers, (b) brand-level aggregation across all retailers and all keywords. These are standard requests from customer-facing teams who need rollup numbers for executive reporting and brand health scorecards.
**Why confirmed:** Requested by GeekSpeak in the first implementation sync (Apr 29). DataWeave team confirmed aggregation is feasible and not difficult. Confirmed as standard need based on the way SoS data is consumed by account managers.
**Apply to:** Any new SoS onboarding, any SoS dashboard spec, any customer asking "what does Lassonde's overall SoS look like across Canada?"
