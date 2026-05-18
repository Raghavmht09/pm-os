# Mascot Validation Test Protocol — Lean Round

**Owner:** PM + CSM (no UXR) · **Status:** Ready to run · **Created:** 2026-05-14
**Decision horizon:** 2 weeks · **Cost of wrong call:** Low (reversible)

---

## 1. Why this protocol exists

The AI Wrapper strategy proposes a mascot as the only category-first defensible hook against Profitero, Salsify, Syndigo, Intelligence Node, and 42Signals — none of whom have one. The risk is that enterprise procurement buyers (Walmart, Costco, Adidas) read mascots as unserious. The reward is durable brand memory in a category where every competitor's AI looks identical. We need a fast read on which of five directions our own customer-facing team and leadership would accept before we spend on visual design or live customer time.

This round is a screen, not a verdict. If a visual direction wins, we hand it to UXR for Phase 2 quant with live buyers. If "invisible" wins, we drop mascot from the strategy and lean on other defensibility hooks.

---

## 2. Synthetic pre-screen — role-played walkthrough

Before fielding, I role-played each of the 5 directions as (1) a Walmart category manager seeing them in a vendor demo and (2) a DataWeave CSM presenting them in a QBR.

| Direction | Buyer reaction (Walmart cat mgr) | CSM reaction | Risk flag |
|---|---|---|---|
| a. Invisible chat bubble | "Fine. Looks like every other tool." | Easy to demo, nothing to defend. | LOW — safe but undifferentiated |
| b. Named persona, no visual ("Asha") | "OK, I can refer to it by name internally. Doesn't feel toy-like." | Helpful in handoffs — "ask Asha to pull that." | LOW — neutral upside |
| c. Abstract avatar (pulsing shape) | "What is that. Is it loading?" Confusion, not offense. | Hard to explain on a slide. | MEDIUM — ambiguity tax |
| d. Anthropomorphic clipboard analyst | "This is a procurement tool, not a Slack app." Eyebrow raise. Hands to compliance. | "I'd skip that slide in front of Costco." | **HIGH — highest pushback** |
| e. Brand-extension mascot (logo-morph) | "Cute. Slightly weird. Wouldn't kill the deal." | Defensible as branding, not a character. | MEDIUM-LOW — survivable |

**Pre-screen call:** Direction **D (anthropomorphic character)** is the highest-risk direction. Buyer-side and CSM-side both flagged it. It stays in the test because the strategy doc explicitly bets on character-driven memorability — we need to know if the upside on memorability beats the downside on professional fit, not assume it.

---

## 3. The five directions

### a. Invisible
**Stimulus:** Dashboard with a small "Ask" chat input in the lower right. No avatar, no name, no personality cues. Response text only.
**Trigger moments:** Manual click only — no proactive nudges, no greeting.
**Hypotheses:**
1. Will score highest on professional fit (≥ 4.0/5).
2. Will score lowest on memorability (≤ 2.5/5).
3. Trust will be neutral (3.0–3.5) — neither earned nor lost.

### b. Named persona, no visual
**Stimulus:** Same chat input, but greeting reads "Hi, I'm Asha, your retail-intel assistant." Responses signed "— Asha." No image.
**Trigger moments:** Greeting on first open per session; suggestion cards signed by name; error messages in first person.
**Hypotheses:**
1. Memorability will lift over (a) by ≥ 0.8 points.
2. Professional fit will hold within 0.3 points of (a).
3. CSMs will report higher willingness to reference it in customer calls than (a).

### c. Abstract avatar
**Stimulus:** Small geometric shape (rounded square, brand color) that pulses softly when the AI is thinking. No face, no name.
**Trigger moments:** Pulse on think; static otherwise; appears next to suggestion cards.
**Hypotheses:**
1. Distraction will score worst of all 5 (≥ 3.0/5 on distraction — higher is worse).
2. Trust will not differ meaningfully from (a) (within 0.4 points).
3. Open-text comments will surface confusion ("what is that") in ≥ 30% of responses.

