# DataWeave AI Trust Layer

**Audience:** Enterprise procurement, security review, legal, CISO at retailers and CPG brands
**Version:** v1.0 — published with AI System Experience GA
**Last updated:** 2026-05-14
**Read time:** ~5 minutes

This document describes how DataWeave handles your data, secures our AI features, and gives your security and compliance teams the controls they need to approve, audit, and govern AI usage in your tenant. It is written to be reviewable without an NDA.

Every claim is tagged:
- **[COMMIT]** — a contractual or operational commitment DataWeave makes today
- **[TARGET]** — a leading metric we will publish on the Trust page
- **[TBD-CONFIRM-WITH-LEGAL]** — language pending legal sign-off

---

## 1. Trust Principles

DataWeave's AI features are built on five commitments. These are the principles every architecture and policy decision below traces back to.

1. **Your data is your data.** We do not use customer prompts, responses, uploads, or schema metadata to train, fine-tune, or improve any DataWeave or third-party model. **[COMMIT]**
2. **Tenant isolation is enforced in code, not in prompts.** A prompt-only boundary is not a boundary. Cross-tenant access is structurally impossible in our orchestration layer. **[COMMIT]**
3. **You can see every prompt the AI ran on your behalf.** Every LLM call is logged, exportable, and retained for the duration we agree to in your DPA. **[COMMIT]**
4. **You hold the kill switch.** Every scheduled agent, every BYOM key, and every AI surface can be paused or revoked by your tenant admin in one click. **[COMMIT]**
5. **We publish what we promise.** Trust KPIs (PII leak rate, audit log uptime, time-to-revoke) are published quarterly. If we miss a target, you see it. **[COMMIT]**

---

## 2. Architecture for Trust

DataWeave's AI stack is orchestrated by our own LangGraph-based agent runtime. The LLM is one node in that graph — not the boundary. Trust controls live in the orchestration layer, where we own the code, not in a system prompt we ask the model to obey.

### Tenant isolation

Every query carries a tenant identity token issued at session start. Data fetchers, vector retrievers, and SQL connectors reject any query whose tenant token does not match the data partition being read. Cross-tenant reads are not refused by the model — they never reach the model. **[COMMIT]**

### PII masking flow (Salesforce Einstein Trust Layer pattern)

When a user submits a prompt, the request takes this path before any LLM sees it:

1. **Ingest.** Prompt enters the orchestration runtime.
2. **Detect.** A pattern detector scans the prompt for PII classes (email, phone, name patterns, SSN, IBAN) plus any tenant-defined sensitive fields (e.g., "internal supplier name," "internal SKU code"). Detection runs locally — no third party sees the unmasked prompt.
3. **Mask.** Detected tokens are replaced with stable placeholders (e.g., `{{EMAIL_1}}`, `{{SUPPLIER_A}}`). A mapping table is held in tenant-scoped memory for the duration of the request only.
4. **Call.** The masked prompt is sent to the LLM (DataWeave-managed model or your BYOM endpoint).
5. **Unmask.** The model's response is rewritten using the in-memory mapping. Placeholders are replaced with the original values before delivery to the user.
6. **Discard.** The mapping table is destroyed at the end of the request. The masked prompt — not the original — is what gets written to the audit log.

The model provider never sees raw PII. The user sees their original values back. **[COMMIT]**

### Encryption posture

- **At rest:** AWS KMS with tenant-scoped data keys. BYOM API keys, audit logs, uploaded knowledge files, and saved sessions are all KMS-encrypted. **[COMMIT]**
- **In transit:** TLS 1.3 for all inter-service and provider calls. **[COMMIT]**
- **Key rotation:** Annual customer-managed-key rotation supported on request. **[TBD-CONFIRM-WITH-LEGAL]**

### Model routing and BYOM

DataWeave-default routing uses Anthropic Claude (Haiku 4.5 for Fast mode, Sonnet 4.6 for Normal, Opus 4.7 for Pro). Customers can override this by bringing their own model (BYOM) keys for Anthropic, OpenAI, Google, or Azure OpenAI. BYOM is available at v1 GA. The customer key:

