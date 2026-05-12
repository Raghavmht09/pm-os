# DSA Design System — Claude Design Agent Instructions
**Version:** 1.0 | **Audited:** 2026-05-06 | **Product:** DataWeave Digital Shelf Analytics (DSA)

You are a frontend design agent. Your task is to build a complete, self-contained HTML/CSS design system for the DataWeave DSA product based on a live UI audit. Output must be production-ready, component-complete, and resolve all documented inconsistencies using the decisions below.

---

## Output Requirements

Produce the following files:

```
dsa-design-system/
├── index.html              ← Component library showcase (all components on one page)
├── tokens.css              ← All design tokens as CSS custom properties
├── components/
│   ├── navigation.css
│   ├── filters.css
│   ├── buttons.css
│   ├── date-selector.css
│   ├── data-table.css
│   ├── charts.css
│   ├── alerts.css
│   ├── heatmap.css
│   ├── kpi-summary.css
│   └── empty-states.css
└── dsa-system.css          ← Single bundle import of all components
```

`index.html` must render every component in every state (default, hover, active, loading, empty, error) using only HTML + CSS — no JavaScript required for visual states. Use CSS `:hover`, `:active`, `.is-loading`, `.is-empty`, `.is-error` classes for state variants.

---

## 1. Design Tokens (`tokens.css`)

Define all as CSS custom properties on `:root`.

### Color Tokens

```
/* Backgrounds */
--color-sidebar-bg: #2D2F45;
--color-content-bg: #F5F5F5;
--color-panel-bg: #FFFFFF;
--color-split-pane-bg: #EEF0F8;
--color-card-bg: #FFFFFF;

/* Primary */
--color-primary: #4A90D9;
--color-primary-hover: #3A7BC8;
--color-primary-light: #E8F1FB;

/* Active / Selected */
--color-nav-active-bg: rgba(74, 144, 217, 0.15);
--color-subnav-active-bg: #EEF4FD;

/* Status */
--color-success: #27AE60;
--color-success-light: #E9F7EF;
--color-danger: #E74C3C;
--color-danger-light: #FDEDEC;
--color-warning: #F39C12;
--color-warning-light: #FEF9E7;

/* Heat map scale (5 steps) */
--color-heat-5: #27AE60;   /* ≥80: green */
--color-heat-4: #82CC6A;   /* 60–79: light green */
--color-heat-3: #F5C842;   /* 40–59: yellow */
--color-heat-2: #F0884A;   /* 20–39: orange */
--color-heat-1: #E74C3C;   /* <20 or 0: red */

/* Text */
--color-text-primary: #1A1A2E;
--color-text-secondary: #6B7280;
--color-text-muted: #9CA3AF;
--color-text-inverse: #FFFFFF;
--color-text-link: #4A90D9;

/* Border */
--color-border: #E5E7EB;
--color-border-strong: #D1D5DB;

/* Delta indicators */
--color-delta-positive: #27AE60;
--color-delta-negative: #E74C3C;
```

### Typography Tokens

```
/* Font family */
--font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Size scale */
--font-size-xs:   11px;
--font-size-sm:   12px;
--font-size-base: 13px;
--font-size-md:   14px;
--font-size-lg:   16px;
--font-size-xl:   18px;

/* Weight */
--font-weight-regular: 400;
--font-weight-medium:  500;
--font-weight-semibold: 600;
--font-weight-bold:    700;

/* Line height */
--line-height-tight:  1.2;
--line-height-base:   1.5;
--line-height-loose:  1.75;
```

### Spacing Tokens

```
--space-1:  4px;
--space-2:  8px;
--space-3:  12px;
--space-4:  16px;
--space-5:  20px;
--space-6:  24px;
--space-8:  32px;
--space-10: 40px;
--space-12: 48px;
```

### Radius & Shadow Tokens

```
--radius-sm:  4px;
--radius-md:  8px;
--radius-lg:  12px;
--radius-pill: 999px;

--shadow-card: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
--shadow-panel: 0 2px 8px rgba(0,0,0,0.08);
--shadow-dropdown: 0 4px 16px rgba(0,0,0,0.12);
```

---

## 2. Navigation Components (`navigation.css`)

### 2a. Primary Sidebar Nav

**Structure:** Fixed left sidebar, icon-only, dark background.

