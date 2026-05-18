# Substack Archive Synthesis — AI Interface Concepts
**Verified:** 2026-05-13 | **PDFs read:** 01-intent.txt, 02-14principles.txt, 03-distribution.txt, 04-context.txt, 05-observability.txt, 06-3layer.txt

Concepts under evaluation:
1. **Embedded nudges + mascot** — inline AI suggestions per UI component, expandable to chat
2. **Chat + scheduled exports** — conversational agent with memory, schedule presentation/report generation
3. **Agent builder + workflow canvas** — Notion-style agent definition + node-based workflow per module
4. **MCP / CLI distribution** — DataWeave AI exposed via MCP server / CLI

---

## Per-PDF Findings

### 1. The Intent Engineering Framework for AI Agents (Paweł Huryn)
**Maps to concepts:** 3 (agent builder — directly), 2 (chat agent — autonomy/stop rules)

**Key principles:**
- Intent = Objective + Outcomes + Health Metrics + Strategic Context + Constraints (Steering vs Hard) + Decision Types/Autonomy + Stop Rules. Seven-component spec, not a prompt.
- "Steering applies only when confidence >= 0.6. Below that, stop rules take over." Confidence-thresholded autonomy.
- Decision autonomy tiers: Full Autonomy / Guarded Autonomy (logged, reversible) / Proposal-First (requires approval) / No Autonomy (human-required).
- Core context lives in the prompt; reference context is retrievable; dynamic context is injected by orchestration. Don't dump everything.

**Patterns / anti-patterns:**
- Anti-pattern: "If a constraint matters, it cannot live only in a prompt." Hard constraints must be enforced in orchestration, not language.
- Anti-pattern: Vague objectives ("Handle customer support tickets") vs. objective with the why ("...so they can get back to work without creating more frustration").
- Pattern: Outcomes must be observable state changes from user's perspective, not agent activities. Two-to-four outcomes max — "More than that and you're either micromanaging or unclear on what actually matters."

**Verbatim quotes:**
- "The reasoning layer proposes. The orchestration layer enforces."
- "Agents optimize whatever is specified and whatever is left implicit."
- Validation test: "If another qualified human can make the same decisions under uncertainty using this intent specification, the agent is likely to behave consistently too."

---

### 2. 14 Principles of Building AI Agents (Paweł Huryn)
**Maps to concepts:** 3 (agent/workflow builder — directly), 2 (chat memory/tools), 4 (MCP tool descriptions)

**Key principles:**
- Principle 1: "Don't Use Agents If You Don't Have To. A good old if/else is faster, cheaper, and more reliable."
- Principle 2: "Small, Specialized, and Decoupled" — team of specialists, not one agent to rule them all. Planner plans, summarizer summarizes, verifier checks.
- Principle 5: "Orchestration > Autonomy" — move known logic (if/then, loops, retries) out of agent prompts into the orchestration layer.
- Principle 7: "Treat tool descriptions as micro-prompts." MCP defaults are insufficient — tell the agent when and why to use the tool, what to avoid, examples.
- Principle 12: "Limit the Tools an Agent Can Access." Bombarding agent with 90+ tools (3 MCP servers × 30 tools) destroys accuracy. Security + token cost.
- Principle 13: "Create Scoped API Keys" — role-based, per-agent. Subscriptions analyst (read-only) vs Sigma reporter (run SQL).
- Principle 14: "Create a Prompt Repository" — version-controlled, not random strings in workflows.

**Patterns / anti-patterns:**
- Hybrid RAG is the production default: "90% of the time you need a Hybrid RAG — semantic search + metadata filtering (date, author, document type)."
- Structured JSON output > free text. "JSON acts like a contract between agents."
- Anti-pattern: Real RAG problem is data curation, not retrieval algorithms.

**Verbatim quotes:**
- "Above 2-3 tool calls, every model except [GPT-5] makes mistakes. If the process requires more than 5 tools and dynamic planning, a single AI agent will most likely fail. No matter the model."
- "Possible: LLM-powered process automation. Doesn't exist yet: Fully 'agentic AI'. Essential: Orchestration (a real moat)."

---

### 3. PM's Playbook for AI Agent Distribution 2026 (Aakash Gupta)
**Maps to concepts:** 4 (MCP/CLI — entire post is about this)

