# /customer-signal-extract — Extract Product Signals from Meeting Notes

## When to Use
- After any external customer call (via CS or direct)
- After a CS sync where customer feedback was discussed
- After sales calls where product gaps or feature requests came up
- After support ticket reviews or NPS/CSAT feedback batches
- When meeting notes are pasted into the session and contain product feedback

## Inputs
- **Required:** Raw meeting notes (pasted directly or path to `context-library/meeting-notes.md`)
- **Auto-loaded:** `context-library/customer-signals.md` (to check for existing signals and avoid duplicates)
- **Optional:** Account name, customer segment (enterprise/mid-market), CS owner name

**Empty context check:** If no meeting notes are provided and `meeting-notes.md` is empty, STOP and say: "No meeting notes found. Paste notes directly or add them to `context-library/meeting-notes.md` and re-run."

## Process

### Step 1: Parse the Source Text
Read all pasted meeting notes. Identify:
- Meeting type: customer call / CS sync / sales call / support review / QBR
- Account name(s) mentioned
- Customer persona (category manager, pricing analyst, brand manager, IT buyer, etc.)
- Date of meeting (if present)

### Step 2: Extract Raw Signals
Scan for these signal types:
- **Pain points:** Problems, frustrations, workarounds described. Look for: "we have to manually", "it takes too long", "we can't do X", "we end up doing Y instead", "this is a blocker"
- **Feature requests:** Explicit asks. Look for: "we want", "can you add", "we'd love", "we need", "other tools do X"
- **Positive signals:** What's working well — retention evidence. Look for: "this is really useful", "saved us X hours", "we use this daily"
- **Churn signals:** Risk indicators. Look for: "we're evaluating", "comparing to", "if this doesn't improve", "not getting value"
- **Competitor mentions:** Any reference to Profitero, Salsify, Syndigo, Intelligence Node, 42Signals, or others
- **Decisions and action items:** Commitments made in the meeting

**Critical rule:** Every signal must be anchored to specific language in the notes. Do not infer signals not evidenced in the text. If a signal is inferred (logical extension of what was said but not directly stated), flag it:
`[INFERRED: not directly stated — confirm before logging]`

### Step 3: Deduplicate Against Existing Signals
Check `context-library/customer-signals.md` for each extracted pain point:
- If the pain point already exists → add this account/date as an additional instance (increases frequency count)
- If it's new → add as a new entry
- If it contradicts an existing signal from the same account → flag the conflict

### Step 4: Score Frequency × Severity
For each pain point:
- **Frequency:** How many accounts/sessions have surfaced this signal (check existing log)
- **Severity (1–5):** 1 = minor inconvenience, 3 = workflow friction, 5 = blocking renewal or preventing adoption

### Step 5: Map to Roadmap
For each feature request:
- Check `context-library/okrs-and-roadmap.md` — is this already on the roadmap?
  - If yes → note "ALREADY IN ROADMAP" and add evidence weight
  - If in parking lot → flag "IN PARKING LOT — this signal may warrant revisiting"
  - If not on roadmap → flag "NOT ON ROADMAP — log for next roadmap review"

### Step 6: Flag Competitor Mentions
For any competitor mentioned:
- Check `insider-data/competitor-profiles/` for an existing profile
- Note the mention in the output with the account context
- If competitive comparison was made → flag: "Run `/competitor-analysis [company]` for updated intel"

### Final Step: Update customer-signals.md
Propose specific updates to `context-library/customer-signals.md` — new rows to add to pain points table, feature requests pipeline, and sentiment log. Wait for user confirmation before writing.

## Output

```markdown
## Signal Extraction: [Meeting Type] — [Account Name] — [Date]

### Pain Points Identified
| # | Pain Point | Direct Quote / Evidence | Severity (1-5) | Existing Signal? | Roadmap Link |
|---|---|---|---|---|---|
| 1 | [pain point] | "[exact quote or paraphrase with note ref]" | [1-5] | NEW / EXISTING (N instances) | [roadmap item or NOT ON ROADMAP] |

### Feature Requests
| # | Request | Direct Evidence | Account | Existing Request? | Roadmap Status |
|---|---|---|---|---|---|
| 1 | [request] | "[evidence]" | [account] | NEW / EXISTING | IN ROADMAP / PARKING LOT / NOT ON ROADMAP |

### Positive Signals (Retention Evidence)
- [signal]: "[quote]" — [account], [date]

### Churn / Risk Signals
- [signal]: "[quote]" — [account], [date] — Risk level: LOW / MEDIUM / HIGH

### Competitor Mentions
- [competitor]: "[context of mention]" — [account], [date]
  → Recommendation: [action to take, e.g., run /competitor-analysis]

### Action Items from Meeting
| Action | Owner | Due Date |
|---|---|---|
| [action] | [name] | [date] |

### Proposed Updates to customer-signals.md
[Specific rows to add/update — confirm before applying]

### Inferred Signals (not directly stated — confirm before logging)
- [INFERRED: signal] — basis: [what was said that implies this]
```

## Example

Input:
```
CS sync with Whirlpool brand team, 2026-04-03
Attendees: CS Manager (DataWeave), Brand Analytics Lead (Whirlpool)

They love the content audit feature — saving their team 3 hours/week on manual content checks. But they're frustrated that the attribute extraction doesn't flag missing values in bulk — they have to go product by product. Also asked if we can integrate with their PIM system (they use Akeneo). Mentioned they're in a renewal cycle and comparing us to Salsify's new content completeness dashboard. They want this fixed before renewal in June.
```

Output:
```
## Signal Extraction: CS Sync — Whirlpool — 2026-04-03

### Pain Points Identified
| # | Pain Point | Direct Evidence | Severity | Existing Signal? | Roadmap Link |
|---|---|---|---|---|---|
| 1 | Attribute extraction requires product-by-product review — no bulk missing value flagging | "they have to go product by product" | 4 | NEW | NOT ON ROADMAP |

### Feature Requests
| # | Request | Evidence | Account | Status |
|---|---|---|---|---|
| 1 | Bulk attribute completeness flagging | "doesn't flag missing values in bulk" | Whirlpool | NOT ON ROADMAP |
| 2 | Akeneo PIM integration | "asked if we can integrate with their PIM system (Akeneo)" | Whirlpool | NOT ON ROADMAP |

### Positive Signals
- Content audit saves 3 hrs/week on manual checks: "saving their team 3 hours/week" — Whirlpool, 2026-04-03

### Churn / Risk Signals
- Renewal risk: comparing DataWeave to Salsify's content completeness dashboard — Whirlpool, 2026-04-03
  → Risk level: HIGH (renewal in June, specific competitive feature mentioned)

### Competitor Mentions
- Salsify: "comparing us to Salsify's new content completeness dashboard"
  → Recommendation: Run `/competitor-analysis Salsify` — focus on content completeness feature
```

## Quality Checks

Good output looks like:
- Every pain point has a direct quote or paraphrase anchored to the notes
- Severity scores reflect the account's urgency (renewal risk = higher severity)
- Competitor mentions are always followed by a recommended action
- Inferred signals are clearly separated and labeled
- Proposed customer-signals.md updates are specific rows, not vague suggestions

Bad output looks like:
- Pain points with no direct evidence ("customer expressed frustration with the product")
- Feature requests that are obvious extensions not mentioned in the notes
- Severity scores that are all 3 regardless of account context
- No distinction between new signals and confirmation of existing ones
- Missing the churn/risk signal even when renewal language appears in the notes
