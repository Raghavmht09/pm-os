const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

const prs = new pptxgen();
prs.layout = "LAYOUT_WIDE";
prs.title = "DSIM Internal Strategy Review — April 2026";

// === PALETTE ===
const NAVY     = "1A2B4A";
const NAVY_MID = "2E5D9E";
const ICE      = "BED3F3";
const LIGHT_BG = "F7F9FC";
const WHITE    = "FFFFFF";
const ORANGE   = "E8612C";
const GREEN    = "1D8A5B";
const RED      = "C0392B";
const YELLOW   = "D48B14";
const TEXT_D   = "1A2B4A";
const TEXT_M   = "4A5568";
const TEXT_L   = "718096";
const BORDER   = "DDE4F0";
const CARD_HL  = "EBF1FB";

const makeShadow = () => ({ type: "outer", blur: 4, offset: 2, angle: 135, color: "000000", opacity: 0.08 });

// Load images as base64
const ASSETS_DIR = path.join(__dirname, "assets");
function loadImageAsBase64(filename) {
  const filepath = path.join(ASSETS_DIR, filename);
  const buffer = fs.readFileSync(filepath);
  return "image/png;base64," + buffer.toString("base64");
}

const iroi_b64 = loadImageAsBase64("iroi-channels.png");
const waterfall_b64 = loadImageAsBase64("impact-waterfall.png");
const clusters_b64 = loadImageAsBase64("store-clusters.png");
const availability_b64 = loadImageAsBase64("availability-media.png");

// === SLIDES 1–10 (same as before, no images needed) ===

// SLIDE 1: Title
{
  const s = prs.addSlide();
  s.background = { color: NAVY };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: ORANGE } });
  s.addShape(prs.shapes.RECTANGLE, { x: 10.5, y: 0, w: 2.83, h: 0.1, fill: { color: ORANGE, transparency: 55 } });
  s.addShape(prs.shapes.RECTANGLE, { x: 13.19, y: 0, w: 0.14, h: 3.5, fill: { color: ORANGE, transparency: 55 } });
  s.addText("INTERNAL STRATEGY REVIEW  ·  APRIL 2026", {
    x: 0.55, y: 1.3, w: 10, h: 0.4,
    fontSize: 10, color: ICE, fontFace: "Calibri", charSpacing: 2.5, margin: 0
  });
  s.addText("Digital Shelf\nImpact Measurement", {
    x: 0.55, y: 1.75, w: 10.5, h: 2.6,
    fontSize: 50, bold: true, color: WHITE, fontFace: "Calibri", margin: 0
  });
  s.addText("Closing the attribution gap between media spend and shelf outcomes on Walmart", {
    x: 0.55, y: 4.45, w: 9.5, h: 0.5,
    fontSize: 17, color: ICE, fontFace: "Calibri", italic: true, margin: 0
  });
  s.addShape(prs.shapes.RECTANGLE, { x: 0.55, y: 5.1, w: 3.5, h: 0.04, fill: { color: ORANGE, transparency: 25 } });
  s.addText("For: Sales Leadership  ·  CXO  ·  Engineering Leads", {
    x: 0.55, y: 5.35, w: 10, h: 0.35,
    fontSize: 12, color: "7B9AC8", fontFace: "Calibri", margin: 0
  });
  s.addText("Agenda: Competitive landscape  ·  GTM plan  ·  Productization roadmap  ·  Risks  ·  Q2–Q3 KRAs", {
    x: 0.55, y: 5.7, w: 11, h: 0.35,
    fontSize: 12, color: "5070A0", fontFace: "Calibri", margin: 0
  });
  s.addText("CONFIDENTIAL", {
    x: 0.55, y: 6.95, w: 4, h: 0.3,
    fontSize: 10, color: "3D5A8A", fontFace: "Calibri", charSpacing: 2, margin: 0
  });
}

