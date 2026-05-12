# DSA Design System Audit
**Audited:** 2026-05-06
**Method:** agent-browser UI capture — 9 screens across all major sections
**Sections covered:** Scorecard, SKU Overview, Availability Analysis, Share of Search Analysis, Detailed View, MAP, Alerts, Custom Views, Ask Me

---

## Layout Architecture

| Section | Layout Pattern | Panels |
|---|---|---|
| Scorecard | Single pane | Full-width content |
| Availability Analysis | Single pane | Full-width content |
| Share of Search Analysis | Single pane | Full-width content |
| Detailed View | Dual pane (split) | Left: table/list · Right: detail |
| MAP | Dual pane (split) | Left: product list · Right: detail |
| Alerts | Dual pane (split) | Left: alert list · Right: alert detail |
| Ask Me | Single pane | Blank — no content rendered |

**Collapse handles** (`<<`) visible in dual-pane views — allows collapsing either panel. Not present in single-pane views.

**Inconsistency:** Dual-pane right panel is fully populated in Alerts but completely empty/gray in Detailed View and MAP (loading state vs no-state vs empty state are visually identical — all render as blank gray canvas).

---

## Navigation System

### Primary Nav (left sidebar — dark navy `~#2D2F45`)
Icon-only in default state. Tooltip label appears on hover.

| Icon position | Section | Separator |
|---|---|---|
| 1 | Dashboard (home icon) | — |
| 2 | Detailed View (group icon) | — |
| 3 | MAP (trend icon) | — |
| 4 | Alerts (bell icon) | — |
| — | — | horizontal rule |
| 5 | Custom Views (search icon) | — |
| 6 | Ask Me (chat icon) | — |

Bottom anchored: Help `?` icon + User avatar (initials, teal gradient).

**Active state:** Icon background gets lighter fill within sidebar. No left-border active indicator.

**Inconsistency:** Separator divides Dashboard/DV/MAP/Alerts (core analytics) from Custom Views/Ask Me (secondary tools) — but there's no visual label for these groups and the logic isn't self-evident to new users.

### Secondary Nav (left white panel — context-sensitive)

| Section | Sub-nav items |
|---|---|
| Dashboard | Scorecard · SKU Overview · Availability Analysis · Share of Search Analysis · Show All Views (link) |
| Detailed View | All products · Share of Search Analysis · Share of Category Analysis (expandable) |
| MAP | Violated Recently · Violated last 7 Days · Violated last 30 Days · All Products · Favorites |
| Alerts | (none — replaced by alert card list) |
| Custom Views | 13 named views: Sentiment Analysis, Walmart Marketing Spend Analysis, Content Benchmark Analysis, Share of Search Overview, Competitor Sentiment Analysis, Promo Analysis, Price Variance Analysis, MAP Violation Analysis, Global Scorecard Price Analysis, Stats Dashboard, Test ByB, DSIM, Sentiment Summary Dashboard |

**Inconsistency:** "Show All Views" is a blue hyperlink — the only link-style nav element. All other sub-nav items are plain text rows. Mixing link pattern with list-item pattern in same nav panel.

---

## Filter System

Filter panel lives in the secondary nav (left white panel), below sub-nav. Header label: **Filters** (bold, ~13px).

Each filter = row with label + expand indicator.

| Section | Filter fields | Expand indicator |
|---|---|---|
| Dashboard | Manufacturer · Brand · Retailer · State · City · Zip Code | `>` chevron |
| Detailed View | Product Tags · Buy Box Seller · Manufacturer · Brand · Category · Sub Category · Retailer · State · City · Zip Code · Stock Status | `>` chevron |
| Share of Search | Keyword Tags · Manufacturer · Brand · Retailer · Keyword · Result Type · State · City · Zip Code · Rank Bucket · Page Number | `>` chevron |
| MAP | Category · Brand · Price Range | `>` chevron for Category/Brand · `+` icon for Price Range |

**Inconsistency 🔴:** Price Range filter in MAP uses `+` icon instead of `>` chevron. All other 20+ filters across every section use `>`. One-off deviation — likely a different component or developer implementation.

**Inconsistency:** Filter field sets vary significantly across sections with no shared core set. "Manufacturer" appears in Dashboard, Detailed View, SoS, Alerts detail — but not in MAP. No visual grouping or "applied filters" indicator visible in any section.

