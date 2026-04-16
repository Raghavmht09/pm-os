# /sprint-plan — Generate Sprint Plan

## When to Use
- Sprint kickoff (first day of a new sprint)
- Capacity planning before committing sprint goals
- When backlog needs to be sliced against available team bandwidth
- When leadership asks what will ship this sprint

## Inputs
- **Required:** Sprint goals (1–3 sentences on what this sprint should achieve) + team capacity (person-days available, accounting for PTO and ceremonies)
- **Auto-loaded:** `context-library/okrs-and-roadmap.md`, `context-library/sprint-tracker.md`
- **Optional:** Specific backlog items to include/exclude, carry-over items from last sprint, any external dependencies with deadlines

**Empty context check:** If `sprint-tracker.md` has no velocity history → note: "No velocity history found. Using goals-based planning only. Fill in past sprint data for capacity-calibrated planning."

## Process

### Step 1: Read Velocity Baseline
From `context-library/sprint-tracker.md`:
- Get 3-sprint rolling average velocity
- Note carry-over pattern — if carry-over > 30%, reduce planned capacity by 15% (buffer for recurring drag)

### Step 2: Map Goals to Roadmap
Check `context-library/okrs-and-roadmap.md`:
- Which committed roadmap items advance the stated sprint goals?
- Which KRs will this sprint's output directly move?
- Are there any dependencies that could block items mid-sprint?

### Step 3: Slice the Backlog
Given team capacity and velocity baseline:
- List COMMITTED items (must complete this sprint — do not cut)
- List PLANNED items (should complete — cut if capacity is tight)
- List STRETCH items (if capacity allows — no commitment)
- Flag any item with an unresolved dependency as `[DEPENDENCY: needs resolution before starting]`

### Step 4: Dependency and Risk Check
For each item:
- Is there a known blocker or dependency from `stakeholder-map.md` (eng lead unavailability, external API, cross-team work)?
- Is this item's scope clearly defined (FRD exists) or does it still need spec work within the sprint?
- Items without an FRD should be tagged `[NEEDS SPEC — do not start building until FRD is written]`

### Step 5: Draft Sprint Goal Statement
Write a 1-sentence sprint goal that:
- Is specific to what ships (not activity-based: "work on X" → bad; "ship X so Y accounts can use Z" → good)
- Links to a KR if possible
- Could be communicated to leadership in one sentence

## Output

```markdown
# Sprint Plan: [Sprint Name/Number]
**Dates:** [start] → [end]
**Goal:** [1-sentence sprint goal]
**OKR Link:** [KR this sprint advances]
**Capacity:** [N person-days available] | **Velocity baseline:** [N story points]

---

## Committed Items (must complete)
| Item | Owner | Est. Points | Dependencies | FRD Status |
|---|---|---|---|---|
| [item] | [name] | [N] | [dependency or NONE] | READY / [NEEDS SPEC] |

**Committed total:** [N points]

## Planned Items (should complete)
| Item | Owner | Est. Points | Dependencies | FRD Status |
|---|---|---|---|---|
| [item] | [name] | [N] | [dependency or NONE] | READY / [NEEDS SPEC] |

**Planned total:** [N points]

## Stretch Items (if capacity allows)
| Item | Owner | Est. Points | Notes |
|---|---|---|---|
| [item] | [name] | [N] | [why stretch, not planned] |

---

## Carry-Over from Last Sprint
| Item | Reason for Carry-Over | Re-committed? |
|---|---|---|
| [item] | [root cause] | YES / NO (moved to backlog) |

## Dependencies to Track
| Dependency | Owner | Due Date | Blocks |
|---|---|---|---|
| [dependency] | [name] | [date] | [sprint item] |

## Risks
- [Risk 1]: [mitigation or flag]
- [Risk 2]: [mitigation or flag]

---
*All story point estimates are [DRAFT FOR DISCUSSION] — confirm with engineering in sprint kickoff.*
```

## Quality Checks

Good output looks like:
- Sprint goal is specific enough that "we shipped it" or "we didn't" is unambiguous at sprint end
- Committed items don't exceed 80% of velocity baseline (leaves buffer for unplanned work)
- Every item with a missing FRD is flagged before the sprint starts
- Carry-over items have a root cause documented, not just listed

Bad output looks like:
- Sprint goal is "continue work on platform improvements" (not measurable)
- Committed items total 120% of velocity (optimistic but unrealistic)
- No dependency tracking — blockers appear mid-sprint as surprises
- Carry-over items are re-committed without analyzing why they slipped
