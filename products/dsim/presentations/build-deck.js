const pptxgen = require("pptxgenjs");

const prs = new pptxgen();
prs.layout = "LAYOUT_WIDE"; // 13.33" × 7.5"
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

// ============================================================
// SLIDE 1: Title slide (dark)
// ============================================================
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

// ============================================================
// SLIDE 2: The Market Gap
// ============================================================
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
    { stat: "71%", label: "of advertisers name\nincrementality as top KPI", sub: "Yet most still measure via platform ROAS", accent: ORANGE },
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
    "The structural gap: brands running Walmart Connect campaigns can measure ROAS. They cannot measure whether that ROAS reflects truly incremental sales — or whether an availability issue, low Share of Search, or poor content silently suppressed the lift they paid for.",
    { x: 0.65, y: 4.45, w: 12.0, h: 1.1, fontSize: 14, color: TEXT_D, fontFace: "Calibri", margin: 0, wrap: true }
  );

  s.addText(
    "DSIM was built to answer the question no activation platform, MMM, or retailer reporting tool closes.",
    { x: 0.4, y: 5.9, w: 12.5, h: 0.4, fontSize: 13, color: ORANGE, fontFace: "Calibri", bold: true, margin: 0 }
  );
}

// ============================================================
// SLIDE 3: Competitive Landscape
// ============================================================
{
  const s = prs.addSlide();
  s.background = { color: LIGHT_BG };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: NAVY_MID } });

  s.addText("Three Categories. One Uncontested Space.", {
    x: 0.4, y: 0.22, w: 12.5, h: 0.55,
    fontSize: 24, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
  });
  s.addText("The retail media measurement market has split into three distinct categories — each with a different buyer, question, and incentive structure.", {
    x: 0.4, y: 0.82, w: 12.5, h: 0.35,
    fontSize: 13, color: TEXT_M, fontFace: "Calibri", margin: 0
  });
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 1.22, w: 12.5, h: 0.02, fill: { color: BORDER } });

  const cols = [
    {
      title: "Activation-Led",
      subtitle: "Optimize bids in real time",
      players: "CommerceIQ, Pacvue",
      buyer: "Media ops / Campaign manager",
      question: "\"How do I optimize my campaigns right now?\"",
      keypoint: "Incentive conflict: model justifies more spend on their own platform. ROAS is the output; incrementality is the input to their bid engine.",
      color: YELLOW,
      dark: false,
    },
    {
      title: "Campaign Measurement",
      subtitle: "Did this campaign generate net-new sales?",
      players: "Incremental.com, Skai",
      buyer: "Analytics / Marketing Finance",
      question: "\"Was this campaign incremental?\"",
      keypoint: "No shelf-signal integration. Measures whether media worked — not what constrained it. National-level, no store-cluster resolution.",
      color: TEXT_L,
      dark: false,
    },
    {
      title: "Shelf-Native Diagnostic",
      subtitle: "Which lever drove sales — and why?",
      players: "DataWeave DSIM",
      buyer: "RGM / Finance / C-suite",
      question: "\"Which of my 6 shelf + media levers drove incremental sales — and what should I change for next quarter?\"",
      keypoint: "Uncontested — no competitor operates in this quadrant. Shelf signals as first-class inputs. Store-cluster localization. Vendor-neutral.",
      color: GREEN,
      dark: true,
    },
  ];

  cols.forEach((col, i) => {
    const x = 0.4 + i * 4.3;
    const bg  = col.dark ? NAVY : WHITE;
    const tc  = col.dark ? WHITE : TEXT_D;
    const ts  = col.dark ? ICE : TEXT_M;
    const tl  = col.dark ? "BED3F3" : TEXT_L;
    const div = col.dark ? "3A5A8A" : BORDER;

    s.addShape(prs.shapes.RECTANGLE, { x, y: 1.38, w: 4.1, h: 5.35, fill: { color: bg }, shadow: makeShadow() });
    s.addShape(prs.shapes.RECTANGLE, { x, y: 1.38, w: 4.1, h: 0.14, fill: { color: col.color } });

    s.addText(col.title,    { x: x + 0.2, y: 1.61, w: 3.7, h: 0.48, fontSize: 18, bold: true, color: col.color, fontFace: "Calibri", margin: 0, wrap: true });
    s.addText(col.subtitle, { x: x + 0.2, y: 2.12, w: 3.7, h: 0.35, fontSize: 12, color: ts, fontFace: "Calibri", margin: 0, italic: true, wrap: true });
    s.addShape(prs.shapes.RECTANGLE, { x: x + 0.2, y: 2.52, w: 3.7, h: 0.02, fill: { color: div } });

    s.addText("Players:",       { x: x + 0.2, y: 2.62, w: 3.7, h: 0.26, fontSize: 10, bold: true, color: col.color, fontFace: "Calibri", margin: 0 });
    s.addText(col.players,      { x: x + 0.2, y: 2.88, w: 3.7, h: 0.35, fontSize: 13, bold: true, color: tc, fontFace: "Calibri", margin: 0, wrap: true });
    s.addText("Primary buyer:", { x: x + 0.2, y: 3.32, w: 3.7, h: 0.26, fontSize: 10, bold: true, color: col.color, fontFace: "Calibri", margin: 0 });
    s.addText(col.buyer,        { x: x + 0.2, y: 3.58, w: 3.7, h: 0.35, fontSize: 12, color: tc, fontFace: "Calibri", margin: 0, wrap: true });
    s.addText("Core question:", { x: x + 0.2, y: 4.02, w: 3.7, h: 0.26, fontSize: 10, bold: true, color: col.color, fontFace: "Calibri", margin: 0 });
    s.addText(col.question,     { x: x + 0.2, y: 4.28, w: 3.7, h: 0.55, fontSize: 12, color: tc, fontFace: "Calibri", margin: 0, italic: true, wrap: true });
    s.addText("Key point:",     { x: x + 0.2, y: 4.92, w: 3.7, h: 0.26, fontSize: 10, bold: true, color: col.color, fontFace: "Calibri", margin: 0 });
    s.addText(col.keypoint,     { x: x + 0.2, y: 5.18, w: 3.7, h: 0.72, fontSize: 11, color: tl, fontFace: "Calibri", margin: 0, wrap: true });
  });

  s.addText(
    "\"You wouldn't let the student grade their own test.\"  — DataWeave DSIM positioning",
    { x: 0.4, y: 6.85, w: 12.5, h: 0.35, fontSize: 13, color: ORANGE, fontFace: "Calibri", italic: true, bold: true, margin: 0, align: "center" }
  );
}

