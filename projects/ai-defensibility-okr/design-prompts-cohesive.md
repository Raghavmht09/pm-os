# Ask Me AI — Cohesive Design Prompt Set
**Purpose:** 5-shot sequence for Claude Design. Each prompt references the same design system. Together they produce a complete interactive prototype for engineering handoff.
**Product:** DataWeave "Ask Me" — B2B retail analytics AI chat interface
**Stack:** React + Ant Design. Enterprise SaaS aesthetic (Linear, Vercel). No neon. No gradients. No consumer UI patterns.

---

## Design System (reference in all 5 prompts)

```
COLORS
  sidebar-bg:       #13151C
  sidebar-hover:    rgba(255,255,255,0.04)
  sidebar-active:   rgba(255,255,255,0.06)
  sidebar-border:   #1E2130
  sidebar-text:     #D1D5DB
  sidebar-muted:    #6B7280
  sidebar-subtle:   #4B5263
  main-bg:          #FFFFFF
  main-surface:     #F9FAFB
  main-border:      #E5E7EB
  primary-text:     #111827
  secondary-text:   #6B7280
  muted-text:       #9CA3AF
  brand-green:      #3E8C2F   (use for: star ratings, submit buttons, active thumbs-up icon)
  info-blue:        #1677FF   (use for: send button, beta badge, Ant Design default primary)
  active-indigo:    #5C6BC0   (use for: selected chat left-border)
  module-aa:        dot color #4B9E9E, label "AA"
  module-pi:        dot color #B07B35, label "PI"
  module-dsa:       dot color #7B68B0, label "DSA"
  skeleton-base:    #E5E7EB
  skeleton-shimmer: #F3F4F6
  error-red:        #DC2626
  success-green:    #16A34A

TYPOGRAPHY
  font-family: Inter, system-ui
  size-xs:  10px  (section labels, metadata)
  size-sm:  12px  (chip labels, captions, dates)
  size-md:  13px  (sidebar items, form labels)
  size-base:14px  (body text, requirements)
  size-lg:  16px  (modal titles, headings)
  weight-regular: 400
  weight-medium:  500
  weight-bold:    600

LAYOUT
  sidebar-width:  240px
  main-max-width: 800px  (centered in remaining viewport)
  viewport:       1280px wide

COMPONENTS (Ant Design)
  - All inputs, buttons, modals, dropdowns, tables, tags: Ant Design defaults
  - Override only where specified below
  - Table: compact size, 1px #E5E7EB border
  - Modal: shadow 0 8px 32px rgba(0,0,0,0.12), radius 8px
  - No box shadows outside modals and popovers
```

---

## PROMPT 1 — Full Interface: Default / Empty State

**What this shows:** Complete app chrome with sidebar + main area in empty state. Establishes the master layout all other prompts inherit.

