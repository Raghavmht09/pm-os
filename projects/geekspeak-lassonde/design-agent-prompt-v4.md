# Claude Design Agent — McCain FF Rank Coverage v1.x
## Redesign + New Views Prompt

---

## What You Are Building

A set of **three new HTML dashboard variations** (v1.0, v1.1, v1.2) for the **McCain Frozen Foods — Share of Search Rank & Coverage Dashboard**, built for DataWeave's customer GeekSpeak/Lassonde.

You are improving the existing v3.x design AND adding three new interaction patterns the current design lacks. Each variation is a **single self-contained HTML file** with embedded CSS and JS (Chart.js from CDN). No frameworks, no build tools.

---

## Context: What the Dashboard Does

This dashboard shows **Search Ranking + Coverage data** for McCain Frozen Foods products across Canadian grocery retailers. Coverage = how often McCain SKUs appear in search results for a keyword. Rank = their average position on the page.

**Retailers:** Walmart Canada · Loblaws · No Frills · Metro · Real Canadian Superstore  
**Keywords (sample):** frozen fries · french fries · potato chips · frozen potato · savory snacks · crispy fries · oven fries  
**Brands (under McCain):** McCain Original · McCain Sweet Potato · McCain Superfries · McCain Extra Crispy  
**Data dimensions:** Keyword → Brand → SKU → Retailer → Date

---

## Current Design — What Works (Keep These)

These patterns are good. Carry them forward into v1.x:

| Pattern | Keep as-is |
|---|---|
| Font | Poppins (Google Fonts CDN) |
| Color system | `--accent: #1d6fa4` (DataWeave blue) · Relevant = amber (`#d97706`) · Non-Relevant = red (`#ef4444`) |
| Stat cards row | Top summary metrics — Canada Avg Coverage, Avg Rank, Active Retailers, Keywords tracked |
| Date bar | Granularity toggle (Daily/Weekly/Monthly/Quarterly/Yearly) + date range pickers + quick chips (Last 7D, Last 30D, L90D, YTD, 2025, All time) |
| Keyword expand/collapse | `▶ keyword name` → expands to show SKU rows. Keep the chevron + group header pattern |
| Heatmap cells | Color-coded rank cells per date column — green (rank 1–5) → amber → orange → red (25+) → grey (no data) |
| Page header | DataWeave logo mark (3 blue dots) + version badge pill + "Powered by DataWeave" |
| Filter buttons | Pill-shaped: All SKUs · Relevant · Non-Relevant |
| Animations | `fadeUp` on cards, `slideUp` on modals |
| Scrollbar style | Thin 5px custom scrollbar |

---

## Current Design — What to Improve (Across All v1.x)

Apply these improvements to every v1.x variation:

### Visual Polish
- **Cards:** Increase border-radius to `16px`. Add `box-shadow: 0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)`. Remove harsh `border:1px solid #f1f5f9` — replace with shadow only.
- **Spacing:** More breathing room. Section padding `20px 24px` (up from `14px 18px`). Gap between cards `24px`.
- **Typography hierarchy:** Page title `22px 800`. Section titles `14px 700`. Column headers `11px 600 uppercase letter-spacing`. Body `13px 400`. Secondary `12px 400 #64748b`.
- **Stat cards:** Taller — `padding: 16px 20px`. Value `26px 800`. Label `11px 500 uppercase`. Subtle left-accent border (4px solid, colored per metric type).
- **Empty cells in heatmap:** Show `—` in `#cbd5e1` instead of blank. No invisible data.
- **Active row highlight:** Stronger. `background: #dbeafe` + `border-left: 3px solid #1d6fa4` on selected rows.
- **Control bar:** Separate filter row from view toggle row. Filters on top line, view controls (toggle + search + expand/collapse) on second line. Less cramped.

