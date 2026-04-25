const pptxgen = require("pptxgenjs");

const prs = new pptxgen();

// Portrait letter: 8.5" × 11"
prs.defineLayout({ name: "LETTER_PORTRAIT", width: 8.5, height: 11 });
prs.layout = "LETTER_PORTRAIT";
prs.title = "DSIM — Digital Shelf Impact Measurement";

// === PALETTE (matches deck) ===
const NAVY     = "1A2B4A";
const NAVY_MID = "2E5D9E";
const ICE      = "BED3F3";
const LIGHT_BG = "F7F9FC";
const WHITE    = "FFFFFF";
const ORANGE   = "E8612C";
const GREEN    = "1D8A5B";
const TEXT_D   = "1A2B4A";
const TEXT_M   = "4A5568";
const TEXT_L   = "718096";
const BORDER   = "DDE4F0";
const CARD_HL  = "EBF1FB";

const makeShadow = () => ({ type: "outer", blur: 3, offset: 1, angle: 135, color: "000000", opacity: 0.08 });

const s = prs.addSlide();
s.background = { color: LIGHT_BG };

// ── LEFT ACCENT STRIPE ──────────────────────────────────────────────────────
s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.1, h: 11, fill: { color: ORANGE } });

// ── HEADER BAR (1.2" — extra 0.1" vs v1 to prevent tagline clip) ─────────────
s.addShape(prs.shapes.RECTANGLE, { x: 0.1, y: 0, w: 8.4, h: 1.2, fill: { color: NAVY } });

s.addText("DataWeave  ·  Digital Shelf Impact Measurement", {
  x: 0.3, y: 0.1, w: 6.5, h: 0.25,
  fontSize: 8, color: "7B9AC8", fontFace: "Calibri", charSpacing: 1.5, margin: 0
});
s.addText("DSIM", {
  x: 0.3, y: 0.34, w: 3, h: 0.46,
  fontSize: 26, bold: true, color: WHITE, fontFace: "Calibri", margin: 0
});
// Fix: full tagline fits within header; single line with em dash
s.addText("Closing the attribution gap between media spend and shelf outcomes on Walmart", {
  x: 0.3, y: 0.8, w: 5.5, h: 0.33,
  fontSize: 9, color: ICE, fontFace: "Calibri", italic: true, margin: 0, wrap: true
});

// Audience label (top-right of header) — increased contrast
s.addText("For: RGM Leaders  ·  eCommerce Leads", {
  x: 4.8, y: 0.38, w: 3.45, h: 0.28,
  fontSize: 8.5, color: "8BAFD8", fontFace: "Calibri", align: "right", margin: 0
});
s.addText("CONFIDENTIAL", {
  x: 4.8, y: 0.72, w: 3.45, h: 0.24,
  fontSize: 8, bold: true, color: "5B7BAD", fontFace: "Calibri", align: "right", charSpacing: 1.5, margin: 0
});

// ── THE PROBLEM (strip) — y shifted +0.1 due to taller header ─────────────────
s.addShape(prs.shapes.RECTANGLE, { x: 0.1, y: 1.2, w: 8.4, h: 0.52, fill: { color: CARD_HL } });
s.addShape(prs.shapes.RECTANGLE, { x: 0.1, y: 1.2, w: 0.06, h: 0.52, fill: { color: NAVY_MID } });
s.addText(
  "75% of CPG advertisers call incrementality their #1 measurement challenge — yet every platform grading their own spend (CommerceIQ: observational model, 14-day window; Pacvue: Amazon-first, no Walmart store-cluster) tells you ROAS, not whether availability, Share of Search, or content silently capped the lift you paid for.",
  { x: 0.3, y: 1.23, w: 8.0, h: 0.46, fontSize: 9, color: TEXT_D, fontFace: "Calibri", margin: 0, wrap: true }
);

// ── SECTION: WHAT DSIM DOES ───────────────────────────────────────────────────
s.addText("What DSIM Does", {
  x: 0.3, y: 1.84, w: 7.9, h: 0.26,
  fontSize: 11, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
});