```
Design the full "Ask Me" interface by DataWeave at 1280px viewport.

LAYOUT
Left: 240px sidebar (sidebar-bg #13151C, full viewport height)
Right: main content area (main-bg #FFFFFF, 800px centered column)

--- SIDEBAR ---

TOP (16px h-padding, 12px v-padding)
  Row 1: "D" avatar (28px, #2A2D3A bg, white letter, 6px radius) | "Ask Me" 13px sidebar-text 500w / "DataWeave" 11px sidebar-muted | ChevronDownOutlined 12px sidebar-subtle — right-aligned
  8px gap
  Search: full-width, 32px h, #1C1F2B bg, 1px #2A2D3A border, 8px radius, SearchOutlined sidebar-subtle, placeholder "Search chats…" sidebar-subtle
  6px gap
  New Chat: full-width, 32px h, #1C1F2B bg, 1px #2A2D3A border, 8px radius, PlusOutlined + "New Chat" sidebar-text, left-aligned

SECTIONS (section headers: 10px sidebar-subtle uppercase tracking-wide, 8px h-padding; rows: 0px h-padding, 12px internal h-padding)

FOLDERS section + FolderAddOutlined right-aligned sidebar-subtle
  Row: ChevronRightOutlined 12px sidebar-subtle | FolderOutlined 14px sidebar-muted | "Pricing Intelligence" sidebar-text 500w | "12" sidebar-subtle far-right — 40px height
  Row: ChevronDownOutlined | FolderOpenOutlined | "Assortment Analysis" sidebar-text 500w | "8" — 40px — EXPANDED
    Indented 16px:
    "Beverages OOS rate — Walmart vs Target" | dot #4B9E9E | "2d" sidebar-subtle — 34px
    "Snacks SKU overlap by sub-category Q1" | dot #4B9E9E | "3d" — 34px
    "Dairy assortment gap — Lowe's comp" | dot #4B9E9E | "5d" — 34px

FAVORITES section + StarOutlined
  "Whirlpool MAP — Q3 comp analysis" | dot #B07B35 | "1w" — 34px
  "Costco mid-month price index" | dot #B07B35 | "2w" — 34px

ARCHIVED section | ChevronRightOutlined | "23" sidebar-subtle — collapsed, 40px

RECENT CHATS section
  "TODAY" — 10px sidebar-subtle uppercase, 28px row
  "Walmart pricing — Whirlpool Q3" | dot #4B9E9E | "2h" — 34px
  "Home Depot promo cadence analysis" | dot #B07B35 | "4h" — 34px
  "YESTERDAY" — 28px row
  "Best Buy vs Lowe's water heater" | dot #7B68B0 | "1d" — 34px

HOVER STATE annotation: show one row ("Snacks SKU overlap") in hover state — sidebar-hover bg, EllipsisOutlined 14px sidebar-muted appears far-right

--- MAIN AREA ---

Vertically centered, 800px column

Greeting: "Hi, Costco! How can I assist you today?" — size-lg, weight-bold, primary-text
Right of greeting: "Beta" pill — 12px, info-blue bg, white text, 4px radius

16px gap

Input: full-width Ant Design TextArea, 2 rows, placeholder "Ask me anything about your assortment, pricing, or competitor data…", right side: circular send button 32px info-blue bg ArrowUpOutlined white

16px gap

Section label: "Suggested questions" — size-xs uppercase sidebar-muted tracking-wide
8px gap
4 chips (Ant Design Tag, #F9FAFB bg, 1px main-border, 8px radius, size-sm primary-text):
  "What is my OOS % by category vs. competitors?"
  "Which categories have the largest assortment gap?"
  "What is my SKU overlap % with each competitor?"
  "Show me assortment distribution by category"

16px gap

Section label: "For your account" — size-xs uppercase sidebar-muted | ReloadOutlined 12px sidebar-muted + "Refresh" size-xs sidebar-muted — right-aligned
8px gap
2 chips (same style):
  "How does my Beverages assortment compare to competitors?"
  "What are the top OOS SKUs in my Snacks category?"

ANNOTATIONS (small labeled arrows on the design):
  → [1] Folder row hover: shows 3-dot menu + gear icon
  → [2] Chip click: fills input, does NOT auto-submit
  → [3] "For your account" chips: generated from account query history
  → [4] Search bar: replaces section view with flat results (see Prompt 3)
```

---

## PROMPT 2 — Progressive Response: Query to Full Answer

**What this shows:** The main chat area across 5 temporal states after a query is sent. Sidebar shown as a thin reference (no detail). Focus entirely on the response area evolution.

