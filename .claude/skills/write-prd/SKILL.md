# /write-prd — Write Product Requirements Document

## When to Use
- A feature needs to move from idea, customer request, or leadership directive to a formal spec
- Engineering is asking for requirements before sprint planning
- You want to force-test whether a feature idea has enough backing before committing it to the roadmap
- A competitor move or customer signal has created urgency around a specific capability gap

## Inputs
- **Required:** Feature name or problem statement (1–3 sentences minimum)
- **Auto-loaded:** `context-library/customer-signals.md`, `context-library/okrs-and-roadmap.md`, `context-library/product-portfolio.md`, `context-library/stakeholder-map.md`
- **Optional:** Specific customer quotes, Figma links, related competitor features, engineering constraints already known

**Empty context check:** If `customer-signals.md` and `okrs-and-roadmap.md` are both empty templates, STOP and say: "I can draft a PRD structure but cannot trace requirements to real signals or OKRs. Fill `customer-signals.md` and `okrs-and-roadmap.md` first, or confirm you want an unverified draft labeled [NO EVIDENCE BASIS]."

## Process

### Step 1: Parse the Input
Identify from the feature/problem statement:
- Is this a new capability, an improvement to existing, or a bug/debt fix?
- Which DataWeave product area does it belong to (Pricing Intelligence, Digital Shelf, Content Analytics, etc.)?
- Is this customer-pull (signal exists in `customer-signals.md`) or top-down (leadership/OKR-driven)?

### Step 2: Ground in Customer Signals
Search `context-library/customer-signals.md` for:
- Pain points matching this feature's problem space
- Specific accounts that have requested or would benefit
- Frequency × severity ranking of the underlying pain

If no signal found → mark requirements with `[UNVERIFIED: no customer backing — confirm intentional]`

### Step 3: Map to OKRs
Check `context-library/okrs-and-roadmap.md`:
- Which KR does this feature directly advance?
- Is it already on the committed roadmap, or is this a new addition?
- If a new addition, which parking lot or planned item does it displace?

If no OKR link → mark: `[UNVERIFIED: no OKR backing — confirm this is intentional or add to next quarter planning]`

### Step 4: Define Scope Boundary
List explicit Non-Goals — what this feature will NOT do in v1. This is as important as the goals. Prevents scope creep during engineering.

### Step 5: Draft User Stories
Format: "As a [specific persona — e.g., category manager at a mid-market retailer], I want to [action], so that [outcome]."
- Write 3–5 user stories minimum
- Personas must come from DataWeave's known customer base — do not invent generic personas

### Step 6: Write Requirements
Each requirement must:
- Be traceable to a user story (reference the story number)
- Distinguish between functional (what the system does) and non-functional (performance, reliability, security)
- Use "shall" language for committed requirements
- Flag open questions rather than papering over uncertainty

### Step 7: Check Standing Preferences
Read `context-library/stakeholder-map.md` for:
- Engineering constraints to note in dependencies
- Any standing preferences about PRD format from eng lead or leadership

### Final Step: Auto-Review
After generating the PRD, automatically run the engineering-lead review persona inline. Apply fixes silently. Note all changes made at the bottom of the document under `## Changes from Engineering Review`.

## Output

```markdown
# PRD: [Feature Name]
**Author:** [PM name from product-portfolio.md or "[Your Name]"]
**Date:** [today's date]
**Status:** DRAFT
**Product Area:** [DataWeave product area]
**OKR Link:** [KR this advances, or [UNVERIFIED]]
**Customer Signal Basis:** [pain point from customer-signals.md, or [UNVERIFIED]]

---

## Problem Statement
[2–3 sentences: what is broken or missing, for whom, and what is the consequence of not solving it. No solution language here.]

## Goals
- [ ] [Measurable goal 1 — e.g., "Reduce time to configure a pricing rule from 15 min to < 3 min"]
- [ ] [Measurable goal 2]

## Non-Goals (v1)
- [Explicit scope exclusion 1]
- [Explicit scope exclusion 2]

## User Stories
1. As a [persona], I want to [action], so that [outcome].
2. As a [persona], I want to [action], so that [outcome].
[...]

## Functional Requirements
| ID | Requirement | User Story | Priority (P0/P1/P2) | Notes |
|---|---|---|---|---|
| FR-01 | [system shall...] | US-1 | P0 | [traceability or flag] |

## Non-Functional Requirements
| ID | Requirement | Type | Threshold |
|---|---|---|---|
| NFR-01 | [performance/security/reliability requirement] | [type] | [measurable threshold] |

## Dependencies
- **Upstream (what this feature needs):** [DataWeave system, team, or external dependency]
- **Downstream (what depends on this):** [what breaks or changes if this ships]

## Open Questions
| # | Question | Owner | Due Date |
|---|---|---|---|
| 1 | [open question] | [name] | [date] |

## Out of Scope / Future Consideration
- [item deferred to v2 or beyond, with reason]

## Success Metrics
- [How will you know this feature is working? Specific metric + target + measurement method]

---
## Changes from Engineering Review
[Auto-populated after /review-as-engineering-lead runs]
```

## Example

Input:
`/write-prd Allow retailers to set pricing rules based on competitor index thresholds`

Output:
```
# PRD: Competitor-Index-Based Pricing Rule Triggers
Author: [PM name]
Date: 2026-04-06
Status: DRAFT
Product Area: Pricing Intelligence
OKR Link: Q2 KR2 — Increase pricing rule adoption by 30% among enterprise accounts
Customer Signal Basis: Home Depot (CS sync 2026-03-15): "We want to auto-respond when a competitor drops below our index threshold, not check manually"

Problem Statement:
Pricing Intelligence users currently check competitor index data manually and update their pricing rules reactively. Enterprise accounts with dynamic pricing needs — Home Depot, Costco — require threshold-based automation to stay competitive without manual monitoring overhead. Without this, accounts report the product as "a dashboard, not a decision engine."

Goals:
- [ ] Users can define a pricing rule that fires when a competitor's index crosses a configurable threshold
- [ ] Rule trigger latency < 4 hours from data ingestion to rule activation
- [ ] Configuration takes < 5 minutes for a category manager with no technical background

Non-Goals (v1):
- Multi-competitor aggregated threshold rules (v2)
- ML-predicted threshold recommendations (future)
- Integration with external repricing engines (out of scope)
[...]
```

## Quality Checks

Good output looks like:
- Every requirement traces to a specific user story number
- Every user story references a real DataWeave customer persona (category manager at a mid-market retailer, enterprise pricing analyst)
- OKR link is specific (KR name + current progress %)
- Customer signal basis cites a specific source and date from `customer-signals.md`
- Non-Goals list is as detailed as Goals list
- Open Questions has owners and due dates, not just "TBD"

Bad output looks like:
- Requirements like "The system should be fast and reliable" (unmeasurable, non-specific)
- User stories with generic personas: "As a user, I want to..."
- No OKR link and no flag about missing OKR link
- Customer signal section says "Based on general customer feedback" (no specific source)
- Open Questions list is empty (there are always open questions)
- PRD could apply to a pricing tool at any company — no DataWeave specificity
