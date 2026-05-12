# Meeting Notes Archive
Last updated: 2026-05-05

---

## Internal Meetings

### DSIM GTM Internal Strategy — 2026-04-24
Attendees: Eddie, Brian, Jeeva, Shai, Karthik, PM team
Type: Internal product + GTM strategy

Key discussion points:
- IAB has published multiple reports criticizing MMM for retail media (April 2024, Oct 2024, Nov 2025) — "moderate to weak causal strength" per IAB Nov 2025 guidelines. Retail media spend: $62B (1 in 5 digital ad dollars).
- DSIM positioning debate: retail media optimization vs. broader sales decomposition vs. budget reallocation guidance. Team has not locked on one.
- Lactalis primary users = eCommerce team; secondary = retail media + Publicis. Global retail media person joined recently and showed strong interest.
- Lactalis didn't love initial iROI analysis presentation — "all three campaign recommendations said increase spend." Finance/RGM buyers need reallocation framing, not optimization framing.
- Strategic question raised: should positioning target Finance (controls budget) vs. eCommerce (spends it)? Finance angle: help evaluate if retail media budget requests are justified vs. fixing shelf levers first.
- Upcoming pipeline: Bush Brothers (May), Beiersdorf (after some time), Magic Spoon (end Q2), ShopHop (positive signal).
- Brian and Karthik to test messaging at Digital Shelf Summit (early next week from meeting date).

Action items from this meeting:
- [ ] Eddie, Brian, Jeeva, Shai to develop 2–3 personas and positioning statements before next meeting
- [ ] Develop messaging ready by early next week for Digital Shelf Summit
- [ ] Create two-pager on DSIM
- [ ] Don to create LinkedIn content on DSIM
- [ ] Establish recurring weekly or bi-weekly DSIM meeting
- [ ] Next meeting goal: agree on position statements + personas to create documentation for market
- [ ] Consider consulting with Don Brett (CPG background) on positioning

---

### DSIM Productization Discovery Q&A — 2026-04-25
Attendees: PM, Data Science lead, Engineering lead
Type: Internal scoping / productization planning

Key resolutions from Q&A:

| Question | Answer |
|---|---|
| Where does Robyn run? | **UNKNOWN — still pending confirmation** — Slack DS lead this week |
| Engineering capacity for DSIM | 1 dedicated engineer + 1 data scientist — parallel work not feasible |
| PMF gate | 2 paying accounts + $150K ARR confirmed |
| Lactalis data onboarding | DSA shelf automated; Walmart Connect partially automated; Scintilla sales data partially manual |
| Delivery timeline | 6–10 weeks benchmark; target: 4 weeks (2 setup + 2 run + delivery) |
| Biggest pain | BOTH model running/tuning AND output presentation/buy-in |
| Non-DSA brands | File-based, API integration, or manual COLAB-style — extend existing COLAB framework |
| MVP output | All 4: sales decomposition + explicit reallocation + store-cluster breakdown + confidence intervals |
| Next PoC fix | Explicit reallocation recommendation (2 weeks, no engineering) |

Action items:
- [ ] PM: Slack DS lead re: Robyn infrastructure this week
- [ ] DS + CS: Add explicit reallocation output to Tableau template (2-week task)
- [ ] CS / Brian: Run 4-question Scintilla pre-qualification before Bush Brothers and all pipeline calls

---

### DSIM Launch Scope Decision — 2026-04-16
Attendees: PM, Leadership
Type: Roadmap decision

Decision: Launch DSIM with Walmart-only focus Q2 2026. Multi-retailer (Target, Instacart) Q4 2026 earliest.
Full reasoning: `decisions/roadmap/2026-04-16-dsim-launch-scope.md`

---

## External Meetings