```html
<nav class="dsa-sidebar">
  <div class="dsa-sidebar__logo">
    <!-- DataWeave logo mark (orange dot grid) -->
    <div class="dsa-logo-mark"></div>
  </div>

  <ul class="dsa-sidebar__nav">
    <!-- Core group -->
    <li class="dsa-sidebar__item dsa-sidebar__item--active">
      <a href="#" class="dsa-sidebar__link" data-tooltip="Dashboard">
        <span class="dsa-sidebar__icon dsa-icon--dashboard"></span>
      </a>
    </li>
    <li class="dsa-sidebar__item">
      <a href="#" class="dsa-sidebar__link" data-tooltip="Detailed View">
        <span class="dsa-sidebar__icon dsa-icon--detailed-view"></span>
      </a>
    </li>
    <li class="dsa-sidebar__item">
      <a href="#" class="dsa-sidebar__link" data-tooltip="MAP">
        <span class="dsa-sidebar__icon dsa-icon--map"></span>
      </a>
    </li>
    <li class="dsa-sidebar__item">
      <a href="#" class="dsa-sidebar__link" data-tooltip="Alerts">
        <span class="dsa-sidebar__icon dsa-icon--alerts"></span>
      </a>
    </li>
  </ul>

  <!-- Divider between core and secondary groups -->
  <div class="dsa-sidebar__divider"></div>

  <ul class="dsa-sidebar__nav dsa-sidebar__nav--secondary">
    <li class="dsa-sidebar__item">
      <a href="#" class="dsa-sidebar__link" data-tooltip="Custom Views">
        <span class="dsa-sidebar__icon dsa-icon--custom-views"></span>
      </a>
    </li>
    <li class="dsa-sidebar__item">
      <a href="#" class="dsa-sidebar__link" data-tooltip="Ask Me">
        <span class="dsa-sidebar__icon dsa-icon--ask-me"></span>
      </a>
    </li>
  </ul>

  <div class="dsa-sidebar__footer">
    <button class="dsa-sidebar__link" data-tooltip="Help">
      <span class="dsa-sidebar__icon dsa-icon--help"></span>
    </button>
    <div class="dsa-sidebar__avatar">D</div>
  </div>
</nav>
```

**CSS requirements:**
- Width: `64px`
- Height: `100vh`, `position: fixed`, `left: 0`, `top: 0`
- Background: `var(--color-sidebar-bg)`
- Icon size: `20px`, centered in `40px × 40px` clickable area
- Active item: `background: var(--color-nav-active-bg)`, `border-radius: var(--radius-md)`
- Hover: same bg as active at 60% opacity
- Tooltip: CSS `::after` pseudo-element using `data-tooltip` attribute. Position: right of icon, `opacity: 0` → `1` on hover, dark bg pill
- Divider: `1px solid rgba(255,255,255,0.12)`, `margin: var(--space-2) var(--space-3)`
- Avatar: `32px` circle, teal-to-green gradient, white initials, `font-size: var(--font-size-sm)`, `font-weight: var(--font-weight-semibold)`

---

### 2b. Secondary Nav Panel (context-sensitive left panel)

```html
<aside class="dsa-panel">
  <button class="dsa-panel__collapse" aria-label="Collapse panel">«</button>

  <!-- Sub-navigation -->
  <nav class="dsa-panel__subnav">
    <ul class="dsa-panel__subnav-list">
      <li class="dsa-panel__subnav-item dsa-panel__subnav-item--active">
        <span>Scorecard</span>
      </li>
      <li class="dsa-panel__subnav-item">
        <span>SKU Overview</span>
      </li>
      <li class="dsa-panel__subnav-item">
        <span>Availability Analysis</span>
      </li>
      <li class="dsa-panel__subnav-item">
        <span>Share of Search Analysis</span>
      </li>
    </ul>
    <!-- Show All Views — link variant -->
    <a href="#" class="dsa-panel__show-all">Show All Views</a>
  </nav>

  <!-- Filters section -->
  <div class="dsa-panel__filters">
    <p class="dsa-panel__filters-label">Filters</p>
    <ul class="dsa-filter-list">
      <li class="dsa-filter-item">
        <span class="dsa-filter-item__label">Manufacturer</span>
        <span class="dsa-filter-item__chevron">›</span>
      </li>
      <li class="dsa-filter-item dsa-filter-item--active">
        <span class="dsa-filter-item__label">Brand</span>
        <span class="dsa-filter-item__chevron dsa-filter-item__chevron--open">›</span>
        <!-- Expanded dropdown would go here -->
      </li>
      <li class="dsa-filter-item">
        <span class="dsa-filter-item__label">Retailer</span>
        <span class="dsa-filter-item__chevron">›</span>
      </li>
    </ul>
  </div>
</aside>
```

**CSS requirements:**
- Width: `240px`
- Background: `var(--color-panel-bg)`
- Border-right: `1px solid var(--color-border)`
- Subnav item: `padding: var(--space-2) var(--space-4)`, `font-size: var(--font-size-base)`, `color: var(--color-text-primary)`, `cursor: pointer`
- Active subnav: `background: var(--color-subnav-active-bg)`, `font-weight: var(--font-weight-semibold)`, `color: var(--color-primary)`, `border-radius: var(--radius-sm)`
- Hover subnav: `background: var(--color-content-bg)`
- Show All Views: `color: var(--color-text-link)`, `font-size: var(--font-size-base)`, no underline by default, underline on hover. Display as block, `padding: var(--space-2) var(--space-4)`
- Filter label: `font-size: var(--font-size-sm)`, `font-weight: var(--font-weight-semibold)`, `color: var(--color-text-primary)`, `padding: var(--space-4) var(--space-4) var(--space-2)`
- Filter item: row with `display: flex`, `justify-content: space-between`, `align-items: center`, `padding: var(--space-2) var(--space-4)`, `border-bottom: 1px solid var(--color-border)`
- Filter chevron: `color: var(--color-text-secondary)`, rotate `90deg` when `--open`
- Collapse button: top-right corner, `font-size: var(--font-size-md)`, `color: var(--color-text-secondary)`

