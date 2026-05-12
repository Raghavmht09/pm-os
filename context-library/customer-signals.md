# Customer Signals Log
Last updated: 2026-05-05

> Sources: DSIM GTM Internal meeting (2026-04-24), Geekspeak/Lassonde transcript (2026-04), Geekspeak/Lassonde PRD (2026-04-16), DSIM productization scope Q&A (2026-04-25), DSIM positioning/personas doc (2026-04-25).

---

## Top Pain Points (ranked by frequency × severity)

| Pain Point | Frequency | Severity (1–5) | Accounts Affected | Source | Date |
|---|---|---|---|---|---|
| ROAS data exists but can't explain *why* ROAS is what it is — no causal decomposition | High (3+ accounts expressed) | 5 | Lactalis, Bush Brothers, general pipeline | DSIM GTM Internal; Lactalis PoC debrief | 2026-04-24 |
| Media measurement comes from inside the activation platform — perceived bias (student grading own test) | High | 5 | RGM / Finance buyers broadly | Leadership transcript 2026-04-24; objection handling doc | 2026-04-24 |
| Campaign recommendations all say "increase spend" — no explicit reallocation guidance (move $X from A to B) | Confirmed | 4 | Lactalis explicitly; assumed pipeline-wide | Leadership meeting 2026-04-24 | 2026-04-24 |
| Automated content scoring produces false positives/false negatives — no way to override without re-running full pipeline | Confirmed | 4 | Lassonde (via GeekSpeak) | Geekspeak × Lassonde PRD problem statement | 2026-04-16 |
| Every monthly crawl overwrites prior content match results — no state memory for human corrections | Confirmed | 4 | Lassonde (via GeekSpeak) | PRD v1.0 | 2026-04-16 |
| No audit trail when content match decisions change — no accountability or dispute resolution | Confirmed | 3 | Lassonde (via GeekSpeak), likely repeatable across agency-managed brands | PRD v1.0 | 2026-04-16 |
| Finance teams skeptical of Walmart Connect's own attribution (last-touch, walled garden) — need independent validation | High | 5 | RGM / Finance persona broadly | GTM plan ICP; objection handling | 2026-04-21 |
| Scintilla shows correlation, not causation — brands can't defend budget requests to CFO | High | 5 | Any brand with Scintilla Charter access | Objection handling doc; GTM plan | 2026-04-21 |
| OOS during peak media periods visible in data but not connected to media suppression — brands don't see the linkage | Confirmed (Lactalis: 78% in-stock during peak) | 4 | Lactalis confirmed; assumed industry-wide | DSIM plan-of-action | 2026-04-16 |
| Keyword discovery happens only at setup — no ongoing recommendation for keywords not being bid | Confirmed | 3 | Lactalis | GTM Internal meeting 2026-04-24 | 2026-04-24 |

---

## Feature Requests Pipeline

| Request | Requester(s) | Linked Roadmap Item | Evidence Strength | Status |
|---|---|---|---|---|
| Explicit reallocation recommendation in DSIM output ("move $X from channel A to B") | Lactalis / Leadership | Tableau template fix (Immediate Action 1) | STRONG — explicit leadership call-out | IN ROADMAP (2-week fix) |
| Store-cluster breakdown with distinct channel response per cluster | Lactalis; assumed pipeline | DSIM Phase 0 — all 4 MVP outputs | STRONG — Lactalis 17 clusters validated | IN ROADMAP |
| Confidence intervals on all lever estimates | Finance/RGM persona broadly | DSIM MVP output standard | STRONG — Finance defensibility requirement | IN ROADMAP |
| Content score override mechanism for external enablers (agencies) | GeekSpeak on behalf of Lassonde | DSA Veracite override feature | STRONG — PRD v1.0 written | IN ROADMAP (pre-dev) |
| RBAC: different permissions for agency vs. brand admin | GeekSpeak | DSA RBAC feature | STRONG — scoped in PRD | IN ROADMAP |
| Scintilla-free DSIM path (CSV fallback for non-Charter brands) | Bush Brothers likely; pipeline | DSIM Phase 0 intake form (already covers) | MODERATE — Scintilla pre-qual reveals need | IN ROADMAP |
| Sub-brand halo effect measurement ("which brand's media is lifting adjacent SKUs?") | Lactalis (Adult ← Kids/Baby halo) | DSIM Phase 0 MVP output scope | STRONG — Lactalis confirmed halo at 12% | IN ROADMAP |
| API connection with PIM tools (Plytex/Salsify) for content syndication | GeekSpeak / Lassonde | OUT OF SCOPE v1 | MODERATE | DEFERRED — v2 |
| Multi-retailer DSIM (Target, Instacart) | Pipeline general | Parking lot — Q4 2026 | MODERATE | DEFERRED |

---

## Sentiment Log

| Account | Sentiment | Risk Level | Last Touchpoint | Notes |
|---|---|---|---|---|
| Lactalis | POSITIVE (PoC validated) | LOW | April 2026 | Internal PoC. Global retail media lead showed strong interest. Not paying yet. |
| GeekSpeak × Lassonde | NEUTRAL → positive | MEDIUM | April 2026 | First joint implementation. Content override PRD submitted. Weekly sync in progress. Shared prior relationship via Lactalis. |
| Bush Brothers | POSITIVE interest | LOW–MEDIUM | May 2026 (meeting scheduled) | Strong interest expressed. May meeting confirmed. Scintilla pre-qual needed first. |
| Beiersdorf | NEUTRAL | MEDIUM | Q2 2026 follow-up pending | Will follow up after some time. No urgency signal. |
| Magic Spoon | POSITIVE interest | LOW | End Q2 2026 | Wants to talk end of Q2. Pipeline stage: awareness. |
| ShopHop | POSITIVE | LOW | Recent | Positive feedback reported in internal meeting. No deal stage info available. |
| Clorox | UNKNOWN | MEDIUM | Not initiated | Named as beta candidate in launch scope decision. Existing DSA relationship. No outreach initiated yet. |
| Mondelēz | UNKNOWN | MEDIUM | Not initiated | Named as beta candidate. CIQ case study ($4M wasted media saved) = sophisticated buyer. |

---

## Signal Patterns

1. **The measurement credibility gap is the universal wedge.** Every pipeline account conversation surfaces skepticism about activation-platform measurement. Lactalis, the leadership team, and multiple objection-handling scenarios all point to the same buyer problem: "I can't trust the measurement from the company selling me the ads."

2. **Finance/RGM buyers hold the budget AND the skepticism.** The pain isn't eCommerce ops — they like their current tools. The buyer who needs DSIM is RGM or Finance, who is being asked to defend $500K–$5M Walmart Connect spend to a CFO.

3. **Reallocation framing outperforms optimization framing.** Lactalis leadership pushed back on "all three recommendations say increase spend." The explicit move-money-from-A-to-B frame resonates with Finance. This is the Immediate Action fix.

4. **Agency-managed brands are a distinct segment with different tooling needs.** GeekSpeak × Lassonde reveals: agencies operating on behalf of brands need override authority, RBAC, and audit trails that direct-brand implementations don't surface as pain. This pattern likely repeats across other agency relationships.

5. **Scintilla access tier is a deal-qualifier, not a deal-blocker.** Charter = automated path. Basic = CSV fallback. Pre-qualifying before scoping calls prevents wasted time scoping the wrong data path.
