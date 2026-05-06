# PRD — GeekSpeak × Lassonde: Content Audit & Override Functionality

| Field | Value |
|---|---|
| **Author** | Raghav Mehta |
| **Date** | 2026-04-16 |
| **Status** | Draft v1.0 |
| **Stakeholders** | Vaibhav Khaparde (Product), Arun Kumar T (Eng Lead), Sada, Sanket, Pandu (Eng), Rohitha (CSM), Lily (Delivery), Baghi (CS) |
| **Version** | 1.0 |

---

## 1. Problem Statement

Brands selling through Canadian retailers cannot validate at scale whether their product content is displayed correctly on retailer PDPs. DataWeave's automated content matching system produces false positives and false negatives — content that is effectively acceptable gets flagged as incorrect, and there is no mechanism for an enabler (GeekSpeak) to correct those classifications without re-running the entire pipeline.

Three structural gaps exist today:

1. **No override mechanism** — once the system scores an attribute as Incorrect, there is no user-facing way to reclassify it as acceptable. GeekSpeak cannot act on behalf of Lassonde to reflect ground truth.
2. **No state management** — every monthly crawl overwrites previous results. User corrections made between crawls are lost. There is no memory of prior human decisions.
3. **No access control or audit trail** — all users have identical permissions. No log exists of who changed what, making accountability and dispute resolution impossible.

---

## 2. Problem Space & Context

### 2.1 Customer Context

**GeekSpeak Commerce** is a CPG agency/enabler that manages digital shelf operations for brands. They are onboarding **Lassonde** (juice & beverages, ~200-300 SKUs) onto DataWeave's DSA platform. GeekSpeak acts as the operator of the DataWeave tooling on Lassonde's behalf.

This is not the first shared engagement. GeekSpeak manages the Lactalis account on DataWeave and is familiar with the platform. The Lassonde implementation establishes a repeatable template for future GeekSpeak-managed brands.

### 2.2 Platform Context

The content audit capability within DSA is powered by **Veracite** — DataWeave's internal platform for specification management, configuration management, match management, and QA. Veracite is used by internal QA teams today to validate whether crawled product data (images + text attributes) matches the reference content supplied by the brand.

This project extends Veracite's capabilities so that **external enablers** (GeekSpeak) can perform the same validation role previously reserved for internal QA — with appropriate guardrails via RBAC and audit logging.

### 2.3 Existing Precedent

The Lactalis implementation provides the closest prior art:
- Same GeekSpeak team, same DataWeave platform
- Share of Search already live (top-100 tracking, daily crawl)
- Content audit manually validated by Varun + Lily (one-time POC; not productized)

The Lassonde project productizes what was done manually for Lactalis.

### 2.4 Two Workstreams

| Workstream | Type | Crawl Cadence | Key Output |
|---|---|---|---|
| Share of Search (SoS) | Standard DSA feature | Daily | Average ranking + coverage % per keyword per banner |
| Content Quality Audit | New feature (override required) | Monthly | Compliance scorecard + baseline resource file per retailer |

---

## 3. Goals & Non-Goals

### Goals
- Enable GeekSpeak to override automated content match classifications at the attribute level
- Preserve user override state across crawl cycles when underlying content has not changed
- Implement role-based access control so override permissions are controlled by the customer admin
- Provide a full audit log of every override action for accountability
- Deliver the Share of Search workstream using existing DSA infrastructure
- Establish a reusable, configuration-driven override framework applicable to future customers

### Non-Goals
- This PRD does not cover multi-retailer expansion beyond the 6 confirmed Canadian banners for SoS and the 5+ banners for content audit
- Lassonde end-users are **not** given direct platform access in this engagement; GeekSpeak is the operator
- Plytex PIM API integration is **out of scope** for this release; OneDrive is the interim content input mechanism
- Automation of the score recalculation feedback loop to the semantics algorithm is a **v2 item**; the vanilla state management approach is in scope for v1
- DataWeave does not manage seat allocation or user creation; that is the customer admin's responsibility

---

## 4. Key Requirements

### 4.1 Workstream 1 — Share of Search

