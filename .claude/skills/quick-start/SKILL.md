# /quick-start — Zero-Setup Research & Brainstorm

## When to Use
- First session before context library is filled in
- Quick research on a topic without needing full context
- Exploring a new market area, competitor move, or technology trend
- When a question comes up in a meeting and you need a fast, grounded answer
- Sanity check on a feature idea before investing time in a PRD

## Inputs
- **Required:** Any question, topic, feature idea, market trend, or competitor name
- **Auto-loaded:** Nothing required — this skill works without any context files
- **Optional:** Specific DataWeave product area to anchor the answer; any relevant background

**Note:** This skill trades depth for speed. It uses available insider-data and newsletter archives but not the user's personal context files. For personalized output, fill the context library and use the relevant skill (e.g., `/write-prd`, `/competitor-analysis`).

## Process

### Step 1: Classify the Input
Determine the type of question:
- **Market/trend question** → reference `insider-data/pm-frameworks.md` + newsletter archives if relevant
- **Competitor question** → check `insider-data/competitor-profiles/` first; if profile exists, use it
- **Feature idea** → apply RICE logic with estimated values (flag as estimates, not real signals)
- **Strategic question** → apply relevant framework from `insider-data/pm-frameworks.md`
- **Technical feasibility question** → reference `insider-data/dataweave-tech-context.md` if filled

### Step 2: Ground in Available Data
Check these sources in order:
1. `insider-data/competitor-profiles/` — for any competitor-related question
2. `insider-data/pm-frameworks.md` — for frameworks applicable to the question
3. `insider-data/dataweave-tech-context.md` — for technical grounding
4. `../lennys-newsletterpodcastdata-all/` — for market/strategy context from Lenny's archive
5. `../Substack content/` — for PM/engineering perspective content

### Step 3: Generate Answer
Produce a direct, specific answer. Structure:
- Lead with the most useful insight or recommendation
- Support with evidence or reasoning
- Flag what would change with more context (and which context file to fill)

### Step 4: Suggest Next Steps
At the end, suggest which OS skill to run next if the user wants to go deeper:
- Feature idea → "Run `/write-prd [feature]` to build a full spec"
- Competitor question → "Run `/competitor-analysis [company]` for a full competitive profile"
- Strategic question → "Run `/product-strategy [question]` for a deeper analysis"

## Output

```markdown
## Quick Start: [Topic]

### Answer / Insight
[Direct answer — no preamble. Lead with the most useful insight.]

### Evidence / Reasoning
[2–4 bullet points of supporting logic or data]

### What Would Change This Answer
[What additional context (from which file) would make this more specific to DataWeave]

### Suggested Next Steps
- [Specific skill to run next, with args]
```

## Quality Checks

Good output looks like:
- Answer is specific to the question, not a generic PM framework lecture
- Competitor questions reference actual DataWeave competitors by name
- "What would change this" section points to a specific context file, not vague "more information"
- Next steps suggestion has a concrete skill + args, not just "consider researching more"

Bad output looks like:
- Opens with "Great question! Let me break this down..." (banned preamble)
- Generic answer that could apply to any B2B SaaS PM
- Invents DataWeave-specific facts not available in context (e.g., fabricated customer names or metrics)
- No next steps suggestion