---

## 3. Buttons (`buttons.css`)

**DECISION: Standardize on 2 button variants only. Remove the ALL-CAPS outlined variant.**

### Variant 1 — Primary (filled)
Use for: primary actions (Create Alert, Apply, Save)

```html
<button class="dsa-btn dsa-btn--primary">Create Alert</button>
<button class="dsa-btn dsa-btn--primary" disabled>Create Alert</button>
```

```css
.dsa-btn--primary {
  background: var(--color-primary);
  color: var(--color-text-inverse);
  border: none;
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-4);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  /* Title Case — enforced by content, NOT text-transform */
}
.dsa-btn--primary:hover { background: var(--color-primary-hover); }
.dsa-btn--primary:disabled { opacity: 0.4; cursor: not-allowed; }
```

### Variant 2 — Secondary (outlined)
Use for: secondary/contextual actions (View, Export, Filter actions)

```html
<button class="dsa-btn dsa-btn--secondary">View</button>
<button class="dsa-btn dsa-btn--secondary">Load Products</button>
```

```css
.dsa-btn--secondary {
  background: transparent;
  color: var(--color-primary);
  border: 1.5px solid var(--color-primary);
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-4);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  /* Title Case — NO text-transform: uppercase */
}
.dsa-btn--secondary:hover {
  background: var(--color-primary-light);
}
```

### Variant 3 — Icon Button
Use for: toolbar actions (sort, download, collapse)

```html
<button class="dsa-btn dsa-btn--icon" aria-label="Sort">
  <span class="dsa-icon--sort"></span>
</button>
```

### Variant 4 — Danger (text link style)
Use for: destructive actions only (Delete Alert)

```html
<button class="dsa-btn dsa-btn--danger-text">Delete Alert</button>
```

**Size modifiers:**
```html
<button class="dsa-btn dsa-btn--primary dsa-btn--sm">Small</button>  <!-- 28px height -->
<button class="dsa-btn dsa-btn--primary">Default</button>             <!-- 36px height -->
<button class="dsa-btn dsa-btn--primary dsa-btn--lg">Large</button>  <!-- 44px height -->
```

---

## 4. Date Selector (`date-selector.css`)

**DECISION: Standardize on pill+arrows pattern. Use for ALL views including Scorecard.**
**Deprecate:** Full-width timeline scrubber (Scorecard-only pattern).

```html
<div class="dsa-date-selector">
  <!-- Granularity pill -->
  <div class="dsa-date-selector__pill">
    <span class="dsa-date-selector__granularity-icon">⋮⋮</span>
    <div class="dsa-date-selector__granularity">
      <span class="dsa-date-selector__granularity-label">Daily</span>
      <span class="dsa-date-selector__granularity-sub">Every day</span>
    </div>
  </div>

  <!-- Timeline with date markers -->
  <div class="dsa-date-selector__timeline">
    <span class="dsa-date-selector__marker">Apr 29</span>
    <span class="dsa-date-selector__marker">May 01</span>
    <span class="dsa-date-selector__marker">May 03</span>
    <span class="dsa-date-selector__marker dsa-date-selector__marker--current">May 05</span>
  </div>

  <!-- Navigation arrows -->
  <button class="dsa-btn dsa-btn--icon dsa-date-selector__arrow">‹</button>
  <button class="dsa-btn dsa-btn--icon dsa-date-selector__arrow">›</button>
</div>
```

**CSS requirements:**
- Container: `display: flex`, `align-items: center`, `gap: var(--space-3)`, `padding: var(--space-2) var(--space-4)`, `border-bottom: 1px solid var(--color-border)`, `background: var(--color-panel-bg)`
- Pill: `display: flex`, `align-items: center`, `gap: var(--space-2)`, `background: var(--color-primary)`, `color: white`, `border-radius: var(--radius-pill)`, `padding: var(--space-1) var(--space-3)`
- Granularity label: `font-size: var(--font-size-base)`, `font-weight: var(--font-weight-semibold)`
- Granularity sub: `font-size: var(--font-size-xs)`, `opacity: 0.85`
- Timeline: `display: flex`, `gap: var(--space-8)`, flex: 1, `align-items: center`
- Marker: `font-size: var(--font-size-sm)`, `color: var(--color-text-secondary)`, `position: relative`
- Marker tick: `::before` pseudo, `2px wide`, `8px tall`, positioned above text, `background: var(--color-border-strong)`
- Current marker: `color: var(--color-primary)`, `font-weight: var(--font-weight-semibold)`. Tick: `background: var(--color-primary)`