```
Using the design system and sidebar from Prompt 1. Show only the main content area (800px column).

At the top: user query bubble — right-aligned, rounded, #DCFCE7 bg, primary-text, size-base:
"What is my assortment gap in Beverages vs competitors at Walmart and Target?"

Below that: 5 states in vertical sequence, each labeled.

STATE 0 — "0–500ms · Submitted"
  3 pulsing dots (8px circles, muted-text fill, 6px gap). No card bg. Label: "(600ms pulse, staggered 200ms)"

STATE 1 — "~2s · Intent identified"
  Card: main-surface bg, 1px main-border, 8px radius, 12px 16px padding, max-width 600px
  Top row: BulbOutlined 14px muted-text | "Understanding your question…" size-sm muted-text 500w
  8px gap
  Body (size-base secondary-text, 1.5 line-height):
  "You're asking about your Beverages assortment at Walmart and Target. I'll compare your SKU coverage against competitor listings and check for gaps across sub-categories."

STATE 2 — "~3–10s · Building answer"
  Intent card (unchanged above)
  12px gap
  Label: dot 6px muted-text + "Building your answer…" size-sm muted-text. Note: "(slow pulse)"
  8px gap
  Skeleton block (no card bg, on white):
    3 skeleton text bars: skeleton-base, 4px radius, 14px h, widths 90%/75%/55%, 8px gap
    16px gap
    Skeleton table: 1 header row (3 cols, 16px h) + 4 body rows (12px h, skeleton-shimmer), 10px row gap
  Opacity 0.85. Note: "(static — no shimmer yet)"

STATE 3 — "~10–27s · Generating"
  Intent card: COMPACT — 32px h, single line: BulbOutlined 12px + "I found relevant data across 3 sub-categories." size-md secondary-text. Opacity 0.7.
  12px gap
  Label: dot + "Generating insights…" size-sm muted-text
  8px gap
  Skeleton block — same as State 2 BUT:
    Show shimmer sweep annotation: diagonal white band crossing skeleton bars. Note: "(2s sweep, infinite)"
    Table: first 2 column headers RESOLVED to real text ("Subcategory", "SKU Count"), third still skeleton bar. Note: "(headers resolve 500ms apart)"
  Below skeleton: italic "Still working — complex queries take a moment." size-sm secondary-text centered. Note: "(only if >20s)"

STATE 4 — "~27s · Answer complete"
  Intent card: gone
  Full response card (1px main-border, 8px radius, 16px 20px padding):

  NARRATIVE: 2 sentences, size-base primary-text. Bold key numbers:
  "Your Beverages assortment has a **34% gap** vs competitors at Walmart, largest in Sparkling Water (**−47 SKUs**). Coverage is strongest in Juices (+12 SKUs ahead of competitor average)."

  SOURCE PROVENANCE LINE (A2): size-xs muted-text, 8px below narrative:
  "Data: Walmart catalog · Updated: Nov 14, 2026 · 312 records matched"
  Style: no icon, plain text, muted, not hyperlinked

  16px gap

  TABLE (Ant Design compact, 1px border):
  Headers: Subcategory | Your SKUs | Competitor Avg | Gap
  5 rows: Sparkling Water (28/53/−25 red), Juices (61/49/+12 green), Still Water (34/41/−7 red), Energy Drinks (19/44/−25 red), Sports Drinks (12/38/−26 red)
  Pagination: "1–5 of 18 rows". Gap column: red text for negatives, #16A34A for positives.

  16px gap

  CHART (bar chart, 280px h):
  X-axis: subcategory names. Two bar series: "Your SKUs" (#3E8C2F) | "Competitor Avg" (#E5E7EB)
  Hover annotation on "Sparkling Water" bar: show tooltip card (white, 1px border, 8px radius, shadow) with exact values
  Chart type toggle top-right: [Bar] [Line] — "Bar" currently active, outlined button group size-sm

  16px gap

  ACTION ROW (right-aligned, 8px gap between icons, all size-base muted-text):
  LikeOutlined | DislikeOutlined | (8px spacer) | DownloadOutlined | ShareOutlined | PushpinOutlined

  FORMAT PICKER (open below DownloadOutlined):
  Ant Design Menu, 3 items:
    FileExcelOutlined #16A34A · "Excel (.xlsx)" · "All data rows" — size-sm
    FilePdfOutlined #DC2626 · "PDF" · "Summary + table + chart" — hover state (main-surface tint)
    FileImageOutlined #1677FF · "Image (.png)" · "Chart only"

  12px gap

  REFINEMENT CHIPS (B1): #F9FAFB bg strip, 1px main-border, 8px radius, 12px 16px padding
  Left: "Follow-up:" size-xs uppercase sidebar-muted
  2 chips: "Break down by sub-category" | "Compare to last quarter"
  Note: "(click fills input, does not submit)"

TRANSITION ANNOTATION between State 3 and State 4:
  Arrow labeled: "300ms cross-fade + table rows stagger 50ms apart"

LEFT MARGIN TIMELINE:
  Thin vertical line connecting all 5 states with time labels: 0ms / 2s / 3s / 10s / 27s
```

