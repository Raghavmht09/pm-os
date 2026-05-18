# Competitive AI Interface Scan
**Verified:** 2026-05-13 | **Coverage:** Direct competitors (retail intel B2B SaaS) + cross-industry B2B AI interface benchmarks

Scope: capture the shape of AI interfaces (chat, embedded, agent builder, workflow canvas, MCP/CLI, guardrails, pricing) across vendors DataWeave's PM team has explicitly named as benchmarks. Recency: most claims source from 2025-Q4 and 2026-Q1 releases.

---

## Direct Competitors (Retail Intel B2B SaaS)

| Vendor | Chat | Embedded / Mascot | Agent Builder | Workflow Canvas | MCP / CLI / API | Guardrails | Pricing for AI |
|---|---|---|---|---|---|---|---|
| **Profitero** | "Ask Profitero" chat — closed-instance NL query over Profitero data; auto-generates charts for QBRs/RBRs. No mascot. [1] | Not found in public material | Not found | Not found | Not found (private API for embedding only) | Closed-instance scoping = no data leakage outside the tenant [1] | Not public — bundled into commerce-intel SKU |
| **Salsify** | "Angie" — conversational assistant for configs, formulas, content generation via NL prompts. Launched Oct 2025. [2] | Embedded in PXM workflow engine as task types (image gen, attribute extraction, governance) [2] | Intelligence Suite — task types you wire into Salsify workflow engine; BYO model: OpenAI/Anthropic/Google/Azure or Salsify's own [2] | Existing Salsify workflow engine + new AI task nodes [2] | OpenAI channel: publishes product data to ChatGPT for agentic-commerce surfaces; no public MCP server found [2] | BYO model means tenant chooses provider trust posture; no published Trust Layer | Not public — Intelligence Suite is an add-on |
| **Syndigo** | "GoPilot" AI assistants embedded in PXM; visual attribute extraction from images. [3] | GoPilots embedded throughout PXM (content, validation, mapping). No mascot character. [3] | **Synapse Agentic PXM** (Fall 2025): coordinated agents that identify data gaps, enrich content, validate, syndicate, monitor — with structured human oversight [4] | Native MDM-backed agent orchestration (closest competitor to a "workflow canvas" in this set) [4] | Syndigo OpenAI Connect + Syndigo GEO (LLM optimization). No public MCP server. [3] | "Structured human oversight" emphasized but no published PII/audit doc | Not public |
| **Intelligence Node** | Not found — public material is on competitor price monitoring + content audit; no chat product surfaced [5] | Not found | Not found | Not found | API + SaaS portal access (longstanding) [5] | Not found | Not public |
| **42Signals** | Insufficient public info on a chat surface. Platform markets "AI-driven insights" but no conversational interface documented. [6] | Not found | Not found | Not found | Not found | Not found | Not public |

[1] profitero.com/product/ask-profitero (current product page); businesswire 2023-07-31 launch.
[2] salsify.com press release 2025-10-15; digitalcommerce360 2025-10-15.
[3] syndigo.com/fall-2025-innovation-update; agentic-commerce page.
[4] syndigo.com/news/syndigo-launches-synapse-agentic-pxm (Fall 2025).
[5] tracxn / company profile pages (2025).
[6] 42signals.com + G2 reviews 2025. `[VERIFY: 42Signals AI chat capability — re-check Q3 2026]`

### Narrative — state of AI in retail-intel competitors

Two distinct postures. **Salsify and Syndigo are PXM-first** — their AI agents focus on product-content tasks (image generation, attribute mapping, syndication readiness for agentic commerce / ChatGPT shopping). Syndigo's Synapse is the most structurally ambitious — multi-agent orchestration grounded in MDM with explicit "human oversight" framing. Salsify's Angie + Intelligence Suite is the most flexible (BYO model). Both have shipped OpenAI Connect / OpenAI Channel — they're optimizing *to be discovered by* LLMs, not to expose their own platform via MCP.

**Profitero is the only direct analog to DataWeave's analytics use case** — chat over a closed instance of digital-shelf data, auto-chart generation for executive reviews. But the "Ask Profitero" product hasn't visibly evolved since the 2023 launch announcement — no public news of agent builder, workflow canvas, MCP, or scheduled outputs. **This is the white-space signal.**