// SLIDE 2: Market Gap
{
  const s = prs.addSlide();
  s.background = { color: LIGHT_BG };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: ORANGE } });
  s.addText("The Market Has Moved. Measurement Hasn't.", {
    x: 0.4, y: 0.22, w: 12.5, h: 0.55,
    fontSize: 24, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
  });
  s.addText("Retail media crossed $45B in 2025. Most brands still report success with platform-attributed ROAS — a number the platform controls.", {
    x: 0.4, y: 0.82, w: 12.5, h: 0.35,
    fontSize: 13, color: TEXT_M, fontFace: "Calibri", margin: 0
  });
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 1.22, w: 12.5, h: 0.02, fill: { color: BORDER } });
  const cards = [
    { stat: "$45B+", label: "US retail media\nspend in 2025", sub: "Walmart: $4.5B+ of that", accent: NAVY_MID },
    { stat: "75%", label: "of CPG advertisers name\nincrementality as #1 challenge", sub: "Only 20% can actually act on it (Skai 2026 survey)", accent: ORANGE },
    { stat: "1 of 3", label: "market categories\nremains uncontested", sub: "Shelf-native diagnostic — DataWeave's space", accent: GREEN },
  ];
  cards.forEach((c, i) => {
    const x = 0.4 + i * 4.28;
    s.addShape(prs.shapes.RECTANGLE, { x, y: 1.42, w: 4.0, h: 2.75, fill: { color: WHITE }, shadow: makeShadow() });
    s.addShape(prs.shapes.RECTANGLE, { x, y: 1.42, w: 4.0, h: 0.12, fill: { color: c.accent } });
    s.addText(c.stat, { x: x + 0.2, y: 1.6, w: 3.6, h: 1.0, fontSize: 52, bold: true, color: c.accent, fontFace: "Calibri", margin: 0 });
    s.addText(c.label, { x: x + 0.2, y: 2.65, w: 3.6, h: 0.65, fontSize: 13, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0, wrap: true });
    s.addText(c.sub, { x: x + 0.2, y: 3.3, w: 3.6, h: 0.55, fontSize: 11, color: TEXT_L, fontFace: "Calibri", margin: 0, italic: true, wrap: true });
  });
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 4.35, w: 12.5, h: 1.35, fill: { color: CARD_HL } });
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 4.35, w: 0.08, h: 1.35, fill: { color: NAVY_MID } });
  s.addText(
    "The structural gap: CommerceIQ launched a standalone Incrementality Module in Dec 2025 — observational model, 14-day window, no shelf signals. Pacvue's console is Amazon-first; Walmart store-cluster coverage unconfirmed. Neither can tell a brand whether a 72% in-stock rate or a content gap capped the lift they paid $1M+ to generate.",
    { x: 0.65, y: 4.45, w: 12.0, h: 1.1, fontSize: 14, color: TEXT_D, fontFace: "Calibri", margin: 0, wrap: true }
  );
}