// ============================================================
// SLIDE 4: The 6 Levers
// ============================================================
{
  const s = prs.addSlide();
  s.background = { color: LIGHT_BG };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: GREEN } });

  s.addText("Six Levers. One Causal Story.", {
    x: 0.4, y: 0.22, w: 12.5, h: 0.55,
    fontSize: 24, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
  });
  s.addText("DSIM models six shelf and media levers simultaneously — attributing how much each contributed to (or constrained) incremental sales.",
    { x: 0.4, y: 0.82, w: 12.5, h: 0.35, fontSize: 13, color: TEXT_M, fontFace: "Calibri", margin: 0 }
  );
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 1.22, w: 12.5, h: 0.02, fill: { color: BORDER } });

  const levers = [
    { name: "On-Shelf Availability", type: "SHELF", metric: "% of time product is in-stock and purchasable", outcome: "Directly caps media ROI — spending on out-of-stock products wastes every dollar", color: "1A6B4A" },
    { name: "Share of Search",       type: "SHELF", metric: "% of category search results where brand appears", outcome: "Second-largest driver of sales velocity in Lactalis PoC; suppressed by competitive SoS loss", color: "1A6B4A" },
    { name: "Content Quality",       type: "SHELF", metric: "PDP completeness, image count, A+ content compliance", outcome: "Drives add-to-cart rate and conversion rate upstream of any media-driven visit", color: "1A6B4A" },
    { name: "Sponsored Media",       type: "MEDIA", metric: "Net-new sales per $1 of Walmart Connect spend, by channel and campaign type", outcome: "Separates incremental lift from organic baseline; iROI identifies which channels over- or under-return", color: NAVY_MID },
    { name: "Sub-Brand Halo",        type: "MEDIA", metric: "Lift in Brand B organic sales attributed to Brand A media spend", outcome: "Lactalis PoC: Kids/Baby media → +12% Adult sub-brand lift — invisible without DSIM decomposition", color: NAVY_MID },
    { name: "Pricing & Promotion",   type: "SHELF", metric: "Promotional depth and price competitiveness vs. category benchmark", outcome: "Separates price-driven volume from media-driven volume in the model decomposition", color: "1A6B4A" },
  ];

  levers.forEach((lev, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 6.45;
    const y = 1.4 + row * 1.72;

    s.addShape(prs.shapes.RECTANGLE, { x, y, w: 6.2, h: 1.58, fill: { color: WHITE }, shadow: makeShadow() });
    s.addShape(prs.shapes.RECTANGLE, { x, y, w: 0.08, h: 1.58, fill: { color: lev.color } });

    s.addShape(prs.shapes.RECTANGLE, { x: x + 0.2, y: y + 0.1, w: 0.7, h: 0.23, fill: { color: lev.color, transparency: 80 } });
    s.addText(lev.type, { x: x + 0.2, y: y + 0.09, w: 0.7, h: 0.23, fontSize: 9, bold: true, color: lev.color, fontFace: "Calibri", margin: 0, align: "center" });

    s.addText(lev.name,   { x: x + 1.05, y: y + 0.1, w: 5.0, h: 0.35, fontSize: 14, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0, wrap: true });
    s.addText(lev.metric, { x: x + 0.2,  y: y + 0.55, w: 5.8, h: 0.38, fontSize: 11, color: TEXT_M, fontFace: "Calibri", margin: 0, wrap: true });
    s.addText(lev.outcome,{ x: x + 0.2,  y: y + 0.97, w: 5.8, h: 0.52, fontSize: 11, color: TEXT_L, fontFace: "Calibri", margin: 0, italic: true, wrap: true });
  });
}

