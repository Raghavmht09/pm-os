# /competitor-analysis — Deep-Dive Competitor Analysis

## When to Use
- Before roadmap decisions that involve competitive positioning
- When a competitor is mentioned in a customer call (churn risk, evaluation, comparison)
- Before GTM planning for a feature that overlaps with competitor capabilities
- When preparing for a competitive deal or sales battlecard request
- Quarterly competitive refresh — keep profiles current

## Inputs
- **Required:** Competitor name (Profitero, Salsify, Syndigo, Intelligence Node, 42Signals, or other)
- **Auto-loaded:** `context-library/product-portfolio.md` (to anchor DataWeave's position), `insider-data/competitor-profiles/[company].md` (existing profile if present)
- **Optional:** Specific focus area (pricing, content, shelf analytics, API), recent customer feedback about this competitor from `context-library/customer-signals.md`

**Empty context check:** If `product-portfolio.md` is empty, proceed but note: "DataWeave position cannot be verified — gap analysis will be based on public DataWeave information only. Fill `product-portfolio.md` for a personalized comparison."

**Staleness check:** If an existing profile exists in `insider-data/competitor-profiles/`, check its `Last updated` date. If > 60 days → note: `[VERIFY: profile is [N] days old — some claims may be stale. Key sections to re-verify: pricing, recent product launches]`

## Process

### Step 1: Load Existing Profile
Check `insider-data/competitor-profiles/[company-name].md`:
- If exists and < 60 days old → use as baseline, note sections to refresh
- If exists and > 60 days old → use with staleness flags, recommend re-verification
- If does not exist → build from scratch

### Step 2: Load Lenny's Competitive Analysis Skill
Before building the profile, load the methodology from the archive:
- Read `../lennys-newsletterpodcastdata-all/skills/product-strategy/competitive-analysis.md`
- This file names the specific newsletters and podcasts most relevant (Strategy Blocks framework, Distribution Advantage analysis, PMF-relative-to-competitors)
- Apply the **4-bucket competitive set** from that skill: Direct / Indirect / Adjacent / Substitute — classify the competitor before diving into capabilities

### Step 3: Product Scope Analysis
Document the competitor's product portfolio:
- What products/modules do they sell?
- What is their core differentiation claim?
- Which customer segments do they target (enterprise retail, mid-market brands, CPG, etc.)?
- Which DataWeave product areas do they compete in directly vs. adjacent?

Use sources: company website, G2 reviews (feature lists + customer reviews), Crunchbase, LinkedIn (team composition, job postings signal roadmap direction), public case studies.

### Step 3: Pricing and Packaging
Document what is publicly known:
- Pricing model (per seat / per SKU / per API call / enterprise contract)
- Packaging tiers
- Any public pricing page data
- G2 pricing satisfaction scores

If not public → note: `[NOT PUBLIC — inferred from: G2 reviews / sales intelligence / customer mentions]`

### Step 4: Capability Gap Analysis
Build a side-by-side comparison across DataWeave's core product areas:

| Dimension | DataWeave | [Competitor] | DataWeave Advantage | DataWeave Gap |
|---|---|---|---|---|

Use `context-library/product-portfolio.md` for DataWeave's side. Be honest about gaps — understating a competitor gap creates false confidence.

### Step 5: Competitive Positioning
- What is their marketing narrative / tagline?
- Which use cases do they lead with in case studies?
- How do customers describe them on G2 (vs. how they describe DataWeave)?
- What are the most common G2 complaints about them?

### Step 6: Customer Overlap Check
Check `context-library/customer-signals.md` for any mentions of this competitor:
- Which DataWeave accounts are evaluating or have switched to this competitor?
- What features did they mention when comparing?

### Step 7: Strategic Implications
Answer these three questions:
1. Where is this competitor pulling customers or deals away from DataWeave right now?
2. Where is DataWeave clearly winning against this competitor?
3. What is the one product or positioning move DataWeave should consider in response?

### Final Step: Save Profile
After analysis, auto-update or create `insider-data/competitor-profiles/[company-name].md` with today's date. Prompt the user to verify any claims marked `[VERIFY]`.

## Output

```markdown
# Competitor Profile: [Company Name]
Last updated: [today's date]
Sources: [list sources used and date accessed]

---

## TL;DR (for sales battlecard use)
**Their pitch:** [1-sentence positioning]
**Best for:** [segment/use case they win in]
**DataWeave wins when:** [2-3 conditions where DataWeave is stronger]
**DataWeave loses when:** [2-3 conditions where they are stronger or perceived as stronger]

---

## Product Portfolio
| Product / Module | Description | Competes With DataWeave's |
|---|---|---|
| [product] | [what it does] | [DataWeave equivalent] |

---

## Pricing Model
[Pricing structure — note if inferred]
[VERIFY: ...] if not confirmed

---

## Capability Comparison
| Dimension | DataWeave | [Competitor] | Advantage | Gap |
|---|---|---|---|---|
| Data freshness | [DataWeave position] | [competitor position] | [who wins] | [gap if any] |
| Coverage breadth | | | | |
| AI/ML capabilities | | | | |
| UI/workflow | | | | |
| API / integrations | | | | |
| Onboarding / CS | | | | |
| Pricing accessibility | | | | |

---

## Positioning and Messaging
**Their core claim:** [quote or paraphrase]
**Proof points they use:** [case studies, metrics, logos]
**G2 strengths (what their customers love):** [bullet list]
**G2 weaknesses (top complaints):** [bullet list]

---

## Customer Overlap (from context files)
[Accounts that have mentioned this competitor, with signal dates]

---

## Strategic Implications
1. **Where they're taking deals/customers from DataWeave:** [specific context]
2. **Where DataWeave is winning:** [specific context]
3. **Recommended product/positioning response:** [specific recommendation]
   `[ASSUMPTION: X — confirm before acting]` if applicable

---

## Data Verification Log
| Claim | Source | Date Verified | Confidence |
|---|---|---|---|
| [claim] | [source] | [date] | HIGH / MEDIUM / LOW |
```

## Example

Input:
`/competitor-analysis Salsify`

Output excerpt:
```
# Competitor Profile: Salsify
Last updated: 2026-04-06
Sources: salsify.com (accessed 2026-04-06), G2 (accessed 2026-04-06), LinkedIn job postings (2026-04-06)

## TL;DR
Their pitch: "The product experience platform for brands to win on shelf"
Best for: Large CPG brands managing content syndication across retail channels (Walmart, Target, Amazon)
DataWeave wins when: Customer needs pricing + shelf analytics in one platform; customer is a retailer (not a brand); customer needs hyperlocal or flyer intelligence
DataWeave loses when: Customer's primary pain is PIM/content syndication at scale; customer is already in Salsify's CPG brand ecosystem

## Strategic Implications
1. Taking deals from DataWeave: Mid-market brands that need content completeness scoring — Salsify's new dashboard (launched Q1 2026) directly competes with DataWeave's Content Analytics. Whirlpool renewal is at risk.
2. DataWeave winning: Retailers — Salsify's heritage is brand-side, not retailer-side. DataWeave's retailer-facing analytics (pricing, hyperlocal) are not replicated by Salsify.
3. Recommended response: Accelerate bulk attribute completeness flagging feature (currently not on roadmap but Whirlpool has flagged it). Position as "real-time content health monitoring" vs. Salsify's "content syndication management."
```

## Quality Checks

Good output looks like:
- TL;DR section is concise enough to paste into a sales battlecard without editing
- Every major claim has a source and verification date
- Gap analysis is honest — DataWeave weaknesses are clearly stated, not minimized
- Strategic implications section leads with "where they're winning" before recommendations
- Customer overlap is populated from `customer-signals.md` — not generic

Bad output looks like:
- Competitor profile reads like a Wikipedia article (too long, no actionable intel)
- No verification dates on any claims
- DataWeave gap column says "N/A" or is left blank
- Strategic implications section says "DataWeave should continue to focus on its strengths" (not specific)
- No TL;DR — unusable for sales team
- Capability comparison uses generic dimensions not relevant to DataWeave's actual market