// SLIDE 3: Three-Way Split
{
  const s = prs.addSlide();
  s.background = { color: LIGHT_BG };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: ORANGE } });
  s.addText("Three-Way Competitive Split (2026)", {
    x: 0.4, y: 0.22, w: 12.5, h: 0.55,
    fontSize: 24, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
  });
  const compCards = [
    { title: "Activation-Led", subtitle: "CommerceIQ · Pacvue · Skai", desc: "Grade their own media spend. CIQ: observational model, 14-day window, no holdout. Pacvue: Amazon-first, Walmart store-cluster unconfirmed. Conflict: they measure what they sell.", color: NAVY_MID },
    { title: "Campaign Measurement", subtitle: "Incremental.com · Walmart Connect", desc: "Did media generate net-new sales? Shelf signals used as noise to remove — not as outputs. No store-cluster decomposition. Incremental.com: WPP Connected Partner; Walmart coverage since July 2024.", color: ORANGE },
    { title: "Shelf-Native Diagnostic", subtitle: "DataWeave DSIM (uncontested)", desc: "Why did it work? Which of 6 shelf + media levers drove lift — at the store-cluster level? Shelf signals are the deliverable, not a confounder. No activation stake. Published 5.9% MAPE, R²=91%.", color: GREEN },
  ];
  compCards.forEach((c, i) => {
    const x = 0.4 + i * 4.28;
    s.addShape(prs.shapes.RECTANGLE, { x, y: 1.1, w: 4.0, h: 3.5, fill: { color: WHITE }, shadow: makeShadow() });
    s.addShape(prs.shapes.RECTANGLE, { x, y: 1.1, w: 4.0, h: 0.12, fill: { color: c.color } });
    s.addText(c.title, { x: x + 0.2, y: 1.28, w: 3.6, h: 0.4, fontSize: 18, bold: true, color: c.color, fontFace: "Calibri", margin: 0 });
    s.addText(c.subtitle, { x: x + 0.2, y: 1.7, w: 3.6, h: 0.35, fontSize: 10, color: TEXT_L, fontFace: "Calibri", margin: 0, italic: true });
    s.addShape(prs.shapes.RECTANGLE, { x: x + 0.2, y: 2.1, w: 3.6, h: 0.01, fill: { color: BORDER } });
    s.addText(c.desc, { x: x + 0.2, y: 2.25, w: 3.6, h: 2.0, fontSize: 13, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0, wrap: true, align: "left" });
  });
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 4.8, w: 12.5, h: 1.5, fill: { color: CARD_HL } });
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 4.8, w: 0.08, h: 1.5, fill: { color: NAVY_MID } });
  s.addText(
    "DSIM occupies the uncontested quadrant. No activation platform (CommerceIQ, Pacvue, Skai) offers Walmart store-cluster localization. No measurement platform (Incremental.com, Walmart Connect) surfaces shelf signals as actionable outputs. Profitero monitors — it does not attribute. DSIM is the only model that answers: which shelf lever constrained the lift I paid for, and where?",
    { x: 0.65, y: 4.92, w: 12.0, h: 1.25, fontSize: 13, color: TEXT_D, fontFace: "Calibri", margin: 0, wrap: true }
  );
}