// ============================================================
// SLIDE 5: Lactalis PoC Proof
// ============================================================
{
  const s = prs.addSlide();
  s.background = { color: LIGHT_BG };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: ORANGE } });

  s.addText("The Proof: What We Found on Our First Engagement", {
    x: 0.4, y: 0.22, w: 12.5, h: 0.55,
    fontSize: 24, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
  });
  s.addText("Lactalis PoC  ·  Sept 2025 – Jan 2026  ·  5 sub-brands  ·  17 store clusters  ·  Walmart-only",
    { x: 0.4, y: 0.82, w: 12.5, h: 0.35, fontSize: 13, color: TEXT_M, fontFace: "Calibri", margin: 0 }
  );
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 1.22, w: 12.5, h: 0.02, fill: { color: BORDER } });

  // 4 stat boxes
  const stats = [
    { value: "91%",    label: "Model accuracy (R²)",    sub: "vs. 70–80% typical MMM",     color: GREEN },
    { value: "5.9%",   label: "Model error (MAPE)",     sub: "vs. 10–15% industry standard", color: GREEN },
    { value: "$30K/d", label: "Reallocation opportunity", sub: "from budget misallocation alone", color: ORANGE },
    { value: "17",     label: "Store clusters analyzed", sub: "each with distinct media response", color: NAVY_MID },
  ];
  stats.forEach((st, i) => {
    const x = 0.4 + i * 3.15;
    s.addShape(prs.shapes.RECTANGLE, { x, y: 1.38, w: 2.9, h: 1.55, fill: { color: WHITE }, shadow: makeShadow() });
    s.addShape(prs.shapes.RECTANGLE, { x, y: 1.38, w: 2.9, h: 0.1, fill: { color: st.color } });
    s.addText(st.value, { x: x + 0.15, y: 1.54, w: 2.6, h: 0.78, fontSize: 38, bold: true, color: st.color, fontFace: "Calibri", margin: 0 });
    s.addText(st.label, { x: x + 0.15, y: 2.32, w: 2.6, h: 0.3, fontSize: 11, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0, wrap: true });
    s.addText(st.sub,   { x: x + 0.15, y: 2.62, w: 2.6, h: 0.22, fontSize: 10, color: TEXT_L, fontFace: "Calibri", margin: 0, italic: true, wrap: true });
  });

  // iROI bar chart
  s.addChart(prs.charts.BAR, [{
    name: "iROI per $1 spent",
    labels: ["Onsite Search", "Sponsored Brands", "Offsite Display"],
    values: [0.83, 1.12, 1.55]
  }], {
    x: 0.4, y: 3.1, w: 6.4, h: 2.85,
    barDir: "col",
    chartColors: [RED, YELLOW, GREEN],
    chartArea: { fill: { color: WHITE }, roundedCorners: false },
    catAxisLabelColor: TEXT_M,
    valAxisLabelColor: TEXT_M,
    valGridLine: { color: "E2E8F0", size: 0.5 },
    catGridLine: { style: "none" },
    showValue: true,
    dataLabelColor: WHITE,
    dataLabelFontSize: 14,
    dataLabelFontBold: true,
    showLegend: false,
    showTitle: true,
    title: "iROI by Channel — Lactalis PoC",
    titleColor: TEXT_D,
    titleFontSize: 13,
  });

  // Key findings right panel
  s.addText("Key Findings", { x: 7.1, y: 3.1, w: 5.9, h: 0.38, fontSize: 15, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0 });
  const findings = [
    { icon: "▼", text: "63% of budget in Onsite Search (iROI 0.83) — losing money per dollar on the dominant channel", color: RED },
    { icon: "▲", text: "22% of budget in Offsite Display (iROI 1.55) — highest return, critically under-invested", color: GREEN },
    { icon: "⚑", text: "78% in-stock during peak media periods — ad spend amplifying an availability problem, not solving it", color: YELLOW },
    { icon: "→", text: "Kids/Baby media generated +12% Adult sub-brand lift — invisible in any platform ROAS report", color: NAVY_MID },
  ];
  findings.forEach((f, i) => {
    const y = 3.62 + i * 0.7;
    s.addShape(prs.shapes.RECTANGLE, { x: 7.1, y: y - 0.02, w: 0.32, h: 0.48, fill: { color: f.color, transparency: 20 } });
    s.addText(f.icon, { x: 7.1, y: y - 0.02, w: 0.32, h: 0.48, fontSize: 14, bold: true, color: f.color, fontFace: "Calibri", margin: 0, align: "center", valign: "middle" });
    s.addText(f.text, { x: 7.52, y, w: 5.5, h: 0.6, fontSize: 12, color: TEXT_D, fontFace: "Calibri", margin: 0, wrap: true });
  });
}

