# DataWeave PM OS

A Claude Code operating system for Senior Technical PMs at DataWeave. It handles research-heavy, artifact-heavy, and analysis-heavy PM work so you can focus on judgment calls, stakeholder conversations, and strategic decisions.

**What it does:** Loads your product context automatically, gives Claude 15 modular PM skills and 4 reviewer personas, enforces quality rules, and chains workflows automatically — so every session starts with a PM counterpart who knows your products, customers, OKRs, and roadmap.

**What it does not do:** Replace your judgment, generate engineering estimates, fabricate customer evidence, or produce generic output. If context files are empty, it stops and asks you to fill them.

**How to get started:** See `setup/installation-guide.md` and `setup/first-session-checklist.md`.

---

## Skills (15 total)

| Command | What It Does |
|---|---|
| `/quick-start [topic]` | Zero-setup research and brainstorm — no context required |
| `/context-builder` | Guided interview to populate your context library |
| `/write-prd [feature]` | PRD from customer signals + OKRs + portfolio context |
| `/write-frd [feature + PRD]` | Functional spec for engineering handoff |
| `/competitor-analysis [company]` | Deep-dive competitor profile with sales battlecard |
| `/brainstorm [problem]` | Divergent thinking — 5–7 distinct directions |
| `/customer-signal-extract [notes]` | Extract pain points, requests, churn signals from meeting notes |
| `/sprint-plan [goals + capacity]` | Sprint plan from roadmap + velocity baseline |
| `/sprint-retro [sprint name]` | Velocity analysis + pattern detection + retro discussion points |
| `/roadmap-update [trigger + rationale]` | Reprioritize roadmap with explicit trade-off statement |
| `/gtm-plan [launch name]` | Positioning + CS/sales enablement + launch checklist |
| `/product-strategy [question]` | Deep strategic analysis with frameworks from Lenny's + Reforge |
| `/okr-check` | KR status classification + at-risk diagnosis + course corrections |
| `/presentation-draft [topic + audience]` | Slide outline with talking points and data source tracking |
| `/weekly-retro` | End-of-week PM performance review + next week focus |

## Sub-Agents (4 total)

| Command | Persona | Verdict |
|---|---|---|
| `/review-as-engineering-lead` | Senior DataWeave eng lead reviewing a PRD/FRD | Ship-ready / Needs revision / Blocked |
| `/review-as-customer` | Enterprise retail buyer (Costco/Home Depot scale) | Would renew / Nice to have / Wouldn't notice |
| `/review-as-ceo` | DataWeave CEO — revenue, differentiation, resource efficiency | Prioritize / Deprioritize / Needs more data |
| `/review-as-designer` | Senior UX designer — flows, missing states, learnability | Ready for design / Needs flow work / Fundamental UX problem |

## Intelligence Sources

The OS references three data layers for context:
1. **Your context library** (`context-library/`) — your products, OKRs, sprints, customers, stakeholders
2. **Insider data** (`insider-data/`) — competitor profiles, PM frameworks, DataWeave tech context
3. **Newsletter archives** (`../lennys-newsletterpodcastdata-all/`, `../Substack content/`) — Lenny's Newsletter, Pragmatic Engineer, and other PM/engineering blogs used for strategy grounding

---

*Built on the Claude OS architecture — adapted from the Job Search OS v1.0 by Aakash Gupta | product-growth.com*
