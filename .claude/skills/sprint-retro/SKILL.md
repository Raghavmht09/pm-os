# /sprint-retro — Sprint Retrospective Analysis

## When to Use
- Last day of a sprint or first day of the next sprint
- When leadership asks about sprint health or delivery predictability
- When carry-over has been high for multiple sprints (pattern analysis needed)
- Monthly velocity review for roadmap re-planning

## Inputs
- **Required:** Sprint name/number + completed vs. committed items (paste sprint board summary or provide the data)
- **Auto-loaded:** `context-library/sprint-tracker.md` (for historical velocity and pattern context)
- **Optional:** Team's raw retro notes (what worked / what didn't), specific blockers from the sprint

## Process

### Step 1: Calculate Sprint Metrics
Compute from the provided data:
- **Velocity:** Story points completed / story points committed (as %)
- **Carry-over rate:** Items not completed / items committed (as %)
- **Blocker count:** Number of items that were blocked at any point
- **Scope creep:** Items added after sprint start vs. original committed count

### Step 2: Pattern Analysis
Compare this sprint to the history in `context-library/sprint-tracker.md`:
- Is velocity improving, stable, or declining (3-sprint trend)?
- Are carry-over items from the same work area (signals a recurring systemic issue)?
- Are the same blockers appearing repeatedly?

Flag patterns: "This is the [N]th sprint in a row where [pattern]" — systemic issues need a root cause fix, not another retro action item.

### Step 3: Root Cause Analysis for Carry-Over
For each carried-over item, classify the root cause:
- `SCOPE_UNCLEAR` — spec wasn't ready when engineering started
- `DEPENDENCY_BLOCKED` — external dependency didn't resolve in time
- `UNDERESTIMATED` — item was larger than estimated
- `PRIORITY_SHIFT` — item was deprioritized mid-sprint
- `UNPLANNED_WORK` — unplanned work consumed capacity

If the same root cause appears > 2 sprints in a row → recommend a process fix, not just an action item.

### Step 4: Generate Retro Discussion Points
Based on the data, surface:
- 2 "What worked" items with data support (not just feelings)
- 2 "What didn't" items with root cause classified
- 1–2 action items maximum — specific, owned, with a due date

### Final Step: Update sprint-tracker.md
Propose specific updates to the sprint history table in `context-library/sprint-tracker.md`:
- Add this sprint's row to the Sprint History table
- Update the velocity trend section
- Add any recurring blocker patterns to the patterns section

Wait for user confirmation before writing.

## Output

```markdown
# Sprint Retro: [Sprint Name]
**Dates:** [start] → [end]
**Analyzed:** [today's date]

---

## Sprint Metrics
| Metric | This Sprint | Last Sprint | 3-Sprint Avg |
|---|---|---|---|
| Velocity (pts completed / committed) | [X]% | [X]% | [X]% |
| Carry-over rate | [X]% | [X]% | [X]% |
| Blocked items | [N] | [N] | [N avg] |
| Scope creep (items added after start) | [N] | [N] | [N avg] |

**Trend:** IMPROVING / STABLE / DECLINING

---

## Carry-Over Analysis
| Item | Root Cause | Recurring? |
|---|---|---|
| [item] | [SCOPE_UNCLEAR / DEPENDENCY_BLOCKED / UNDERESTIMATED / PRIORITY_SHIFT / UNPLANNED_WORK] | YES (N sprints) / NO |

**Pattern flag:** [Any pattern appearing ≥ 2 sprints with recommended fix]

---

## What Worked
1. [Item with data support] — [why it's a signal to repeat]
2. [Item with data support]

## What Didn't Work
1. [Item with root cause] — [root cause classification]
2. [Item with root cause]

## Action Items
| Action | Owner | Due Date | Addresses |
|---|---|---|---|
| [specific action] | [name] | [date] | [root cause it fixes] |

---

## Velocity Chart (text)
Sprint [N-2]: [X pts] ████████
Sprint [N-1]: [X pts] ██████
Sprint [N]:   [X pts] ███████

---

## Proposed sprint-tracker.md Updates
[Specific table row to add to sprint history — confirm before applying]
```

## Quality Checks

Good output looks like:
- Carry-over root causes are classified (not just listed)
- Pattern flags call out recurring issues specifically ("3rd sprint in a row with DEPENDENCY_BLOCKED on the data pipeline team")
- Action items have owners and due dates — not vague ("improve communication")
- What worked section has data support, not just team morale observations

Bad output looks like:
- Retro summary is all qualitative, no metrics
- Action items are vague ("be more realistic about estimates")
- No pattern analysis — treats each sprint in isolation
- Carry-over items are listed without root cause classification
- sprint-tracker.md update not proposed
