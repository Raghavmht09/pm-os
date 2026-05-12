# Stakeholder Map
Last updated: 2026-05-05

> Sources: Geekspeak × Lassonde PRD (2026-04-16), Geekspeak transcript, DSIM GTM Internal (2026-04-24), DSIM team-internal doc (April 2026), productization scope (2026-04-25).

---

## Engineering

| Name | Role | Product Area | Key Priorities | Constraints | How to Work With Them |
|---|---|---|---|---|---|
| Arun Kumar T | Engineering Lead | DSA / Veracite (content audit, override) | PRD clarity, no ambiguous requirements | 1 dedicated eng + 1 DS for DSIM (limited bandwidth) | Needs complete PRD before estimation. Functional requirements doc (FRD) before sprint starts. |
| Sada | Engineer | DSA / Veracite | TBD | TBD | TBD |
| Sanket | Engineer | DSA / Veracite | TBD | TBD | TBD |
| Pandu | Engineer | DSA / Veracite | TBD | TBD | TBD |
| Saurabh Sharma | Data/Platform Engineer (prior) | Walmart Connect API integration | Research-to-prototype gap | May 2025 API research exists — confirm if prototype followed | Check with Saurabh before scoping Walmart Connect API ingestion (Phase 1). Rate limits, developer account status. |
| DS Lead (name TBD) | Data Scientist | DSIM / Robyn model | Robyn infrastructure, model automation | Robyn likely runs locally; containerization needed for scale | Action item: Slack this week re: where Robyn runs for Lactalis, who owns the code |

**Engineering norms:** [Fill in from team — sprint ceremonies, PR process, estimation approach]

**Critical constraint:** DSIM Phase 1 team = 1 dedicated engineer + 1 data scientist. No parallel work feasible. Prioritize ruthlessly.

---

## CS / Customer Success

| Name | Role | Accounts | Escalation Path | How They Surface Product Feedback |
|---|---|---|---|---|
| Rohitha | CSM Lead (DSA) | Lassonde/GeekSpeak (taking over from Varun) | PM / Product | Weekly syncs; direct Slack |
| Baghi | Customer Success | Lassonde/GeekSpeak | Rohitha | Direct customer contact |
| Lily | Delivery Manager | Lassonde/GeekSpeak; Lactalis | PM | Delivery SLAs; milestone tracking |
| Brian | GTM / CS (DSIM pipeline) | Bush Brothers, Beiersdorf, Magic Spoon pipeline | PM / Sales lead | Pre-sales scoping calls; pipeline signal |
| Varun | Former CSM (Lassonde) | Transitioned to Rohitha | — | Historical context for Lassonde onboarding |

**CS → PM feedback loop:** [Fill in — Slack channel, weekly sync, Jira tickets? Confirm with CS team]

**Important:** CS owns Scintilla pre-qualification for DSIM pipeline accounts (Brian). PM must brief Brian on 4-question pre-qual protocol before next pipeline scoping call.

---

## Sales / GTM

| Name | Role | Region/Segment | Common Objections | Features They Keep Requesting |
|---|---|---|---|---|
| Brian | GTM Lead (DSIM) | CPG / Walmart brands | "We use CIQ/Pacvue"; "Scintilla gives us ROAS already"; "PoC price too high" | Explicit reallocation output; multi-retailer |
| Karthik | GTM / Sales | CPG | "MMM is too slow" | Clear methodology differentiation vs. IAB MMM criticism |
| Don | GTM / Content | Market | LinkedIn content on DSIM | One-pager; two-pager; public proof points |

**Active deal context:**
- **Bush Brothers:** May 2026 meeting scheduled. Strong interest. Scintilla pre-qual needed first.
- **Beiersdorf:** Q2 follow-up scheduled. No urgency signal yet.
- **Magic Spoon:** End Q2 conversation. Stage: awareness.
- **ShopHop:** Positive feedback — unclear deal stage.
- **Clorox / Mondelēz:** Named as primary beta targets. No outreach initiated. Warm path via existing DSA CS relationships.

---

## Leadership

| Name | Role | Cares Most About | Review Cadence | How to Bring Requests |
|---|---|---|---|---|
| Eddie | Leadership (likely CPO or CRO — confirm) | DSIM product positioning + personas; competitive differentiation | Pre-summit prep (Digital Shelf Summit); weekly or bi-weekly DSIM | 1-pager or deck; persona definitions needed before next meeting |
| Jeeva | Leadership | PMF validation; revenue from DSIM | [Fill in] | [Fill in] |
| Shai | Leadership | Positioning; messaging clarity | [Fill in] | [Fill in] |

**Leadership review calendar:**
- **Digital Shelf Summit (early May 2026):** Brian and Karthik testing DSIM messaging in market. Leadership needs persona definitions + positioning locked before this event.
- **DSIM recurring meeting:** Weekly or bi-weekly (to be established per April 24 action items).
- Next meeting goal per April 24: "Agree on position statements and personas to create documentation for market."

**What leadership explicitly asked for (April 24 session):**
1. Define 2–3 DSIM personas with specific jobs-to-be-done per persona (BLOCKING — explicit action item)
2. Explicit reallocation recommendation in output (not just optimization)
3. Clear one-liner differentiator vs. CIQ / Pacvue / MMM
4. Two-pager on DSIM for market distribution

---

## External Partners / Customers

| Name | Organization | Role | Relationship | Key Needs |
|---|---|---|---|---|
| Trisha Williams | GeekSpeak | Managing Partner / Client Success | Prime external stakeholder for Lassonde implementation | RBAC for override; audit trail; reliable content scoring |
| Ali | GeekSpeak | Program Manager | Dashboard customization; requirements | Technical specs for Veracite override |
| Katie | GeekSpeak | Senior CSM | Also handles Lactalis account | Content quality audit ops |
| Suzanne Hicks | GeekSpeak | CSM | Lassonde account lead | Day-to-day delivery coordination |
| Don Brett | External advisor (CPG background) | Positioning consultant | To be consulted once initial DSIM direction set | CPG buyer perspective on DSIM messaging |