---

## PROMPT 3 — Sidebar Interactions: 4 Flows with Trigger Context

**What this shows:** Four sidebar interaction flows, each structured as TRIGGER → STATE → RESULT. A first-time viewer (engineer) should understand exactly what user action causes each state and what happens next. Panels share the same sidebar scaffold — same folders, same visual language — so they read as one interface, not four separate screens.

```
Using the design system from Prompt 1. Show a 2×2 grid of panels, each 460px wide. Every panel has 3 zones stacked vertically:
  ZONE 1 — TRIGGER BAR (32px, #F1F5F9 bg, 1px #E2E8F0 border, 8px radius top, 12px h-padding): shows the user action that triggers this state in size-xs #475569 text, prefixed with a hand cursor icon "👆"
  ZONE 2 — SIDEBAR VIEW (the actual UI state, 240px wide, centered in panel)
  ZONE 3 — RESULT BAR (32px, #F0FDF4 bg, 1px #86EFAC border, 8px radius bottom, 12px h-padding): shows what happens after this interaction in size-xs #166534 text, prefixed with "→"

All 4 sidebars show the SAME base state: "Ask Me / DataWeave" header, search bar, New Chat button, then FOLDERS section with "Pricing Intelligence" (collapsed) and "Assortment Analysis" (expanded, showing 3 indented chat items).

---

PANEL 1 (top-left) — "Folder instructions"

TRIGGER BAR: "👆 Hover folder row → gear icon appears → click gear"

CRITICAL: This panel MUST show TWO distinct sub-states separated by a right-pointing arrow (→). Do NOT show only one state. Both must be visible in the panel simultaneously.

SUB-STATE 1 — HOVER (left half, 180px wide, label "1. Hover" above):
  Sidebar in normal state. "Assortment Analysis" folder row is in hover state (background rgba(255,255,255,0.04)).
  On the right side of this row ONLY, show: SettingOutlined gear icon (12px, #6B7280) appearing to the far right of the row.
  A small dashed red circle drawn around the gear icon with a pointer label "click to configure".
  All other rows at normal opacity.

→ ARROW between sub-states (24px, #9CA3AF, centered vertically)

SUB-STATE 2 — SETTINGS PANEL OPEN (right portion, label "2. Settings open" above):
  Same dark sidebar visible behind it. OVERLAID on the right edge: a FLOATING WHITE PANEL.
  THE FLOATING PANEL IS WHITE (#FFFFFF). NOT dark. NOT transparent. White background with shadow.
  Panel dimensions: 240px wide, auto height. Positioned to the right of the sidebar, overlapping the main area.
  Shadow: 0 8px 24px rgba(0,0,0,0.15). Border-radius: 8px. 1px border #E5E7EB.

  Inside the white panel (16px padding all sides):
    Row 1: FolderOpenOutlined 14px #6B7280 + "Assortment Analysis" 14px #111827 500w + × CloseOutlined 14px #9CA3AF right
    1px divider #E5E7EB
    12px gap
    "Folder instructions" 13px #111827 600w
    "Added to every query sent from this folder." 12px #6B7280
    8px gap
    Ant Design TextArea (white bg, 1px #D1D5DB border, 8px radius, 3 rows visible):
      Filled with text: "Always compare to Q2 2026 baseline. Flag any metric with variance >10%."
      Bottom-right corner: "47 / 500" in 11px #9CA3AF
    12px gap
    Button row right-aligned: "Cancel" plain text button 13px #6B7280 | 8px gap | "Save" Ant Design primary button brand-green (#3E8C2F) bg white text 13px 28px height

  Below the panel, 3 annotation lines (12px #475569, left-aligned, no bullets):
    ① Text area content injected into every LangGraph query from this folder
    ② Stored as folder.instructions in Postgres — max 500 chars
    ③ Empty instruction = no injection (feature is opt-in per folder)

RESULT BAR: "→ Every query from this folder includes the instruction as prepended context to the LLM"

---

PANEL 2 (top-right) — "AI folder suggestion"

TRIGGER BAR: "👆 Automatic — fires when a new unorganized chat matches an existing folder's query patterns"

SIDEBAR — same base state, "Assortment Analysis" expanded showing 3 chat items. The item "Snacks SKU overlap" has a small sparkle indicator (✦ 8px #9CA3AF) to its left, subtly differentiating it.

MANDATORY: The suggestion popover MUST be WHITE (#FFFFFF), not dark. It floats over the dark sidebar as a bright white card — this visual contrast is intentional and important.

Popover (white, #FFFFFF bg, 1px #E5E7EB border, 8px radius, shadow 0 4px 16px rgba(0,0,0,0.15), 240px wide):
  Positioned directly below the "Snacks SKU overlap" row, left-aligned with it, with a small upward pointer/caret connecting it to the row.
  Inside (12px 14px padding):
    Row: ✦ SparkleOutlined 13px #9CA3AF + "Move to Assortment Analysis" 13px #111827 500w
    "Matches 4 chats already in this folder." 12px #6B7280
    12px gap
    "Accept" outlined button (28px h, 1px #D1D5DB border, #374151 text, 6px radius) | 10px gap | "Create new folder" 12px text link #6B7280

Show ACCEPTED STATE as a small inset "after" state at bottom-right of the panel (labeled "After accepting:" 11px #6B7280):
  80px wide mini-sidebar thumbnail showing "Snacks SKU overlap" now indented inside Assortment Analysis folder, with AA dot (teal #4B9E9E) and a faint ✓ checkmark

Annotation lines below panel:
  ① Popover is white — intentional contrast against dark sidebar
  ② Suppressed after 3 dismissals for same query type
  ③ "Create new folder" → opens inline folder name input

RESULT BAR: "→ Chat organized automatically. User confirms or declines — no drag needed."

---

PANEL 3 (bottom-left) — "Search"

TRIGGER BAR: "👆 Click search bar → type query keyword"

SIDEBAR — TWO sub-states separated by thin arrow:

  BEFORE (80px, barely visible): normal sidebar, search bar empty, placeholder visible

  AFTER (320px): full search results state
    Search bar: "beverages" typed, #1677FF left border highlight on input, X clear icon right
    "5 RESULTS" — size-xs sidebar-subtle uppercase, 28px row height. All section headers (FOLDERS, FAVORITES, etc.) GONE — replaced entirely by flat results list.
    5 result rows, 38px each, with left 3px colored border indicating module:
      ● #4B9E9E dot | "Beverages OOS rate — Walmart" weight-medium primary-text | "2h" sidebar-subtle
        "in: Assortment Analysis" size-xs sidebar-subtle
      ● #4B9E9E | "Beverages gap analysis — Costco" weight-medium | "1d"
        "in: Recent"
      ● #B07B35 | "Beverages price ladder vs Target" | "3d"
        "in: Pricing Intelligence"
      ● #4B9E9E | "Sparkling beverages SKU overlap" | "1w"
        "in: Assortment Analysis"
      ● #7B68B0 | "Beverages shelf index — DSA" | "2w"
        "in: Recent"
    Annotate with circled ①: "Match highlighted in weight only — no color bg"
    Annotate with circled ②: "Source folder shown below each result"
    Bottom tip (24px from bottom): "↵ opens first result" size-xs sidebar-subtle centered

RESULT BAR: "→ Click result → navigates to that chat in main area. Section view restores on clear."

---

PANEL 4 (bottom-right) — "Insights (data pins)"

TRIGGER BAR: "👆 Click PushpinOutlined on any response card → pin dialog"

SIDEBAR — same base sidebar BUT with a new INSIGHTS section inserted ABOVE FOLDERS:

  INSIGHTS section header (10px sidebar-subtle uppercase) + PushpinOutlined 12px sidebar-subtle right
  3 pinned items (34px each):
    PushpinFilled 12px brand-green | "Beverages gap: −34% Walmart" size-sm primary-text | "Nov 14" sidebar-subtle
    PushpinFilled 12px brand-green | "Sparkling Water: −47 SKUs vs avg" size-sm primary-text | "Nov 14" sidebar-subtle
    PushpinFilled 12px brand-green | "Juices: only +12 gap in Beverages" size-sm primary-text | "Nov 13" sidebar-subtle

  Floating pin detail card attached to FIRST item (white, 280px, 8px radius, shadow):
    "Beverages gap: −34% vs Walmart" size-base primary-text 600w
    "From: Assortment gap analysis · Nov 14" size-xs muted-text
    8px gap
    TextArea "Added note: check again after Q4 restock" filled | "42 / 200" counter
    12px gap
    "Remove pin" size-xs #DC2626 text left | "Done" primary button brand-green right
  Annotate with circled ①: "Pins survive chat deletion"
  Annotate with circled ②: "Note optional — 200 char max"
  Annotate with circled ③: "Linked back to source chat via response_id"

RESULT BAR: "→ Insights board = persistent workspace layer above chat history. Accessible from any session."

---

GLOBAL DESIGN RULES FOR THIS PROMPT:
- White background behind all panels (not gray)
- Each sidebar view: exactly 240px wide, dark theme #13151C, same as Prompt 1
- Floating panels/popovers: always white, crisp shadow, never overlap the sidebar chrome
- All 4 trigger bars: identical styling (#F1F5F9 bg), all result bars: identical styling (#F0FDF4 bg)
- Font for trigger/result bars: Inter 11px, NO ALL-CAPS, conversational tone
- Do not use "A1/B2/C1" codes anywhere visible — use the panel titles as written above
- Flow arrow between BEFORE/AFTER sub-states: thin gray arrow (→), 20px, centered vertically
```