**Key principles:**
- 5 distribution channels: Retail → Web → Mobile → AI Discovery → **Agent Distribution**. CLIs, MCP servers, AGENTS.md replace search/app stores as discovery surface.
- The agent-accessible stack layers in order: API foundation → AGENTS.md + OpenAPI spec (Layer 1: docs) → CLI (Layer 2) → MCP server (Layer 3).
- 5-question audit: % of value via API? CLI with JSON output? OpenAPI spec? Browserless auth? AGENTS.md present?
- Phase strategy: read-only first, then write with destructiveHint annotations + confirmation flows, then write access. "Linear, Stripe, Sentry all started read-only."
- MCP architecture patterns: **Outcome-Oriented** (one tool per workflow, not per endpoint), **Minimalist** (Cloudflare: 2,500 endpoints → 2 meta-tools, ~1,000 tokens), **Platform Play** (MCP + Terraform + UI components), **Knowledge Bridge** (optimize formats — Notion v2 converted hierarchical block JSON to markdown to save tokens).

**Patterns / anti-patterns:**
- Anti-pattern: Vague tool descriptions. "Manages tasks" loses to "Create a task in a project. Use when adding a work item. Requires project_id and title."
- Anti-pattern: Browser-dependent auth ("works in demos because someone already has a session cookie. Then an agent tries to connect at 3am").
- Anti-pattern: "The CLI Checkbox" — wrapping 3 endpoints with human-readable tables and calling it done. CLI must default to JSON; `--human` is the override.
- Research-backed: "At 30+ tools with overlapping descriptions, agents start selecting the wrong one. At 100+, failure is nearly guaranteed." Speakeasy reduced Playwright MCP from 26 tools dramatically improving accuracy.

**Verbatim quotes:**
- "If your product cannot be parsed, authenticated, and executed by an agent, you are invisible in the fastest-growing software channel."
- Docker MCP team: "The agent, not the user, is the one calling your tool. Your documentation needs to support both audiences."
- Karpathy: "It's 2026. Build. For. Agents."
- Stats: MCP went from zero to 97M monthly SDK downloads in year one. 10,000+ active MCP servers. Gartner: 40% of enterprise apps will embed task-specific AI agents by end of 2026 (vs <5% in 2025).

**Decision framework: 7 mistakes ranked by frequency:**
CLI Checkbox · Vague Description · Write Access Day One · Browser-Dependent Auth · Building in Isolation (drifts in 3 months) · Shipping and Not Listing (PulseMCP, Docker MCP Catalog) · No Agent Metrics.

---

### 4. Context Engineering for PMs (Paweł Huryn)
**Maps to concepts:** 1 (dashboard context for nudges), 2 (memory across sessions), 3 (knowledge sources in agent builder)

**Key principles:**
- Context types: Instructions (Role/Objective/Requirements) + Examples (positive & negative) + Knowledge (external + task) + Memory + Tools + Tool results. All compete for the same finite context window.
- Memory split: **Short-term** (chat history, reasoning state) vs **Long-term** (Semantic = facts/preferences, Episodic = past interactions, Procedural = instructions captured from prior runs).
- Memory is not part of the prompt — it's attached by orchestration or accessed as a tool (e.g., scratchpads, "Think Tool" pattern).
- RAG ≠ context engineering. RAG = Retrieval + Context Assembly + Generation. Context engineering owns steps 1-2, stops before generation.

**Patterns / anti-patterns:**
- Context assembly techniques: Filtering · Deduplicating · Re-ranking · Scoring · Compressing · Combining · Splitting · Chunking · Chunk stitching · Templating · Tool management.
- Anti-pattern: Connecting full Atlassian MCP — 49 tools, 5,354 characters, 1,387 tokens just for the tool list.
- Pattern: "Provide minimal, relevant, and well-structured information." Be intentional — every type fills the context window and costs tokens.

**Verbatim quotes:**
- Tobi Lütke: "the fundamental skill of using [AI] well is to be able to state a problem with enough context... that without any additional pieces of information, the task is plausibly solvable."
- "Prompt engineering was about writing better inputs. Context engineering is about building better systems that intentionally select, structure, and supply the right information to the model."

---

### 5. AI PM's Ultimate Guide: Observability (Aakash Gupta + Aman Khan)
**Maps to concepts:** 1 (nudges that fire on dashboard state — needs observability of when/why), 2 (chat agent — debug session memory failures), 3 (workflow canvas — trace nodes)

**Key principles:**
- Evals ≠ observability. "Evals are exams. Observability is the day-to-day monitoring that makes those exams meaningful."
- 3 levels: **Basic Tracing** (what happened) → **Context Capture** (why it happened — actual inputs/outputs/tokens/cost) → **Production Intelligence** (pattern detection, alerts, eval generation from failures).
- 5-minute setup: Phoenix (free OSS) / Helicone / Arize / Braintrust / LangSmith. Use OpenTelemetry auto-instrumentation.
- Advanced techniques: A/B shadow testing (5% traffic to experimental model), Response Topology Mapping (cluster queries by similarity, map decision paths, find dead zones), Failure Mode Genealogy (one root cause = many surface complaints — "Fix the context window issue once, solve 7 different user complaints").

