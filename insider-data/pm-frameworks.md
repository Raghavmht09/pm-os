# PM Frameworks Reference
Last updated: 2026-04-06

Pre-loaded frameworks for DataWeave PM work. Referenced by skills when generating PRDs, roadmaps, GTM plans, and sprint artifacts. Adapt these to DataWeave's context — don't apply them mechanically.

---

## 1. PRD Structure (DataWeave Standard)

Required sections in order:
1. **Problem Statement** — What is broken, for whom, with what consequence? No solution language.
2. **Goals** — Measurable outcomes. Specific metric + target + deadline.
3. **Non-Goals (v1)** — Explicit scope exclusions. As important as Goals.
4. **User Stories** — As a [DataWeave customer persona], I want [action], so that [outcome].
5. **Functional Requirements** — ID'd, traceable to user stories, P0/P1/P2 priority.
6. **Non-Functional Requirements** — Performance, reliability, security, scale thresholds.
7. **Dependencies** — Upstream and downstream. Named owners.
8. **Open Questions** — Unresolved items with owners and due dates.
9. **Out of Scope / Future** — Deferred items with reason.
10. **Success Metrics** — How you know v1 worked. Metric + method + target.

---

## 2. RICE Prioritization

**Formula:** (Reach × Impact × Confidence) / Effort

| Factor | Definition for DataWeave Context | Scale |
|---|---|---|
| **Reach** | Number of accounts (not users) affected in the next quarter | # of accounts |
| **Impact** | Effect on the account: 3=massive (renewal/expansion), 2=high (NPS/adoption), 1=medium, 0.5=low, 0.25=minimal | 0.25 / 0.5 / 1 / 2 / 3 |
| **Confidence** | How certain are we about Reach and Impact estimates? | 100% / 80% / 50% |
| **Effort** | Engineering person-weeks (get rough estimate from eng lead) | Person-weeks |

**DataWeave notes:**
- Weight account-level impact over user-level (B2B enterprise — account retention > seat count)
- Confidence drops to 50% if the signal is from < 2 accounts or 1 anecdotal mention
- If a feature is blocking a named renewal → bump impact to 3 regardless of other signals

---

## 3. OKR Writing Guide

**Objective format:** Qualitative, inspiring, directional. No metrics in the objective.
- Bad: "Increase pricing intelligence revenue by 20%"
- Good: "Become the default pricing intelligence layer for enterprise retail teams"

**Key Result format:** Measurable, time-bound, outcome-based (not task-based).
- Bad: "Ship 3 new pricing features"
- Good: "Pricing Intelligence used daily by 80% of active accounts by end of Q2"

**DataWeave OKR anti-patterns:**
- KRs that are project completion milestones ("Launch X by Y") — these are tasks, not outcomes
- KRs with no baseline ("Improve NPS" without a current NPS number)
- More than 3 KRs per objective — forces prioritization
- OKRs that can only be measured at quarter-end — build in leading indicators

---

## 4. GTM Launch Checklist

**6 weeks before launch:**
- [ ] Positioning statement finalized (who it's for, what it does, why DataWeave vs. alternatives)
- [ ] Success metrics defined (adoption target, usage threshold, revenue impact)
- [ ] CS enablement: training session scheduled, FAQ drafted
- [ ] Sales enablement: battlecard updated, demo script updated

**3 weeks before launch:**
- [ ] Beta accounts identified and onboarded (minimum 2 enterprise accounts)
- [ ] Documentation drafted (help center article, release notes)
- [ ] Internal announcement drafted (Slack + email to CS/Sales)

**1 week before launch:**
- [ ] Beta feedback collected and critical issues resolved
- [ ] Release notes finalized
- [ ] CS team trained and sign-off received
- [ ] Sales team briefed on positioning and demo flow

**Launch day:**
- [ ] Feature flagged on for all accounts (or rollout cohort)
- [ ] Monitoring dashboards checked (error rates, adoption events)
- [ ] Customer communications sent (via CS team, not mass email)

**2 weeks post-launch:**
- [ ] Adoption metrics reviewed vs. target
- [ ] CS feedback collected on customer questions/friction
- [ ] Issues logged and triaged
- [ ] Decision: full rollout / stay in limited release / rollback

---

## 5. Sprint Retro Format

**What to measure:**
- Velocity: story points committed vs. completed
- Carry-over rate: (carried items / committed items) × 100
- Blocker patterns: same blocker recurring > 2 sprints = systemic issue

**Retro structure (30 min):**
1. Data review (5 min): velocity, carry-over, blocker list
2. What worked (10 min): 1 item per person, then vote on top 2
3. What didn't (10 min): 1 item per person, then vote on top 2
4. Action items (5 min): 1-2 max, each with owner + due date

**Anti-patterns to flag:**
- Action items with no owner
- Same "what didn't work" item appearing 3+ sprints in a row without an action
- Carry-over > 30% without a root cause documented

---

## 6. Customer Signal Triage Matrix

When prioritizing signals from `customer-signals.md`:

| Frequency | Severity | Action |
|---|---|---|
| 3+ accounts | 4-5 | P0 — take to next roadmap review with full evidence brief |
| 3+ accounts | 2-3 | P1 — log for next quarter planning |
| 1-2 accounts | 4-5 | P1 if renewal risk, P2 otherwise — validate with CS before escalating |
| 1-2 accounts | 1-3 | P2 / parking lot — monitor for pattern |

**DataWeave-specific rule:** If the account is in a renewal cycle within 90 days and severity ≥ 3 → treat as P0 regardless of frequency.

---

## 7. Adoption Levers (B2B SaaS)

Common adoption intervention patterns from Lenny's Newsletter and Reforge frameworks — adapted for DataWeave:

**Activation (new account setup → first value moment):**
- Define the "aha moment" per product (e.g., Pricing Intelligence: first pricing alert that matches a real competitor move)
- Reduce time-to-value: eliminate steps between signup/onboarding and first aha moment
- Guided onboarding: pre-configured dashboards for top 3 use cases

**Engagement (regular usage):**
- Job-to-be-done trigger: when does the customer naturally need to check DataWeave? (weekly category review, pre-buyer meeting, monthly performance review)
- Habit-forming notifications: alerts timed to the customer's workflow, not DataWeave's data cadence
- Power user path: feature progression that rewards deeper engagement with more capability

**Retention / Expansion:**
- Breadth expansion: adopted one product → introduce adjacent DataWeave product at the natural workflow moment
- Depth expansion: basic user → power user via in-product education
- Stakeholder expansion: individual user → team adoption (share report → invite colleague flow)

---

## 8. Network Effects and Flywheel Analysis

**Questions to ask for any DataWeave feature:**
1. Does this feature get more valuable as more accounts use it? (data network effect — more SKU coverage, better matching)
2. Does this feature create switching costs? (proprietary data, workflows embedded in customer processes)
3. Does this feature enable a new GTM motion? (land in one team → expand to adjacent team)
4. Does this feature increase DataWeave's data moat? (new data collection surface → better AI outputs → harder to replicate)

If answer to 3+ questions is yes → this is a strategic feature, not just a product improvement. Treat differently in roadmap.
