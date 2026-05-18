# AI Defensibility OKR — Discovery Report
**Verified:** 2026-05-13 | **Sources:** Google Doc PRD, Confluence (AI-wrapper, AI Wrapper for DSA, HLD DSA Data Modelling), Replit prototype audit (v2.1.0), Engineering Plan of Action spreadsheet, Slack #ai-wrapper-core-team (full history)

> **Note on the two UIs:** The Replit prototype (prism-ai-dw.replit.app) is a **PM vision mockup** — ~1 year old per Sanket Patil's own Slack message. The **live product** is at `stage.dataweave.com/query?base_view=query`. Stage was **DOWN** on 2026-05-13 (Suraj Kumar, 12:43 IST). Live UAT pending stage recovery.

---

## 0. What the Team Is Calling This

Engineering calls the current build **v1.1** — "more consistent, predictable, and traceable" (Sada, May 4). Not v0. The Replit prototype is a separate design artifact, not production code.

---

## 1. Engineering Plan of Action — Status as of 2026-05-13

**Source:** [Task Plan spreadsheet](https://docs.google.com/spreadsheets/d/1gwhgLaKJHvGOPbCGMpf2LY30gD0dCR7ihUmwaR8sMvY/edit?gid=830806040)

| Phase | Key Tasks | Status |
|---|---|---|
| **Phase 0: Foundation** | Postgres + LangGraph memory | ✅ Done |
| | LangGraph cleanup (remove redundancy/bugs) | ✅ Done |
| | Session management + ground truth (Demo-US) | ✅ Done |
| | Data Quality Fixes for Demo-US | 🔴 Open |
| | Evaluation Framework (RAGAS, agentic eval, CSAT/NPS) | 🔴 Open |
| | LangGraph-side evaluation on ground truth | 🔴 Open |
| | UI-side evaluation (compare UI output vs LangGraph) | 🔴 Open |
| | Fix failures from evaluation | 🔴 Open |
| | Performance: Python/DuckDB exec, memory intent classification, parallel nodes, model routing | 🔴 Open |
| **Phase 1: AA Onboarding** | Account Knowledge Creation | ✅ Done |
| | Onboard ALL assortment accounts (XL effort) | 🔴 Open |
| | Automated data quality — all accounts | 🔴 Open |
| **Phase 2: PI Onboarding** | PI SQL from Athena (different from DuckDB) | 🔴 Open |
| | 1 PI account knowledge + ground truth | 🔴 Open |
| **Phase 3: PI Scale** | All PI accounts | 🔴 Open |
| **Phase 4: Multi-Service** | MCP tool node, PI+AA joint insights, multi-user concurrency | 🔴 Open |

**Bottom line:** Phase 0 is ~60% done. The eval framework — the entire quality/accuracy loop — is fully open. Phase 1 account onboarding in progress. PI is Phase 2+.

**Demo accounts for testing:**
`rpi_usa@apparel_demo` · `RPI_USA@US_GROCERY_DEMO` · `Pricing@demo.usa` · `rpi_can@rona_live` · `asm_usa@products_demo` · `asm_usa@lowes_seller_poc`
Internal demo: `asm_products_demo_internal@dataweave.com`

---

## 2. Slack #ai-wrapper-core-team — Key Signals (2026-01-07 to 2026-05-13)

**Source:** Private channel, full history read.

| Date | Signal | Implication |
|---|---|---|
| 2026-05-13 | Stage DOWN — Suraj confirmed | UAT blocked today |
| 2026-05-13 | Suraj scheduling call to redesign feedback ("thumbs up/down not sufficient") | Engineering already agrees feedback UX needs upgrade |
| 2026-05-12 | Action items: enable on 6 demo accounts, CSMs test for 1 week, weekly cadence Wednesdays | We're at "CSM beta" stage — not client-ready yet |
| 2026-05-04 | Sada: "consider this v1.1 — consistent, predictable, traceable. OKR asks on top of this." | v1.1 is baseline; OKR features (mascot, modes, etc.) are additive |
| 2026-04-21 | Data discrepancies found in dashboard sync eval — Jira PROD-20538, DE investigating | Golden query accuracy blocked by data quality issues |
| 2026-04-21 | Namrata: "no response to query" on stage | Reliability issue persists |
| 2026-03-16 | Inference profile added (cost/token tracking) ✅ | Cost data IS in logs — just not surfaced in UI |
| 2026-03-16 | Time, cost, usage added to logs for UI traces ✅ | Foundation for cost observability exists |
| 2026-03-16 | Slack integration for 3 accounts ✅ | Distribution path beyond web UI exists |
| 2026-03-11 | Stream API not accessible inside DSI pod — blocked UI integration at the time | Now resolved per later update |
| Older | PI uses Athena SQL (different stack from AA's DuckDB) | Two separate query paths to maintain |

---

## 3. Live Stage UI Audit — stage.dataweave.com/query (2026-05-13)

**Account audited:** asm_products_demo_internal (Beta) | **Auditor:** Sub-agent with handoff to authenticated Chrome session

### Layout

Three-panel + right trace panel:

| Panel | Contents |
|---|---|
| Left icon rail (58px) | Ask Me (active), Dashboard, Reports, Help docs, Avatar |
| Chat history sidebar (220px) | Folders / Favorites / Archived / Recent Chats + New Chat button |
| Main chat area | Greeting, chat input, 3 sample question chips, conversation thread |
| Right panel (300px, post-query) | **Query Execution Traces** — 5-step pipeline with timing per step |

### Right Panel — Query Trail (the key feature the user flagged)

Appears only after a query is submitted. Shows **5 steps with green checkmarks and timing**:

| Step | Example Duration | What it shows |
|---|---|---|
| Identifying Intent | 2.0s | In-scope or out-of-scope verdict + rationale |
| Retrieving Context | 1.1s | Context retrieved for the query |
| Clarifying & Enriching Query | 7.3s | Enriched interpretation of the query |
| Executing SQL Query | 1.4s | Row count returned |
| Generating Result | 15.4s | Final answer generated |

**Total observed TTFT for in-scope query: ~27 seconds.** Dominated by Clarifying (7.3s) + Generating (15.4s).

### Chat Input + Empty State

- Greeting: "Hi, [Account]! How can I assist you today?" + **Beta badge**
- Input placeholder: "Ask me anything..."
- **3 sample question chips** (static, not personalized):
  1. "What is my out of stock percentage by category compared to my competitors?"
  2. "How does my assortment compare to competitors by category and sub-category?"
  3. "What is the percentage overlap of my assortment by category with my competitors?"
- Info (i) button → popover explaining what Ask Me can do + "Know more" link to docs

### In-Scope Query Response (tested: assortment comparison)

- **Data Table**: Paginated (15 rows, 5/page). Columns: Subcategory / Is Overlap / Category / SKU Count. Download → CSV only. Collapsible.
- **Narrative summary**: Titled, 2–3 sentence analysis with bold highlights.
- **Table 3-dots menu**: Download CSV, collapse/expand row height. No Excel/PDF/chart image.

### Out-of-Scope Query (tested: "What are different sources we have?")

Agent **refuses** with hard block:
> "I can only assist with topics related to price gaps, price intelligence, product comparison, assortment gaps, out-of-stock gaps... Your query about 'different sources' does not fall within these areas."

No graceful redirect, no "here's what I can help with instead."

### Chat History Sidebar — Actual Past Queries

100+ entries. Patterns observed:

- **Assortment gap** (majority): "Show me assortment gap across category and sub-category", "Compare my assortment with competitors..."
- **SKU/source**: "Which SKUs are shared across seed and competitors?", "What are different categories you have?"
- **Pricing**: "Which products are my competitors discounting?", "How do my category discounts compare?"
- **OOS**: "What is my out of stock percentage by category..."
- **Brand share**: "rank the brands by market share"
- Repeated duplicates of same queries (9+ instances of the same assortment gap query) — users can't find past results so they re-run

### Feedback UI

Thumbs up (green) / Thumbs down (red). No follow-up modal, no text capture, no reason. Silent API call on click.

### Responsive

Broken at ≤1024px — sidebar overlaps chat area. No hamburger/drawer. Mobile unusable.

---

## 4. What Exists Today (Architecture)

### Product Name
**PRISM AI Analytics Engine** — v2.1.0 (visible in sidebar footer of live Replit prototype)

### Architecture (from Confluence + HLD)
- **Front-end:** Vibe-coded Replit prototype. React-based multi-page app.
- **Orchestration:** LangGraph-based multi-agent chatbot (confirmed from Jira ticket OPS-4894: "short-term memory + thread metadata" provisioned via managed PostgreSQL on AWS RDS)
- **Data layer:** Current DSA data on PostgreSQL — Confluence HLD explicitly flags this as a scaling bottleneck for dynamic NL queries. Long-term: unified data architecture (columnar/lakehouse) needed.
- **Context protocol:** MCP (Model Context Protocol) referenced in AI Wrapper for DSA PRD for context-aware interactions
- **LLM routing:** Not explicitly documented in Confluence — inferred as single-model from v0 description

### What's Live in the Replit Prototype (v2.1.0)

| Screen | What's There |
|---|---|
| **Conversation** | Multi-turn chat, context panel (right), session history (left), auto-update versioning (v3/v4/v5), rich chart + table rendering, action tray |
| **Action Tray** | Save as View, Share, Download, Pin to Dashboard, Schedule Report |
| **Feedback** | Quick tags (Accurate / Helpful / Unclear / Incomplete) + free-text field + overall rating (not 5-star — tag-based) |
| **Saved Sessions** | Left panel, session cards with version labels and auto-update badge |
| **Executive Command Center** | Portfolio dashboard — client portfolio, revenue trends, market intelligence, Q3 strategic initiatives |
| **Assortment Analytics** | Dedicated tab visible in nav |
| **Accuracy & Eval** | Confidence %, Freshness SLA, Lineage Completeness, Definition Adherence; Golden Queries pass/fail; Latency P50/P95; Feedback tag distribution; Triage queue |
| **Guardrails** | System Policies (Tenant Data Isolation, PII Masking, Competitive Data Boundaries, AI Response Content Filters), Content Filters, Access Controls, Policy Monitoring |
| **Role Management, Resources, Data Sources, Shared Content** | In nav — not audited in detail |
| **Usage Analytics** | Daily query volume, active users, query category distribution (Descriptive 42%, Diagnostic 28%, Trend 20%, Actionable 10%), billing/capacity metrics |

---

## 2. PRD vs. Prototype — Gap Matrix

| PRD Feature | In Prototype? | Gap Detail |
|---|---|---|
| NL querying, multi-turn context | ✅ Live | — |
| Session save + auto-update + versioning | ✅ Live | Version diffs visible in session cards |
| Save as View / Share / Download / Pin | ✅ Live | All four in action tray |
| Schedule Report | ✅ Live | In action tray |
| Feedback — tags + free text | ✅ Partial | Tags: Accurate/Helpful/Unclear/Incomplete. No 5-star PRD spec rating visible |
| Accuracy harness (confidence, golden queries, latency) | ✅ Live | Good fidelity to PRD spec |
| Guardrails (tenant isolation, PII, content filters) | ✅ Live | 5 policies active |
| Role-based access (RBAC) | ✅ Live | Personas in sidebar (Category Mgr, CSM) |
| Context setup (business/solution/customer) | ✅ Partial | Right panel shows Customer Context, Solution Context — not a guided setup flow |
| Prompt library | ❓ Unknown | Resources tab in nav but not audited |
| RAG resources ingestion | ❓ Unknown | Resources tab exists |
| Admin Console | ❌ **404** | Route not implemented |
| **Fast / Normal / Pro mode selector** | ❌ Missing | Not in prototype at all |
| **Mascot-driven UX / contextual nudges** | ❌ Missing | Chat is passive — no proactive prompts |
| **Token cost observability** | ❌ Missing | Usage Analytics shows business metrics only. No cached vs. input vs. output token tracking |
| **Plan Drawer (NL→Plan→SQL transparency)** | ❌ Missing | PRD calls for it; not surfaced |
| **Pricing Intelligence (PI) module** | ❌ Missing | Only Assortment Analytics in nav |
| **DSA module** | ❌ Missing | Only AA; DSA Confluence PRD exists but not in prototype |
| TTFT / generation time observability | ❌ Missing | Latency P50/P95 in Accuracy tab but no per-session TTFT |
| Connectors (customer sales/traffic/ads) | ❌ Out of scope | Correctly deferred per PRD |

---

## 3. UI Friction Points (Live Audit)

**Critical (blocks demos or confuses prospects):**
1. **Admin Console = 404.** Route `/admin` throws "Did you forget to add the page to the router?" — visible to any user who clicks it. Client-demo-breaking.
2. **Only Assortment Analytics module live.** Nav shows AA; no PI or DSA tabs. Client landing on a specific product's data will hit empty state.
3. **No mode selector (Fast/Normal/Pro).** The vision's core differentiator — cost-to-value trade-off — has no UI surface.

**High (friction in daily use):**
4. **Sidebar overloaded.** Three sections (Dashboards / Analytics / Configuration / Administration) with 12+ nav items. No visual hierarchy between persona dashboards and core analytics. A new user doesn't know where to start.
5. **Feedback UX underweight.** Tags are binary clicks — no severity or specificity. A "5-star + category + free text" feedback loop (per PRD) would generate better triage signal. Current system misses the 5-star overall rating.
6. **Context panel (right side) not editable in-session.** Shows solution/customer context but unclear if users can override mid-session. PRD calls for incremental context.
7. **No plan drawer / SQL transparency.** Power users (BA, PM) will distrust outputs without seeing the query. PRD explicitly specifies NL→Plan→SQL visibility.

**Medium (UX polish):**
8. **Session card design.** Left panel shows versioned sessions (v3/v4/v5) but the visual diff between versions isn't surfaced inline — must click in. 
9. **Query category split (Usage Analytics) shows 10% Actionable.** This is the most valuable category per the PRD's prescriptive analytics vision — but it's the smallest slice. Surface this gap to drive roadmap priority.
10. **No onboarding / empty state design.** A new account lands on the chat with no guided first prompt. Quick Tips concept from the Confluence AI-wrapper design isn't visible.

---

## 4. Architecture Concerns (from HLD)

1. **PostgreSQL won't scale for NL queries.** HLD flags current DSA RDBMS as the bottleneck. The LangGraph agent hits this on every dynamic query. Pre-MVP work needed: columnar query layer (BigQuery / Redshift) or materialized views.
2. **LangGraph + short-term memory provisioned** (OPS-4894 — AWS RDS PostgreSQL for STM + thread metadata). Good foundation for multi-turn context, but STM ≠ persistent session storage. Session versioning needs a separate persistent store.
3. **Schema fragmentation.** PRDs reference "disparate SQL schemas" across PI / AA / DSA. No unified semantic model documented yet. The PRD's metric registry and KPI glossary (Section 9) is the right solution — not built yet.
4. **No cost instrumentation.** Token consumption (cached/input/output), cost per session, and budget guards (from PRD Section 8) are absent. This is a pre-scale requirement — without it, open-ended Pro Mode queries will generate unbounded cost.

---

## 5. Fast / Normal / Pro Mode — Design Direction

The prototype has none of this. Based on PRD + architecture constraints:

| Mode | Model | Latency Target | Use Case | Cost Signal |
|---|---|---|---|---|
| **Fast** | Claude Haiku 4.5 + cached system prompt | ≤ 3s | Single-metric lookups, filter queries, re-runs of saved sessions | Lowest |
| **Normal** | Claude Sonnet 4.6 | ≤ 6s (cached) / ≤ 20s (fresh) | Standard RAG + SQL queries across one product schema | Mid |
| **Pro** | Claude Opus 4.7 | Up to 60s, streaming partial results | Multi-schema joins, anomaly investigation, impact analysis, prescriptive recs | Highest |

Mode selector should be a **persistent user preference** (saveable per session context) with inline cost indicator. Not a per-query toggle — too much cognitive load.

---

## 6. Mascot UX — Design Direction

Not in prototype at all. From PRD vision and user flow:

- **Trigger:** Dashboard page load / context change (user switches from PI to DSA view)
- **Behavior:** Grayed-out by default. Hover → expands to show 2-3 contextual nudges derived from the current dashboard state
- **Nudge examples:**
  - On PI dashboard: "3 SKUs show price anomalies vs last week — want a drill-down?"
  - On DSA dashboard: "Content compliance score dropped 4pts for Home Depot — investigate?"
  - On Assortment dashboard: "Competitor added 12 new SKUs in Electronics — run gap analysis?"
- **Interaction:** Click nudge → pre-fills chat input → user confirms or edits → executes
- **Key constraint:** Must not interrupt workflow. Mascot stays dormant during active chat sessions.

---

## 7. Observability — What to Build

PRD Section 11 + user prompt defines three metric families:

**Quality:**
- Content relevance score (1–5, human + LLM-judge)
- Completeness (% required fields returned)
- Accuracy (golden query pass rate per solution pack)
- Hallucination rate (answers citing undefined data)

**Performance:**
- TTFT (time to first answer token)
- Total generation time
- Query success rate (non-empty, non-error)

**Cost:**
- Tokens: cached / input / output per session
- Cost per session (by mode)
- Budget guard alerts (configurable per tenant)

All three currently absent from the Usage Analytics screen. The Accuracy & Eval page has quality + latency partially — needs cost layer added.

---

## 8. Priority Recommendation (for next session)

| Priority | Item | Rationale |
|---|---|---|
| P0 | Fix Admin Console 404 | Blocks demos |
| P0 | Add token cost observability | Without this, Pro Mode is financially uncontrolled |
| P1 | Define Fast/Normal/Pro mode spec + UI | Core differentiator from PRD vision; no eng work without a spec |
| P1 | PI module scope (which queries go in MVP) | AA is live; PI is the second most-requested by CSMs |
| P1 | Plan Drawer spec | Trust signal for power users; relatively low eng lift |
| P2 | Mascot UX spec (contextual nudges) | High saleability value; needs design pass first |
| P2 | Metric registry / KPI glossary v1 | Pre-req for accurate multi-schema queries |
| P3 | DSA module (v1 queries) | Third module; AA + PI first |

---

## 9. Open Questions (inherited from PRD + audit)

1. What LLM is powering the current Replit prototype? (Claude / GPT-4o / Gemini?) — determines Fast Mode upgrade path
2. Is the LangGraph agent multi-agent today or single-agent? PRD calls for manager-subagent for Pro Mode.
3. Who owns the semantic model / metric registry? Eng or PM?
4. Admin Console — what was supposed to be there? (404 suggests it was planned but deferred)
5. Customer data connectors (sales/traffic) — which customer has asked first?
6. Preferred "Pin to Dashboard" target — which existing DW dashboard surfaces?

---

---

## 10. Golden Queries — UAT Set (Assortment, Demo-US)

**Source:** [Spreadsheet gid=1025609393](https://docs.google.com/spreadsheets/d/1gwhgLaKJHvGOPbCGMpf2LY30gD0dCR7ihUmwaR8sMvY/edit?gid=1025609393) | Eval columns: Short-Term Memory · Scope Identifier · Context Retrieval · Query Enrichment · Task Planner · SQL Generator · SQL Executor · SQL Validator · Final Response · Correctness · Relevancy

**Simple / metadata queries (low risk):**
1. What are different sources we have?
2. What are different categories we have?
3. In each category what are different subcategories we have?
4. What are Category, source-wise in-stock/out-of-stock SKU distribution?
5. Get me Source, Brand-wise SKU count distribution
6. Get me Source, Category, Brand-wise SKU count distribution
7. Get me Subcategory-wise Source and Brand SKU count distribution for specific category

**Competitor gap queries (medium risk — requires JOIN logic):**
8. What products are available only on the competitor's site but not in our seed data?
9. Which products are unique to our assortment and not listed by the competitor?
10. Show me exclusive products by brand that we don't carry but the competitor does
11. List all categories where the competitor has more subcategories than us
12. Which subcategories are missing in our assortment vs competitor?

**UAT execution plan (when stage is back up):**
- Run queries 1–6 first (validate metadata + aggregation pipeline)
- Run queries 7–12 (validate competitor JOIN + scope identification)
- For each: capture TTFT, check SQL generated, compare output vs ground truth
- Log correctness + relevancy scores per the eval sheet columns

---

*Next step: Run `/write-prd AI Defensibility OKR — Fast/Normal/Pro Mode` or `/brainstorm mascot-ux contextual-nudges` depending on priority call. UAT on golden queries when stage recovers.*
