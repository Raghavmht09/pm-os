# Project: GeekSpeak × Lassonde — DSA Onboarding
**Status:** Shot 1 complete · Shot 2 (PRD) complete · Shot 3 (Presentation) pending
**Last updated:** 2026-04-16
**Owner:** Raghav Mehta

---

## Project Overview

GeekSpeak Commerce is a CPG agency/enabler onboarding their client brand **Lassonde** (juice & beverages, ~200-300 SKUs) onto DataWeave's DSA (Digital Shelf Analytics) platform. Two parallel workstreams.

**Problem being solved:** Brands cannot validate at scale whether retailer product pages show correct content. Automated matching produces false positives/negatives. No override, RBAC, or audit trail exists in the current system.

---

## Workstreams

### WS1 — Share of Search (Standard DSA Feature)
- **Retailers:** Walmart CA, Loblaws, Real Canadian Superstore, No Frills, Voila, Metro, Maxi (6 confirmed; Uber Eats removed — replacement TBD)
- **Crawl:** Daily
- **Input:** 50 keywords × 6 banners = 300 total; retailer-specific SKU relevancy mapping; 1 postal code per banner; both Lassonde ID + retailer SKU ID required
- **Output:** Average Ranking + Coverage Percentage; page 1 tracking (20-40 products); visual trend dashboards
- **Delivery:** Native dashboard → BA extraction → Tableau custom dashboards

### WS2 — Content Quality Audit (New Feature: Override Required)
- **Retailers:** Metro, Loblaws, Walmart CA, Save On Foods, Giant Tiger + others
- **Crawl:** Monthly (5th or 10th of month)
- **Input (from GeekSpeak):** SKU lists per retailer (UPC, title, variant, images, URLs), reference/hero images ranked by retailer, copywriting in EN+FR (title, description, bullets, ingredients, prep instructions); shared via OneDrive
- **Attributes audited:** Primary image, secondary images (up to 6-7 for Loblaws), title, description, feature bullets, ingredients, NFT (via GS1), prep instructions, reference links
- **Scoring:** Confidence 0-100; 80-100 = Correct; 0-80 = Incorrect; user override Incorrect→Correct = "Correct - Slightly Modified"
- **Reporting:** SKU-level + Brand/category-level aggregated scorecard

---

## Features to Build (F1–F5)

