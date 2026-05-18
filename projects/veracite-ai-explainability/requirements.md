# Veracite — AI Explainability: Requirements

---

## Context

Veracite currently shows AI-suggested matches with no explanation of why a match was proposed, how confident the system is, or why a bundle has no matches. QA associates decide by scanning title keywords and price variance alone — resulting in inconsistent match-type decisions, excessive escalations on borderline cases, and wasted review time on matches the system is already confident about.

This feature adds an explainability layer grounded in one mental model: **gates, not scores**. Each match passes through a sequence of attribute checks. Which passed and which failed — and whether a failure was on a required gate — is the explanation. The percentage score is an internal input. The gate list is what the reviewer needs to act.

The existing Add / Remove / Verify / Publish flow is preserved. These changes render additional evidence within the existing workflow — they do not restructure it.

**Phasing:** Veracite ships first. Learnings from internal QA use inform the Match Management (external, customer-facing) rollout.

---

## Mental Model

**Think in gates, not in scores.**

Each match is evaluated against a set of attribute gates. Gates are either:
- **Required** — defined per-customer in Colab. A required gate failure is a hard signal against the match regardless of how many other gates pass.
- **Weighted** — contribute to the confidence score, but a single failure is not disqualifying.

The rendering rule: **surface which gates passed and which failed. Name required gate failures explicitly.** The raw score is never shown in the default view headline — only in the lane badge.

**Confidence bands map to swim lanes:**

| Lane | Veracite label | Confidence band (indicative) |
|---|---|---|
| Auto-approve | Auto-approved | ≥ 0.99 |
| Review | Associate decides | 0.95–0.99 |
| Quarantine | Investigation needed | < 0.80 |

Lane cut-points are configurable per customer contract in Colab. Lane labels stay constant; only the thresholds behind them change.

**Two tones, never mixed:**
- **Veracite (diagnostic lens):** Clinical, actionable. Names the gate and the lane. Example: `Pack-count gate failed: 24 ≠ 12 · Required gate for this customer.`
- **Match Management (affirming lens):** Plain language, references the customer's own rule. Example: `Pack-counts differ — 24 vs. 12. Per your rule: pack-counts must align.`

Same backend gate data. Different API lenses (`diagnostic` vs `affirming`). Veracite always uses `diagnostic`.

---

## System Architecture

Three systems, three responsibilities. Do not let them blur.

| System | Owns | Role |
|---|---|---|
| **Colab** | Customer rules, gate definitions, lane thresholds, refresh policy | Defines what gates exist, what the customer cares about, what counts as auto-approve vs. review |
| **Matching Engine** | Per-match run, gate verdicts, confidence score | Evaluates each match against Colab's scaffolding, outputs gate pass/fail + score |
| **Veracite / MM** | Per-user rendering | Receives filled-in match + Colab context. Renders for QA associate or customer Cat Manager. |

**Critical constraint:** Colab is the source of truth for customer rules. Veracite calls Colab to fetch context — no local mirroring of customer rules in Veracite's own database. Keeping duplicate rule copies in Veracite leads to version drift within a year.

**Two API endpoints (full shapes in the API Contract section):**
- `GET /onboardings/{id}/match-explanation-context` — cacheable, called once at Veracite wire-up. Returns: scope decisions, attribute weights, gate definitions, lane thresholds, refresh policy.
- `POST /onboardings/{id}/match-explanation?lens=diagnostic` — per match, per suggestion. Returns: headline, lane, gates[], cluster context, audit link.

---

## Target Users

| User | Primary decision | Volume | Time budget per match |
|---|---|---|---|
| QA Vendor Associate (external) | Approve · Reject · Escalate each suggestion | High — 50–100 bundles/day | Seconds |
| QA Internal Associate | Same + DQ flagging authority | Medium | Seconds |
| QA Lead | Spot patterns · tune rules · review conflicts | Low — oversight role | Minutes per pattern, not per match |

---

## Design Changes

---

### D1 — Bundle Confidence Summary Bar

**Problem solved:** Associates open a bundle with no upfront sense of how much review it requires. A bundle of 47 SKUs with 40 AUTO-APPROVED matches looks identical to one with 40 QUARANTINE matches. Associates process both identically — slow, manual, one-by-one — when the first could be cleared in seconds.

**Leading indicator:** Time-to-first-action per bundle. Associates who see the summary bar take their first action (bulk approve CTA or direct navigation to REVIEW section) within 10 seconds of opening the bundle. Baseline: measure time-to-first-action for 2 weeks pre-launch.

**Lagging metric:** ≥15% increase in Match Acceptance Rate (OKR KR1). HIGH-confidence bulk acceptance reduces false removes. Delivery cycle (15→2 days, OKR KR5) — bundles with ≥3 AUTO-APPROVED matches clear faster when associates are not reviewing each one individually.

