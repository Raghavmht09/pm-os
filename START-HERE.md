# Start Here — DataWeave PM OS

## 5 Steps to Get Running

**Step 1: Open pmOS/ as your Claude Code project**
Open the `pmOS/` folder (at `/Users/raghavmehta/Documents/pmOS`) as the root in Claude Code. The `CLAUDE.md` file will load automatically.

**Step 2: Verify it loaded**
```
What OS is this and what skills are available?
```
You should see: DataWeave PM OS, core philosophy, and the skills table.

**Step 3: Fill your context library**
```
/context-builder
```
Claude interviews you to populate your products, OKRs, customer signals, sprint data, and stakeholders. Takes ~20 minutes. You can also fill files in `context-library/` manually.

**Step 4: Run your first competitor profile**
```
/competitor-analysis Profitero
```
Validates the OS end-to-end and creates your first competitor profile.

**Step 5: Check OKR health**
```
/okr-check
```
Surfaces any at-risk KRs and your priority actions for the week.

---

## Most Useful Skills to Start With

```
/write-prd [feature name or problem]        ← spec a feature in minutes
/customer-signal-extract [meeting notes]    ← extract signals from any call
/competitor-analysis [company]              ← competitor profiles on demand
/okr-check                                  ← weekly OKR health check
/product-strategy [your question]           ← deep strategic analysis
```

## Where Things Live

```
context-library/    ← YOUR data — fill these first
.claude/skills/     ← 15 skills, loaded when you call them
sub-agents/         ← 4 reviewer personas (eng lead, customer, CEO, designer)
insider-data/       ← competitor profiles, frameworks, tech context
templates/          ← PRD, FRD, GTM plan, competitive brief templates
setup/              ← installation guide + first-session checklist
```

## Need Help?

- Full installation instructions: `setup/installation-guide.md`
- First 30 minutes walkthrough: `setup/first-session-checklist.md`
- No context yet? Start with `/quick-start [any question]` — works without setup.
