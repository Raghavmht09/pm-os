# customer-signals — knowledge
Last updated: 2026-05-14
Sources: Apr 7 kickoff (transcript-1.md), Apr 15 planning meeting (Notion), Apr 22 weekly connect 3 (Notion), Apr 29 implementation sync (Geekspeak DSA implementation weekly sync.md); Ask Me live audit 2026-05-13 (stage.dataweave.com); Ask Me Phase 2 PRD session 2026-05-14
Customer: GeekSpeak (Trisha, Ali, Katie, Suzanne) operating on behalf of Lassonde; Ask Me users (category managers, pricing analysts, retail intelligence leads) at Costco, Home Depot, Whirlpool [SIGNAL: live audit 2026-05-13]

---

## Content Status Classification — Confirmed 6-State Model

From Apr 22 weekly connect 3. Expanded beyond the PRD's original 3-state model:

| Status | Meaning |
|---|---|
| Correct | Attribute matches reference exactly |
| Correct - Slightly Modified | Acceptable variation — retailer formatting, truncation, minor wording |
| Correct - Not Available | Reference attribute exists but retailer doesn't display it |
| Incorrect | Attribute present but doesn't match reference |
| Incorrect - Not Available | Attribute missing and should be present |
| Incorrect - To Be Removed | Attribute present but should not be (e.g. outdated content) |

Override remembers the specific attribute state going forward — not just the product.

---

## Image Matching Rules (Retailer-Specific)

From Apr 22 weekly connect 3.

- **Image ordering is strict:** All out-of-order images = all classified as Incorrect. Not partial credit.
- **Walmart image cap:** Max 9 images (1 main + 8 additional).
- **Walmart column quirk:** Ingredients and Nutrition Facts Table (NFT) always appear duplicated in the Walmart additional images column. This is known and expected — do not flag as error.
- **Column J (recognition instruction) in Walmart data:** Ignore. Not part of scoring.
- Override for an image persists until manually changed by operator — override state is image-specific, not crawl-specific.

---

## Keyword Structure — Lassonde/GeekSpeak Configuration

From Apr 15 planning meeting and Apr 29 sync.

- Total SKU scope: 140+ SKUs tracked (Lassonde portfolio).
- Keyword volume: 5–7 keywords per SKU across retailers.
- Keyword overlap: Significant overlap across juice portfolio (e.g. "orange juice" used for multiple Oasis and Sun-Rype SKUs).
- **Keyword relevancy is SKU-specific:** Lactose-free keywords applied only to lactose-free products. Product-specific, not category-wide.
- Keyword guidance: ~50 keywords per brand per retailer recommended. Product-specific terms preferred (e.g. "orange juice 2L") over generic attributes ("juice", "beverage").
- **Per-retailer relevancy mandatory:** Same keyword ≠ same SKU list across retailers. Some Lassonde SKUs not listed on Walmart; keyword → SKU relevancy must be defined per retailer.

---

## SKU Identification — Dual-ID Requirement

From Apr 15 planning meeting.

