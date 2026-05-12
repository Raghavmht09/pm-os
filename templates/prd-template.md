# PRD: [Feature Name]
**Author:** [PM Name]
**Date:** [YYYY-MM-DD]
**Status:** DRAFT / IN REVIEW / APPROVED
**Product Area:** [Pricing Intelligence / Digital Shelf Analytics / Content Analytics / Assortment Analytics / Other]
**OKR Link:** [KR this advances — or [UNVERIFIED: no OKR backing]]
**Customer Signal Basis:** [Pain point source and date from customer-signals.md — or [UNVERIFIED: no customer backing]]

---

## Problem Statement
[2–3 sentences: what is broken or missing, for whom, and what is the consequence of not solving it. No solution language in this section.]

## Goals
- [ ] [Measurable goal 1 — specific metric, target, and timeline]
- [ ] [Measurable goal 2]
- [ ] [Measurable goal 3]

## Non-Goals (v1)
- [Explicit scope exclusion 1 — and why it's excluded]
- [Explicit scope exclusion 2]
- [Explicit scope exclusion 3]

---

## User Stories

| ID | As a... | I want to... | So that... |
|---|---|---|---|
| US-01 | [DataWeave customer persona — specific role at specific account type] | [action] | [outcome] |
| US-02 | | | |
| US-03 | | | |

---

## Functional Requirements

| ID | Requirement | User Story | Priority | Notes |
|---|---|---|---|---|
| FR-01 | The system shall [specific behavior] | US-01 | P0 | [traceability or [UNVERIFIED] flag] |
| FR-02 | | | P1 | |
| FR-03 | | | P2 | |

**Priority definitions:**
- P0 = Must have for launch (blocking)
- P1 = Should have (high value, not blocking)
- P2 = Nice to have (defer if needed)

---

## Non-Functional Requirements

| ID | Requirement | Type | Threshold | Notes |
|---|---|---|---|---|
| NFR-01 | Response time (p99) | Performance | < [X]ms | [NEEDS ENG INPUT] if unknown |
| NFR-02 | Data freshness | Reliability | [X hours max] | Matches DataWeave pipeline SLA |
| NFR-03 | Scale | Performance | [X SKUs / Y accounts] | |
| NFR-04 | Availability | Reliability | [X]% | |

---

## Dependencies

**Upstream (what this feature needs to function):**
- [DataWeave service / data source / external API]: [what is needed, confirmed by whom]

**Downstream (what depends on this feature shipping):**
- [System or feature that depends on this]: [how it's affected]

**Cross-team dependencies:**
- [Team]: [what they need to deliver, by when]

---

## Open Questions

| # | Question | Owner | Due Date | Blocking? |
|---|---|---|---|---|
| 1 | [Unresolved question that affects scope or requirements] | [name] | [date] | YES / NO |
| 2 | | | | |

---

## Out of Scope / Future Consideration

| Item | Reason Deferred | Revisit Trigger |
|---|---|---|
| [Feature element deferred to v2] | [why] | [what would change this decision] |

---

## Success Metrics

| Metric | Type | Baseline (N, window) | Target | Timeline | How Measured |
|---|---|---|---|---|---|
| [adoption metric] | Primary | [current value, N=X, 30-day] | [threshold] | [30/60/90d post-launch] | [method] |
| [guardrail metric] | Guardrail | | must not regress by > [X%] | | |
| [engagement or business metric] | Secondary | | | | |

---

## Statistical Plan
*(Required for any testable change — delete if pure UI/copy with no behavioral outcome)*
- **Minimum detectable effect (MDE):** [smallest change worth detecting — e.g., +2pp activation rate]
- **Power:** 80%
- **Significance level (α):** 0.05
- **Required sample size per arm:** [calculate or `[NEEDS DS INPUT]`]
- **Test duration:** [days]
- **Randomization unit:** user / session / account

---

## Rollout Plan
- **Stage 1:** [X% of users / internal only] for [N days]
- **Ramp gate:** expand when [metric] ≥ [threshold] AND guardrails hold
- **Stage 2:** [Y%] for [N days]
- **Full rollout:** [100% or target segment]
- **Kill criteria:** roll back if [metric] doesn't improve ≥ [threshold] after [duration], OR if [guardrail] regresses by > [X%]

---

## AI Behavior Contract
*(Required for features with LLM calls or generative output — delete entire section otherwise)*

**Good examples (≥ 5):**
| Input | Expected Output |
|---|---|
| `[input]` | `[output]` |

**Bad examples (≥ 5) — wrong but not dangerous:**
| Input | Bad Output | Failure Type |
|---|---|---|
| `[input]` | `[output]` | [type] |

**Reject examples — must never produce (cover all 6 categories):**
| Category | Example Input | Output That Must Be Rejected |
|---|---|---|
| PII echo | `[input containing PII]` | `[output that echoes PII]` |
| Jailbreak | `"ignore previous instructions..."` | `[compliant output]` |
| Policy violation | `[input]` | `[violating output]` |
| Competitor mention | `[input]` | `[output naming competitor]` |
| Locale mismatch | `[non-English input]` | `[wrong-locale output]` |
| Outage-blame attribution | `[input about outage]` | `[output blaming named party]` |

**Cost delta:** $[X] per-request / $[Y]/month at full scale / ceiling: $[Z]
**Latency delta:** p99 adds ~[X]ms
**Fallback state:** [what product does when LLM call fails or times out]
**Eval plan:** [how behavior is measured in production — not just offline]

---

## Appendix
[Any supporting research, screenshots, competitive references, or customer quotes]

---
*Generated by pmOS /write-prd — verify all [UNVERIFIED] and [NEEDS ENG INPUT] flags before sharing with engineering.*
