# CFA Level 1 — Derivatives & Alternative Investments (Vol. 5) — book plan

Read this compact current state for chapter work. The chapter map/status lives in `chapters.md`; storyboards, errata and feedback live in `chapters/chNN.md`.

## Intake
- Readers: self-study CFA Level 1 candidates · Tone: clear, warm, exam-oriented · Narration language: English · Guide character: default infinity guide
- Slug: `cfa-l1-derivs-alts` · Primary language code: `en` · Asset approach: code/SVG only.
- Source: `book.pdf` (private, 454 pages) · Page map: `sections.json` · 17 learning modules in 2 units (Derivatives 1–10, Alternative Investments 11–17).
- Personal study use only. Explanations, numbers and drawings are re-created, not copied; the source is © CFA Institute — do not publish the site or the PDF.
- Requested format: animated, narrated web book with **no quizzes or practice** (no `ask` beats, no scoring), then rendered to MP4 video.

## Conventions (set in the pilot)
- Look: engine default chalk-on-board. Colours: amber `COL.task` = price / contract amount, blue `COL.whole` = underlying, green `COL.good` = gain / long, red `COL.bad` = loss / short / risk, salmon `COL.nat` = OTC, violet `COL.real` = exchange-traded, yellow `COL.int` = CCP.
- Narration: Kokoro offline (`am_michael`, speed 0.97) via `tools/<book>/tts_kokoro.py`; money in words. Beat ids shared by page and narration; every chapter ends `wrap` → `finish` (finish has a short narration line).
- Beats: intro, 8–11 lesson beats of 20–45 s, wrap, finish. No quick checks, no practice.
- Subject: S = spot price, S_T = price at T, F = forward price, X = strike, r = periodic rate.

## Visual models / available helpers (per chapter file, copy when reused)
- `lbox` labelled box, `pill`, `seg` / `harrow` arrows (engine already defines `arrow`, `dot`), `poly` partial polyline for animated price paths, `mline`, `text`.

## Current decisions
- Pilot ch01 built and rendered. Remaining chapters wait for the user's approval of the pilot style.
- Source errata: none found in ch01.