// ============================================================
// SLIDE 6: GTM Plan
// ============================================================
{
  const s = prs.addSlide();
  s.background = { color: LIGHT_BG };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: NAVY_MID } });

  s.addText("Go-to-Market — Who, How, and When", {
    x: 0.4, y: 0.22, w: 12.5, h: 0.55,
    fontSize: 24, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
  });
  s.addText("Services-led motion first. Validate willingness-to-pay before investing in full productization.",
    { x: 0.4, y: 0.82, w: 12.5, h: 0.35, fontSize: 13, color: TEXT_M, fontFace: "Calibri", margin: 0 }
  );
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 1.22, w: 12.5, h: 0.02, fill: { color: BORDER } });

  // Left: ICP
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 1.38, w: 4.6, h: 4.65, fill: { color: WHITE }, shadow: makeShadow() });
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 1.38, w: 4.6, h: 0.12, fill: { color: NAVY_MID } });
  s.addText("Ideal Customer Profile", { x: 0.55, y: 1.57, w: 4.3, h: 0.38, fontSize: 15, bold: true, color: NAVY_MID, fontFace: "Calibri", margin: 0 });

  const icpRows = [
    ["Brand size", "Mid-to-large CPG with $100M+ Walmart.com GMV/year"],
    ["Primary buyer", "VP / Director RGM or eCommerce Analytics — owns Walmart media budget, accountable to CFO for ROI"],
    ["Champion", "Walmart Channel Manager — daily user of output; owns availability and SoS KPIs"],
    ["Entry trigger", "Leadership asking 'was our Walmart Connect spend worth it?' — or persistent availability issues suppressing media ROI"],
    ["Target accounts", "Clorox · Mondelēz · Kraft Heinz · PepsiCo / Frito-Lay"],
  ];
  let icpY = 2.08;
  icpRows.forEach(([label, value]) => {
    s.addText(label, { x: 0.58, y: icpY, w: 1.3, h: 0.25, fontSize: 10, bold: true, color: NAVY_MID, fontFace: "Calibri", margin: 0 });
    s.addText(value, { x: 0.58, y: icpY + 0.25, w: 4.2, h: 0.5, fontSize: 11, color: TEXT_D, fontFace: "Calibri", margin: 0, wrap: true });
    icpY += 0.8;
  });

  // Right: 3 entry paths
  s.addText("Three Entry Paths", { x: 5.25, y: 1.42, w: 7.75, h: 0.38, fontSize: 15, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0 });

  const paths = [
    { num: "1", title: "Existing DataWeave accounts", desc: "Warm intro via CS lead. Cross-sell DSIM to brands on DSA or other DataWeave data modules. Fastest to close — trust is established.", color: GREEN },
    { num: "2", title: "Competitive losses and churned accounts", desc: "Brands lost to competitors or churned from DataWeave. DSIM offers the attribution layer that wasn't available in the original relationship.", color: ORANGE },
    { num: "3", title: "New-to-DataWeave via cold outreach", desc: "VP RGM at Tier 1/2 CPG brands tied to Walmart JBP cycle. Q2 outreach aligns with post-JBP reassessment — optimal timing window.", color: NAVY_MID },
  ];
  paths.forEach((p, i) => {
    const y = 1.98 + i * 1.32;
    s.addShape(prs.shapes.RECTANGLE, { x: 5.25, y, w: 7.75, h: 1.18, fill: { color: WHITE }, shadow: makeShadow() });
    s.addShape(prs.shapes.RECTANGLE, { x: 5.25, y, w: 0.08, h: 1.18, fill: { color: p.color } });
    s.addShape(prs.shapes.OVAL, { x: 5.4, y: y + 0.24, w: 0.48, h: 0.48, fill: { color: p.color } });
    s.addText(p.num, { x: 5.4, y: y + 0.24, w: 0.48, h: 0.48, fontSize: 16, bold: true, color: WHITE, fontFace: "Calibri", margin: 0, align: "center", valign: "middle" });
    s.addText(p.title, { x: 6.02, y: y + 0.12, w: 6.8, h: 0.35, fontSize: 14, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0 });
    s.addText(p.desc,  { x: 6.02, y: y + 0.52, w: 6.8, h: 0.56, fontSize: 12, color: TEXT_M, fontFace: "Calibri", margin: 0, wrap: true });
  });

  // Timeline strip
  s.addShape(prs.shapes.RECTANGLE, { x: 5.25, y: 5.95, w: 7.75, h: 0.88, fill: { color: CARD_HL } });
  s.addText("Timeline", { x: 5.4, y: 5.98, w: 1.0, h: 0.25, fontSize: 10, bold: true, color: NAVY_MID, fontFace: "Calibri", margin: 0 });
  const milestones = [
    { date: "May 2026", event: "First outreach\n(Clorox, Mondelēz)" },
    { date: "Jun 2026", event: "1 signed PoC SOW" },
    { date: "Aug 2026", event: "1 PoC-to-paid\nconversion" },
    { date: "Q4 2026", event: "2–3 paying\naccounts" },
  ];
  milestones.forEach((m, i) => {
    const x = 5.4 + i * 1.85;
    s.addText(m.date,  { x, y: 6.02, w: 1.7, h: 0.27, fontSize: 10, bold: true, color: NAVY_MID, fontFace: "Calibri", margin: 0, align: "center" });
    s.addText(m.event, { x, y: 6.29, w: 1.7, h: 0.5,  fontSize: 10, color: TEXT_D, fontFace: "Calibri", margin: 0, align: "center", wrap: true });
    if (i < 3) s.addShape(prs.shapes.RECTANGLE, { x: x + 1.74, y: 6.48, w: 0.08, h: 0.02, fill: { color: TEXT_L } });
  });
}