**Patterns / anti-patterns:**
- The Infinite Loop Agent: "no conversation state management. The system treated each message as brand-new ticket." Trace exposed it in one glance.
- The Hidden Architecture: Trace revealed 3 unintentional parallel agents spun up by the AI framework — team didn't know they existed.
- Pattern: "What if evals were your requirements instead of PRDs?" Move from prose to assertions like `assert parse_city("SF") == "San Francisco"`.

**Verbatim quotes:**
- "AI fails gracefully: it looks right even when it's wrong... Without observability, you're the frog in boiling water."
- AI engineer quote: "I can't believe my PM is still sending me Google docs of PRDs and saying go implement this thing."
- "Traces reveal true architecture: Often different from what you designed."

---

### 6. OpenAI 3-Layer Distribution Framework (Miqdad Jaffer + Paweł Huryn)
**Maps to concepts:** Cross-cutting — informs which of the 4 concepts is most defensible

**Key principles:**
- 3 layers: **GTM Wedge** (how you enter) → **PLG Loop** (how you compound) → **Moat Flywheel** (how you defend).
- 4 wedge archetypes: **Painkiller** (Granola — meeting notes), **Workflow Piggyback** (Figma AI — embed in canvas), **Domain-Specific** (Harvey — M&A contract review), **Community-Centric** (Midjourney — public Discord).
- 7 PLG loops: Viral Output, Collaborative Workflow (one user exposes another in shared docs), Data Flywheel, Embedded Distribution, Community, Consumption-to-Conversion, [+ 1 implicit].
- 3 moats: **Data** (every interaction structured into reusable signal), **Workflow** (become the OS for the job), **Trust** (citations, confidence scores, audit logs, compliance baked in).
- The "OpenAI test": "If OpenAI launched this as a free button tomorrow, would we still have a reason to exist?"

**Patterns / anti-patterns:**
- Wedge characteristics: Asymmetry of Pain vs Cost · Proof on First Use (<30 seconds) · Obvious Storytelling Handle · Expansion Optionality · Resistance to Immediate Displacement.
- Anti-pattern: "Going Broad Instead of Sharp." "AI design" loses to "We fix auto-layout pain in Figma."
- Anti-pattern: "Ignoring Cost in the Wedge. A wedge that costs $5 per query might impress in demo, but it's not sustainable at 10,000 users."
- Anti-pattern: Workflow piggyback fragility — "you're always one API change away from irrelevance, or worse, from the host platform simply building your wedge natively."

**Verbatim quotes:**
- "Models commoditize... Every 90 days, the next release from OpenAI, Anthropic, or Google wipes out the advantage of the one before it."
- Anthropic case (Law 4): "Your positioning can itself be a distribution channel. In markets with regulatory or reputational barriers, trust accelerates adoption faster than features ever could."
- Perplexity case (Law 1): "Technical scaffolding choices can be distribution wedges. Choosing retrieval wasn't just accuracy engineering, it was a deliberate move to turn outputs into distribution channels."
- Copilot case (Law 3): "The most powerful distribution channel is the one where your users already spend their entire day."

---

## Cross-Cutting Themes

| # | Theme | PDFs where it appears | DataWeave implication |
|---|---|---|---|
| 1 | **Tool/description quality is THE PM lever** | 02, 03, 04 | For Concept 4 (MCP), PM must own descriptions. For Concept 3 (agent builder), data source / knowledge source descriptions are the make-or-break copy. |
| 2 | **Orchestration > raw model autonomy** | 01, 02, 03 | Concept 3's workflow canvas IS the orchestration layer — well-aligned with consensus. Pure-chat agents (Concept 2) need stop rules/guardrails. |
| 3 | **Read-only first, write later with approval flows** | 01, 03 | Applies to all 4 concepts. DataWeave agents touching retailer data must default to read-only/proposal; scheduled exports (Concept 2) are inherently safer than autonomous edits. |
| 4 | **Embed in existing workflows; don't make users come to you** | 03, 06 | Strongly validates Concept 1 (embedded nudges) and Concept 4 (MCP — fits user's IDE/Claude/Cursor). Weakly validates Concept 2 (separate chat surface = new habit). |
| 5 | **Token cost / context window discipline** | 02, 03, 04 | Validates Cloudflare-style compression for Concept 4. For Concept 1, mascot must not bloat every dashboard page with always-on context. |

