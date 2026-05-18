# UX Spec: Chat History Organization — Folder System
**Product:** Ask Me (DataWeave AI Analytics, `stage.dataweave.com/query`)
**Status:** Draft for Discussion
**Author:** PM OS | **Date:** 2026-05-13
**Relates to:** AI Defensibility OKR — Chat usability / session re-use

---

## Problem Statement

The chat history sidebar holds 100+ past queries in a single flat list with no grouping, search, or deduplication. Users cannot locate prior analyses, so they re-run identical queries (9+ duplicate instances observed in the audit). Folders already appear as a scaffold in the sidebar (Folders section, 0 items). This spec defines the full interaction system to make that scaffold functional.

---

## 1. Functional Requirements

### 1.1 Folder Management

| Action | Required Behavior |
|---|---|
| **Create folder** | User initiates manually via "+" button in the Folders section header or via "Save to folder" on a chat item. Folder is created only by explicit user action — never auto-created. |
| **Rename folder** | Via folder 3-dots menu → Rename. Inline edit field, confirm on Enter or blur, cancel on Esc. |
| **Delete folder** | Via folder 3-dots menu → Delete. Confirmation modal required if folder contains ≥1 chat. Chats inside a deleted folder move to Recent Chats (not deleted). |
| **Reorder folders** | Drag-and-drop folder reordering within the Folders section. Persisted to backend. |
| **Expand / collapse folder** | Click folder row to toggle. State persisted per-session (not globally). Default: collapsed. |

### 1.2 Chat Item Management

| Action | Required Behavior |
|---|---|
| **Save chat to folder** | Available on every chat item via 3-dots menu → "Save to folder". Also available via post-conversation inline prompt (see §2.4). |
| **Move chat to different folder** | Via chat item 3-dots menu → "Move to folder". Shows folder picker. If already in a folder, current folder is highlighted. |
| **Remove chat from folder** | Via chat item 3-dots menu → "Remove from folder". Chat returns to Recent Chats. Does not delete the chat. |
| **Multi-select for bulk move** | Hover or long-press reveals a checkbox on each chat item. Checkbox in section header selects all in that section. Bulk-action bar appears at bottom of sidebar when ≥2 items selected: "Move to folder" / "Add to Favorites" / "Archive". |
| **Rename chat** | Via chat item 3-dots menu → Rename. Inline edit. (Existing behavior — preserve it.) |
| **Delete chat** | Via chat item 3-dots menu → Delete. Confirmation toast. (Existing behavior — preserve it.) |

### 1.3 AI Folder Suggestion

| Behavior | Detail |
|---|---|
| **When it fires** | When a user saves a chat to a folder (via 3-dots or post-conversation prompt) and has ≥1 existing folder. |
| **What the AI suggests** | A single folder name — either an existing folder (if the chat matches its apparent theme) or a new folder name derived from the chat's content. |
| **How it's presented** | Inline tooltip/popover on the folder picker dropdown, not a blocking modal. See §2.4. |
| **User control** | Three options: Accept suggestion (one click), type a different name, or pick a different existing folder. AI suggestion is a default, not a lock-in. |
| **When AI has no existing folders to match** | AI suggests a new folder name. User can accept, edit, or cancel. |
| **No auto-create rule** | AI never creates a folder without user confirmation. Suggestion only. |

### 1.4 Search

| Behavior | Detail |
|---|---|
| **Scope** | Searches across all sections: Folders (folder names + chat items inside), Favorites, Archived, Recent Chats. |
| **Match targets** | Chat title / query preview text, folder name, date (typed as "last week", "May", "yesterday"). |
| **Result presentation** | Flat list of matching chat items, each labeled with its section/folder source. Folder name shown as a badge. |
| **Real-time filtering** | Results update as user types (debounced 200ms). No submit required. |
| **Empty state** | "No results for '[query]'" with a suggestion to check Recent Chats or broaden terms. |
| **Clear** | X button in search field. Returns to normal sidebar view. |

### 1.5 Out of Scope (v1)

- **Shared folders or folder permissions** — no team/org-level sharing.
- **Nested folders** (sub-folders) — flat folder list only.
- **Folder color labels or icons** — plain text names only.
- **Auto-sorting within folders** — manual order only.
- **AI auto-filing** — AI suggests but never files without user action.
- **Folder sync to external tools** (Slack, email) — out of scope for chat history UI.
- **Export folder contents** as a bundle — out of scope.