---

## Date / Time Selector

Top of content area. Behavior differs per section.

| Section | Date UI |
|---|---|
| Scorecard | Timeline scrubber (Dec → May) · "Monthly Aggregate" pill · no navigation arrows |
| Availability Analysis | "Daily / Every day" pill · short range (Apr 29–May 06) · `<` `>` navigation arrows |
| Share of Search Analysis | "Daily / Every day" pill · short range (Apr 30–May 06) · `<` `>` navigation arrows |

**Inconsistency 🔴:** Two distinct date selector patterns — scrubber with full timeline (Scorecard) vs pill + short range + arrow navigation (Analysis views). Same position, different interaction models. User mental model breaks switching between views.

---

## Component Inventory

### Chart Cards
- White card, subtle shadow
- Card header: section title (bold ~14px) + description (gray ~12px)
- Top-right actions: `⋮` kebab menu + `⊟` collapse icon
- Loading state: 4-dot rotating spinner (blue, center-aligned)

### Alert Cards (Alerts section left panel)
- White card with left border
- Red dot indicator (active alert)
- Title (bold ~13px)
- Type label (gray, ~11px)
- Meta: "Products triggered: N" + "Last Triggered: [date]"
- No explicit "inactive" card state visible

### Alert Detail Panel
- Status badge: "Active" (green pill)
- Action links top-right: "Edit Alert ✏" + "Delete Alert 🗑" (text links, not buttons)
- Metadata grid: 2-column layout — Manufacturer, Brand, Category, Sub Category, Retailer, State, City, Zip Code, SKU Code, Email, Product Tags, Threshold
- "Product Listing" section (collapsed, `⊟` icon)
- "Alerts Download" section with **Last 30 Days / Last 7 Days / Date Range** toggle tabs

### CTA Buttons — Inconsistent patterns 🔴

| Button | Style | Case | Placement |
|---|---|---|---|
| Create Alert | Filled blue, rounded | Title Case | Left panel header (above list) |
| LOAD ALL PRODUCTS | Outlined blue, pill border | ALL CAPS | Center of empty state |

Two completely different button styles, weights, and placement logic. No unified CTA component pattern.

### Search + Toolbar (MAP)
- Search input (left-aligned, `🔍` prefix icon)
- Sort icon (`↑↓`) to the right of search
- Download icon (arrow-down) furthest right
- Single row, sits above the product list

---

## Empty States

| Section | Empty state treatment |
|---|---|
| MAP (no filter applied) | "No data available" text + "LOAD ALL PRODUCTS" outlined CTA button |
| Ask Me | **Completely blank** — gray canvas, no illustration, no prompt, no description |
| SKU Overview | Loading spinner — never resolved (possible session/data issue) |

**Gap 🔴:** Ask Me has no empty state at all. The section is completely blank on load — no onboarding copy, no input field, no prompt suggestions. This is the highest-visibility gap for new user experience.

**Gap:** No consistent empty state pattern. MAP uses text + CTA, Ask Me uses nothing, loading states use spinners. No shared empty state component.

---

## Color Tokens (observed)

| Token | Value (approx) | Usage |
|---|---|---|
| Sidebar bg | `#2D2F45` | Primary nav background |
| Content bg | `#F5F5F5` | Page background behind panels |
| Panel bg | `#FFFFFF` | Left secondary nav + cards |
| Split-pane bg | `#EEF0F8` (light lavender) | Dual-pane right/left content area |
| Primary blue | `~#4A90D9` | CTAs, active states, links |
| Active nav bg | Light blue tint | Selected sidebar icon bg |
| Alert dot | Red | Active alert indicator |
| Active badge | Green pill | Alert "Active" status |
| Text primary | `~#1A1A2E` | Headers, labels |
| Text secondary | `~#6B7280` | Descriptions, meta |

---

## Typography (observed)

| Usage | Weight | Size (approx) |
|---|---|---|
| Section headers | Semi-bold | ~14–16px |
| Sub-nav items | Regular | ~13px |
| Filter labels | Regular | ~13px |
| Card descriptions | Regular | ~12px |
| Alert card title | Bold | ~13px |
| Alert meta | Regular | ~11px |
| Badge text | Medium | ~11px |