const diffs = [
  {
    title: "Diagnostic Incrementality",
    body: "Decomposes sales lift across 6 shelf + media levers with published 5.9% MAPE and R²=91%. Competitors (CommerceIQ, Pacvue) publish no equivalent accuracy metrics.",
    color: NAVY_MID
  },
  {
    title: "Store-Cluster Resolution",
    body: "Localizes attribution to store behavioral clusters — exposing geographic misallocation invisible in aggregate ROAS. No activation platform (CommerceIQ, Pacvue, Skai) offers this for Walmart.",
    color: ORANGE
  },
  {
    title: "Vendor-Neutral Attribution",
    body: "No activation stake, no agency ownership. Unlike Profitero (Publicis-owned since 2026) and CommerceIQ/Pacvue (grade their own campaigns), DSIM is the number your CFO can defend.",
    color: GREEN
  },
];

diffs.forEach((d, i) => {
  const x = 0.3 + i * 2.68;
  s.addShape(prs.shapes.RECTANGLE, { x, y: 2.16, w: 2.55, h: 1.85, fill: { color: WHITE }, shadow: makeShadow() });
  s.addShape(prs.shapes.RECTANGLE, { x, y: 2.16, w: 2.55, h: 0.08, fill: { color: d.color } });
  s.addText(d.title, { x: x + 0.15, y: 2.29, w: 2.25, h: 0.38, fontSize: 9.5, bold: true, color: d.color, fontFace: "Calibri", margin: 0, wrap: true });
  s.addText(d.body, { x: x + 0.15, y: 2.7, w: 2.25, h: 1.25, fontSize: 8.5, color: TEXT_M, fontFace: "Calibri", margin: 0, wrap: true });
});

// ── SECTION: LACTALIS POC PROOF ───────────────────────────────────────────────
s.addText("Proof of Model: Lactalis PoC", {
  x: 0.3, y: 4.13, w: 7.9, h: 0.26,
  fontSize: 11, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
});

const metrics = [
  { val: "91%",   label: "R² — Model Fit",            color: GREEN },
  { val: "5.9%",  label: "MAPE — Forecast Accuracy",  color: GREEN },
  { val: "$30K+", label: "Daily Budget Reallocation",  color: ORANGE },
  { val: "17",    label: "Store Clusters Modeled",     color: NAVY_MID },
  { val: "78%",   label: "Peak In-Stock During Peak",  color: "D48B14" },
  { val: "+12%",  label: "Category Halo (Adult lift from Kids/Baby)", color: GREEN },
];

metrics.forEach((m, i) => {
  const col = i % 3;
  const row = Math.floor(i / 3);
  const x = 0.3 + col * 2.68;
  const y = 4.45 + row * 0.88;
  s.addShape(prs.shapes.RECTANGLE, { x, y, w: 2.55, h: 0.82, fill: { color: WHITE }, shadow: makeShadow() });
  s.addShape(prs.shapes.RECTANGLE, { x, y, w: 0.05, h: 0.82, fill: { color: m.color } });
  s.addText(m.val,   { x: x + 0.15, y: y + 0.04, w: 1.3, h: 0.4, fontSize: 20, bold: true, color: m.color, fontFace: "Calibri", margin: 0 });
  s.addText(m.label, { x: x + 0.15, y: y + 0.43, w: 2.32, h: 0.35, fontSize: 7.5, color: TEXT_M, fontFace: "Calibri", margin: 0, wrap: true });
});

// ── SECTION: HOW WE ENGAGE ────────────────────────────────────────────────────
s.addText("How We Engage", {
  x: 0.3, y: 6.31, w: 7.9, h: 0.26,
  fontSize: 11, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
});

const phases = [
  { phase: "PoC",      when: "6–8 weeks",       what: "Model scoping, data ingestion, Tableau dashboard with decomposition + reallocation output", color: NAVY_MID },
  { phase: "Pilot",    when: "Quarterly",        what: "Ongoing model runs, weekly shelf + media signal refresh, QBR-ready attribution reporting",   color: ORANGE },
  // Fix: added "(roadmap — subject to change)" qualifier on future-state promise
  { phase: "Platform", when: "2027+ (roadmap)",  what: "Native dashboard with real-time signals, reallocation simulator, and multi-retailer coverage", color: GREEN },
];

