# Quality Gate Criteria
Last updated: 2026-04-16
Last system review: 2026-04-16

> Criteria are specific and testable. "Be thorough" is not a criterion. "Does the problem statement contain solution language?" is.
> Severity: `blocking` = do not present until resolved. `warning` = flag and present.
> `[AUTO]` = triggered 3+ times, runs on every evaluation. `[PRUNE?]` = never triggered after 10+ evals.

---

## PRD

| # | Check | Severity | Last Triggered |
|---|---|---|---|
| P1 | Problem statement is free of solution language ("we will build X" belongs in requirements, not the problem) | blocking | — |
| P2 | Every functional requirement traces to a user story or OKR — untraced requirements are flagged `[UNVERIFIED]` | blocking | — |
| P3 | Non-Goals section exists and lists at least 2 explicit scope exclusions | blocking | — |
| P4 | Success metrics are specific: named metric + target value + measurement method (not "increase adoption") | blocking | — |
| P5 | Open Questions have named owners and due dates — not left as floating questions | warning | — |
| P6 | Output could not be sent unchanged to a PM at a different company (DataWeave-specificity check) | blocking | — |
| P7 | Engineering estimates are labeled `[DRAFT FOR DISCUSSION]` — not presented as authoritative | warning | — |

---

## FRD

| # | Check | Severity | Last Triggered |
|---|---|---|---|
| F1 | Every requirement has a unique ID and priority (P0/P1/P2) | blocking | — |
| F2 | No ambiguous requirements — each is independently implementable without a follow-up question | blocking | — |
| F3 | Non-functional requirements include specific thresholds (latency < Xms, uptime > X%, data freshness < Xh) | blocking | — |
| F4 | All dependencies have named owners — no dangling "depends on platform team" without a contact | warning | — |
| F5 | Edge cases and failure modes are documented for each P0 requirement | warning | — |

---

## Competitive Analysis

| # | Check | Severity | Last Triggered |
|---|---|---|---|
| C1 | Every factual claim has a source type and verification date | blocking | — |
| C2 | Claims older than 60 days are flagged `[VERIFY: stale]` | blocking | — |
| C3 | Output includes DataWeave's counter-position for each competitor strength listed | warning | — |
| C4 | Pricing claims are either sourced (G2, public pricing page) or labeled `[ESTIMATED]` | blocking | — |

---

## GTM Plan

| # | Check | Severity | Last Triggered |
|---|---|---|---|
| G1 | ICP is specific to DataWeave customers — not "enterprise retailers" but named segment (e.g., Walmart-native CPG brands, $500M+ revenue) | blocking | — |
| G2 | Positioning statement passes the "swap test" — could not be used by Profitero or Salsify unchanged | blocking | — |
| G3 | CS enablement section includes a FAQ with at least 3 anticipated objections | warning | — |
| G4 | Success metrics include an adoption target with a deadline (not open-ended) | blocking | — |

---

## Customer Signal Extraction

| # | Check | Severity | Last Triggered |
|---|---|---|---|
| S1 | Every pain point is anchored to a specific moment in the pasted notes (quote or paraphrase with context) | blocking | — |
| S2 | Inferred signals not directly stated in notes are labeled `[INFERRED]` | blocking | — |
| S3 | Signals are not generalized beyond what the source supports (one account's problem ≠ "customers want X") | warning | — |

---

## Roadmap / Prioritization

| # | Check | Severity | Last Triggered |
|---|---|---|---|
| R1 | Every item is labeled with commitment level: `COMMITTED` / `PLANNED` / `EXPLORATORY` / `PARKING LOT` | blocking | — |
| R2 | Prioritization rationale is DataWeave-specific — could not apply to a different product company | blocking | — |
| R3 | Trade-offs are explicit — what is being deprioritized to make room for this | warning | — |