| ID | Feature | Priority | Status |
|---|---|---|---|
| F1 | Override Functionality | Must Have | Not started |
| F2 | State Management (preserve overrides across crawl cycles) | Must Have | Not started |
| F3 | Role-Based Access Control (Editor / Viewer / Admin) | Must Have | Not started |
| F4 | Audit Logging & Retrieval | Must Have | Not started |
| F5 | Report Refresh & Dashboard Pipeline | Should Have | Not started |
| F6 | N×N Secondary Image Matching (Suraj's team) | Should Have | In progress (3 wks) |

### F1 — Override (key rules)
- Attribute-level only (not product-level)
- Changes tag/enum only — confidence score is never modified
- States: `Correct` | `Incorrect` | `Correct - Slightly Modified`
- Score→enum: 80-100 → Correct; 0-80 → Incorrect; user override Incorrect→Correct → "Correct - Slightly Modified"
- Override reasons: product typography, image typography misalignment, rephrased/reorganized text, marketing labels on images

### F2 — State Management
- No content change since last crawl → preserve last user override, skip recalculation
- Any content change (reference OR actual) → re-run semantics algorithm, recalculate score
- Leverage existing version comparison service
- UI shows both: system score + last user action/override status

### F3 — RBAC
- Editor: view + override; Viewer: view only (override UI hidden, not disabled); Admin: user management
- Granular access: restrict by retailer, by category
- Customer admin controls all seat allocation — DataWeave does not manage
- Seat-based licensing model

### F4 — Audit Logging
- Log every override: actor, timestamp, SKU ID, attribute, old value, new value
- Retrieval: input SKU ID → hierarchical action history table
- Accessible to customer admins

### F5 — Dashboard Pipeline
- Configurable refresh: daily / weekly / monthly (BA team)
- Overrides between crawls reflected on next refresh
- Phased delivery: SoS native dashboard first → Content Quality dashboards second

---

## Timeline

| Phase | Scope | Target |
|---|---|---|
| Phase 1 | Native dashboard + Share of Search | Week 1-2 |
| Phase 2 | N×N image pairing module (Suraj's team) | Week 1-3 (parallel) |
| Phase 3 | Override + State Management | Week 2-4 |
| Phase 4 | RBAC + Audit Logging | Week 3-5 |
| Phase 5 | Custom Tableau dashboards | Week 3-6 |
| Phase 6 | UAT + Go-live | Week 6 |

Standard setup: ~4 weeks from receiving all inputs. Weekly 30-min touchbase during build phase.

---

## Stakeholders

| Name | Role |
|---|---|
| Vaibhav Khaparde | Product Management lead |
| Arun Kumar T | Product Engineering lead |
| Sada | Engineering |
| Sanket Deshpande / Sanket Patil | Engineering |
| Pandurangan (Pandu) | Engineering |
| Rohitha | CSM lead |
| Baghi | Customer Success primary contact |
| Lily | Delivery Manager |
| Trisha Williams, Ali, Katie, Suzanne Hicks | GeekSpeak team |
| Suraj's team | N×N image pairing module |

---

## Data Sources

### Google Drive
- **Root folder:** [Geekspeak](https://drive.google.com/drive/folders/1UJSrnzWb1pDnW_V4XNqoKLD1VX3XxcXP) — owned by Vaibhav Khaparde
  - [Share of Search Analytics Customization - Dataweave](https://drive.google.com/drive/folders/1KRv02uta6WWUMYjYaHy6ryQt9e3bteAg)
  - [Content Audit Customization - Dataweave](https://drive.google.com/drive/folders/1fJSwF0z0uoATErAHE_ounmSIqtF_ELU3)
- **Note:** MCP only reads Google Docs. SKU lists and keyword files are likely Google Sheets — not readable via current MCP. Fetch manually if needed.

### Confluence (dataweave.atlassian.net — cloudId: 710db9d6-3d4b-41b1-8590-f3fdf668d888)

| Page | Space | ID | Relevance |
|---|---|---|---|
| Content Text Analysis Module: API Overview and Functionality | SEM | 3642294280 | Text matching API (FastAPI + FuzzyWuzzy + NLTK) — per-attribute compliance |
| Content Audit Optimization: Orchestrator Documentation | SEM | 3639705607 | Full pipeline architecture, Kafka queue, payload contracts |
| Content Audit Optimization Service - Extended Architecture with Image Attribute Tagging | SEM | 3480616963 | Image attribute tagging pipeline |
| Scoring Changes for Content Quality | SEM | 3616276482 | Scoring methodology, threshold rationale |
| Content Analysis Orchestrator - Full System Documentation | SEM | 3625648153 | Kafka consumer, scoring, S3 integration |
| Automation on PI-Match Management-Veracite | PROD | 3585441795 | Override behavior in current system — state conflict discussion |
| Veracite User Guide for Delivery | PROD | 2589982723 | Existing Veracite internal tool documentation |
| PI, DSA, Assortment, Tools, Colab, Veracite Apr 1 - Apr 14 2026 | PROD | 3637706763 | Latest sprint tracker — DSA status |

### Notion (accessible via Notion MCP — on-demand pull)
**Database:** Meeting notes directory — https://www.notion.so/3494855c8ba2805cb5b4f1b524f469c5?v=3494855c8ba280109afa000c70895d41
**Collection ID:** `collection://3494855c-8ba2-8048-8a8e-000b9ddf76b7`

**When to pull:** Any skill or task that needs meeting notes as ground truth — use `notion-fetch` or `notion-query-database-view` directly. Do NOT use browser tools for Notion.

**Pattern:**
1. `notion-query-database-view` on the DB URL → get list of pages with Type + date
2. Filter to relevant pages (External discussion / specific project title)
3. `notion-fetch` on each page URL → get full transcript + summary

**GeekSpeak-related pages in the database:**

| Date | Title | Type | Status |
|---|---|---|---|
| Apr 29 | Geekspeak DSA implementation weekly sync - External | External discussion | Captured in knowledge files |
| Apr 29 | Geekspeak DSA - CQ custom dashboard requirements | Internal discussion | Not mined |
| Apr 28 | DataWeave - GeekSpeak (Lassonde) \| Discussion and MoM | Email thread | Not mined |
| Apr 28 | Geekspeak DSA Implementation - Internal | Internal discussion | Not mined |
| Apr 27 | Geekspeak DSA - SOS and CQ implementation - Internal | Internal discussion | Not mined |
| Apr 22 | Geekspeak weekly connect 3 - External | External discussion | Captured |
| Apr 22 | Fwd: Recap of your meeting with geekspeak Commerce | External discussion | Captured (minimal content) |
| Apr 15 | Geekspeak content audit internal discussion - DSA | Internal discussion | Partially captured (transcript-2.md) |
| Apr 10 | Geekspeak: DSA Share of search dashboards - Internal | Internal discussion | Not mined |
| Apr 8 | Geekspeak DSA implementation internal connect | Internal discussion | Partially captured (transcript-3.md) |
| Apr 7 | Dataweave - Geekspeak Discussion | External discussion | Captured (transcript-1.md) |

---

## Open Questions (as of 2026-04-16)

1. **Replacement banner for Uber Eats** — GeekSpeak to confirm 6th banner
2. **Score threshold at boundary 80** — is exactly-80 mapped to Correct or Incorrect?
3. **Image classification types** — need definition at Lassonde account level (front, back, lifestyle, ingredients, infographic, etc.)
4. **Brand-level score aggregation formula** — not defined yet
5. **Lactalis implementation precedent** — no Confluence link found; locate and reference in PRD
6. **Notion meeting notes** — cannot be accessed here; may contain recent decisions/blockers not captured in planning.md
7. **Plytex (PIM) API integration** — no timeline/decision; treat as future scope

---

## PRD

- **Local file:** `PRD-geekspeak-lassonde-content-audit.md`
- **Confluence:** [PRD — GeekSpeak × Lassonde: Content Audit & Override Functionality](https://dataweave.atlassian.net/wiki/spaces/PROD/pages/3648028678) (PROD space, page ID: 3648028678)
- **Status:** Draft v1.0 — 2026-04-16

---

## Output Files (what GeekSpeak receives)

Two deliverable files per brand per crawl cycle:

| File | Level | Contents |
|---|---|---|
| **Scorecard** | Brand-level aggregate | Percentage match per attribute across all SKUs vs. the baseline reference file; one row per attribute showing compliance % |
| **Baseline resource-level file** | Retailer-level (multi-sheet) | One sub-sheet per retailer; columns: Brand SKUID, Retailer SKUID, Title, Description, Image List, Image URLs, and other key attributes; this is the reference truth file |

The scorecard is the customer-facing summary. The baseline file is the source-of-truth that the content audit pipeline compares against.

---

## Key Terminology

| Term | Meaning |
|---|---|
| DSA | Digital Shelf Analytics — DataWeave's shelf monitoring platform |
| Veracite | **Confirmed platform name.** DataWeave's internal platform that powers specification management and configuration management for any new brand/customer onboarding onto DataWeave. Functions as a match management + QA platform where the internal QA team validates whether crawled products (images + attributes) have the correct match. "Verisight" in older docs = incorrect name; always use Veracite. |
| PDP | Product Detail Page |
| PIM | Product Information Management (e.g. Plytex) |
| NFT | Nutrition Facts Table |
| GS1 | Standards body; DataWeave sources NFT data from GS1 |
| N×N pairing | Brute-force secondary image matching: 1 reference image vs. N actual images; highest confidence pair selected |
| SoS | Share of Search |
| Scorecard | Brand-level aggregate output file: compliance % per attribute across all SKUs |
| Baseline resource file | Retailer-level reference file (multi-sheet): Brand SKUID, Retailer SKUID, Title, Description, Image List, Image URLs |
