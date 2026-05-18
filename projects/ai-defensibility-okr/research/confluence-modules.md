# Confluence Module Research — PI / AA / MM
**Verified:** 2026-05-13 | **Cloud:** dataweave.atlassian.net

## Pages read

| # | Title | Space | Last updated | URL |
|---|---|---|---|---|
| 1 | Pricing Intelligence Overview and Best Practices | CSM | 2026-02-03 | https://dataweave.atlassian.net/wiki/spaces/CSM/pages/3519774740 |
| 2 | PI Integration with Match Management PRD (Shopbop) | PROD | 2026-02-27 | https://dataweave.atlassian.net/wiki/spaces/PROD/pages/3541762051 |
| 3 | AI wrapper overview (PI + Assortment Text-to-SQL) | SEM | 2026-03-24 | https://dataweave.atlassian.net/wiki/spaces/SEM/pages/3605102593 |
| 4 | AI wrapper Assortment use case | SEM | 2025-07-24 `[STALE]` | https://dataweave.atlassian.net/wiki/spaces/SEM/pages/3013607434 |
| 5 | AI-Guided Match Management (Veracite) | PROD | 2026-05-06 | https://dataweave.atlassian.net/wiki/spaces/PROD/pages/3675783175 |
| 6 | Automation of Bulk Match Addition (PRD) | PROD | 2026-04-24 | https://dataweave.atlassian.net/wiki/spaces/PROD/pages/3656351752 |
| 7 | Match Management Enhancements Jan-2026 | PROD | 2026-04-06 | https://dataweave.atlassian.net/wiki/spaces/PROD/pages/3496443906 |
| 8 | Match Overview dashboard | PROD | 2025-05-27 `[STALE]` | https://dataweave.atlassian.net/wiki/spaces/PROD/pages/2912976898 |
| 9 | Match Management in PI – Widget Help | PROD | 2025-06-13 `[STALE]` | https://dataweave.atlassian.net/wiki/spaces/PROD/pages/2911404039 |

`[STALE]` = older than 6 months from 2026-05-13. Use with verification.

---

## Pricing Intelligence (PI)

### Core features
| Feature | What user does | Output |
|---|---|---|
| Competitiveness tracking | Configure retailers, categories, banners/zips, frequency | Own-vs-competitor price benchmark by SKU/category |
| Unit/UOM normalization | None — system computes per OZ/LB/Each | Apples-to-apples normalized price |
| Custom pricing rules | Define selection logic (lowest variant, 1P only, buy-box only, seller whitelist) | Single representative price per retailer |
| End-user price calc | Include shipping/pickup fees + delivery timelines | "True" price competitiveness, esp. hyperlocal |
| Promo & fee intelligence | Passive | Competitor promo cadence, fee trends |
| Revenue/margin opportunity sizing | Review system-flagged SKUs | Lift estimates from repricing into competitive band; over-discount detection |
| Widgets (4th panel) | Configure dashboard | CSV download per widget (PNG/JPG download under dev May 2026) |
| Product Comparison window | Click a row in Product Details | Side-by-side attribute compare; Brand, prices, SKU, retailer, UOM, pack, normalized price (released Apr 2026 from MM into PI) |
| SKU Overview color-coding | Passive | Cell background red/green vs own price (released Apr 2026) |
| Action log report | Export | Structured columns: SKU, action, reason, user, timestamp (released Apr 2026) |
| Pre-computation of standard reports | Configure cadence | Faster report load |
| Multi-frequency support | Configure per category | Different refresh cadence per category band (UAT Apr 2026) |
| Quarantine workflow (WIP, Oct 2025) | Review high-variance match candidates | Outlier suppression on price index |

### User journeys (top 5)
1. **"Not a Price Leader" daily workflow** — Pricing analyst → opens PI → filters SKUs where own price is not lowest in latest snapshot → reviews competitor set with leader badge + days-since → drills into Product Comparison → exports Action Log (CSV/XLSX) → hands to downstream repricing. _Source: page 2 (Shopbop PRD)._
2. **Hyperlocal price decision** — Analyst → selects banner/zip → views end-user price (price + delivery fee + timeline) → identifies local under-pricing vs national average. _Source: page 1._
3. **Promo response** — Analyst → monitors competitor promo cadence widget → flags categories with sustained competitor discounting → quantifies own over-discounting. _Source: page 1._
4. **Private label benchmarking** — Pricing/merch → uses similarity matches → compares PL vs national brand equivalents → sets value gap. _Source: page 1._
5. **Opportunity sizing** — Analyst → opens opportunity dashboard → reviews overpriced SKUs losing share → quantifies revenue lift if repriced into band → exports list. _Source: page 1._

