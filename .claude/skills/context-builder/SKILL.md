# /context-builder — Guided Context Library Setup

## When to Use
- First session with a new pmOS installation
- Context library files contain only template placeholders
- After a major role change (new product area, new company, new quarter)
- When the OS surface an "empty context" alert at session start

## Inputs
- **Required:** Nothing — this skill runs as an interview
- **Auto-loaded:** All context-library/ files (to check what's already filled vs. what's still a template)
- **Optional:** Existing documents to parse (resume, existing PRD, OKR document, sprint board export)

## Process

### Step 1: Assess What's Already Filled
Read all 6 context-library files. Identify:
- Which files have real content vs. template placeholders
- Which files are partially filled (some real content, some placeholders)

Report the status before starting the interview:
```
Context Library Status:
- product-portfolio.md: [EMPTY / PARTIAL / COMPLETE]
- okrs-and-roadmap.md: [EMPTY / PARTIAL / COMPLETE]
- sprint-tracker.md: [EMPTY / PARTIAL / COMPLETE]
- customer-signals.md: [EMPTY / PARTIAL / COMPLETE]
- meeting-notes.md: [EMPTY / PARTIAL / COMPLETE]
- stakeholder-map.md: [EMPTY / PARTIAL / COMPLETE]
```

### Step 2: Prioritized Interview (fill in priority order)
Run the interview file-by-file in this order (most impactful first):

**File 1: product-portfolio.md**
Ask:
1. Which DataWeave products are you the PM for? (Pricing Intelligence, Digital Shelf Analytics, Content Analytics, etc.)
2. What's the current state of your primary product — latest release, top 3 metrics, known gaps?
3. Which competitors are most relevant to your product area?

**File 2: okrs-and-roadmap.md**
Ask:
1. What are your OKRs for this quarter? (Objective + KRs with targets and current progress)
2. What's on your committed roadmap for this quarter?
3. Any items in the parking lot that you expect to revisit?

**File 3: customer-signals.md**
Ask:
1. What are the top 2–3 pain points you hear most from customers?
2. Any active churn risks or accounts in a renewal cycle where product is a factor?
3. What features are CS/sales asking for most often?

**File 4: sprint-tracker.md**
Ask:
1. What sprint are you in now? What's the goal?
2. What's your typical team velocity (story points per sprint)?
3. Any ongoing blockers I should know about?

**File 5: stakeholder-map.md**
Ask:
1. Who is your eng lead / tech lead I should simulate when running engineering reviews?
2. Who are the key CS contacts for customer feedback?
3. What does your leadership care most about right now (revenue, retention, technical debt)?

**File 6: meeting-notes.md**
Ask:
1. Do you have recent meeting notes to paste in? (optional — can be added anytime)

### Step 3: Parse Pasted Documents
If the user pastes an existing document (OKR doc, sprint board, customer feedback email):
- Parse it for relevant context-library fields
- Show what would be auto-filled from the document
- Confirm before writing to files

### Step 4: Write to Context Files
After each interview section, propose specific content to write to the context file. Show the proposed content and wait for confirmation before writing.

### Final Step: Activation Check
After all files are filled:
- Run a quick check: read each file and confirm it's no longer a template placeholder
- Run `/okr-check` to validate the OKR structure
- Suggest running `/competitor-analysis` on the top 2 competitors

## Output

```markdown
## Context Builder Complete

### Files Updated
- [file]: [UPDATED — key content added]
- [file]: [SKIPPED — already complete]
- [file]: [PARTIAL — [what's still missing and how to add it]]

### Suggested Next Steps (in order)
1. `/competitor-analysis [top competitor]` — get competitive intel to ground your roadmap
2. `/okr-check` — validate OKR structure and surface at-risk KRs
3. `/write-prd [your top roadmap item]` — build the spec for your highest-priority feature

### What's Still Missing
[Any context fields still empty after the interview, and why they matter]
```

## Quality Checks

Good output looks like:
- Interview questions are conversational, not form-filling (feels like a colleague asking)
- Proposed file content is structured exactly as the template expects (table rows, bullet formats)
- Activation check runs before declaring the context library complete
- Suggested next steps are specific (company names, feature names) based on what was just filled in

Bad output looks like:
- Interview dumps all questions at once — should be conversational and section-by-section
- Writes to files without showing the proposed content first
- Marks files as complete when they still have partially unfilled sections
- Suggested next steps are generic ("you can now use all the OS skills")