**Where literature is loud:** agent architecture (decoupled specialists, orchestration, intent specs), MCP/CLI mechanics, tool description craft, observability tooling, data/workflow/trust moats.

**Where literature is quiet:** mascot UX (zero coverage — anthropomorphized inline AI assistants are not discussed; the closest reference is "make AI invisible" which actively argues against mascot prominence). Scheduled/async exports are not directly addressed. Visual workflow canvases get only oblique mentions (n8n is referenced as a build tool, not a UX pattern to expose to end users).

---

## Decision Frameworks Surfaced

| Framework | Source | One-line definition | Application to DataWeave concepts |
|---|---|---|---|
| **Intent Structure (7 parts)** | PDF 1 | Objective + Outcomes + Health Metrics + Strategic Context + Constraints + Autonomy Tiers + Stop Rules | Concept 3 agent builder: these 7 should be the explicit fields in the agent-definition UI. |
| **14 Principles** | PDF 2 | Use if/else first; small specialists; structured JSON; orchestration > autonomy | Concept 3 canvas should expose specialist nodes; Concept 2 chat needs scratchpad + bounded tools. |
| **Agent-Accessible Stack** | PDF 3 | API → AGENTS.md/OpenAPI → CLI → MCP | Concept 4 sequencing: don't jump to MCP without OpenAPI spec + AGENTS.md. |
| **5-Question Audit** | PDF 3 | API coverage / CLI JSON / OpenAPI / browserless auth / AGENTS.md | DataWeave self-audit before pitching Concept 4 to leadership. |
| **Context Types (6)** | PDF 4 | Instructions / Examples / Knowledge / Memory / Tools / Tool results | Concept 3 "knowledge source node" maps directly. Concept 1 nudges need filtered short-term context only. |
| **3 Observability Levels** | PDF 5 | Tracing / Context Capture / Production Intelligence | All 4 concepts need Level 2 minimum to be defensible. Concept 1 (nudges firing on dashboard state) is impossible without this. |
| **3-Layer Distribution** | PDF 6 | Wedge / PLG Loop / Moat | Helps choose: Concept 1 = workflow piggyback wedge; Concept 4 = embedded distribution wedge; Concept 2 = consumer-pattern, weakest fit for B2B. |
| **4 Wedge Archetypes** | PDF 6 | Painkiller / Workflow Piggyback / Domain-Specific / Community | DataWeave is **Domain-Specific** (retail intel) — Concept 4 amplifies it; Concepts 1/3 add **Workflow Piggyback**. |
| **OpenAI Test** | PDF 6 | "If OpenAI shipped this free tomorrow, do we still exist?" | Concept 2 (general chat) fails this. Concepts 1, 3, 4 pass because they require DataWeave's proprietary retail data. |

---

## Recommendations for DataWeave 2-pager

### Concrete liftables
1. **Steal the Intent Structure as the literal UI of Concept 3.** When the user defines an agent in the Notion-style builder, the fields should map 1:1 to Objective / Desired Outcomes / Health Metrics / Strategic Context / Steering Constraints / Hard Constraints / Autonomy Tier / Stop Rules. This is publication-grade framing that no competitor is using as UX yet.
2. **Sequence the MCP/CLI bet (Concept 4) per Aakash's stack:** Phase 0 = OpenAPI spec + AGENTS.md (2 weeks, doc-only), Phase 1 = read-only MCP for top 5 use cases (4 weeks, 1-2 engineers), Phase 2 = CLI, Phase 3 = write access with destructiveHint + approval flows. Quote Gartner 40%/2026 stat for the leadership pitch.
3. **Adopt the "outcome-oriented tool" pattern (Stripe/Linear) for any nudge or MCP tool description.** "Review payments, troubleshoot declines, process refunds" — not "manages payment operations." Same rule applies to mascot tooltip copy in Concept 1.
4. **Use the 3 observability levels as the success-criteria ladder** for every concept's PRD: a feature ships at Level 2 minimum (token cost, latency, hallucination rate visible per trace).
5. **Frame distribution explicitly (3-Layer model) in the leadership doc.** Position DataWeave's wedge as Domain-Specific (retail intel) reinforced by Workflow Piggyback (embed in QVC/Home Depot/Costco existing workflows) and Data Flywheel moat (every retailer correction trains the model).

### Sharp opinions on which concept the literature most validates