---

## 5. Filters (`filters.css`)

**DECISION: Standardize ALL filters on `>` chevron (›). Remove `+` variant.**

Already specified in 2b Secondary Nav Panel above. Additional states:

```html
<!-- Filter with applied value badge -->
<li class="dsa-filter-item dsa-filter-item--applied">
  <span class="dsa-filter-item__label">Brand</span>
  <div class="dsa-filter-item__right">
    <span class="dsa-filter-item__badge">3</span>
    <span class="dsa-filter-item__chevron dsa-filter-item__chevron--open">›</span>
  </div>
</li>
```

**Applied badge:** `12px × 16px`, `background: var(--color-primary)`, `color: white`, `border-radius: var(--radius-pill)`, `font-size: var(--font-size-xs)`, `font-weight: var(--font-weight-semibold)`. This resolves the "no applied filter indicator" gap.

---

## 6. Chart Cards (`charts.css`)

```html
<div class="dsa-chart-card">
  <div class="dsa-chart-card__header">
    <div class="dsa-chart-card__title-group">
      <h3 class="dsa-chart-card__title">Availability</h3>
      <p class="dsa-chart-card__subtitle">Availability score across all products</p>
    </div>
    <div class="dsa-chart-card__actions">
      <button class="dsa-btn dsa-btn--icon" aria-label="More options">⋮</button>
      <button class="dsa-btn dsa-btn--icon" aria-label="Collapse">⊟</button>
    </div>
  </div>
  <div class="dsa-chart-card__body">
    <!-- Chart renders here -->
  </div>
</div>

<!-- Loading state -->
<div class="dsa-chart-card is-loading">
  <div class="dsa-chart-card__header"> ... </div>
  <div class="dsa-chart-card__body">
    <div class="dsa-spinner"></div>
  </div>
</div>

<!-- Empty state -->
<div class="dsa-chart-card is-empty">
  <div class="dsa-chart-card__header"> ... </div>
  <div class="dsa-chart-card__body">
    <div class="dsa-empty-state dsa-empty-state--chart">
      <span class="dsa-empty-state__icon">📊</span>
      <p class="dsa-empty-state__message">No data for the selected filters</p>
      <button class="dsa-btn dsa-btn--secondary dsa-btn--sm">Clear Filters</button>
    </div>
  </div>
</div>
```

**CSS requirements:**
- Card: `background: var(--color-card-bg)`, `border-radius: var(--radius-lg)`, `box-shadow: var(--shadow-card)`, `overflow: hidden`
- Header: `display: flex`, `justify-content: space-between`, `align-items: flex-start`, `padding: var(--space-4) var(--space-4) var(--space-3)`
- Title: `font-size: var(--font-size-md)`, `font-weight: var(--font-weight-semibold)`, `color: var(--color-primary)` (blue — matches audit)
- Subtitle: `font-size: var(--font-size-sm)`, `color: var(--color-text-secondary)`, `margin-top: var(--space-1)`
- Actions: `display: flex`, `gap: var(--space-1)`, `margin-top: -4px`
- Body: `padding: 0 var(--space-4) var(--space-4)`, min-height: `200px`
- Loading: body displays centered spinner, min-height maintained
- Spinner (`.dsa-spinner`): 4-dot rotating animation. `width: 24px`, `height: 24px`. Implement with 4 `::before`/`::after` + sibling approach or 4 `<span>` elements, `background: var(--color-primary)`, `border-radius: 50%`, `width: 6px`, `height: 6px`, staggered `animation-delay`

---

## 7. Data Table (`data-table.css`)

Based on SKU Overview table.

