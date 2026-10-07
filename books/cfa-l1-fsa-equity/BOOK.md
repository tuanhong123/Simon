# CFA Level 1 — Financial Statement Analysis & Equity Investments (Vol. 3) — book plan

Chapter map/status: `chapters.md`; storyboards and errata: `chapters/chNN.md`.

## Intake
- Readers: self-study CFA Level 1 candidates · Tone: clear, warm, exam-oriented · Narration: English · Guide: default infinity guide
- Slug `cfa-l1-fsa-equity` · lang `en` · assets: code/SVG only. Source `book.pdf` (private, 632 pages) · map `sections.json` (12 learning modules, 2 units).
- Personal study use only. Explanations, numbers and drawings are re-created; source is © CFA Institute — do not publish site or PDF.

## Conventions (set in the pilot)
- **No quizzes** (user request): no quick checks, no practice, no score. The chapter ends with `finish` (finishCard shows no score lines when `SCORE` is empty).
- Look: engine chalk-on-board. Colours: amber `COL.task` = tax payable / tax-law side; blue `COL.whole` = accounting side / deferred tax / carrying amount; red `COL.bad` = liability / gap; green `COL.good` = asset / reductions.
- Narration: Kokoro offline (`am_michael`, speed 0.97) via `tools/<book>/tts_kokoro.py narration.json out_dir /tmp/claude-0/models`. Money in words.
- Currency £ for the Reston example; figures re-checked (30% rate: payable 1,153/4,327/7,753; ΔDTL 257; expense 1,410/4,584/8,010).
- Video: `tools/<book>/make_video.py chNN` (server on :8765) → `video/` (git-ignored).

## Helpers (ch01 page): `text`, `box`, `arrowDown`, `pill`; stacked bars; waterfall (`recon`); two-line gap chart (`gap`).