// ============================================================
// SLIDE 7: Productization Roadmap
// ============================================================
{
  const s = prs.addSlide();
  s.background = { color: LIGHT_BG };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: GREEN } });

  s.addText("From Services to Product — Four Phases", {
    x: 0.4, y: 0.22, w: 12.5, h: 0.55,
    fontSize: 24, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
  });
  s.addText("Productization is earned, not assumed. Each phase gates on signal from the previous one. No phase is skipped on ambition alone.",
    { x: 0.4, y: 0.82, w: 12.5, h: 0.35, fontSize: 13, color: TEXT_M, fontFace: "Calibri", margin: 0 }
  );
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 1.22, w: 12.5, h: 0.02, fill: { color: BORDER } });

  const phases = [
    {
      num: "0", title: "Services-Led\n(Now)",
      timeline: "Now → Q3 2026",
      desc: "Tableau dashboard delivered manually by CS + DS team. PoC → paid engagement path. Validates the model's ROI story with real brand data.",
      milestone: "2 paying accounts\n$300K+ ARR",
      gate: "PMF gate: 2 accounts signed before productization investment is authorized",
      color: ORANGE, dark: true,
    },
    {
      num: "1", title: "Automated\nModel Run",
      timeline: "Q4 2026",
      desc: "DSIM Setup Wizard. Automated data pipeline. Results data store built behind the scenes. Output still via Tableau — delivery faster and cheaper.",
      milestone: "≤ 10-week time-to-insight (down from 13)",
      gate: "Gate: 3+ concurrent PoCs running simultaneously hits delivery capacity",
      color: NAVY_MID, dark: false,
    },
    {
      num: "2", title: "Native\nDashboard",
      timeline: "Q1–Q2 2027",
      desc: "Native product UI built on Phase 1 results store. Tableau deprecated. Agency export API goes live. Alert engine added for shelf threshold triggers.",
      milestone: "5+ accounts; churn < 20%; NPS > 40",
      gate: "Gate: Customer says 'we need a product, not a spreadsheet'",
      color: NAVY_MID, dark: false,
    },
    {
      num: "3", title: "Reallocation\nSimulator",
      timeline: "2027+",
      desc: "Interactive budget reallocation on DSIM outputs. Live media integration. DSIM and activation start to converge — on DataWeave's terms, not CommerceIQ's.",
      milestone: "Expansion revenue from cross-brand and multi-retailer upsell",
      gate: "Gate: Competitive pressure or enterprise demand signals",
      color: TEXT_L, dark: false,
    },
  ];

  phases.forEach((ph, i) => {
    const x = 0.4 + i * 3.25;
    const bg = ph.dark ? NAVY : WHITE;
    const tc = ph.dark ? WHITE : TEXT_D;
    const ts = ph.dark ? ICE : TEXT_M;
    const tl = ph.dark ? "BED3F3" : TEXT_L;
    const dv = ph.dark ? "3A5A8A" : BORDER;

    s.addShape(prs.shapes.RECTANGLE, { x, y: 1.38, w: 3.05, h: 4.85, fill: { color: bg }, shadow: makeShadow() });
    s.addShape(prs.shapes.RECTANGLE, { x, y: 1.38, w: 3.05, h: 0.12, fill: { color: ph.color } });

    s.addShape(prs.shapes.OVAL, { x: x + 0.15, y: 1.6, w: 0.55, h: 0.55, fill: { color: ph.color } });
    s.addText(`P${ph.num}`, { x: x + 0.15, y: 1.6, w: 0.55, h: 0.55, fontSize: 14, bold: true, color: WHITE, fontFace: "Calibri", margin: 0, align: "center", valign: "middle" });

    s.addText(ph.title,    { x: x + 0.82, y: 1.61, w: 2.05, h: 0.55, fontSize: 13, bold: true, color: tc, fontFace: "Calibri", margin: 0, wrap: true });
    s.addText(ph.timeline, { x: x + 0.15, y: 2.26, w: 2.75, h: 0.28, fontSize: 11, color: ph.color, fontFace: "Calibri", margin: 0, bold: true });
    s.addShape(prs.shapes.RECTANGLE, { x: x + 0.15, y: 2.58, w: 2.75, h: 0.02, fill: { color: dv } });

    s.addText(ph.desc,     { x: x + 0.15, y: 2.68, w: 2.75, h: 1.35, fontSize: 11, color: ts, fontFace: "Calibri", margin: 0, wrap: true });
    s.addText("Success signal:", { x: x + 0.15, y: 4.12, w: 2.75, h: 0.26, fontSize: 10, bold: true, color: ph.color, fontFace: "Calibri", margin: 0 });
    s.addText(ph.milestone,{ x: x + 0.15, y: 4.38, w: 2.75, h: 0.5,  fontSize: 11, color: tc, fontFace: "Calibri", margin: 0, wrap: true });
    s.addShape(prs.shapes.RECTANGLE, { x: x + 0.15, y: 4.95, w: 2.75, h: 0.02, fill: { color: dv } });
    s.addText(ph.gate,     { x: x + 0.15, y: 5.05, w: 2.75, h: 0.65, fontSize: 10, color: tl, fontFace: "Calibri", margin: 0, italic: true, wrap: true });
  });

  s.addText("Key principle: productization is triggered by signal, not schedule — and by capacity ceiling, not ambition.",
    { x: 0.4, y: 6.42, w: 12.5, h: 0.4, fontSize: 12, color: ORANGE, fontFace: "Calibri", bold: true, margin: 0 }
  );
}

