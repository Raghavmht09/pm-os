# DataWeave AI Interfaces — Strategy & Discovery v1
**Audience:** Leadership team (CEO, Heads of Product, Engineering, GTM, CSM)
**Author:** PM (DataWeave)
**Date:** 2026-05-13 | **Status:** Discovery — pre-PRD, food for thought
**Companion artifacts:**
- Discovery Report (live audit + Slack signals + golden queries): `projects/ai-defensibility-okr/discovery-report.md`
- Competitive Scan (direct + cross-industry B2B): `research/competitive-scan.md`
- Confluence Module Research (PI / AA / MM journeys): `research/confluence-modules.md`
- Substack Synthesis (OpenAI/Notion/Glean/Salesforce/Zapier patterns): `research/substack-synthesis.md`

> **Reading guide.** Section 1 is the leadership 2-pager — read this if you have five minutes. Section 2 reframes the problem and the bet. Section 3 walks each of four feature concepts through value, journey, single metric, and next steps. Sections 4-6 are the appendix: research findings, persona journeys per module, competitive landscape, open questions. Tone aim: a category manager in Bentonville and a staff engineer in Bangalore should both be able to follow.

---

## 1. The Leadership 2-Pager

### 1.1 The bet, in one paragraph

DataWeave already has the hardest part of retail-intelligence AI in production — the LangGraph-based AI Wrapper that turns plain-English questions into SQL across Pricing Intelligence (Athena) and Assortment (DuckDB), with role-based visibility and a working RAG layer. **What's missing is interface defensibility.** Salsify shipped "Angie" in Oct 2025 and Syndigo shipped Synapse Agentic PXM in Fall 2025 — both attack from the PXM side. Profitero's "Ask Profitero" hasn't visibly evolved since 2023. In cross-industry B2B (Notion, Salesforce, Glean, Zapier, Microsoft), the consolidating pattern is clear: agent-buildable, workflow-embedded, MCP-distributable, trust-layer-published. **DataWeave's window is the next two quarters** — to be the first retail-intelligence vendor with a published MCP server, an analyst-facing agent builder over retail data, and embedded contextual nudges where category managers and ecommerce leads already work.

### 1.2 What we're proposing

Four AI interface concepts, each with a single primary metric. We rank them by literature validation × DataWeave technical readiness × competitive white space:

| # | Concept | Role in the strategy | Primary metric to move | Phase |
|---|---|---|---|---|
| **A** | **Embedded contextual nudges** in PI, AA, MM dashboards (mascot tested-then-decided) | Workflow piggyback wedge — meet users where they already work | **Weekly active analyst → action conversion** (% of nudges that lead to a saved view, scheduled report, or downstream repricing action within 24h). Target: **35% by Q4 2026** (current baseline: not measured) | Q2-Q3 2026 |
| **B** | **MCP server + CLI** exposing DataWeave's retail-intel graph | Domain-specific distribution moat — first-mover in retail intel | **Number of external agents querying DataWeave per week** (Claude/Cursor/Glean/Notion/in-house customer agents). Target: **50 unique tenant-agents/wk by Q4 2026** | Q2 (read-only) → Q3 (write w/ approval) |
| **C** | **Agent builder + workflow canvas** (Notion-style + Zapier-canvas-inspired) | The orchestration plane underneath A & B — internal CSM use first, then analyst self-serve | **% of recurring CSM/analyst tasks codified as agents** (vs. ad-hoc one-off chats). Target: **30% by Q1 2027** | Q3 internal alpha → Q4 CSM beta → Q1'27 analyst GA |
| **D** | **Chat + scheduled exports** (memory across sessions, schedule presentations/reports) | Tactical enabler folded into A and C — not a standalone wedge | **Median time from "first question" to "saved scheduled report"** for a new account. Target: **≤ 15 minutes** | Q3 2026 (overlay on existing chat) |

### 1.3 Why this ordering — three reasons

1. **The OpenAI Test.** If OpenAI launched a "free AI assistant" button tomorrow, would DataWeave still exist? Concept B (MCP/CLI) and Concept A (embedded contextual nudges) pass — both require DataWeave's proprietary retail data + the customer's specific tenant context. Concept C is internal orchestration (insulated). Concept D — pure chat + scheduling — fails. That's why D is folded in, not headlined.
2. **Competitive white space is concrete.** Across Profitero, Salsify, Syndigo, Intelligence Node, 42Signals: nobody has shipped a published MCP server, an analyst-facing agent builder over retail intel, or a true character mascot. (Salsify's "Angie" and Syndigo's "GoPilot" are names without faces and live inside PXM, not analytics.) DataWeave can credibly claim category firsts on B, C, and mascot-in-A within two quarters.
3. **DataWeave's existing investment compounds, not competes.** Phase 0 work (LangGraph agent, PostgreSQL STM, role-based visibility, golden-query eval) is the foundation all four concepts ride on. We are not proposing a parallel stack — we're proposing the interface layer above the AI Wrapper that's already shipping to internal Beta. Cost data from Confluence (~$1.16 per Assortment query, of which $1.15 is summarization) makes the caching-and-scheduling case for Concept D self-funding.

