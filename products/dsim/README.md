# DSIM Product Artifacts

**Purpose:** All product-related documents, specifications, and planning artifacts for DSIM (Digital Shelf Impact Measurement).

## Folder Structure

- **`prd/`** — Product Requirement Documents (versioned PRDs, feature specs, requirements traceability)
- **`frd/`** — Functional Requirement Documents (engineering-ready specs, detailed user stories, edge cases)
- **`presentations/`** — Customer-facing and internal decks (QBRs, launch decks, customer walkthroughs)
- **`specs/`** — Technical specs (data models, API design, integration architecture, system design)
- **`timeline/`** — Implementation roadmaps, sprint plans, milestone tracking, release schedules

## How to Use

- **For feature planning:** Start in `prd/` with requirements, trace to FRD in `frd/`
- **For engineering handoff:** Reference both PRD (context) and FRD (implementation detail)
- **For customer communication:** Use `presentations/` + reference PRD for feature context
- **For technical decisions:** Document in `specs/` + link to decisions in `../decisions/dsim/`
- **For tracking progress:** Update `timeline/` weekly with sprint status and milestone movement

## Cross-references

- **Market research:** See `../../insider-data/dsim/` for competitive analysis, GTM strategy, customer ICP
- **Decisions:** See `../../decisions/dsim/` for feature prioritization, architecture, and product trade-offs

---

Last updated: 2026-04-20
