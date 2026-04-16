# Decision: Launch DSIM (Digital Shelf Impact Measurement) with Walmart-only focus in Q2

**Date:** 2026-04-16
**Area:** roadmap
**Status:** ACTIVE

---

## Context
DataWeave has developed a new product—DSIM (Digital Shelf Impact Measurement)—that quantifies the causal impact of shelf changes (pricing, content, availability, sponsored placement) on sales. The product is ready for beta, and the team needs to decide: launch it broadly across all retailers, or narrow to Walmart first?

Competitive landscape shows 16 vendors competing for this same buyer (Profitero, CommerceIQ, Pacvue, etc.). Several are already multi-retailer. Window to establish a differentiated position is narrow.

---

## Alternatives Considered

- **Option A: Walmart-only launch (CHOSEN)**
  - Pro: Concentrated marketing → credibility as "the Walmart incrementality engine." Product is Walmart-native, data pipeline optimized for Walmart. Sales team can specialize. 
  - Con: Limits TAM to Walmart-native buyers. Longer path to multi-retailer later. Competitors may establish position in other retailers first.

- **Option B: Multi-retailer launch (Walmart + Target + Instacart)**
  - Pro: Larger TAM immediately. Position as "retailer-agnostic." Harder for competitors to differentiate.
  - Con: Product roadmap spreads thin across 3 retailer data pipelines. Sales messaging diluted. Integration complexity higher. Risk of shipping "good enough for everyone, great for no one."

- **Option C: Phased (Walmart Q2, add Target/Instacart Q4)**
  - Pro: Balances focus (Walmart nail) + growth (add retailers later). Validates model with Walmart before expanding.
  - Con: Slower to multi-retailer revenue. Messaging confusion during transition. Customers may wait for broader support.

---

## Decision
**Launch DSIM with Walmart-only focus in Q2 2026. Multi-retailer expansion is Q4 2026 earliest.**

---

## Reasoning
1. **Competitive positioning:** Walmart-native credibility is harder to earn after launch. CommerceIQ and Profitero are broad; DSIM wins by being narrow-and-deep.
2. **Product maturity:** Walmart pipeline is production-ready. Target and Instacart require new crawl infrastructure and data model validation — adds 8-12 weeks of engineering.
3. **Sales leverage:** Walmart spend is concentrated ($50B+ annual ad spend). Penetrating Walmart deeply is higher ROI than spreading thin across 3 retailers at 50% feature parity.
4. **Customer signal:** Two of our beta accounts (Clorox, Mondelēz) are Walmart-native sellers. Early feedback is strong on Walmart-specific features.

---

## Trade-offs Accepted
- **Narrower TAM in Q2:** ~200 addressable Walmart-native brands vs. ~500 if we went multi-retailer immediately. Cost: ~$2-5M in potential Q2 ARR.
- **Competitor expansion risk:** Profitero, CommerceIQ, Pacvue will likely add Target/Instacart in Q2-Q3, potentially establishing position there before we launch. Mitigation: overtake them on Walmart first, then expand with momentum.
- **Delayed Target/Instacart revenue:** Multi-retailer revenue deferred 6 months. Impacts full-year ARR target by ~$3-8M (estimate TBD after Walmart launch).

---

## Supersedes
None — this is the initial decision.

---

## Reviewable
Revisit this decision if:
- Walmart adoption rate falls below 20% of addressable market by end of Q2 (signals product-market fit issue)
- A customer requests multi-retailer support and signals churn risk if not available (major account leverage)
- A competitor (CommerceIQ, Profitero) establishes 3+ enterprise accounts on Target/Instacart in Q2, signaling winner-take-most dynamics in those channels
