# Feedback UX Redesign — Design Spec
**Feature:** Ask Me — AI Response Feedback
**Author:** PM OS (Senior UX/PM)
**Date:** 2026-05-13
**Status:** Draft — ready for engineering review

---

## 1. Functional Requirements

### Must Do

1. Every AI response block must display a thumbs-up icon and a thumbs-down icon below the response text, visible on render (not hover-gated).
2. Clicking thumbs-up must open a feedback modal with three 5-star rating dimensions and an optional free-text field.
3. Clicking thumbs-down must open a feedback modal with a single-select dropdown of DataWeave-specific failure mode options and an optional free-text field.
4. All fields in both modals are optional — the submit button must be enabled immediately on modal open.
5. Submitting either modal must send a structured payload to the feedback API containing: response_id, session_id, feedback_type (positive/negative), rating dimensions (thumbs-up only), selected_failure_mode (thumbs-down only), free_text (both), and timestamp.
6. After submission, the modal must close and the selected thumbs icon must change to a filled/active state indicating the response was recorded. It must not revert.
7. If the user clicks the already-active thumbs icon again, nothing happens — no re-open, no toggle-off.
8. Dismissing the modal without submitting (Escape key, clicking outside, clicking X) must leave the thumbs icons in their original unfilled state — no submission is recorded.
9. The modal must trap focus while open. Tab must cycle through interactive elements only within the modal.
10. Escape key must close the modal without submitting.
11. Both modals must render correctly at viewport widths from 1024px to 1920px (DataWeave's primary desktop range). No mobile optimization required in this version.
12. Submission must be non-blocking — if the feedback API call fails, log the error silently and show a dismissible inline error message below the thumbs icons ("Feedback couldn't be saved — try again"). Do not interrupt the user's session.

### Explicitly Out of Scope

- Editing or retracting feedback after submission.
- Admin-facing feedback dashboard or reporting.
- Per-token or per-sentence granular feedback (highlight-and-rate).
- Mobile or tablet layout optimization.
- Multi-select on the thumbs-down failure mode dropdown (single select only).
- Feedback on chat input (user messages) — only AI response blocks.
- A/B testing infrastructure for modal variants.
- Any analytics instrumentation beyond the feedback API payload defined in §2.

---

## 2. Information Design

### Thumbs-Up Modal

**Modal title:** "What did this get right?"
**Subtitle (below title, lighter weight):** "Takes 10 seconds. Helps us surface better answers."

#### Rating Dimensions (5-star each)

| Label | Sublabel (tooltip on hover over label) | Default state |
|---|---|---|
| Content Correctness | "Were the numbers, metrics, and facts accurate?" | 0 stars (empty) |
| Content Relevance | "Did this answer your actual question?" | 0 stars (empty) |
| Content Completeness | "Did the response cover everything you needed?" | 0 stars (empty) |

- Stars use Ant Design `Rate` component, count=5, allowClear=false.
- Stars render in DataWeave green (#3E8C2F or brand token `--color-primary`).
- Rating labels appear left-aligned, star widget right-aligned in a 2-column row layout.

#### Free Text

- **Label:** "Anything else?" (optional, shown inline next to label in muted gray)
- **Placeholder:** "e.g. The competitor share data for Q1 was spot on."
- **Component:** Ant Design `Input.TextArea`, autoSize={{ minRows: 2, maxRows: 4 }}
- **Max length:** 500 characters. Character count shown bottom-right of textarea (e.g., "0 / 500").

#### Actions

- **Primary button:** "Submit feedback" — Ant Design `Button` type="primary". Always enabled.
- **Secondary/text link:** "Skip" — dismisses modal without submitting, no state change.
- Button row: right-aligned, Skip on left of Submit.

---

### Thumbs-Down Modal

**Modal title:** "What went wrong?"
**Subtitle:** "Select the closest match. This feeds directly into our AI pipeline review."

#### Failure Mode Dropdown

- **Label:** "What best describes the issue?" (optional marker in muted gray)
- **Component:** Ant Design `Select`, mode=default (single select), showSearch=false.
- **Placeholder:** "Select an issue type..."
- **Options (in display order):**

| Value | Display label | Pipeline stage mapped |
|---|---|---|
| `scope_wrong` | "Wrong scope — incorrect brand, retailer, or module" | Intent Identification |
| `data_incomplete` | "Data was incomplete — missing categories or time range" | Context Retrieval |
| `answer_off_target` | "Didn't answer what I asked" | Query Enrichment |
| `numbers_wrong` | "Numbers or metrics look incorrect" | SQL Generation / Execution |
| `competitor_data_missing` | "Competitor data was missing or wrong" | Context Retrieval / Result Generation |
| `too_vague` | "Response was too vague — not actionable" | Result Generation |
| `other` | "Other" | — |

- Selecting "Other" does not change the modal layout — the free-text field is always visible.

#### Free Text

- **Label:** "More detail" (optional)
- **Placeholder:** "e.g. Asked for Walmart shelf share but got Amazon data instead."
- **Component:** Ant Design `Input.TextArea`, autoSize={{ minRows: 2, maxRows: 4 }}
- **Max length:** 500 characters with counter.

#### Actions

- **Primary button:** "Submit feedback" — always enabled.
- **Secondary:** "Skip" — dismisses without submitting.
- Button row: right-aligned, Skip on left of Submit.

---

### Backend Payload — Thumbs Up

```json
{
  "feedback_type": "positive",
  "response_id": "<uuid>",
  "session_id": "<uuid>",
  "timestamp": "<ISO 8601>",
  "ratings": {
    "content_correctness": 0–5,
    "content_relevance": 0–5,
    "content_completeness": 0–5
  },
  "free_text": "<string | null>"
}
```

- If user submits without touching any star, the dimension value is `null`, not `0`.

### Backend Payload — Thumbs Down

```json
{
  "feedback_type": "negative",
  "response_id": "<uuid>",
  "session_id": "<uuid>",
  "timestamp": "<ISO 8601>",
  "failure_mode": "<value | null>",
  "free_text": "<string | null>"
}
```

---

## 3. Conceptual Design

### Component Map

| Element | Ant Design Component | Props / Notes |
|---|---|---|
| Modal shell (both) | `Modal` | width=480, centered=true, maskClosable=true, destroyOnClose=true, footer=null (custom footer inside body) |
| Star rating rows | `Rate` | count=5, allowClear=false, style color token |
| Rating row layout | `Form.Item` inside `Form` layout="horizontal" | labelCol={{ span: 14 }}, wrapperCol={{ span: 10 }} |
| Failure mode select | `Select` | width=100%, dropdownMatchSelectWidth=true |
| Free text | `Input.TextArea` | showCount=true, maxLength=500 |
| Submit button | `Button` type="primary" | htmlType="submit" |
| Skip link | `Button` type="text" | No icon, muted color |
| Thumbs icons (trigger) | `Button` type="text" + Ant Design icon | `LikeOutlined`/`LikeFlled`, `DislikeOutlined`/`DislikeFilled` |
| Post-submit toast | `message.success()` | Duration 2.5s, appears top-center |
| Error state | Inline `Alert` type="error" below thumbs icons | Dismissible, shown only on API failure |

### Modal Layout — Thumbs Up

```
┌─────────────────────────────────────────┐
│  What did this get right?               │
│  Takes 10 seconds. Helps us surface...  │
│─────────────────────────────────────────│
│  Content Correctness     ★ ★ ★ ★ ★    │
│  Content Relevance       ★ ★ ★ ★ ★    │
│  Content Completeness    ★ ★ ★ ★ ★    │
│─────────────────────────────────────────│
│  Anything else? (optional)              │
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
│                              0 / 500    │
│─────────────────────────────────────────│
│                    [Skip]  [Submit feedback] │
└─────────────────────────────────────────┘
```

### Modal Layout — Thumbs Down

```
┌─────────────────────────────────────────┐
│  What went wrong?                       │
│  Select the closest match...            │
│─────────────────────────────────────────│
│  What best describes the issue? (opt.)  │
│  ┌─────────────────────────────────────┐│
│  │ Select an issue type...           ▾ ││
│  └─────────────────────────────────────┘│
│─────────────────────────────────────────│
│  More detail (optional)                 │
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
│                              0 / 500    │
│─────────────────────────────────────────│
│                    [Skip]  [Submit feedback] │
└─────────────────────────────────────────┘
```

### Trigger Placement

- Thumbs-up and thumbs-down icons render as a horizontal pair, left-aligned, directly below the AI response text block.
- Spacing: 8px gap between icons, 12px margin-top from response text.
- Icons are 16px, color `--color-text-secondary` in default state.
- No label text next to icons (icons are universally understood; labels add visual noise in a dense chat UI).

### State Transitions

**Thumbs-Up Flow:**
`default (LikeOutlined, gray)` → [click] → `modal open` → [submit] → `modal close + LikeFilled (green) + toast` → `permanent filled state`

**Thumbs-Down Flow:**
`default (DislikeOutlined, gray)` → [click] → `modal open` → [submit] → `modal close + DislikeFilled (red) + toast` → `permanent filled state`

**Dismiss without submitting:**
`modal open` → [Escape / click outside / Skip] → `modal close` → `icons return to default unfilled state`

**Mutual exclusivity:** If thumbs-down is already active and user clicks thumbs-up, ignore the click (no modal, no state change). Vice versa. Once feedback is submitted for a response, it is locked.

---

## 4. Interactive Design

### Hover States — Thumbs Icons

- **Thumbs Up (default):** On hover → icon color shifts to `--color-primary` (green), scale 1.1 via CSS transform. Tooltip: "This was helpful".
- **Thumbs Down (default):** On hover → icon color shifts to `#E53E3E` (red), scale 1.1. Tooltip: "This wasn't helpful".
- **Active (filled) state:** No hover effect — cursor: default. Tooltip: "Feedback recorded".
- Tooltip component: Ant Design `Tooltip`, placement="top", mouseEnterDelay=0.5.
- Transition: `color 150ms ease, transform 150ms ease`.

### Modal Open/Close Animation

- **Open:** Ant Design Modal default animation (`zoom` transition from center). Duration: 200ms. No custom override needed.
- **Close (submit or dismiss):** Modal fades out. Duration: 150ms (Ant Design default).
- **Mask:** Standard Ant Design mask, opacity 0.45. Clicking mask = dismiss without submit.

### Post-Submission Behavior

- Modal closes immediately on submit click (optimistic UI — do not wait for API response).
- Toast notification appears top-center via `message.success("Feedback recorded — thank you.")`, duration 2.5 seconds, auto-dismiss.
- Thumbs icon switches to filled state simultaneously with modal close.
- If API call returns error after optimistic close: show inline `Alert` below the response block — "Feedback couldn't be saved. Try again." — with a retry link that re-opens the pre-filled modal with the same values.

### Dismiss Without Submit

- Escape key, clicking outside modal, or clicking "Skip" all trigger the same dismiss path.
- `destroyOnClose=true` on Modal — component unmounts cleanly, no stale state.
- Icons return to unfilled gray state.
- No toast, no API call.
- Console log (dev only): `[feedback] modal dismissed without submission — response_id: <id>`

### Keyboard Accessibility

| Key | Behavior |
|---|---|
| `Tab` | Cycles through: first star of dimension 1 → dimension 2 → dimension 3 → textarea → Skip → Submit |
| `Arrow keys` (when star focused) | Left/right adjusts star rating within that dimension |
| `Space` / `Enter` (on star) | Selects that star value |
| `Enter` (on Submit button) | Submits form |
| `Escape` | Closes modal without submitting |
| `Tab` in textarea | Moves to next element (does not insert tab character) |

- Both modals must have `aria-modal="true"` and `role="dialog"` on the Modal wrapper.
- Modal title must be referenced via `aria-labelledby`.
- Star ratings must have `aria-label` per dimension: e.g. `aria-label="Content Correctness rating"`.
- After modal opens, focus must move to the first interactive element (first star group or dropdown).
- After modal closes, focus must return to the thumbs icon that triggered it.

---

## 5. Claude Design Prompt

Paste the following prompt into Claude's design generation tool to produce high-fidelity mockups:

---

**PROMPT START**

Design two modal dialogs for a B2B SaaS AI chat interface called "Ask Me" built on React + Ant Design. The product is DataWeave — a retail intelligence platform used by enterprise buyers at companies like Costco, Home Depot, and Whirlpool. The primary color is DataWeave green (#3E8C2F). The UI has a dark sidebar and a white main content area. Use Ant Design's design language throughout — clean, enterprise, minimal ornamentation.

Generate four screens total:

**Screen 1 — Thumbs-Up Modal (default state, no input yet)**
- Modal width: 480px, centered on page
- Title: "What did this get right?" in 16px semibold, dark gray (#1F2937)
- Subtitle below title: "Takes 10 seconds. Helps us surface better answers." in 13px, muted gray (#6B7280)
- Horizontal divider below subtitle
- Three rating rows in a form layout (label left, stars right):
  - Row 1 — Label: "Content Correctness" | Sublabel below label in 11px muted: "Were the numbers accurate?" | 5 stars, empty state, star color #3E8C2F
  - Row 2 — Label: "Content Relevance" | Sublabel: "Did this answer your actual question?" | 5 stars, empty
  - Row 3 — Label: "Content Completeness" | Sublabel: "Did it cover everything you needed?" | 5 stars, empty
- 12px vertical gap between rows
- Horizontal divider below ratings
- Text area section: Label "Anything else?" in 13px with "(optional)" in muted gray inline. Placeholder text: "e.g. The competitor share data for Q1 was spot on." Textarea height ~64px. Character counter bottom-right: "0 / 500" in 11px muted.
- Footer: right-aligned button row. Left button: "Skip" as a text button in muted gray. Right button: "Submit feedback" as primary button in DataWeave green (#3E8C2F), white text, border-radius 6px.
- Modal has standard Ant Design X close button top-right.
- Drop shadow on modal: 0 8px 32px rgba(0,0,0,0.12).

**Screen 2 — Thumbs-Up Modal (filled state, 4 stars on first dimension, 3 text entered)**
- Same structure as Screen 1 but:
  - "Content Correctness" shows 4 filled green stars, 1 empty
  - "Content Relevance" shows 3 filled green stars
  - Textarea contains: "The Walmart pricing comparison was accurate for the period."
  - Character counter: "55 / 500"
  - Submit button active, same green

**Screen 3 — Thumbs-Down Modal (default state)**
- Modal width: 480px, centered
- Title: "What went wrong?" in 16px semibold dark gray
- Subtitle: "Select the closest match. This feeds directly into our AI pipeline review." in 13px muted gray
- Horizontal divider
- Dropdown section: Label "What best describes the issue?" in 13px with "(optional)" muted inline. Full-width Ant Design Select component, placeholder "Select an issue type..." with dropdown chevron. Ant Design default styling.
- 12px gap
- Textarea section: Label "More detail" in 13px with "(optional)" muted. Placeholder: "e.g. Asked for Walmart shelf share but got Amazon data instead." Textarea ~64px. Counter: "0 / 500".
- Footer: same button row as Screen 1 — "Skip" text button left, "Submit feedback" green primary right.
- X close button top-right.

**Screen 4 — Thumbs-Down Modal (dropdown open, showing all 7 options)**
- Same as Screen 3 but dropdown is open and showing all options as a list below the select field:
  1. "Wrong scope — incorrect brand, retailer, or module"
  2. "Data was incomplete — missing categories or time range"
  3. "Didn't answer what I asked"
  4. "Numbers or metrics look incorrect"
  5. "Competitor data was missing or wrong"
  6. "Response was too vague — not actionable"
  7. "Other"
- Option 3 "Didn't answer what I asked" is highlighted (hover state) in light green (#F0FAF0)
- Dropdown list has Ant Design card shadow and 6px border-radius

**Context for all screens:**
- Behind the modal, show a blurred/dimmed background of the Ask Me chat interface: dark sidebar on left (width ~240px, dark navy #1E2A3B), white main area with a few chat message bubbles visible, one AI response bubble showing text and two small thumbs-up / thumbs-down icons (LikeOutlined / DislikeOutlined, 16px, gray) below it.
- The thumbs-up icon on the response should appear in green filled state (LikeFilled) for Screens 1 and 2 (indicating thumbs up was clicked). The thumbs-down icon should appear gray filled state for Screens 3 and 4.
- Show the page dimmed behind the modal with standard 45% opacity dark overlay.

**Typography:** Use Inter or SF Pro Display. Enterprise feel, not consumer-app.
**Do not add any decorative illustrations or gradients.** Clean, flat, functional — the user is a retail analyst, not a consumer.

**PROMPT END**

---

*Spec version: 1.0 — 2026-05-13*
*Next review: after first engineering spike (estimate 1 sprint)*