---

## 2. Information Design

### 2.1 Folder Row Metadata

Each row in the Folders section shows:

| Element | Detail |
|---|---|
| **Folder name** | Plain text, truncated at ~22 chars with ellipsis. Full name on hover tooltip. |
| **Chat count badge** | Pill showing number of chats in folder. E.g., `7`. Shown right-aligned. |
| **Last updated** | Relative time ("3d ago"). Shown on hover only — reduces visual noise at rest. |
| **Expand chevron** | Right-pointing at collapsed, down-pointing at expanded. |
| **3-dots menu** | Appears on row hover. Options: Rename, Delete, Move all to Recent (emergency eject). |

### 2.2 Chat Item Metadata (inside a folder or in any section)

| Element | Detail |
|---|---|
| **Query preview** | First ~45 chars of the query, truncated. Full text on hover. |
| **Module tag** | Pill tag: `AA` (Assortment Analytics), `PI` (Price Intelligence), `DSA` (Digital Shelf) — derived from which module generated the query. Color-coded: AA = teal, PI = amber, DSA = violet. |
| **Date** | Relative: "Today", "Yesterday", "3d ago", "May 5". |
| **3-dots menu** | On hover. Options: Open, Rename, Save to folder / Move to folder / Remove from folder (context-sensitive), Add to Favorites, Archive, Delete. |
| **Checkbox** | Appears on hover or when multi-select mode is active. |

### 2.3 Search Result Item Metadata

Each search result shows everything in §2.2 plus:

| Element | Detail |
|---|---|
| **Source label** | Where the chat lives: folder name (if in a folder), "Favorites", "Archived", or "Recent". Shown as subdued text below query preview. |
| **Match highlight** | Query preview text has the matching substring bolded. |

### 2.4 AI Folder Suggestion Presentation

**Pattern: inline popover on the folder picker, not a blocking modal.**

When the user clicks "Save to folder" (via 3-dots or post-conversation prompt), a folder picker dropdown opens. If the AI has a suggestion:

```
┌─────────────────────────────────────────┐
│  ✨ Suggested: "Assortment Analysis"     │ ← AI suggestion row, pinned to top
│     Based on this query's content                                      │
│─────────────────────────────────────────│
│  📁 Competitor Pricing          [  7  ] │
│  📁 Weekly Reviews              [  3  ] │
│  📁 OOS Tracking                [  2  ] │
│─────────────────────────────────────────│
│  + Create new folder…                   │
└─────────────────────────────────────────┘
```

- The suggestion row is visually distinct (subtle highlight, sparkle icon).
- Clicking the suggestion row accepts it — creates the folder if it doesn't exist, saves the chat.
- Clicking any existing folder overrides the suggestion without friction.
- Clicking "Create new folder" opens an inline name field — suggestion text is pre-filled but editable.
- The popover is dismissible via Esc or clicking outside — chat stays unsaved.

**Post-conversation prompt (secondary surface):**
After a conversation generates a result, a subdued one-line prompt appears below the answer:
> `Save to folder?  [Assortment Analysis ✨]  [Choose folder]  [Dismiss]`

This is a non-blocking suggestion. Dismissing it doesn't repeat until the next conversation.

---

## 3. Conceptual Design

### 3.1 Ant Design Components

| UI Element | Ant Design Component | Notes |
|---|---|---|
| Sidebar folder tree | `Tree` (antd) | `draggable` prop for reorder; `expandedKeys` controlled state |
| Folder create/rename input | `Input` inline (not a modal) | Auto-focus on creation; confirm on Enter; cancel on Esc |
| Chat item 3-dots menu | `Dropdown` + `Menu` | `trigger={['click']}` to avoid hover accidental opens |
| Folder picker dropdown | `Dropdown` + custom list | Contains AI suggestion row + folder list + create option |
| Module tag (AA, PI, DSA) | `Tag` (antd) | Preset color map; small size |
| Multi-select bulk action bar | `Space` + `Button` group | Fixed at sidebar bottom when active; animated in from below |
| Search input | `Input.Search` | Placed at top of sidebar below "New Chat" button |
| Confirmation modal (delete) | `Modal.confirm` | Used only for folder delete with contents |
| AI suggestion popover | `Popover` or custom `Dropdown` panel | Pinned to top of picker list; not a blocking `Modal` |
| Empty folder state | `Empty` (antd) | Compact variant; inside expanded folder row |
| Hover tooltip (folder name, last updated) | `Tooltip` | placement="right" to avoid sidebar overflow |
| Post-conversation save prompt | `Alert` (no-icon, closable) | `type="info"` subdued; lives in main chat area, not sidebar |
| Checkbox for multi-select | `Checkbox` | Appears on item hover via CSS visibility toggle |

