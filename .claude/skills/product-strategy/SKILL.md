# /product-strategy — Deep Strategic Analysis

## When to Use
- Quarterly planning — setting direction for the next 3–6 months
- Leadership reviews where you need a defensible strategic recommendation
- Evaluating a new product bet (new capability, new market segment, new pricing model)
- Analyzing adoption, retention, or expansion problems with no obvious cause
- When a stakeholder asks "what should we do about X" and X is a genuine strategic question

## Inputs
- **Required:** Strategic question (1–3 sentences)
- **Auto-loaded:** `context-library/product-portfolio.md`, `context-library/okrs-and-roadmap.md`, `context-library/customer-signals.md`, `insider-data/pm-frameworks.md`, `insider-data/competitor-profiles/index.md`
- **Optional:** Specific framing (adoption problem, retention problem, cross-sell opportunity, competitive response, market entry)

**Newsletter grounding:** Before generating strategy output, check `../lennys-newsletterpodcastdata-all/` and `../Substack content/` for directly relevant frameworks or analogous case studies. Surface any that apply.

## Process

### Step 1: Classify the Strategic Question
Identify the question type:
- **Adoption problem:** Why aren't more accounts/users activating or using the product?
- **Retention problem:** Why are accounts churning or not renewing?
- **Expansion opportunity:** How do we grow revenue from existing accounts?
- **Competitive response:** How do we respond to a competitor move?
- **New bet:** Should we invest in a new capability, segment, or GTM motion?
- **Flywheel / network effects:** How do we make the product harder to displace?

### Step 2: Gather Evidence
From context files and insider-data, collect:
- Relevant customer signals (pain points, churn signals, expansion signals)
- OKR and roadmap context (what are we already betting on?)
- Competitive landscape (who is winning in the area this question touches?)
- Product portfolio context (what capabilities do we have vs. what gaps exist?)

Flag any evidence that is weak or missing: `[WEAK EVIDENCE: only N accounts / inferred / no data — validate before acting]`

### Step 3: Apply the Right Framework
Match the question type to a framework from `insider-data/pm-frameworks.md`:
- Adoption → Activation funnel + job-to-be-done trigger analysis
- Retention → Value realization timeline + churn cause taxonomy
- Expansion → Land-and-expand motion + stakeholder expansion model
- Competitive → Differentiation vs. parity analysis + switching cost audit
- New bet → RICE scoring + network effects checklist + strategic fit test
- Flywheel → Data moat analysis + compounding mechanism mapping

### Step 4: Load the Matching Lenny's Skill File
Map the question type to the specific skill file in the archive:

| Question Type | Skill File to Load |
|---|---|
| Adoption / activation problem | `../lennys-newsletterpodcastdata-all/skills/product-strategy/growth-strategy.md` |
| Retention / churn problem | `../lennys-newsletterpodcastdata-all/skills/product-strategy/growth-strategy.md` |
| Expansion / cross-sell | `../lennys-newsletterpodcastdata-all/skills/product-strategy/b2b-playbook.md` |
| Competitive response | `../lennys-newsletterpodcastdata-all/skills/product-strategy/competitive-analysis.md` |
| New product bet / PMF | `../lennys-newsletterpodcastdata-all/skills/product-strategy/product-market-fit.md` |
| Pricing / monetization | `../lennys-newsletterpodcastdata-all/skills/product-strategy/pricing-monetization.md` |
| Flywheel / network effects | `../lennys-newsletterpodcastdata-all/skills/product-strategy/growth-strategy.md` |
| AI product features | `../lennys-newsletterpodcastdata-all/skills/technical-pm/ai-product-strategy.md` |
| OKR / roadmap prioritization | `../lennys-newsletterpodcastdata-all/skills/product-strategy/roadmap-prioritization.md` |

Read the skill file. It names the exact newsletter and podcast `.md` files to read and a ready-made methodology. Use `../lennys-newsletterpodcastdata-all/index.json` to filter by tag if you need additional source files beyond what the skill names.

Also check `../Substack content/newsletter summaries/` for AI product strategy or technical PM questions — summaries are pre-extracted and fast to read.

### Step 5: Generate the Recommendation
Structure:
1. **The recommendation** — stated in the first paragraph, not buried at the end
2. **The evidence** — what customer signals, data, and competitive context support it
3. **The mechanism** — why this recommendation will work (the causal logic)
4. **The assumptions** — what must be true for this to succeed
5. **The risks** — what could make this fail
6. **The trade-offs** — what we're not doing as a result of this choice

### Step 6: Define the Next Decision Point
Every strategy recommendation should include: "We'll know this is working / not working by [date] if [leading indicator] shows [threshold]. If it doesn't, the decision to revisit is [specific trigger]."

## Output

```markdown
# Product Strategy: [Question]
**Date:** [today's date]
**Question Type:** [Adoption / Retention / Expansion / Competitive / New Bet / Flywheel]

---

## Recommendation
[State the recommendation directly in 2–3 sentences. No build-up.]

---

## Evidence
**Customer signals supporting this:**
- [signal — source, date, accounts affected]
- [signal — source, date]

**Competitive context:**
- [relevant competitive fact — source, date]

**OKR / roadmap alignment:**
- [how this fits current or next quarter priorities]

**Evidence gaps:**
`[WEAK EVIDENCE: X — validate before committing full resources]`

---

## Why This Works (Mechanism)
[The causal chain: if we do X → it causes Y → which leads to Z outcome. Be specific about the mechanism, not just the hoped-for result.]

---

## Key Assumptions
1. `[ASSUMPTION: X — how to validate]`
2. `[ASSUMPTION: Y — how to validate]`

---

## Risks
| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| [risk] | HIGH / MED / LOW | HIGH / MED / LOW | [mitigation] |

---

## Trade-offs (What We're Not Doing)
- By choosing this direction, we are deprioritizing: [specific alternative]
- The cost of that trade-off: [what we give up]

---

## Frameworks Applied
- [Framework name from pm-frameworks.md]: [how it was applied]

## Insights from Newsletter Archive
- [Source + relevant insight + how it applies to DataWeave's situation]

---

## Decision Checkpoint
We'll know this is working by [date] if [leading indicator] reaches [threshold].
If not → revisit trigger: [specific condition that changes the strategy]
```

## Quality Checks

Good output looks like:
- Recommendation is in the first paragraph, not a conclusion at the end
- Evidence section cites specific customer signals with source and date
- Mechanism section explains causal logic, not just correlation ("if we do X, Y accounts will expand because Z")
- Assumptions are specific and each has a validation method
- Trade-offs are honest — names what specifically is being deprioritized
- Decision checkpoint has a real date and measurable threshold

Bad output looks like:
- Recommendation is vague ("DataWeave should focus on improving the customer experience")
- Evidence section says "based on overall market trends" with no DataWeave-specific data
- No assumptions surfaced — every strategy has assumptions
- No trade-offs listed — every strategy choice deprioritizes something
- No newsletter archive referenced when it contains relevant frameworks
- Recommendation could apply to any B2B SaaS company — no DataWeave specificity