// SLIDE 3B: Who Buys DSIM — Three Buyer Personas
{
  const s = prs.addSlide();
  s.background = { color: LIGHT_BG };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: ORANGE } });
  s.addText("Who Buys DSIM — Three Entry Points", {
    x: 0.4, y: 0.22, w: 12.5, h: 0.55,
    fontSize: 24, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
  });
  s.addText("Positioning: Option B — Sales decomposition (which lever drove Walmart sales, at the store cluster level)", {
    x: 0.4, y: 0.8, w: 12.5, h: 0.28,
    fontSize: 11, color: TEXT_L, fontFace: "Calibri", italic: true, margin: 0
  });
  const personas = [
    {
      role: "eCommerce /\nRetail Media Lead",
      owns: "Walmart Connect budget\n($500K–$5M+/yr)",
      pain: "ROAS dropped. Doesn't know if it's a media problem or a shelf problem (72% in-stock eating impressions).",
      dsim: "Shows which lever (availability, SoS, content, media) drove or capped the last campaign — and which clusters to fix first.",
      oneliner: "Your ROAS is what the platform says happened. DSIM shows what actually drove the sale.",
      color: NAVY_MID
    },
    {
      role: "Finance /\nRGM Leader",
      owns: "Budget approval, trade spend,\nJBP financial commitments",
      pain: "eCommerce asks for more Walmart Connect budget. No independent data to verify if it's justified or if a shelf fix would cost less.",
      dsim: "Vendor-neutral audit: is the constraint media spend or in-stock rate? The number the CFO can defend — not platform ROAS.",
      oneliner: "Before approving the next Walmart Connect request, know whether the bottleneck is media or shelf.",
      color: ORANGE
    },
    {
      role: "Brand /\nCategory Manager",
      owns: "Brand P&L, promotional calendar,\ncompetitive response",
      pain: "NielsenIQ tells them a competitor took 2 points of share — 6 weeks after it happened. Can't connect shelf signals to dollar impact.",
      dsim: "Quantifies what a competitor's SoS gain is worth in weekly lost sales — by store cluster. Early enough to respond.",
      oneliner: "By the time Nielsen tells you a competitor took share, it happened 6 weeks ago. DSIM shows the signal that preceded it.",
      color: GREEN
    },
  ];
  personas.forEach((p, i) => {
    const x = 0.4 + i * 4.28;
    s.addShape(prs.shapes.RECTANGLE, { x, y: 1.18, w: 4.0, h: 5.9, fill: { color: WHITE }, shadow: makeShadow() });
    s.addShape(prs.shapes.RECTANGLE, { x, y: 1.18, w: 4.0, h: 0.1, fill: { color: p.color } });
    // Role
    s.addText(p.role, { x: x + 0.2, y: 1.33, w: 3.6, h: 0.55, fontSize: 13, bold: true, color: p.color, fontFace: "Calibri", margin: 0, wrap: true });
    // Owns
    s.addText("Owns:", { x: x + 0.2, y: 1.94, w: 0.55, h: 0.22, fontSize: 8.5, bold: true, color: TEXT_L, fontFace: "Calibri", margin: 0 });
    s.addText(p.owns, { x: x + 0.75, y: 1.94, w: 3.05, h: 0.4, fontSize: 8.5, color: TEXT_L, fontFace: "Calibri", margin: 0, wrap: true, italic: true });
    // Divider
    s.addShape(prs.shapes.RECTANGLE, { x: x + 0.2, y: 2.44, w: 3.6, h: 0.01, fill: { color: BORDER } });
    // Pain
    s.addText("Pain today:", { x: x + 0.2, y: 2.55, w: 3.6, h: 0.22, fontSize: 8.5, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0 });
    s.addText(p.pain, { x: x + 0.2, y: 2.79, w: 3.6, h: 0.95, fontSize: 8.5, color: TEXT_M, fontFace: "Calibri", margin: 0, wrap: true });
    // Divider
    s.addShape(prs.shapes.RECTANGLE, { x: x + 0.2, y: 3.82, w: 3.6, h: 0.01, fill: { color: BORDER } });
    // DSIM value
    s.addText("DSIM gives them:", { x: x + 0.2, y: 3.93, w: 3.6, h: 0.22, fontSize: 8.5, bold: true, color: p.color, fontFace: "Calibri", margin: 0 });
    s.addText(p.dsim, { x: x + 0.2, y: 4.17, w: 3.6, h: 0.95, fontSize: 8.5, color: TEXT_M, fontFace: "Calibri", margin: 0, wrap: true });
    // One-liner
    s.addShape(prs.shapes.RECTANGLE, { x: x + 0.2, y: 5.2, w: 3.6, h: 0.01, fill: { color: BORDER } });
    s.addText("\u201C" + p.oneliner + "\u201D", { x: x + 0.2, y: 5.3, w: 3.6, h: 1.5, fontSize: 8, color: p.color, fontFace: "Calibri", margin: 0, wrap: true, italic: true, bold: true });
  });
}