---

## PROMPT 4 — Modals, Overlays & Scope Recovery

**What this shows:** All modal/overlay interactions that appear on top of the main chat area.

```
Using the design system from Prompt 1. Show 4 states on a shared background: dimmed Ask Me interface (dark sidebar left, white chat area right, 45% overlay).

STATE A — Thumbs-Up Feedback Modal
  480px modal, centered, white bg, 8px radius, shadow 0 8px 32px rgba(0,0,0,0.12)
  Header: "What did this get right?" size-lg primary-text 600w | CloseOutlined muted-text top-right
  Sub: "Takes 10 seconds. Helps us surface better answers." size-sm secondary-text
  Divider
  3 rating rows (label-left, stars-right):
    "Content Correctness" size-sm primary-text 500w / "Were the numbers accurate?" size-xs muted-text | 4 filled stars + 1 empty, brand-green
    "Content Relevance" / "Did this answer your actual question?" | 3 filled stars brand-green
    "Content Completeness" / "Did it cover everything you needed?" | empty stars
  12px row gap, divider
  "Anything else? (optional)" size-sm primary-text | TextArea "The Walmart pricing comparison was accurate." 64px h | "55 / 500" size-xs muted-text bottom-right
  Footer right-aligned: "Skip" text button secondary-text | "Submit feedback" primary button brand-green

STATE B — Thumbs-Down Feedback Modal
  Same structure. Title: "What went wrong?" Sub: "Feeds directly into our AI pipeline review."
  Full-width Select open, showing all 7 options:
    "Wrong scope — incorrect brand, retailer, or module"
    "Data was incomplete — missing categories or time range"
    "Didn't answer what I asked" — HOVER STATE: main-surface bg tint
    "Numbers or metrics look incorrect"
    "Competitor data was missing or wrong"
    "Response was too vague — not actionable"
    "Other"
  TextArea placeholder "e.g. Asked for Walmart shelf share but got Amazon data instead."
  Same footer

STATE C — Graceful Scope Expansion (A3)
  NOT a modal — shown in the main chat area, no dimming
  User query bubble: "What are the different data sources we have in DataWeave?"
  Response area (NO card border, just content on white):
    InfoCircleOutlined 16px #1677FF inline | "That's outside what I can answer directly." size-base secondary-text
    12px gap
    "Here's what I can help you with:" size-sm secondary-text 500w
    3 chips (same style as suggested questions):
      "What data do I have for Beverages at Walmart?"
      "Which retailers are included in my assortment data?"
      "What categories have competitor coverage?"
    ANNOTATION: "→ chips generated from Step 1 entity extraction. No new LLM call."
    ANNOTATION: "→ replaces current hard block (P0 bug fix)"

STATE D — Session Digest (C2)
  Triggered by "Summarize session" chip. Shows as a card in the main chat area (same response card style from Prompt 2):
    Header row: FileTextOutlined 16px muted-text | "Session summary · Nov 14, 2026" size-sm secondary-text | CopyOutlined muted-text right-aligned
    Divider
    5 bullet points (size-base primary-text, disc list, 1.6 line-height):
      "Beverages has a 34% assortment gap vs competitors at Walmart — largest gap category."
      "Sparkling Water sub-category is most under-indexed (−47 SKUs vs competitor avg)."
      "Juices is the one category with positive coverage (+12 SKUs)."
      "Energy Drinks and Sports Drinks both show >50% gaps — flagged for expansion review."
      "Data covers 18 sub-categories, 312 matched records, Walmart catalog updated Nov 14."
    Divider
    Footer: "Copy to clipboard" text button secondary-text | ShareAltOutlined + "Share" text button secondary-text — right-aligned
    ANNOTATION: "→ LLM call on session transcript. Runs on-demand only, not automatic."
```

