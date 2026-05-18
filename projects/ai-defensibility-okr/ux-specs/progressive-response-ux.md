# Progressive Response UX — Design Spec
**Feature:** Ask Me — Response Generation States (Time-to-First-Visual)
**Author:** PM OS (Senior UX/PM)
**Date:** 2026-05-14
**Status:** Draft — ready for design review

---

## Problem

Current Ask Me pipeline takes ~27 seconds from query submission to full response. The UI shows nothing during this time except a static loading indicator. At 15–20 seconds of silence, users lose confidence that anything is happening, refresh the page, or assume the query failed.

**Root cause:** The pipeline produces all output at once (table + narrative) only after all 5 steps complete. There is no incremental surface for the UI to attach intermediate feedback to.

**Benchmark:** Perplexity shows sources within 1s; Claude streams tokens from step 1; Cursor grays out inline suggestions as they generate. In each case, the user receives a signal within 1–2 seconds that something substantive is happening.

---

## Pipeline Timing (live audit 2026-05-13)

| Step | What happens | Observed duration |
|---|---|---|
| 1 | Identifying Intent | ~2s |
| 2 | Retrieving Context | ~1s |
| 3 | Clarifying & Enriching Query | ~7s |
| 4 | Executing SQL | ~1.4s |
| 5 | Generating Result | ~15s |
| **Total** | **TTFA (time to full answer)** | **~27s** |

**Right panel** already surfaces these 5 steps with timings after completion. This spec concerns only the **main chat area** — what the user sees while the pipeline is running, not after.

---

## 1. Functional Requirements

### Must Do

1. Within 500ms of query submission, the response area must show a visible acknowledgment (typing indicator or animated intent state). No blank wait.
2. Within 2 seconds (end of Step 1), the response area must show a plain-language interpretation of the detected intent — 2–3 lines, conversational, not technical. This replaces the typing indicator.
3. The intent interpretation must be derived from the actual LangGraph Intent step output, not a static placeholder. If the intent step has not yet returned, show a skeleton for the intent lines.
4. While Steps 3–4 are in progress (~8–10s into processing), a skeleton answer block must appear in the response area: greyed-out narrative text (3 lines) + greyed-out table shape (4–5 rows). This signals the answer is being constructed, not pending.
5. When Step 5 (Generating Result) begins (~12s), the skeleton must transition to a "generating" state: skeleton text pulses with a slow shimmer animation (not a spinner). The table skeleton shows column headers rendering one-by-one.
6. When Step 5 completes and the full response is available, the skeleton must burst-transition to real content: a 300ms fade-in from the skeleton position. No hard page jump, no skeleton disappearing before content is ready.
7. The existing right-panel trace (5 steps with timing) remains unchanged — this spec adds to the main chat area only.
8. If any pipeline step exceeds its expected duration (Step 3 > 10s, Step 5 > 20s), show a reassurance line below the skeleton: "Still working — complex queries take a moment." Dismiss automatically when the answer arrives.
9. On error (scope refusal or API failure), the skeleton collapses and is replaced by the existing error/refusal message. No orphaned skeleton state.
10. All 5 visual states must be implemented with CSS transitions only — no new JavaScript animation libraries.

### Explicitly Out of Scope

- Streaming individual tokens into the response (requires backend changes to LangGraph output nodes).
- Showing partial SQL or intermediate query results.
- Modifying the right-panel trace behavior.
- Mobile/tablet layout (same constraint as other specs — desktop 1024px+ only).

---

## 2. The 5 Visual States

### State 0 — Submitted (0–500ms)

**Trigger:** User presses Send or hits Enter.

**Main chat area shows:**
- User query bubble appears immediately (right-aligned, green or light bg)
- Response area: animated typing indicator — 3 dots pulsing at 600ms interval
- Label below dots: none (keep it minimal, dots are universal)

**Right panel:** unchanged (no steps yet)

---

### State 1 — Intent Identified (500ms–3s)

**Trigger:** LangGraph Step 1 (Identifying Intent) returns.

