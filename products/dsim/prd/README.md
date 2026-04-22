# Product Requirement Documents (PRD)

**Purpose:** Comprehensive product specifications for DSIM features, organized by feature or initiative.

## Naming Convention

- `dsim-prd-[feature-name]-v[N].md` — Feature-level PRD
- `dsim-prd-[initiative-name]-v[N].md` — Cross-feature initiative PRD (e.g., "multi-retailer-expansion", "walmart-connect-integration")

## What Goes Here

- Feature problem statements and goals
- User stories and acceptance criteria
- Non-goals and scope boundaries
- Customer signal backing (traces to `../../insider-data/dsim/plan-of-action.md` pain points)
- Dependencies and blockers
- Success metrics and KPIs

## How to Create

Use `/write-prd [feature]` skill — it will auto-populate this folder and cross-reference market research.

## Versioning

Keep old versions (v1, v2, v3) in place. Use `v[N]` suffix to show evolution without overwriting.

Example structure:
```
dsim-prd-walmart-connect-integration-v1.md
dsim-prd-walmart-connect-integration-v2.md (if updated after feedback)
dsim-prd-store-cluster-localization-v1.md
```

---

Last updated: 2026-04-20