### Data points / outputs available
- Per-SKU competitor matrix: list price, selling price, normalized price, UOM, pack, stock, position rank, days-since-position-change
- Promo flags, discount depth, shipping/pickup fees, delivery timeline
- Audit log: action, reason, user, timestamp (structured Apr 2026)
- Standard dashboards: Competitiveness, Opportunities, Trends, Fees & Timelines, Private Label, ROI
- API + CSV/XLSX export; widget-level downloads in 4th panel
- KPIs Confluence calls out: price leadership share %, action rate, time-to-action, realized revenue/margin, match quality %, quarantine rate

### Known gaps / friction (from Confluence)
- Pre-Apr-2026: no inline product comparison in PI → users bounced to MM (page 7)
- Action Log "Reason" was free-text until Apr 2026 → couldn't filter (page 7)
- API refresh latency: actioned matches did not flow to PI until next refresh, causing same-day pricing decisions to wait (page 2 + page 6)
- Quarantine for high-variance matches still WIP as of Oct 2025 (page 1 references it; PRD at page 3204349953)
- SCALE report Feb 2026 graded RPI codebase 32/110 (CRITICAL): test coverage 0/20, security 2/15, maintainability 6/20 — implies ship-velocity risk on any AI features layered on top

### AI-interface opportunities
- **Mascot/nudges:** Embed in "Not a Price Leader" view. Nudge on first open: "You have 412 SKUs that lost leadership in the last 7d. 38 are high-velocity (>$50k weekly GMV). Start there?" Persistent nudge when end-user price (with fees) shows a different leader than list price — that gap is exactly the insight CSMs explain in onboarding (page 1, hyperlocal section).
- **Chat + scheduled exports:** AI wrapper PI already does text-to-SQL on Athena (page 3). Strong fit: replace the manual "filter → export → email" loop with "every Monday 7am send me the action log for SKUs in Grocery where price gap > 5%" — pre-scheduled NL queries. Confluence notes role-based visibility (Client sees fewer nodes) — pair with scheduled delivery channels (email, Slack, S3).
- **Agent builder + workflow canvas:** Highest leverage. The journey today is: snapshot → flag NPL → review competitor matches in MM → approve/disapprove → wait for refresh → export → hand to repricing engine. That is a 6-node workflow with conditional branches (auto-approve if confidence > X, else queue). Notion-style canvas would let the analyst configure their pricing playbook once, then watch agent execute it on every PI snapshot.
- **MCP/CLI:** Pricing engines (e.g., Revionics, Competera) and BI tools (Tableau, Looker) consume PI today via CSV/API. Expose PI via MCP so a pricing analyst's agent can ask "for these 50 SKUs, give me competitor selling price + normalized price + days-since-leader change" in one tool call. CLI fits the data-ops persona (page 6) who today downloads no-match reports manually.

---

## Assortment Analytics (AA / DSA)

### Core features
| Feature | What user does | Output |
|---|---|---|
| Category/subcategory annotation | Passive (DataWeave annotates own + competitor catalogs) | Hierarchy + attribute coverage |
| Coverage and gap analysis | Filter by category/subcategory/brand/price | Gap %, overlap %, exclusive-brand list |
| Brand depth comparison | Filter by brand + competitor | Product count, price range, variants |
| Out-of-stock tracking | Passive | OOS % by category by competitor over time |
| Discount comparison | Filter by category | Own vs competitor discount depth |
| Top-seller mining | Passive | Competitor top sellers by category, popularity rank |
| Trend / new-product detection | Vector similarity on title + description | Trending product types missing in own catalog |
| AI Wrapper (Text-to-SQL) | Plain-English query | Tabular comparison, summary, suggested pivots |
| Hierarchy Assortment | Configure hierarchy | Currently rolling out, per sprint reports (Apr–May 2026) |

### User journeys (top 5)
_Page 4 is from Jul 2025 and is the only one with persona-anchored journeys; tag `[STALE]` but still the explicit source._
1. **Subcategory gap detection** — Category manager → "What pen subcategories are not available in my catalog but present in Amazon?" → reviews missing subcategories → follow-up "List brands available in Amazon for those subcategories." _Source: page 4._
2. **Coverage comparison** — Category manager → "Compare Gel Pens across Flipkart, Amazon, and my catalog" → tabular: availability count, avg price, brand diversity. _Source: page 4._
3. **Brand depth check** — Category manager → "How many Tactical Pens of Reynolds are listed on Flipkart?" → count + price range + variants. _Source: page 4._
4. **OOS-driven opportunity** — Category manager → "Which category saw the maximum stock outs on Foot Locker? Out of these, do I carry any?" → identifies own-stock products to push during competitor stockouts. _Source: page 4._
5. **Exclusive-brand-to-carry** — Category manager → "What are the top competitor-exclusive items I should carry?" → ranked exclusivity list for buy-side decision. _Source: page 4._

