# AI Observability Tool Comparison — DataWeave AI Wrapper

**Verified:** 2026-05-14 | **Decision window:** Phase 0, Week 1 | **Stack context:** LangGraph (13-node multi-agent) + Athena (PI) + DuckDB (AA) + Postgres STM | **Tenancy key:** `account_id`

---

## TL;DR — Recommendation

**Adopt LangSmith (Plus tier, $39/seat/mo) for production tracing + adopt Arize Phoenix (self-hosted OSS, $0) for the eval framework.** Dual-track, not either-or. Confidence: **High** on LangSmith for tracing; **Medium** on Phoenix for evals (Braintrust is the close runner-up if eval depth becomes the bottleneck).

**The single criterion that flips the recommendation:** **SOC 2 / on-prem deploy requirement from a named DataWeave customer (Costco, Home Depot, QVC, Whirlpool).** If procurement requires self-hosted-only with a signed SOC 2 Type II + BAA, drop LangSmith Plus and consolidate on Phoenix self-hosted (with Arize AX as the commercial backstop). DataWeave's current customer base is retail enterprise — this question is not hypothetical.

---

## Comparison Matrix

| Criterion | **LangSmith** | **Phoenix (Arize OSS)** | **Helicone** | **Arize AX** (commercial) | **Braintrust** |
|---|---|---|---|---|---|
| **Free tier (2026)** | 5K traces/mo, 1 seat | Unlimited (self-hosted) | 10K req/mo (cloud) | AX Free hosted | 1M trace spans, unlimited users |
| **Paid entry (2026)** | Plus $39/seat/mo + 10K traces; overage $0.50/1K base, $5/1K extended | AX Pro $50/mo (hosted) | Core $29/mo, Pro $199/mo | Enterprise ~$50K/yr starting | Pro $249/mo (unlimited spans) |
| **Native LangGraph** | First-class (same vendor) — zero friction, auto-traces every node | First-class via LangChain instrumentor; OTEL-based | Integration exists but "maintained, not actively developed" per Helicone changelog | First-class (shares Phoenix SDK) | Supported via OTEL; less idiomatic for LangGraph node graphs |
| **Captured signal** (spans, cost, latency, retries, tokens, model routing) | Full — including replay, prompt diffs, dataset capture | Full — OTEL spans, cost, latency, token, retry; hallucination via evaluator | Cost + latency + token strong; **weaker on agentic span trees** (gateway model) | Full + drift detection, real-time alerts | Full + first-class scorer/eval span linking |
| **Explainability — "CSM-readable plan drawer"** | Strong: hierarchical trace UI maps 1:1 to LangGraph nodes (Identify Intent → Retrieve → Enrich → SQL → Generate) | Strong: span tree view, prompt playground; UI slightly more dev-oriented | Weak: flat request log, not graph-shaped — bad fit for our 5-step trail | Strong: session/span tracing + LLM-as-judge inline | Strong: tied to evaluator scores, but eval-centric framing |
| **Self-hosted / on-prem** | Enterprise only (custom $) | **Yes — Docker / K8s / Helm, free** | Yes — Docker Compose + Helm chart (re-introduced 2025) | Yes — AWS + Azure marketplace, data residency | Enterprise-only |
| **SOC 2 / compliance** | SOC 2 Type II (cloud + enterprise) | Inherits from your infra (self-hosted) | SOC 2 Type II | **SOC 2 + GDPR + HIPAA + RBAC** | SOC 2 Type II + BAA on Enterprise |
| **Multi-tenant slice by `account_id`** | Via metadata + project namespacing; filter by metadata key | Via OTEL span attributes + `x-phoenix-tenant-id` header (group-based MT in active dev — Phoenix #10504) | Via custom properties / user_id | Multi-span filters + tenant attribute (GA) | Via metadata + project; dataset partitioning |
| **Eval framework** | LangSmith Evaluators + LLM-judge + dataset sweeps; RAGAS via plug-in | **Built-in RAGAS, agentic eval, golden-query experiments — strongest of the OSS pack** | None native — relies on external | LLM-as-judge + drift + custom evals | **Best-in-class evals** — scorers, experiment grids, async scoring at scale |
| **Maturity / customers** | GA since 2024; LangChain customers (Elastic, Rakuten, Replit, Klarna referenced) | GA 2024; broad OSS adoption; Arize parent founded 2020 | GA 2023 (YC W23); 2.1B+ requests processed | GA 2022; Uber, TripAdvisor, ZoomInfo named | Series B $80M @ $800M val (Feb 2026, Iconiq lead); customers include Notion, Vercel, Stripe |
| **Recent change (post-Nov 2025)** | Plus tier seat price held at $39; 400-day extended retention SKU added | Group-based multi-tenancy still **in-development** (GitHub #10504) — flag for re-verify in Q3 | Self-hosting re-introduced; LangGraph integration **stalled** — flag | Marketplace listings on AWS + Azure added | **Series B Feb 2026 — $80M / $800M val** — accelerated enterprise push |

Sources: [LangChain pricing](https://www.langchain.com/pricing) · [Arize pricing](https://arize.com/pricing/) · [Helicone GitHub](https://github.com/Helicone/helicone) · [Braintrust pricing](https://www.braintrust.dev/pricing) · [Braintrust $80M Series B](https://www.finsmes.com/2026/02/braintrust-raises-80m-in-series-b-funding.html) · [Phoenix LangGraph docs](https://arize.com/docs/phoenix/integrations/python/langgraph) · [Helicone LangGraph integration changelog](https://www.helicone.ai/changelog/20250323-langgraph-vs-helicone-integration) · [Phoenix multi-tenancy issue #10504](https://github.com/Arize-ai/phoenix/issues/10504)

---

## Tool-by-Tool Read

### 1. LangSmith — Path of Least Resistance
LangSmith is built by LangChain, same vendor as LangGraph. Every node in the 13-node graph auto-traces with no SDK boilerplate beyond `LANGCHAIN_TRACING_V2=true`. The hierarchical trace view maps directly onto the 5-step Query Trail already shown in the live UI (Identify Intent / Retrieve / Enrich / SQL / Generate) — meaning CSMs reading a customer escalation see the *same mental model* as the user-facing trace. This is the biggest hidden win: **zero translation layer between eng tooling and CSM-facing trace UI**.

**Costs at our scale:** assume 6 demo accounts × ~50 queries/week × 13 spans = ~16K traces/mo. Plus tier ($39/seat × ~6 eng seats = $234/mo) + ~6K overage at $0.50/1K = **~$240/mo all-in**. Trivial vs. eng time saved.

**Risk:** SOC 2 cloud is fine for internal demos; **enterprise customer procurement may demand self-hosted** — LangSmith self-hosted is gated behind enterprise (~$1–5K/mo+). [LangSmith pricing](https://www.langchain.com/pricing)

### 2. Arize Phoenix — The Eval Layer
Phoenix is the only OSS tool in the pack with **native RAGAS + agentic eval + golden-query experiments** — exactly the four open eng tasks in Phase 0 (RAGAS, agentic eval, CSAT/NPS, LangGraph-side eval). It runs in our own VPC for $0 license cost. Multi-tenant slicing via `x-phoenix-tenant-id` is workable today via span attributes; full group-based MT is in active GitHub development — **flag this for re-verify in 60 days**.

**Use it for:** the eval framework, not the live production trace store. Running both Phoenix (evals) and LangSmith (prod traces) is the standard pattern Arize themselves document. [Phoenix GitHub](https://github.com/Arize-ai/phoenix)

### 3. Helicone — Wrong Shape
Helicone is an **API-gateway** observability tool. It excels at flat request logs and cost dashboards but **does not render graph-shaped agent traces well**. Worse: Helicone's own changelog notes the LangGraph integration is "maintained but no longer actively developed" — a yellow flag for a stack centered on LangGraph. Cost is attractive ($29–199/mo) but capability fit is poor. [Helicone LangGraph changelog](https://www.helicone.ai/changelog/20250323-langgraph-vs-helicone-integration)

### 4. Arize AX — The Enterprise Backstop
Commercial sibling of Phoenix. SOC 2 + HIPAA + GDPR + on-prem + AWS/Azure marketplace + data residency. ~$50K/yr starting — too heavy for Phase 0, but **this is the right escalation path** if a Tier-1 customer (Home Depot, Costco) makes SOC 2 + on-prem a contractual blocker. The Phoenix→AX migration path is friction-free (same SDK, same span schema). [Arize pricing](https://arize.com/pricing/)

### 5. Braintrust — The Eval-First Challenger
**Best-in-class for evaluations**, period. The $80M Series B at $800M valuation in Feb 2026 (Iconiq, a16z, Greylock) signals it's the buyer-favored bet for eval depth. Scorer abstraction + experiment grids + async at-scale eval beat Phoenix on ergonomics. **Why not first choice:** $249/mo Pro tier is the cheapest path to unlimited spans, and the platform is eval-centric — production trace UX is less LangGraph-native than LangSmith. Worth re-evaluating in Q3 if Phoenix evals hit a wall. [Braintrust $80M Series B](https://www.finsmes.com/2026/02/braintrust-raises-80m-in-series-b-funding.html)

---

## Final Recommendation

**Adopt LangSmith Plus + Phoenix self-hosted (dual-track).** Confidence: **High** on LangSmith; **Medium** on Phoenix.

- **Week 1:** Turn on LangSmith tracing on the LangGraph agent (one env var). Tag every span with `account_id` metadata to enable tenant slicing. Run for the 6 demo accounts in CSM beta.
- **Week 1–2:** Stand up Phoenix in a Docker container in DataWeave's AWS VPC. Wire RAGAS + agentic eval onto the golden query set (12 queries from `discovery-report.md` §10).
- **Week 2:** Validate `account_id` slicing works in both tools before locking in.
- **Q3 trigger to re-evaluate:** if (a) Phoenix MT-by-group hasn't shipped, or (b) eval velocity is gated by Phoenix ergonomics, swap Phoenix → Braintrust.

**The criterion that could flip everything:** if Home Depot, Costco, QVC, or Whirlpool procurement makes **on-prem + SOC 2 Type II non-negotiable** for AI feature data, the dual-track collapses to **Phoenix self-hosted + Arize AX commercial** — keep this on the watch list with sales/CS.

---

**Flags for re-verification (post-Nov 2025 changes):**
1. Phoenix group-based multi-tenancy (GitHub #10504) — still open; re-check Q3.
2. Helicone LangGraph integration — marked stale; assume unsupported.
3. Braintrust $80M Series B (Feb 2026) — enterprise feature push expected; revisit pricing in 90 days.
4. LangSmith extended-retention SKU (400-day, $5/1K) — new; not needed for Phase 0 but useful for compliance audits later.
