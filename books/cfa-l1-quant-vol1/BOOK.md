# CFA Level 1 — Quantitative Methods (Prerequisite Reading, Vol. 1) — book plan

Read this compact current state for chapter work. The chapter map/status lives in `chapters.md`; storyboards, errata and feedback live in `chapters/chNN.md`.

## Intake
- Readers: self-study CFA Level 1 candidates, comfortable with algebra · Tone: clear, warm, exam-oriented · Narration language: English · Guide character: default infinity guide
- Slug: `cfa-l1-quant-vol1` · Primary language code: `en` · Asset approach: code/SVG only.
- Source: `book.pdf` (private, 340 pages) · Page map: `sections.json` · 6 learning modules in 1 unit (Quantitative Methods).
- Personal study use only. Explanations, numbers and drawings are re-created, not copied; the source is © CFA Institute — do not publish the site or the PDF.

## Conventions (set in the pilot)
- Look: engine default chalk-on-board. Colours: amber `COL.task` = money / principal, green `COL.good` = interest / growth, blue `COL.whole` = time, red `COL.bad` = discounting / wrong.
- Narration: `en-US-AndrewMultilingualNeural`, rate −4%. Money read in words ("twelve seventy-six twenty-eight").
- Questions: quick check after each new tool; 5 practice questions at the end (`final1`, `final2`). Numeric answers are exact, rounded to 2 dp ($) or stated precision (%).
- Subject: r = periodic rate, N = periods, FV/PV; round money to cents only at the end of each shown figure; EAR shown to 3 dp where differences matter.

## Visual models / available helpers
- `$$()` money formatter; `mline`, `text` (template); `bar` growth stacks (ch01 fv); timeline with discount arcs (ch01 pv, annuity).

## Current decisions
- All six learning modules built (ch01-ch06). Each: lesson beats + 1-2 quick checks + 3-5 practice questions. Videos (1080p, no quizzes) are rendered with tools/<book>/make_video.py.
- Narration: Kokoro offline (Edge TTS blocked here). Chapters 2-6 reuse the same look and helpers (curves, grids, pills) copied per chapter; ch05 uses `bcard` (engine already defines `card`).