// SLIDE 4: Lactalis PoC
{
  const s = prs.addSlide();
  s.background = { color: LIGHT_BG };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: ORANGE } });
  s.addText("Lactalis PoC: Proof of Impact", {
    x: 0.4, y: 0.22, w: 12.5, h: 0.55,
    fontSize: 24, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
  });
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 1.22, w: 12.5, h: 0.02, fill: { color: BORDER } });
  const metrics = [
    { label: "R² / Model Fit", value: "91%", color: GREEN },
    { label: "MAPE / Accuracy", value: "5.9%", color: GREEN },
    { label: "Daily Reallocation", value: "$30K+", color: ORANGE },
    { label: "Store Clusters", value: "17", color: NAVY_MID },
    { label: "Peak OSA", value: "78%", color: YELLOW },
    { label: "Adult Halo Lift", value: "+12%", color: GREEN },
  ];
  metrics.forEach((m, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const x = 0.4 + col * 4.28;
    const y = 1.42 + row * 2.0;
    s.addShape(prs.shapes.RECTANGLE, { x, y, w: 4.0, h: 1.8, fill: { color: WHITE }, shadow: makeShadow() });
    s.addShape(prs.shapes.RECTANGLE, { x, y, w: 4.0, h: 0.08, fill: { color: m.color } });
    s.addText(m.value, { x: x + 0.2, y: y + 0.15, w: 3.6, h: 0.7, fontSize: 40, bold: true, color: m.color, fontFace: "Calibri", margin: 0 });
    s.addText(m.label, { x: x + 0.2, y: y + 0.85, w: 3.6, h: 0.65, fontSize: 11, color: TEXT_M, fontFace: "Calibri", margin: 0, wrap: true });
  });
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 5.5, w: 12.5, h: 1.2, fill: { color: CARD_HL } });
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 5.5, w: 0.08, h: 1.2, fill: { color: NAVY_MID } });
  s.addText(
    "The PoC validates shelf-signal integration into incrementality models. Kids/Baby category showed +12% incremental lift in Adult segment, proving category halo effect — a lever CommerceIQ and Pacvue cannot decompose, and one that Incremental.com would strip out as a confounder rather than surface as an opportunity.",
    { x: 0.65, y: 5.62, w: 12.0, h: 1.0, fontSize: 13, color: TEXT_D, fontFace: "Calibri", margin: 0, wrap: true }
  );
}

// SLIDE 5: iROI by Channel (with chart)
{
  const s = prs.addSlide();
  s.background = { color: LIGHT_BG };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: ORANGE } });
  s.addText("Incremental ROI by Channel (Lactalis)", {
    x: 0.4, y: 0.22, w: 12.5, h: 0.55,
    fontSize: 24, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
  });
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 1.22, w: 12.5, h: 0.02, fill: { color: BORDER } });
  const chartData = [{
    name: "iROI",
    labels: ["Onsite Search", "Sponsored Brands", "Sponsored Brands Video", "Offsite Display"],
    values: [0.83, 1.12, 1.28, 1.55]
  }];
  s.addChart(prs.charts.BAR, chartData, {
    x: 0.4, y: 1.42, w: 12.5, h: 3.2, barDir: "bar",
    chartColors: [RED, YELLOW, GREEN, GREEN],
    chartArea: { fill: { color: WHITE }, roundedCorners: true },
    showValue: true, dataLabelPosition: "outEnd", dataLabelColor: TEXT_D,
    catAxisLabelColor: TEXT_M, valAxisLabelColor: TEXT_M,
    valGridLine: { color: BORDER, size: 0.5 }, catGridLine: { style: "none" },
    showLegend: false, valAxisMaxVal: 1.75
  });
  s.addText("Offsite Display shows strongest incremental return. Onsite Search consuming 63% of budget despite weakest iROI — prime reallocation opportunity.", {
    x: 0.4, y: 4.8, w: 12.5, h: 1.2, fontSize: 13, color: TEXT_D, fontFace: "Calibri", margin: 0, wrap: true
  });
}

// SLIDE 6: Competitive Positioning
{
  const s = prs.addSlide();
  s.background = { color: LIGHT_BG };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: ORANGE } });
  s.addText("Defensible Positioning vs. Activation Players", {
    x: 0.4, y: 0.22, w: 12.5, h: 0.55,
    fontSize: 24, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
  });
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 1.22, w: 12.5, h: 0.02, fill: { color: BORDER } });
  const diffs = [
    { label: "Channel Conflict?", ours: "None", theirs: "Tied to own bids", color: GREEN },
    { label: "Shelf Signals as Levers?", ours: "First-class inputs", theirs: "Secondary signals", color: GREEN },
    { label: "Store-Cluster Decomposition?", ours: "Yes — 17 clusters tested", theirs: "No — channel-level only", color: GREEN },
    { label: "CFO-Ready Output?", ours: "Attribution + reallocation recommendations", theirs: "Optimization suggestions", color: GREEN },
  ];
  diffs.forEach((d, i) => {
    const y = 1.42 + i * 1.2;
    s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y, w: 12.5, h: 1.1, fill: { color: WHITE }, shadow: makeShadow() });
    s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y, w: 0.08, h: 1.1, fill: { color: BORDER } });
    s.addText(d.label, { x: 0.65, y: y + 0.08, w: 4.0, h: 0.4, fontSize: 12, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0 });
    s.addText("DataWeave:", { x: 5.0, y: y + 0.08, w: 1.2, h: 0.4, fontSize: 11, bold: true, color: GREEN, fontFace: "Calibri", margin: 0 });
    s.addText(d.ours, { x: 6.3, y: y + 0.08, w: 3.0, h: 0.9, fontSize: 11, color: TEXT_M, fontFace: "Calibri", margin: 0, wrap: true });
    s.addText("Competitors:", { x: 9.5, y: y + 0.08, w: 1.2, h: 0.4, fontSize: 11, bold: true, color: TEXT_L, fontFace: "Calibri", margin: 0 });
    s.addText(d.theirs, { x: 10.8, y: y + 0.08, w: 1.9, h: 0.9, fontSize: 11, color: TEXT_L, fontFace: "Calibri", margin: 0, wrap: true });
  });
}