### Self-Explanatory Labels
- Every section card must have a **subtitle** below the title explaining what the data means in plain English. Example: "Coverage % = how often a McCain SKU appeared in page-1 results for this keyword across the selected date range."
- Tooltip on hover for every column header in tables (use `title` attribute as minimum, styled tooltip as ideal).
- Heatmap scale legend must be always visible, not tucked in the controls bar.
- Retailer pills/badges should show retailer abbreviation + full name on hover.

### Navigation
- Add a **sticky top nav strip** inside the page (not browser nav) with anchor links to each section: `Overview · Ranking · Coverage · Keyword View`. Smooth scroll. Active section highlighted. Height `40px`, background white, `border-bottom: 1px solid #f1f5f9`, `position: sticky`, `top: 0`, `z-index: 100`.

---

## Three New Variations

---

### v1.0 — "Tree Drill-Down" (`mccain_ff_rank_coverage_v1_0.html`)

**Core new feature:** A **tree-expandable hierarchy** replacing the flat keyword-grouped table. The hierarchy is:

```
▶ Retailer (e.g. Walmart Canada)
    ▶ Brand (e.g. McCain Original)
        ▶ Keyword (e.g. "frozen fries")
            → SKU rows with rank + coverage cells per date
```

**This replaces the flat rank table in Ranking View AND Coverage View.**

#### Tree Component Spec

```
LEVEL 1 — RETAILER ROW
Background: #f0f7ff  Border-left: 4px solid #1d6fa4
Icon: ▶ / ▼ chevron (animated rotate)  
Content: Retailer name (16px 700) + badge showing "X brands · Y keywords · Avg Coverage Z%"
Click: expands/collapses all children

LEVEL 2 — BRAND ROW (indented 20px)
Background: #f8fafc  Border-left: 3px solid #e2e8f0
Icon: ▶ / ▼ chevron
Content: Brand name (13px 600) + pills: "X SKUs" + avg rank badge + avg coverage badge
Click: expands/collapses keywords under this brand

LEVEL 3 — KEYWORD ROW (indented 40px)
Background: white  Border-left: 2px solid #f1f5f9
Icon: ▶ / ▼ chevron
Content: keyword name (13px 500) + Relevant/Non-Relevant pill + sparkline (tiny 80px inline SVG showing coverage trend)
Click: expands SKU rows

LEVEL 4 — SKU ROWS (indented 56px)
Background: white (alternating white/#fafafa)
Content: SKU name + type pill (Relevant/Non-Relevant) + rank/coverage cells per date column (same heatmap cell style as existing)
```

**Behavior:**
- Default state: All retailers collapsed. User expands one retailer at a time.
- "Expand All / Collapse All" buttons at top of tree.
- Clicking a retailer row expands brands. Clicking brand expands keywords. Clicking keyword expands SKU rows.
- Selected/active node: `border-left` color darkens, background tints stronger.
- Collapse icon animates `▶` → `▼` on expand.
- Keyboard accessible: Enter/Space to toggle nodes, arrow keys to navigate.

**Date columns:** Same as existing — one column per date in selected range. Sticky columns: Tree label column (left-fixed) + Avg column.