// ============================================================
// SLIDE 8: Customer Discovery
// ============================================================
{
  const s = prs.addSlide();
  s.background = { color: LIGHT_BG };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: NAVY_MID } });

  s.addText("Customer Discovery: How PoC Becomes Product Signal", {
    x: 0.4, y: 0.22, w: 12.5, h: 0.55,
    fontSize: 24, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
  });
  s.addText("Every PoC is both a delivery and a discovery sprint — generating the feature signal that feeds productization.",
    { x: 0.4, y: 0.82, w: 12.5, h: 0.35, fontSize: 13, color: TEXT_M, fontFace: "Calibri", margin: 0 }
  );
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 1.22, w: 12.5, h: 0.02, fill: { color: BORDER } });

  // Left: 10-Week PoC Process
  s.addText("10-Week PoC Process", { x: 0.4, y: 1.35, w: 5.7, h: 0.38, fontSize: 15, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0 });
  const pocSteps = [
    { week: "Wk 1–2", title: "Scoping & Data Onboarding", desc: "Map brand's data streams: shelf KPIs source, campaign data access, Scintilla module access. Confirm sub-brand scope. Define store-cluster boundaries.", color: NAVY_MID },
    { week: "Wk 3–7", title: "Model Build & Iteration", desc: "Causal model fit to historical data. Decompose across 6 levers. Cluster analysis. Iterate until model accuracy meets the MAPE target for this brand.", color: ORANGE },
    { week: "Wk 8–10", title: "Dashboard Delivery & Executive Readout", desc: "Tableau dashboard + executive presentation. Decomposition by sub-brand. Budget reallocation recommendations. CFO-defensible iROI numbers per channel.", color: GREEN },
  ];
  pocSteps.forEach((st, i) => {
    const y = 1.88 + i * 1.45;
    s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y, w: 5.7, h: 1.3, fill: { color: WHITE }, shadow: makeShadow() });
    s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y, w: 0.08, h: 1.3, fill: { color: st.color } });
    s.addShape(prs.shapes.RECTANGLE, { x: 0.58, y: y + 0.08, w: 0.85, h: 0.24, fill: { color: st.color, transparency: 80 } });
    s.addText(st.week, { x: 0.58, y: y + 0.07, w: 0.85, h: 0.24, fontSize: 10, bold: true, color: st.color, fontFace: "Calibri", margin: 0, align: "center" });
    s.addText(st.title, { x: 1.56, y: y + 0.1, w: 4.35, h: 0.32, fontSize: 13, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0, wrap: true });
    s.addText(st.desc,  { x: 0.58, y: y + 0.5, w: 5.3, h: 0.72, fontSize: 11, color: TEXT_M, fontFace: "Calibri", margin: 0, wrap: true });
  });

  // Right top: 3 Qualifying Questions
  s.addText("3 Qualifying Questions for Every Scoping Call", { x: 6.45, y: 1.35, w: 6.75, h: 0.38, fontSize: 15, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0 });
  const qs = [
    "Which Walmart Connect channel generated the most net-new incremental sales per dollar — not ROAS, but truly incremental? Can you show us the methodology behind that number today?",
    "During your last major media push, what was your in-stock rate by store cluster? Did you surface any availability issue in real time — or after the quarter closed?",
    "Do you have sub-brands where one brand's media spend is lifting a sister brand's organic sales, and is that currently measured anywhere in your stack?",
  ];
  qs.forEach((q, i) => {
    const y = 1.88 + i * 0.95;
    s.addShape(prs.shapes.OVAL, { x: 6.45, y: y + 0.05, w: 0.38, h: 0.38, fill: { color: NAVY_MID } });
    s.addText(`Q${i + 1}`, { x: 6.45, y: y + 0.05, w: 0.38, h: 0.38, fontSize: 12, bold: true, color: WHITE, fontFace: "Calibri", margin: 0, align: "center", valign: "middle" });
    s.addText(q, { x: 6.98, y, w: 6.15, h: 0.88, fontSize: 11.5, color: TEXT_D, fontFace: "Calibri", margin: 0, italic: true, wrap: true });
  });

  // Right bottom: Feature ideation loop
  s.addShape(prs.shapes.RECTANGLE, { x: 6.45, y: 4.85, w: 6.75, h: 0.02, fill: { color: BORDER } });
  s.addText("Feature ideation loop (with every PoC customer)", { x: 6.45, y: 4.95, w: 6.75, h: 0.35, fontSize: 13, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0 });
  const featureQs = [
    "What new data dimensions would change how you allocate budget next quarter?",
    "What format would your media agency need to act on this output directly — without a human intermediary?",
    "What would make this something your team opens weekly instead of quarterly?",
  ];
  featureQs.forEach((f, i) => {
    s.addText(`→  ${f}`, { x: 6.45, y: 5.4 + i * 0.38, w: 6.75, h: 0.35, fontSize: 12, color: TEXT_M, fontFace: "Calibri", margin: 0, wrap: true });
  });

  // Reference dashboard callout
  s.addShape(prs.shapes.RECTANGLE, { x: 6.45, y: 6.58, w: 6.75, h: 0.62, fill: { color: CARD_HL } });
  s.addShape(prs.shapes.RECTANGLE, { x: 6.45, y: 6.58, w: 0.08, h: 0.62, fill: { color: NAVY_MID } });
  s.addText(
    "Reference dashboard concepts (supplemental): Impact Decomposition Waterfall  ·  iROI by Channel  ·  Store Cluster Map  ·  Availability × Media Correlation",
    { x: 6.62, y: 6.63, w: 6.45, h: 0.52, fontSize: 11, color: NAVY_MID, fontFace: "Calibri", margin: 0, italic: true, wrap: true }
  );
}

