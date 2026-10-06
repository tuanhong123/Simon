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
    // 1 Quantitative methods: a compounding curve with a coin riding it, plus the core formula.
    reset(P('M228 140H572') + P('M228 140V40', 'a') +
      P('M240 128C320 126 400 118 460 92C500 74 530 54 560 36') +
      Array.from({ length: 5 }, (_, i) => P(`M${270 + i * 62} 134v12`, 'a')).join('') +
      `<circle class="t hop" r="8" fill="currentColor" stroke="none" style="--k:${k++};offset-path:path('M240 128C320 126 400 118 460 92C500 74 530 54 560 36')"/>` +
      Tx(250, 70, 'FV = PV(1 + r)ⁿ', 26) + C(540, 100, 0.1, 'a')),
  ];
})();