---

## PROMPT 5 — Comparison Mode + Interactive Chart Detail

**What this shows:** The two most visually complex Phase 2 interactions.

```
Using the design system from Prompt 1. Show 2 full-width panels stacked vertically.

PANEL 1 — Comparison Mode (B3)

Sub-panel A: Query entry with Compare toggle
  Input area (same as Prompt 1 main input):
  Left of send button: new icon button SwapOutlined 28px, #F9FAFB bg, 1px main-border, 6px radius, sidebar-muted icon
  Show Compare setup state (triggered after clicking SwapOutlined):
    2-row layout below main input:
    Row 1: "Compare" label size-sm primary-text 500w | Input A "Walmart" | SwapOutlined muted-text | Input B "Target"
    Row 2: "Period" label | Date range picker A "Q3 2026" | SwapOutlined | Date range picker B "Q2 2026"
    Right-aligned: "Run comparison" button brand-green
  ANNOTATION: "→ triggers 2 parallel LangGraph query branches"

Sub-panel B: Comparison result view
  Header row: "Beverages assortment: Walmart vs Target · Q3 2026" size-lg primary-text 600w
  Below: 2-column diff layout (each col ~380px, 16px gap):
    Left col header: "Walmart" — size-base primary-text 600w | date tag
    Right col header: "Target" — size-base primary-text 600w | date tag
    Shared table (spans both cols): columns Subcategory | Walmart SKUs | Target SKUs | Δ Gap
    Rows: Sparkling Water 28/41/+13 green | Juices 61/55/−6 red | Still Water 34/29/−5 red | Energy Drinks 19/31/+12 green | Sports Drinks 12/18/+6 green
    Δ column: colored text (green positive, error-red negative) + small arrow icon ▲▼
  Below table: side-by-side bar chart (same chart from Prompt 2 but two grouped bar series per subcategory, one brand-green one info-blue)
  SOURCE PROVENANCE on each column:
    "Data: Walmart catalog · Nov 14, 2026" | "Data: Target catalog · Nov 12, 2026"
  ANNOTATION: "→ diff column calculated client-side from two API responses"

PANEL 2 — Interactive Chart: 3 States (B2)

Show chart from Prompt 2 (Beverages gap bar chart) in 3 interaction states side by side:

State I — Default
  Bar chart. No hover. Chart type toggle [Bar ●] [Line] top-right.

State II — Bar hovered (Sparkling Water)
  Same chart, "Sparkling Water" bars highlighted (full opacity), others dimmed to 40%.
  Tooltip card above hovered bar (white, 1px main-border, 8px radius, shadow):
    "Sparkling Water" — size-sm primary-text 600w
    "Your SKUs: 28" — brand-green dot + text
    "Competitor Avg: 53" — muted dot + text
    "Gap: −25 (−47%)" — error-red text
  ANNOTATION: "→ hover tooltip. No backend call."

State III — Click-filter active (Sparkling Water clicked)
  Chart persists. Below chart: Ant Design Table now filtered to Sparkling Water rows only.
  Active filter chip above table: "Filtered: Sparkling Water ✕" — brand-green text, #F0FDF4 bg, 1px #86EFAC border
  Table shows 5 rows of Sparkling Water breakdown data.
  "Clear filter" text link info-blue below table.
  Chart type toggle now shows [Bar] [Line ●] — switch to line active (user toggled).
  ANNOTATION: "→ click filters table below. Chart type toggle is client-side only."
```