```html
<div class="dsa-table-wrapper">
  <!-- Toolbar -->
  <div class="dsa-table-toolbar">
    <div class="dsa-kpi-tabs">
      <span class="dsa-kpi-tab dsa-kpi-tab--active">
        Availability
        <button class="dsa-kpi-tab__remove" aria-label="Remove KPI">✕</button>
      </span>
      <span class="dsa-kpi-tab">
        Keyword Rank
        <button class="dsa-kpi-tab__remove" aria-label="Remove KPI">✕</button>
      </span>
      <span class="dsa-kpi-tab">Pricing <button class="dsa-kpi-tab__remove">✕</button></span>
    </div>
    <div class="dsa-table-toolbar__right">
      <div class="dsa-search">
        <span class="dsa-search__icon">🔍</span>
        <input type="text" class="dsa-search__input" placeholder="Search products...">
      </div>
      <div class="dsa-select-kpis">
        <button class="dsa-btn dsa-btn--secondary dsa-btn--sm">Select KPIs ▾</button>
        <button class="dsa-btn dsa-btn--icon" aria-label="Info">ⓘ</button>
      </div>
    </div>
  </div>

  <!-- Context summary bar -->
  <div class="dsa-table-summary">
    Showing analysis across: <strong>8 cities</strong>, <strong>246 brands</strong>, <strong>4 retailers</strong>
  </div>

  <!-- Table -->
  <table class="dsa-table">
    <thead>
      <tr>
        <th class="dsa-table__th">Product Title / SKU Code</th>
        <th class="dsa-table__th">Retailer</th>
        <th class="dsa-table__th dsa-table__th--sortable">
          In Stock <span class="dsa-table__sort-icon">↑</span>
        </th>
        <th class="dsa-table__th dsa-table__th--sortable">
          Out of Stock <span class="dsa-table__sort-icon">↑</span>
        </th>
        <th class="dsa-table__th dsa-table__th--sortable">
          Delisted <span class="dsa-table__sort-icon">↑</span>
        </th>
        <th class="dsa-table__th dsa-table__th--sortable">Avg Selling Price</th>
        <th class="dsa-table__th dsa-table__th--sortable">Avg List Price</th>
      </tr>
    </thead>
    <tbody>
      <tr class="dsa-table__row">
        <td class="dsa-table__td dsa-table__td--product">
          <span class="dsa-table__product-name">LEAN CUISINE FEATURES Supreme Pizza 6 oz.</span>
          <span class="dsa-table__sku">180000471B</span>
          <div class="dsa-table__row-actions">
            <button class="dsa-btn dsa-btn--icon dsa-btn--xs">🔖</button>
            <button class="dsa-btn dsa-btn--icon dsa-btn--xs">✏</button>
          </div>
        </td>
        <td class="dsa-table__td">All</td>
        <td class="dsa-table__td">
          <span class="dsa-badge dsa-badge--success">8</span>
        </td>
        <td class="dsa-table__td">
          <span class="dsa-badge dsa-badge--danger">9</span>
        </td>
        <td class="dsa-table__td">
          <span class="dsa-badge dsa-badge--neutral">3</span>
        </td>
        <td class="dsa-table__td">$3.52</td>
        <td class="dsa-table__td">$3.59</td>
      </tr>
    </tbody>
  </table>
</div>
```

**CSS requirements:**
- KPI tab: `background: var(--color-primary-light)`, `color: var(--color-primary)`, `border-radius: var(--radius-pill)`, `padding: var(--space-1) var(--space-3)`, `font-size: var(--font-size-sm)`, `font-weight: var(--font-weight-medium)`, `display: inline-flex`, `align-items: center`, `gap: var(--space-2)`
- KPI tab active: add `border: 1.5px solid var(--color-primary)`
- KPI tab remove button: `16px`, `color: var(--color-text-secondary)`, hover: `color: var(--color-danger)`
- Table: `width: 100%`, `border-collapse: collapse`
- `th`: `font-size: var(--font-size-sm)`, `font-weight: var(--font-weight-semibold)`, `color: var(--color-text-secondary)`, `border-bottom: 2px solid var(--color-border)`, `padding: var(--space-3) var(--space-4)`, text-align: left
- `td`: `font-size: var(--font-size-base)`, `padding: var(--space-3) var(--space-4)`, `border-bottom: 1px solid var(--color-border)`
- Row hover: `background: var(--color-content-bg)` — row actions visible on hover only (`opacity: 0` → `1`)
- Product name: `font-weight: var(--font-weight-medium)`, block display
- SKU: `font-size: var(--font-size-xs)`, `color: var(--color-text-secondary)`, block display
- Badges: `min-width: 28px`, `height: 22px`, `border-radius: var(--radius-sm)`, `font-size: var(--font-size-sm)`, `font-weight: var(--font-weight-semibold)`, centered text
  - `--success`: `background: var(--color-success-light)`, `color: var(--color-success)`
  - `--danger`: `background: var(--color-danger-light)`, `color: var(--color-danger)`
  - `--neutral`: `background: var(--color-content-bg)`, `color: var(--color-text-secondary)`

---

## 8. Heat Map Table (`heatmap.css`)

Used in Availability Analysis (retailer × brand) and Share of Search (retailer × keyword).

