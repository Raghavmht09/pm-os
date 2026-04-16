# /presentation-draft — Slide Outline or Narrative Draft

## When to Use
- Before a leadership review, QBR, or board update requiring a product section
- When preparing a customer-facing presentation (EBR, product roadmap share, feature walkthrough)
- After `/gtm-plan` runs — prompted automatically to create the launch review deck
- When a stakeholder has asked for a "deck" on a topic and you need a structured narrative fast

## Inputs
- **Required:** Topic + audience (e.g., "Q2 roadmap review" + "leadership team" or "Pricing Intelligence launch" + "Home Depot category team")
- **Auto-loaded:** `context-library/okrs-and-roadmap.md`, `context-library/product-portfolio.md`, `context-library/customer-signals.md`, `context-library/stakeholder-map.md`
- **Optional:** Key message you want the audience to leave with; specific data points to include; time limit for the presentation

## Process

### Step 1: Identify Audience and Objective
From the input and `context-library/stakeholder-map.md`:
- **Audience type:** Internal leadership / Engineering team / Customer (enterprise) / Sales team / Board
- **What they care about most:** Revenue and retention (leadership) / Feasibility and scope (eng) / ROI and value (customer) / Deals and differentiation (sales)
- **Desired outcome:** Decision / Alignment / Awareness / Approval

### Step 2: Define the Core Message
Every presentation has one core message — the one thing the audience must leave knowing. State it before building slides.

Format: "[Audience] should leave believing that [core message] because [evidence]."

### Step 3: Build the Narrative Arc
Choose the narrative structure based on audience type:
- **Leadership / board:** Situation → Complication → Resolution → Ask (classic consulting structure)
- **Customer:** Their world → Their problem → Our solution → Evidence → Next step
- **Engineering:** Context → Requirements → Design decisions → Open questions → Next steps
- **Sales:** Market opportunity → Customer pain → DataWeave advantage → Proof points → Call to action

### Step 4: Draft Slide-by-Slide Outline
For each slide:
- **Slide title** — should be a statement, not a label ("Q1 adoption grew 2x" not "Q1 Metrics")
- **Talking point** — one sentence the presenter says while this slide is shown
- **Key visual / data** — what should appear on the slide (chart, table, screenshot — not prose)
- **Source** — where the data comes from (which context file, which signal)

Target: 10–15 slides for a 20-minute review. Flag if the topic requires more.

### Step 5: Source Every Claim
For each slide that makes a factual claim:
- Trace it to a context file, a customer signal, or an OKR entry
- Mark unsourced claims: `[NEEDS DATA: confirm before presenting]`
- Generic claims with no DataWeave evidence are a failure state

### Step 6: Write the Executive Summary Slide
For any presentation > 8 slides, write a 3-bullet executive summary slide that could stand alone if the audience only has 30 seconds.

## Output

```markdown
# Presentation Draft: [Topic]
**Audience:** [audience type]
**Occasion:** [leadership review / QBR / customer EBR / launch review]
**Target length:** [N slides / N minutes]
**Core message:** [One sentence the audience must leave believing]

---

## Narrative Arc: [Structure used]

---

## Slide Outline

**Slide 1: [Title statement]**
- Talking point: [What you say]
- Visual: [What appears on slide]
- Source: [Where data comes from]

**Slide 2: [Title statement]**
- Talking point: [What you say]
- Visual: [What appears on slide]
- Source: [Where data comes from / NEEDS DATA flag]

[...continue for all slides]

---

## Executive Summary (3 bullets — standalone)
1. [Key message 1 — most important]
2. [Key message 2 — evidence]
3. [Key message 3 — so what / ask]

---

## Data Gaps to Resolve Before Presenting
- Slide [N]: [what data is needed and where to get it]

---

## Suggested Appendix Slides
- [Topic]: [why it belongs in appendix, not main deck]
```

## Quality Checks

Good output looks like:
- Every slide title is a statement with a point of view, not a label or section header
- Talking points are 1 sentence — forces the presenter to be concise
- Data sources are named for every factual claim
- Core message is stated before the slide outline — everything else supports it
- Appendix suggestions surface material that deepens the story without cluttering the main narrative

Bad output looks like:
- Slide titles are labels ("Q2 Roadmap", "Customer Feedback", "Next Steps")
- Talking points are multiple paragraphs — not a talking point, a script
- No data source tracking — presenter won't know where to pull the numbers
- Presentation structure doesn't match audience type (using customer structure for a board review)
- No executive summary for a presentation > 8 slides