// ============================================================
// SLIDE 9: Risks & Strategic Options
// ============================================================
{
  const s = prs.addSlide();
  s.background = { color: LIGHT_BG };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: RED } });

  s.addText("What Could Force Us to Adapt", {
    x: 0.4, y: 0.22, w: 12.5, h: 0.55,
    fontSize: 24, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
  });
  s.addText("Today's strategy is right for today's signal. These are the scenarios that would require a change of course.",
    { x: 0.4, y: 0.82, w: 12.5, h: 0.35, fontSize: 13, color: TEXT_M, fontFace: "Calibri", margin: 0 }
  );
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 1.22, w: 12.5, h: 0.02, fill: { color: BORDER } });

  // Left: Risks
  s.addText("Top Risks", { x: 0.4, y: 1.35, w: 6.0, h: 0.35, fontSize: 15, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0 });
  const risks = [
    { level: "HIGH", text: "Data onboarding delay — brand cannot get campaign data access quickly enough to hit the 10-week delivery target", mitigation: "Pre-qualify data access in scoping call. Build API runway into timeline from day one. Cap at 2 simultaneous PoCs until SLA is validated.", color: RED },
    { level: "MED",  text: "Data security and compliance concern — brand's legal team blocks sharing campaign or sales data with a third party", mitigation: "Define clear data handling policy in MSA. Explore cloud-to-cloud ingestion that avoids direct file transfer. Document encryption and access controls.", color: YELLOW },
    { level: "MED",  text: "Current tools are sufficient — brand perceives no gap that DSIM fills; existing reporting is 'good enough'", mitigation: "Use the 3 qualifying questions. Press on methodology: ask them to show you how they remove baseline from ROAS. The question usually surfaces the gap.", color: YELLOW },
    { level: "LOW",  text: "Competitive response — CommerceIQ or Profitero launches always-on diagnostics, neutralizing DSIM's positioning", mitigation: "Accelerate store-cluster localization as primary moat — competitors cannot replicate this with national-level models quickly.", color: GREEN },
  ];
  risks.forEach((r, i) => {
    const y = 1.85 + i * 1.25;
    s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y, w: 6.0, h: 1.1, fill: { color: WHITE }, shadow: makeShadow() });
    s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y, w: 0.08, h: 1.1, fill: { color: r.color } });
    s.addShape(prs.shapes.RECTANGLE, { x: 0.58, y: y + 0.09, w: 0.7, h: 0.22, fill: { color: r.color, transparency: 75 } });
    s.addText(r.level, { x: 0.58, y: y + 0.08, w: 0.7, h: 0.22, fontSize: 10, bold: true, color: r.color, fontFace: "Calibri", margin: 0, align: "center" });
    s.addText(r.text,       { x: 1.38, y: y + 0.08, w: 4.85, h: 0.48, fontSize: 11, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0, wrap: true });
    s.addText(`→ ${r.mitigation}`, { x: 1.38, y: y + 0.62, w: 4.85, h: 0.4, fontSize: 10, color: TEXT_M, fontFace: "Calibri", margin: 0, italic: true, wrap: true });
  });

  // Right: Strategic Pivot Options
  s.addText("Strategic Pivot Options", { x: 6.7, y: 1.35, w: 6.3, h: 0.35, fontSize: 15, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0 });
  s.addText("If current GTM hits a ceiling, these are the pivots — from least to most disruptive:",
    { x: 6.7, y: 1.72, w: 6.3, h: 0.35, fontSize: 11, color: TEXT_M, fontFace: "Calibri", margin: 0, wrap: true }
  );

  const pivots = [
    { num: "A", title: "Deepen within existing DataWeave accounts", desc: "Stay within current data relationships. Lowest friction. Ceiling: limited to DataWeave's current customer base.", color: GREEN },
    { num: "B", title: "Expand to Amazon and Target (Q4 2026+)", desc: "Add retailer coverage once Walmart PoC delivery SLA is proven. New ICP segment: multi-retailer RGM leads.", color: NAVY_MID },
    { num: "C", title: "Become a certified Walmart measurement partner", desc: "Like Incremental.com. Official partner status generates inbound leads from Walmart's own brand relationships.", color: NAVY_MID },
    { num: "D", title: "New brand category expansion", desc: "Expand beyond food/CPG to personal care, home goods, electronics. Or expand to non-Walmart retailers with similar shelf + media dynamics.", color: ORANGE },
    { num: "E", title: "Agency partnership / white-label distribution", desc: "Co-sell through media agencies (WPP, Publicis) that lack independent measurement. Scales deal velocity without scaling sales headcount.", color: ORANGE },
  ];
  pivots.forEach((p, i) => {
    const y = 2.22 + i * 0.9;
    s.addShape(prs.shapes.RECTANGLE, { x: 6.7, y, w: 6.3, h: 0.78, fill: { color: WHITE }, shadow: makeShadow() });
    s.addShape(prs.shapes.RECTANGLE, { x: 6.7, y, w: 0.08, h: 0.78, fill: { color: p.color } });
    s.addShape(prs.shapes.OVAL, { x: 6.85, y: y + 0.14, w: 0.38, h: 0.38, fill: { color: p.color } });
    s.addText(p.num,   { x: 6.85, y: y + 0.14, w: 0.38, h: 0.38, fontSize: 12, bold: true, color: WHITE, fontFace: "Calibri", margin: 0, align: "center", valign: "middle" });
    s.addText(p.title, { x: 7.35, y: y + 0.1, w: 5.5, h: 0.3, fontSize: 12, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0, wrap: true });
    s.addText(p.desc,  { x: 7.35, y: y + 0.44, w: 5.5, h: 0.3, fontSize: 11, color: TEXT_M, fontFace: "Calibri", margin: 0, wrap: true });
  });
}

