# /okr-check — OKR Progress Review

## When to Use
- Weekly health check before leadership sync or standup
- Before a leadership review or QBR where OKR progress will be asked about
- Mid-quarter when you suspect a KR is at risk and want an honest read
- After a roadmap update to assess the OKR impact of the change

## Inputs
- **Required:** Nothing — this skill reads context files automatically
- **Auto-loaded:** `context-library/okrs-and-roadmap.md`, `context-library/sprint-tracker.md`, `context-library/customer-signals.md`
- **Optional:** Current date (to calculate days remaining in quarter); any specific OKR area to focus on

**Empty context check:** If `okrs-and-roadmap.md` is empty → STOP: "OKRs have not been set up. Run `/context-builder` to fill in your current quarter OKRs."

## Process

### Step 1: Read Current OKR State
From `context-library/okrs-and-roadmap.md`, extract:
- Each Objective and its KRs
- Current progress % for each KR
- Target for each KR
- Days remaining in the quarter (calculate from today's date)

### Step 2: Classify Each KR
Apply this status model:
- `ON TRACK` — current progress ÷ elapsed quarter time ≥ 85%
  - Example: Q is 50% elapsed, KR at 45% progress → ON TRACK
- `AT RISK` — current progress ÷ elapsed quarter time is 60–84%
  - Possible to hit target but requires course correction
- `BEHIND` — current progress ÷ elapsed quarter time < 60%
  - Unlikely to hit without significant intervention
- `BLOCKED` — no progress due to a named dependency or blocker
- `COMPLETE` — already at 100%

### Step 3: Diagnose At-Risk and Behind KRs
For each KR that is AT RISK or BEHIND:
- What is the root cause? (roadmap item not shipped yet, adoption not materializing, external blocker, metric definition issue)
- Is the KR still achievable this quarter? (yes / with significant effort / no)
- What specific action would move this KR in the next 2 weeks?

Check `context-library/sprint-tracker.md` for in-flight items that could move at-risk KRs.

### Step 4: Surface Roadmap-OKR Misalignment
Check `context-library/okrs-and-roadmap.md` roadmap section:
- Are there committed roadmap items that don't link to any current KR? Flag them.
- Are there KRs with no roadmap item actively moving them? This is a gap.

### Step 5: Generate Course Correction Recommendations
For AT RISK and BEHIND KRs, suggest the one most impactful course correction. Options:
- Scope adjustment (ship a smaller version of a feature to hit the metric sooner)
- Resource reallocation (deprioritize a lower-impact item to unblock a KR)
- Metric re-baseline (if the KR target was set with incorrect assumptions — flag this explicitly)
- Roadmap acceleration (identify if a PLANNED item can be fast-tracked)

## Output

```markdown
# OKR Check — [Today's Date]
Quarter: [Q and year]
Days remaining: [N]
Quarter elapsed: [X]%

---

## OKR Status Summary

### Objective 1: [Objective name]
| KR | Target | Current | Status | Trend |
|---|---|---|---|---|
| [KR name] | [target] | [X%] | ON TRACK / AT RISK / BEHIND / BLOCKED / COMPLETE | ↑ / → / ↓ |

**Objective health:** ON TRACK / AT RISK / BEHIND

### Objective 2: [Objective name]
[same structure]

---

## Flags

### AT RISK KRs
**[KR name]**
- Current: [X%] | Target: [Y] | Days remaining: [N]
- Root cause: [specific diagnosis]
- Achievable this quarter: YES / WITH EFFORT / NO
- Recommended action: [specific action, owner, timeline]

### BEHIND KRs
**[KR name]**
- Current: [X%] | Target: [Y] | Days remaining: [N]
- Root cause: [specific diagnosis]
- Achievable this quarter: YES / WITH EFFORT / NO
- Recommended action: [specific action, owner, timeline]

### Roadmap-OKR Misalignment
- Roadmap items with no KR link: [item list — these may be unstrategic]
- KRs with no active roadmap item: [KR list — these will not move without intervention]

---

## Priority Actions This Week
1. [Most urgent action — KR it addresses, owner]
2. [Second action]
3. [Third action — cap at 3 to force prioritization]

---

## What to Say in Leadership Review
[3-sentence narrative: overall health, biggest risk, the action being taken]
```

## Quality Checks

Good output looks like:
- Every KR has a calculated status based on elapsed quarter time, not gut feel
- AT RISK and BEHIND diagnoses name a specific root cause (not "progress has been slow")
- Course corrections are specific — names an action, not "focus more on this KR"
- Roadmap-OKR misalignment section surfaces items that lack strategic backing
- "What to say in leadership review" section is concise and honest

Bad output looks like:
- All KRs marked ON TRACK regardless of actual progress
- AT RISK diagnosis says "we need to work harder"
- No roadmap-OKR misalignment check
- Course corrections are vague ("prioritize this area more going forward")
- Output is silent about KRs where no roadmap item is moving them