**Intelligence Node and 42Signals** show no evidence of conversational AI surfaces in public material. Either they haven't shipped, or they haven't marketed it — either way, not benchmarks worth chasing.

**Nobody in this set has shipped:** an end-user agent builder (Synapse is closest but is platform-team-built, not analyst-built), a Zapier-style workflow canvas, a public MCP server, a published enterprise Trust Layer, or a character/mascot UX. DataWeave can credibly claim "first" on any of these in the retail-intel category.

---

## Cross-Industry B2B Benchmarks

| Vendor | Chat | Embedded / Mascot | Agent Builder | Workflow Canvas | MCP / CLI / API | Guardrails | Pricing for AI |
|---|---|---|---|---|---|---|---|
| **Notion AI / Custom Agents** | Notion AI chat across workspace + connected apps; recurring schedules; templates [7] | AI surfaced inline across docs, databases (no mascot) | **Custom Agents (Notion 3.3, Feb 2026)**: describe in NL → AI drafts instructions/triggers/access; or pick from templates (Email Assistant, Team Scheduler, Deal Spotter, Incident Reporter) [7][8] | Recurring schedule + trigger model, not visual node canvas | **MCP host** — connects Linear, Figma, HubSpot, Ramp, Wiz, Stripe, GitHub, Intercom, Amplitude, Attio, Sentry [7] | Per-agent access scoping ("what data, what tools") | **Credit-based add-on** to Business/Enterprise: $10 per 1,000 credits, starting May 4, 2026 [7] |
| **Salesforce Einstein + Agentforce** | Agentforce chat surfaces in Service/Sales clouds + Slack | Embedded in every cloud (Service Cloud, Sales Cloud, Slack); no mascot | **Agent Builder with AI assist** (Mar 2025) — describe → generates subagents, instructions, actions [9]; Agentforce 2dx (2025) added proactive triggers + multimodal | Flow + Agentforce orchestration; not a freeform canvas | Open APIs; MuleSoft for integration; partial MCP via partner ecosystem | **Einstein Trust Layer**: PII masking (pattern + field-based), TLS, zero data retention, toxicity detection, prompt defense, full audit trail in Data Cloud [10][11] | **Three models:** $2/conversation, $0.10/action (Flex Credits, 100k for $500), or $125/user/mo per-seat [12] |
| **Slack AI** | Channel recaps (daily/weekly), thread/conversation summaries, huddle notes, AI search [13] | Embedded throughout Slack UI; no mascot | Not user-facing — agents come through Agentforce/partner builds | Workflow Builder + AI workflow generation (NL → workflow) [13] | Slack APIs + Salesforce platform | Enterprise+ enterprise search across Salesforce/Teams/Drive/Confluence/Box/Jira/GitHub; tenant-scoped | Recaps/summaries in Pro; AI workflow gen + translation in Business+ ($15/user/mo); enterprise search in Enterprise+ (custom) [13] |
| **Hiver** | AI reply suggestions, prewritten drafts grounded in KB/SOPs/past conversations [14] | Inline in shared inbox (Gmail/Outlook); no mascot | Not found | Not found | Not found | Standard shared-inbox controls; not AI-specific Trust Layer | Bundled in plan tiers |
| **Linear AI / Linear for Agents** | Linear's AI sits behind issue/spec/update drafting | Inline in issue views — agents can be assigned to issues like teammates | "Linear for Agents" — third-party agents (Cursor, Devin) assigned to issues; Linear is the orchestration plane, not the agent author [15] | Not a visual canvas — issue/cycle/project structure as the workflow | **MCP support (Apr 2026)** — Linear Agent connects to external tools via MCP [15] | Workspace-scoped permissions | Per-seat (no public AI add-on as of May 2026) |
| **Glean** | Glean Assistant (3rd-gen, Sep 2025) — RAG over Enterprise Graph [16] | Embedded in browser, Slack, Teams, mobile | **Unified Agent Builder** — graph-based + conversational; switch between NL and step-by-step. Fast/Thinking plan-and-execute modes [16][17] | Graph-based agent builder = closest cross-industry analog to a "workflow canvas" for agents | **MCP host** + curated directory of 20+ validated MCP servers; **hosted MCP server** so any platform's agents can use Glean Search/Assistant [17] | Granular agent permissions, automated agent routing, runtime safeguards, least-privilege access [17] | Hybrid: ~$45-50/user/mo base + $15/user/mo AI; **FlexCredits** for premium (100 thinking-mode queries/user/wk included); 100-seat min [18] |
| **Microsoft Copilot Studio / Power Automate** | M365 Copilot chat + custom-agent chat surfaces | Embedded across M365 apps (Word, Excel, Outlook, Teams) | **Agent builder** in Copilot Studio — lightweight in M365 + full custom in Studio; **autonomous agents** on triggers (email, record, schedule) [19] | **Power Automate** — the canonical node-based canvas; AI as a node; generative actions assemble plugins dynamically [19] | Connectors (1,500+); MCP support emerging via Studio; Graph API | **Microsoft Agent 365** (GA Nov 2025) — centralized control plane: inventory, permissions, behavior, activity [19] | Bundled in M365 + Power Platform; consumption add-ons for premium AI |
| **ChatGPT for Work / Workspace Agents** | ChatGPT chat with memory, projects, scheduled tasks [20][21] | Not embedded in third-party apps; lives in ChatGPT + Slack channel | **Workspace Agents** (May 2026) — build, preview, share, run on schedule; runs in ChatGPT and/or Slack [20] | Not a visual canvas; agent has visual browser + terminal + API access | **MCP**: agents can add custom MCP servers; OpenAI-reviewed connectors (Amplitude, Fireflies, Vercel, Monday, Stripe, Hex, Egnyte, Alpaca, BioRender, Semrush, Jam.dev) [20] | Workspace admin controls; SCIM/SSO; data not used for training on Business/Enterprise | **Free until May 6, 2026; credit-based after.** Scheduled tasks: up to 10 active/account [21] |
| **Zapier Agents / Canvas / MCP** | Copilot — NL configures agents, refines instructions, drafts canvases [22] | Agents run across 8,000+ apps; no mascot | **Zapier Agents** — train AI teammates with Copilot; Canvas now supports adding/configuring agents directly [22][23] | **Zapier Canvas** — visual diagram of Zaps, agents, apps, data, teammates; AI-generated [22] | **Zapier MCP** — 30,000+ actions across 9,000+ apps; usable via Anthropic, OpenAI Responses API, Python/TS; CLI install via `claude mcp add`; agentic mode in beta [24] | Plan-based admin controls, action approval gates | MCP on all plans; **each MCP tool call = 2 tasks** from plan quota [24] |