```html
<div class="dsa-heatmap-wrapper">
  <h4 class="dsa-heatmap__title">
    Availability Scores Across Brands
    <button class="dsa-btn dsa-btn--icon" aria-label="Info">ⓘ</button>
  </h4>

  <!-- Alphabetical jump index (for brand axis) -->
  <div class="dsa-heatmap__index">
    <span class="dsa-heatmap__index-letter">A</span>
    <span class="dsa-heatmap__index-letter">F</span>
    <span class="dsa-heatmap__index-letter dsa-heatmap__index-letter--active">G</span>
    <span class="dsa-heatmap__index-letter">L</span>
  </div>

  <div class="dsa-heatmap__scroll-container">
    <table class="dsa-heatmap">
      <thead>
        <tr>
          <th class="dsa-heatmap__row-header"></th>
          <th class="dsa-heatmap__col-header">Abuelita</th>
          <th class="dsa-heatmap__col-header">Friskies</th>
          <th class="dsa-heatmap__col-header">Gerber</th>
          <th class="dsa-heatmap__col-header">Lean Cuisine</th>
          <th class="dsa-heatmap__col-header">Nesquik</th>
          <th class="dsa-heatmap__col-header">Nestle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="dsa-heatmap__row-label">Amazon</td>
          <td class="dsa-heatmap__cell dsa-heatmap__cell--5">100</td>
          <td class="dsa-heatmap__cell dsa-heatmap__cell--3">67</td>
          <td class="dsa-heatmap__cell dsa-heatmap__cell--3">57</td>
          <td class="dsa-heatmap__cell dsa-heatmap__cell--2">45</td>
          <td class="dsa-heatmap__cell dsa-heatmap__cell--5">100</td>
          <td class="dsa-heatmap__cell dsa-heatmap__cell--3">62</td>
        </tr>
        <tr>
          <td class="dsa-heatmap__row-label">Target</td>
          <td class="dsa-heatmap__cell dsa-heatmap__cell--4">83</td>
          <td class="dsa-heatmap__cell dsa-heatmap__cell--3">68</td>
          <td class="dsa-heatmap__cell dsa-heatmap__cell--4">88</td>
          <td class="dsa-heatmap__cell dsa-heatmap__cell--5">90</td>
          <td class="dsa-heatmap__cell dsa-heatmap__cell--5">—</td>
          <td class="dsa-heatmap__cell dsa-heatmap__cell--3">71</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

**CSS requirements:**
- Scroll container: `overflow-x: auto` — heat map can be wide
- Col headers: `font-size: var(--font-size-sm)`, `font-weight: var(--font-weight-medium)`, `color: var(--color-text-secondary)`, `white-space: nowrap`, `padding: var(--space-2) var(--space-3)`, text-align: center
- Row labels: `font-size: var(--font-size-base)`, `color: var(--color-text-primary)`, `font-weight: var(--font-weight-medium)`, `padding: var(--space-3) var(--space-4)`, `white-space: nowrap`
- Cells: `width: 80px`, `height: 40px`, text-align: center, `font-size: var(--font-size-base)`, `font-weight: var(--font-weight-semibold)`, `color: var(--color-text-primary)`
- Cell color bands (use `--color-heat-*` tokens):
  - `--cell--5` (≥80): `background: var(--color-heat-5)`, white text
  - `--cell--4` (60–79): `background: var(--color-heat-4)`, dark text
  - `--cell--3` (40–59): `background: var(--color-heat-3)`, dark text
  - `--cell--2` (20–39): `background: var(--color-heat-2)`, white text
  - `--cell--1` (<20): `background: var(--color-heat-1)`, white text
- Index letters: `font-size: var(--font-size-sm)`, `color: var(--color-text-secondary)`. Active: `color: var(--color-primary)`, `font-weight: var(--font-weight-semibold)`

---

## 9. KPI Summary Row (`kpi-summary.css`)

Used in Availability and SoS audit sections.

```html
<div class="dsa-kpi-summary">
  <div class="dsa-kpi-row dsa-kpi-row--featured">
    <span class="dsa-kpi-row__label">Overall Share of Search</span>
    <div class="dsa-kpi-row__values">
      <span class="dsa-kpi-row__score">23</span>
      <span class="dsa-kpi-row__delta dsa-kpi-row__delta--negative">-0.06</span>
    </div>
  </div>
  <div class="dsa-kpi-row-group">
    <div class="dsa-kpi-row">
      <span class="dsa-kpi-row__label">Organic</span>
      <div class="dsa-kpi-row__values">
        <span class="dsa-kpi-row__score">24</span>
        <span class="dsa-kpi-row__delta dsa-kpi-row__delta--positive">+0.30</span>
      </div>
    </div>
    <div class="dsa-kpi-row">
      <span class="dsa-kpi-row__label">Sponsored</span>
      <div class="dsa-kpi-row__values">
        <span class="dsa-kpi-row__score">10</span>
        <span class="dsa-kpi-row__delta dsa-kpi-row__delta--negative">-0.12</span>
      </div>
    </div>
  </div>
