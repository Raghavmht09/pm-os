# First Session Checklist — Your First 30 Minutes with pmOS

Complete this checklist in your first Claude Code session with the pmOS folder open.

---

## Before You Start
- [ ] pmOS folder is open as your Claude Code project root
- [ ] CLAUDE.md is detected (Claude responds with DataWeave PM OS context when you greet it)

---

## Minute 0–5: Verify the OS

Type this:
```
What OS are you running? List all available skills.
```
Expected: Claude lists the DataWeave PM OS, core philosophy, and all 15 skills. If not → re-read `setup/installation-guide.md` Step 2.

---

## Minute 5–20: Fill Your Context Library

**Option A — Guided interview (recommended for first time):**
```
/context-builder
```
Claude will interview you section by section to fill all 6 context files.

**Option B — Fill manually:**
Open each file in `context-library/` and replace the `[FILL IN: ...]` placeholders with your actual data. Start with:
1. `product-portfolio.md`
2. `okrs-and-roadmap.md`
3. `customer-signals.md`

---

## Minute 20–25: Run Your First Competitor Analysis

Pick your most immediately relevant competitor (likely Profitero or Salsify):
```
/competitor-analysis Profitero
```
or
```
/competitor-analysis Salsify
```

This:
- Validates that the OS works end-to-end
- Creates your first competitor profile in `insider-data/competitor-profiles/`
- Generates a sales battlecard TL;DR you can use immediately

---

## Minute 25–30: Check OKR Health

```
/okr-check
```

This reads your OKRs and sprint tracker, classifies each KR as ON TRACK / AT RISK / BEHIND, and suggests the week's priority actions. If OKRs were filled in the context-builder step, this should produce a real health report.

---

## After Your First Session

**This week:**
- [ ] Run `/competitor-analysis` on your top 2 competitors
- [ ] Paste your most recent CS sync notes and run `/customer-signal-extract`
- [ ] Run `/write-prd` on your highest-priority roadmap item

**This month:**
- [ ] Complete `insider-data/dataweave-tech-context.md` with internal architecture context
- [ ] Complete `context-library/stakeholder-map.md` fully (eng leads, CS contacts, leadership priorities)
- [ ] Run `/sprint-retro` after your next sprint close to start building velocity history

---

## Quick Reference: Most-Used Commands

| What you need | Command |
|---|---|
| Write a feature spec | `/write-prd [feature or problem]` |
| Extract signals from meeting notes | `/customer-signal-extract [paste notes]` |
| Check a competitor | `/competitor-analysis [company name]` |
| Check OKR health | `/okr-check` |
| Quick research, no setup needed | `/quick-start [question or topic]` |
| Update the roadmap after new signal | `/roadmap-update [what changed + why]` |
| Prepare for a sprint | `/sprint-plan [goals + capacity]` |
| End-of-week review | `/weekly-retro` |
