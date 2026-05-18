# UX Spec: Context-Aware Suggested Questions
**Product:** DataWeave Ask Me (AI Chat Interface)
**Author:** PM OS — Design Spec
**Status:** DRAFT FOR DISCUSSION
**Written:** 2026-05-13
**Surface:** `stage.dataweave.com/query?base_view=query`
**Tech Stack:** React + Ant Design

---

## Background

The live interface today shows 3 static assortment chips to every user regardless of module. A PI account gets AA questions. A DSA account gets AA questions. The chips have zero signal value and generate low click rates as a result. This spec defines the replacement: a tiered suggestion system with a static module-matched base layer and a dynamic personalization layer driven by account query patterns.

---

## 1. Functional Requirements

### 1.1 Module Detection

Module is determined at the account level, not per-session. Detection order (first match wins):

1. **Account config flag** — server-side field `account.module` set during onboarding. Values: `AA` · `PI` · `DSA` · `MULTI` (for accounts with multiple modules active). This is the authoritative source.
2. **URL param override** — `?module=PI` (or `AA`, `DSA`) allows PM/CSM/QA to force a module for testing without changing account config. Non-persistent; expires with the session.
3. **Fallback** — if `account.module` is null or unrecognized, serve AA static questions (AA is the most broadly deployed module and the safest default).

No explicit toggle is surfaced to end users. Module context is transparent — users do not select their module; the system detects it.

**MULTI accounts:** show the static question set for whichever module the user most recently queried. If no query history exists, show AA as default and note this in the empty state subheading: "Showing Assortment Analytics questions — your questions will personalize as you explore."

### 1.2 Static Question Set (Per Module)

Four curated questions per module. These are always shown. They do not change between sessions. They are the fallback if dynamic suggestions fail.

Full question text: see Section 5.

### 1.3 Dynamic Suggestion Logic

Two dynamic suggestions per session, generated from account-level signals. Priority order:

**Signal 1 — Query frequency (primary driver)**
Parse the account's stored query history (LangGraph session metadata + Postgres). Identify the 2 most frequently queried dimensions — e.g., "Beverages > Juice" queried 14 times, "Electronics > Headphones" queried 9 times. Surface question templates slotted with those dimension names.

Example template (AA): `"How does my {top_category} assortment compare to competitors at the sub-category level?"` → rendered: `"How does my Beverages assortment compare to competitors at the sub-category level?"`

**Signal 2 — Account metadata (fallback if query history is sparse)**
Use account's configured category/brand scope from the account knowledge object (already built in Phase 1 for AA). Pull the top category by SKU count and slot it into a template. This covers new accounts with no query history.

**Minimum query history threshold:** 5 queries minimum to activate Signal 1. Below 5 queries, fall back to Signal 2 (metadata). Below 5 queries AND no metadata available, suppress dynamic suggestions entirely and show only static chips.

**Refresh cadence:** Dynamic suggestions are generated once per session on chat open. They do not change mid-session unless the user explicitly clicks "Refresh." They are NOT regenerated after each response (would be distracting).

**Template library:** Maintain one template per static question per module, with `{category}`, `{brand}`, `{retailer}` slots. Templates live in the account knowledge config, not hardcoded in UI.

### 1.4 Where Suggestions Appear

**Empty state (primary surface):** Always shown before the first message in a new chat. This is the high-value moment — the user has no context and is looking for a starting point.

**Mid-conversation (secondary surface, opt-in):** After the FIRST response only in a session, surface a compact "What to ask next" row below the response card. This fires once per session, not after every response. Rationale: every-response surfacing creates noise; first-response is the highest-intent moment when the user is still forming their exploration path.

Mid-conversation chips use the same dynamic logic but generate 2 chips (not 5) — one contextually related to the just-answered query (same category/dimension), one from a different dimension (to encourage exploration).

### 1.5 Click Behavior

Clicking any suggestion chip **fills the chat input** with the question text. The user sees it pre-populated and can edit before sending. The chip does NOT auto-submit.