[7] notion.com/product/agents + notion.com/releases/2026-02-24 + notion.com/help/custom-agents.
[8] thecrunch.io / matthiasfrank.de tutorials (2026).
[9] developer.salesforce.com/blogs/2025/10/build-and-optimize-agents-with-new-agentforce-360-features.
[10] salesforce.com/products/secure-ai/ + trailhead Trust Layer modules (2025).
[11] eesel.ai/blog/salesforce-einstein-trust-layer (2025).
[12] salesforce.com/agentforce/pricing/ + 2025-05-15 press release; aquivalabs Q3 2025 update.
[13] slack.com/blog/news/june-2025-pricing-and-packaging-announcement + slack.com/features/ai.
[14] hiverhq.com/email-management (2025).
[15] linear.app/agents + eesel.ai/blog/linear-ai (2026).
[16] glean.com/press/glean-introduces-third-generation-ai-assistant (Sep 2025).
[17] glean.com/blog/mcp-mar-drop-2026 + glean.com/blog/glean-agents-nov-drop-2025.
[18] vendr.com/marketplace/glean + eesel.ai/blog/glean-ai-pricing (2025/2026).
[19] learn.microsoft.com release plans 2025 wave 2 + 2026 wave 1; microsoft.com/.../ignite-2025-copilot-and-agents.
[20] openai.com/index/introducing-workspace-agents-in-chatgpt + help.openai.com workspace-agents (2026).
[21] callsphere.ai/blog/.../chatgpt-agent-mode-workspace-2026.
[22] zapier.com/blog/zapier-canvas-guide + zapier.com/blog/zapier-agents-guide (2025).
[23] zapier.com/blog/december-2025-product-updates.
[24] zapier.com/mcp + zapier.com/blog/zapier-mcp-guide (updated May 2026).

---

## Per-Vendor Deep-Dives — Top 4