- UPC alone is **not sufficient** for SKU matching. Need BOTH:
  - Client SKU ID (Lassonde internal)
  - Retailer SKU ID (retailer's internal product identifier)
- Without both IDs, cross-retailer matching breaks. Engineering must account for dual-key lookup in the product matching pipeline.

---

## Scope Decisions

From Apr 15 and Apr 29 meetings.

- **SoS scope:** Page-1 results only (not Top-100). Confirmed decision. Top-100 is available via commercial addendum, not default.
- **6,000+ SKU automated single-file delivery** confirmed as the target delivery format for keyword/SKU config files. OneDrive folder structure: separate folder per retailer.
- **Provigo** replaces Uber Eats as the Quebec retailer. French content checking requirement surfaced — feasibility TBD.
- **Oasis brand** confirmed as the first brand being set up in the system.

---

## Attribute Coverage by Retailer (Walmart)

From Apr 15 planning meeting.

Tracked attributes on Walmart:
- Title
- Description
- Bullet points
- Prep instructions
- Ingredients
- Nutrition Facts Table (NFT)
- Up to 9 images (1 main + 8 additional)
- Reviews (tracked, not scored for compliance)

Ingredients sourced from GS1 on Loblaws. Retailer-specific sourcing differences must be accounted for in content reference guidelines.

---

## Operational Format — Output Delivery

From Apr 22 and Apr 29 meetings.

- Output delivered via **OneDrive folder** shared with GeekSpeak.
- Separate subfolder per retailer within the delivery folder.
- Single consolidated file per retailer delivery cycle (not per-brand files).
- Backend data access required alongside the scorecard UI — GeekSpeak explicitly flagged they need raw data access, not just the dashboard view.

---

## Override Behaviour — Customer Expectations

From Apr 15 and Apr 22 meetings.

- Override must **persist until manually changed** — state does not reset on next crawl unless the underlying content changes.
- Override is expected to "remember" a specific image or attribute judgment across crawls.
- Customer expectation: if they mark something Correct-Slightly-Modified, it stays that way until they revisit it. This aligns with PRD state management logic (hash-based preservation).

---

## Calculation Methodology — Customer Concern

From Apr 15 planning meeting.

- GeekSpeak/Lassonde flagged potential **discrepancies in score calculation methodology** early in the engagement.
- Specific concern: how compliance percentage is calculated when some attributes are Not Available vs Incorrect.
- Action required: DataWeave to share calculation methodology documentation before go-live. No resolution documented in extracted notes.

---

## Aggregate Views — Standard Ask

From Apr 29 sync.

- GeekSpeak requested two aggregate SoS views before keyword data was even delivered:
  1. Keyword-level aggregation across all retailers
  2. Brand-level aggregation across all retailers and all keywords
- These are needed for account manager reporting and executive scorecards.
- Currently delivered via custom Tableau. Should be productised into DSA SoS module.

---

## SoS Metrics — Both Average Ranking AND Coverage Required

From Apr 7 kickoff.

- **Average ranking alone is misleading:** 1 product at rank 2 → avg rank = 2 (looks great). But if the product is always ranked 100, coverage is 100% — same misleading story.
- **Coverage alone is misleading:** 1 SKU present in 100% of results but always at position 100 = 100% coverage, terrible visibility.
- **Both metrics must be tracked together** and trended daily. Standard output format confirmed in Apr 7: average rank + coverage %, day-wise.
- Customer explicitly confirmed this format is what they need for trend analysis.

---

## SoS Zip Code Selection

From Apr 7 kickoff.

- One postal code per banner (standard). Location-specific SoS varies by postal code.
- GeekSpeak requested DataWeave run a **one-time multi-zip-code scan** to find the location with best SKU coverage per banner, then lock that in permanently.
- Logic: for Voila, scanning Toronto (finds 30/100 Lassonde SKUs) vs Montreal (finds 80/100) → Montreal selected. Not redone each cycle.
- Multiple locations possible via commercial addendum.

---

## Reference Content Update Mechanism

From Apr 7 kickoff.

- GeekSpeak provides reference images/copy via **OneDrive folder** organised by retailer.
- DataWeave pulls reference content from OneDrive **at crawl time** (monthly for content audit).
- No change log or email notification needed — system re-runs against latest OneDrive content automatically.
- Workflow: GeekSpeak/Suzanne updates OneDrive with new images or copy → DataWeave picks up on next scheduled crawl cycle.
- Jira desk available for change tracking if needed (DataWeave can onboard GeekSpeak team).

---

## Image Handling — URL vs File

From Apr 7 kickoff.

- DataWeave's comparison model normally requires **actual image files** (for computer vision matching), not just URLs.
- GeekSpeak asked if image URLs alone would suffice — DataWeave said they'd confirm in 1 day. Assumed resolved by Apr 15.
- Walmart and Loblaws image assets provided as URL files; actual image files also available from Walmart.
- Client is flexible on secondary image order as long as **primary image is correct**. DataWeave can enforce strict order if client specifies it — but strict order is more implementation effort.
- Simplified image tracking: "main image" + "additional images" — not categorised as lifestyle, infographic, etc. per retailer.

---

## Retailer-Specific Image Counts

From Apr 7 kickoff.

- **Walmart:** Up to 9 images (1 main + 8 additional).
- **Loblaws:** 6–7 images per product.
- Count varies by product — engineering must handle variable-length image lists.

---

## NFT and Ingredients — GS1 Sourcing on Loblaws

From Apr 7 kickoff.

- On Loblaws, **ingredients and NFT (Nutrition Facts Table) come from GS1 feed** — not from GeekSpeak.
- DataWeave tracks whether these attributes are correct / incorrect / not available.
- DataWeave is **not responsible for the content accuracy** — GeekSpeak/GS1 owns that. DataWeave only validates presence and match.
- This distinction matters for scorecard communication: a client cannot "fix" a GS1 discrepancy through override — it needs a GS1 correction upstream.

---

## Scorecard Calculation — Attribute-Instance Level

From Apr 7 kickoff (worked example).

- Compliance % calculated at **attribute instance level**, not product level.
- Example: 7 products × 5 additional images = 35 attribute instances. 24 correct → 96% compliance.
- Not-Available states: inclusion in denominator needs clarification (open question from Apr 7; calculation methodology concern re-surfaced Apr 15).
- Confirms scoring is averages of instances, not distinct products (aligns with digital-shelf R-06).

---

## Override Origin — Self-Service Required by Customer

From Apr 7 kickoff.

- DataWeave initially proposed: GeekSpeak marks everything as Incorrect → DataWeave internal team reviews → overwrites to "Correct - Slightly Modified."
- GeekSpeak pushed back: they want **self-service override**, not DataWeave-mediated review.
- This is the direct origin of the override feature requirement (F1 in PRD).
- GeekSpeak's view: "We will log it once and it stays the same every time the report is run until something changes."

---

## Source of Truth Integration — Salsify and Plytex

From Apr 7 kickoff.

- **Salsify:** DataWeave has existing read-only Salsify integration for some customers. If GeekSpeak/Lassonde provides read-only access, DataWeave can pull source-of-truth content directly instead of relying on OneDrive files.
- **Plytex (PIM):** GeekSpeak mentioned onboarding Kletics (which uses Plytex). DataWeave had not heard of Plytex but confirmed integration is possible if API endpoints provided. No timeline. Treat as future scope.
- Both are "integration-as-alternative-to-file-delivery" paths — reduce manual file maintenance burden on GeekSpeak team.

---

## Lassonde Brand Scope

From Apr 7 kickoff.

- **Oasis** — confirmed as first brand being set up. Has its own OneDrive folder per retailer.
- **Kiju** — second Lassonde brand. Separate OneDrive folder structure required.
- Engineering and COLAB setup must account for multi-brand structure within the same enabler account (GeekSpeak managing multiple Lassonde brands).

---

---

## Ask Me — Chat Interface Customer Signal Patterns (observed 2026-05-13–2026-05-14)

**Source:** Live audit of stage.dataweave.com + Ask Me Phase 2 PRD session

- **Query re-run signal:** 100+ unorganized chats in the live UI; users re-run identical queries 9+ times per session because no cross-session memory exists. This is the primary session-depth ceiling for Ask Me.
- **P0 scope refusal dead-end:** "What are different sources we have?" returns a hard block with zero redirect. Users who hit this are the highest-intent explorers (they are trying to understand the system) — abandoning them at this moment is the worst moment to fail.
- **No provenance trust:** Pricing analysts (Home Depot persona) have no way to validate data freshness or record count in a response. This is a direct friction point for enterprise buyers who must defend numbers to finance leadership.
- **Insight evaporation pattern:** No mechanism to save a specific number or chart from a session. Users screenshot responses or lose the data — reported informally. The absence of a save mechanism suppresses the "reference library" use case that would make Ask Me sticky.
- **Session artifact gap:** After 20+ minutes in Ask Me, users have nothing portable. No shareable summary for a VP, no cross-session insight board, no digest for weekly updates. This is the pattern that keeps Ask Me a "try it once" tool rather than a weekly workflow tool.
- **Comparison mode demand:** Pricing analysts run period-over-period and retailer-vs-retailer comparisons as a primary workflow (Q3 vs Q2 MAP compliance; Walmart vs Target assortment gap). Currently requires two separate queries + manual Excel diff — a known friction point.

---

## Implementation Timeline (Confirmed)

From Apr 7 kickoff.

- Standard setup (crawl config, product matching, first outputs): **~4 weeks** from receiving all required inputs.
- Custom dashboards and override feature: parallel track, additional 2–4 weeks.
- Weekly 30-min touchbase during build phase. Can reduce cadence once stable.
- Override implementation noted as "just needs implementation — not a problem" — not a new research problem, existing capability extension.