No type scale documentation visible in UI. Sizes inferred from visual comparison.

---

## Icon System

Nav icons appear to be icon-font based (accessibility tree showed character codes `q`, `]` for MAP/Detailed View icons — font glyph rendering). No SVG inline icons confirmed in nav.

Content icons confirmed: `⋮` kebab · `⊟` collapse · `>` chevron · `+` expand · `↑↓` sort · `🔍` search · download arrow.

**Gap:** Icon font characters rendering as arbitrary characters in accessibility tree — bad for screen readers / a11y.

---

## Key Inconsistencies — Priority Order

| # | Issue | Severity | Location |
|---|---|---|---|
| 1 | Ask Me has no empty state — completely blank | 🔴 High | Ask Me section |
| 2 | Two date selector patterns (scrubber vs pill+arrows) | 🔴 High | Scorecard vs Analysis views |
| 3 | Two CTA button styles (filled Title Case vs outlined ALL CAPS) | 🔴 High | Create Alert vs LOAD ALL PRODUCTS |
| 4 | Price Range filter uses `+` icon, all others use `>` | 🟡 Medium | MAP filters |
| 5 | Dual-pane right panel: empty/gray vs fully populated — no distinction | 🟡 Medium | Detailed View, MAP vs Alerts |
| 6 | "Show All Views" is a link style in a list-item nav context | 🟡 Medium | Dashboard sub-nav |
| 7 | No unified empty state component across sections | 🟡 Medium | MAP, Ask Me |
| 8 | Nav group separator has no label — grouping logic opaque | 🟢 Low | Primary sidebar |
| 9 | Icon font a11y — nav icons render as glyph characters | 🟢 Low | Primary sidebar |
| 10 | No "applied filters" indicator visible in any section | 🟢 Low | All filter panels |

---

## Re-audit Findings (2026-05-06 — full data load)

### SKU Overview — fully loaded

**Layout:** Single pane, full-width data table
**Date selector:** "Daily / Every day" pill + short range (Apr 30–May 06) + `<` arrow — same pattern as Analysis views, NOT the Scorecard scrubber. Confirms Scorecard scrubber is the outlier.
**Context summary bar:** "Showing the analysis across: 8 cities, 246 brands, 4 retailers, 5 states..." — single gray text line below date bar. Only present in SKU Overview — not seen in other views. Unique component.
**KPI tab bar:** Pill-shaped removable tabs — Availability ✕ · Keyword Rank ✕ · Category Rank ✕ · Content ✕ · Ratings ✕ · Pricing ✕. Each has a close `✕` to remove. "Select KPIs ▾" dropdown on right to add back. `ⓘ` info icon alongside.
**Data table:**
- Columns: Product Title / SKU Code · Retailer · KPI columns (dynamic per selected KPIs)
- Availability columns: In Stock ↑ · Out of Stock ↑ · Delisted ↑
- Pricing columns: Avg Selling Price ↑ · Avg List Price ↑
- Color coding: green = good (high in-stock), red = bad (out of stock, delisted) — traffic light pattern
- Row-level actions: small icon buttons (bookmark/edit) on each row — right-aligned, appear on hover
- Search input top-right of table header

**New component observed:** Configurable KPI tab bar — not seen anywhere else in DSA. Unique to SKU Overview.

---

### Availability Analysis — fully loaded

**Date selector:** "Daily / Every day" pill + Apr 29–May 06 range + arrows. Consistent with SoS/SKU Overview pattern.
**Freshness indicator:** "Updated on Tuesday, May 5th, 2026 between 00:22–11:51 hrs. Refreshed Daily once." — gray text below date bar. Also present in SoS. Not present in Scorecard.
**Actionable Items section:**
- Two insight cards side by side: red dot + insight text + "View" CTA button (one card has it, other does not — inconsistent)
- Cards have a horizontal scroll implied (cut off at right edge)
**Availability Audit section:**
- KPI summary row: "Availability · 76 · 0.90" (score + delta) — delta in green/red
- "Availability Scores Across Brands" — heat map table: rows = retailers (Amazon, Target), columns = brands (Abuelita, Friskies, Gerber, Lean Cuisine, Nesquik, Nestle, Outshine...), cells = color-coded scores (green/yellow/red)
- Alphabetical letter index above brand columns (A, F, G, L, N, O, P, S...) for jumping to brand groups