// SLIDE 7: GTM Plan
{
  const s = prs.addSlide();
  s.background = { color: LIGHT_BG };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: ORANGE } });
  s.addText("6-Month GTM: Services-Led, Tableau Delivery", {
    x: 0.4, y: 0.22, w: 12.5, h: 0.55,
    fontSize: 24, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
  });
  const phases = [
    { q: "Q2 2026", goal: "Beta Launch", tasks: "Lactalis + 1-2 fast followers", icon: "▸", color: NAVY_MID },
    { q: "Q3 2026", goal: "5 Pilot Accounts", tasks: "Tableau dashboards, weekly QBRs", icon: "▸", color: ORANGE },
    { q: "Q4 2026", goal: "Automated Model Run", tasks: "Transition to product, scale to 20+ accounts", icon: "▸", color: GREEN },
  ];
  phases.forEach((p, i) => {
    const x = 0.4 + i * 4.45;
    s.addShape(prs.shapes.RECTANGLE, { x, y: 1.2, w: 4.0, h: 4.0, fill: { color: WHITE }, shadow: makeShadow() });
    s.addShape(prs.shapes.RECTANGLE, { x, y: 1.2, w: 4.0, h: 0.08, fill: { color: p.color } });
    s.addText(p.q, { x: x + 0.2, y: 1.35, w: 3.6, h: 0.3, fontSize: 14, bold: true, color: p.color, fontFace: "Calibri", margin: 0 });
    s.addText(p.goal, { x: x + 0.2, y: 1.7, w: 3.6, h: 0.5, fontSize: 16, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0, wrap: true });
    s.addShape(prs.shapes.RECTANGLE, { x: x + 0.2, y: 2.3, w: 3.6, h: 0.01, fill: { color: BORDER } });
    s.addText(p.tasks, { x: x + 0.2, y: 2.45, w: 3.6, h: 2.3, fontSize: 11, color: TEXT_M, fontFace: "Calibri", margin: 0, wrap: true });
  });
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 5.5, w: 12.5, h: 1.2, fill: { color: CARD_HL } });
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 5.5, w: 0.08, h: 1.2, fill: { color: NAVY_MID } });
  s.addText(
    "ICP: RGM personas at CPG brands ($500M+ revenue, active on Walmart). Lead with Lactalis success case; deliver PoC via Tableau before productization.",
    { x: 0.65, y: 5.62, w: 12.0, h: 1.0, fontSize: 13, color: TEXT_D, fontFace: "Calibri", margin: 0, wrap: true }
  );
}