### Data points / outputs available
- Category / subcategory / brand / attribute taxonomy per source
- Overlap % and exclusivity counts vs each competitor
- Per-product: title, price, MRP, discount, stock, popularity rank, source, UOM, pack
- DuckDB backend via Preanalysis API (page 3) — query-scoped by `account_id`, `format`, `major_version`
- Live accounts cited in page 3: `asm_usa@products_demo`, `asm_ksa@niceone_live` (NiceOne-SA seed vs Amazon, Extra, Goldenscent, IHerb, Nahdi)

### Known gaps / friction (from Confluence)
- AI Wrapper limits (page 4, Jul 2025): no multi-turn beyond 3 turns; only descriptive analytics — no diagnostic ("why did it happen") or prescriptive ("what should I do") yet. Page commits to "next couple of weeks" — verify if shipped.
- Summary generation cost dominates (~$1.16 per query of which $1.15 is summarization for 500 rows × 4 cols) — caching layer not yet built (page 4).
- Schema-update workflow exists but requires support-engineer touch when bot misinterprets — friction loop (page 4).
- Out-of-scope query guardrails are scoped but were WIP in Jul 2025.
- `TaskPlannerNode` and `PivotSuggesterNode` hard-code PI schema regardless of product (page 3 weakness section) → Assortment planner gets wrong schema. Latent correctness bug.
- No checkpointer wired up (page 3) — conversation memory does not survive service restart.

### AI-interface opportunities
- **Mascot/nudges:** Mascot on dashboard load: "Your Gel Pen gap vs Amazon widened 12% week-over-week. 8 new SKUs appeared on Amazon you don't carry. Want the list?" Trigger on _delta_, not absolute state — the AA UI today shows static counts, not change-driven nudges. Big retention lever for category managers who only check weekly.
- **Chat + scheduled exports:** The AI Wrapper IS this opportunity, already shipping. PM gap: it stops at descriptive. Layer scheduled delivery — "every Monday, send me the OOS-on-Foot-Locker-but-I-carry list" — onto the existing text-to-SQL. Page 4 explicitly cites caching + cost as the blocker; scheduling solves both (one expensive query → many cheap reads).
- **Agent builder + workflow canvas:** Category-manager playbook in canvas form: (1) detect new subcategories on competitor → (2) score by velocity/price band → (3) cross-check against own catalog → (4) draft a buy-recommendation doc. Today this is 4 separate chat queries by a senior analyst; canvas codifies the senior's playbook for juniors. Stronger fit for AA than PI because the AA "answer" is a curation list, not a numeric decision.
- **MCP/CLI:** Critical for merchandising tool integration. Expose AA via MCP so a buyer's agent at Costco can query "give me Reynolds Tactical Pens on Flipkart with price > ₹300" directly from their procurement tool. CLI fits the ad-hoc analyst flow ("aa query 'compare gel pens'") — faster than dashboard for power users.

---

## Match Management (MM)

### Core features
| Feature | What user does | Output |
|---|---|---|
| Approve / Disapprove matches | Click per-match action | Audit log entry, state change |
| Match review queue | Filter by state, score, classification, attributes | Filtered list of bundles |
| Bulk approve/disapprove | Select via checkbox (single page or "all 1,284 filtered") | Async batch action, partial-failure handling |
| Bulk match addition by URL | Drag-drop CSV/XLS (up to 50k rows, 50MB) | Validation → dedup → match → optional auto-approve |
| Search + add match | Keyword + competitor filter | Suggestion list ranked by match score |
| Singletons view | Filter | Unmatched products by competitor |
| Suggestions table | Review system-recommended matches | Add to active matches |
| Auto-approve rules | Configure threshold (default 85% confidence) | Inline auto-approval; dry-run mode; 24h rollback |
| Match Overview dashboard | Filter by retailer/category/sub-cat/brand; pivot | Match count vs product count, pending review counts |
| Action Log export | Pull export | CSV/XLSX, filtered by time window |
| Zip/Zone match override (PRD WIP) | Per-location config | Hyperlocal match override |
| PI ↔ MM parity sync | Passive (incremental sync post initial backfill) | Singletons + bundles + auto-approved status visible in MM |