**Controls above tree:**
- Retailer multi-select pills (click to show/hide that retailer's tree branch)
- Brand filter dropdown
- Relevancy filter (All / Relevant / Non-Relevant)
- Date bar (same as existing)

**Coverage view in v1.0:**
Same tree structure, but date cells show **Coverage %** (0–100%) as colored cells using a green-to-red scale: ≥80%=green · 60–79%=light green · 40–59%=amber · 20–39%=orange · <20%=red. Cell shows the % number.

**Section layout:**
1. Stat cards
2. Sticky section nav
3. Section: **Ranking** — Tree drill-down, rank heatmap cells
4. Section: **Coverage** — Tree drill-down, coverage % cells (same tree, different cell values/colors)

---

### v1.1 — "Retailer Focus View" (`mccain_ff_rank_coverage_v4_1.html`)

**Core new feature:** A **retailer-centric layout** where the user selects one retailer at a time and sees a full brand × keyword breakdown for that retailer. Simpler than v1.0 — no nested tree, just clean tabbed/filtered panels.

**Layout:**

```
[Retailer Tab Bar]  Walmart Canada | Loblaws | No Frills | Metro | Real Canadian Superstore
                    ↑ clicking switches the entire content area below

[Brand Overview Cards Row]  — one card per brand
┌─────────────────────────────┐
│ McCain Original             │
│ Avg Coverage: 78%  ↑ +3%   │
│ Avg Rank: #4.2              │
│ SKUs tracked: 8             │
│ Keywords: 7                 │
│ [View Keywords →]           │
└─────────────────────────────┘
(4-5 cards in a horizontal scroll row)

[Brand Detail Panel]  — appears when user clicks "View Keywords →" on a brand card
Full-width panel slides in below the card row (accordion-style, not modal)
Shows: keyword-level table for that brand at that retailer
Columns: Keyword | Relevant? | Avg Rank | Avg Coverage % | Coverage Trend sparkline | Best Date
One row per keyword. Sortable.
```

**Retailer Tab Bar:**
- Horizontal tab strip. Selected tab: blue underline + bold. Unselected: grey.
- Each tab shows: Retailer name + `(Avg Coverage X%)` badge in small text below name.
- Mobile: converts to horizontal scroll tabs.

**Brand Overview Cards:**
- `display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))`
- Each card: white, `border-radius: 16px`, shadow, padding `20px`.
- Brand name: `15px 700 #0f172a`.
- Avg Coverage: large number `28px 800` + color (green if ≥70%, amber if 50–69%, red if <50%) + delta change pill.
- Avg Rank: `16px 700 #1d6fa4`.
- SKUs + Keywords: small meta row `11px #94a3b8`.
- "View Keywords →" link: `12px #1d6fa4 underline on hover`.
- Active (expanded) card: `border: 2px solid #1d6fa4`.

**Brand Detail Panel (expanded):**
- Slides open below the brand card row with `slideDown` animation (`max-height: 0 → max-height: 600px`, transition `0.3s ease`).
- White background, `border-top: 2px solid #1d6fa4`, `padding: 20px 24px`.
- Panel header: Brand name + "Keywords at [Retailer]" + collapse `✕` button.
- Table: Keyword | Relevant | Avg Rank | Avg Coverage % | Trend | Best Date.
- Coverage % cell: colored badge (green/amber/red scale).
- Trend: tiny 80×30px sparkline SVG inline.

**Additional section below (always visible):**
**Retailer × Date Coverage Heatmap** — same as existing v3.x heatmap but now filtered to selected retailer. Shows all brands as rows, dates as columns. Sticky brand column. Color scale same as above.

**Controls:**
- Date bar (same as existing, globally applies to all data on page).
- Relevancy filter above brand cards: All / Relevant Only / Non-Relevant Only.
- Search: filters brand cards and keyword table simultaneously.

**Section layout:**
1. Stat cards (filtered to selected retailer)
2. Sticky section nav
3. Retailer tab bar
4. Brand Overview cards (for selected retailer)
5. Brand detail panel (expands inline)
6. Coverage Heatmap (retailer × date, for selected retailer)
7. Ranking Trend Chart (line chart, all brands on one chart for selected retailer)

---

### v1.2 — "Keyword Deep Dive" (`mccain_ff_rank_coverage_v4_2.html`)

**Core new feature:** A **keyword-aggregated timeline view** where the user selects one brand, and sees each keyword as a dedicated row with its full coverage timeline. This is the aggregated multi-keyword trend view.

**Mental model:** "For this brand, show me how coverage changes over time for every keyword — all at once, stacked vertically."

**Layout:**

```
[Brand Selector]  dropdown/pill tabs: McCain Original | McCain Sweet Potato | McCain Superfries | McCain Extra Crispy

[Retailer Filter]  pill multi-select: All | Walmart Canada | Loblaws | No Frills | Metro | Real Canadian Superstore

[Date Bar]  same as existing

[Keyword Timeline Rows]  — one full-width row per keyword, stacked vertically

┌────────────────────────────────────────────────────────────────────────────────────────┐
│  🔍 frozen fries                     [Relevant ●]   Avg Coverage: 74%   Avg Rank: #3.8 │
│  ──────────────────────────────────────────────────────────────────────────────────── │
│  [Coverage Timeline Chart — full width line chart, one line per retailer]              │
│  X-axis: dates  Y-axis: Coverage %  Lines: one per retailer (colored by retailer)     │
│  Height: 140px                                                                         │
│  Hover tooltip: date + coverage % per retailer                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────────────────────────┐
│  🔍 french fries                     [Relevant ●]   Avg Coverage: 61%   Avg Rank: #5.1 │
│  ──────────────────────────────────────────────────────────────────────────────────── │
│  [Coverage Timeline Chart]                                                              │
└────────────────────────────────────────────────────────────────────────────────────────┘

... (one block per keyword)
```

**Keyword Row Block:**
- White card, `border-radius: 16px`, shadow, `margin-bottom: 16px`.
- **Header strip:** `background: #f8fafc`, `padding: 14px 20px`, `border-bottom: 1px solid #f1f5f9`.
  - Left: search icon `🔍` (or SVG) + keyword text `15px 700 #0f172a` + Relevant/Non-Relevant pill.
  - Right: Avg Coverage badge (colored) + Avg Rank badge (blue) + collapse toggle `▼`.
- **Chart area:** `padding: 16px 20px 20px`. Chart.js line chart, `height: 140px`.
  - Y-axis: 0–100 (coverage %). X-axis: dates (abbreviated).
  - One line per retailer. Retailer color palette (distinct 5 colors, not the rank color scale):
    - Walmart Canada: `#0071DC` (Walmart blue)
    - Loblaws: `#CC0000` (Loblaws red)
    - No Frills: `#FFDD00` stroke with `#333` label
    - Metro: `#E31837` (Metro red — slightly different shade from Loblaws)
    - Real Canadian Superstore: `#CC0000` → use `#8B1A1A` to distinguish from Loblaws
  - Fill: each line has `fill: true`, low-opacity fill (10%) matching the line color.
  - Legend: small inline legend below chart showing retailer → color dot.
- **Collapsed state:** chart area hidden, header strip shows summary only. Toggle to expand.
- **Default:** top 3 keywords expanded, rest collapsed.

**Brand Selector:**
- Horizontal pill tab row. Selected: filled blue. Unselected: outlined grey.
- On brand change: all charts re-render with new brand data.
- Badge on each pill showing keyword count: "McCain Original · 7 keywords".

**Retailer Filter:**
- Pill multi-select. Selected retailer = filled colored (use retailer's brand color). Deselected = grey outline.
- Toggling a retailer shows/hides that line on ALL charts simultaneously.
- "All Retailers" pill deselects all individual selections (and vice versa).

**Sort / Order controls above keyword rows:**
- Sort by: "Avg Coverage ↓" | "Avg Rank ↑" | "Alphabetical" | "Most Volatile" (biggest range in coverage over period).
- Filter: Relevant Only / Non-Relevant Only / All.

**Additional summary section at bottom:**
**Cross-keyword comparison table** — one row per keyword, columns: Keyword | Relevant | Best Retailer | Worst Retailer | Avg Coverage % | Coverage Range (min–max) | Trend (↑↓→).
Sortable. Export button.

**Section layout:**
1. Stat cards (filtered to selected brand)
2. Brand selector + retailer filter + date bar
3. Sort/filter controls
4. Keyword timeline rows (stacked cards)
5. Cross-keyword comparison table

---

## Shared Requirements for All v1.x

### Technical
- Single HTML file per variation, no external CSS/JS files except:
  - `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap`
  - `https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js`
- All mock data embedded as JS arrays/objects in `<script>` at bottom of `<body>`.
- All interactivity (expand/collapse, filter, tab switch, sort) in vanilla JS — no jQuery, no lodash.
- CSS custom properties on `:root` for all design tokens (colors, radius, shadow, spacing). No hardcoded hex outside `:root`.

### Mock Data to Use
Generate realistic-looking mock data for:
- **Retailers:** Walmart Canada · Loblaws · No Frills · Metro · Real Canadian Superstore
- **Brands:** McCain Original · McCain Sweet Potato · McCain Superfries · McCain Extra Crispy
- **Keywords (7):** frozen fries · french fries · potato chips · frozen potato · savory snacks · crispy fries · oven fries
- **Date range:** Jan 2025 – May 2026 (daily, but show weekly aggregated in charts by default)
- **Coverage values:** realistic % between 30–100 with natural variance (not random noise). Walmart typically highest (70–100%), smaller retailers lower (30–70%).
- **Rank values:** 1–30. McCain ranks 2–8 typically for relevant keywords, 10–25 for non-relevant.
- **SKUs per brand:** 4–8 SKUs each. Mix of Relevant and Non-Relevant per keyword.

### Design Tokens (`:root`)
```css
:root {
  --accent: #1d6fa4;
  --accent-light: #eff6ff;
  --accent-border: #bfdbfe;
  --v-bg: #fefce8; --v-border: #fde047; --v-mid: #d97706; --v-dark: #b45309; --v-text: #92400e;
  --nv-bg: #fff0f0; --nv-border: #fca5a5; --nv-mid: #ef4444; --nv-dark: #dc2626; --nv-text: #991b1b;
  --cov-high: #16a34a;   /* coverage ≥80% */
  --cov-mid:  #d97706;   /* coverage 50–79% */
  --cov-low:  #ef4444;   /* coverage <50% */
  --text-primary: #0f172a;
  --text-secondary: #64748b;
  --text-muted: #94a3b8;
  --border: #f1f5f9;
  --border-strong: #e2e8f0;
  --surface: #f3f4f6;
  --card-shadow: 0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04);
  --radius-card: 16px;
  --radius-pill: 999px;
  --radius-btn: 8px;
}
```

### Accessibility
- All interactive elements have `:focus-visible` outline (`2px solid #1d6fa4`, offset `2px`).
- `aria-expanded` on all toggle buttons.
- `aria-label` on all icon-only buttons.
- Color is never the only signal — all colored cells also show a number or `—`.

### Responsive
- Cards stack to single column below `768px`.
- Tables get `overflow-x: auto` wrappers.
- Retailer tab bar gets horizontal scroll on mobile.
- Stat cards wrap to 2-column grid below `480px`.

---

## Output

Deliver three files:
1. `mccain_ff_rank_coverage_v4_0.html` — Tree Drill-Down
2. `mccain_ff_rank_coverage_v4_1.html` — Retailer Focus View
3. `mccain_ff_rank_coverage_v4_2.html` — Keyword Deep Dive

Each file must be fully interactive with mock data. No placeholders. No "TODO" comments. Charts must render. Trees must expand/collapse. Filters must work.

---

## Quality Checklist (Self-Verify Before Delivering)

- [ ] All three files open without console errors
- [ ] Charts render with real data (not empty)
- [ ] Tree expand/collapse works in v1.0
- [ ] Retailer tabs switch content in v1.1
- [ ] Brand selector updates all charts in v1.2
- [ ] Retailer filter toggles individual lines in v1.2 charts
- [ ] Date bar quick chips (Last 7D, Last 30D, etc.) filter data in all views
- [ ] Relevancy filter (Relevant/Non-Relevant/All) works
- [ ] Every section has a plain-English subtitle explaining the data
- [ ] Heatmap legend is always visible
- [ ] No hardcoded colors outside `:root` variables
- [ ] Mobile: no horizontal overflow at `375px` viewport
- [ ] All interactive elements have hover + focus states
