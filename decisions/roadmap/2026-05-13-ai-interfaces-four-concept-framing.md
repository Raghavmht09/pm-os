# 2026-05-13 — AI Interfaces: Four-Concept Framing for AI Defensibility OKR

## Decision made
Frame the AI Defensibility OKR portfolio as four concepts with ranked roles: (A) embedded nudges + mascot-tested, (B) MCP/CLI distribution, (C) agent builder + workflow canvas, (D) chat + scheduled exports folded as enabler — not as a standalone headline.

## Context (when, why this came up)
- 2026-05-13 session. PM kicked off discovery on AI interface strategy across PI / AA / MM (and DSA later) modules.
- Existing AI Wrapper v1.1 is CSM-Beta on 6 accounts; client-ready features still gated by eval framework + module onboarding.
- Salsify (Oct 2025) and Syndigo (Fall 2025) have shipped agentic PXM interfaces. Profitero hasn't visibly evolved since 2023. Competitive window is open but closing.
- Leadership pitch needed: which AI interface concepts move which metric for which user persona.

## Alternatives considered

1. **Lead with standalone chat product** ("DataWeave AI Assistant"). Aakash's Distribution Playbook + Miqdad's 3-Layer model both flag: "we do AI" wedges fail the OpenAI Test. Cloned overnight by free GPT/Claude buttons inside customer-existing tools. Memory-across-sessions has zero literature coverage as a defensible feature. Rejected as headline; folded as enabler (D).

2. **Lead with agent builder + workflow canvas** as the customer-facing headline. Architecturally validated (Intent 7-part spec, Glean unified builder, Notion Custom Agents, Zapier Canvas). But no PDF describes exposing this paradigm to end-user analysts — orchestration semantics are not customer-ready UX. Risk: analysts confused by "specialist agents" + "stop rules" mental model. Rejected as Q2 headline; sequenced as internal-CSM-first → CSM Beta → analyst self-serve Q1 2027 (C).

3. **Lead with MCP / CLI only.** Strongest literature validation (Aakash 33-page playbook, Gartner 40%/2026 stat). 4-week, 2-engineer scope. Defensible. But MCP/CLI is invisible to non-engineers — it's a distribution channel, not an interface customers experience. Without embedded UX (Concept A), retail buyers won't see the value. Rejected as sole bet; sequenced parallel with A (B + A together).

4. **Build everything in parallel.** Tempting given perceived urgency. Rejected: PI SCALE 32/110 + MM SCALE 34/110 (P0 SQL injection) cap velocity. Concentration on A + B with C as orchestration plane is the realistic 2-quarter scope.

## Reasoning (why this won)

- **OpenAI Test passes for B + A + C** (each requires DataWeave proprietary retail-intel data + tenant context), **fails for D**. Concentration of investment on tests that pass.
- **Competitive white space is concrete.** Retail-intel competitors have no MCP server, no analyst-facing agent builder, no mascot, no Trust Layer. DataWeave can claim category-first on B, C, and mascot-in-A within two quarters.
- **Existing investment compounds.** AI Wrapper v1.1 (LangGraph, role-based visibility, golden-query eval) is the foundation for all four. Not parallel stacks.
- **Sequencing matches capacity.** B Phase 0 = OpenAPI + AGENTS.md = doc-only, can run before/in parallel with A design sprint. C internal alpha follows once CSM playbooks are surfaced.

## Trade-offs accepted
- **No standalone chat product brand.** "DataWeave AI Assistant" as a discrete SKU is off the table. Buyers see the AI as embedded, not as a separate product to sell. Renewal narrative becomes harder to articulate.
- **Mascot may not ship.** If user validation says "make it invisible," we lose a saleability hook. Accepted as the price of avoiding the Notion-AI-style "AI invisible / actions transparent" violation.
- **Agent builder is not customer-facing for 2 quarters.** Competitors who ship analyst-facing builders sooner gain a vocabulary lead. Accepted because premature customer-facing UX = churn risk.
- **D is folded, not killed.** Chat + scheduling still ship as capabilities under A and C — but they don't get headline budget or independent metrics.

## Supersedes
None (first decision on AI interfaces post-discovery).

## Linked artifacts
- Strategy doc: `projects/ai-defensibility-okr/ai-interfaces-strategy.md`
- Discovery report: `projects/ai-defensibility-okr/discovery-report.md`
- Research: `projects/ai-defensibility-okr/research/competitive-scan.md`, `confluence-modules.md`, `substack-synthesis.md`

## Revisit triggers
- Concept B Phase 0 5-question audit reveals API readiness materially worse than expected (would push B to Q3 staffed differently).
- Mascot test fails or succeeds with strong signal (decision: ship character vs nudges-only).
- Competitor ships an analyst-facing agent builder in retail intel within Q2-Q3 2026 (would force C to compress or reposition).
- AA AI Wrapper caching layer ships and changes per-query cost economics by ≥50% (would change Concept D folding rationale).
- CSM Beta cohort feedback indicates persona model needs redefinition (would push entire framing to v2).

## Open questions inherited
See `projects/ai-defensibility-okr/ai-interfaces-strategy.md` §6 — 15 numbered open questions across persona, tech readiness, and GTM.
