# Installation Guide — DataWeave PM OS

## What You're Setting Up
A Claude Code project that turns every Claude session into a DataWeave-aware PM counterpart. Once set up, Claude will automatically read your context library, surface OKR alerts, and have all 15 skills and 4 sub-agents available on demand.

---

## Step 1: Install Claude Code

If you don't have Claude Code installed:
- **Mac/Windows desktop app:** claude.ai/code
- **VS Code extension:** Search "Claude Code" in Extensions marketplace
- **CLI:** `npm install -g @anthropic-ai/claude-code`

Claude Code is required for the CLAUDE.md project instructions feature to work.

---

## Step 2: Open the pmOS Folder as Your Project

In Claude Code, open the `pmOS/` folder as your working directory:
- **Desktop app:** File → Open Folder → select `pmOS/`
- **CLI:** `cd /Users/raghavmehta/Documents/pmOS && claude`
- **VS Code:** Open the `pmOS/` folder, then activate Claude Code in the sidebar

When Claude Code detects a `CLAUDE.md` file in the project root, it loads it automatically as project instructions. You will see a confirmation that the project instructions are active.

---

## Step 3: Verify the OS is Loaded

At the start of your first session, type:
```
What OS are you running and what skills are available?
```

Claude should respond with the DataWeave PM OS name, its core philosophy, and the skills table. If it responds generically, the CLAUDE.md was not detected — re-check that you have `pmOS/` open as the root folder.

---

## Step 4: Fill Your Context Library

The OS is only as good as your context. Fill these files before using production skills:

**Priority order (most impactful first):**

1. `context-library/product-portfolio.md`
   - What products you own, current state, key metrics
   - Time: ~20 minutes

2. `context-library/okrs-and-roadmap.md`
   - Current quarter OKRs with progress %, committed roadmap
   - Time: ~15 minutes

3. `context-library/customer-signals.md`
   - Top pain points, active churn risks, feature requests
   - Time: ~15 minutes (or run `/customer-signal-extract` on recent meeting notes)

4. `context-library/stakeholder-map.md`
   - Eng lead, CS contacts, leadership priorities
   - Time: ~10 minutes

5. `context-library/sprint-tracker.md`
   - Current sprint, velocity history
   - Time: ~10 minutes

**Shortcut:** Run `/context-builder` in your first session and Claude will interview you to fill all files conversationally.

---

## Step 5: Run Your First Skill

Once context is filled, run:
```
/competitor-analysis Profitero
```
This validates that the OS reads context files, generates a competitor profile, and auto-saves it to `insider-data/competitor-profiles/profitero.md`.

---

## Step 6: Understand the Newsletter Archives

The OS references two external data directories when doing strategy and research work:
- **Lenny's Newsletter + Podcast:** `../lennys-newsletterpodcastdata-all/`
- **Substack content:** `../Substack content/`

These paths are relative to the `pmOS/` folder. They are already populated in your Documents folder. The OS reads them automatically during `/product-strategy`, `/brainstorm`, and `/gtm-plan` runs — no action needed.

---

## Folder Structure Reference

```
/Users/raghavmehta/Documents/
├── pmOS/                          ← Your Claude Code project root
│   ├── CLAUDE.md                  ← Loaded automatically at every session
│   ├── .claude/skills/            ← 15 skills (loaded on demand)
│   ├── context-library/           ← YOUR data — fill these
│   ├── sub-agents/                ← 4 reviewer personas
│   ├── insider-data/              ← Competitor profiles, frameworks, tech context
│   ├── templates/                 ← PRD, FRD, GTM, competitive brief templates
│   └── setup/                     ← This file
├── lennys-newsletterpodcastdata-all/  ← Referenced by strategy skills
└── Substack content/                  ← Referenced by strategy skills
```

---

## Troubleshooting

**Claude doesn't know about DataWeave or the skills:**
→ CLAUDE.md is not being loaded. Verify pmOS/ is your project root in Claude Code.

**Skills produce generic output:**
→ Context library files are empty or have only template placeholders. Fill them or run `/context-builder`.

**Competitor analysis can't find existing profiles:**
→ Profiles are in `insider-data/competitor-profiles/`. Run `/competitor-analysis [company]` to generate them.

**Newsletter archive not being used in strategy skills:**
→ Check that `../lennys-newsletterpodcastdata-all/` exists relative to your pmOS folder (it should at `/Users/raghavmehta/Documents/lennys-newsletterpodcastdata-all/`).