phases.forEach((p, i) => {
  const x = 0.3 + i * 2.68;
  // Fix: height reduced from 1.65 to 1.55 to recover the 0.1" added to header
  s.addShape(prs.shapes.RECTANGLE, { x, y: 6.63, w: 2.55, h: 1.55, fill: { color: WHITE }, shadow: makeShadow() });
  s.addShape(prs.shapes.RECTANGLE, { x, y: 6.63, w: 2.55, h: 0.06, fill: { color: p.color } });
  s.addText(p.phase, { x: x + 0.12, y: 6.73, w: 1.8, h: 0.26, fontSize: 11, bold: true, color: p.color, fontFace: "Calibri", margin: 0 });
  s.addText(p.when,  { x: x + 0.12, y: 7.0,  w: 2.35, h: 0.2,  fontSize: 8,  color: TEXT_L, fontFace: "Calibri", margin: 0, italic: true });
  s.addText(p.what,  { x: x + 0.12, y: 7.22, w: 2.35, h: 0.92, fontSize: 8,  color: TEXT_M, fontFace: "Calibri", margin: 0, wrap: true });
});

// ── SECTION: REFERENCE PRICING ────────────────────────────────────────────────
s.addShape(prs.shapes.RECTANGLE, { x: 0.1, y: 8.3, w: 8.4, h: 1.38, fill: { color: WHITE }, shadow: makeShadow() });
s.addShape(prs.shapes.RECTANGLE, { x: 0.1, y: 8.3, w: 8.4, h: 0.06, fill: { color: NAVY } });
// Fix: add a visible border at top of pricing box to separate from How We Engage section
s.addShape(prs.shapes.RECTANGLE, { x: 0.1, y: 8.29, w: 8.4, h: 0.02, fill: { color: BORDER } });

s.addText("Reference Pricing", {
  x: 0.3, y: 8.4, w: 3, h: 0.26,
  fontSize: 10, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
});
// Fix: made "Indicative" caveat larger and bolder for legibility
s.addText("Indicative — all pricing customized per account type, data complexity, and scope", {
  x: 3.3, y: 8.4, w: 4.9, h: 0.26,
  fontSize: 8.5, bold: true, color: TEXT_M, fontFace: "Calibri", italic: true, align: "right", margin: 0
});

const pricing = [
  { tier: "PoC",        range: "$50K – $75K",    note: "6-8 weeks · Tableau delivery" },
  { tier: "Annual",     range: "$150K – $200K",  note: "Quarterly runs · refresh reporting" },
  { tier: "Enterprise", range: "$250K – $400K+", note: "Multi-category · multi-cluster · full access" },
];

pricing.forEach((p, i) => {
  const x = 0.3 + i * 2.75;
  s.addText(p.tier,  { x, y: 8.72, w: 2.5, h: 0.22, fontSize: 9,  bold: true, color: NAVY_MID, fontFace: "Calibri", margin: 0 });
  s.addText(p.range, { x, y: 8.95, w: 2.5, h: 0.3,  fontSize: 13, bold: true, color: TEXT_D,   fontFace: "Calibri", margin: 0 });
  s.addText(p.note,  { x, y: 9.27, w: 2.6, h: 0.3,  fontSize: 7.5, color: TEXT_L, fontFace: "Calibri", margin: 0, wrap: true });
});

// ── FOOTER ────────────────────────────────────────────────────────────────────
s.addShape(prs.shapes.RECTANGLE, { x: 0.1, y: 9.74, w: 8.4, h: 1.26, fill: { color: NAVY } });

s.addText("DataWeave", {
  x: 0.3, y: 9.84, w: 2.5, h: 0.32,
  fontSize: 13, bold: true, color: WHITE, fontFace: "Calibri", margin: 0
});
s.addText("Digital Shelf Impact Measurement  ·  dataweave.com", {
  x: 0.3, y: 10.18, w: 5, h: 0.22,
  fontSize: 8.5, color: ICE, fontFace: "Calibri", margin: 0
});
// Fix: combine CTA + email into a unified action block (right-aligned)
s.addText("Request a PoC conversation", {
  x: 5.0, y: 9.84, w: 3.25, h: 0.28,
  fontSize: 10, bold: true, color: ORANGE, fontFace: "Calibri", align: "right", margin: 0
});
s.addText("dsim@dataweave.com  →", {
  x: 5.0, y: 10.16, w: 3.25, h: 0.26,
  fontSize: 9, color: ICE, fontFace: "Calibri", align: "right", margin: 0
});
s.addText("April 2026", {
  x: 0.3, y: 10.5, w: 7.8, h: 0.22,
  fontSize: 7.5, color: "3D5A8A", fontFace: "Calibri", margin: 0
});

prs.writeFile({ fileName: "dsim-brief-one-pager.pptx" });
console.log("✓ Brief created: dsim-brief-one-pager.pptx");