| Concept | Literature verdict | Why |
|---|---|---|
| **4 — MCP / CLI** | **Most enterprise-ready.** Strong validation. | Aakash dedicates 33 pages to this; Gartner 40% adoption stat; 10 production teardowns (Stripe/Linear/Sentry/Asana/Shopify/Cloudflare/GitHub/Notion/Zapier/Pendo) prove it's table stakes for B2B. PM lift is 4 weeks read-only. |
| **3 — Agent builder + workflow canvas** | **Validated architecture, premature UX.** | Every principle in PDFs 1, 2, 4 maps directly. But no PDF describes exposing this to end users — n8n/orchestration is referenced as builder tooling, not customer-facing surface. Risk: end users won't understand specialist agents / orchestration semantics. Ship internal-first. |
| **1 — Embedded nudges + mascot** | **Validated pattern, mascot unvalidated.** | Workflow Piggyback (Figma AI) and Collaborative Workflow Loop (Notion AI) strongly validate inline nudges. But "make AI invisible" is the consensus — the mascot risks violating Notion's "expose AI actions transparently, but subtly" pattern. Test mascot with users; nudges are safe. |
| **2 — Chat + scheduled exports** | **Premature / weak fit for B2B retail intel.** | Closest to ChatGPT pattern. Literature warns: "We do AI" wedges get cloned overnight. Memory-across-sessions has zero coverage as a defensible feature. Scheduled exports are mentioned nowhere — likely because they're not a wedge, just a feature. Ship as a thin overlay on Concept 3, not as headline. |

**Strongest bet: Concept 4 (MCP/CLI) as the wedge; Concept 1 (embedded nudges, mascot deprioritized) as the workflow piggyback; Concept 3 as the underlying orchestration that powers both.** Concept 2 belongs in the parking lot.

### Anti-patterns DataWeave should explicitly avoid

1. **Vague tool/nudge descriptions** ("Monitor digital shelf" — useless). Specificity bar = Stripe ("review payments, troubleshoot declines, process refunds"). PM must review every description.
2. **Constraints in prompts instead of orchestration.** If "do not expose competitor data across retailer tenants" matters, it cannot live in a system prompt — it must be enforced in code.
3. **Write access on day one.** Read-only first. Proposal-First for actions affecting retailer-visible content. No autonomous price changes, ever.
4. **Browser-dependent auth for MCP/CLI.** Use OAuth 2.0 device flow + API keys.
5. **Building agent surfaces in isolation.** "Agent access that isn't coupled to the product codebase rots within a quarter." New GUI capability = new MCP tool = same sprint, same PR.
6. **The CLI Checkbox** — wrapping 3 endpoints with human-readable output. JSON-by-default, `--human` is the override.
7. **Skipping observability before scaling autonomy.** Every concept needs Level 2 traces shipped before Level 3 autonomy is granted. Without observability, the failure mode is "frog in boiling water."
8. **Mascot prominence without user validation.** The literature pattern is "AI invisible / actions transparent" — a grayed-out mascot that draws attention to itself risks violating this. Test before committing.
9. **Anchoring the wedge on general AI capability** ("DataWeave AI assistant"). Fails the OpenAI Test. Anchor on Domain-Specific (retail intel) + proprietary data moat.

---

## Coverage notes

| PDF | Depth | PM reading priority |
|---|---|---|
| 03 — Distribution Playbook | **Richest.** 33 pages, 10 teardowns, 5-question audit, PRD template, 7-mistake list | **Read first.** Direct map to Concept 4; gives the leadership-pitch language verbatim. |
| 06 — 3-Layer Distribution | **Rich on strategy framing.** 45 pages of wedges, loops, moats, case studies | **Read second.** Use to position the 2-pager opening (why distribution > features). |
| 01 — Intent Engineering | **Dense, schema-grade.** | Read in full before drafting Concept 3 PRD. Lift the 7-part spec as UI labels. |
| 05 — Observability | **Practical, vendor-aware.** | Skim for the 3-level ladder; deep-read 5-min setup if engineering hasn't picked a tool. |
| 02 — 14 Principles | **High signal-to-noise, short.** | Skim; quote principles 1, 5, 7, 12 directly in PRD review. |
| 04 — Context Engineering | **Useful taxonomy, less original than the others.** | Skim. Use as glossary; cite when defining "knowledge source node" in Concept 3 builder. |

**Where to spend your own reading time:** PDFs 3 and 6 if drafting the leadership doc this week. PDF 1 if Concept 3 (agent builder) moves to PRD this sprint. Skip re-reading 04 unless writing the context-engineering glossary.