// SLIDE 8: Productization Roadmap
{
  const s = prs.addSlide();
  s.background = { color: LIGHT_BG };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: ORANGE } });
  s.addText("Four-Phase Productization (P0→P3)", {
    x: 0.4, y: 0.22, w: 12.5, h: 0.55,
    fontSize: 24, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
  });
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 1.22, w: 12.5, h: 0.02, fill: { color: BORDER } });
  const roadmap = [
    { phase: "P0: Services-Led", when: "Now–Q3", what: "Lactalis PoC + fast-follower betas", value: "$50–75K per PoC", color: NAVY_MID },
    { phase: "P1: Automated Model", when: "Q4 2026", what: "Weekly refreshes, zero-touch data ingestion", value: "$150–200K annual", color: ORANGE },
    { phase: "P2: Native Dashboard", when: "Q1–Q2 2027", what: "Built-in Tableau + real-time shelf signals", value: "$250–400K enterprise", color: GREEN },
    { phase: "P3: Reallocation Simulator", when: "2027+", what: "What-if spend/content/shelf changes", value: "Net-new upsell motion", color: GREEN },
  ];
  roadmap.forEach((r, i) => {
    const y = 1.42 + i * 1.28;
    s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y, w: 12.5, h: 1.18, fill: { color: WHITE }, shadow: makeShadow() });
    s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y, w: 0.08, h: 1.18, fill: { color: r.color } });
    s.addText(r.phase, { x: 0.65, y: y + 0.05, w: 2.5, h: 0.35, fontSize: 12, bold: true, color: r.color, fontFace: "Calibri", margin: 0 });
    s.addText(r.when, { x: 3.3, y: y + 0.05, w: 1.5, h: 0.35, fontSize: 10, color: TEXT_L, fontFace: "Calibri", margin: 0, italic: true });
    s.addText(r.what, { x: 5.0, y: y + 0.05, w: 3.5, h: 0.9, fontSize: 11, color: TEXT_M, fontFace: "Calibri", margin: 0, wrap: true });
    s.addText(r.value, { x: 8.7, y: y + 0.05, w: 3.8, h: 0.9, fontSize: 11, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0, wrap: true });
  });
}

// SLIDE 9: Risk Register
{
  const s = prs.addSlide();
  s.background = { color: LIGHT_BG };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: ORANGE } });
  s.addText("Risk Register & Mitigations", {
    x: 0.4, y: 0.22, w: 12.5, h: 0.55,
    fontSize: 24, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
  });
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 1.22, w: 12.5, h: 0.02, fill: { color: BORDER } });
  const risks = [
    { risk: "Data Security / Privacy", severity: "HIGH", mitigation: "SOC 2 Type II certification; Walmart data governance review", color: RED },
    { risk: "Walmart API Changes", severity: "MEDIUM", mitigation: "Leverage Incremental.com's official API partnership", color: YELLOW },
    { risk: "Brand Buy-in on Methodology", severity: "MEDIUM", mitigation: "Lactalis case study + peer references by Q3", color: YELLOW },
    { risk: "Productization Timeline Slip", severity: "MEDIUM", mitigation: "Fallback: extend Tableau services model", color: YELLOW },
  ];
  risks.forEach((r, i) => {
    const y = 1.42 + i * 1.25;
    const severityColor = r.color;
    s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y, w: 12.5, h: 1.15, fill: { color: WHITE }, shadow: makeShadow() });
    s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y, w: 0.08, h: 1.15, fill: { color: severityColor } });
    s.addText(r.risk, { x: 0.65, y: y + 0.05, w: 4.0, h: 0.35, fontSize: 12, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0 });
    const severityBg = r.severity === "HIGH" ? RED : YELLOW;
    const severityText = "FFFFFF";
    s.addShape(prs.shapes.RECTANGLE, { x: 4.9, y: y + 0.08, w: 1.1, h: 0.3, fill: { color: severityBg } });
    s.addText(r.severity, { x: 4.9, y: y + 0.08, w: 1.1, h: 0.3, fontSize: 10, bold: true, color: severityText, align: "center", fontFace: "Calibri", margin: 0 });
    s.addText(r.mitigation, { x: 6.2, y: y + 0.05, w: 6.7, h: 1.0, fontSize: 11, color: TEXT_M, fontFace: "Calibri", margin: 0, wrap: true });
  });
}

