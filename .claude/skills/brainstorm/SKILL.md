# /brainstorm — Divergent Thinking for Problems and Opportunities

## When to Use
- Stuck on a problem and need to explore the solution space before committing
- Exploring a new opportunity area (new product, new market, new use case)
- Need multiple strategic angles before a roadmap or leadership discussion
- Looking for UI/UX concepts before engaging design
- Leadership has asked "what are our options" and you need to generate before you filter

## Inputs
- **Required:** Problem statement or opportunity description (1–3 sentences)
- **Auto-loaded:** `context-library/product-portfolio.md`, `context-library/customer-signals.md`, `insider-data/pm-frameworks.md`
- **Optional:** Constraints (timeline, resources, technical), existing ideas to build on or avoid

## Process

### Step 1: Reframe the Problem
Before generating ideas, reframe the input in 3 ways:
1. **Customer outcome frame:** What does the customer want to be true after this is solved?
2. **Data/capability frame:** What DataWeave data or AI capability is under-leveraged here?
3. **Competitive frame:** Where is a competitor solving this (or failing to)?

Reframing generates better ideas than jumping directly to solutions.

### Step 2: Generate Divergent Directions
Produce 5–7 distinct directions. Each direction should be:
- Meaningfully different (not minor variations)
- Anchored in a real DataWeave capability or customer signal
- Named with a short, evocative label (not "Option 1")

For each direction, use this structure:
- **What it is:** 1 sentence
- **Why it works:** The insight or customer signal that makes this promising
- **DataWeave capability needed:** Which product, data source, or AI capability enables this
- **Biggest risk:** The one thing most likely to make this fail
- **Effort signal:** Rough order of magnitude — days / weeks / months (label as [ESTIMATE])

### Step 3: Query the Archive for Analogues
1. Read `../lennys-newsletterpodcastdata-all/skills.md` and identify which skill file is closest to the brainstorm domain (e.g., `competitive-analysis.md` for competitive problems, `growth-strategy.md` for growth problems, `b2b-playbook.md` for GTM problems).
2. Load that skill file — it names specific newsletters and podcasts with directly relevant case studies and frameworks.
3. Use `../lennys-newsletterpodcastdata-all/index.json` to find additional files by tag if needed. Key tags for brainstorming: `strategy`, `b2b`, `growth`, `go-to-market`, `analytics`.
4. For AI/agent product problems: check `../Substack content/newsletter summaries/` — the Aakash Gupta and Gergely Orosz summaries are most relevant.
Surface the 1–2 most applicable insights as grounding for specific directions.

### Step 4: Filter to Top 3
After divergence, converge: identify the top 3 directions by applying this triage:
- **Highest customer signal backing** (from `customer-signals.md`)
- **Most differentiated vs. Profitero, Salsify, Syndigo**
- **Best effort-to-impact ratio** (given current roadmap capacity)

### Step 5: Surface Assumptions
For each of the top 3 directions, identify the key assumption that must be true for it to succeed. Flag: `[ASSUMPTION: X — validate before committing]`

## Output

```markdown
## Brainstorm: [Problem/Opportunity]

### Problem Reframes
1. **Customer outcome:** [What the customer wants to be true]
2. **DataWeave capability:** [What's under-leveraged here]
3. **Competitive angle:** [Where competitors succeed/fail on this]

---

### Directions Explored

**[Direction Name 1]**
- What: [1-sentence description]
- Why it works: [insight or signal]
- DataWeave capability: [which product/data/AI enables this]
- Biggest risk: [specific risk]
- Effort: [ESTIMATE: days / weeks / months]

**[Direction Name 2]**
[same structure]

[...repeat for 5-7 directions]

---

### Top 3 Directions (recommended for deeper exploration)

1. **[Direction Name]** — [1-line reason it tops the list]
   `[ASSUMPTION: X — validate before committing]`
2. **[Direction Name]** — [1-line reason]
   `[ASSUMPTION: X]`
3. **[Direction Name]** — [1-line reason]
   `[ASSUMPTION: X]`

---

### Relevant Insights from Newsletter Archive
[Any applicable frameworks or case studies found in Lenny's / Substack archives]

### Suggested Next Step
- To develop Direction [N]: Run `/write-prd [direction description]`
- To test assumptions: [specific validation approach]
```

## Quality Checks

Good output looks like:
- 5–7 directions are genuinely different from each other — not the same idea with minor variations
- Each direction references a DataWeave-specific capability or customer signal
- Top 3 are selected with explicit reasoning, not just ranked arbitrarily
- At least one direction is a "contrarian" option the PM might not have considered
- Assumptions are specific and actionable (testable with a customer conversation or data query)

Bad output looks like:
- All directions are minor feature variations of the same approach
- No reference to actual DataWeave products or customer signals
- Top 3 selected based on ease of implementation, not impact-to-effort
- No assumptions surfaced — every good idea has at least one key assumption
- Reframe step skipped — jumps directly to solutions without reframing the problem