### DataWeave × GeekSpeak — Lassonde Kickoff — 2026-04 (approx last Tuesday of April)
Attendees:
- DataWeave: Dan Erickson (Partnerships), Rohitha (CSM Lead), Baghi (CS), Vaibhav (Product / PM), Lily (Delivery)
- GeekSpeak: Trisha Williams (Managing Partner), Ali (Program Manager), Katie (Senior CSM), Suzanne Hicks (CSM / Lassonde lead)

Project scope:
- Content quality audits across Canadian retailers (Metro, Loblaws, Walmart CA, Save On Foods, Giant Tiger, etc.)
- Share of Search tracking across 6 banners (Walmart CA, Loblaws, Real Canadian Superstore, No Frills, Voila, Metro/Maxi; Uber Eats removed — replace TBD)
- Shared client context: both teams work on Lactalis, giving familiarity with DataWeave platform

Content audit setup:
- GeekSpeak provides Excel files per retailer with SKU details (UPC, title, variant info, images, URLs)
- DataWeave scraping validates retailer site matches source of truth
- Crawl frequency: monthly for content, daily for SoS
- Character-level mismatches are incorrect (e.g., "5 minute" vs "15 minute")
- Output: scorecard format (% scores per attribute, per retailer)

Share of Search setup:
- 50 keywords per banner = 300 total keywords
- 1 location (zip/postal code) per banner initially
- Daily crawl frequency

API / integration:
- GeekSpeak onboarding Plytex — explore API connection with DataWeave (interim: OneDrive)
- DataWeave has read-only Salsify API integration capability for some customers

Action items from this meeting:
- [ ] GeekSpeak: provide copywriting + image assets by retailer
- [ ] GeekSpeak: provide total SKU list (UPC, title, variant info, images, URLs — 11 fields per SKU)
- [ ] GeekSpeak: provide 50 keywords per banner (300 total)
- [ ] GeekSpeak: verify final banner list; confirm Uber Eats replacement
- [ ] Dan (DataWeave): share list of recommended zip/postal codes for SoS location selection
- [ ] GeekSpeak: set up OneDrive access for DataWeave team
- [ ] GeekSpeak: investigate API connection setup with Plytex
- [ ] DataWeave: check if existing LaSonde audits available (expedite URL setup)
- [ ] DataWeave: send recap email with all required input items
- [ ] Teams: coordinate weekly touchbase schedule

---

## Action Items Log (all open items across meetings)

| Action | Owner | Due | Source Meeting | Status |
|---|---|---|---|---|
| Slack DS lead re: Robyn infrastructure | PM (Raghav/Vaibhav) | This week (from 2026-04-25) | DSIM productization Q&A | OPEN |
| Add explicit reallocation output to Tableau | DS + CS | ~2026-05-09 | DSIM productization Q&A | IN PROGRESS |
| Scintilla pre-qual protocol for pipeline accounts | CS / Brian | Before next pipeline call | DSIM productization Q&A | IN PROGRESS |
| Develop DSIM personas (2–3) + positioning | Eddie, Brian, Jeeva, Shai | Before Digital Shelf Summit | GTM Internal 2026-04-24 | OPEN |
| Two-pager on DSIM | PM + content | Early May | GTM Internal 2026-04-24 | OPEN |
| LinkedIn content on DSIM | Don | TBD | GTM Internal 2026-04-24 | OPEN |
| GeekSpeak: SKU list + keyword inputs | GeekSpeak (Trisha/Ali) | TBD | GeekSpeak kickoff | AWAITING CUSTOMER |
| GeekSpeak: OneDrive access setup | GeekSpeak | TBD | GeekSpeak kickoff | AWAITING CUSTOMER |
| DataWeave: send recap email with input requirements | Lily / Rohitha | Done? | GeekSpeak kickoff | VERIFY |
| Weekly touchbase schedule (DataWeave × GeekSpeak) | Rohitha + Trisha | TBD | GeekSpeak kickoff | OPEN |
| Clorox outreach (warm intro via CS) | CS lead | May 2026 | GTM plan | NOT STARTED |
| Mondelēz outreach | Sales / CS | May 2026 | GTM plan | NOT STARTED |