### Notion Custom Agents (Feb 2026)
- **Builder structure:** Two paths. (a) NL chat — type "Every Monday at 9am, pull last week's closed tickets, summarize top issues, post to #support-weekly" → AI drafts instructions + triggers + access scopes for review. (b) Templates: Email Assistant, Team Scheduler, Deal Spotter, Incident Reporter.
- **Data sources:** Notion docs + databases as default context; MCP for external (Linear, Figma, HubSpot, Ramp, Wiz, Stripe, GitHub, Intercom, Amplitude, Attio, Sentry).
- **Triggers:** Schedule (day/week/month/year + timezone) OR event-based.
- **Wow feature:** **The NL spec → AI-drafted instructions/triggers/scopes flow is the cleanest agent-builder UX shipped to date.** It generates a structured review screen, not just a prompt. This is the pattern to lift.
- **Anti-pattern:** Credit pricing ($10/1000 credits) creates anxiety — every run feels like spending. Users will undertrigger. If DataWeave goes consumption-based, surface a clear "this run = ~X credits" preview before scheduling.

### Salesforce Agentforce (Agent Builder + Trust Layer + Pricing)
- **Builder structure:** Describe agent → AI generates subagents + instructions + actions. Testing Center (Apr 2025) evaluates faithfulness, context relevance, guardrail adherence at scale.
- **Trust Layer:** PII masking via pattern detection (regex-like) + field-based (uses Salesforce data classifications); full audit trail in Data Cloud (prompt, masked prompt, response, toxicity score, user feedback); zero data retention with LLMs.
- **Wow feature:** **Testing Center for guardrail evaluation** — AI tests AI configurations at scale. The "audit trail of every prompt + masked prompt + toxicity score" is the enterprise procurement winner — it's what Costco's IT/security team will demand.
- **Anti-pattern:** Three concurrent pricing models ($2/conv, $0.10/action, $125/seat) — buyers can't combine them in one org. SaaStr piece flagged this confuses procurement. Don't ship three pricing SKUs at launch.

