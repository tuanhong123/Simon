# CFA Level 1 — Fixed Income (Volume 4) — book plan

Compact current state for chapter work. Chapter map/status: `chapters.md`; storyboards, errata and notes: `chapters/chNN.md`.

## Intake
- Readers: self-study CFA Level 1 candidates · Tone: clear, warm, exam-oriented · Narration language: English · Guide character: default infinity guide
- Slug: `cfa-l1-fixedincome-vol4` · Primary language code: `en` · Asset approach: code/SVG only.
- Source: `book.pdf` (private, 540 pages, 2024 curriculum) · Page map: `sections.json` · 19 learning modules (ch01–ch19).
- Personal study use only. Explanations, numbers and drawings are re-created, not copied; the source is © CFA Institute — do not publish the site or the PDF.
- **No quizzes.** User asked for no checks, practice or score card: chapters are intro + lesson beats + wrap only. No `ask` beats, no `finish` card. Last beat `wrap` leads to the next chapter.

## Conventions
- Look: engine default chalk-on-board (same as the Quant Vol 1 book). Colours: amber `COL.task` = par / principal / price, green `COL.good` = coupons / income / yield, blue `COL.whole` = time / maturity, red `COL.bad` = risk / loss / default, purple `COL.rat` = options / contingency, `COL.real` = spreads.
- Narration: Kokoro offline (`am_michael`, speed 0.97). Edge TTS is blocked here. Model files are downloaded from the kokoro-onnx GitHub release into the scratchpad (`kokoro/`). Money and rates are read in words.
- Video: `tools/<book>/make_video.py chNN` renders 1080p MP4 per chapter into `video/` (git-ignored); `ffmpeg concat` joins them into the whole-book video.

## Visual models / helpers
- `mline`, `text`, `pill`, `timeline` (copied from Quant Vol 1 ch01 into each chapter).

## Current decisions
- All 19 learning modules built (ch01–ch19), no quizzes, each with intro, lesson beats, summary and an end card. Chapters 2–19 reuse `lib/helpers.js` (mline, text, pill, card1, infoCard, arw, axes2, polyline, bondPrice).
- Contents (UNITS) and each chapter's `next` link are generated from `chapters.md` by `tools/<book>/build_units.py`.
- Pipeline per chapter: `lesson_text.py chNN` (read) -> narration JSON -> `tts.sh chNN` (Kokoro) -> page -> `shot.py` review -> `register.py` -> `render.sh chNN` (1080p, 15 fps, serialized) -> `join_videos.sh` for the full-book video.
- Numbers are recomputed in code. Errata/notes live in `chapters/chNN.md` (ch06: 1.2% case recomputed as 103.75, source prints 103.73).
- Illustrative (not from the source): ch01 credit/yield bars and curve shape; ch05 auction bids; ch09/ch13 curve shapes; ch12 dispersion curves; ch14 spread cycle; ch16 ratio table and notching; ch19 prepayment curves.
