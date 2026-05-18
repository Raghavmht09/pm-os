# BYOM Monetization — Devil's-Advocate Pricing Analysis

**Date:** 2026-05-14
**Audience:** DataWeave CFO + product leadership
**Context:** AI Wrapper v1 GA is shipping with BYOM (customer-supplied OpenAI / Anthropic / Google / Azure API key). LLM cost flows directly from the model provider to the customer's billing account — DataWeave captures $0 from the inference layer. Yet DataWeave is funding the orchestration layer (LangGraph 13-node multi-agent, RAG over tenant data, agent builder UI, mascot, scheduled reports, admin command center). Without an explicit interface-layer charge, the customer signs up, configures, then defects to an in-house build that imitates the interface. This document evaluates 8 pricing models, the CFO-side pushback on each, and recommends two to pilot.

---

## The core economic problem

Under BYOM, the only metered unit a customer sees is tokens — and tokens are billed by OpenAI/Anthropic, not DataWeave. If the agent builder, scheduler, RAG index, mascot, and admin console are bundled at zero marginal price into the existing Pricing Intelligence / Assortment / Match SKU, two things happen:

1. **Anchor erosion.** The customer mentally prices the AI interface at $0. Any future attempt to charge for it triggers a "you're charging us for what we already have" objection.
2. **Empty-pattern defection.** Once the customer has mapped their workflows into the agent builder, the marginal value of staying on DataWeave's wrapper (vs. a six-week in-house LangChain build) collapses. The RAG index becomes the only switching cost — and the customer can rebuild that against DataWeave's exported data feeds.

Every model below is a candidate fix. None is free of CFO objection.

---

## Eight candidate models

### 1. Platform fee (flat per tenant per year)