### 3.2 Sidebar Layout

```
┌──────────────────────────────┐
│  [🔍 Search chats...]        │  ← Input.Search, always visible
│  [+ New Chat]                │  ← Primary CTA, full width button
│──────────────────────────────│
│  FOLDERS              [+]    │  ← Section header; [+] = create folder
│    📁 Assortment Analysis (7)│  ← Collapsed folder row
│    📁 Competitor Pricing (3) │
│──────────────────────────────│
│  FAVORITES                   │
│    ★ Compare assortment...   │
│──────────────────────────────│
│  ARCHIVED            [≡]     │  ← [≡] = bulk manage
│    (collapsed by default)    │
│──────────────────────────────│
│  RECENT CHATS                │
│    What is my OOS % by...    │  ← Today
│    How does my assortment... │
│    ...                       │
└──────────────────────────────┘
```

- Sections are fixed in order: Folders → Favorites → Archived → Recent Chats.
- Folders section is the only one that expands to show nested chat items.
- Recent Chats shows the last 20 items by default; "Show more" loads the next 20.
- Sidebar width: 220px fixed. Does not resize.

### 3.3 Folder Expand/Collapse

- Clicking the folder row (anywhere except the 3-dots menu) toggles expand/collapse.
- Expanded: shows chat items as an indented list (12px left padding relative to folder row).
- Collapse state persists for the current session via `expandedKeys` in component state.
- Default on load: all folders collapsed.
- Keyboard: Space or Enter on focused folder row toggles state.

### 3.4 Drag-and-Drop

**Decision: Yes — drag-to-folder is supported. Drag-to-reorder folders is also supported.**

Rationale: The flat folder list is the primary organizational surface. Without drag-and-drop, moving a chat requires 3-dots → Move to folder → pick → confirm — four interactions for a common operation. Drag reduces this to one gesture. Ant Design's `Tree` component supports `draggable` natively, keeping implementation cost low.

**Behavior:**
- Dragging a chat item from Recent Chats (or another folder) and dropping on a folder row triggers the "Move to folder" action.
- Drop target folder highlights on hover during drag.
- If dropped on a folder that already contains the chat — no-op with a brief "Already in this folder" tooltip.
- Dragging a folder row reorders it within the Folders section.
- Dragging is disabled on mobile/touch (sidebar is not usable at ≤1024px — existing known issue, out of scope here).

### 3.5 "Save to Folder" Action Surface

**Two surfaces, one action:**

1. **Chat item 3-dots menu** (always available, reactive): Right-click or hover on any chat item in any section → 3-dots → "Save to folder" (or "Move to folder" if already in one). This is the primary surface.

2. **Post-conversation inline prompt** (proactive, first-time nudge): After a new query generates a result, a subdued `Alert` appears below the response: `"Save to folder? [Suggested folder ✨] [Choose] [Dismiss]"`. This fires only once per new conversation, not on revisiting old results.

The post-conversation prompt is opt-out, not opt-in — it shows by default to drive discovery. After 3 dismissals in a row, it stops appearing (suppression flag stored in user preferences).

### 3.6 Search Behavior

- Search bar: Fixed at top of sidebar, below the "New Chat" button.
- On focus: Sidebar transitions from section-grouped view to search results view. Section headers hide.
- Results: Flat list, most recent match first. Up to 50 results shown; "Show more" for longer lists.
- No separate search page — all within the sidebar panel.
- Clearing search (X button or Esc) restores the section-grouped view.

---

## 4. Interactive Design

### 4.1 Creating a New Folder

1. User clicks **[+]** button in the Folders section header (or clicks "Save to folder" on a chat item when no folders exist).
2. A new folder row appears at the top of the Folders list with an **inline text input**, pre-focused. Placeholder: "Folder name…"
3. User types the folder name.
4. User presses **Enter** → folder is created and saved.
   - OR: User clicks away (blur) → folder is created with whatever text is entered (if non-empty).
   - OR: User presses **Esc** → creation cancelled, row disappears.
