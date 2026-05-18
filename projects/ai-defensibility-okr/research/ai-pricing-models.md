# AI Pricing Models — DataWeave AI System Experience

**Author:** PM OS · **Date:** 2026-05-14 · **Status:** [DRAFT FOR DISCUSSION]
**Scope:** Pricing model evaluation for AI features in PI + AA + MM (chat config, scheduling, BYOM, guardrails, admin command center, agent builder)
**Anchor cost:** $1.16 per AA query (current Athena/DuckDB unit economics — internal)

---

## 1. The five models on the table

| Model | One-line definition |
|---|---|
| (a) Bundled + soft ceiling | AI included in seat; alerts at 80/100/120% of fair-use threshold; no hard cutoff |
| (b) Separate AI SKU | AI features sold as a discrete line item on the MSA; flat fee per seat or per tenant |
| (c) Pure credits — Stripe top-up | All AI metered in credits; customers buy packs via Stripe self-serve |
| (d) Bundled credits + Stripe overflow | Monthly credit allowance bundled into seat; overage tops up via Stripe (or CSM) |
| (e) Hybrid — base tier bundled + advanced add-on | Chat + scheduling bundled; BYOM + agent builder sold as add-on SKU |

---

## 2. Comparison matrix

| Dimension | (a) Bundled + soft ceiling | (b) Separate SKU | (c) Pure credits (Stripe) | (d) Bundled credits + overflow | (e) Hybrid base + add-on |
|---|---|---|---|---|---|
| Forecast predictability (Finance) | High | High | Low | Medium-High | High |
| Customer procurement friction | Low | Medium (new line item) | High (variable invoices) | Low–Medium | Low–Medium |
| Revenue ceiling (CFO) | Capped at seat ARPU | Capped at SKU ARPU | Uncapped | Uncapped above allowance | Capped + add-on uplift |
| Sales motion | Sells seats | Sells SKU + seats | Sells consumption | Sells seats; CS sells expansion | Sells tier upgrades |
| Renewal narrative | Weak — usage hidden | Medium — SKU renews | Strong — usage = stickiness | Strong — burn rate as health metric | Medium — add-on attach = expansion |
| Implementation complexity | Low | Low–Medium | High (metering, Stripe, tax) | High | Medium |
| Enterprise procurement fit | Excellent | Excellent | Poor (variable spend) | Good if pre-purchased | Excellent |
| BYOM cost pass-through | Hard | Hard | Easy | Easy | Possible via add-on |

---

## 3. Precedent scan

