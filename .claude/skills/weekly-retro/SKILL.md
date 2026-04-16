# /weekly-retro — Weekly PM Performance Review

## When to Use
- Every Friday (or end of work week)
- Before planning the next week
- When you want an honest accounting of PM output quality — not just task completion
- When leadership asks "what did product do this week"

## Inputs
- **Required:** Nothing — reads context files automatically. Optionally: paste a summary of what you did this week
- **Auto-loaded:** `context-library/sprint-tracker.md`, `context-library/okrs-and-roadmap.md`, `context-library/customer-signals.md`, `context-library/meeting-notes.md`
- **Optional:** List of tasks completed this week, any decisions made, any signals captured

## Process

### Step 1: Assess the Week's Output
Review what was shipped or progressed against four PM output categories:
1. **Artifacts created or advanced:** PRDs, FRDs, competitor profiles, GTM plans, presentations
2. **Customer signals captured:** Meeting notes processed, signals extracted, customer-signals.md updated
3. **Stakeholder alignment achieved:** Decisions made, blockers unblocked, reviews completed
4. **Strategic thinking done:** Roadmap decisions, strategy work, OKR course corrections

For each category, ask: was this week's output high-leverage (it unblocks future work or compounds) or low-leverage (task completion with no downstream value)?

### Step 2: Check OKR Progress Delta
Compare `context-library/okrs-and-roadmap.md` to the sprint tracker:
- Which KRs moved this week? By how much?
- Any KRs that should have moved but didn't?
- Any newly surfaced risk to a KR?

### Step 3: Identify Patterns and Leaks
Look for:
- **Time leaks:** Work that took time but produced no lasting artifact or decision
- **Signal gaps:** Customer calls that happened but no signal was extracted
- **Pending decisions:** Items that needed a PM decision that are still open
- **Carry-forward:** Work started this week that will need to continue next week (is this planned or was it under-scoped?)

### Step 4: Set Next Week's Focus
Based on OKR state and what's pending:
- Top 3 highest-leverage things to do next week (not a full task list — the top 3)
- One OKR-moving action for the week (the single most important thing for quarterly goals)
- One stakeholder action (the one conversation or alignment that would unblock the most)

### Step 5: Rate the Week
Score the week on 3 dimensions (1–5):
- **Signal quality:** Did you capture and process meaningful customer/market intelligence?
- **Artifact quality:** Did the PRDs/specs/docs you produced meet a high bar?
- **Strategic clarity:** Did you make or advance decisions that others were waiting on?

Low scores → generate a specific improvement action for next week.

## Output

```markdown
# Weekly Retro — Week of [date]
Reviewed: [today's date]

---

## Output Summary

### Artifacts
- [Artifact name]: [status — completed / advanced / stalled]
- [Artifact name]: [status]

### Customer Signals Captured
- [N signals extracted from N meetings/sources]
- [Key signal this week]: [1-line description]
- Gaps: [meetings/signals that didn't get processed]

### Stakeholder Alignment
- [Decision made]: [context]
- [Blocker unblocked]: [context]
- [Still pending]: [what's waiting]

### Strategic Work
- [Strategy or roadmap work]: [what was decided or advanced]

---

## OKR Progress This Week
| KR | Start of Week | End of Week | Delta | What Moved It |
|---|---|---|---|---|
| [KR name] | [X%] | [Y%] | [+Z%] | [what caused the change] |

**KRs that didn't move but should have:** [list]

---

## Patterns and Leaks
- **Time leaks:** [work done with no lasting output]
- **Signal gaps:** [calls that happened without signal extraction]
- **Pending decisions > 3 days old:** [list]

---

## Next Week Focus

**Top 3 (in priority order):**
1. [Highest-leverage action — specific output expected]
2. [Second priority]
3. [Third priority]

**OKR-moving action for the week:** [the one thing that most directly advances a KR]
**Stakeholder action:** [the one conversation that unblocks the most]

---

## Weekly Scores
| Dimension | Score (1-5) | Improvement Action |
|---|---|---|
| Signal quality | [N] | [specific action if < 4] |
| Artifact quality | [N] | [specific action if < 4] |
| Strategic clarity | [N] | [specific action if < 4] |

**Overall week:** [1-sentence honest assessment]
```

## Quality Checks

Good output looks like:
- OKR progress delta is specific — names what moved a KR, not just that it went up
- Time leaks and signal gaps are named specifically (not "could have been more efficient")
- Next week's top 3 are outputs, not activities ("complete FRD for [feature]" not "work on FRDs")
- Weekly scores below 4 have a specific improvement action
- Overall assessment is honest — includes what was done poorly, not just a summary of accomplishments

Bad output looks like:
- OKR delta section says "good progress" without numbers
- Next week focus is a task list of 10+ items (defeats the prioritization purpose)
- No patterns or leaks identified — there are always time leaks in a PM week
- Scores are all 4–5 every week (grade inflation — defeats the self-coaching purpose)
- No signal gap analysis — most PMs have calls they don't process
