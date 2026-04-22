# DSIM Product Decisions

**Purpose:** Traceable decision journal for DSIM feature prioritization, architecture choices, and product trade-offs. Prevents re-debating settled decisions.

## Naming Convention

- `dsim-[decision-topic]-[date].md`
  - Example: `dsim-walmart-luminate-access-2026-04-20.md`
  - Example: `dsim-store-cluster-algorithm-choice-2026-04-15.md`
  - Example: `dsim-multi-retailer-expansion-timing-2026-04-16.md`

## Decision Template

Each decision file should include:

```markdown
# Decision: [One-liner]
**Date:** YYYY-MM-DD
**Area:** [feature-prioritization / architecture / gtm-timing / integration / other]
**Status:** ACTIVE / SUPERSEDED / REVISIT-PENDING

## Context
[Why this decision came up, what problem it solves, when it matters]

## Alternatives Considered
[At least 2–3 alternatives, with brief pros/cons for each]

## Decision
[Which alternative was chosen and why]

## Reasoning
[Why this won over alternatives — what trade-offs made this the best choice]

## Trade-offs Accepted
[What we said no to, what risks we're taking on]

## Supersedes
[Link to prior decision if this replaces an earlier choice]

## Revisit Trigger
[Under what conditions would we reconsider this decision?]
```

## How to Use

**Before making any major DSIM decision:**
1. Search `decisions/dsim/` for related prior decisions
2. If one exists, read it and follow the same logic unless new context changes the original reasoning
3. If creating a new decision that contradicts a prior one, link via `Supersedes:` to create a traceable chain

## Decision Quality Heuristic

From internal research: decisions where 3+ alternatives were forced had ~80% hit rate. Most confident decisions had the worst hit rate.

**When forced to choose between 2–3 well-reasoned alternatives, spend time on this decision. When the choice feels obvious, dig deeper.**

---

Last updated: 2026-04-20