---

## How to Use These Prompts

1. Paste **Prompt 1** first — establish the design language
2. Paste **Prompt 2** referencing: "Building on the design system and sidebar from Prompt 1..."
3. Paste **Prompts 3–5** with same reference prefix
4. Request an **interactive prototype** linking all frames: Prompt 1 (idle) → click chip → Prompt 2 State 0 → ... → State 4 → click thumbs-up → Prompt 4 State A

**Interaction map for prototype linking:**

| Trigger | From frame | To frame |
|---|---|---|
| Click any suggested chip | P1 empty state | P2 State 0 |
| Query processing | P2 State 0 → 1 → 2 → 3 → 4 | Auto-advance with timing |
| Click LikeOutlined | P2 State 4 | P4 State A |
| Click DislikeOutlined | P2 State 4 | P4 State B |
| Click DownloadOutlined | P2 State 4 | P2 State 4 (format picker open) |
| Click refinement chip | P2 State 4 | P2 State 0 (new query) |
| Click PushpinOutlined | P2 State 4 | P3 Panel D (pin modal) |
| Click SearchOutlined in sidebar | P1 | P3 Panel C |
| Hover folder + click gear | P1 | P3 Panel A |
| Out-of-scope query | P2 State 0 | P4 State C |
| Click "Summarize session" | P2 State 4 | P4 State D |
| Click SwapOutlined | P2 State 4 | P5 Panel 1A |
| Comparison result | P5 Panel 1A | P5 Panel 1B |
| Hover chart bar | P5 Panel 2 | P5 Panel 2 State II |
| Click chart bar | P5 Panel 2 | P5 Panel 2 State III |

*Spec version: 1.0 — 2026-05-14*