#### QA Associate journey at D1

1. Associate opens bundle from queue. Summary bar appears immediately at the top of the validation page, before the seed SKU detail block.
2. Bar reads: `47 SKUs · 31 AUTO-APPROVED · 11 REVIEW · 5 QUARANTINE`
3. If AUTO-APPROVED count ≥ 3: CTA appears. `Review & approve 31 AUTO-APPROVED matches →`
4. Associate clicks CTA. Summary confirmation screen opens (not a direct batch-add). Screen shows: product thumbnail + name + lane badge per match, as a scannable vertical list.
5. Associate reviews the list — target: ≤30 seconds on a well-trained associate reviewing a clean cluster. Confirms. All AUTO-APPROVED matches are added to the right panel.
6. Associate works through REVIEW and QUARANTINE matches individually using D2.
7. If CTA is not clicked: associate proceeds match-by-match as before. No behavior change enforced.

#### QA Lead journey at D1

No direct interaction. D1 bulk acceptance rates per associate per category feed into D6: leads can see whether associates over- or under-use bulk verify on specific clusters — a proxy for associate calibration quality.

#### Design instructions

- **Position:** Fixed below page header, above seed SKU block. Full-width. Background: neutral gray. Not a colored alert.
- **Label format:** `[N] SKUs · [N] AUTO-APPROVED · [N] REVIEW · [N] QUARANTINE`. Use lane labels, not HIGH/BORDERLINE/LOW. Do not use the word "confidence" in the summary bar.
- **CTA condition:** Only when AUTO-APPROVED ≥ 3. Label: `Review & approve [N] AUTO-APPROVED matches →`. Never label as "Add All."
- **Confirmation screen:** Modal or slide-over. Per-match row: thumbnail (32×32px), product name (truncated at 60 chars), lane badge. Confirm button: `Add [N] matches`. Cancel dismisses without action.
- **Confirmation screen excludes gate detail.** This is a review surface, not an investigation surface. One lane badge per row. No chips, no gate strip.

#### Engineering (Frontend) instructions

- Component: `<BundleConfidenceSummary>`. Props: `{ total_skus, auto_approved_count, review_count, quarantine_count }`.
- CTA renders conditionally when `auto_approved_count >= 3`.
- Confirmation screen: `<BulkApproveReview>`. Receives: array of `{ match_id, name, image_url, lane }`. On confirm: fires existing Add action per match_id in sequence. Button shows loading state. On partial failure: show which match_ids failed with a retry option.
- Summary bar renders before seed SKU section. Do not collapse or lazy-load.

#### Engineering (Backend) instructions

- Summary bar data comes from the existing confidence endpoint — aggregate per-suggestion lane values before rendering. No new endpoint.
- `lane` field from `POST /match-explanation?lens=diagnostic` determines category: `auto_approved` / `review` / `quarantine`.
- Bulk confirm: batch-add API. Return per-match success/failure. If any fail, do not silently discard — surface the failure list to the frontend.

---

### D2 — Explainability Strip on Suggestion Cards

**Problem solved:** Associates cannot distinguish a borderline match failing on a required gate (should be rejected) from one failing on a weighted gate (likely still a match). Title + price scanning produces inconsistent decisions across associates and across sessions on identical evidence. The explainability system has gate-level signals — they are just never shown.

**Leading indicator:** Gate strip expansion rate on REVIEW matches. Associates who expand the panel are engaging with the evidence. Target: ≥60% of REVIEW matches have panel expanded within 5 seconds of card load. Baseline: 0% (feature does not exist).

**Lagging metric:** ≥15% improvement in hardest categories (OKR KR2). Brand and form-factor gate failures — the dominant error type in hard categories — are now visible and named. Downstream error rate must stay flat or improve alongside acceptance rate; track both together, never separately.

#### QA Associate journey at D2

**Collapsed state (default):**
1. Associate sees suggestion card in the middle column.
2. Below product title: **headline sentence** naming the key gate result. Format: `[Gate name] gate failed: [seed] ≠ [candidate] · Required gate` or `[Gate name] gate passed: [value] = [value]` for high-confidence cards.
3. Below headline: **gate strip** — horizontal row of colored tiles. Green = pass, red = fail, gray = insufficient evidence. Required gate tiles show a `REQUIRED` micro-badge beneath the tile. The gate strip shape IS the explanation — 5 green + 1 red is immediately readable without reading text.
4. Below gate strip: **cluster context** line. `Last 20 similar · 14 approved · 4 rejected · 2 escalated`. Tells the associate where this pending decision sits vs peers. Omit if no cluster data.
5. Lane badge top-right: `Review · 0.96`. Shows lane label + raw score. Score visible at card level but NOT embedded in the headline sentence.
6. Three action buttons: `✓ Approve` (green) · `✗ Reject` (red) · `↗ Escalate` (neutral gray).