</div>
```

**CSS requirements:**
- Featured row: `padding: var(--space-4)`, `background: var(--color-panel-bg)`, `border-radius: var(--radius-md)`, `border: 1px solid var(--color-border)`, `margin-bottom: var(--space-3)`
- Sub-rows: side-by-side via `display: grid`, `grid-template-columns: 1fr 1fr`, `gap: var(--space-3)`
- Score: `font-size: var(--font-size-xl)`, `font-weight: var(--font-weight-bold)`, `color: var(--color-text-primary)`
- Delta positive: `font-size: var(--font-size-sm)`, `color: var(--color-delta-positive)`, `font-weight: var(--font-weight-medium)`
- Delta negative: same, `color: var(--color-delta-negative)`

---

## 10. Alerts Components (`alerts.css`)

### Alert List Card

```html
<div class="dsa-alert-card dsa-alert-card--active">
  <span class="dsa-alert-card__dot"></span>
  <div class="dsa-alert-card__content">
    <h4 class="dsa-alert-card__title">sample oos greater than 4 days</h4>
    <span class="dsa-alert-card__type">Out Of Stock For Consecutive Days</span>
    <div class="dsa-alert-card__meta">
      <span>Products triggered: <strong>9</strong></span>
      <span>Last Triggered on: <strong>29 Mar'26</strong></span>
    </div>
  </div>
</div>
```

### Alert Detail Panel

```html
<div class="dsa-alert-detail">
  <div class="dsa-alert-detail__header">
    <div>
      <span class="dsa-badge dsa-badge--active">● Active</span>
      <h3 class="dsa-alert-detail__title">Sample Oos Greater Than 4 Days</h3>
      <span class="dsa-alert-detail__type">Out Of Stock For Consecutive Days</span>
    </div>
    <div class="dsa-alert-detail__actions">
      <button class="dsa-btn dsa-btn--secondary dsa-btn--sm">✏ Edit Alert</button>
      <button class="dsa-btn dsa-btn--danger-text dsa-btn--sm">🗑 Delete Alert</button>
    </div>
  </div>
  <div class="dsa-alert-detail__meta-grid">
    <div class="dsa-alert-meta-item">
      <span class="dsa-alert-meta-item__label">Manufacturer</span>
      <span class="dsa-alert-meta-item__value">Any</span>
    </div>
    <div class="dsa-alert-meta-item">
      <span class="dsa-alert-meta-item__label">Brand</span>
      <span class="dsa-alert-meta-item__value">Purina</span>
    </div>
    <div class="dsa-alert-meta-item">
      <span class="dsa-alert-meta-item__label">Threshold</span>
      <span class="dsa-alert-meta-item__value">Greater than equal 4days</span>
    </div>
  </div>
  <!-- Alerts Download toggle -->
  <div class="dsa-alert-download">
    <p class="dsa-alert-download__label">Alerts Download</p>
    <div class="dsa-toggle-tabs">
      <button class="dsa-toggle-tab dsa-toggle-tab--active">Last 30 Days</button>
      <button class="dsa-toggle-tab">Last 7 Days</button>
      <button class="dsa-toggle-tab">Date Range</button>
    </div>
  </div>
</div>
```

**CSS requirements:**
- Alert card dot: `8px` circle, `background: var(--color-danger)`, absolute positioned top-left
- Alert card: `padding: var(--space-3) var(--space-4)`, `border-bottom: 1px solid var(--color-border)`, `cursor: pointer`, `position: relative`
- Active card: `background: var(--color-primary-light)`
- Title: `font-size: var(--font-size-base)`, `font-weight: var(--font-weight-semibold)`
- Type label: `font-size: var(--font-size-xs)`, `color: var(--color-text-secondary)`, block
- Meta: `display: flex`, `gap: var(--space-4)`, `font-size: var(--font-size-xs)`, `color: var(--color-text-secondary)`, `margin-top: var(--space-2)`
- Active badge: `background: var(--color-success-light)`, `color: var(--color-success)`, `border-radius: var(--radius-pill)`, `font-size: var(--font-size-xs)`, `padding: 2px var(--space-2)`
- Meta grid: `display: grid`, `grid-template-columns: repeat(3, 1fr)`, `gap: var(--space-3) var(--space-4)`, `padding: var(--space-4)`
- Meta label: `font-size: var(--font-size-xs)`, `color: var(--color-text-secondary)`, block
- Meta value: `font-size: var(--font-size-base)`, `font-weight: var(--font-weight-medium)`, block
- Toggle tabs: `display: inline-flex`, `border: 1px solid var(--color-border)`, `border-radius: var(--radius-md)`, `overflow: hidden`
- Toggle tab: `padding: var(--space-2) var(--space-4)`, `font-size: var(--font-size-sm)`, no border, `background: white`
- Toggle tab active: `background: var(--color-primary)`, `color: white`

---

## 11. Actionable Insight Cards (`charts.css` — addendum)

```html
<div class="dsa-insight-cards">
  <div class="dsa-insight-card">
    <span class="dsa-insight-card__dot"></span>
    <p class="dsa-insight-card__text">
      217 Product instances have been OOS for 3 updates or more on 3 retailers across 5 cities and 8 brands.
    </p>
    <button class="dsa-btn dsa-btn--secondary dsa-btn--sm">View</button>
  </div>
  <div class="dsa-insight-card">
    <span class="dsa-insight-card__dot"></span>
    <p class="dsa-insight-card__text">
      In the recent update 13 Product instances have been OOS for 3 consecutive updates on 3 retailers across 5 cities and 3 brands.
    </p>
    <!-- No CTA on this card — intentional -->
  </div>