Rationale: dynamic questions contain slot-filled values that may need correction ("How does my Beverages assortment..." when the user actually wants to ask about Snacks). Auto-submit would send a wrong query before the user can correct it. Fill-then-confirm is the safer default.

---

## 2. Information Design

### 2.1 Empty State Layout

```
[Greeting area]
"Hi, [Account Name]! How can I assist you today?"    [Beta badge]

[Chat input — full width]
[ Ask me anything...                              ↑ Send ]

[Suggestion section — below input]
──────────────────────────────────────────────────────────
  Suggested questions
  [Static chip 1]  [Static chip 2]  [Static chip 3]  [Static chip 4]

  For your account
  [Dynamic chip 1]  [Dynamic chip 2]
──────────────────────────────────────────────────────────
```

- Section header "Suggested questions" — Ant Design `Typography.Text` in `secondary` color (#8C8C8C), 12px, uppercase, letter-spacing 0.5px.
- Section header "For your account" — same treatment. The section label is the differentiator; no icons or badges on individual chips.
- Total chip count: max 6 (4 static + 2 dynamic). Never show more than 6 chips in empty state.
- If dynamic chips are loading: show 2 skeleton chips in the "For your account" row (see Section 3.3).
- If dynamic chips fail: suppress the "For your account" row entirely. Show only static chips + static section header. No error message. Silent fallback.

### 2.2 Static vs Dynamic Visual Differentiation

The section header is the primary differentiator. No icons, colors, or badges on individual chips — they are visually identical to avoid implying a quality ranking.

**Why not use colors/icons per chip:** Visual hierarchy within chips implies one type is "better." Both types are equally valid starting points. The section grouping communicates the distinction without creating noise.

### 2.3 Mid-Conversation Format

After first response only: a "What to ask next" row rendered as a compact horizontal strip below the response card, above the chat input.

```
[Response card — data table + narrative]

What to ask next:
[Contextual chip]  [Exploratory chip]           [×  dismiss]
```

- Strip background: `#FAFAFA` (Ant Design `gray-1`), 1px border `#F0F0F0`, border-radius 8px, padding 12px 16px.
- "What to ask next:" — `Typography.Text` secondary, 12px.
- Dismiss (×) — `CloseOutlined` icon, right-aligned. Clicking permanently hides the strip for the remainder of the session (not a per-message dismiss — once dismissed it's gone).
- Two chips only. Do not wrap to a second row — if chip text is long, truncate at 60 chars with ellipsis and show full text on hover (Tooltip).

### 2.4 Chip Count Caps

| Surface | Static | Dynamic | Total |
|---|---|---|---|
| Empty state | 4 | 2 | 6 |
| Mid-conversation | 0 | 2 | 2 |

---

## 3. Conceptual Design

### 3.1 Ant Design Components

| Element | Component | Configuration |
|---|---|---|
| Suggestion chips | `Tag` | `color="default"`, bordered, cursor: pointer. Size: default (24px height). |
| Section headers | `Typography.Text` | `type="secondary"`, 12px, uppercase tracking. |
| Loading skeleton | `Skeleton.Button` | `size="small"`, `shape="round"`, `active`. Width: 140px for first chip, 180px for second (varied widths feel more natural than uniform). |
| Mid-conversation strip | `Card` | `size="small"`, `bordered`, `bodyStyle={{ padding: '12px 16px' }}`. |
| Hover tooltip (truncated chips) | `Tooltip` | `placement="top"`, `title={fullQuestionText}`. Applied only when text is truncated. |
| Refresh button | `Button` | `type="text"`, `icon={<ReloadOutlined />}`, 12px text "Refresh". Placed inline right of "For your account" section header. |

### 3.2 Chip Layout

Horizontal wrap. Chips flow left-to-right, wrapping to a second line if the viewport is narrow. No fixed grid. No vertical list.

- Chip gap: 8px horizontal, 8px vertical (when wrapping).
- Max chip width: 320px. Text truncates with ellipsis beyond that.
- Min chip width: content-width (no forced minimum — short chips are fine).
- Section spacing: 16px between the two sections (static group → dynamic group).

The two sections (static + dynamic) are vertically stacked. Static section first, dynamic section second. Rationale: static questions always render immediately; dynamic questions may take 300–800ms to load. Stacking prevents layout shift — the static section anchors the layout while the dynamic row loads below it.

### 3.3 Loading State

When the chat opens and dynamic suggestions are being fetched (API call in progress):

- Render the "For your account" section header immediately.
- Show 2 `Skeleton.Button` chips (active pulse animation) at widths 140px and 180px.
- Target load time: < 500ms (suggestions API should be fast — it's a count query on session logs, not an LLM call).
- If the API has not resolved in 1500ms, suppress the dynamic section and show only static chips. No spinner, no timeout message.

### 3.4 Error / Fallback State

If the dynamic suggestions API returns an error or empty result:
- Hide the "For your account" section and its header entirely.
- Show only the 4 static chips under "Suggested questions."
- No toast, no error message, no "suggestions unavailable" label.
- Log the failure server-side for monitoring. Do not surface it to the user.

### 3.5 Refresh Action

Yes — include a Refresh action, but low-prominence. A `ReloadOutlined` icon + "Refresh" text in `type="text"` button, inline right of the "For your account" header. Clicking it triggers a new dynamic suggestion fetch and replaces both dynamic chips.

Why include it: power users who have explored several topics may want fresh suggestions pointing to unexplored dimensions. It also gives users a recovery path if the suggestions look wrong.

Refresh is limited to the dynamic chips only. Static chips never change within a session.

---

## 4. Interactive Design

### 4.1 Click Behavior

Clicking a chip populates the chat input with the chip's full question text. Focus shifts to the input. The user can edit the text before pressing Send. The chip does NOT auto-submit.

Implementation note: use React's controlled input — on chip click, call `setChatInput(questionText)` and `inputRef.current.focus()`. This is compatible with the existing Ant Design `Input.TextArea` in the live interface.

### 4.2 Hover State

- Default chip: `background: #FAFAFA`, `border: 1px solid #D9D9D9`, `color: rgba(0,0,0,0.88)`.
- Hover: `background: #F0F5FF` (Ant Design `blue-1`), `border: 1px solid #ADC6FF` (`blue-3`), `color: #2F54EB` (`blue-6`). Cursor: pointer.
- Transition: `all 0.15s ease`.
- Active/pressed: `background: #D6E4FF` (`blue-2`).

This aligns with Ant Design's interactive Tag pattern. No custom CSS class needed — use the `onMouseEnter`/`onMouseLeave` handlers or Ant Design's built-in Tag interaction styles.

### 4.3 After a Chip is Clicked and Question is Answered

Suggestions are hidden while the conversation is active (non-empty state). The suggestion chips only show in empty state (no messages) or as the mid-conversation strip (after first response).

After the first response is returned: the mid-conversation strip appears with 2 new chips. These are NOT the same chips that were clicked — they are generated fresh based on the just-returned query's dimensions.

The original empty-state chips disappear permanently once the first message is sent. They do not return mid-conversation.

### 4.4 Mid-Conversation Trigger Condition

Fire once, after the FIRST assistant response in a session. Trigger condition: `responseCount === 1` (count increments on each assistant message, not user message).

Do not fire again after subsequent responses. Do not fire if the user has already dismissed the strip this session.

**Why only first response:** Users are in active flow after the first answer — showing contextual next questions at that moment has the highest chance of extending the session. After response 2+, users are already in a pattern; interrupting with suggestions becomes noise.

### 4.5 Collapsed / Expanded Toggle

Not implemented in v1. Rationale:
- 6 chips is a small enough set that a collapse affordance adds interaction cost without space benefit.
- If research shows users want to hide suggestions, add a collapse toggle in v2.
- The mid-conversation strip has a dismiss (×) which serves the "I don't want this" use case.

The empty-state suggestion block has no collapse. If the space becomes a problem on small viewports, address via responsive chip truncation (shorter chip text at ≤ 1280px breakpoint) before adding a toggle.

---

## 5. Static Question Sets

### 5.1 Assortment Analytics (AA)

1. "What is my out-of-stock percentage by category, and how does it compare to my competitors?"
2. "Which categories have the largest assortment gap between my portfolio and my top competitors?"
3. "What percentage of my SKUs overlap with each competitor by category and sub-category?"
4. "Show me my assortment distribution by category — which categories have the highest and lowest SKU counts?"

**Design notes on AA questions:**
- Q1 covers OOS analysis (the highest-frequency query pattern seen in the Slack history audit: 9+ identical instances of the OOS query in chat history).
- Q2 surfaces assortment gap — the majority query pattern across the 100+ chat history entries reviewed.
- Q3 is the original static chip reworded to be more specific (added "each competitor").
- Q4 is new — covers category distribution, a dimension missing from the current 3-chip set.

### 5.2 Pricing Intelligence (PI)

1. "Which of my products have the largest price gap versus competitors right now?"
2. "Show me all MAP violations across my portfolio in the last 30 days — which retailers are out of compliance?"
3. "How have discount rates for my top 10 products trended over the last 90 days?"
4. "Which competitors are most aggressively discounting in my top categories, and by how much?"

**Design notes on PI questions:**
- Q1 and Q4 are the two most actionable commercial questions for PI users — pricing gap visibility and competitive discount tracking.
- Q2 addresses MAP violations specifically — a compliance-driven use case common in CPG brands with strict pricing policies.
- Q3 introduces trend analysis — discount trends over time is the dimension that differentiates PI from a snapshot tool.

### 5.3 Digital Shelf Analytics (DSA)

1. "What is my overall content compliance score by retailer, and which attributes have the most failures?"
2. "How does my share of search for top keywords compare to competitors on each retailer?"
3. "Which of my products have the lowest average ratings, and what do the most recent negative reviews say?"
4. "Where am I losing keyword rankings to competitors — show me the keywords where my rank dropped in the last 30 days?"

**Design notes on DSA questions:**
- Q1 is the primary DSA question for content compliance users (the GeekSpeak/Lassonde use case — content scorecard entry point).
- Q2 addresses share of search — the other major DSA pillar alongside content compliance.
- Q3 combines ratings trend + review content — surfacing qualitative signal alongside the quantitative score.
- Q4 is keyword gap analysis — the diagnostic question users ask after seeing SoS coverage drop.

---

## 6. Claude Design Prompt

Use this prompt in Claude's design tool (or Figma AI) to generate a visual mockup of the three states.

---

```
Design a UI mockup for the DataWeave "Ask Me" AI chat interface (React + Ant Design). Show three states side by side:

STATE 1 — EMPTY STATE (new chat, all chips loaded)

Layout:
- Light background (#FFFFFF), single center column, max-width 800px, horizontally centered in viewport.
- Top: greeting text "Hi, Costco! How can I assist you today?" in Ant Design Heading 4 weight. Right of greeting: small pill badge reading "Beta" in blue (#1677FF background, white text, 4px border-radius).
- Below greeting: full-width Ant Design Input.TextArea with placeholder "Ask me anything..." and a right-aligned Send icon button (ArrowUpOutlined, filled circle, #1677FF).
- Below input (16px gap): suggestion section.

Suggestion section:
- Section label: "Suggested questions" — 12px, #8C8C8C, uppercase, letter-spacing 0.5px.
- Below label (8px gap): 4 horizontal chips in Ant Design Tag style, default bordered, light gray fill (#FAFAFA), 1px border (#D9D9D9), 14px text, 8px horizontal padding, 4px border-radius:
  1. "What is my out-of-stock % by category vs. competitors?"
  2. "Which categories have the largest assortment gap with competitors?"
  3. "What is my SKU overlap % with each competitor by category?"
  4. "Show me assortment distribution by category and SKU count"
- 16px vertical gap.
- Section label: "For your account" — same treatment as above. To the right of the label: small text-button with reload icon + "Refresh" in #8C8C8C.
- Below label (8px gap): 2 dynamic chips, visually identical to static chips:
  1. "How does my Beverages assortment compare to competitors at sub-category level?"
  2. "What are the top OOS SKUs in my Snacks category?"

STATE 2 — LOADING STATE (dynamic chips pending)

Identical to State 1 except:
- The "For your account" row shows 2 Skeleton.Button placeholders instead of real chips: first skeleton 140px wide, second 180px wide, both with the active shimmer pulse animation.
- Static chips render normally — no loading state on them.

STATE 3 — MID-CONVERSATION (after first response)

Layout:
- Show a partial view of a completed response card above the input.
- Response card: white background, 1px border (#F0F0F0), border-radius 8px, contains a small data table (3 columns, 4 rows, Ant Design Table, compact size) and 2–3 lines of narrative summary text below the table.
- Below the response card (12px gap): a horizontal strip with background #FAFAFA, 1px border #F0F0F0, border-radius 8px, padding 12px 16px.
  - Left: label "What to ask next:" in 12px #8C8C8C.
  - 8px gap.
  - 2 chips: "How does my Beverages OOS % compare to last quarter?" and "Which sub-categories in Beverages have the highest competitor overlap?"
  - Right-aligned: CloseOutlined icon in #BFBFBF (dismiss button).
- Below the strip: chat input (same as State 1).

Color system:
- Primary: #1677FF (DataWeave / Ant Design blue-6)
- Chip hover state: background #F0F5FF, border #ADC6FF, text #2F54EB
- Secondary text: #8C8C8C
- Border default: #D9D9D9
- Surface: #FAFAFA
- Background: #FFFFFF

Typography: Inter or system-ui. Headings: 600 weight. Body + chips: 400 weight, 14px. Labels: 12px.

Show all three states at 1280px viewport width, desktop only. Clean, minimal, no decorative elements. Use Ant Design visual language throughout.
```

---

## Open Questions

| # | Question | Owner | Urgency |
|---|---|---|---|
| OQ-1 | Does the current LangGraph session store query history per account in a queryable format? Or is this locked in unstructured logs? | Engineering (Sada) | High — dynamic suggestions depend on this |
| OQ-2 | What is the expected p50/p95 latency for the dynamic suggestion API call? Target is <500ms. | Engineering | Medium |
| OQ-3 | For MULTI-module accounts (PI + AA), should the module switch for suggested questions be automatic (last-queried module) or explicit (a module selector chip in the empty state)? | PM | Medium |
| OQ-4 | Should the "For your account" label be visible before the account has any query history (showing Signal 2 / metadata-based chips)? Or should it only appear once the account has 5+ queries? | Design | Low |
| OQ-5 | PI and DSA static questions are written for Phase 2/3 accounts. Confirm these are not shown to AA-only accounts in Phase 1 rollout. | PM / Engineering | High — rollout gating |

---

## Acceptance Criteria

**AC-1:** A new AA account with no query history sees exactly 4 static AA chips and no "For your account" section on first open.

**AC-2:** An AA account with 10+ queries in session history sees 4 static chips + 2 dynamic chips, where dynamic chips contain at least one account-specific dimension (category or brand name) in the chip text.

**AC-3:** When the dynamic suggestions API call is in-flight, 2 skeleton chips are shown in the "For your account" row. Static chips are visible and clickable during the loading state.

**AC-4:** If the dynamic suggestions API returns an error, the "For your account" section and its header disappear entirely. The 4 static chips remain. No error message is shown to the user.

**AC-5:** Clicking any chip fills the chat input with the full chip text and focuses the input. The chip does NOT auto-submit.

**AC-6:** After the first assistant response in a session, a mid-conversation strip appears below the response card with 2 chips. The strip does not appear again in the same session.

**AC-7:** Dismissing the mid-conversation strip (×) hides it for the remainder of the session.

**AC-8:** Clicking "Refresh" in the "For your account" header replaces only the 2 dynamic chips. Static chips are unchanged.

**AC-9:** A PI account (account.module = PI) sees PI static questions, not AA questions.

**AC-10:** URL param `?module=PI` overrides the server-side account config for the session, allowing QA and CSMs to test non-default module chips without changing account config.