**(a) Bundled + soft ceiling — [PRECEDENT-CITED]**
- **Notion AI** retired its $10/user add-on in May 2025 and folded full AI into Business at $20/user/month. Soft fair-use limits, no per-query meter exposed to the customer. ([Notion Pricing](https://www.notion.com/pricing))
- Works when AI cost-to-serve is low and predictable. Notion's per-prompt cost is sub-cent; DataWeave's AA query at $1.16 is two orders of magnitude higher — this model leaks margin unless throttled.

**(b) Separate AI SKU — [PRECEDENT-CITED]**
- **Salesforce Agentforce add-on**: ~$125 per user per month for unlimited generative AI use inside Salesforce apps. ([Salesforce AI pricing 2025](https://www.eesel.ai/blog/salesforce-ai-pricing))
- **Notion AI legacy add-on** (pre-May 2025): $10/user/month — a textbook separate SKU before it got folded.
- Clean for procurement (line item, fixed price). Weak revenue capture if power users 10x usage.

**(c) Pure credits — Stripe top-up — [PRECEDENT-CITED]**
- **OpenAI / Anthropic API**: prepaid credit balances, Stripe self-serve top-up, auto-reload toggles. Optimized for developers, not enterprise procurement.
- **Zapier tasks**: each automation step = 1 task; AI step priced same as any other task; AI Agents / Chatbots sold as separate add-ons stacking $150–$200/mo. ([Zapier pricing](https://zapier.com/pricing))
- Enterprise rarely accepts variable monthly invoices. Auto-top-up budget surprises trigger procurement reviews.

**(d) Bundled credits + Stripe overflow — [PRECEDENT-CITED]**
- **Glean Enterprise Flex (2025)**: per-user seat ($45–50 + $15 AI add-on) includes a base FlexCredits pool; Glean Agents and "thinking mode" beyond 100 queries/user/week consume credits at variable rates depending on data sources, steps, memory, actions, and model. ([Glean Enterprise Flex docs](https://docs.glean.com/glean-enterprise-flex-pricing))
- **GitHub Copilot Business** (effective June 1, 2026): $19/user/month with $19 of AI credits included; usage-based billing on top, credits poolable across the org, admin budget caps at enterprise/cost-center/user level. ([GitHub Copilot moves to usage-based billing](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/))
- **Salesforce Flex Credits**: $0.10 per AI action, accumulating against an annual pre-purchased pool in the Agentforce 1 Edition ($550/user/month all-in). ([Salesforce Einstein pricing](https://salesforcenegotiations.com/salesforce-einstein-gpt-copilot-and-ai-cloud-pricing/))
- **Snowflake credits**: ~$3.00/credit Enterprise list, but real enterprise contracts run on pre-purchased capacity with 20–30% volume discounts and negotiated rollover. ([Snowflake pricing 2025](https://select.dev/posts/snowflake-pricing))
- This is the dominant 2025–2026 pattern for AI features sold into enterprise.

**(e) Hybrid base + add-on — [PRECEDENT-CITED]**
- **Intercom Fin AI**: base AI included; agent runs metered at $0.99 per successful resolution; outcome-based — failed runs don't bill. ([Fin AI Agent pricing](https://fin.ai/pricing))
- **Glean** also fits here — base AI search bundled, agents and thinking-mode advanced features metered.
- Strong for products with a clearly bimodal value distribution (basic chat vs. agent runs).

---

## 4. Deep-dive — credits model design choices

### 4.1 What is "1 credit"?
Three viable definitions, each with trade-offs:

| Definition | Pros | Cons |
|---|---|---|
| **Per query** (1 AA query = N credits) | Customer-readable, maps to existing AA cost model | Hides BYOM cost variance; one "query" with Claude Opus costs 10x a Haiku query |
| **Per token** (input+output tokens) | Tracks true compute cost | Opaque to procurement; explaining "1.4M tokens" on a renewal is painful |
| **Composite weighted action** (Glean / Salesforce model) | Bundles complexity (steps, data sources, model tier) into one number | Requires a published weights table; customers will reverse-engineer it [HYPOTHESIS] |

**Recommendation:** composite action credit, with a published rate card. Anchor: **1 credit = $1.16 list = current AA query cost.** Schedule runs and agent multi-step runs consume N credits where N = sum of constituent action weights. BYOM with customer-supplied API key bypasses credit charge (only platform fee applies).

### 4.2 Stripe vs CSM-mediated top-up
- **Stripe self-serve** fits PLG/mid-market. Enterprise procurement teams (Costco, Home Depot, Whirlpool) cannot accept auto-reload credit-card charges — they require PO-based invoicing. [PRECEDENT-CITED: OpenAI Enterprise, Anthropic Enterprise both offer committed-use contracts precisely because Stripe top-up fails procurement gates.]
- **CSM-mediated** = pre-purchased credit packs on the MSA, true-up at renewal. Matches Snowflake / Glean enterprise motion.
- **Recommendation:** dual-track. Stripe for PI/MM mid-market self-serve overflow. CSM-mediated pre-purchase for enterprise (Costco/HD/QVC tier). Identical credit unit on both rails.

### 4.3 Setting the monthly seat allowance
Anchor on observed AA usage (from internal telemetry — verify with eng):

| User archetype | Estimated queries/month | Credits to bundle |
|---|---|---|
| Light (browse + occasional ask) | 20–40 | 50 |
| Active (daily user, ad-hoc analysis) | 100–150 | 200 |
| Power (analyst, builds agents/schedules) | 400+ | 500 + overflow expected |

A 200-credit/seat default at $1.16/credit = $232/seat embedded AI value. Price the seat uplift at a fraction of that (e.g., +$40–60/seat). [HYPOTHESIS — requires pricing committee validation.]

### 4.4 Overage handling
- **Hard cutoff** (Snowflake style): procurement loves it, CS hates it because power users hit walls mid-quarter and churn signal spikes.
- **Soft overage with admin alerts at 80/100/120%** + admin can set a hard cap per cost-center (GitHub Copilot 2026 model): best of both. ([GitHub Copilot usage-based billing](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/))
- **Recommendation:** soft default + admin-configurable hard cap. Mirrors the admin command center UX already in PRD.

### 4.5 Expiry policy
- Use-or-lose monthly: predictable revenue, high customer resentment.
- Annual rollover within contract year: standard enterprise expectation. Snowflake and Glean both offer negotiated rollover.
- **Recommendation:** monthly allowance rolls over within the contract year; expires at renewal. Encourages pre-purchase, gives CSM expansion lever ("you burned 130% — let's resize at renewal").

---

## 5. Recommendation

**Ship at GA: Model (d) — bundled credits per seat + overflow rail.**

Reasoning:
1. **Procurement fit for DataWeave's ICP.** Costco, Home Depot, Whirlpool buy on annual MSAs with PO-based billing. Pure Stripe (c) fails the procurement gate. Bundled allowance = predictable line item; overflow = expansion lever.
2. **BYOM cost variance is the killer for (a) and (b).** With BYOM in v1, a customer running Claude Opus through agent builder can 10x cost-to-serve. Bundled-soft-ceiling (a) leaks margin; flat SKU (b) caps revenue at exactly the wrong moment. Credits pass cost variance through cleanly.
3. **Renewal narrative.** Credit burn rate becomes the leading retention indicator. CS gets a number to defend ("you used 142% of allowance — here's the resize"). Today retention conversations rely on lagging usage metrics.
4. **Precedent convergence.** Glean, GitHub Copilot, Salesforce, Snowflake all landed on variants of (d) for enterprise AI. The market has chosen.

**Evolve to at v1.5: Layer (e) on top.**
Once BYOM and agent builder usage data lands (60–90 days post-GA), spin advanced agent builder + BYOM-with-platform-managed-keys into an add-on tier above the base allowance. Two reasons: (i) the value distribution will be bimodal (most seats use chat + scheduling; few seats run agents), (ii) an add-on SKU gives sales a discrete expansion product, not just a credit-pack upsell.

**Do not ship (a) or (c) standalone.** (a) cannot survive BYOM cost variance. (c) cannot survive enterprise procurement.

---

## 6. Biggest pricing risk to pilot

**The allowance calibration risk.** If the 200-credit/seat default is wrong by even 30%, the entire model misfires:
- Set too high → margin leakage, no overage triggers, no expansion signal.
- Set too low → procurement complaints in week 3, support tickets, perceived bait-and-switch.

**De-risk pilot:** Run a 60-day instrumented preview with 3–5 design partners (suggest: 1 enterprise — Costco or HD; 1 mid-market — QVC or Bush Brothers; 1 power-user account). Meter credit consumption against the proposed weight table without billing. Publish the rate card internally; measure variance between modeled and actual consumption per archetype. Goal: 80% of seats land within ±25% of allocated allowance before public GA.

Secondary risk to watch: **BYOM weight-table gaming.** Once customers see the credit weights, they will route expensive queries through BYOM with their own keys to bypass charges. Decide before GA whether BYOM-bypassed queries still consume a (lower) "platform credit" for orchestration, or are truly free. [DECISION REQUIRED — flag to pricing committee.]

---

## Sources

- [GitHub Copilot moves to usage-based billing — GitHub Blog](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/)
- [GitHub Copilot Plans & Pricing](https://github.com/features/copilot/plans)
- [Glean Enterprise Flex Pricing Docs](https://docs.glean.com/glean-enterprise-flex-pricing)
- [Notion Pricing](https://www.notion.com/pricing)
- [Salesforce Einstein / Agentforce Pricing — SalesforceNegotiations](https://salesforcenegotiations.com/salesforce-einstein-gpt-copilot-and-ai-cloud-pricing/)
- [Salesforce AI Pricing 2025 — eesel](https://www.eesel.ai/blog/salesforce-ai-pricing)
- [Zapier Plans & Pricing](https://zapier.com/pricing)
- [Intercom Fin AI Pricing](https://fin.ai/pricing)
- [Snowflake Pricing Explained — Select.dev](https://select.dev/posts/snowflake-pricing)

[ASSUMPTION: $1.16 AA query cost is internal-verified; allowance sizing assumes current Athena/DuckDB cost structure holds through GA — confirm with eng before locking the rate card.]