5. If input is blank on Enter/blur → validation: row shakes briefly, input shows subdued error border. No error text (too noisy at small scale). User must enter a name to proceed.
6. Folder appears in the list, collapsed. Chat count badge shows `0`.
7. If creation was triggered via "Save to folder" → folder picker opens immediately after creation with the new folder pre-selected. User clicks the new folder to save the chat.

### 4.2 Moving a Chat to a Folder

**Via 3-dots menu:**
1. User hovers over a chat item in Recent Chats (or any section) → 3-dots appears.
2. User clicks 3-dots → menu shows "Save to folder" (if not in a folder) or "Move to folder" (if already in one).
3. Folder picker dropdown opens (§2.4). AI suggestion shown at top if applicable.
4. User clicks a folder → chat moves. Picker closes. Chat item disappears from current section (if Recent Chats) and appears inside the target folder.
5. Brief inline confirmation: the target folder row flashes once (highlight animation, 300ms). No toast needed — the visual state change is sufficient.

**Via drag-and-drop:**
1. User drags a chat item.
2. Target folder highlights (background tint, 2px accent border).
3. User drops → chat moves. Same visual confirmation as above.

### 4.3 AI Folder Suggestion Flow

**Scenario A: User has existing folders**

1. User clicks "Save to folder" on a chat item.
2. Folder picker opens. AI suggestion appears pinned to top (sparkle icon + suggested folder name + "Based on this query's content" sub-label).
3. **Accept:** User clicks suggestion row → folder is selected, chat saved. Picker closes.
4. **Override:** User clicks a different existing folder → saves to that folder. Suggestion ignored silently (no feedback needed — user made a deliberate choice).
5. **Edit suggestion text:** User clicks "Create new folder…" → inline name field opens pre-filled with suggestion text. User can edit and confirm.
6. **Dismiss:** User presses Esc or clicks outside → picker closes, nothing saved.

**Scenario B: User has no folders yet**

1. User clicks "Save to folder."
2. Folder picker opens. Only the AI suggestion row and "Create new folder…" appear.
3. AI suggestion shows a proposed folder name (e.g., "Assortment Analysis").
4. Accept → creates the folder with that name + saves the chat. Two actions collapsed into one.
5. Edit → name field pre-filled with suggestion. User edits, confirms.

**Suggestion quality note:** The AI derives the folder name from the chat's query content (e.g., "assortment gap by subcategory" → "Assortment Analysis"; "OOS percentage for Costco" → "OOS Tracking"). The suggestion is generated client-side via a lightweight call — not a blocking round-trip. If the call fails, the picker renders without the suggestion row (graceful degradation).

### 4.4 Multi-Select Bulk Move

1. User long-presses a chat item (mobile), or hovers and clicks the checkbox (desktop) → multi-select mode activates.
2. Checkboxes appear on all chat items in the current section.
3. A sticky **bulk action bar** slides up from the bottom of the sidebar:
   ```
   [  3 selected  ]  [Move to folder ▾]  [Favorite]  [Archive]  [✕ Cancel]
   ```
4. "Move to folder" opens the folder picker (same as §4.2, but applies to all selected chats).
5. On confirm → all selected chats move. Selection clears. Bulk bar dismisses.
6. Selecting items across sections (e.g., mixing Recent Chats and Favorites): allowed. Bulk actions apply to all selected regardless of source section.
7. **Select all in section:** Checkbox in the section header row selects all items in that section. Does not cross-select into other sections.

### 4.5 Empty Folder State

When a user expands a folder with 0 chats:

```
📁 My New Folder (0)
   ┌──────────────────────────┐
   │  No chats yet.           │
   │  Drag a chat here or     │
   │  use "Save to folder."   │
   └──────────────────────────┘
```

Ant Design `Empty` component, compact variant, custom description. No illustration needed — text only for sidebar scale.

### 4.6 Search Results Presentation

**While searching (active input):**

```
🔍 [assortment gap         ✕]

RESULTS (12)
  ──────────────────────────
  Compare my assortment...    [AA]  2d ago
  in: Assortment Analysis

  Show me assortment gap...   [AA]  May 8
  in: Recent Chats

  Assortment overlap by cat.. [AA]  May 1
  in: Favorites
  ──────────────────────────
  [Show 9 more results]
```

- Section headers replaced by a flat results list.
- Each result shows: query preview (match highlighted) + module tag + date + source label ("in: [folder name]" or "in: Recent Chats" etc.).
- Clicking a result opens that conversation in the main chat area.
- Searching folder names: if input matches a folder name exactly, that folder appears at the top of results as a "Folder match" row with expand option.
- No results → `Empty` state with prompt to try different keywords.

