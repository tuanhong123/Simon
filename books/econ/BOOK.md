# CFA Level 1 — Economics (Prerequisite Reading, Vol. 2) — book plan

Compact current state for chapter work. Map/status: `chapters.md`; storyboards/errata: `chapters/chNN.md`.

## Intake
- Readers: self-study CFA candidates, no economics background assumed · Tone: clear, warm, exam-oriented · Narration language: English (CFA terms) · Guide: default infinity guide.
- Slug `econ` · lang `en` · assets: code/SVG only.
- Source: `book.pdf` (private, 242 pp) · page map `sections.json` · 7 learning modules, 1 unit (Economics).
- Personal study use only. Explanations, numbers and drawings are re-created, not copied; source © CFA Institute — do not publish the site or the PDF.

## Conventions
- Look: engine default chalk-on-board. NO quick checks, NO practice, NO score card: lesson beats only (intro → ideas → wrap → finish card with Next chapter).
- Colours: amber `COL.task` = price / the thing being tuned, green `COL.good` = supply / gain / surplus, blue `COL.whole` = demand / quantity, red `COL.bad` = cost / loss / shortage.
- Narration: Kokoro offline `am_michael`, speed 0.97 (Edge TTS blocked). Say numbers in words.
- Curves (S, D, AD, AS…) drawn to scale on a shared `axes`-style helper copied per chapter.

## Helpers
- `mline`, `text` (template).

## Current decisions
- All seven learning modules built (ch01-ch07) as lesson beats only: no quick checks, no practice, no score card (the finish card keeps "All chapters / Watch again / Next chapter").
- Shared helpers in `site/econ/lib/econ.js` (`ecChart`, `ecLine`, `ecFn`, `ecDot`, `ecGuide`, `ecLabX/Y`, `ecNote`); chapters add their own `stackRow`, `bcard` (the engine already defines `card`), `numCard`.
- Illustrative numbers (cost curves ch01/02, AD–AS board ch03) are the author's own; worked examples with source numbers: gasoline demand (ch01), monopoly P = 800 − 2Q (ch02), price index 515/458 (ch04), reserve multiplier 10 (ch05), pens/pencils (ch06).
- Narration: Kokoro offline (`tools/econ/tts.sh chNN`, model files in /tmp/claude-0/kokoro). Video: `tools/econ/render_all.sh` → `video/econ-chNN.mp4` and `video/econ-full.mp4` (git-ignored).
- Checks: `tools/econ/shots.py chNN` (end-of-beat screenshots + JS errors), `tools/econ/sheet.py` (contact sheet).