</div>
```

**CSS requirements:**
- Container: `display: flex`, `gap: var(--space-4)`, `overflow-x: auto`
- Card: `flex: 0 0 auto`, `width: 320px`, `background: var(--color-panel-bg)`, `border-radius: var(--radius-md)`, `border: 1px solid var(--color-border)`, `padding: var(--space-4)`, `display: flex`, `flex-direction: column`, `gap: var(--space-3)`
- Dot: `8px` circle, `background: var(--color-danger)`, inline
- Text: `font-size: var(--font-size-sm)`, `color: var(--color-text-primary)`, `line-height: var(--line-height-base)`

---

## 12. Empty States (`empty-states.css`)

Standard empty state component. Used across all sections.

```html
<!-- Standard empty state -->
<div class="dsa-empty-state">
  <div class="dsa-empty-state__icon">📭</div>
  <h4 class="dsa-empty-state__title">No data available</h4>
  <p class="dsa-empty-state__description">
    Apply filters or load products to see results here.
  </p>
  <button class="dsa-btn dsa-btn--primary">Load Products</button>
</div>

<!-- No results (after filtering) -->
<div class="dsa-empty-state dsa-empty-state--filtered">
  <div class="dsa-empty-state__icon">🔍</div>
  <h4 class="dsa-empty-state__title">No results match your filters</h4>
  <p class="dsa-empty-state__description">Try adjusting or clearing your filters.</p>
  <button class="dsa-btn dsa-btn--secondary">Clear Filters</button>
</div>

<!-- Error state -->
<div class="dsa-empty-state dsa-empty-state--error">
  <div class="dsa-empty-state__icon">⚠️</div>
  <h4 class="dsa-empty-state__title">Something went wrong</h4>
  <p class="dsa-empty-state__description">We couldn't load this data. Try refreshing.</p>
  <button class="dsa-btn dsa-btn--secondary">Retry</button>
</div>
```

**CSS requirements:**
- Container: `display: flex`, `flex-direction: column`, `align-items: center`, `justify-content: center`, `gap: var(--space-3)`, `min-height: 200px`, `padding: var(--space-8)`
- Icon: `font-size: 32px`, `line-height: 1`
- Title: `font-size: var(--font-size-md)`, `font-weight: var(--font-weight-semibold)`, `color: var(--color-text-primary)`
- Description: `font-size: var(--font-size-sm)`, `color: var(--color-text-secondary)`, `text-align: center`, `max-width: 280px`

---

## 13. Data Freshness Indicator

New component. Add to Availability, SoS, and SKU Overview (standardize across all data views).

```html
<div class="dsa-freshness-bar">
  Updated on Wednesday, May 6th, 2026 between 00:20–03:53 hrs.
  <span class="dsa-freshness-bar__cadence">Refreshed Daily once.</span>
</div>
```

**CSS requirements:**
- `background: var(--color-content-bg)`, `border-bottom: 1px solid var(--color-border)`
- `padding: var(--space-2) var(--space-4)`
- `font-size: var(--font-size-xs)`, `color: var(--color-text-secondary)`
- Cadence: `font-weight: var(--font-weight-medium)`

---

## 14. `index.html` — Component Showcase Structure

Organize the showcase page into clearly labelled sections:

```
1. Design Tokens (color swatches, type scale, spacing scale)
2. Navigation
   - Primary Sidebar (active, hover, default states)
   - Secondary Panel (with sub-nav + filters, collapsed state)
3. Buttons (all 4 variants × all sizes × all states)
4. Date Selector
5. Filters (default, applied, expanded states)
6. Chart Cards (loaded, loading, empty, error states)
7. Data Table (with KPI tabs, search, rows with badges)
8. Heat Map Table
9. KPI Summary Row
10. Alert Cards + Detail Panel
11. Actionable Insight Cards
12. Empty States (3 variants)
13. Data Freshness Bar
```

Each section: `<section>` with `<h2>` label, gray background container, components displayed with clear state labels (`.demo-label` in small gray text above each variant).

---

## Resolved Issues Checklist

Before delivering, verify:

- [ ] No `text-transform: uppercase` anywhere in CSS
- [ ] Only 2 primary button variants (filled + outlined) — no third or fourth
- [ ] All filter expand icons use `›` chevron — zero `+` icons
- [ ] Date selector uses pill+arrows pattern in ALL views — no standalone scrubber
- [ ] Empty state exists for all content areas (no blank gray canvas)
- [ ] Data freshness bar present in all data view sections
- [ ] All interactive elements have `:hover` and `:focus-visible` states
- [ ] All color usages pull from `var(--color-*)` tokens — no hardcoded hex
- [ ] Spinner uses CSS animation only — no JS, no GIF
