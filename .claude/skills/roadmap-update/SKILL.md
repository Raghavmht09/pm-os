# /roadmap-update — Reprioritize Roadmap

## When to Use
- A new customer signal (pain point, churn risk, feature request) warrants a roadmap change
- Leadership has issued a new directive that affects priorities
- A competitor move requires a response
- A sprint retro revealed that a committed item is blocked and may not ship as planned
- Quarterly planning cycle — refreshing priorities based on new data

## Inputs
- **Required:** Trigger for the update + rationale (what changed and why it matters)
- **Auto-loaded:** `context-library/okrs-and-roadmap.md`, `context-library/customer-signals.md`, `context-library/sprint-tracker.md`
- **Optional:** Specific item to add, remove, or reorder; any new customer signal or leadership input

**Empty context check:** If `okrs-and-roadmap.md` is empty → STOP: "Roadmap is empty. Run `/context-builder` to set up your initial roadmap before updating it."

## Process

### Step 1: Parse the Trigger
Classify the trigger type:
- `CUSTOMER_SIGNAL` — new or escalated pain point, churn risk, or feature request
- `LEADERSHIP_DIRECTIVE` — new priority from leadership or board
- `COMPETITOR_MOVE` — competitor launched a feature or won a deal with a specific capability
- `SPRINT_BLOCKER` — a committed item is blocked and needs to be swapped or deferred
- `MARKET_SHIFT` — new market trend, regulation, or ecosystem change

### Step 2: Assess Impact on Current Roadmap
For the triggering event, determine:
- Which current roadmap item(s) does this affect (add, remove, promote, demote, defer)?
- Which OKR/KR is impacted?
- What is the trade-off cost of making this change (what gets deprioritized)?

### Step 3: Apply the Trade-Off Framework
For any item promoted on the roadmap, identify which item must be demoted or deferred to maintain realistic capacity. You cannot add to the roadmap without explicitly noting what shifts.

Present as: "To add [X], we need to defer [Y]. Here is the evidence for why [X] is higher priority than [Y] right now."

### Step 4: Verify Evidence
For each proposed change:
- Does the evidence meet the bar for the change?
  - New item (COMMITTED): must have customer signal ≥ 2 accounts OR OKR-direct linkage
  - Deferral: must have a clear reason (not just "we're busy") + a revisit trigger
  - Parking lot addition: must note the signal that could bring it back

### Step 5: Update okrs-and-roadmap.md
Propose specific edits to the roadmap table in `context-library/okrs-and-roadmap.md`. Show the before/after clearly. Wait for confirmation before writing.

## Output

```markdown
# Roadmap Update: [Brief trigger description]
**Date:** [today's date]
**Trigger Type:** [CUSTOMER_SIGNAL / LEADERSHIP_DIRECTIVE / COMPETITOR_MOVE / SPRINT_BLOCKER / MARKET_SHIFT]
**Initiated by:** [source — e.g., "Whirlpool CS sync 2026-04-03" or "Q2 leadership review"]

---

## Trigger Summary
[2–3 sentences: what happened, why it matters, what decision it forces]

---

## Proposed Roadmap Changes

### Items Promoted / Added
| Item | New Status | OKR Link | Evidence | Confidence |
|---|---|---|---|---|
| [item] | COMMITTED / PLANNED | [KR name] | [signal source and date] | HIGH / MEDIUM / LOW |

### Items Deferred / Demoted
| Item | Previous Status | New Status | Reason | Revisit Trigger |
|---|---|---|---|---|
| [item] | COMMITTED | PLANNED / PARKING LOT | [specific reason] | [condition that would promote it back] |

### Items Unchanged (but affected by context)
| Item | Why It Stays | OKR Impact |
|---|---|---|
| [item] | [reason] | [impact note] |

---

## Trade-Off Statement
To add [promoted item(s)], we are deferring [deferred item(s)].

**Why this trade-off is correct:**
- [Reasoning anchored in customer signals, OKR progress, or competitive position]

**What we're accepting as a risk:**
- [What we lose by deferring the deferred item(s)]

---

## OKR Impact
| KR | Before Change | After Change | Delta |
|---|---|---|---|
| [KR name] | [expected progress %] | [new expected progress %] | [+ or - X%] |

---

## Proposed okrs-and-roadmap.md Updates
[Specific before/after edits — confirm before applying]

---
## Items Without Evidence Basis
[Any proposed changes that lack customer signal or OKR backing — flagged for confirmation]
`[NO EVIDENCE BASIS — do not commit without validation]`
```

## Quality Checks

Good output looks like:
- Every addition has a corresponding deferral — roadmap capacity is treated as finite
- Trade-off statement is explicit and honest about what risk is accepted
- Deferred items have a revisit trigger (not just "someday")
- Evidence for promoted items cites specific source and date

Bad output looks like:
- Items added to roadmap without anything being deferred ("we'll fit it in")
- Trigger described but no specific roadmap changes proposed
- Evidence section says "based on general customer demand" (not specific)
- Deferred items have no revisit trigger — they disappear into the parking lot forever
