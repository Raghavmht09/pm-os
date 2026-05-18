# customer-signals — rules
Last updated: 2026-05-06
Sources: GeekSpeak/Lassonde engagement (Apr 7–Apr 29, 2026) — kickoff, planning, weekly syncs

Confirmed patterns — applied by default in all customer-signal work.

---

## R-01: Override persistence is a non-negotiable customer expectation — not a nice-to-have.
**Rule:** Customers expect override state to persist until they manually change it. Override must survive crawl cycles unless the underlying content changes. "Override resets on crawl" is a deal-breaker for operators like GeekSpeak who process overrides monthly and cannot re-review the same attributes every cycle.
**Why confirmed:** Explicitly stated in Apr 15 planning meeting and consistent with PRD state management design (hash-based preservation). GeekSpeak's entire workflow depends on this.
**Apply to:** Any PRD or FRD touching override behaviour, any infrastructure change to the crawl pipeline, any discussion of override TTL or expiry policies.

---

## R-02: Keyword-to-SKU relevancy must be defined per retailer — never globally.
**Rule:** A keyword may map to different SKU sets across retailers. Define and validate keyword → SKU relevancy independently for each retailer. Same keyword ≠ same product set across Walmart, Loblaws, Provigo.
**Why confirmed:** Confirmed in Apr 29 sync. Documented in digital-shelf rules.md as R-12. Repeated here because it surfaces in customer onboarding conversations, not just product design.
**Apply to:** Any SoS onboarding data collection, keyword file format specs, retailer expansion conversations.

---

## R-03: The 6-state content status model is the confirmed classification vocabulary. Do not use a reduced set.
**Rule:** Content classification uses exactly 6 states: Correct / Correct-Slightly-Modified / Correct-Not-Available / Incorrect / Incorrect-Not-Available / Incorrect-To-Be-Remove. Do not collapse into 3 states (Correct/Incorrect/N/A) in customer-facing reporting, data exports, or internal tooling.
**Why confirmed:** Expanded from Apr 22 weekly connect 3. GeekSpeak requires granularity to distinguish acceptable variation from genuine error, and to identify content that should be removed vs content that is simply missing.
**Apply to:** All content audit scorecard designs, data export schemas, override UI labels, reporting templates.

---

## R-04: Image ordering errors are total, not partial — do not score per-image when ordering is wrong.
**Rule:** If retailer image order does not match reference image order, the entire image attribute set is Incorrect. There is no partial credit for "some images in the right position." This is the confirmed scoring rule for the GeekSpeak/Lassonde engagement.
**Why confirmed:** Explicitly confirmed in Apr 22 weekly connect 3.
**Apply to:** Content audit scoring logic, image compliance calculation, any PRD extending image analysis to new retailers or new SKU types. If a customer asks for partial credit on image ordering, this is a product change request — route to roadmap discussion.

---

## R-05: Customers require calculation methodology documentation before go-live — not after.
**Rule:** Provide a written explanation of how compliance scores are calculated (especially how Not-Available states factor into percentage) before the customer sees their first scorecard. Waiting for them to ask after go-live creates distrust that is hard to reverse.
**Why confirmed:** GeekSpeak flagged discrepancies in Apr 15 planning call — before any data was delivered. Pre-launch concern = pre-launch mitigation required.
**Apply to:** All new DSA account onboarding. Include methodology documentation as a checklist item before first data delivery. CS team should own delivery of this document.

---

## R-06: Aggregate SoS views (cross-keyword, cross-retailer) must be in scope from day one — not a follow-up request.
**Rule:** Always include in initial SoS delivery: (1) keyword-level aggregation across retailers, (2) brand-level aggregation across all keywords and retailers. Do not scope these as phase 2 or follow-up requests.
**Why confirmed:** GeekSpeak requested these in Apr 29 sync before keyword data was even delivered. Consistent with how SoS data is consumed for account management and executive reporting. Also documented as R-13 in digital-shelf/rules.md.
**Apply to:** SoS dashboard specs, SoS onboarding scope, any new SoS customer launch.