### User journeys (top 5)
1. **Daily match review** — Analyst → opens MM Overview → sees pending-review counts by retailer → clicks Amazon row → drills to filtered All Products view → approves/disapproves per match. _Source: pages 8, 9._
2. **Bulk URL upload by Data Ops** — Drag CSV onto drop zone → status "Processing" → 380 matched / 20 errors → inline "Edit URL" on fixable rows, "Skip & Continue" on rest → if auto-approve rule ON, matches go live → toast + audit entry. _Source: page 6._
3. **Bulk approve filtered set** — Analyst → filters Match Review to confidence > 85% + brand exact match → header checkbox "Select all 1,284" → Bulk Approve → confirmation modal "1,284 selected · 1,284 will be Approved. Proceed?" → async progress → success toast or partial-failure summary. _Source: page 7._
4. **Unmatched diagnosis (proposed AI flow)** — Analyst → opens Unmatched Bundles → grouped by failure pattern (missing attr / title mismatch / no candidates / catalog inconsistency) → for each group, AI suggests: "Relax brand + size → 78% match probability" → one-click "Apply relaxation to all" → auto rematch. _Source: page 5._
5. **PI-flagged SKU resolution** — Pricing analyst hits "Not a Price Leader" → drills into competitor matches → spots a bad match (price way off due to UOM mismatch) → disapproves in MM → exports action log → downstream pricing acts same day. _Source: page 2._

### Data points / outputs available
- Per-match: bundle ID, customer SKU, competitor URL, source, match score, status (Pending/Approved/Disapproved), match type (Exact/Similar), reason, user, timestamps
- Aggregate: total matches, pending review, % approved by retailer/category/subcategory/brand
- Audit log: every bulk action, immutable, 12-month retention, 24h rollback window
- User-wise activity widget (workload, pending, conflicts) — manager view
- File upload: CSV, XLS, XLSX; up to 50k rows per file; 10 files per session

### Known gaps / friction (from Confluence)
- Manual one-at-a-time review does not scale — bulk approve PRD Jan 2026 is the explicit fix (page 7)
- Async refresh latency: approved matches did not appear in PI for "up to a week" — Automation PRD (page on Automation, Apr 2026) targets next-refresh visibility
- Bulk upload pipeline historically dependent on Delivery+QA: customer URL → email → manual crawl → Solr → Veracite → QA → merge → V6 → flag update. Page 6 calls out "no automation at input, no transparency in processing, no user control"
- No clear status tracking pre-Apr-2026: V6 flag update was the only signal
- Match score / confidence not exposed in UI yet — page 5 enhancement proposes confidence + weighted attribute explanation ("Title 45%, Brand 30%, Size -10%")
- "Auto-approval rules engine" is proposed (page 5), not shipped — disconnect from current single auto-approve toggle
- Tech Debt report (Mar 2026, page 3540221968): SQL injection P0 in `end_user_audit.py`, test coverage 3/20, aggregate 34/110 — material risk for AI features built on top

### AI-interface opportunities
- **Mascot/nudges:** MM is the highest-fit module for the mascot. Inline nudges fit naturally with the workflow Confluence proposes (page 5): "12 matches similar to your past approvals → Auto-approve?" "Match rate dropped 8% due to new catalog ingestion — investigate?" Mascot's job: surface auto-approval candidates + flag pattern anomalies + explain confidence (45% title sim + 30% brand match - 10% size mismatch). Without a personality layer, the dense AI explanations Confluence proposes will overwhelm analysts.
- **Chat + scheduled exports:** Natural-language match queries via the AI Wrapper: "show me high-confidence unmatched Reynolds Tactical Pens on Flipkart" replaces the dropdown chains. Scheduled: "every morning, email me the action log for matches I approved yesterday." Pairs with Audit Log export (already CSV/XLSX) — turn ad-hoc into automated.
- **Agent builder + workflow canvas:** Highest fit of all 3 modules. Page 5 already describes an agent flow: "System prioritizes → suggests → user validates → system learns" with 8 nodes (Overview action queue → Unmatched AI-guided resolution → Match Review with confidence → Auto-Approval rules → Stats with explainability → Lifecycle proactive cleanup). Notion-canvas could let CSMs build per-customer playbooks: BJs/Costco/Shopbop each have different match approval rules (UOM strict, brand exact, location override). Canvas converts CSM tribal knowledge into runnable policy.
- **MCP/CLI:** Most concrete win for AI defensibility. Veracite already exposes match data via APIs to downstream PI; MCP turns that into agent-callable. A Costco merchandising agent could call `mm.approve_matches(filter: confidence > 0.9, brand_exact: true)` programmatically. CLI for Data Ops (page 6 persona) replaces drag-drop CSV: `mm upload amazon-hardware-tools.csv --auto-approve-above 0.85 --dry-run`.

