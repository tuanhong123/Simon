// Chalk sketches for the unit headers on the contents page, one per unit, drawn in the unit's colour.
// Each entry is the inside of an SVG with viewBox 0 0 600 180; keep the left ~200 px light (the unit title sits there
// on narrow screens). Classes, styled in book.html:
//   d  a stroke that draws itself in when the unit scrolls into view (--k orders the strokes)
//   t  text or a filled shape that fades in
//   a  faint chalk white instead of the unit colour;  faint  even fainter
// A sketch may add one looping motion after it is drawn: give an element a class and add a .seen .unit-art .NAME
// rule with its keyframes in book.html (see the examples there: swap-a, hop, spin, tilt, breathe, ...).
'use strict';
(() => {
  let k = 0;
  const P = (d, cls = '', extra = '') => `<path class="d ${cls}" pathLength="1" style="--k:${k++}" d="${d}" ${extra}/>`;
  const Tx = (x, y, s, size = 24, cls = '', anchor = 'start') => `<text class="t ${cls}" style="--k:${k++}" x="${x}" y="${y}" font-size="${size}" text-anchor="${anchor}">${s}</text>`;
  const C = (cx, cy, r, cls = '') => `<circle class="d ${cls}" pathLength="1" style="--k:${k++}" cx="${cx}" cy="${cy}" r="${r}"/>`;
  const reset = s => { k = 0; return s; };

  window.UNIT_ART = [
    // 1 Bond features: a timeline of coupons ending in par.
    reset(P('M228 130H572') + Array.from({ length: 5 }, (_, i) => P(`M${260 + i * 68} 130v-${30 + (i === 4 ? 40 : 0)}`)).join('') +
      P('M240 142H556', 'a') + Tx(250, 60, 'coupon × 5 + par', 24) +
      `<circle class="t hop" r="8" fill="currentColor" stroke="none" style="--k:${k++};offset-path:path('M236 130H560')"/>`),
    // 2 Valuation, yields and curves: price falls as yield rises; a dot rides the curve.
    reset(P('M228 140H572') + P('M228 140V30', 'a') + P('M246 44C290 100 360 128 420 134C480 138 530 138 566 138') +
      `<circle class="t hop" r="8" fill="currentColor" stroke="none" style="--k:${k++};offset-path:path('M246 44C290 100 360 128 420 134C480 138 530 138 566 138')"/>` +
      Tx(380, 80, 'P = Σ CF ÷ (1+y)ᵗ', 24)),
    // 3 Interest rate risk: a convex curve with its tangent line.
    reset(P('M228 140H572') + P('M228 140V30', 'a') + P('M246 40C290 100 360 130 430 138C490 142 540 142 566 142') +
      P('M300 52L470 146', 'a') + Tx(400, 70, 'ΔP ≈ −D × Δy', 26) + C(380, 118, 0.1, 'a')),
    // 4 Credit and securitization: a pool feeding three tranches.
    reset(P('M240 60H330V130H240Z') + Tx(250, 100, 'pool', 24) + P('M340 95H420') + P('M440 50H570V80H440Z') + P('M440 85H570V115H440Z', 'a') +
      P('M440 120H570V150H440Z') + Tx(450, 72, 'senior', 20) + Tx(450, 142, 'junior', 20)),
  ];
})();