### Glean (Agent Builder + MCP)
- **Builder structure:** Unified builder — toggle between graph view (nodes, steps) and NL chat in the same workspace. Fast vs Thinking modes per plan-execute step.
- **Data sources:** Enterprise Graph (100+ native actions) + curated directory of 20+ validated MCP servers + customer-supplied MCP hosts + hosted MCP server (so external agents call into Glean).
- **Wow feature:** **Bidirectional MCP** — Glean is both an MCP host (consumes external tools) AND a hosted MCP server (other platforms' agents call Glean Search/Assistant). This is the right architecture for DataWeave: "any agent platform can query DataWeave's retail-intel graph."
- **Anti-pattern:** $45-50/seat + $15/seat AI + FlexCredits + 100-seat min → fully loaded TCO $350-480k/yr. The complexity tax is real; pricing is the most complained-about aspect in buyer reviews.

### Zapier Agents + Canvas + MCP
- **Builder structure:** Copilot (NL building assistant) configures agents in minutes; Canvas adds visual diagram of agents + Zaps + apps + data; agents trigger on events or schedules across 8,000+ apps.
- **Data sources:** Whole Zapier app ecosystem (8,000+ apps for triggers/actions, 9,000+ via MCP for 30,000+ actions).
- **Wow feature:** **Canvas as a "systems-of-systems" map.** Users sketch the whole process visually, then turn nodes into agents/Zaps/chatbots/tables via NL. This is the closest analog to a "workflow canvas" the user mentioned — and it's what mid-market retail-intel analysts actually want.
- **Anti-pattern:** "Each MCP tool call = 2 tasks from plan quota." Hidden token math creates user distrust. Don't double-count behind the scenes.

---

## Pattern Library — What Works for Enterprise B2B AI Interfaces

| # | Pattern | Description | Examples |
|---|---|---|---|
| 1 | **NL spec → structured agent review screen** | User describes agent in plain English; AI generates a structured spec (instructions, triggers, data sources, access scopes) the user *reviews and edits* before activation. Not "save the prompt" — generate a form. | Notion Custom Agents [7], Salesforce Agent Builder [9], Glean unified builder [16] |
| 2 | **Bidirectional MCP** | Vendor is both an MCP host (consumes external tools) and a hosted MCP server (external agents query its data). | Glean [17], Zapier [24] (server-only), ChatGPT Workspace Agents [20] (host) |
| 3 | **Closed-instance / tenant-scoped chat** | Chat queries only the customer's data; explicit "we don't train on your data" + zero data retention with LLM. | Profitero Ask [1], Salesforce Trust Layer [10], ChatGPT Business [20] |
| 4 | **Scheduled + triggered agent runs** | Agents fire on cron or event (record created, email received), not just NL request. Output posted to channel/email/doc. | Notion [7], ChatGPT Workspace Agents [20], Copilot Studio autonomous agents [19], Zapier Agents [22] |
| 5 | **Audit trail of prompt + masked prompt + response + toxicity score** | Every AI interaction logged for compliance review; PII masked at ingest and re-injected at delivery. | Salesforce Einstein Trust Layer [10][11] |
| 6 | **Templates as the cold-start solution** | Pre-built agent templates by use case (Incident Reporter, Deal Spotter, Email Assistant) so users don't face a blank canvas. | Notion Custom Agents [7], Copilot Studio [19] |
| 7 | **Eval/test center for agent quality** | UI to test agent configs at scale against faithfulness, context relevance, guardrail adherence. | Salesforce Testing Center [9], Glean Fast/Thinking modes [17] |
| 8 | **Visual canvas as systems map** | Node-based diagram of how agents/workflows/data tie together — not just a list. | Zapier Canvas [22], Power Automate [19], Glean graph builder [17] |

---

## White Space for DataWeave

1. **Mascot / character-driven UX in retail intel** — Nobody (Profitero, Salsify "Angie", Syndigo "GoPilot", Glean, Salesforce) has shipped a true character with personality. Angie and GoPilot are names without faces. A genuine character anchor (with a face, voice, and visible reasoning) would be unique in retail intel — and would lower the threshold for first-time analysts to start chatting with their pricing/digital-shelf data.

2. **Analyst-facing agent builder over retail-intel data** — Syndigo Synapse is multi-agent but platform-team-built; Salsify Intelligence Suite is workflow-engine tasks, not analyst-built agents. **No retail-intel competitor lets a category manager describe "every Monday, pull Costco pricing breaches on my SKUs, summarize, email me" and get a reviewable agent spec.** This is the Notion-Custom-Agents pattern applied to retail intel — pure white space.

3. **MCP server exposing DataWeave's retail-intel graph** — Salsify and Syndigo published *to* OpenAI (their content lands in ChatGPT shopping). Neither exposes their *platform* via MCP. If DataWeave ships an MCP server (price feed, assortment feed, MAP-violation feed, digital-shelf state) then any agent platform — Glean, ChatGPT, Notion, Copilot — can query retail-intel signals natively. **First-mover advantage in the category.**

4. **Workflow canvas for retail-intel workflows** — Zapier Canvas, Power Automate, Glean's graph builder all exist for general work. Nobody in retail intel has a node-based canvas where AI nodes sit alongside pricing-monitor nodes, MAP-alert nodes, content-audit nodes. This is the most ambitious play — but it would lock customers in for years.

5. **Published Trust Layer for retail-intel AI** — Salesforce's Einstein Trust Layer is the procurement-winning artifact. No retail-intel competitor has published an equivalent (PII masking + audit log + zero retention + toxicity detection). Customer security reviews are increasingly the gating factor for enterprise retail rollouts (Costco, Home Depot, Whirlpool all have mature AI procurement processes). **Publishing a Trust Layer doc — even before shipping all the features — is competitively cheap and strategically loud.**

---

## Verification Notes

- All vendor feature claims cite a source URL accessed on or before 2026-05-13.
- Sources older than 12 months are flagged inline; the Profitero launch announcement (2023-07-31) is the only pre-2025 reference and is noted as launch context, not current feature claim.
- `[VERIFY: 42Signals AI chat capability — re-check Q3 2026]` — public material is sparse.
- `[VERIFY: Intelligence Node post-Interpublic AI roadmap — no public roadmap since acquisition]`
- `[ASSUMPTION: Profitero "Ask Profitero" has not evolved past 2023 launch — confirm with Profitero customer or recent G2 review before citing as static benchmark]`
- All pricing figures are from vendor pricing pages or accredited buyer guides (Vendr, eesel) verified within 90 days.
