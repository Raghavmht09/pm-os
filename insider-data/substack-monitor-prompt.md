# Substack Content Monitor — Scheduled Task Instructions

You are executing the pmOS Substack content monitoring task. Work through every step below in order. Do not summarise what you are about to do — just execute.

---

## Step 1: Read the State File

Read: `/Users/raghavmehta/Documents/pmOS/insider-data/archive-sync-state.json`

If the file does not exist, initialise it as shown below, write it to disk, then continue:
```json
{
  "schema_version": "1.0",
  "last_run": null,
  "substack": {
    "processed": [],
    "excluded": []
  }
}
```

Extract three things from the state file:
- `processed_list` — array of PDF filenames already summarised
- `excluded_list` — array of filenames to never process
- `last_run` — timestamp of previous run (may be null)

---

## Step 2: Scan for Pending PDFs

Run this shell command:
```bash
ls "/Users/raghavmehta/Documents/Substack content/"*.pdf 2>/dev/null
```

From the output, collect only the **basenames** (filename without path).

Build `pending_list` = filenames that are:
- NOT in `processed_list`
- NOT in `excluded_list`
- End in `.pdf`

If `pending_list` is empty:
- Update `last_run` in the state file to the current ISO timestamp
- Write the updated state file to disk
- Output exactly: `Substack monitor [<timestamp>]: No new PDFs. Nothing to process.`
- Then jump directly to **Step 5** (re-registration).

---

## Step 3: Process Each Pending PDF

Process one PDF at a time. For each PDF in `pending_list`:

### 3a — Extract text

Use the `Read` tool to read the PDF directly:
- Path: `/Users/raghavmehta/Documents/Substack content/<filename>`
- For PDFs longer than 20 pages, read in batches using `offset` and `limit` (20 pages at a time), then combine all extracted text.

If the Read tool returns an error or empty content:
- Add filename to `excluded_list` in state, log `SKIPPED <filename>: extraction failed`, continue to next PDF

If extracted text is longer than 80,000 characters, read both the first and second halves into context together (do not summarise half-by-half — read both, summarise once).

### 3b — Identify newsletter metadata

From the first 800 characters of extracted text, determine:
- **Newsletter / publication name** (e.g. "The Pragmatic Engineer", "Product Growth by Aakash Gupta", "Lenny's Newsletter")
- **Author** (e.g. "Gergely Orosz", "Aakash Gupta")
- **Publication date** (if present in the text — look for date patterns near the top)
- **Topic / theme** (1–4 words: e.g. "AI agents and engineering velocity", "product pricing architecture")

### 3c — Generate the summary

Write a structured summary matching EXACTLY this format (do not add or remove top-level sections):

```markdown
# <Newsletter Title — use the article title, not the PDF filename>

**Source:** <Publication name>
**Author:** <Author name>
**Published:** <Date if found — otherwise write "Date not in PDF">
**Type:** <Deep-dive / Technical guide / Short post / Opinion piece — pick most accurate>

---

## What This Newsletter Covers
<2–3 sentences: the central thesis and what the post walks through. No bullet points here — prose only.>

---

## Most Useful Things

**For immediate action:**
- <Actionable item>: <why it's immediately useful, 1 sentence>
- <Actionable item>: <why>
- <Actionable item>: <why>

**For product / technical strategy:**
- <Strategic insight>: <context>
- <Strategic insight>: <context>

---

## Key Insights
- **"<Direct quote or tightly paraphrased key point>"** — <1-sentence context>
- <Key insight — lead with the claim, follow with context>
- <Key insight>
- <Key insight>
- <Key insight>

---

## Things to Explore Further
1. **<Topic>** — <2–3 sentences: what it is and why it's worth deeper study for a Technical PM>
2. **<Topic>** — <2–3 sentences>
3. **<Topic>** — <2–3 sentences>

---

## Key References
| Reference | Description |
|---|---|
| <tool / concept / framework / link mentioned in the article> | <what it is in 1 sentence> |

---
*Summary generated <today's date in YYYY-MM-DD>. Source: PDF — <publication name>.*
```

Rules for the summary:
- Do not fabricate information not present in the extracted text
- "Things to Explore Further" must be grounded in what the article actually covers — frame each item for a Technical PM at a B2B SaaS company
- Key Insights must contain at least one direct quote or near-verbatim paraphrase
- If a section has no relevant content (e.g. no key references in the article), write `None noted.` under that section header — do not omit the section

### 3d — Write the summary file

Determine the output filename:
- Take the article title (from 3b)
- Replace characters that are invalid in filenames (`/ : * ? " < > |`) with `_`
- Append ` — Summary.md`
- Example: `Are AI Agents Actually Slowing Us Down — Summary.md`

Write to: `/Users/raghavmehta/Documents/Substack content/newsletter summaries/<output filename>`

### 3e — Update the state file immediately after each PDF

After each successfully processed PDF:
- Add its filename to `processed_list`
- Update `last_run` to current ISO timestamp
- Write the updated state file to disk

This ensures progress is saved even if later PDFs fail.

Log: `PROCESSED <filename> → <summary filename>`

---

## Step 4: Run Report

After all pending PDFs are processed, output this report:

```
Substack Monitor Run — <timestamp>
─────────────────────────────────────
Processed : <N> PDF(s)
Skipped   : <N> PDF(s)

Results:
  ✓  <filename> → <summary filename>
  ✓  <filename> → <summary filename>
  ✗  <filename> — SKIPPED (<reason>)

State file updated: /Users/raghavmehta/Documents/pmOS/insider-data/archive-sync-state.json
```

---

## Step 5: Done

This task is managed by the MCP scheduled-tasks system and reruns automatically on its configured schedule. No re-registration needed.