// SLIDE 10: Key Result Areas (KRAs)
{
  const s = prs.addSlide();
  s.background = { color: LIGHT_BG };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: ORANGE } });
  s.addText("Q2–Q3 2026 Key Result Areas", {
    x: 0.4, y: 0.22, w: 12.5, h: 0.55,
    fontSize: 24, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
  });
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 1.22, w: 12.5, h: 0.02, fill: { color: BORDER } });
  const kras = [
    { kra: "Close Lactalis PoC", target: "Validated model by June 30", owner: "Product + Eng", color: GREEN },
    { kra: "Land 2 Fast-Follower Betas", target: "Signed pilots by end of Q2", owner: "Sales + CS", color: ORANGE },
    { kra: "Productization Design", target: "P1 spec complete by Aug 31", owner: "Product", color: NAVY_MID },
    { kra: "Build Competitive Case Studies", target: "Lactalis + 1 more by Aug 31", owner: "Marketing", color: NAVY_MID },
  ];
  kras.forEach((k, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = 0.4 + col * 6.4;
    const y = 1.42 + row * 2.4;
    s.addShape(prs.shapes.RECTANGLE, { x, y, w: 6.15, h: 2.3, fill: { color: WHITE }, shadow: makeShadow() });
    s.addShape(prs.shapes.RECTANGLE, { x, y, w: 6.15, h: 0.08, fill: { color: k.color } });
    s.addText(k.kra, { x: x + 0.25, y: y + 0.15, w: 5.65, h: 0.4, fontSize: 13, bold: true, color: k.color, fontFace: "Calibri", margin: 0 });
    s.addText("Target: " + k.target, { x: x + 0.25, y: y + 0.58, w: 5.65, h: 0.6, fontSize: 11, color: TEXT_D, fontFace: "Calibri", margin: 0, wrap: true });
    s.addText("Owner: " + k.owner, { x: x + 0.25, y: y + 1.28, w: 5.65, h: 0.35, fontSize: 10, color: TEXT_L, fontFace: "Calibri", margin: 0, italic: true });
  });
}

// SLIDE 11: Supplemental — Infographics (EMBEDDED IMAGES)
{
  const s = prs.addSlide();
  s.background = { color: LIGHT_BG };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: ORANGE } });
  s.addText("Supplemental: DSIM Model Infographics", {
    x: 0.4, y: 0.22, w: 12.5, h: 0.55,
    fontSize: 24, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
  });
  s.addText("Lactalis PoC — Key Visualizations", {
    x: 0.4, y: 0.8, w: 12.5, h: 0.3,
    fontSize: 12, color: TEXT_L, fontFace: "Calibri", italic: true, margin: 0
  });

  // Grid: 2x2 infographics
  const imageConfigs = [
    { data: iroi_b64, x: 0.4, y: 1.2, label: "Incremental ROI by Channel" },
    { data: waterfall_b64, x: 6.6, y: 1.2, label: "Impact Waterfall ($2.8M→$6.1M)" },
    { data: clusters_b64, x: 0.4, y: 3.85, label: "Store Cluster Allocation (17 clusters)" },
    { data: availability_b64, x: 6.6, y: 3.85, label: "Availability vs. Media Spend" },
  ];

  imageConfigs.forEach(cfg => {
    s.addImage({ data: cfg.data, x: cfg.x, y: cfg.y, w: 6.0, h: 2.5 });
    s.addText(cfg.label, { x: cfg.x, y: cfg.y + 2.6, w: 6.0, h: 0.25, fontSize: 10, color: TEXT_L, fontFace: "Calibri", align: "center", italic: true, margin: 0 });
  });

  s.addText("CONFIDENTIAL — For internal stakeholder review only", {
    x: 0.4, y: 6.9, w: 12.5, h: 0.25,
    fontSize: 9, color: TEXT_L, fontFace: "Calibri", align: "center", margin: 0
  });
}

prs.writeFile({ fileName: "dsim-internal-strategy-deck-2026-04-21-embedded.pptx" });
console.log("✓ PPTX created: dsim-internal-strategy-deck-2026-04-21-embedded.pptx");