- **Who pays:** CSM-mediated procurement, line item on renewal.
- **Value capture:** Flat $40K–$120K/yr access fee for the AI Wrapper, independent of LLM spend.
- **Failure mode:** Customer with 3 active users feels they're subsidizing customers with 30. Encourages account consolidation, depresses seat expansion.
- **Precedent:** Glean Enterprise Flex bundles a base platform fee with reduced seat pricing when customers self-host or bring their own key. Mid-to-large enterprise fully-loaded spend lands $350K–$480K/yr ([Glean Enterprise Flex](https://docs.glean.com/glean-enterprise-flex-pricing), 2025).
- **CFO pushback:** *"You want a six-figure platform fee on top of OpenAI billing and our existing DataWeave contract. That's three vendors for one workflow. Bundle it into the base contract or we walk."* → Concession: rolled into base SKU as a non-itemized uplift, which defeats the anchoring goal.

### 2. Per-active-user license (interface seat)

- **Who pays:** Procurement, monthly true-up via CSM.
- **Value capture:** $30–$80/seat/month for anyone who logs into the AI Wrapper UI.
- **Failure mode:** Customers depress MAU on purpose — one shared analyst seat, dashboards exported to Slack/Email. The mascot and agent builder become a single-seat tool.
- **Precedent:** Notion eliminated its standalone AI add-on in May 2025 and folded full AI access into the Business plan at $20/user/mo, forcing a seat upgrade rather than a metered AI charge ([Notion pricing](https://www.notion.com/pricing), 2025). LangSmith Plus is $39/seat/month with unlimited seats but metered traces on top ([LangSmith pricing](https://www.langchain.com/pricing), 2025).
- **CFO pushback:** *"We bought DataWeave for the data, not the chat window. We'll designate two seats and email the outputs."* → Concession: floor pricing (min 10 seats) or per-tenant cap, both of which cap upside.

### 3. Per-agent / per-schedule metering

- **Who pays:** Self-serve top-up against a CSM-set budget; admin console shows live consumption.
- **Value capture:** $X per published agent, $Y per scheduled run (daily price report = 30 runs/mo).
- **Failure mode:** Customer builds one mega-agent with 12 branches instead of 12 agents; runs weekly digests instead of daily. Metering becomes a behavioral tax that suppresses the exact usage DataWeave wants.
- **Precedent:** Microsoft Copilot Studio shifted from "messages" to "Copilot Credits" on Sept 1, 2025 — $0.01/credit pay-as-you-go or $200 for a 25,000-credit pack ([Microsoft Learn](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management), 2025).
- **CFO pushback:** *"You're double-dipping. We already pay OpenAI per token; now you want a credit on top of every action? Show me the marginal cost you're recovering."* → Concession: convert to a flat-rate bundle, which is just Model 1 with extra reporting overhead.

### 4. RAG index / storage fee (per GB of indexed tenant data)

- **Who pays:** CSM-procured, scales with data footprint.
- **Value capture:** $200–$1,000/GB/mo for vector store, freshness pipeline, and re-embedding on schema changes.
- **Failure mode:** Customer trims the index to only "essential" SKUs; the wrapper's value falls because answers reference 10% of the catalog. Also: customers will benchmark against S3 + pgvector ($0.023/GB raw) and feel gouged on the multiple.
- **Precedent:** Cohere Model Vault charges per-instance hourly for dedicated managed deployments rather than per-GB, but the pattern of charging for compute-adjacent infra (not the model) is the parallel ([Cohere pricing](https://cohere.com/pricing), 2025).
- **CFO pushback:** *"Storage is a commodity. AWS charges 2 cents a gigabyte. Justify the 50x markup."* → Concession: drop to a freshness/refresh-rate charge, which is harder to forecast and easier to evade.

### 5. Compute-minute on DataWeave's orchestration nodes

- **Who pays:** Self-serve, metered, invoiced monthly.
- **Value capture:** $/node-execution on the LangGraph 13-node pipeline + $/standby-minute for hot agents.
- **Failure mode:** Identical to LangGraph Platform's own pricing — and that's the problem. A sophisticated customer realizes they can run LangGraph themselves for the published rate and skip DataWeave's wrapper.
- **Precedent:** LangGraph Platform is $0.001 per node executed + $0.0036/min standby for production deployments ([LangGraph Platform pricing](https://www.langchain.com/pricing-langgraph-platform), 2025). This is the *exact* rate card a Costco or Whirlpool ML team can replicate.
- **CFO pushback:** *"You've priced yourself against LangChain's public list. We have a platform team. Why pay you 3x for orchestration we can run for the list price?"* → Concession: bundle compute into seats, which is Model 2 again.

### 6. Credit / virtual-currency (Stripe top-up + bundled with seats)

- **Who pays:** Procurement for the bundle; self-serve top-up for overage.
- **Value capture:** "DataWeave Credits" — one credit covers a node execution, an indexed GB-month, an agent run, or a scheduled report. Hides the underlying unit economics behind a single SKU.
- **Failure mode:** Credit models are the canonical "obfuscation pricing" — buyers know it and treat them as a yellow flag. Unused credits expire (Notion's no-rollover model) and create renewal friction.
- **Precedent:** Notion Custom Agents at $10 per 1,000 credits with no monthly rollover ([Notion pricing](https://www.notion.com/pricing), 2026). Copilot Studio's credit packs ($200 / 25K credits) follow the same shape.
- **CFO pushback:** *"Quote it in dollars per actual unit. We don't buy points cards in enterprise procurement."* → Concession: publish a credit-to-dollar conversion table, which collapses the model back to Models 3/4/5.

### 7. Outcome-based (revenue lift / cost saved share)

- **Who pays:** CSM-negotiated contract with a quarterly true-up.
- **Value capture:** % of attributable margin from pricing recommendations actioned, or $ per resolved competitive-pricing alert that drove a price change.
- **Failure mode:** Attribution. DataWeave cannot prove a price change came from its agent vs. the customer's pricing analyst. Legal and finance will not sign a clause that exposes the customer's P&L to a vendor formula.
- **Precedent:** Zendesk launched outcome-based pricing in 2025 at $1.50 per automated resolution (committed) / $2.00 (pay-as-you-go), with LLM-verified resolution claims ([Zendesk Resolution Platform](https://www.zendesk.com/pricing/), 2025). Works only because a resolved ticket is a discrete, observable event. DataWeave's outputs are recommendations, not closed events.
- **CFO pushback:** *"You want a percentage of our pricing margin. Our pricing margin is a board-level number. No."* → Concession: a fixed "outcome fee" per actioned recommendation, which is just Model 3 with worse forecastability.

### 8. BYOM-discounted bundle (anchor against full-stack)

- **Who pays:** CSM-mediated, structured as a discount off the full inference-included SKU.
- **Value capture:** Publish a full-stack SKU at $X (DataWeave hosts the LLM, marks up tokens 30–60%) and a BYOM SKU at $X minus a token rebate. The interface fee is implicit in the spread.
- **Failure mode:** Requires DataWeave to actually offer hosted inference at scale — a real cost and a real procurement burden — purely to anchor the BYOM price.
- **Precedent:** Glean Enterprise Flex offers discounted seats and additional FlexCredits when customers self-host or supply LLM keys, explicitly framing BYOM as a *discount off* the managed price ([Glean Enterprise Flex](https://docs.glean.com/glean-enterprise-flex-pricing), 2025). Kinde documents this BYOK pricing pattern as standard for AI platforms ([Kinde BYOK pricing](https://www.kinde.com/learn/billing/billing-for-ai/byok-pricing/), 2025).
- **CFO pushback:** *"Show me your hosted price isn't just inflated to make BYOM look cheap."* → Concession: publish token-cost transparency, which surrenders the margin spread that justified the model.

---

## Comparison table

| # | Model | Forecastable for buyer | Anchors interface value | Escape hatch | Real-world precedent |
|---|---|---|---|---|---|
| 1 | Platform fee | High | Strong | Bundle pressure at renewal | Glean Enterprise Flex |
| 2 | Per-seat | High | Moderate | Seat suppression | Notion Business; LangSmith Plus |
| 3 | Per-agent / per-schedule | Low | Strong | Mega-agent consolidation | Copilot Studio Credits |
| 4 | RAG index / storage | Medium | Weak | Index trimming | Cohere Model Vault (analog) |
| 5 | Compute-minute | Low | Weak | In-house LangGraph at list | LangGraph Platform |
| 6 | Credit / virtual currency | Low | Weak | Hoarding + expiry friction | Notion Custom Agents; Copilot Credits |
| 7 | Outcome-based | Very low | Strong | Attribution disputes | Zendesk Resolution Platform |
| 8 | BYOM-discounted bundle | High | Strong (implicit) | Reverse-engineer the spread | Glean Flex; Kinde BYOK pattern |

---

## Recommendation: pilot Model 1 + Model 2 together

**Primary: Platform fee (Model 1).** Sets the floor for interface value, survives BYOM, matches the enterprise procurement shape Costco/Home Depot/Whirlpool already use with DataWeave. Target $60K–$120K/yr depending on tenant size, structured as an "AI Wrapper access" line item on the renewal — *not* bundled silently.

**Secondary: Per-active-user (Model 2).** Captures expansion revenue when adoption broadens beyond the initial pricing team. Target $50/MAU/mo with a 10-seat floor. Defines an MAU as anyone who triggers an agent, edits a schedule, or publishes to the admin canvas in the trailing 30 days — three events, all measurable in the existing audit log.

Reject Models 3/4/5/6 for v1: every one of them creates a buyer-side incentive to suppress the behavior DataWeave wants (more agents, more freshness, more usage). Reject Model 7 until attribution to actioned price changes is instrumented end-to-end — a 2027 conversation, not 2026. Reject Model 8 unless DataWeave commits to hosted inference as a real product line; using it purely as anchoring is a costly fiction.

### Kill-switch criteria (revisit in 90 days post-pilot)

- **Kill platform fee** if win-rate on new logos drops more than 15% vs. the prior four quarters and CSM call notes attribute the loss to the line item in ≥ 60% of cases.
- **Kill per-seat** if MAU/contracted-seat ratio falls below 0.4 at the 60-day mark across three or more accounts (signals deliberate seat suppression and dashboard-export defection).
- **Kill both and revert to bundled-into-base** if any committed lighthouse account (Costco, Home Depot, QVC) issues a written objection at renewal that cites the AI Wrapper SKU as the blocker.

The single biggest residual risk: **the lighthouse account precedent**. Whichever pricing model the first enterprise renewal accepts becomes the de facto floor for every subsequent contract. If Costco signs at a bundled $0 interface line, charging Whirlpool $80K for the same software next quarter is structurally impossible. The pilot must be sequenced — smaller accounts first, lighthouse accounts second — and CSMs must be told explicitly: do not concede the line item to close the quarter.

---

## Sources

- [Glean Enterprise Flex pricing](https://docs.glean.com/glean-enterprise-flex-pricing) (2025)
- [Notion pricing](https://www.notion.com/pricing) (2025–2026)
- [Microsoft Copilot Studio billing](https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management) (Sept 2025)
- [LangSmith pricing](https://www.langchain.com/pricing) (2025)
- [LangGraph Platform pricing](https://www.langchain.com/pricing-langgraph-platform) (2025)
- [Cohere pricing](https://cohere.com/pricing) (2025)
- [Zendesk Resolution Platform pricing](https://www.zendesk.com/pricing/) (2025)
- [Kinde BYOK pricing pattern guide](https://www.kinde.com/learn/billing/billing-for-ai/byok-pricing/) (2025)