**New components observed:**
- Insight/actionable cards with inline "View" CTA
- Heat map table with retailer × brand matrix + color coding
- Delta indicator (score + directional change in color)

**Inconsistency:** "View" CTA on actionable insight card uses different style from both existing buttons — smaller, pill-shaped, outlined blue. Third button variant.

---

### Share of Search Analysis — fully loaded

**Date selector:** Same "Daily / Every day" pill pattern. Consistent.
**Freshness indicator:** Same pattern as Availability Analysis.
**Actionable Items section:** Present but empty in this capture (loading or no items).
**Share of Search Audit section:**
- KPI summary rows: "Overall Share of Search · 23 · -0.06 (red)" / "Organic · 24 · +0.30 (green)" / "Sponsored · 10..."
- Delta indicators: negative = red, positive = green — same pattern as Availability
**"Share of Search Across Keywords" heat map table:**
- Rows = retailers (Amazon, Target, Walmart)
- Columns = keywords (baby food, cat food, chocolate milk, dog food, stouffers frozen meal, Overall)
- Cells: color-coded scores — green (high), yellow (mid), red (low/zero)
- 0 values rendered in red — strong visual signal for gaps
- Column header: keyword names in plain text
- Row header: retailer names in plain text, left-aligned

**New component confirmed:** Heat map table pattern is shared between Availability and SoS — consistent implementation. Color scale: green > yellow > red.

---

## Updated Inconsistency List (post re-audit + PM decisions)

| # | Issue | Severity | PM Decision |
|---|---|---|---|
| 1 | ~~Ask Me has no empty state~~ | ~~🔴~~ | **Ignore — not functional yet** |
| 2 | Two date selector patterns (scrubber vs pill+arrows) | 🔴 | **Pick one. Pill+arrows is used in 3/4 views — Scorecard scrubber is the outlier. Recommend standardize on pill+arrows, make Scorecard consistent.** |
| 3 | Two CTA button styles (filled Title Case vs outlined ALL CAPS) | 🔴 | **Use the more standard one. Filled + Title Case ("Create Alert" style) is the industry standard. Outlined ALL CAPS ("LOAD ALL PRODUCTS") is the deviation.** |
| 4 | Price Range filter `+` vs `>` chevron | 🟡 | **Use standard. `>` chevron is used on all other 20+ filters. Fix Price Range to match.** |
| 5 | Dual-pane right panel indistinguishable across empty/loading/no-state | 🟡 | **Reaudit — to be investigated** |
| 6 | Third button variant: "View" CTA on insight cards (small outlined pill) | 🟡 | Needs decision — 3 button styles now confirmed |
| 7 | Freshness indicator present in Availability + SoS but absent in Scorecard + SKU Overview | 🟡 | Inconsistent data freshness communication |
| 8 | Configurable KPI tab bar (SKU Overview only) — remove `✕` pattern not used elsewhere | 🟢 | Unique to SKU Overview — intentional or oversight? |
| 9 | "Show All Views" link style in list-item nav | 🟢 | Low priority |
| 10 | Icon font a11y — nav icons render as glyph characters | 🟢 | Low priority |
| 11 | No "applied filters" indicator in any section | 🟢 | Low priority |

---

## New Components Discovered in Re-audit

| Component | Location | Unique to |
|---|---|---|
| Configurable KPI tab bar (removable pills + Select KPIs dropdown) | SKU Overview | SKU Overview only |
| Context summary bar ("Showing analysis across N cities...") | SKU Overview | SKU Overview only |
| Actionable insight cards (text + optional View CTA) | Availability, SoS | Analysis views |
| Heat map table (retailer × dimension matrix, color-coded) | Availability, SoS | Analysis views |
| Delta indicator (score + directional change, green/red) | Availability, SoS | Analysis views |
| Data freshness indicator ("Updated on...Refreshed Daily once") | Availability, SoS | Analysis views — missing from Scorecard/SKU |

---

## Auth / Session Notes

- Profile saved at `./browser-data/` — persists cookies across runs
- Re-run: `node_modules/.bin/agent-browser navigate https://dataweave.com/dsa_dashboard`
- `--state` flag conflicts with `profile` config — do not use together