### d. Anthropomorphic character
**Stimulus:** Illustrated retail analyst character with clipboard, appears in a corner card during nudges and greetings. Friendly but not cartoonish.
**Trigger moments:** Greeting card on dashboard load; appears in nudge toasts; waves on error.
**Hypotheses:**
1. Memorability will score highest of all 5 (≥ 4.0/5).
2. Professional fit will score lowest of all 5 (≤ 2.5/5).
3. Would-deploy-internally will split sharply by role — CSMs above 3.5, leadership below 3.0.

### e. Brand-extension mascot
**Stimulus:** DataWeave logo with subtle character traits (eyes, slight tilt on think). Lives in the same chat affordance as (a). Feels like a brand mark, not a character.
**Trigger moments:** Idles in chat surface; animates subtly on think and on suggestion delivery.
**Hypotheses:**
1. Will score within 0.5 points of (b) on professional fit.
2. Memorability will lift over (a) and (b) by ≥ 0.5 points.
3. Will be the modal first-choice pick across the 12-person panel.

---

## 4. Test mechanics

**Sample:** 6 customer-facing CSMs + 6 leadership stakeholders (Product, Sales, CS leadership). No live customers in this round.

**Format:** Unmoderated, 30 minutes. Each participant receives a static stimulus deck (5 directions, same dashboard mockup, mascot swapped per slide), reviews independently, then completes a one-page form per direction.

**Scales (1–5, all directions):**
- Trust — would you trust output from this assistant
- Professional fit — does this feel right for a procurement/category-mgr audience
- Distraction — does the mascot pull attention from the data (higher = more distracting)
- Memorability — a week from now, would you remember this product
- Would-deploy-internally — would you stand behind this in front of your customer

**Open text (one per direction):** "If you had to defend or kill this in front of a Costco buyer, what would you say?"

**Final question:** Rank all 5 directions, first to last.

---

## 5. Decision matrix

| Outcome | Trigger | Action |
|---|---|---|
| **Drop mascot** | (a) wins on trust **and** professional fit by ≥ 0.5 over best visual | Remove mascot from strategy; reinvest in other defensibility hooks |
| **Name-only** | (b) wins on combined trust + would-deploy, with no visual scoring higher on memorability by ≥ 0.8 | Ship "Asha" naming; no visual in v1 |
| **Visual contender** | Any of c/d/e scores top-2 on memorability **and** ≥ 3.5 on professional fit | Greenlight Phase 2 UXR quant with live buyers before committing visual design |
| **No-clear-signal** | Top score within 0.3 across 3+ directions | Default to (b); revisit in Q3 |

Hard reject rule: any direction scoring < 2.5 on professional fit from leadership panel is removed from Phase 2 regardless of other scores.

---

## 6. Two-week timeline

| Day | Activity |
|---|---|
| 1–2 | PM builds static stimulus deck (5 dashboard mockups, mascot swapped) |
| 3 | CSM reviews stimulus deck for realism; one revision pass |
| 4–5 | Recruit panel (6 CSM + 6 leadership); send calendar holds + async form link |
| 6–10 | Field window — participants complete async on their own time |
| 11 | PM compiles scorecard, computes means + variance |
| 12 | PM + CSM review against decision matrix; draft recommendation |
| 13 | Recommendation to leadership; go/no-go on Phase 2 UXR |
| 14 | Decision logged in `/decisions/competitive-response/` |

---

## 7. Scorecard template

| Direction | Trust (1–5) | Pro fit (1–5) | Distraction (1–5, lower better) | Memorability (1–5) | Would-deploy (1–5) | Rank (1–5) | Open-text flag |
|---|---|---|---|---|---|---|---|
| a. Invisible | | | | | | | |
| b. Named persona | | | | | | | |
| c. Abstract avatar | | | | | | | |
| d. Anthropomorphic | | | | | | | |
| e. Brand-extension | | | | | | | |

**Panel splits to compute:** CSM mean vs leadership mean per direction; variance per direction (high variance = polarizing = flag for Phase 2 even if mean is mid).

**Fields below the table:**
- Modal first-choice pick: _____
- Hard-reject directions (any < 2.5 on pro fit from leadership): _____
- Recommendation per decision matrix: _____
- Confidence (1–5): _____
