# CFA Level 1 — Derivatives (2025 Curriculum, Volume 7) — book plan

Read this compact current state for chapter work. The chapter map/status lives in `chapters.md`; storyboards, errata and feedback live in `chapters/chNN.md`.

## Intake
- Readers: self-study CFA Level 1 candidates, comfortable with algebra and time value of money · Tone: clear, warm, exam-oriented · Narration language: English (CFA exam language; same as `cfa-l1-quant-vol1`) · Guide character: default infinity guide
- Slug: `cfa-l1-derivatives` · Primary language code: `en` · Asset approach: code/SVG only.
- Source: `book.pdf` → symlink to the 2025 Volume 7 PDF in `books/` (private, 247 pages) · Page map: `sections.json` · 10 learning modules in 1 unit (Derivatives).
- Personal study use only. Explanations, numbers and drawings are re-created, not copied; the source is © CFA Institute — do not publish the site or the PDF.
- **User request: no quizzes or tests.** Chapters are lesson beats only: `intro`, lessons, `wrap`, then `finish` (completion card, no score lines). No `q*`/`final*` beats.

## Conventions
- Look: engine default chalk-on-board. Colours: green `COL.good` = long / buyer / gain, red `COL.bad` = short / seller / loss, amber `COL.task` = underlying asset & spot price, blue `COL.whole` = time / financing / interest rate, lilac `COL.real` = the derivative contract itself, pink `COL.rat` = intermediaries / CCP / exchange.
- Narration: Kokoro offline (`am_michael`, speed 0.97) via `tools/<book>/tts_kokoro.py` — Edge TTS is blocked (403) here. Money read in words where it helps ("thirty euros"). Symbols said in words ("S sub T", "F sub zero").
- Notation: S₀ spot today, S_T spot at expiry, F₀(T) forward price, X exercise price, r risk-free rate (annual, compounded annually unless stated), T in years; payoffs per unit of underlying.
- Video: `tools/<book>/make_video.py chNN` renders every lesson beat (finish card left out) at 1920×1080.

## Visual models / available helpers (copied per chapter)
- `mline`, `text`, `pill` (as in the quant book); `box(p, label, color, x, y, w, h, t0)` counterparty box; `flow(p, x1, y1, x2, y2, color, t0, label)` labelled arrow between boxes; `payoff` axes for hockey-stick diagrams (S_T horizontal, payoff vertical).

## Current decisions
- Finish card in this book's engine hides score lines when no questions exist.
