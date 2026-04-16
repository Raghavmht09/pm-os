# /write-frd — Write Functional Requirements Document

## When to Use
- A PRD has been approved and engineering is ready for sprint-level scoping
- Engineering has groomed a PRD and needs detailed functional specs before building
- A feature needs a complete technical handoff document — engineering should not need a follow-up meeting after reading it

## Inputs
- **Required:** Feature name + PRD summary or link (paste the PRD or its key sections)
- **Auto-loaded:** `context-library/stakeholder-map.md` (for engineering team context), `insider-data/dataweave-tech-context.md` (for technical constraint context)
- **Optional:** Engineering notes from grooming, specific technical constraints called out by eng lead

**Empty context check:** If `dataweave-tech-context.md` is empty, proceed but flag: "Technical constraint context is unavailable — non-functional requirements thresholds will be marked [NEEDS ENG INPUT]. Fill `dataweave-tech-context.md` or confirm thresholds with your eng lead before handoff."

## Process

### Step 1: Parse the PRD
Extract from the provided PRD:
- Problem statement and goals (to anchor scope)
- User stories (each becomes an FRD section)
- Non-goals (to explicitly exclude from FRD)
- Open questions (must be resolved before FRD is final)

If open questions remain unresolved in the PRD → STOP and list them. FRD cannot proceed with unresolved blocking open questions.

### Step 2: Decompose User Stories into Functional Flows
For each user story, define the complete functional flow:
- Trigger: What action or event initiates this flow?
- Happy path: Step-by-step sequence through the system (UI actions + backend logic)
- Alternate paths: Valid variations (different inputs, different user roles)
- Error paths: What happens when each step fails? What does the user see?
- Edge cases: Empty states, boundary conditions, concurrent actions

### Step 3: Define System Behavior Rules
For each functional requirement:
- Input validation rules (what is accepted, what is rejected, with what error message)
- Business logic rules (calculations, thresholds, conditions)
- Data rules (what is stored, for how long, in what format)
- State transitions (how the system state changes — especially for multi-step workflows)

### Step 4: Non-Functional Requirements
For DataWeave's context, always include:
- **Data freshness SLA:** How current must the underlying data be for this feature to function correctly?
- **Response time:** p50 and p99 thresholds for user-visible operations
- **Scale requirement:** Maximum SKU count, account count, concurrent users this must handle
- **Failure behavior:** Graceful degradation if the data pipeline is delayed or partially unavailable

Reference `insider-data/dataweave-tech-context.md` for known pipeline characteristics. If thresholds are unknown, flag: `[NEEDS ENG INPUT: confirm threshold with engineering before committing]`

### Step 5: API / Integration Spec (if applicable)
For any feature that exposes or consumes an API:
- Endpoint definition (method, path, auth requirements)
- Request schema (fields, types, validation rules)
- Response schema (fields, types, error codes)
- Rate limits and pagination approach

### Step 6: Acceptance Criteria
For every user story, write acceptance criteria in Given/When/Then format:
- Given [system state or precondition]
- When [user action or system event]
- Then [expected outcome — specific and verifiable]

Each acceptance criterion must be testable by QA without ambiguity.

### Final Step: Completeness Check
Before finalizing, verify:
- [ ] Every user story from the PRD has a corresponding FRD section
- [ ] Every error path is documented (not just the happy path)
- [ ] Non-functional requirements have specific measurable thresholds (not "should be fast")
- [ ] No PRD open questions remain unresolved that would block engineering
- [ ] All DataWeave-specific dependencies are named (specific services, data sources)

## Output

```markdown
# FRD: [Feature Name]
**Author:** [PM name]
**Date:** [today's date]
**Status:** DRAFT — [NEEDS ENG REVIEW / READY FOR HANDOFF]
**PRD Reference:** [link or title]
**Product Area:** [DataWeave product area]

---

## Scope Summary
[2-sentence summary of what this FRD covers. Non-goals restated from PRD.]

## Prerequisites
[What must be true before this feature can function — upstream dependencies, data availability, etc.]

---

## Functional Specifications

### [User Story 1 Title]
**Story:** As a [persona], I want [action], so that [outcome].

#### Flow Definition
| Step | Actor | Action | System Response |
|---|---|---|---|
| 1 | [User/System] | [action] | [system response] |

#### Business Rules
- Rule 1: [condition → behavior]
- Rule 2: [condition → behavior]

#### Error Handling
| Error Condition | User-Visible Message | System Behavior |
|---|---|---|
| [condition] | "[message text]" | [what system does] |

#### Edge Cases
- [edge case]: [expected behavior]

#### Acceptance Criteria
- Given [state], When [action], Then [outcome]
- Given [state], When [action], Then [outcome]

[Repeat for each user story]

---

## Non-Functional Requirements
| ID | Requirement | Threshold | Measurement Method |
|---|---|---|---|
| NFR-01 | Response time (p99) | < [X]ms | [how measured] |
| NFR-02 | Data freshness | [X hours max] | [how measured] |
| NFR-03 | Scale | [X SKUs / Y accounts] | [how measured] |
| NFR-04 | Availability | [X]% uptime | [how measured] |

---

## API Specification (if applicable)
[Endpoint, request/response schema, error codes]

---

## Dependencies
| Dependency | Type | Owner | Confirmation Status |
|---|---|---|---|
| [DataWeave service or external system] | Upstream / Downstream | [team/person] | CONFIRMED / [NEEDS CONFIRMATION] |

---

## Open Questions (must resolve before engineering starts)
| # | Question | Owner | Due Date | Blocking? |
|---|---|---|---|---|
| 1 | [question] | [name] | [date] | YES / NO |

---

## Out of Scope (v1)
- [item excluded, with reason]

---
*Label: [DRAFT FOR DISCUSSION] until engineering confirms feasibility and signs off*
```

## Quality Checks

Good output looks like:
- Every user story has both happy path AND at least 2 error paths
- Non-functional requirements have specific numbers (not "performant" or "reliable")
- Acceptance criteria are testable by QA without asking the PM for clarification
- Dependencies are named (specific DataWeave services, not just "backend system")
- FRD is complete enough that an engineer new to the team could start building from it

Bad output looks like:
- Happy paths only — no error states or edge cases
- NFR section says "The feature should perform well under load" (unmeasurable)
- Acceptance criteria say "The feature works as expected" (untestable)
- Open questions from the PRD are still unresolved in the FRD
- No DataWeave-specific technical context — reads like a generic SaaS spec
