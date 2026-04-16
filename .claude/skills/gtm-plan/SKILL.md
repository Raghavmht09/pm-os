# /gtm-plan — Go-to-Market Strategy

## When to Use
- 2–4 weeks before a feature launch
- Before committing to a launch date with CS and Sales
- When a feature needs positioning work before it can be demoed
- When a new product capability needs a launch checklist and enablement plan

## Inputs
- **Required:** Feature or launch name
- **Auto-loaded:** `context-library/product-portfolio.md`, `context-library/stakeholder-map.md`, `context-library/customer-signals.md`, `insider-data/pm-frameworks.md`
- **Optional:** Target launch date, specific accounts to prioritize for early access, competitive context

**Empty context check:** If `product-portfolio.md` and `stakeholder-map.md` are both empty → flag: "Product portfolio and stakeholder context are empty. GTM positioning will be generic. Fill these files or provide context directly."

**Archive pre-load:** Before generating the GTM plan, load:
- `../lennys-newsletterpodcastdata-all/skills/marketing/go-to-market.md` — GTM motion patterns from Lenny's archive (PLG, sales-led, channel strategy)
- `../lennys-newsletterpodcastdata-all/skills/marketing/positioning-messaging.md` — positioning frameworks and messaging hierarchy
- Check `../lennys-newsletterpodcastdata-all/index.json` for `go-to-market` tag to find relevant case studies from B2B companies at DataWeave's stage

## Process

### Step 1: Define the ICP for This Feature
Who specifically benefits most from this feature launch?
- Customer type (enterprise retailer, mid-market brand, CPG brand — specific, not "all customers")
- Persona (category manager, pricing analyst, brand ops team)
- Use case trigger (when would they use this feature?)

Do NOT use generic ICPs. Reference known DataWeave accounts and their profiles from `customer-signals.md`.

### Step 2: Craft the Positioning Statement
Format: "For [specific ICP], [feature name] is the [category] that [primary benefit], unlike [alternative], which [limitation]."

The "unlike" must reference a real alternative — either a competitor (Profitero, Salsify) or the customer's current workaround ("manually checking every morning"). Check `insider-data/competitor-profiles/` for competitive positioning context.

### Step 3: Define Success Metrics
Answer: how will you know this launch worked?
- Adoption metric (% of target accounts using the feature within 30/60/90 days)
- Engagement metric (frequency of use, depth of use)
- Business metric (renewal mentions, expansion revenue, churn reduction)
- NPS / CSAT impact (if measurable)

Each metric must have a target, a baseline, and a measurement method.

### Step 4: Build the Launch Checklist
Use the GTM launch checklist from `insider-data/pm-frameworks.md` as the base. Adapt for this specific launch — not every item applies to every launch.

### Step 5: CS and Sales Enablement
Define specifically what CS and Sales need to be effective:
- CS: What questions will customers ask? What should CS say? (FAQ + talking points)
- Sales: What objections will prospects raise? How does this feature change a deal? (Battlecard update)
- Demo: What's the 2-minute demo flow for this feature?

Reference `context-library/stakeholder-map.md` for CS/Sales contacts to loop in.

### Step 6: Beta Account Selection
Identify 2–3 accounts for pre-launch access:
- Accounts with the matching pain point (from `customer-signals.md`)
- Accounts with an upcoming renewal or expansion opportunity
- Accounts willing to provide feedback before GA

## Output

```markdown
# GTM Plan: [Feature Name]
**Date:** [today's date]
**Target Launch:** [date or sprint]
**Product Area:** [DataWeave product area]

---

## ICP for This Launch
**Segment:** [enterprise retailer / mid-market brand / CPG brand — specific]
**Persona:** [role title and job-to-be-done]
**Use case trigger:** [when/why they use this feature]
**Named accounts most likely to adopt first:** [from customer-signals.md]

---

## Positioning Statement
"For [ICP], [feature name] is the [category] that [primary benefit], unlike [alternative], which [limitation]."

**Proof points:**
- [Evidence 1 — customer signal or data]
- [Evidence 2]

---

## Success Metrics
| Metric | Baseline | Target | Timeline | Measurement Method |
|---|---|---|---|---|
| [adoption metric] | [current state] | [target] | [30/60/90 days] | [how measured] |
| [engagement metric] | | | | |
| [business metric] | | | | |

---

## Launch Checklist

### 6 Weeks Before
- [ ] [item]

### 3 Weeks Before
- [ ] [item]

### 1 Week Before
- [ ] [item]

### Launch Day
- [ ] [item]

### 2 Weeks Post-Launch
- [ ] Review adoption metrics vs. target
- [ ] Collect CS feedback on customer friction
- [ ] Triage and log issues

---

## CS Enablement
**Top 3 customer questions and suggested answers:**
1. Q: [question] → A: [answer]
2. Q: [question] → A: [answer]
3. Q: [question] → A: [answer]

**Talking points (for QBRs and renewal conversations):**
- [point — quantified benefit]
- [point — competitive differentiation]

---

## Sales Enablement
**Battlecard update needed:** YES / NO
**Top objections and responses:**
1. Objection: [objection] → Response: [response]
2. Objection: [objection] → Response: [response]

**How this feature changes deal positioning:**
[1-2 sentences on how Sales should use this in deals]

---

## Beta Account Plan
| Account | Why Selected | CS Owner | Commitment | Feedback Due |
|---|---|---|---|---|
| [account] | [reason from customer-signals.md] | [name] | [what they agreed to] | [date] |

---

## Risks
| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| [risk] | HIGH / MEDIUM / LOW | HIGH / MEDIUM / LOW | [mitigation action] |
```

## Quality Checks

Good output looks like:
- ICP names specific DataWeave account types or named accounts from `customer-signals.md` — not "enterprise customers"
- Positioning statement has a real "unlike" — a competitor or a specific workaround, not "unlike other solutions"
- Success metrics have baselines and targets with numbers, not just "increase adoption"
- CS FAQ answers are specific to DataWeave's product and the feature being launched
- Beta accounts are selected based on signal evidence, not just "big accounts"

Bad output looks like:
- Positioning statement says "helps retailers make better decisions" (generic)
- Success metrics say "track adoption" without a target
- CS enablement section is a generic "here are some FAQs" without DataWeave-specific answers
- Launch checklist is copy-pasted from the framework with no feature-specific adaptation
- No beta account plan — launch goes straight to all accounts without validation