**Main chat area shows:**
- Typing dots replaced by intent card
- Intent card layout:
  - Top: small icon row — `BulbOutlined` in muted gray (#9CA3AF) + label "Understanding your question…" in 12px #6B7280
  - Body: 2–3 lines of conversational plain-language interpretation in 14px #374151
  - Card background: #F9FAFB, border: 1px #E5E7EB, border-radius: 8px, padding: 12px 16px
  - No DataWeave branding — reads like the system genuinely thinking

**Sample intent text for assortment query:**
> "You're asking about your Beverages assortment at Walmart and Target. I'll compare your current SKU coverage against competitor listings and check for gaps by sub-category."

**Sample intent text for pricing query:**
> "This looks like a price index question for Whirlpool products across three retailers. Pulling MAP compliance data and competitor pricing for the last 30 days."

**Right panel:** Step 1 shows checkmark, Step 2 begins

---

### State 2 — Skeleton Appears (3s–10s)

**Trigger:** Step 2 (Retrieving Context) complete → Step 3 (Clarifying & Enriching) begins.

**Main chat area shows:**
- Intent card stays (pinned above the skeleton)
- Below intent card: skeleton answer block fades in (200ms opacity transition)
- Skeleton answer block:
  - 3 lines of skeleton text (gray bars, varying widths: 90%, 75%, 55%) — opacity 0.4, borderRadius 4px
  - 12px gap
  - Skeleton table: 1 header row (3 columns, gray bars at 40px height) + 4 body rows (gray bars at 32px height each)
  - No shimmer yet — static skeleton only at this stage
  - Total skeleton block height: ~220px
- Below intent card, above skeleton: 1-line label "Building your answer…" in 12px #9CA3AF, with a slow pulsing dot (1.5s ease-in-out loop)

**Right panel:** Steps 2–3 in progress

---

### State 3 — Generating (10s–27s)

**Trigger:** Step 4 (Executing SQL) complete → Step 5 (Generating Result) begins.

**Main chat area shows:**
- Intent card: collapses to a single line (compact mode) — icon + "I found relevant data across [N] categories." — 32px height, same card styling, opacity 0.7
- Skeleton answer block: activates shimmer animation
  - Shimmer: linear-gradient sweeping left-to-right over skeleton bars, 2s duration, infinite
  - Shimmer color: rgba(255,255,255,0.6) sweep over #E5E7EB base
  - Table skeleton: column headers resolve one-by-one (each header fades from skeleton bar to real column name text at 500ms intervals) — this is the "burst building" feeling
- Label changes to: "Generating insights…" in 12px #9CA3AF

**If Step 5 exceeds 20s:**
- Below skeleton, add: "Still working — complex queries take a moment." in 13px #6B7280, italic, centered. Auto-dismisses when answer arrives.

**Right panel:** Step 5 in progress

---

### State 4 — Answer Revealed (27s / Step 5 complete)

**Trigger:** Full response (narrative + table data) available from backend.

**Transition:**
- Intent card: fades out entirely (200ms opacity → 0, height collapses)
- Skeleton: cross-fades to real content simultaneously (skeleton opacity 0 → real content opacity 1, 300ms)
- No layout jump — skeleton block and real answer block are the same height estimate
- Table rows: appear with a staggered fade (each row fades in 50ms after the previous — creates a "data populating" feel without being slow)

**Main chat area shows:**
- Full response: narrative summary + paginated data table + CSV download (existing)
- Feedback thumbs (existing)
- Download action row (per download-options spec)

**Right panel:** All 5 steps complete with timing

---

## 3. Content Rules for Intent Text (State 1)

The intent interpretation text must follow these rules to feel genuine and not like a loading message:

| Rule | Example (correct) | Anti-pattern (wrong) |
|---|---|---|
| Mention the actual data domain | "your Beverages assortment at Walmart" | "your query data" |
| Mention the comparison axis | "comparing your SKU coverage vs. competitor listings" | "analyzing your request" |
| Name the time range if inferable | "pricing data for the last 30 days" | "recent data" |
| Never use technical step names | "Checking your catalog" | "Clarifying & Enriching Query" |
| 2 sentences max | — | 4+ sentences |
| No system/engineering framing | "I'll look at…" | "Initializing LangGraph enrichment node…" |

**Implementation note:** The LangGraph Step 1 output already classifies intent and extracts entities (brand, retailer, time range, module). The intent display text is a simple template populated from those entities — not an additional LLM call.

Template pattern:
```
"You're asking about [entity_1] [at/across/for] [entity_2]. I'll [action verb] [data_source] [time_qualifier]."
```

---

## 4. State Machine

```
[Query submitted]
      ↓ immediate
  STATE 0 — Dots (typing indicator)
      ↓ ~2s (Step 1 returns)
  STATE 1 — Intent card
      ↓ ~3s (Step 2 complete)
  STATE 2 — Skeleton visible (static)
      ↓ ~10s (Step 4 begins)
  STATE 3 — Skeleton shimmer + header resolve
      ↓ Step 5 complete (≤27s)
  STATE 4 — Answer revealed
      ↓ (if Step 5 > 20s)
  STATE 3b — Reassurance line shown (then dismissed on reveal)

  [Any step → error]
      ↓ immediately
  ERROR — Skeleton collapses, error message rendered
```

---

## 5. Animation Specifications

| Element | Property | Value |
|---|---|---|
| Typing dots | animation | pulse, 600ms ease-in-out, infinite, staggered 200ms per dot |
| Intent card (enter) | transition | opacity 0→1, translateY(8px→0), 200ms ease-out |
| Skeleton block (enter) | transition | opacity 0→0.9, 200ms ease-out |
| Skeleton shimmer | background | linear-gradient(90deg, #E5E7EB 25%, #F3F4F6 50%, #E5E7EB 75%), background-size: 200%, animation: shimmer 2s infinite |
| Column header resolve | transition | opacity 0→1 per header, 500ms, staggered 500ms apart |
| Intent card (collapse) | transition | height → 32px, 150ms ease-in, opacity → 0.7 |
| Answer burst (enter) | transition | opacity 0→1, 300ms ease-out, concurrent with skeleton fade-out |
| Table row stagger | transition | opacity 0→1 per row, 50ms stagger, starting at row 1 |

---

## 6. Open Questions

| # | Question | Owner | Urgency |
|---|---|---|---|
| OQ-1 | Does the LangGraph Step 1 output expose intent classification + extracted entities (brand, retailer, time range) in a format the frontend can consume before Step 5 completes? Or does the frontend only receive the final assembled response? | Engineering (Suraj/Purna) | High — State 1 depends on this |
| OQ-2 | Can the frontend receive a Step-complete event stream from LangGraph (e.g., a websocket or SSE channel that emits as each step finishes), or does it currently poll on a single endpoint? | Engineering | High — State transitions require step-level events |
| OQ-3 | Is the SQL result (Step 4 output) available to the frontend before narrative generation (Step 5) completes? If yes, the table could render real data with skeleton narrative only — a better experience. | Engineering | Medium |
| OQ-4 | Estimated effort for Step 1 entity extraction → frontend template population (not an LLM call, just structured JSON parsing)? | Engineering | Medium |

---

## 7. Claude Design Prompt

Use this prompt in Claude's design tool to generate visual mockups of all 5 states.

---

```
Design a multi-state loading and response experience for "Ask Me" — a B2B AI analytics chat interface by DataWeave. Target aesthetic: clean enterprise SaaS (Linear, Vercel), white main area, minimal ornamentation. Font: Inter. Primary background: #FFFFFF. Card surface: #F9FAFB. Borders: #E5E7EB. Text primary: #111827. Text secondary: #6B7280. Muted metadata: #9CA3AF.

Show 5 states as a vertical sequence (labeled STATE 0 through STATE 4), each in a 800px-wide chat column, full-width white background, representing the main chat area only (no sidebar, no right panel).

Above all states, show one shared element: the user's query bubble — right-aligned, rounded pill shape, light sage green background (#DCFCE7), dark text, text reads: "What is my assortment gap in Beverages vs competitors at Walmart and Target?" This bubble appears identically at the top of all 5 states.

---

STATE 0 — SUBMITTED (label top-left: "State 0 · 0–500ms")
Below the query bubble:
- Left-aligned response area, 12px top margin
- Show an animated typing indicator: 3 small circles (8px diameter, #9CA3AF fill) horizontally spaced 6px apart, inside a minimal container with no card background — just the dots on white. Label below in 11px #9CA3AF: "(dots pulse at 600ms)"

---

STATE 1 — INTENT IDENTIFIED (label: "State 1 · ~2s")
Below the query bubble:
- Left-aligned intent card: background #F9FAFB, 1px border #E5E7EB, border-radius 8px, padding 12px 16px, max-width 600px
- Inside the card:
  - Top row: BulbOutlined icon (14px, #9CA3AF) + text "Understanding your question…" in 12px #9CA3AF, 500 weight. 4px gap between icon and text.
  - 8px gap
  - Body text (2 sentences, 14px #374151, regular weight, line-height 1.5):
    "You're asking about your Beverages assortment at Walmart and Target. I'll compare your current SKU coverage against competitor listings and check for gaps across sub-categories."
- No shadow on the card, just the border.

---

STATE 2 — SKELETON VISIBLE (label: "State 2 · ~3–10s")
Below the query bubble:
- Intent card (same as State 1, unchanged)
- 12px gap
- Label line: small left-aligned text "Building your answer…" in 12px #9CA3AF, with a small filled circle (6px, #9CA3AF) to the left — this is the "pulsing dot" indicator. Add "(slow pulse)" annotation.
- 8px gap
- Skeleton answer block (static, no shimmer):
  - 3 skeleton text lines: gray rounded bars (#E5E7EB, border-radius 4px, height 14px), widths 90%, 75%, 55% of the container. 8px vertical gap between lines.
  - 16px gap
  - Skeleton table:
    - 1 header row: 3 gray bars (height 16px, #E5E7EB, rounded), widths 25%, 35%, 20%, separated by 12px gaps
    - 4 body rows: 3 gray bars each (height 12px, #F3F4F6, slightly lighter than header), same width pattern, 10px row gap
  - Entire skeleton block: opacity 0.85, no border, no card background — just the skeleton bars on white.

---

STATE 3 — GENERATING (label: "State 3 · ~10–27s")
Below the query bubble:
- Intent card in COMPACT mode: same card styling but collapsed to 32px height, single line inside: BulbOutlined (12px, #9CA3AF) + "I found relevant data across 3 sub-categories." (13px #6B7280). Card opacity 0.7.
- 12px gap
- Label: "Generating insights…" in 12px #9CA3AF with pulsing dot
- 8px gap
- Skeleton answer block — same as State 2 BUT:
  - Add shimmer animation annotation: show a highlight sweep across the skeleton bars diagonally — illustrate by drawing a soft white gradient band crossing the skeleton text bars from left to right. Add annotation: "(2s shimmer sweep, infinite)"
  - Table skeleton: show 2 of the 3 column headers RESOLVED to real text (first column header shows "Subcategory" in 12px #374151, second shows "SKU Count" in 12px #374151) while the third column header is still a skeleton bar. Add annotation: "(headers resolve 500ms apart)"
- Show "reassurance" variant inline as a small annotation below the skeleton block: small italic text "Still working — complex queries take a moment." in 13px #6B7280, centered. Add "(only shown if >20s)" annotation.

---

STATE 4 — ANSWER REVEALED (label: "State 4 · ~27s · answer complete")
Below the query bubble:
- Intent card: gone (collapsed out)
- Full response card — white background, 1px border #E5E7EB, border-radius 8px, padding 16px 20px:
  - Narrative summary: 2 sentences of real text in 14px #111827, with key numbers bolded (e.g., "Your Beverages assortment has a **34% gap** vs competitors at Walmart, largest in Sparkling Water (**-47 SKUs**). Coverage is strongest in Juices (+12 SKUs ahead).")
  - 16px gap
  - Ant Design Table (compact size): 5 visible rows, column headers: "Subcategory" | "Your SKUs" | "Competitor Avg" | "Gap". Real data in cells (Sparkling Water: 28 / 53 / -25, Juices: 61 / 49 / +12, Still Water: 34 / 41 / -7, Energy Drinks: 19 / 44 / -25, Sports Drinks: 12 / 38 / -26). Pagination: "1–5 of 18 rows". Ant Design default table styling.
  - 12px gap
  - Action row (right-aligned): ThumbsUp (outlined, 16px, #9CA3AF) | ThumbsDown (outlined, 16px, #9CA3AF) | (gap) | DownloadOutlined (16px, #9CA3AF) | ShareOutlined (16px, #9CA3AF)
- Add annotation to the STATE 3→4 transition: show a thin arrow between the two states labeled "300ms cross-fade + row stagger (50ms per row)"

---

ADDITIONAL NOTES FOR ALL STATES:
- Left-align all response content. The user query is right-aligned; the AI response starts from the left edge of the content column.
- No avatar or AI icon needed next to the response — the response area is self-identifying.
- No card shadow on any element — enterprise flat aesthetic, borders only.
- Between STATE 3 and STATE 4, illustrate the row stagger by showing a partial state: rows 1–2 fully visible, rows 3–5 at 20% opacity (mid-stagger). Label it: "State 4a · row stagger in progress (250ms total)".
- Viewport: 1280px wide, center content in 800px max-width column.
- Show a thin vertical timeline on the far left of the entire composition: a line connecting all 5 states with time labels (0ms, 2s, 3s, 10s, 27s) — this helps communicate the temporal flow of the states to the engineering team.
```

---

*Spec version: 1.0 — 2026-05-14*
*Next review: after OQ-1 and OQ-2 are answered (engineering feasibility gates State 1 + State 3)*