---

## Cross-module observations

### Data joins available
- **PI ↔ MM:** Match parity sync (page 7, in-flight). PI surfaces a SKU's competitor set; MM lets user fix the matches; auto-refresh closes the loop. Page 2 (Shopbop PRD) is the explicit join: "Not a Price Leader" view in MM, filtered by latest PI snapshot.
- **PI ↔ AA:** Shared infra (AI wrapper, Athena/DuckDB), shared accounts, shared user role model (`Semantics` / `CSM` / `Client`). No documented join on data itself (PI = price snapshots; AA = catalog snapshots) — both flow from the same crawl, but Confluence doesn't surface a unified view.
- **MM ↔ AA:** Implicit. Singletons in MM are products that need matching; AA's gap analysis identifies products that should be in catalog. Not joined in product surface.

### Schema fragmentation
- Athena (PI) returns `"Sucess"` (typo). DuckDB (AA) returns `"success"`. Routing in AI wrapper is brittle (page 3 weaknesses).
- `TaskPlannerNode` and `PivotSuggesterNode` always load PI schema — Assortment queries planned against wrong schema (page 3 weaknesses). Latent bug, not documented as remediated.
- Knowledge base layout is product-scoped (`pi_knowledge`, `assortment_knowledge`) but account knowledge is sparse: only `us_grocery_demo` for PI and 2 Assortment accounts. Production rollout requires per-account knowledge population — Confluence does not document SLA or self-serve flow for this.

### Persona overlap
- "Category manager" is implicit in AA use cases (page 4) but never named in PI or MM Confluence pages. PI is documented for "Pricing Analyst." MM is documented for "Data Ops" (page 6) and "client teams" (page 6).
- "Ecommerce lead" not explicitly mentioned in any Confluence page reviewed. **Confluence gap — needs CSM validation.**
- The CSM Playbook (page 857768097, Oct 2025) is the place to look for persona definitions; not pulled in this pass.

### Role-based visibility (page 3)
Already implemented in AI Wrapper:
- `Semantics` → all 13 node updates (data scientist persona)
- `CSM` → 5 node updates (process milestones)
- `Client` → 3 node updates (start, execute, answer)
This is a strong base for the AI defensibility OKR — the Client role is exactly where mascot/nudges/chat should live.

---

## Open questions / Confluence gaps

1. **Category manager / Ecommerce lead persona definition.** Not found in PI, MM, or recent AA docs. Page 4 (Jul 2025) treats category manager as the AA AI Wrapper user but does not define daily/weekly cadence or JTBD. **Needs CSM validation.**
2. **Has AA AI Wrapper shipped diagnostic + prescriptive analytics?** Page 4 (Jul 2025) said "next couple of weeks." 10+ months later — verify in sprint update pages (3686367241 Apr 29 – May 12 2026).
3. **Is caching layer for AI Wrapper summary live?** Cost analysis (page 4) shows $1.16/query dominated by summarization. Critical for AI features ROI.
4. **Quarantine for high-variance matches** — PRD WIP Oct 2025 (page 3204349953, not read this pass). Ship status unknown.
5. **Match score / confidence in UI** — page 5 proposes weighted explanation. Not in Match Overview (page 8). **Needs design status check.**
6. **Auto-approval rules engine** vs current single toggle — page 5 proposes per-rule engine. Implementation status unknown.
7. **Hyperlocal match override (Zip/Zone)** — page 3389161473 referenced as "for later" in page 7. Status unknown.
8. **Daily PI ingestion for "Not a Price Leader" view** — page 2 explicitly defers to Phase 2. Phase 0 pilot uses twice-weekly scheduled loads for Shopbop. Production cadence not yet defined.
9. **Cross-module conversational continuity.** AI wrapper conversation history exists per-product. No documented flow for "I asked about a SKU in PI, now I want to fix its match in MM, then check assortment gap in AA" in a single agent thread. Major canvas opportunity.
10. **MCP / CLI distribution surfaces** — zero documentation. Greenfield for the AI defensibility OKR.