### 1.4 Five-line summary of what changes for each persona

- **External — Category manager (Costco/Home Depot/QVC/Whirlpool/Bush Brothers):** Opens Assortment dashboard, sees a contextual nudge "8 new SKUs appeared on Amazon you don't carry — want the list?" Scheduled weekly "exclusive-brand opportunities" arrives in Slack every Monday 7am.
- **External — Ecommerce lead:** A single chat thread spans PI → MM → AA. "Show me Bose SKUs where I'm not the price leader and the match looks weak" returns a triaged worklist and a one-click "fix all matches above 0.9 confidence" action.
- **External — IT / Security buyer:** Reads our published Trust Layer (PII masking, audit trail, tenant isolation, zero data retention) before signing the renewal. Plugs DataWeave MCP into their in-house Claude/Cursor for procurement queries.
- **Internal — CSM / analyst:** Builds per-customer "playbooks" once in the agent builder canvas (e.g., for Costco: "every Tuesday, pull MAP violations, summarize by category, post to #cs-costco"). Today this is a weekly hour-long manual process per customer.
- **Internal — PM / engineer:** Sees per-trace cost + latency + hallucination rate in observability dashboard, ships a new node to the canvas in the same PR as the API change.

### 1.5 What we are explicitly not proposing

- A standalone "DataWeave AI" chat product as the headline (fails OpenAI Test).
- A prominent mascot character without user validation (literature consensus: keep AI invisible; expose actions transparently, not characters loudly).
- Write access on day one for any agent. Read-only first; proposal-first for write; full autonomy never for cross-tenant operations.
- Customer-facing workflow canvas in Q2 (premature UX; ship internal-only first).
- A bespoke pricing model for AI (three concurrent SKUs at Salesforce-Agentforce hurt their procurement narrative; we'll lean on existing seat pricing + bundled credits like Notion).

### 1.6 What we need from leadership now

1. **Agreement** on the four-concept framing and the ranking (A, B, C are go; D folds in).
2. **Two engineers** for Concept B Phase 0 (OpenAPI spec + AGENTS.md + read-only MCP) — 4 weeks.
3. **Design sprint** on Concept A nudges + mascot test — Q2 2026.
4. **Decision** on the Trust Layer publication track (legal + security review of PII masking, audit log, retention policy). Independent of any feature ship.
5. **A confirmed CSM Beta cohort** of 6 accounts for Concept A and C iteration. (We're already running CSM Beta on AI Wrapper per Suraj's 2026-05-12 action items — extend it.)

---

## 2. Reframing the Problem

### 2.1 What's true today

The discovery work (live audit of stage.dataweave.com on 2026-05-13, Slack #ai-wrapper-core-team full history, Engineering Plan of Action, Confluence) gives us a precise picture:

- **AI Wrapper v1.1 is live, not v0.** Sada called this on 2026-05-04: "consider this v1.1 — consistent, predictable, traceable. OKR asks on top of this."
- **It is multi-agent (LangGraph, 13 nodes), role-aware** (Semantics / CSM / Client see different node depths), and grounded on Athena (PI) and DuckDB (AA via Preanalysis API).
- **It is CSM-Beta, not client-ready.** 6 demo accounts; weekly Wednesday cadence; thumbs up/down feedback explicitly flagged as insufficient by Suraj.
- **It is expensive at the wrong layer.** $1.16 per Assortment query, $1.15 of which is summarization — caching is the gap, not the model choice.
- **The Replit prototype is a year-old PM vision mockup**, not production. The mascot, Fast/Normal/Pro selector, and Plan Drawer in the prototype are unbuilt; the Admin Console is a 404.
- **Tech debt is real on the modules these features layer onto.** RPI SCALE score Feb 2026: 32/110 (CRITICAL); MM SCALE Mar 2026: 34/110 with a P0 SQL injection in `end_user_audit.py`. Velocity risk we must not paper over.

### 2.2 The competitive reframe

This is no longer a "should we build an AI assistant" question — both Salsify and Syndigo answered it for the market in 2025. The new question is:

> **Will DataWeave be the platform retail-intelligence agents call, or will retail intelligence be the data category that agents bypass DataWeave to reach?**

Glean answered this for enterprise search with a hosted MCP server. Notion answered it for productivity with Custom Agents + 11 MCP integrations. Salesforce answered it for CRM with Einstein Trust Layer + Agentforce. **Retail-intelligence has no analog yet.** That's the wedge.

### 2.3 The strategic shape of the bet

Drawing on Miqdad Jaffer's 3-Layer Distribution model:

| Layer | DataWeave answer |
|---|---|
| **GTM Wedge** | Domain-Specific (retail intel) amplified by Workflow Piggyback (embed in QVC / Home Depot / Costco existing dashboards) |
| **PLG Loop** | Data Flywheel — every category-manager correction, every approved/disapproved match, every scheduled report tunes the agent's per-tenant memory |
| **Moat** | **Three-layered.** Data (proprietary retail-intel graph crossing pricing, assortment, match) + Workflow (the analyst's playbook codified as their agent) + Trust (published Trust Layer beats every retail-intel competitor by default) |

We're not chasing horizontal AI excellence. We're claiming a vertical no one has staked.

---

## 3. Four Concepts — Value, Journey, Metric, Next Steps

For each concept: **(a)** what it actually is in plain language, **(b)** the problem it solves with evidence, **(c)** the expected user journey for our two anchor personas (category manager + ecommerce lead), **(d)** the single metric it moves, **(e)** the high-level next steps with effort tags.

### Concept A — Embedded contextual nudges (mascot test-then-decide)

**(a) In plain language.** Wherever a DataWeave user looks at a dashboard — Pricing Intelligence "Not a Price Leader" view, Assortment "Subcategory Gap" view, Match Management "Pending Review" queue — a small AI surface notices what changed and offers a one-click next action. Click → it pre-fills the chat with the right question; another click → it runs and shows the answer. The visual character ("mascot") that hosts these nudges is **tested with users before we commit to shipping it prominently** — the literature consensus is to keep AI invisible and let actions speak loudly.

**(b) The problem it solves.**

- **Live audit evidence (2026-05-13):** chat history sidebar shows the same query re-run 9+ times across users — "Show me assortment gap across category and sub-category." Users can't find their past answers, so they re-ask. A nudge that surfaces "you ran this Monday — view results" eliminates wasted spend.
- **Confluence evidence (PI Overview, Feb 2026):** hyperlocal under-pricing — where list price looks like leadership but end-user price (with fees + delivery) doesn't — is the insight CSMs spend their onboarding hours explaining. A persistent nudge on the PI dashboard surfaces this gap structurally.
- **Substack evidence (Notion AI):** the "Collaborative Workflow Loop" PLG pattern is the validated path — AI surfaces inline, one user's saved view triggers another user to engage, the loop compounds.

**(c) User journey — Category manager, Costco assortment team**

1. Opens AA dashboard Monday 9am.
2. Mascot lights up softly (grayed → faint glow): *"Your Gel Pen gap vs Amazon widened 12% week-over-week. 8 new SKUs appeared on Amazon you don't carry. Want the list?"*
3. Clicks → chat opens pre-filled with "List the 8 new Gel Pen SKUs on Amazon I don't carry, with price and popularity."
4. Approves → table appears in the right panel; one-click "Save as View" + "Schedule weekly" + "Email me Monday 7am."
5. Closes the tab. Tuesday morning, the new view arrives in Slack and email.

**(c) User journey — Ecommerce lead, QVC**

1. Opens PI Competitiveness dashboard.
2. Mascot: *"412 SKUs lost price leadership in the last 7 days. 38 are high-velocity (>$50k weekly GMV). Start there?"*
3. Clicks → filtered table appears, hyperlocal toggle on (end-user price view).
4. Spots 4 SKUs where the leader change is driven by a bad match (UOM mismatch). Mascot offers: *"Disapprove these 4 matches in MM?"* — one-click action posts to audit log + triggers refresh.

**(d) Single metric.** Weekly active analyst → action conversion: % of nudges that lead to a saved view, scheduled report, or downstream action (approve/disapprove match, save-as-view, schedule) within 24h. **Target: 35% by Q4 2026.** Baseline today: not measured (we'll instrument as part of Phase 0).

**(e) Next steps (high-level).**

| Step | Effort | Owner | Notes |
|---|---|---|---|
| 1. Instrument current chat for action conversion baseline | S | Eng + PM | Reuse existing trace pipeline (already captures cost, time, usage per Suraj 2026-03-16) |
| 2. Design sprint — nudge taxonomy + mascot character test (5 directions × 6 users) | M | Design + UXR | Anchor on Confluence-documented journeys, not invented ones |
| 3. Prototype 4 nudges per module (PI / AA / MM), gated behind feature flag | M | Eng | Mascot starts as "off" by default, opt-in for the test cohort |
| 4. Run CSM Beta cohort experiment — mascot on vs nudge-only vs control | M | PM + CSM | 6 accounts × 4 weeks; primary metric = action conversion |
| 5. Decision on mascot prominence → ship as GA | S | Leadership | If mascot fails the test, ship nudges without the character |
| 6. Confluence Trust Layer doc update — what nudge data is logged | S | PM + Legal | Pair with Concept B Trust Layer work |

Effort tags: S = 1-2 weeks, M = 3-6 weeks, L = 8+ weeks. All marked `[DRAFT FOR DISCUSSION]` until engineering sizing.

---

### Concept B — MCP server + CLI (the distribution moat)

**(a) In plain language.** An MCP (Model Context Protocol) server is a small standardized adapter that lets any AI agent — Claude, Cursor, ChatGPT, Glean, Notion, a customer's in-house copilot — query DataWeave's retail-intelligence data through a defined set of tools. A CLI (command-line interface) is the same set of capabilities but for power users / data-ops engineers who script their work in a terminal. Together they make DataWeave the platform that agents call into, rather than a data island agents have to bypass.

**(b) The problem it solves.**

- **Substack evidence (Aakash Gupta, Distribution Playbook 2026):** MCP usage went from zero to 97M monthly SDK downloads in its first year. Gartner forecast: 40% of enterprise apps will embed task-specific AI agents by end of 2026 (vs. <5% in 2025). Karpathy on stage: *"It's 2026. Build. For. Agents."*
- **Competitive evidence:** No retail-intelligence competitor has published an MCP server. Salsify and Syndigo published *to* OpenAI (their content lands in ChatGPT shopping). Their platforms are not externally callable. Glean — the closest cross-industry analog — is *both* an MCP host (consumes external tools) *and* a hosted MCP server (external agents call into Glean). Bidirectional. That's the architecture to mirror.
- **Confluence evidence:** MM is already callable via internal APIs to PI (parity sync). The plumbing exists; what's missing is the externalizable surface area + the AGENTS.md + the OpenAPI spec.

**(c) User journey — Ecommerce lead, Home Depot**

1. Their in-house Claude (set up by their dev team) asks: *"For these 50 ladder SKUs at Home Depot, give me competitor selling price, normalized price, days-since-leader change."*
2. The Claude agent finds the DataWeave MCP server in its tool list, makes one tool call, gets a structured JSON response in 1.4s.
3. Ecommerce lead reviews in their existing BI tool (Tableau), schedules the report.
4. DataWeave never appears in the workflow — but the data does. The CSM sees per-tenant agent calls in Usage Analytics; renewal is on the strength of the data feed.

**(c) User journey — Data-ops engineer, Whirlpool**

1. Opens terminal.
2. `dw mm upload amazon-fridges.csv --auto-approve-above 0.85 --dry-run` — runs a dry-run match for a fresh URL list.
3. JSON response: 380 matched / 20 errors. `dw mm upload amazon-fridges.csv --auto-approve-above 0.85` for the real run.
4. Replaces a 45-minute drag-drop UI workflow with one terminal command. Posts the script to their internal cron. Done weekly without UI.

**(d) Single metric.** Number of external agents querying DataWeave per week — unique tenant × agent client. **Target: 50 by Q4 2026.** Secondary: % of API value reachable via MCP (Aakash's 5-question audit).

**(e) Next steps.**

| Step | Effort | Owner | Notes |
|---|---|---|---|
| 1. 5-question audit — current state of API coverage, OpenAPI spec, CLI, browserless auth | S | PM + Eng | Aakash's playbook gives the rubric |
| 2. Author AGENTS.md + complete OpenAPI spec for PI, AA, MM read APIs | S-M | Eng | Doc-only deliverable; ships before any code |
| 3. Read-only MCP server, top 5 use cases (PI price feed, AA gap query, MM match query, MAP violation feed, scheduled-report metadata) | M | Eng (1-2 engineers, 4 weeks) | Outcome-oriented tools — one tool per workflow, not per endpoint (Cloudflare pattern: 2,500 endpoints → 2 meta-tools) |
| 4. CLI (`dw` binary) — JSON-first, `--human` override | S | Eng | Aakash anti-pattern: "CLI Checkbox" — never wrap 3 endpoints with tables and call it done |
| 5. Listing on PulseMCP + Docker MCP Catalog + DataWeave website | S | GTM + PM | "Shipping and not listing" is one of Aakash's 7 mistakes |
| 6. Read-write MCP Phase 2 — with destructiveHint + approval flows for MM match approval | M | Eng + PM | Read-only first (Linear/Stripe/Sentry pattern); never write on day one |
| 7. Trust Layer doc publication (PII masking, audit trail, zero retention, tenant isolation) | M | PM + Legal + Security | Pair with B + A — this is the procurement-winning artifact |

---

### Concept C — Agent builder + workflow canvas (orchestration plane)

**(a) In plain language.** Two related capabilities. **Agent builder** is a UI where someone (initially a DataWeave CSM; later an analyst) defines a recurring task in plain English — "every Monday at 7am, pull MAP violations for Costco grocery, summarize by category, post to #cs-costco" — and the system generates a structured spec they review and approve (objective, data sources, autonomy level, stop rules, schedule). **Workflow canvas** is a visual node-based diagram of that spec: a data-source node (PI / AA / MM) + a knowledge-source node (account playbook, glossary) + a compute node (the analyst's logic) + an output node (Slack / email / dashboard). Together they let DataWeave codify what today lives in CSM heads and Friday-afternoon spreadsheets.

**(b) The problem it solves.**

- **Substack evidence (Notion Custom Agents, Feb 2026):** the cleanest agent-builder UX shipped to date — NL description → AI drafts instructions + triggers + access scopes for human review. This is the pattern to lift directly.
- **Substack evidence (Paweł Huryn, Intent Engineering):** an agent specification has 7 components — Objective / Outcomes / Health Metrics / Strategic Context / Constraints / Autonomy Tier / Stop Rules. These map 1:1 to the UI fields. We don't have to invent the schema.
- **Competitive evidence (Glean Unified Agent Builder, Salesforce Agent Builder, Zapier Canvas):** every B2B platform in the benchmark set has shipped some version of this. Salsify and Syndigo have agents but not analyst-built ones. **No retail-intelligence vendor has an analyst-facing builder.** This is white space.
- **Confluence evidence (AI-Guided MM, May 2026):** an 8-node agentic flow is already drafted on paper — "System prioritizes → suggests → user validates → system learns." The agent builder turns this from a static doc into a live, configurable, per-customer workflow.

**(c) User journey — CSM, internal (Phase 1)**

1. Opens agent builder. Types: *"For Costco, every Tuesday 9am, pull SKUs where competitor price dropped >10% in the last 7 days, summarize by department, post to #cs-costco-pricing."*
2. AI drafts a structured spec: Objective (price-drop monitoring), Data source (PI for Costco), Outcomes (department summary in Slack), Schedule (Tue 9am), Autonomy (read-only, no actions), Stop rules (skip if <5 SKUs flagged).
3. CSM reviews, edits the threshold from 10% to 8%, saves.
4. Tuesday 9am: Slack post lands automatically. CSM can see every prior run + edit the agent.

**(c) User journey — Category manager, external (Phase 2 — analyst self-serve, Q1 2027)**

1. Opens agent builder on AA dashboard.
2. Picks a template: "Exclusive-brand opportunities scanner."
3. Configures: own catalog = Whirlpool refrigeration, competitor = Home Depot, threshold = "appears on competitor 2+ weeks, not in my catalog."
4. Schedules weekly Monday email. Adds a stop rule: "skip if <3 SKUs."
5. Each Monday, gets the email. Clicks "approve to buy" → routes to procurement.

**(d) Single metric.** % of recurring CSM / analyst tasks codified as agents (vs. ad-hoc one-off chats per session). **Target: 30% by Q1 2027.** Measured by tagging each chat session as "ad-hoc" vs "agent-run" + audit log of recurring tasks pre-builder vs post-builder.

**(e) Next steps.**

| Step | Effort | Owner | Notes |
|---|---|---|---|
| 1. UX research — interview 6 CSMs on their weekly playbooks per customer | S | UXR + PM | The playbooks are the agents. We need to see them |
| 2. Internal alpha — agent builder with 7-part Intent spec as the form (Objective / Outcomes / Health Metrics / Strategic Context / Constraints / Autonomy / Stop Rules) | M | Eng + Design | Lift Notion's NL → structured-spec → review-screen pattern |
| 3. Canvas v0 — 4 node types (data source, knowledge source, compute, output); read-only execution | M | Eng | Hard-code the per-module data-source schemas to start. No GA without per-account knowledge population SLA |
| 4. CSM Beta — 6 accounts, codify 3 recurring tasks per account | M | CSM + PM | Measure: how many tasks survive a month? How many get edited? |
| 5. Per-customer agent library — promotion from CSM-built → template → analyst-self-serve | L | PM | The data flywheel: every customer's CSM playbook becomes a template the next customer can pick |
| 6. Eval / Testing Center — faithfulness, context relevance, guardrail adherence (Salesforce pattern) | M | Eng + PM | Required before analyst self-serve GA |

---

### Concept D — Chat + scheduled exports (folded enabler)

**(a) In plain language.** A conversation thread that remembers what the user asked yesterday, exposes a clear "schedule this" action on every chart or table, and delivers the output where they actually work (email, Slack, auto-download on next login). Not a standalone product — a capability woven through Concepts A and C.

**(b) The problem it solves.**

- **Live audit evidence:** users re-ran identical queries 9+ times because they couldn't find past results. Persistent chat memory + saved-session versioning eliminates this.
- **Confluence evidence (AI Wrapper, $1.16/query, $1.15 from summarization):** scheduling solves the cost-per-query economics — one expensive query, many cheap retrievals.
- **Substack evidence (OpenAI 3-Layer):** standalone chat as a wedge fails the OpenAI Test. As a *capability* inside a domain-specific product, it accelerates the workflow.

**(c) User journey — Ecommerce lead, QVC**

1. Tuesday morning: continues yesterday's chat thread ("Bose SKUs analysis"). Threads survive sessions; the AI knows the SKU set she pinned yesterday.
2. Asks: *"Add the assortment gap for the same SKU set."* — joins PI thread to AA query without retyping.
3. Pins the result, clicks "Schedule" → every Tuesday 9am email + PowerPoint export.
4. On her next login, the latest PowerPoint is in her downloads folder (per the user's specific vision — auto-download on re-entry).

**(d) Single metric.** Median time from "first question" to "saved scheduled report" for a new account. **Target: ≤ 15 minutes.** Today, this loop doesn't exist as a single user flow.

**(e) Next steps.**

| Step | Effort | Owner | Notes |
|---|---|---|---|
| 1. Audit AI Wrapper STM (PostgreSQL OPS-4894) — confirm cross-session memory works end-to-end | S | Eng | The plumbing is provisioned; need to verify it survives service restart (Confluence flagged "no checkpointer wired") |
| 2. Add cross-product chat threading (PI → AA → MM in one thread) | M | Eng | Confluence open question #9 — high leverage |
| 3. Schedule action — convert any chat output (chart/table/summary) into a recurring scheduled run | M | Eng + Design | Reuse Replit prototype's "Schedule Report" action tray; build the back-end cron + delivery channels |
| 4. Delivery channels: Email, Slack, S3, auto-download-on-login | M | Eng | Slack integration already exists for 3 accounts per Confluence 2026-03-16 |
| 5. Presentation export (PowerPoint with charts + narrative) | M | Eng | Pair with Concept A nudges — "schedule a quarterly review deck for Costco?" |
| 6. Caching layer — pre-compute scheduled outputs to amortize $1.16/query | S-M | Eng | Confluence-flagged cost gap; pays for itself on first scheduled re-read |

---

## 4. Appendix — Module Research Summary (from Confluence)

Full detail in `research/confluence-modules.md`. Headlines:

### Pricing Intelligence (PI)
- **Live features:** Competitiveness tracking, UOM normalization, custom pricing rules, end-user price (with fees + delivery), opportunity sizing, widgets w/ CSV export, action-log report.
- **Top journey:** "Not a Price Leader" daily workflow — analyst filters SKUs where own price isn't lowest, drills into competitor matches, exports action log, hands to repricing. (Source: PI ↔ MM Shopbop PRD, Feb 2026.)
- **Critical gap:** SCALE 32/110 (CRITICAL), test coverage 0/20, security 2/15. Ship velocity is constrained.
- **AI fit:** Concept A nudges on hyperlocal under-pricing; Concept B MCP feed for pricing engines (Revionics, Competera) and BI tools.

### Assortment Analytics (AA)
- **Live features:** Category/brand/SKU coverage, gap analysis, OOS tracking, top-seller mining, trend detection (vector similarity), AI Wrapper text-to-SQL on DuckDB.
- **Top journey (Jul 2025, `[STALE]` — only persona-anchored doc; needs CSM re-validation):** Category manager asks NL questions about subcategory gaps, brand depth, OOS-driven opportunities, exclusive-brand-to-carry.
- **Critical gaps:** Cost dominated by summarization ($1.15/$1.16 per query); no caching; AI Wrapper limited to descriptive (no diagnostic / prescriptive yet); planner hard-codes PI schema regardless of product (latent bug).
- **AI fit:** Concept C agent builder strongest fit — codify the senior analyst's "exclusive brands to carry" playbook for juniors; Concept A nudges on weekly category deltas; Concept B MCP for retailer merchandising agents.

### Match Management (MM)
- **Live features:** Approve / Disapprove, match review queue, bulk approve (filtered "all 1,284"), bulk URL upload (50k rows / 50MB), auto-approve threshold rules, Match Overview dashboard, audit log (12-month, 24h rollback).
- **Top journey:** Daily match review — analyst filters by retailer / confidence / brand-match, bulk-approves, monitors audit log. Page 5 (May 2026) sketches an 8-node "AI-Guided" flow already.
- **Critical gaps:** SCALE 34/110 + P0 SQL injection in `end_user_audit.py` (Mar 2026); match confidence not exposed in UI yet; auto-approval rules engine proposed but not shipped.
- **AI fit:** **Highest fit of all three modules for Concepts A + C + B.** Page 5 essentially blueprints a workflow canvas; mascot is the natural surface for confidence-score explanations (e.g., "Title 45% + Brand 30% - Size 10%"); MCP exposes `mm.approve_matches()` for customer agents.

### Cross-module observation
- AI Wrapper already implements **role-based visibility** (Semantics: all 13 nodes; CSM: 5; Client: 3). Foundation for trust-layer-by-role.
- Schema fragmentation flagged: Athena returns `"Sucess"` (typo) vs DuckDB `"success"`. Brittle routing risk for any agent built on top.
- **Persona gap:** "Category manager" appears only in the stale Jul 2025 AA doc; "Ecommerce lead" appears nowhere in current Confluence. PI docs say "Pricing Analyst." Open question — needs CSM definition before Concept A nudges can be persona-targeted with confidence.

---

## 5. Appendix — Competitive Landscape (Direct + Cross-industry)

Full detail in `research/competitive-scan.md`. Headlines:

### Direct retail-intel competitors

| Vendor | Status of AI Interface (2026-05) | What it means for us |
|---|---|---|
| **Profitero** | "Ask Profitero" chat exists; hasn't visibly evolved since 2023 launch | **White-space signal.** The original analog has stalled |
| **Salsify** | "Angie" + Intelligence Suite (BYO model: OpenAI/Anthropic/Google/Azure); OpenAI Channel publishes content to ChatGPT shopping (Oct 2025) | PXM-side play; doesn't compete for retail-intel analytics buyers directly |
| **Syndigo** | "GoPilot" embedded assistants + **Synapse Agentic PXM** (Fall 2025): coordinated multi-agent w/ "structured human oversight" | Most structurally ambitious in the category; still PXM-flavored, not analytics |
| **Intelligence Node** | No public evidence of conversational AI | `[VERIFY: post-Interpublic acquisition roadmap]` |
| **42Signals** | "AI-driven insights" marketing; no conversational interface documented | `[VERIFY Q3 2026]` |

**Conclusion:** Nobody in this set has shipped an analyst-facing agent builder, a workflow canvas, a published MCP server, a Trust Layer, or a mascot. **All five are claimable category-firsts within two quarters.**

### Cross-industry benchmarks worth lifting from

| Vendor | Lift this pattern | Avoid this anti-pattern |
|---|---|---|
| **Notion Custom Agents** (Feb 2026) | NL spec → AI-drafted reviewable structured agent (Objective / Triggers / Access). Best agent-builder UX shipped. | Credit pricing ($10/1000) creates anxiety per run — users undertrigger |
| **Salesforce Agentforce + Einstein Trust Layer** | PII masking + audit trail + zero retention is the procurement winner | Three concurrent pricing models ($2/conv, $0.10/action, $125/seat) confuses buyers |
| **Glean** | **Bidirectional MCP** — host AND hosted server. Unified agent builder (graph + NL toggle) | Fully loaded TCO $350-480k/yr (FlexCredits, 100-seat min) — most-complained pricing in the benchmark set |
| **Zapier Canvas + Agents + MCP** | Canvas as "systems-of-systems" map — NL builds visual flow | "Each MCP tool call = 2 tasks" hidden token math creates distrust |
| **Microsoft Copilot Studio + Power Automate** | Power Automate is the canonical node-based canvas; AI as a node; centralized agent control plane (M365 Agent) | Connector sprawl (1500+) makes governance hard |
| **ChatGPT Workspace Agents** (May 2026) | Build, preview, share, schedule (up to 10 active); runs in ChatGPT + Slack | Free until May 6 2026 then credit-based — same trigger-anxiety risk as Notion |
| **Linear (MCP, Apr 2026)** | Agents assigned to issues like teammates; orchestration plane | Linear authors none — third-party-agent dependency |
| **Slack AI** | Recaps, summaries, channel-context search, NL → Workflow Builder | Buried in enterprise SKU |
| **Hiver** | Inline AI reply suggestions grounded in past tickets | No agent builder; ceiling is reply automation |

### Patterns to lift directly (from substack-synthesis)

1. **NL spec → structured agent review screen** — Notion, Salesforce, Glean.
2. **Bidirectional MCP** — Glean's posture; the right architecture for DataWeave.
3. **Closed-instance / tenant-scoped chat** — Profitero, Salesforce, ChatGPT Business.
4. **Scheduled + triggered agent runs** — Notion, ChatGPT, Copilot Studio, Zapier.
5. **Audit trail of prompt + masked prompt + response + toxicity** — Salesforce Trust Layer (the procurement winner).
6. **Templates as cold-start solution** — Notion, Copilot Studio. Pre-built per-persona agents.
7. **Eval / Testing Center for agent quality** — Salesforce Testing Center.
8. **Visual canvas as systems map** — Zapier Canvas, Power Automate.

---

## 6. Appendix — Open Questions

### Persona & journey
1. **Category manager / Ecommerce lead daily cadence** — Confluence is thin. Need CSM-led interview round (6 customers minimum) to nail JTBD before Concept A nudges go to design.
2. **CSM playbooks per customer** — these *are* the agents for Concept C internal alpha. Need 6 CSMs to surface 3 recurring tasks each. Time-boxed: 2 weeks.
3. **Replit prototype's "5-star + tag + free-text" feedback vs current "thumbs up/down"** — Suraj already flagged thumbs as insufficient (2026-05-13). What's the redesign decision?

### Technical readiness
4. **Has AA AI Wrapper shipped diagnostic + prescriptive analytics?** Confluence Jul 2025 said "next couple of weeks." 10+ months later. Verify in Apr-May 2026 sprint updates.
5. **Caching layer for $1.16/query summarization** — ship status?
6. **Checkpointer for LangGraph STM** — Confluence flagged not wired. Critical for Concept D cross-session memory.
7. **PI / MM SCALE remediation timeline** — PI 32/110 + MM 34/110 (P0 SQL injection). How aggressively can AI features layer on top before remediation?
8. **Schema-fragmentation typo (`Sucess` vs `success`)** in AI Wrapper routing — when fixed?
9. **TaskPlannerNode hard-coding PI schema for Assortment queries** — latent bug per Confluence; fixed?

### Strategy & GTM
10. **Pricing model for AI capabilities** — Notion credit anxiety vs Salesforce SKU sprawl. Lean on bundled seat + soft caps? Decision required before Concept B GA.
11. **Trust Layer publication track** — independent of feature ship. When does legal + security review start?
12. **Mascot test cohort** — which 6 customers, when?
13. **MCP / CLI surface area decisions** — which of the 30+ DataWeave APIs make the first 5 outcome-oriented tools?

### Cross-cutting
14. **Quality gate** — every Concept ships at Observability Level 2 (token cost, latency, hallucination per trace) minimum. Tool decision: Phoenix (OSS), Helicone, Arize, Braintrust, LangSmith?
15. **Eval / golden-query expansion** — current set is 12 queries × Assortment. Need a per-module + per-persona set before scaling agent builder (Concept C) beyond CSM Beta.

---

## 7. Appendix — Anti-patterns to Avoid (drawn from research)

1. **Vague tool / nudge descriptions.** "Monitor digital shelf" is useless. Stripe-grade: "Review payments, troubleshoot declines, process refunds." PM owns every description.
2. **Constraints in prompts instead of orchestration.** Tenant isolation, PII masking, cross-tenant boundaries cannot live in language. Enforce in code.
3. **Write access on day one.** Read-only first. Proposal-first for actions affecting retailer-visible content. No autonomous price changes ever.
4. **Browser-dependent auth for MCP / CLI.** Use OAuth 2.0 device flow + API keys. Browser sessions die at 3am.
5. **Building agent surfaces in isolation from the product codebase.** New GUI capability = new MCP tool = same sprint, same PR. Otherwise drift in three months.
6. **The CLI Checkbox.** Wrapping 3 endpoints in human-readable tables and calling it done. JSON-first; `--human` is the override.
7. **Skipping observability before scaling autonomy.** Without traces, the failure mode is "frog in boiling water."
8. **Mascot prominence without user validation.** Literature consensus: "AI invisible / actions transparent." Test before shipping the character.
9. **Anchoring the wedge on general AI capability.** Fails the OpenAI Test. Anchor on Domain-Specific (retail intel) + proprietary data moat.
10. **Three-SKU pricing model at launch.** Salesforce-Agentforce hurt their procurement narrative. One pricing model + transparent credit preview.

---

## 8. What "Next Steps" Means at a Per-Feature Level

For each concept, "next steps" decomposes into the same skeleton, drawn from the user's own example:

1. **Feasibility check with engineering** — capacity, dependencies, tech-debt overlap.
2. **Architecture decision** — where does it sit in the LangGraph node DAG; what new tools; what new data sources.
3. **UX deep-dive** — design sprint, journey mapping, persona-anchored prototypes.
4. **Detailed user journey** — frame-by-frame, instrumented with the chosen single metric.
5. **UI mockup → click-through prototype.**
6. **Validate with CSMs + 2 customer users** before any GA decision.
7. **Effort + timeline correlation** — each step gets sized; the leadership board sees the rolling estimate.

Every concept above carries this skeleton. The detail will land in per-concept PRDs when we get the green light on the framing.

---

## Decision asks (summary, repeated from §1.6)

1. **Framing approved?** A + B + C go; D folds in.
2. **Concept B Phase 0 staffing** — 2 engineers, 4 weeks for OpenAPI + AGENTS.md + read-only MCP.
3. **Concept A design sprint** — Q2 2026.
4. **Trust Layer publication track** — start legal + security review now, independent of feature ship.
5. **CSM Beta cohort confirmed** — extend the existing 6 demo accounts (Suraj's 2026-05-12 action items) to cover A and C iteration.

---

*Document version 1 · 2026-05-13 · Companion research files under `projects/ai-defensibility-okr/research/`. Decision journal entry to follow under `decisions/roadmap/` once §1.6 asks land.*