**Expanded state (one click):**
1. Associate clicks gate strip or `▼ See full evidence` button. Panel expands inline — no new page, no modal.
2. Expanded view shows:
   - Full gate table: columns — Gate name | Verdict | Seed value | Candidate value | Similarity (for title/image gates). Required gates sorted first, then failed weighted gates, then passed gates.
   - 2-sentence AI narrative (generated by Semantics/LLM). Named gate failure + cluster signal. No score numbers in the narrative.
   - Pre-populated DQ flag pills if model detected likely DQ issues (D7 entry point).
   - `See full rule history →` deep-link to Colab activity timeline.
3. Associate makes their decision — Approve / Reject / Escalate — from the expanded view.

**Escalate path:**
- Escalate = associate is uncertain and routes to QA Lead review queue.
- Match is NOT added or removed. Status: `pending_lead_review`. Card is removed from the associate's active queue.
- Toast: `Sent to QA Lead queue — match #[ID]`.

#### QA Lead journey at D2

QA Lead does not interact with D2 directly during RSC. Escalated matches from D2 flow into D6's conflict and escalation queues, arriving with the full gate strip evidence and the associate's stated reason.

#### Design instructions

**Collapsed state:**
- Headline: same font as product title, lighter weight. No score in the headline text.
- Gate strip: horizontal row. Each tile: 40px wide × 24px high, 4px gap. Green fill (pass), red fill (fail), gray fill (insufficient evidence). Tile label: attribute name abbreviated (Brand, Pack, UPC, Title, Image, Variant). Required gate tiles: `REQUIRED` badge below tile in 10px text.
- Cluster context: 12px gray text, single line. Omit entire row if `recent_decisions` is null.
- Lane badge: top-right of card. Pill format: `[Lane] · [score to 2dp]`. Lane labels: Auto-approved / Review / Quarantine.
- Actions: 3 buttons, text labels always present (no icon-only). Button order: Approve → Reject → Escalate.

**Expanded state:**
- Gate table: zebra rows. Similarity scores shown for Title and Image gates only.
- AI narrative: italic, below gate table, above DQ pills. 2 sentences max. No score numbers.
- DQ flag pills: gray outlined pills, solid on selection. Multi-select.
- Audit link: text link at bottom of expanded panel.