| Req ID | Requirement | Priority |
|---|---|---|
| SOS-01 | System crawls 6 retailer banners daily: Walmart CA, Loblaws, Real Canadian Superstore, No Frills, Voila, Metro, Maxi | Must Have |
| SOS-02 | 50 keywords per banner (300 total); keyword-to-SKU relevancy mapping is retailer-specific | Must Have |
| SOS-03 | Each keyword tracks both Lassonde Brand SKUID and Retailer SKUID | Must Have |
| SOS-04 | Tracking scope: page 1 results per banner (typically 20-40 products). Top-100 tracking is a commercial addendum item. | Must Have |
| SOS-05 | One postal code per banner for location. DataWeave runs an initial multi-location test to identify optimal coverage for Lassonde SKUs before locking in the final postal code. | Must Have |
| SOS-06 | Output metrics per keyword per banner: (a) Average Ranking and (b) Coverage Percentage | Must Have |
| SOS-07 | Native DSA dashboard set up immediately to avoid data loss; custom Tableau dashboards built in parallel | Must Have |
| SOS-08 | Uber Eats is removed from the banner list. GeekSpeak to confirm replacement 6th banner before setup begins. | Blocker (input required) |

### 4.2 Workstream 2 — Content Quality Audit

| Req ID | Requirement | Priority |
|---|---|---|
| CAU-01 | Monthly crawl on 5th or 10th of each month per agreed cadence | Must Have |
| CAU-02 | Retailers covered: Metro, Loblaws, Walmart CA, Save On Foods, Giant Tiger (additional banners per brand's retailer coverage) | Must Have |
| CAU-03 | Attributes audited per SKU per retailer: primary image, secondary images (up to 6-7 depending on retailer), product title (EN + FR), product description (EN + FR), feature bullets, ingredients (text), Nutrition Facts Table / NFT (sourced via GS1 — tracked but not GeekSpeak's responsibility to supply), preparation instructions | Must Have |
| CAU-04 | Scoring: confidence score 0–100 per attribute generated by the semantics algorithm | Must Have |
| CAU-05 | Score-to-enum mapping (see Section 4.3) applied to produce human-readable classification | Must Have |
| CAU-06 | Two output files delivered per brand per crawl cycle: (a) Brand-level Scorecard and (b) Retailer-level Baseline Resource File | Must Have |
| CAU-07 | GeekSpeak supplies reference content via OneDrive. Updated reference images/copy provided by GeekSpeak triggers re-evaluation on next crawl. | Must Have |
| CAU-08 | System ingests both image files and image URLs depending on retailer format. Walmart provides both; Loblaws provides URLs. | Must Have |

### 4.3 F1 — Override Functionality

**Design decision:** Override operates in two modes. (a) **Label override** — changes the displayed label/tag only; the semantics-computed score is unchanged. (b) **Score override** — user supplies a replacement confidence score; the UI reflects the new score and derives the new label from the threshold config. In both cases the original semantics-computed score is preserved in the data model (`system_score`) and never overwritten — only the displayed value changes.

| Req ID | Requirement | Priority |
|---|---|---|
| OVR-01 | Override is enabled/disabled at the **brand instance level** via configuration in Veracite. Not all brands have override enabled by default. | Must Have |
| OVR-02 | Override operates at the **attribute level**: primary image, secondary images (group), title, description, bullets, ingredients, NFT, prep instructions. Not at the product level. | Must Have |
| OVR-03 | Two display enums: `Correct` and `Incorrect`. A third display state `Correct - Slightly Modified` is shown when a user has overridden an `Incorrect` attribute to `Correct`. | Must Have |
| OVR-04 | Score-to-enum mapping (configurable at brand level): 80–100 → `Correct`; 0–80 → `Incorrect`. The 50–80 range is the typical override-eligible band. | Must Have |
| OVR-05 | Override is **bidirectional**: (a) `Incorrect` → `Correct - Slightly Modified` for cases where content is acceptable; (b) `Correct` → lower confidence score (which maps to `Incorrect`) for cases where the system identified the wrong product entirely. Example: system scores at 92.50 (Correct) but the match is for the wrong product — user overrides score to 30; UI updates to Incorrect. The underlying system score is updated on the UI to reflect the user-supplied value; the semantics-computed score is preserved separately in the data model. | Must Have |
| OVR-06 | Override reason field is **optional**. User may select a reason from a predefined dropdown of enums (OR-01–OR-08, see Section 4.3.1) before confirming the override. When OR-08 (Other) is selected, a free-text field is surfaced and **encouraged but not enforced** — the user can submit without entering text. | Must Have |
| OVR-07 | Secondary image override supports **two independent levels**: (a) **Group override** — overrides all secondary images as a group; (b) **Per-image override** — overrides an individual secondary image independently. Both are available in v1. Group override and per-image override do not interfere with each other; a per-image override on image #2 does not affect the group-level state of the remaining images. | Must Have |
| OVR-08 | The aggregate scorecard percentage updates to reflect the override on the next report refresh cycle. | Must Have |

#### 4.3.1 Override Reason Buckets (Predefined)

These represent standard acceptable variation patterns for CPG/FMCG brands on retailer PDPs. Defined at the DataWeave product level; applied across all brands.

| Reason Code | Label | Description |
|---|---|---|
| OR-01 | Image marketing label | Retailer has added a promotional badge, price sticker, "New!", or sale overlay onto the brand image |
| OR-02 | Image typography/topology | Slight tilt, rotation, crop, or lighting difference; product is recognizably the same |
| OR-03 | Text rephrasing | Keywords reordered or synonyms used; core meaning and key claims are preserved |
| OR-04 | Regional/language adaptation | Bilingual (EN+FR) variation, "Made in Canada" added/removed, regional compliance text added by retailer |
| OR-05 | Character/formatting difference | Special characters (™, ®, &), punctuation, capitalization, or encoding variation |
| OR-06 | Truncation | Retailer character limit has shortened description; core content is present |
| OR-07 | Secondary image ordering | Secondary images are present and correct but displayed in a different sequence than reference |
| OR-08 | Other | Any other acceptable variation not covered above; free-text explanation is surfaced and encouraged but not required |

> **Note for future optimization (v2):** Override reason codes feed back to the semantics layer as a signal. The semantics team (Suraj's team) can use these inputs to refine match scoring thresholds for specific variation types, reducing false negative rates over time without requiring manual overrides. This requires a design spec with semantics team before implementation.

### 4.4 F2 — State Management

**Vanilla solution (v1 scope):**

| Req ID | Requirement | Priority |
|---|---|---|
| STM-01 | On each crawl cycle, before re-scoring: system checks whether (a) the reference attribute and (b) the crawled attribute have both changed since the last crawl, using the existing version comparison service. | Must Have |
| STM-02 | If **neither** reference nor crawled attribute has changed → retain the last user override action. Do not re-run semantics scoring for that attribute. | Must Have |
| STM-03 | If **either** the reference attribute OR the crawled attribute has changed → discard the override, re-run the semantics algorithm, and reset the attribute to the new system-computed enum. | Must Have |
| STM-04 | The UI displays **both** values per attribute row: (a) Current system confidence score **and** correctness label displayed inline; (b) Last user action with timestamp surfaced via a **ⓘ icon tooltip** — hovering shows actor name, action taken, and UTC timestamp. The tooltip is visible on any attribute that has a user override history. Attributes with no override history show no ⓘ icon. | Must Have |
| STM-05 | User overrides performed between monthly crawls are preserved in the system and reflected in the next report refresh. They are not lost when a refresh occurs mid-cycle. | Must Have |

**Optimized solution (v2 scope — not in this PRD):**
- Override reason inputs (from Section 4.3.1) are passed to the semantics service as configuration signals
- Semantics algorithm incorporates these signals to avoid re-penalizing known-acceptable variation types
- QA team's manual review loop is informed by the override reason history to align scoring with human ground truth

### 4.5 F3 — Role-Based Access Control (RBAC)

| Req ID | Requirement | Priority |
|---|---|---|
| RBAC-01 | Three roles: `Admin`, `Editor`, `Viewer` | Must Have |
| RBAC-02 | `Editor`: can view all dashboards and perform override actions | Must Have |
| RBAC-03 | `Viewer`: can view dashboards only. Override UI elements are **completely hidden** (not just disabled) | Must Have |
| RBAC-04 | `Admin`: can view + edit + manage users (create users, assign roles, allocate seats). User management is controlled by the **customer admin** (GeekSpeak), not DataWeave | Must Have |
| RBAC-05 | Granular access restrictions: a user can be restricted to specific retailers (e.g., Walmart CA only) or specific product categories | Must Have |
| RBAC-06 | Seat-based licensing: DataWeave allocates N seats to the customer account. Customer admin allocates those seats to individual users. DataWeave does not manage individual user creation. | Must Have |
| RBAC-07 | Role changes take effect immediately. If a user is demoted from Editor to Viewer mid-session, override UI is hidden on the next page load. | Must Have |

### 4.6 F4 — Audit Logging

| Req ID | Requirement | Priority |
|---|---|---|
| AUD-01 | Every override action is logged with: actor (user identity), timestamp (UTC), SKU ID, retailer, attribute affected, old value (enum), new value (enum), override reason code, and free-text (if OR-08) | Must Have |
| AUD-02 | Audit log is immutable — entries cannot be edited or deleted by any user including Admin | Must Have |
| AUD-03 | Audit retrieval UI: input a SKU ID → display paginated table of all override actions for that SKU across all attributes, actors, and timestamps | Must Have |
| AUD-04 | Audit log is accessible to `Admin` role users only | Must Have |
| AUD-05 | Audit log must be exportable (CSV minimum) | Should Have |

### 4.7 F5 — Report Refresh & Dashboard Pipeline

| Req ID | Requirement | Priority |
|---|---|---|
| RPT-01 | BA team can refresh the content audit report at configurable cadence: daily, every 3 days, weekly, or monthly | Must Have |
| RPT-02 | When a user performs an override between scheduled crawls, the dashboard reflects the change on the next refresh cycle (not in real-time) | Must Have |
| RPT-03 | Native DSA dashboard is set up immediately upon receiving all inputs to prevent data loss | Must Have |
| RPT-04 | Phased delivery: SoS native dashboard first → Content Quality native dashboard → Custom Tableau dashboards in parallel | Must Have |
| RPT-05 | Two output files generated per brand per crawl cycle (see Section 5.3) | Must Have |
| RPT-06 | Both high-level scorecard AND full backend detail data access must be provided to GeekSpeak | Must Have |

### 4.8 F6 — N×N Secondary Image Matching

| Req ID | Requirement | Priority |
|---|---|---|
| IMG-01 | Automated N×N brute-force pairing module: for each reference secondary image, compare against all actual (crawled) secondary images; select highest-confidence pair | Must Have |
| IMG-02 | Pipeline includes a flag at the account level indicating whether N×N pairing is required for that account | Must Have |
| IMG-03 | Pipeline outputs an additional key containing the final rearranged image pairs for downstream processing | Must Have |
| IMG-04 | System handles edge cases: reference exists but no actual crawled match; actual exists but no reference provided | Must Have |
| IMG-05 | Image classification types (front, back, lifestyle, ingredients, infographic) are predefined at the **account/brand level** in Veracite configuration. Lassonde image types to be confirmed with GeekSpeak before go-live. | Must Have |
| IMG-06 | N×N module built by Suraj's team (Semantics). Timeline: 3 weeks from start date. | Dependency |

---

## 5. User Stories

### 5.1 Content Override

**US-01 — Editor overrides an incorrect attribute**
As a GeekSpeak Editor, I want to mark a system-flagged "Incorrect" product title as "Correct - Slightly Modified" and select the reason (text rephrasing), so that Lassonde's compliance score reflects the actual quality of content displayed on the retailer page.

*Acceptance criteria:*
- Override is available on any attribute regardless of current enum (bidirectional)
- Reason selector (dropdown) is visible but optional; OR-08 surfaces a free-text field that is encouraged, not enforced
- After confirmation: attribute displays `Correct - Slightly Modified`; underlying score is unchanged and visible in detail view
- Override is logged in audit trail immediately

**US-02 — Viewer cannot access override**
As a GeekSpeak Viewer, I see the compliance scorecard and attribute detail page with no override button or dropdown visible, so that I cannot accidentally modify classifications I am not authorized to change.

*Acceptance criteria:*
- Override button/UI element is completely absent for Viewer role (not greyed out)
- Viewer can see the `Correct - Slightly Modified` label and the timestamp of the last override

**US-03 — Override persists across crawl cycle**
As a GeekSpeak Editor, when I override an attribute and neither the reference nor the crawled content changes in the next monthly crawl, I expect the override to still be in place, so that I do not have to re-do the same corrections every month.

*Acceptance criteria:*
- Post-crawl: overridden attribute retains `Correct - Slightly Modified` if no content change detected
- System log shows: "Override retained — no change detected in reference or crawled attribute since [date]"

**US-04 — Override is reset when content changes**
As a GeekSpeak Editor, when the reference content is updated and a new crawl runs, I expect the previously overridden attribute to be re-evaluated from scratch, so that new content gets a fresh, accurate score.

*Acceptance criteria:*
- Post-crawl with detected content change: attribute reverts to new system-computed enum
- UI shows new score and clears the old override label
- Audit log records: "Override cleared — content change detected on [date]"

### 5.2 Share of Search

**US-05 — Tracking keyword ranking**
As a GeekSpeak Account Manager (Suzanne), I want to see the daily ranking position of Lassonde SKUs for each keyword on each banner, so that I can track which keywords are driving visibility and where we need to act.

*Acceptance criteria:*
- Daily data point per keyword per banner showing: average rank and coverage %
- Trend chart showing movement over configurable time window
- Exportable data for custom Tableau reporting

### 5.3 Reporting

**US-06 — Scorecard view**
As a GeekSpeak Account Manager, I want to see a brand-level content compliance scorecard showing percentage correct per attribute across all Lassonde SKUs, so that I can report to Lassonde on overall digital shelf health.

*Acceptance criteria:*
- Scorecard shows: attribute name, total SKUs tracked, # correct, # incorrect, # correct-slightly-modified, compliance %
- Filters: by retailer, by category
- Score updates after each crawl and each manual refresh

**US-07 — Backend detail access**
As a GeekSpeak Account Manager, I want to drill into the backend file showing individual SKU-level attribute scores for each retailer, so that I can identify the specific products and attributes that need attention and take action.

*Acceptance criteria:*
- Full baseline resource file accessible via download or in-platform drill-down
- Columns: Brand SKUID, Retailer SKUID, retailer name, attribute name, system score, display enum, last user action, last action timestamp
- Sub-sheets by retailer (one tab per retailer in export)

### 5.4 Administration

**US-08 — Customer admin manages seats**
As a GeekSpeak Admin, I want to create users, assign Editor or Viewer roles, restrict users to specific retailers or categories, and revoke access — without involving the DataWeave team — so that I control who sees and acts on Lassonde's data.

*Acceptance criteria:*
- Admin UI: user list, create user, assign role, set retailer/category access scope, deactivate user
- Changes take effect immediately
- Seat counter visible: N seats used / N seats total

**US-09 — Audit retrieval**
As a GeekSpeak Admin, I want to search by SKU ID and see a complete chronological table of every override action performed on that SKU, including who did it and why, so that I can investigate disputes or review change history.

*Acceptance criteria:*
- Audit retrieval: input SKU ID → paginated table of actions
- Columns: timestamp, actor, attribute, old value, new value, reason code, free-text (if any)
- Exportable to CSV

---

## 6. Technical Specifications

### 6.1 Override Data Model

```
OverrideRecord {
  id:               UUID
  sku_id:           string          // Brand SKUID
  retailer_id:      string
  attribute:        enum [primary_image, secondary_images, title, description,
                         bullets, ingredients, nft, prep_instructions]
  system_score:     float           // 0-100, never modified by override
  system_enum:      enum [correct, incorrect]
  display_enum:     enum [correct, incorrect, correct_slightly_modified]
  override_by:      user_id
  override_at:      timestamp (UTC)
  reason_code:      enum [OR-01 … OR-08]
  reason_free_text: string | null   // Required if reason_code = OR-08
  is_active:        boolean         // False if cleared by content change
  cleared_at:       timestamp | null
  cleared_reason:   enum [reference_changed, crawled_changed] | null
}
```

### 6.2 State Management Logic

```
On each crawl cycle for each (sku, retailer, attribute):
  1. Fetch: current_reference_hash, current_crawled_hash
  2. Fetch: last_reference_hash, last_crawled_hash (from previous cycle)
  3. If current_reference_hash == last_reference_hash
     AND current_crawled_hash == last_crawled_hash:
       → No content change. If active OverrideRecord exists → retain it.
         Run semantics for informational score update only.
  4. If either hash has changed:
       → Content change detected.
         Re-run semantics algorithm → compute new system_score + system_enum.
         If active OverrideRecord exists → set is_active = false, cleared_at = now,
         cleared_reason = [reference_changed | crawled_changed].
         New display_enum = new system_enum.
```

### 6.3 Score-to-Enum Configuration (per brand instance)

```
BrandScoreConfig {
  brand_id:          string
  correct_min:       int    // default: 80
  correct_max:       int    // default: 100
  incorrect_min:     int    // default: 0
  incorrect_max:     int    // default: 79
  override_enabled:  boolean
  override_attributes: list[attribute_enum]  // which attributes can be overridden
}
```

### 6.4 N×N Image Pairing Pipeline

```
Input payload per SKU per retailer:
  - reference_images: list[{image_id, url, classification}]  // sorted by rank
  - actual_images:    list[{image_id, url}]                   // unsorted
  - n_x_n_flag:       boolean  // true for accounts requiring N×N pairing

If n_x_n_flag = true:
  For each reference_image:
    Compare against all actual_images using semantics similarity service
    Select highest-confidence pair
    Output: rearranged_pairs: list[{ref_image_id, actual_image_id, confidence_score}]

Edge cases:
  - reference exists, no actual match found → score = 0, enum = incorrect, status = not_found
  - actual exists, no reference → excluded from scoring, flagged as unmatched_actual
```

### 6.5 RBAC Data Model

```
User {
  id, email, name, role: enum[admin, editor, viewer]
  retailer_scope: list[retailer_id] | null  // null = all retailers
  category_scope: list[category_id] | null  // null = all categories
  seat_allocation: FK → Account.seats
  is_active: boolean
}

Permission matrix:
  Action                  | Admin | Editor | Viewer
  ----------------------- | ----- | ------ | ------
  View dashboards         |  ✓    |  ✓     |  ✓
  Override attributes     |  ✓    |  ✓     |  ✗
  View audit log          |  ✓    |  ✗     |  ✗
  Export audit log        |  ✓    |  ✗     |  ✗
  Create/manage users     |  ✓    |  ✗     |  ✗
```

### 6.6 Pipeline Data Flow

```
[GeekSpeak OneDrive]
       ↓ reference content (images + copy)
[Veracite / Ingestion]
       ↓ configuration + reference data
[Crawler]
       ↓ crawled PDP data (images + text)
[Product Engineering — Pipeline]
       ↓ Kafka message per SKU per attribute
[Semantics Service]
       ↓ confidence score + system enum per attribute
[Override State Engine]  ← checks version comparison service
       ↓ final display enum (applying state management)
[Analysis Layer / BA]
       ↓ S3 data
[Tableau / Native Dashboard]
       ↓ outputs
[GeekSpeak: Scorecard + Baseline Resource File]
```

### 6.7 Output File Specifications

**File 1 — Brand-Level Scorecard**
- Format: Excel / CSV
- Granularity: One row per attribute per retailer
- Columns: Retailer, Attribute, Total SKUs, # Correct, # Incorrect, # Correct-Slightly-Modified, Compliance %, Last Crawl Date

**File 2 — Retailer-Level Baseline Resource File**
- Format: Excel (multi-sheet)
- Granularity: One sheet per retailer; one row per SKU per attribute
- Columns: Brand SKUID, Retailer SKUID, UPC, Retailer Name, Attribute, Reference Value (URL/text), Crawled Value (URL/text), System Score, Display Enum, Last Override By, Last Override At, Override Reason

### 6.8 Integration Points

| System | Role |
|---|---|
| Veracite | Configuration + spec management; match management source for reference-actual pairs |
| Semantics Service (Suraj's team) | Confidence scoring for images and text; N×N pairing module |
| Version Comparison Service (existing) | Detects hash change between current and previous version of reference/crawled attributes |
| Kafka | Message bus between pipeline stages |
| S3 | Data handoff between Product Engineering and BA layer |
| Tableau | Custom dashboard rendering for GeekSpeak |
| OneDrive | Reference content input from GeekSpeak |

---

## 7. Edge Cases

| # | Scenario | Expected Behaviour |
|---|---|---|
| EC-01 | User overrides attribute; reference content updates before next crawl | Next crawl detects reference change → override cleared → re-scored from scratch. UI shows new enum + audit log records "cleared — reference changed" |
| EC-02 | Two editors override the same attribute simultaneously | Last write wins. Audit log records both actions. Admin can review conflict history. |
| EC-03 | Reference content provided but no crawled data found for a SKU on a given retailer | Attribute marked as `Not Available`. Not scored. Not eligible for override. Displayed distinctly from `Incorrect`. |
| EC-04 | Score is exactly 80 | Maps to `Incorrect` (boundary condition: correct_min = 80 means 80 is the floor of correct; 79.x rounds down to `Incorrect`). [OPEN: confirm boundary inclusion with team — is 80 Correct or Incorrect?] |
| EC-05 | Image URL provided but file is inaccessible at crawl time | Attribute flagged as `Not Available`. Separate flag in backend: `url_fetch_error = true`. Not penalized in compliance score. |
| EC-06 | User role changed from Editor to Viewer mid-session | Override UI hidden on next page load / navigation. In-progress override that has not been submitted is lost. |
| EC-07 | Crawl fails entirely for one retailer in a cycle | Other retailers' scores are published. Failed retailer shows last-known data with `[Stale — crawl failed on {date}]` flag. |
| EC-08 | A SKU is delisted from a retailer | SKU appears in the output file with status `Delisted` for that retailer. Overrides for that SKU+retailer combination are archived, not deleted. |
| EC-09 | N×N pairing: reference secondary image count > actual secondary image count | Each reference image is paired with its best actual match. Unmatched references score 0. Overall secondary image group score is averaged across all reference images. |
| EC-10 | Secondary image group override applied; individual image within the group later changes | Content change detected at the group level → group override is cleared. All images within the group are re-scored. |
| EC-11 | Same keyword mapped to different relevant SKUs on different banners | Expected behaviour — retailer-specific relevancy mapping is the design. No conflict. |

---

## 8. Timeline & Milestones

| Phase | Scope | Owner | Target |
|---|---|---|---|
| Phase 1 | Native DSA dashboard + SoS setup (crawl config, keyword mapping, postal code selection) | Engineering + Delivery | Week 1-2 |
| Phase 2 | N×N secondary image pairing module | Suraj's team (Semantics) | Week 1-3 (parallel) |
| Phase 3 | Override functionality (F1) + State Management (F2) | Product Engineering | Week 2-4 |
| Phase 4 | RBAC (F3) + Audit Logging (F4) | Product Engineering | Week 3-5 |
| Phase 5 | Custom Tableau dashboards (SoS first, then Content Quality) | BA team | Week 3-6 |
| Phase 6 | UAT with GeekSpeak + go-live | All teams | Week 6 |

**Standard setup baseline:** ~4 weeks from receipt of all inputs from GeekSpeak.
**Weekly 30-minute touchbase** during setup phase; cadence reduces post go-live.

---

## 9. Risks & Mitigations

| # | Risk | Probability | Impact | Mitigation |
|---|---|---|---|---|
| R-01 | GeekSpeak delays in providing reference content (images, copy, SKU lists, keywords) | High | High | Send clear input checklist immediately after PRD sign-off; set a hard input deadline tied to go-live target |
| R-02 | Resource availability — engineering team cannot staff all phases simultaneously | Medium | High | Phase delivery is designed to allow parallel workstreams; escalate to Arun Kumar T if bandwidth conflicts arise |
| R-03 | Uber Eats replacement banner not confirmed before SoS setup | High | Medium | SoS setup can proceed for 6 confirmed banners; 7th added via addendum once confirmed |
| R-04 | Score threshold disagreement with customer post-launch | Medium | Medium | Thresholds are configurable at brand instance level; can adjust without code change |
| R-05 | N×N pairing performance at scale (~200-300 SKUs × 6-7 secondary images × 5+ retailers) | Medium | High | Suraj's team to run performance benchmark with sample data before production; ensure async processing via Kafka |
| R-06 | State management complexity under concurrent user overrides | Low | Medium | Last-write-wins with full audit log; no optimistic locking needed for v1 at this scale |
| R-07 | Version comparison service reliability | Low | High | Fallback: if service unavailable, treat attribute as "changed" (conservative — forces re-score rather than silently retaining stale override) |
| R-08 | Image URL unreachable at crawl time | Medium | Low | Mark as `Not Available`, do not penalize score; retry on next scheduled crawl |

---

## 10. Open Questions

| # | Question | Owner | Priority |
|---|---|---|---|
| OQ-01 | **Score boundary at exactly 80**: is score = 80 `Correct` or `Incorrect`? | Raghav + Vaibhav | High |
| OQ-02 | **Uber Eats replacement banner** for SoS | GeekSpeak (Suzanne/Ali) | High — blocks SoS setup |
| OQ-03 | **Image classification types for Lassonde** — front, back, lifestyle, ingredients, infographic: confirm exact list and any Lassonde-specific types | GeekSpeak | High — blocks N×N config |
| OQ-04 | **Brand-level scorecard aggregation formula** — how is the category-level % calculated? Simple average of SKU scores, or weighted? | Raghav + GeekSpeak (Ali) | High — blocks scorecard output |
| OQ-05 | **SoS scope confirmation** — final scope is page-1 (20-40 products). Top-100 tracking requires commercial addendum. Confirm with GeekSpeak whether they want to pursue top-100 addendum. | Dan Erickson + GeekSpeak | Medium |
| OQ-06 | **Lactalis Confluence reference** — locate existing Lactalis implementation documentation to link as prior art | Delivery / CSM | Low |
| OQ-07 | **Plytex API readiness** — GeekSpeak to confirm timeline for Plytex API setup as eventual replacement for OneDrive-based content input | GeekSpeak (Ali) | Low — future scope |
| OQ-08 | **NFT/ingredients scoring responsibility** — for Loblaws (GS1 feed), DataWeave tracks but GeekSpeak is not responsible. Confirm how "not responsible" is reflected in the scorecard (excluded from compliance %? tracked separately?) | Raghav + Rohitha | Medium |

---

## 11. Appendix & References

### 11.1 Meeting Notes (Notion)
- Dataweave - Geekspeak Discussion (kickoff call) — `transcript-1.md`
- Geekspeak content audit internal discussion - DSA (internal implementation discussion) — `transcript-2.md`
- Geekspeak DSA implementation internal connect (product + engineering alignment) — `transcript-3.md`

### 11.2 Confluence Documentation (dataweave.atlassian.net)

| Page | Space | ID |
|---|---|---|
| Content Text Analysis Module: API Overview and Functionality | SEM | 3642294280 |
| Content Audit Optimization: Orchestrator Documentation | SEM | 3639705607 |
| Content Audit Optimization Service — Extended Architecture with Image Attribute Tagging | SEM | 3480616963 |
| Scoring Changes for Content Quality | SEM | 3616276482 |
| Content Analysis Orchestrator — Full System Documentation | SEM | 3625648153 |
| Automation on PI-Match Management-Veracite | PROD | 3585441795 |
| Veracite User Guide for Delivery | PROD | 2589982723 |

### 11.3 Google Drive
- Geekspeak folder: `1UJSrnzWb1pDnW_V4XNqoKLD1VX3XxcXP`
  - Share of Search Analytics Customization: `1KRv02uta6WWUMYjYaHy6ryQt9e3bteAg`
  - Content Audit Customization: `1fJSwF0z0uoATErAHE_ounmSIqtF_ELU3`

### 11.4 Glossary

| Term | Definition |
|---|---|
| DSA | Digital Shelf Analytics — DataWeave's shelf monitoring platform |
| Veracite | DataWeave's internal platform for spec management, configuration management, match management, and internal QA |
| PDP | Product Detail Page |
| PIM | Product Information Management system (e.g. Plytex) |
| NFT | Nutrition Facts Table |
| GS1 | Standards body; DataWeave sources NFT/ingredients data from GS1 for Loblaws |
| N×N pairing | Brute-force secondary image matching: each reference image compared against all actual images; highest-confidence pair selected |
| SoS | Share of Search |
| Scorecard | Brand-level aggregate output: compliance % per attribute |
| Baseline resource file | Retailer-level multi-sheet file: Brand SKUID, Retailer SKUID, attribute scores, override status |
| Override | User action changing the display enum of an attribute without modifying the underlying confidence score |
| Correct - Slightly Modified | Display state indicating a user has overridden an Incorrect attribute to Correct |
| Enabler | An agency/partner (GeekSpeak) operating DataWeave tooling on behalf of a brand (Lassonde) |

---

## 12. UI Interaction Design Specifications

### 12.1 Override Flow — Interaction States

#### 12.1.3 Post-Update Confirmation Message

After an override is committed (undo window closes), a confirmation line appears inline below the attribute row:

```
✓ Updated. Scorecard reflects this change on the next refresh.
  Updates in 18 hours  (by Apr 18, 5:29 PM IST)
```

- Relative time calculates dynamically from the next scheduled 2:00 AM UTC run
- Time is displayed in IST (UTC +5:30) for the GeekSpeak team
- On each subsequent page revisit, the countdown refreshes against the current time
- If a force refresh is triggered mid-cycle, this line updates to: `Refresh in progress.`
- Cancel at any step in the override flow closes the popup with no state change

#### 12.1.6 Post-Update State Display — Attribute Row

After a committed override, the attribute row renders as:

```
[Attribute name]   [Label ⓘ]   score: 67   [Undo Update]
```

ⓘ tooltip on hover:
```
Updated by: [User Name]
Date: Apr 17, 2026 · 10:42 AM UTC
Old: score 67 → Incorrect
New: Correct — Slightly Modified
Reason: Text rephrasing (OR-03)

[Score-based overrides only]
Old score: 92.50
New score: 30.00
```

- ⓘ icon appears only on rows with an active override history
- Rows with no override history show no icon
- **Undo Update** button reverts the attribute to the previous label/score by opening the override flow pre-filled with the prior state
- The `Modified` badge remains on the row until the next crawl cycle clears or retains the override per STM-02/STM-03