---

## 5. Claude Design Prompt

Paste the following into Claude's design tool (or Cursor/V0):

---

```
Design a polished, production-quality dark sidebar for a B2B AI analytics chat interface called "Ask Me" by DataWeave. Target aesthetic: Linear, Vercel dashboard, or Raycast — refined enterprise dark UI. NOT a developer tool or neon-accented SaaS. The user is a retail analyst at Costco or Home Depot. The sidebar must feel calm, scannable, and professional.

DESIGN PRINCIPLES FOR THIS COMPONENT
- No neon or high-saturation colors. All colors should be desaturated and low-contrast relative to the dark background.
- Module badges: small 6px colored dots only (no filled pill backgrounds). Dot colors: teal #4B9E9E for AA, warm amber #B07B35 for PI, muted violet #7B68B0 for DSA. Badge label appears as tiny text (10px) to the right of the dot in #6B7280.
- "New Chat" button: NOT bright green. Use a white label on a #2A2D3A background with a subtle 1px #3D4150 border. On hover: background lightens to #353849. No green.
- Section headers: 10px all-caps, tracking 0.08em, color #4B5263. No bold. Maximum restraint.
- Hover states: single row background shifts to rgba(255,255,255,0.04). No bright highlights.
- Active/selected item: left 2px border in #5C6BC0 (muted indigo, not green), background rgba(255,255,255,0.06).
- AI suggestion popover: white card (#FFFFFF), soft box-shadow (0 4px 16px rgba(0,0,0,0.18)), 8px border-radius, no colored backgrounds. Sparkle icon in #9CA3AF (gray, not purple or green). Text in #1F2937 (near-black). "Accept" = small outlined button in #374151 border, #1F2937 text. "Create new" = text link in #6B7280.
- Chat count pills on folders: #2A2D3A background, #6B7280 text. Very low contrast. Not white.
- Bulk action bar: #1C1F2B background, 1px top border #2A2D3A, very compact (32px tall). "Move" and "Archive" as text buttons in #9CA3AF. No bright backgrounds.

COLOR SYSTEM
- Sidebar background: #13151C
- Item row (resting): transparent
- Item row (hover): rgba(255,255,255,0.04)
- Item row (active): rgba(255,255,255,0.06) + 2px left border #5C6BC0
- Folder row (resting): transparent
- Section header text: #4B5263
- Primary text: #D1D5DB
- Secondary text / truncated queries: #6B7280
- Subdued metadata (dates, counts): #4B5263
- Search input background: #1C1F2B
- Search input border: #2A2D3A
- Divider lines: #1E2130

FONT
Inter or system-ui. 13px base. Line-height 1.4. No bold except folder names (500 weight).

SIDEBAR LAYOUT (240px wide, full viewport height)

TOP AREA (16px padding horizontal, 12px padding top)
- "D" avatar chip (28px, dark gray #2A2D3A, white letter, 6px border-radius) + "Ask Me / DataWeave" text stack (13px #D1D5DB / 11px #6B7280), right-aligned ChevronDown in #4B5263
- 8px gap
- Search input: full-width, 32px height, #1C1F2B background, 1px border #2A2D3A, 8px border-radius, SearchOutlined in #4B5263, placeholder "Search chats…" in #4B5263
- 6px gap
- New Chat button: full-width, 32px height, #1C1F2B background, 1px border #2A2D3A, 8px border-radius, PlusOutlined in #D1D5DB + "New Chat" text in #D1D5DB, left-aligned. On hover: background #252837.
- 16px gap

SECTIONS (8px horizontal padding for section headers, 0px for items — items use full width with 12px internal padding)

Section 1 — FOLDERS (section header left-aligned + FolderAddOutlined #4B5263 on right)
  - Row: "Pricing Intelligence" folder — ChevronRightOutlined #4B5263 (12px) + FolderOutlined #6B7280 (14px) + "Pricing Intelligence" text (#D1D5DB, 500 weight) + count pill "12" (#4B5263 text, no background) — 40px row height
  - Row: "Assortment Analysis" folder — EXPANDED state, ChevronDownOutlined, folder open icon — 40px
    - 3 indented chat items (16px left padding from folder indent):
      - "Beverages OOS rate — Walmart vs Target" | AA dot | "2d" — 34px row height
      - "Snacks SKU overlap by sub-category Q1" | AA dot | "3d"
      - "Dairy assortment gap — Home Depot" | AA dot | "5d"
    - AI suggestion popover attached to "Snacks SKU overlap" row (floating white card, 220px wide):
      - Top line: SparkleOutlined (14px, #9CA3AF) + "Suggested: Assortment Analysis" (13px #1F2937, 500 weight)
      - Second line: "Based on this query — matches 4 chats in this folder." (12px #6B7280)
      - 12px gap
      - Button row: "Accept" (28px height, outlined button #374151 border, #374151 text, 4px radius) + 8px gap + "Create new" (text link #6B7280)

8px gap

Section 2 — FAVORITES (StarOutlined icon in header)
  - "Whirlpool MAP — Q3 comp analysis" | PI dot | "1w"
  - "Costco mid-month price index" | PI dot | "2w"

8px gap

Section 3 — ARCHIVED (collapsed, ChevronRightOutlined, count "23" in #4B5263)

8px gap

Section 4 — RECENT CHATS
  - Date group label: "TODAY" — 10px, #4B5263, all-caps, 28px row height
  - "Walmart pricing — Whirlpool Q3" | AA dot | "2h"
  - "Home Depot promo cadence analysis" | PI dot | "4h"
  - Date group label: "YESTERDAY"
  - "Best Buy vs Lowe's water heater" | DSA dot | "1d"
  - "Target private label expansion" | PI dot | "1d" — this row in SELECTED state (left 2px border #5C6BC0, checkbox checked in #5C6BC0)

BOTTOM — BULK ACTION BAR (pinned, shown because 1 item selected)
  - 32px tall, full width, #1C1F2B background, 1px top border #1E2130
  - Left: "1 selected" in 12px #9CA3AF
  - Right: "Move ▾" text button (#9CA3AF) + vertical separator + "Archive" text button (#9CA3AF) + "✕" icon (#4B5263)
  - No backgrounds on the action buttons — text only

SECOND FRAME — SEARCH ACTIVE STATE
Show the sidebar with "assortment gap" typed in the search field. The folder/sections structure is hidden entirely. Replace with:
  - "6 RESULTS" in 10px #4B5263 all-caps, left-aligned, 28px row height
  - 6 result rows, each 36px:
    - Module dot + query text with "assortment g" substring in #D1D5DB (500 weight, slightly brighter than rest) — NO colored highlight background, NO underline, just slightly brighter weight
    - Below query text (same row, second line at 11px #4B5263): "in: Assortment Analysis" or "in: Recent"
    - Date on far right in #4B5263
  - Queries shown: "Beverages assortment g… " (AA) / "Snacks assortment gap…" (AA) / "Dairy assortment gap—…" (AA) / "Frozen foods assortmen…" (AA) / "Closing the assortment…" (PI) / "Cross-retailer assortm…" (DSA)
  - Bottom tip: "⏎ opens first result" in 11px #4B5263, centered, 24px from bottom

CRITICAL RENDERING NOTES
- Do not add any glow effects, gradients, or shadows to text or icons.
- Do not use colored backgrounds on module badges — dots only.
- The AI suggestion popover is the ONLY white-background element; everything else is dark.
- If in doubt, reduce color intensity by 40%. This is enterprise B2B, not a gaming dashboard.
- Row height must feel airy — 36px for chat items, 40px for folder rows — with 4px vertical padding inside each row.
- Show a thin custom scrollbar on the right edge: 2px wide, #2A2D3A track, #3D4150 thumb.
```

---

## Open Questions

| # | Question | Owner | Status |
|---|---|---|---|
| 1 | Where does the AI suggestion call go — frontend LLM call or backend endpoint? Backend adds latency; frontend exposes model. | Engineering | Open |
| 2 | Is folder state (names, assignments) stored per-user in the existing Postgres session management schema, or does this require schema changes? | Engineering | Open |
| 3 | Should the post-conversation "Save to folder" prompt fire after every new conversation, or only after the conversation is closed/navigated away from? | PM | Open |
| 4 | 50-result search cap — acceptable? Any demand for full-text search across answer content (not just query titles)? | PM + CS | Open |
| 5 | Suppression after 3 dismissals for the post-conversation prompt — is 3 the right number, or should it be configurable per user? | PM | Open |
| 6 | Should archived chats be searchable by default, or opt-in? | PM | Open |