- Is stored encrypted at rest under AWS KMS
- Is never written to logs or surfaced in the UI after first save
- Is used only for that tenant's LLM calls — never reused across tenants
- Can be rotated or revoked from the Admin Command Center; revoke takes effect on the next call **[COMMIT]**

If a BYOM key is invalid or quota-exhausted, the call fails to the DataWeave-default model and alerts the tenant admin. No silent failures.

---

## 3. Data Handling Policy

### What we collect

| Category | Stored | Purpose |
|---|---|---|
| User prompts (masked) | Yes — audit log only | Compliance, debugging, customer-facing audit trail |
| LLM responses | Yes — audit log | Same as above |
| Uploaded knowledge files | Yes — tenant-scoped, KMS-encrypted | Retrieval grounding for that tenant only |
| Saved sessions and agent definitions | Yes — tenant-scoped | Customer workflow continuity |
| Cost, latency, toxicity score per call | Yes | Trust metrics + admin governance |
| User feedback (thumbs/comments) | Yes | Quality eval |

### What we do not do

- **We do not train, fine-tune, or improve any model on customer data.** This applies to DataWeave-managed models and to BYOM provider calls (zero-data-retention contracts in place with Anthropic, OpenAI). **[COMMIT]** **[TBD-CONFIRM-WITH-LEGAL]** for exact contract language per provider
- **We do not share customer data across tenants.** No "benchmark" feature, no aggregated leaderboard, no anonymized pooling without explicit opt-in. **[COMMIT]**
- **We do not retain unmasked prompts.** Only the masked version is persisted. **[COMMIT]**

### Retention

| Asset | Default retention | Configurable |
|---|---|---|
| Audit log | 12 months | Up to 7 years on enterprise DPA |
| Saved sessions | Tenant-controlled | Yes |
| Uploaded knowledge | Tenant-controlled | Yes |
| In-flight mapping tables (PII unmask) | Request duration only | No — destroyed at request end |

Retention terms above are defaults; the DPA governs. **[TBD-CONFIRM-WITH-LEGAL]**

---

## 4. Compliance and Audit

### Standards

| Standard | Status |
|---|---|
| SOC 2 Type II | [TBD-CONFIRM-WITH-LEGAL] — current report scope and date |
| ISO 27001 | [TBD-CONFIRM-WITH-LEGAL] |
| GDPR | [TBD-CONFIRM-WITH-LEGAL] — DPA available; sub-processor list published; DSAR process documented |
| CCPA | [TBD-CONFIRM-WITH-LEGAL] |
| HIPAA | Not in scope for v1 |

### Audit log scope

Every LLM call writes an immutable record containing: timestamp, user, role, tenant, masked prompt, response, toxicity score, model used, cost, latency, mask-event count, refusal event (if any), user feedback (if given). Records are tenant-scoped, exportable to CSV from the Admin Command Center, and queryable by the audit trail browser. **[COMMIT]**

### Regional data residency

DataWeave-managed model calls route to provider endpoints in the customer's contracted region (US, EU, or APAC). Audit logs, saved sessions, and uploaded knowledge are stored in the contracted region. **[TBD-CONFIRM-WITH-LEGAL]** — exact provider region coverage per tier

### Sub-processors

A published sub-processor list (AWS, Anthropic, OpenAI for opt-in BYOM, Google for opt-in BYOM) is maintained at trust.dataweave.com/subprocessors with 30-day change notice. **[COMMIT]** **[TBD-CONFIRM-WITH-LEGAL]** — final URL and notice period

---

## 5. Security Controls

### AI-specific defenses