// ============================================================
// SLIDE 10: Closing KRAs (dark)
// ============================================================
{
  const s = prs.addSlide();
  s.background = { color: NAVY };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: ORANGE } });

  s.addText("What Success Looks Like", {
    x: 0.4, y: 0.22, w: 12.5, h: 0.55,
    fontSize: 26, bold: true, color: WHITE, fontFace: "Calibri", margin: 0
  });
  s.addText("Key Result Areas — Q2 and Q3 2026",
    { x: 0.4, y: 0.8, w: 12.5, h: 0.38, fontSize: 15, color: ICE, fontFace: "Calibri", margin: 0 }
  );
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 1.22, w: 12.5, h: 0.02, fill: { color: "3A5A8A" } });

  // Q2 column
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 1.38, w: 5.9, h: 0.42, fill: { color: ORANGE } });
  s.addText("Q2 2026  ·  April – June", { x: 0.56, y: 1.38, w: 5.74, h: 0.42, fontSize: 14, bold: true, color: WHITE, fontFace: "Calibri", margin: 0, valign: "middle" });
  const q2 = [
    { kra: "Outreach launched",     target: "≥ 2 scoping calls completed — Clorox and Mondelēz" },
    { kra: "Pipeline established",  target: "≥ 3 accounts in active PoC conversation" },
    { kra: "First SOW signed",      target: "$50K–$75K PoC; data onboarding underway" },
    { kra: "Sales enablement live", target: "1-page brief + Lactalis methodology one-pager in Sales hands" },
  ];
  q2.forEach((r, i) => {
    const y = 1.92 + i * 1.02;
    s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y, w: 5.9, h: 0.9, fill: { color: "1E3A5F" } });
    s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y, w: 0.08, h: 0.9, fill: { color: ORANGE } });
    s.addText(r.kra,    { x: 0.58, y: y + 0.08, w: 5.55, h: 0.3, fontSize: 13, bold: true, color: ICE, fontFace: "Calibri", margin: 0 });
    s.addText(r.target, { x: 0.58, y: y + 0.46, w: 5.55, h: 0.38, fontSize: 12, color: "8AAFD4", fontFace: "Calibri", margin: 0, wrap: true });
  });

  // Q3 column
  s.addShape(prs.shapes.RECTANGLE, { x: 6.6, y: 1.38, w: 6.35, h: 0.42, fill: { color: GREEN } });
  s.addText("Q3 2026  ·  July – September", { x: 6.76, y: 1.38, w: 6.2, h: 0.42, fontSize: 14, bold: true, color: WHITE, fontFace: "Calibri", margin: 0, valign: "middle" });
  const q3 = [
    { kra: "First PoC delivered",      target: "MAPE ≤ 8%; Tableau dashboard live; executive readout completed" },
    { kra: "First PoC-to-paid",        target: "≥ $150K ARR; expansion or renewal conversation opened" },
    { kra: "PMF signal achieved",      target: "2 paying accounts + $300K total ARR → initiate productization discovery sprint" },
    { kra: "Referenceable account",    target: "1 brand willing to be cited by name in an external case study" },
  ];
  q3.forEach((r, i) => {
    const y = 1.92 + i * 1.02;
    s.addShape(prs.shapes.RECTANGLE, { x: 6.6, y, w: 6.35, h: 0.9, fill: { color: "1A3B2A" } });
    s.addShape(prs.shapes.RECTANGLE, { x: 6.6, y, w: 0.08, h: 0.9, fill: { color: GREEN } });
    s.addText(r.kra,    { x: 6.78, y: y + 0.08, w: 6.0, h: 0.3, fontSize: 13, bold: true, color: ICE, fontFace: "Calibri", margin: 0 });
    s.addText(r.target, { x: 6.78, y: y + 0.46, w: 6.0, h: 0.38, fontSize: 12, color: "7BBFA0", fontFace: "Calibri", margin: 0, wrap: true });
  });

  // Bottom decision gate
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 6.5, w: 12.55, h: 0.72, fill: { color: "0F1E38" } });
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 6.5, w: 0.08, h: 0.72, fill: { color: ORANGE } });
  s.addText(
    "Decision gate: If Q3 closes with 2 paying accounts and ≥ $300K ARR → initiate DSIM native product discovery sprint. If Q3 closes short → extend services phase, broaden ICP, or activate one of the strategic pivots from Slide 9.",
    { x: 0.62, y: 6.55, w: 12.15, h: 0.6, fontSize: 12, color: "8AAFD4", fontFace: "Calibri", margin: 0, wrap: true }
  );
}

// ============================================================
// SLIDE 11: Supplemental — Reference Dashboard Concepts
// ============================================================
{
  const path = require("path");
  const fs   = require("fs");
  const ASSETS = path.join(__dirname, "assets");

  const s = prs.addSlide();
  s.background = { color: LIGHT_BG };
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.14, h: 7.5, fill: { color: NAVY_MID } });

  s.addText("Reference Dashboard Concepts — Supplemental", {
    x: 0.4, y: 0.22, w: 12.5, h: 0.52,
    fontSize: 22, bold: true, color: TEXT_D, fontFace: "Calibri", margin: 0
  });
  s.addText("Illustrative mockups of the four core DSIM dashboard views. These are reference designs for Phase 2 productization scoping.",
    { x: 0.4, y: 0.78, w: 12.5, h: 0.32, fontSize: 12, color: TEXT_M, fontFace: "Calibri", margin: 0 }
  );
  s.addShape(prs.shapes.RECTANGLE, { x: 0.4, y: 1.14, w: 12.5, h: 0.02, fill: { color: BORDER } });

  const charts = [
    { file: "iroi-channels.png",    label: "iROI by Channel",             sub: "Which channels generate net-new incremental sales per dollar?" },
    { file: "impact-waterfall.png", label: "Sales Impact Decomposition",  sub: "How much did each of the 6 levers contribute to total sales?" },
    { file: "store-clusters.png",   label: "Store Cluster Performance",   sub: "Which store clusters are over- or under-invested in media?" },
    { file: "availability-media.png", label: "Availability × Media Correlation", sub: "When did availability constraints cap media ROI?" },
  ];

  const positions = [
    { x: 0.4,  y: 1.25 },
    { x: 6.85, y: 1.25 },
    { x: 0.4,  y: 4.25 },
    { x: 6.85, y: 4.25 },
  ];

  charts.forEach((c, i) => {
    const { x, y } = positions[i];
    const imgPath = path.join(ASSETS, c.file);
    if (fs.existsSync(imgPath)) {
      s.addImage({ path: imgPath, x, y: y + 0.52, w: 6.2, h: 2.62 });
    }
    s.addShape(prs.shapes.RECTANGLE, { x, y, w: 6.2, h: 0.48, fill: { color: NAVY } });
    s.addText(c.label, { x: x + 0.15, y: y + 0.05, w: 5.9, h: 0.25, fontSize: 13, bold: true, color: WHITE, fontFace: "Calibri", margin: 0 });
    s.addText(c.sub,   { x: x + 0.15, y: y + 0.28, w: 5.9, h: 0.18, fontSize: 10, color: ICE, fontFace: "Calibri", margin: 0, italic: true });
  });
}

prs.writeFile({ fileName: "dsim-internal-strategy-deck-2026-04-21.pptx" })
  .then(() => console.log("✅ Deck written."))
  .catch(err => { console.error("❌", err); process.exit(1); });