**Watch-outs (from Sanket's deck, slide 18):**
- Never show internal IDs, raw model weights, or score numbers in the default headline.
- Never add a new gate column per release — depth belongs behind the expand click.
- Pick one tone — diagnostic — for all Veracite surfaces. Do not let affirming (MM) language leak into Veracite copy.

**Wireframe direction (requires PM + QA Lead sign-off):**
- **Option A** (detailed view, slide 09): Headline + gate strip + cluster context + Approve/Reject/Escalate. Recommended for REVIEW and QUARANTINE matches.
- **Option B** (compact list, slide 10): Row-by-row queue with headline reason, keyboard-first (⌘K shortcuts). Recommended for high-volume scanning mode or vendor associates.
- **Option C** (gate pipeline, slide 10): Gates as bubbles on a horizontal pipeline. Best for onboarding new associates to the gate model.
- **Recommended starting point:** Option A as default. Option B as a keyboard mode toggle. Option C as an in-product tutorial surface only.

#### Engineering (Frontend) instructions

- Component: `<SuggestionCard>`. New sub-components: `<GateStrip>`, `<ClusterContext>`, `<GateDetail>`.
- Default render: headline + gate strip + cluster context + lane badge + 3 action buttons.
- Expand trigger: click on gate strip OR `▼ See full evidence` text button. Not the card header (accidental expansion risk).
- Expanded render: full gate table + AI narrative + DQ flag pills + audit link.
- Escalate: `PATCH /matches/{id}/status` with `{ status: "escalated", reason: "associate_uncertain" }`. Remove card from active queue on 200. Show toast. On failure: show inline error, keep card in queue.
- Lane badge: renders from `lane` + `confidence_band` in API response. Score rounded to 2dp.
- Keyboard mode (Option B): `⌘K` opens command palette. Keyboard shortcuts: `A` = Approve, `R` = Reject, `E` = Escalate, `Space` = expand panel.

#### Engineering (Backend) instructions

`POST /match-explanation?lens=diagnostic` must return per suggestion:
- `headline` (string): pre-rendered sentence, Veracite renders as-is
- `lane` (string enum): `"auto_approved"` | `"review"` | `"quarantine"`
- `confidence_band` (float): raw score to 4dp
- `recommendation` (string enum): `"approve"` | `"reject"`
- `gates[]`: ordered array — required-failed first, then weighted-failed, then passed. Each gate: `{ name, verdict: "pass"|"fail", required: bool, seed_value, candidate_value, similarity? }`
- `category_context`: `{ category_label, recent_accuracy, recent_decisions: { approved, rejected, escalated } }`. `recent_decisions` = last 20 decisions in same category cluster, not global.
- `audit_link` (string): deep-link to Colab activity timeline for this onboarding. Never embed audit data directly — always link.

Gate sort order enforced by backend: `required AND verdict=fail` first → `required AND verdict=pass` → `weighted AND verdict=fail` → `weighted AND verdict=pass`.

#### Semantics instructions

- AI narrative: 2-sentence LLM summary from structured gate signals. Sentence 1: key gate failure and its implication for match quality. Sentence 2: cluster context signal ("Associates have approved 14 similar packs in this cluster — this one fails the required pack-count gate which other approvals did not."). Never include score numbers or internal model names.
- Required gate flag: sourced from Colab contract, not from the model. Semantics passes the `required` boolean per gate from the Colab context — it does not infer it from signal weights.
- LLM invocation policy: LLM is called for `review` and `quarantine` lane matches only. `auto_approved` matches use a template-generated headline without LLM call.

---

### D3 — Lane Badge on Added Match Cards (Right Panel)

**Problem solved:** Once matches are added to the right panel, there is no way to spot REVIEW or QUARANTINE matches before publishing. An associate who bulk-accepted or added matches individually cannot retroactively identify which ones were borderline before they commit.

**Leading indicator:** Pre-publish callout engagement rate (D5). Associates who see at least one REVIEW badge in the right panel are more likely to click through the D5 conflict callout before submitting vs. associates who see an all-green panel.

**Lagging metric:** Downstream error rate flat or improving alongside acceptance rate (OKR quality safety check). If acceptance rate rises but error rate also rises, D3 is failing to surface the quality risk. Both metrics must be reported together.

#### QA Associate journey at D3

1. Associate has added N matches to the right panel via D1 (bulk) or individual adds.
2. Each right-panel match card shows a lane badge: `Auto-approved` (green) · `Review` (amber) · `Quarantine` (red).
3. Before publishing: associate visually scans the right panel. Amber or red badges prompt re-examination.
4. If the associate proceeds to publish with non-Auto-approved matches present, D5 surfaces a count callout.

#### QA Lead journey at D3

During RSC, QA Lead sees the right panel with lane badges and can verify that an associate's confirmed matches reflect an appropriate review posture before sign-off.

#### Design instructions

- Lane badge: compact pill, right-aligned on the match card. Text: lane label only (no score in the right panel — score belongs in the middle column).
- Colors: green (Auto-approved), amber (Review), red (Quarantine).
- Badge is static — no expand behavior on the right panel card. Full gate detail is available from the middle column card.
- If lane data is unavailable (match pre-dates explainability rollout): omit badge entirely. Do not show a placeholder or "unknown" label.

#### Engineering instructions

- Right panel match cards receive the `lane` field from the confidence endpoint response. Persist `lane` with match state when the associate adds the match.
- Store lane at add-time, not at render-time — if the confidence endpoint is unavailable later, the badge still renders from stored state.

---

### D4 — Singleton Reason Code Badge

**Problem solved:** Bundles with zero matches require manual investigation. Associates scan the seed SKU title and try to infer why no match was found. For UNIQUE_PRIVATE_LABEL and CATEGORY_MISMATCH singletons, this investigation is wasted — the system already knows the answer. For MISSING_ATTRIBUTES singletons, the silence prevents the DQ signal from ever surfacing to the team that can fix it.

**Leading indicator:** Time-on-task for singleton bundles. Associates with a reason badge move past singletons faster. Measure: average time from bundle open to publish action on singleton bundles, pre/post launch.

**Lagging metric:** 50% reduction in DQ escalations (OKR KR4). MISSING_ATTRIBUTES singletons, when badged, become traceable DQ signals rather than silent rejections.

#### QA Associate journey at D4

1. Associate opens a bundle with zero matches. A single reason badge appears below the seed SKU block: `UNIQUE_PRIVATE_LABEL` (gray) · `MISSING_ATTRIBUTES` (amber) · `NO_CLOSE_CANDIDATES` (orange) · `CATEGORY_MISMATCH` (gray).
2. Badge is informational only. No new action required on the badge itself.
3. Associate marks the bundle as singleton per existing flow and moves on.
4. For MISSING_ATTRIBUTES: associate has the option to raise a DQ flag directly from the badge (entry point to D7 without needing to open an expanded match panel).

#### QA Lead journey at D4

Aggregate singleton reason code distribution appears in the RSC view as a category-level signal — not per-bundle, but as a trend. Clusters with high MISSING_ATTRIBUTES rates flag upstream data quality issues for rule calibration.

#### Design instructions

- Badge position: below seed SKU details, above the empty-state "no matches found" message.
- Badge format: pill with reason code label. Color coding: UNIQUE_PRIVATE_LABEL (gray), MISSING_ATTRIBUTES (amber), NO_CLOSE_CANDIDATES (orange), CATEGORY_MISMATCH (gray).
- Hover tooltip: 1 sentence plain language. Example: "No matching competitor product found — this SKU appears to be a unique private-label item."
- No action button on the badge itself (except for MISSING_ATTRIBUTES which surfaces a `Flag data quality issue →` link as a secondary action).
- If reason code is unavailable: omit badge entirely. Do not show a fallback.

#### Engineering instructions

- Singleton reason endpoint: `GET /bundles/{id}/no-match-reason` → `{ reason_code, confidence }`.
- Reason codes (enum): `UNIQUE_PRIVATE_LABEL` | `MISSING_ATTRIBUTES` | `NO_CLOSE_CANDIDATES` | `CATEGORY_MISMATCH`.
- Render badge only when confirmed match count = 0. Confidence threshold for rendering: > 0.7 (below this, omit rather than show a low-confidence reason code).

#### Semantics instructions

- No-match reason classification: LLM-free for UNIQUE_PRIVATE_LABEL and CATEGORY_MISMATCH (rule-based from product taxonomy). LLM invoked for MISSING_ATTRIBUTES to identify which specific attributes are absent.

---

### D5 — Pre-Publish Conflict Callout

**Problem solved:** Associates publish bundles containing REVIEW or QUARANTINE matches with no checkpoint. This creates downstream DQ issues surfacing only during RSC, costing QA Lead review time that could have been caught at the associate level — one step earlier in the pipeline.

**Leading indicator:** Callout engagement rate — ratio of `Jump to matches` clicks to total callout appearances. If associates dismiss without clicking, the callout is not influencing behavior and may need higher friction.

**Lagging metric:** RSC conflict rate reduction. Fewer bundles flagged during RSC because more were reviewed at the associate publish step.

#### QA Associate journey at D5

1. Associate clicks Publish.
2. System checks: are any added matches in REVIEW or QUARANTINE lane?
3. If yes: callout appears in the publish confirmation area. `⚠️ [N] matches not AUTO-APPROVED — review before submitting?`
4. Two actions: `Jump to matches →` (scrolls right panel to first non-Auto-approved match, applies 500ms yellow highlight) · `Dismiss and publish` (logs dismiss event, proceeds).
5. Not a blocking modal. Associate can publish over the callout.
6. Dismiss event logged with timestamp and conflict count — feeds D6 pattern detection.

#### QA Lead journey at D5

D5 dismiss logs feed D6. QA Leads can see which associates consistently dismiss the callout without reviewing — identifies associates who may need calibration coaching.

#### Design instructions

- Callout: non-modal, inline in the publish confirmation area. Warning style (amber border, light amber background). Not a full-screen modal.
- Copy: `⚠️ [N] matches not AUTO-APPROVED — review before submitting?`
- Actions: `Jump to matches →` (primary) · `Dismiss and publish` (secondary, destructive style — gray text, no button border).
- Do not block the publish. Advisory friction only.
- If all added matches are AUTO-APPROVED: no callout. Standard publish confirmation.

#### Engineering instructions

- Trigger: at publish initiation, count added matches where `lane ≠ "auto_approved"`.
- If count > 0: show callout. Store dismiss event: `{ bundle_id, associate_id, dismissed_conflict_count, timestamp }` for D6 consumption.
- Jump link: scroll right panel to first non-auto-approved match. Apply CSS yellow highlight animation (500ms fade out).

---

### D6 — RSC Conflict View (QA Lead Only)

**Problem solved:** QA Leads reviewing RSC accounts sample randomly — they have no signal for which bundles or categories contain associate decisions that disagreed with AI recommendations. Pattern-level issues (e.g., all associates in a cluster rejecting what the model approves) are completely invisible until someone notices a trend manually.

**Leading indicator:** QA Lead time to first high-conflict bundle in an RSC session. Leads who sort by AI Conflicts column should reach the highest-conflict account in under 2 minutes. Baseline: random sampling, no defined time metric.

**Lagging metric:** Deployment cycle 15→2 days (OKR KR5). Override reason capture and conflict pattern data feed the model calibration loop directly from Veracite actions — shortening the feedback-to-deployment gap.

#### QA Lead journey at D6

**RSC account list:**
1. QA Lead opens RSC Pending Accounts. New column: `AI Conflicts` — count of associate decisions that disagreed with AI recommendation per account. Sortable.
2. Lead sorts by AI Conflicts descending. Starts with highest-conflict account.

**Accuracy-by-category panel (new, inside RSC bundle view):**
3. Inside a high-conflict account: a new accuracy panel shows `Accuracy by match category · last 7 days`. Horizontal bar chart per category. Rows: category label · accuracy % · status tag (good / watch / attention). `attention` threshold: accuracy < 75%.
4. Lead clicks an `attention` row. Drill-down shows: which matches in that category associates flagged or escalated + which gate rule is most frequently failing across those matches.
5. Lead identifies: data quality problem (→ DQ flag, D7) or rule calibration problem (→ override with reason code, captured below).

**Match-level conflict badges:**
6. Conflicted match cards inside RSC show an orange `[AI CONFLICT]` badge top-right. Hover tooltip: `AI recommended [approve/reject] · Associate [approved/rejected]`.
7. Explainability panel is **expanded by default** for conflicted matches (not collapsed as in associate view — QA Lead needs gate evidence immediately).
8. Override action: dropdown with reason codes — `Rule too strict for this category` · `Data quality issue — GTIN mismatch` · `Associate error — should have approved` · `Ambiguous — escalate to Semantics`.
9. Override logged with reason code → Colab calibration pipeline.

**Disagreement pattern surfacing (slide 15 alignment):**
When ≥ 4 associates reject what the AI recommends in the same category cluster within 7 days: system surfaces to QA Lead as a pattern alert in the accuracy-by-category panel. Lead decides: rule calibration or associate training issue.

#### Design instructions

- `AI Conflicts` column: integer count, right-aligned, sortable. Appears after existing status columns in account list.
- Accuracy panel: horizontal bar chart. Labels left-aligned. Status tags right-aligned: `good` (green), `watch` (amber), `attention` (red).
- Drill-down: click row → expand to show match-level list within that category. Each match: name + verdict + gate that most frequently failed across that group.
- Conflict badge: orange pill, `AI CONFLICT`. Positioned top-right of match card, does not overlap lane badge.
- Expanded panel default: same layout as D2 expanded state. No click needed to open in RSC mode.
- Override dropdown: inline, appears when lead clicks action area. Reason code must be selected before save is enabled.

#### Engineering instructions

- Conflict detection: compare `recommendation` from API response against associate's recorded action per match. Store: `{ match_id, ai_recommendation, associate_action, associate_id, bundle_id, timestamp }`.
- RSC account list aggregate: sum conflict records per account.
- Accuracy-by-category: aggregate `category_context.recent_accuracy` across all matches in the account per category, last 7 days.
- Override API: `POST /matches/{id}/override` with `{ reason_code, override_by, timestamp }`. This payload feeds Colab calibration pipeline — treat as a first-class backend dependency, not a logging side-effect.
- RSC mode detection: **[OPEN QUESTION — see Open Questions #2]**. Gate expanded-default behavior and conflict badge rendering behind RSC mode flag. Do not leak RSC-mode UI into standard associate view.

---

### D7 — DQ Flag System

**Problem solved:** Data quality errors — wrong GTINs, incorrect source config, off-form candidates from a specific suggestion source — generate thousands of silent associate rejections with no traceable signal back to the upstream cause. A single source-config fix could correct hundreds of matches. But without a structured flag system, no one ever sees the pattern.

**Leading indicator:** DQ flags raised per week post-launch. A rising flag rate in weeks 1–4 means associates are using the system — not a regression. A plateau after 4 weeks means patterns are being caught and fixed upstream (or associates stopped flagging — both need monitoring).

**Lagging metric:** 50% reduction in DQ escalations (OKR KR4). Pattern-level flags (e.g., a suggestion source generating off-form candidates) replace thousands of silent rejections with one upstream fix traceable to a JIRA ticket.

#### QA Associate journey at D7

**From expanded match panel (D2):**
1. Associate opens expanded panel on a suggestion card.
2. Pre-populated DQ flag pills appear: `brand-mismatch` · `GTIN-missing` · `price=-1` · `form-factor-mismatch`. Pre-suggested by model from detected signals.
3. Associate selects applicable pills (multi-select). Optional text field appears: 30-char limit, single line, placeholder `Add context (optional)`.
4. Associate submits. Confirmation: `DQ flag raised — sent to QA Lead queue`.
5. One flag per match per associate. If the same match has been flagged by others: associate sees `[N] others flagged this` with a `+1 my flag` option — no duplicate pill selection needed.

**From singleton badge (D4 integration):**
- Associate can raise a MISSING_ATTRIBUTES flag directly from the D4 singleton badge, without entering the expanded panel.

#### QA Lead journey at D7

**DQ queue (new section on RSC page):**
1. QA Lead sees pending flags grouped by pattern: `brand-mismatch · 14 flags · 3 accounts · source: walmart_us`.
2. Each group: two actions — `Approve → JIRA` or `Reject (with note)`.
3. Approve: auto-creates JIRA ticket in source-config project. Pre-filled: summary, pattern description, affected match count, affected associate names, link to flagged bundles. QA Lead does not need to write the ticket.
4. Reject: mandatory reason note. Note is sent back to flagging associates.
5. Duplicate flags from multiple associates on the same pattern auto-merge. Deduplication key: `(reason_code + source_identifier + account_cluster_id)`.

**Disagreement-mode alignment (from Sanket's deck, slide 15):**
The DQ flag system maps to the "Flag for review" disagreement mode: QA Lead sees the pattern — "8 of 10 associates rejected this in the same cluster, rule says approve" — and decides whether to tune the rule or route the DQ flag to source-config. The system surfaces the pattern; the lead makes the call.

#### Design instructions

- Flag pills: gray outlined, solid on selection. Multi-select allowed. Max 4 pre-populated options (model-suggested). Associate cannot add custom pills — forces structured signal.
- Notes field: appears after first pill selection. Single line, 30-char max. No essay fields.
- Deduplication indicator: `[N] others flagged this` appears above pill selector if prior flags exist. `+1 my flag` button (no pill re-selection). Existing flags' reason codes shown as read-only context.
- DQ queue: grouped by pattern. Each group row: reason code label, flag count, affected account count, source identifier, `Approve → JIRA` button, `Reject` button.
- JIRA auto-create template: summary = `[reason_code] · [source_identifier] · [flag_count] flags`, description = structured pattern summary, priority = based on flag count (≥10 = High, 5–9 = Medium, <5 = Low).

#### Engineering instructions

- DQ flag write: `POST /flags/dq` with `{ match_id, reason_codes[], notes, associate_id }`. For singleton flags: `{ bundle_id, reason_codes: ["missing_attributes"], associate_id }` with `match_id: null`.
- Deduplication store: key on `(reason_code, source_identifier, account_cluster_id)`. Incoming flags merge into the open flag group. Increment flag count. Append associate_id to group.
- Deduplication threshold N: **[OPEN QUESTION — see Open Questions #3]**. Default proposal: N=3 flags on same key within 7 days triggers merge and QA Lead queue notification.
- JIRA integration: `POST` to JIRA REST API on QA Lead approval. Required fields: summary, description, priority, labels (`dq-flag`, `veracite`, reason_code), linked Veracite bundle IDs.
- DQ queue endpoint: `GET /flags/dq/pending?account_id={id}`. Returns grouped flag objects sorted by flag count descending.

---

## API Contract

**Dependency:** API schema must be defined and mocked before any frontend build begins. This is the first critical path dependency.

### Endpoints

**Static context — call once at Veracite wire-up:**
```
GET /onboardings/{id}/match-explanation-context
```
Returns: customer scope decisions, attribute weights, gate definitions (names + required flags + lane thresholds), QA-pack rules, refresh policy. Cacheable. Colab is the source of truth — Veracite does not mirror this data locally.

**Per-match explanation — call per suggestion card:**
```
POST /onboardings/{id}/match-explanation?lens=diagnostic
```
Body: `{ match_id, anchor, candidate, score, signals[], cell }`

**Response shape (`lens=diagnostic`, Veracite):**
```json
{
  "match_id": "m_abc123",
  "lens": "diagnostic",
  "lane": "review",
  "confidence_band": 0.9612,
  "recommendation": "reject",
  "headline": "Pack-count gate failed: 24 vs. 12",
  "gates": [
    { "name": "Brand",      "verdict": "pass", "required": false, "seed": "Coca-Cola" },
    { "name": "Pack size",  "verdict": "pass", "required": false, "seed": "12 oz" },
    { "name": "Pack count", "verdict": "fail", "required": true,  "seed": "24", "candidate": "12" },
    { "name": "Title",      "verdict": "pass", "similarity": 0.91 },
    { "name": "Image",      "verdict": "pass", "similarity": 0.94 },
    { "name": "Variant",    "verdict": "pass" }
  ],
  "category_context": {
    "category_label": "Multipack · KVI tier",
    "recent_accuracy": 0.82,
    "recent_decisions": { "approved": 14, "rejected": 4, "escalated": 2 }
  },
  "audit_link": "colab./onboarding/{id}/activity"
}
```

**No-match reason — call when match count = 0:**
```
GET /bundles/{id}/no-match-reason
```
Returns: `{ reason_code, confidence }`

**Already-existing Colab deep-links (no new work required):**
- `/sample-spec/cell-stats` — cluster confidence, used for D1 bulk-approval gating
- `/activity-timeline` — audit deep-link from D2 expanded panel
- `/onboardings/{id}/versions` — contract version history for QA Lead D6 view

---

## Backend / Semantics Requirements

| Requirement | Owner | Priority |
|---|---|---|
| Mock API contract (both endpoints above) | Backend — **first dependency, P0 before FE build** | P0 |
| `GET /match-explanation-context` — full Colab context per onboarding | Backend (Colab team) | P0 |
| `POST /match-explanation?lens=diagnostic` — per-match gate render | Backend + Semantics | P0 |
| AI narrative: 2-sentence LLM summary from gate signals | Semantics / LLM | P1 |
| No-match reason endpoint | Semantics | P1 |
| RSC conflict detection: flag matches where associate action ≠ AI recommendation | Backend | P1 |
| Cluster context (`recent_decisions` per category, last 20) | Backend / Semantics | P1 |
| DQ flag write API + deduplication store | Backend | P1 |
| Escalate status write (`pending_lead_review`) | Backend | P1 |
| Accuracy-by-category aggregate for QA Lead view | Backend | P1 |
| Override reason capture → Colab calibration pipeline | Backend (Colab team) | P2 |
| JIRA integration on DQ flag approval | Backend | P2 |

**Feedback loop (slide 16 — must be captured in backend scope):** Associate approve / reject / escalate actions → patterns surface to QA Lead → rules get tuned in Colab → override reasons write back to Colab with version number. The system improves because rules become more refined — not because the engine extracts more attributes. Backend must treat override reason capture as a first-class pipeline input, not a logging side-effect.

---

## Success Metrics

| OKR KR | Mechanism | Leading indicator | Quality safety check |
|---|---|---|---|
| ≥15% increase in Match Acceptance Rate | D1 bulk accept reduces false removes. RSC conflict flagging (D6) catches false adds before production. | D1 CTA click-through rate; right-panel lane badge distribution shifting toward Auto-approved | Downstream error rate must stay flat or improve. Report both together. |
| ≥15% on hardest categories | D2 gate strip surfaces brand/form-factor gate failures — dominant error type in hard categories. | Gate expansion rate on REVIEW cards in hard category clusters | N/A |
| 100% pipeline observability | D7 DQ flag fanout creates JIRA-tracked signals per error pattern. Every flag = traceable data point. | DQ flags raised per week; time from first flag to JIRA creation | N/A |
| 50% reduction in DQ escalations | Pattern-level DQ flags replace thousands of silent rejections with one upstream fix. | Ratio of DQ flags approved (→ JIRA) to total flags raised per month | N/A |
| Deployment cycle 15 → 2 days | D6 override reason capture + D7 DQ flags feed model calibration directly from Veracite. | Override reason capture rate during RSC; time from RSC override to Colab rule update | N/A |

---

## Open Questions (resolve before FRD)

1. **API scope — pre-add vs. post-add states:** Does `POST /match-explanation?lens=diagnostic` return gate evidence for both suggestions (pre-add, D2) and confirmed matches (post-add, D3)? Both are needed. If the same endpoint covers both states, the `match_id` scoping must include the confirmed match state — confirm with Backend before mocking.

2. **RSC mode detection:** How does Veracite identify RSC mode at render time to trigger D6 behaviors (expanded-default panel, conflict badges, accuracy-by-category panel)? Options: route parameter (`/rsc/bundles/{id}`), account-level flag from the Colab context payload, or session-level role context. Needs Frontend + Backend alignment before FRD.

3. **DQ flag deduplication threshold N:** Same issue flagged by N associates across M bundles → single JIRA. Proposal: N=3, same `(reason_code + source_identifier + account_cluster_id)` within 7 days. Needs QA Lead (Ram) input before FRD — Ram's team operates the flag queue and must confirm the volume that makes sense to merge vs. keep separate.

4. **Escalate vs. Quarantine disambiguation:** Slide 08 defines Quarantine as the low-confidence lane (system-assigned, auto-routed). D2 adds Escalate as an associate action (human-initiated, uncertainty-signaled). Both result in the match going to QA Lead. Should they share a queue or have separate queues with a unified lead view? Recommendation: separate queues, unified QA Lead view with source label (`System quarantine` vs `Associate escalation`). Needs design decision.

5. **Wireframe direction for D2:** Three options presented (slide 09–10). Namrata to pick direction; Ram to sanity-check against actual associate workflow. Recommendation: Option A as default render, Option B as keyboard-mode toggle, Option C as onboarding tutorial only. This decision gates design mockup work.
