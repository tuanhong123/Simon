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
    // 1 Derivatives: an option payoff (hockey stick) with a dot riding it.
    reset(P('M228 140H572') + P('M228 140V36', 'a') +
      P('M240 120H400L560 40') +
      `<circle class="t hop" r="8" fill="currentColor" stroke="none" style="--k:${k++};offset-path:path('M240 120H400L560 40')"/>` +
      Tx(250, 72, 'max(0, S − X)', 26) + C(540, 100, 0.1, 'a')),
    // 2 Alternatives: stacked bars of private capital, real assets and digital assets.
    reset(P('M228 150H572') + P('M250 150V100H300V150', 'a') + P('M330 150V70H380V150') + P('M410 150V90H460V150', 'a') + P('M490 150V40H540V150') +
      Tx(250, 40, 'private · real · digital', 24) + C(520, 90, 0.1, 'a')),
  ];
})();