- **Content filters.** Toxicity and profanity classifiers run on every response before delivery. Off-topic queries receive a graceful refusal ("here's what I can help with instead") rather than a hard wall. **[COMMIT]**
- **Prompt injection defenses.** Retrieved documents are tagged as untrusted context; instructions inside retrieved content are stripped or quoted, not executed. Tool-use calls require structured argument validation before execution. **[COMMIT]**
- **Jailbreak refusals.** A red-team eval suite of known jailbreak patterns runs on every model version change (DataWeave-default or BYOM). Refusal rate target on the suite: **≥ 98%**. **[TARGET]**
- **Competitive data boundaries.** Tenant admins can declare data classes (cost, margin, internal supplier names) that the agent will not surface even when retrievable. **[COMMIT]**

### Conventional security

- **Role-based access control.** Three default roles (Semantics, CSM, Client) with per-role visibility tiers; custom roles on enterprise tier. **[COMMIT]**
- **SSO.** SAML 2.0 and OIDC supported. **[COMMIT]**
- **Penetration testing.** Annual third-party pentest with summary report available under NDA. **[TBD-CONFIRM-WITH-LEGAL]**
- **Red-teaming.** Internal AI red team runs against the production stack quarterly; findings tracked to closure. **[COMMIT]**

---

## 6. Adherence KPIs

DataWeave publishes the following KPIs on the Trust page quarterly. If we miss a target, the miss is visible.

| KPI | Target | Why it matters |
|---|---|---|
| PII leak rate in LLM-bound prompts | **0** | A non-zero number means the masking layer failed [TARGET] |
| Cross-tenant query events | **0** | A non-zero number is a P0 incident [TARGET] |
| Audit log uptime (write availability) | **≥ 99.9%** | Missing log lines break the audit chain [TARGET] |
| Time-to-revoke BYOM key (effective on next call) | **< 60 seconds** | Customer must be able to kill access in real time [TARGET] |
| Time-to-pause scheduled agent | **< 5 seconds** | Same as above for agents [TARGET] |
| Jailbreak eval suite refusal rate | **≥ 98%** | Public eval ensures defenses do not regress [TARGET] |
| Hallucination rate on internal eval set (Pro mode) | **≤ 3%** | Published eval set + methodology [TARGET] |

---

## 7. Customer Controls

Your tenant admin (typically an IT or security lead) operates the Admin Command Center, a dedicated `/admin` surface that gives a single seat of governance.

- **Kill switch.** One-click pause on any scheduled report, agent, or BYOM key. Audit-logged with reason. **[COMMIT]**
- **Role-based access.** Per-role visibility for chat, agents, knowledge upload, audit log, and BYOM management. **[COMMIT]**
- **Schedule pause.** Pause an individual schedule or all schedules tenant-wide. **[COMMIT]**
- **Model selection.** Choose DataWeave-managed routing, or pin a tenant to BYOM (per provider, per role). **[COMMIT]**
- **Credit ceiling.** Per-user and per-tenant month-to-date cost caps with admin alerts on >2σ spikes. **[COMMIT]**
- **PII pattern configuration.** Add tenant-defined sensitive fields beyond the default catalog. **[COMMIT]**
- **Audit trail browser.** Filter by user, date, query type, mask event, refusal event. CSV export. **[COMMIT]**

---

## 8. Roadmap

What we are committing to in the next two quarters:

**Q3 2026**
- Customer-managed key (CMK) BYOK for at-rest encryption — bring your own AWS KMS key **[COMMIT]**
- Published quarterly Trust KPI report (first edition)
- Expanded sub-processor notification (90-day notice on enterprise DPA) **[TBD-CONFIRM-WITH-LEGAL]**

**Q4 2026**
- In-region BYOM for EU and APAC tenants on Azure OpenAI and Google
- Public jailbreak eval methodology and dataset (so customers can reproduce our refusal-rate number)
- Tenant-controlled retention sliders inside the Admin Command Center (no DPA amendment required)
- SOC 2 Type II report refresh and ISO 27001 certification milestones **[TBD-CONFIRM-WITH-LEGAL]**

---

**Questions, security reviews, or DPA requests:** trust@dataweave.com
**Status page and live KPIs:** trust.dataweave.com
