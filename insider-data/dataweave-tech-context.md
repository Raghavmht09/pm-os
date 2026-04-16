# DataWeave Tech Context
Last updated: [date — fill in when you populate this]

> **How to use:** Fill this file with internal knowledge about DataWeave's architecture, data pipeline, and tech stack. The OS references this when generating PRDs, FRDs, GTM plans, and competitor analysis — especially for technical feasibility flags and differentiation claims.

---

## Core Architecture (Overview)

[FILL IN: high-level system architecture — data ingestion → processing → analytics → delivery]

Key layers to document:
1. **Data Collection Layer:** [web crawling infrastructure, frequency, coverage — retailer sites, brand sites, marketplaces]
2. **Data Processing Layer:** [product matching, normalization, deduplication]
3. **ML / AI Layer:** [LLM-based attribute extraction, computer vision for image/shelf analysis, GPT-based analytics, text/image embeddings]
4. **Analytics Layer:** [how processed data becomes Pricing Intelligence / Digital Shelf / Content Analytics outputs]
5. **Delivery Layer:** [API, dashboards, integrations, export formats]

---

## Technology Stack

### Data Collection
[FILL IN: crawling infrastructure details, frequency, scale (SKUs/day), geo coverage]

### Product Matching
[FILL IN: how DataWeave matches products across retailers — exact match, fuzzy match, embedding similarity, human review loop]

### LLM / AI Capabilities
[FILL IN: which models are used, for what tasks, what the latency/accuracy tradeoffs are]
- Attribute extraction: [model, accuracy benchmark, known limitations]
- Content optimization suggestions: [approach]
- GPT-based analytics layer: [what questions it can answer, what it cannot]
- Computer vision / image analysis: [shelf detection, image quality scoring, what it does]

### Infrastructure
[FILL IN: cloud provider, data warehouse, real-time vs. batch processing boundaries]

---

## Data Pipeline Characteristics

[FILL IN: latency from crawl to customer-visible data — this is critical for PRD non-functional requirements]
- Data freshness SLA: [X hours from crawl to dashboard]
- Crawl frequency: [by retailer tier / by SKU priority]
- Coverage: [number of retailers, markets, countries]
- Known pipeline constraints: [failure modes, scale limits, data gaps by geography or retailer]

---

## Key Technical Differentiators

[FILL IN: what DataWeave does technically that competitors cannot easily replicate]
1. [Differentiator]: [description + why it's hard to replicate]
2. [Differentiator]: [description]

---

## Known Tech Debt and Constraints

[FILL IN: areas of the architecture that constrain what PM can spec — important for PRD feasibility]
| Area | Constraint | Impact on Product | Resolution Timeline |
|---|---|---|---|
| [system area] | [constraint] | [what PM cannot spec as-is] | [when it will be resolved or unknown] |

---

## Integration Ecosystem

[FILL IN: which external systems DataWeave integrates with today, and which are on the roadmap]
| Integration | Direction | Status | Notes |
|---|---|---|---|
| [system — e.g., Salesforce, SAP, Akeneo] | Inbound / Outbound / Bidirectional | Live / In Progress / Planned | [notes] |

---

## Security and Compliance

[FILL IN: enterprise security requirements already met — needed for enterprise deals and FRDs]
- Data residency: [regions supported]
- SSO / SAML: [status]
- SOC 2 / ISO 27001: [certification status]
- Data retention policy: [how long customer data is stored]
