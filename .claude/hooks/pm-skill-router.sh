#!/usr/bin/env bash
# PM OS Skill Router — fires on UserPromptSubmit
# Reads prompt from stdin JSON, injects additionalContext naming the right skill

PROMPT=$(cat | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('prompt',''))" 2>/dev/null)

if [ -z "$PROMPT" ]; then
  exit 0
fi

LOWER=$(echo "$PROMPT" | tr '[:upper:]' '[:lower:]')

# Competitor analysis
if echo "$LOWER" | grep -qE 'competitor|profitero|commerceiq|pacvue|skai|incremental\.com|citrus.?ad|stackline|market.?intel|competitive'; then
  echo '{"hookSpecificOutput":{"hookEventName":"UserPromptSubmit","additionalContext":"[PM OS] Competitor topic detected. Invoke the Skill tool with skill=competitor-analysis BEFORE responding. Read insider-data/competitor-profiles/ for existing profiles first."}}'
  exit 0
fi

# PRD / requirements
if echo "$LOWER" | grep -qE 'prd|product requirement|write.*spec|feature.*spec|requirements.*doc|write.*requirement'; then
  echo '{"hookSpecificOutput":{"hookEventName":"UserPromptSubmit","additionalContext":"[PM OS] PRD request detected. Invoke the Skill tool with skill=write-prd BEFORE responding."}}'
  exit 0
fi

# FRD
if echo "$LOWER" | grep -qE 'frd|functional requirement|engineering handoff|write.*frd'; then
  echo '{"hookSpecificOutput":{"hookEventName":"UserPromptSubmit","additionalContext":"[PM OS] FRD request detected. Invoke the Skill tool with skill=write-frd BEFORE responding."}}'
  exit 0
fi

# Roadmap prioritization
if echo "$LOWER" | grep -qE 'roadmap|reprioritiz|prioriti(ze|sation)|backlog|parking.?lot|roadmap.?update'; then
  echo '{"hookSpecificOutput":{"hookEventName":"UserPromptSubmit","additionalContext":"[PM OS] Roadmap topic detected. Invoke the Skill tool with skill=roadmap-update BEFORE responding."}}'
  exit 0
fi

# Sprint planning
if echo "$LOWER" | grep -qE 'sprint.?plan|plan.*sprint|sprint.?goal|capacity|story.?point|velocity|sprint.?backlog'; then
  echo '{"hookSpecificOutput":{"hookEventName":"UserPromptSubmit","additionalContext":"[PM OS] Sprint planning detected. Invoke the Skill tool with skill=sprint-plan BEFORE responding."}}'
  exit 0
fi

# Sprint retro
if echo "$LOWER" | grep -qE 'retro|retrospective|carry.?over|what (worked|didn.?t)|sprint.?review'; then
  echo '{"hookSpecificOutput":{"hookEventName":"UserPromptSubmit","additionalContext":"[PM OS] Sprint retro detected. Invoke the Skill tool with skill=sprint-retro BEFORE responding."}}'
  exit 0
fi

# GTM / launch
if echo "$LOWER" | grep -qE 'gtm|go.?to.?market|launch|positioning|messaging|sales.?enable|icp|ideal.?customer'; then
  echo '{"hookSpecificOutput":{"hookEventName":"UserPromptSubmit","additionalContext":"[PM OS] GTM/launch topic detected. Invoke the Skill tool with skill=gtm-plan BEFORE responding."}}'
  exit 0
fi

# Customer signals / meeting notes
if echo "$LOWER" | grep -qE 'customer.?signal|meeting.?note|cs.?note|pain.?point|feedback.*extract|extract.*feedback|call.?note|customer.?call'; then
  echo '{"hookSpecificOutput":{"hookEventName":"UserPromptSubmit","additionalContext":"[PM OS] Customer signal / meeting notes detected. Invoke the Skill tool with skill=customer-signal-extract BEFORE responding."}}'
  exit 0
fi

# OKR check
if echo "$LOWER" | grep -qE 'okr|key.?result|at.?risk.*kr|kr.*at.?risk|objective.*progress|okr.?check'; then
  echo '{"hookSpecificOutput":{"hookEventName":"UserPromptSubmit","additionalContext":"[PM OS] OKR topic detected. Invoke the Skill tool with skill=okr-check BEFORE responding."}}'
  exit 0
fi

# Product strategy
if echo "$LOWER" | grep -qE 'product.?strategy|adoption.?lever|retention|flywheel|network.?effect|cross.?sell|upsell|strategic.?bet|growth.?strategy'; then
  echo '{"hookSpecificOutput":{"hookEventName":"UserPromptSubmit","additionalContext":"[PM OS] Product strategy question detected. Invoke the Skill tool with skill=product-strategy BEFORE responding."}}'
  exit 0
fi

# Brainstorm
if echo "$LOWER" | grep -qE 'brainstorm|explore.*option|diverge|ideate|what.*could.*we|option[s]?.*(for|to)|how might'; then
  echo '{"hookSpecificOutput":{"hookEventName":"UserPromptSubmit","additionalContext":"[PM OS] Brainstorming request detected. Invoke the Skill tool with skill=brainstorm BEFORE responding."}}'
  exit 0
fi

# Presentation / deck
if echo "$LOWER" | grep -qE 'deck|presentation|slide|qbr|leadership.?review|present.*to|board.?meeting|executive.?brief'; then
  echo '{"hookSpecificOutput":{"hookEventName":"UserPromptSubmit","additionalContext":"[PM OS] Presentation request detected. Invoke the Skill tool with skill=presentation-draft BEFORE responding."}}'
  exit 0
fi

# Weekly retro
if echo "$LOWER" | grep -qE 'weekly.?retro|week.*review|what.*shipped|what.*slipped|end.?of.?week'; then
  echo '{"hookSpecificOutput":{"hookEventName":"UserPromptSubmit","additionalContext":"[PM OS] Weekly retro detected. Invoke the Skill tool with skill=weekly-retro BEFORE responding."}}'
  exit 0
fi

exit 0
