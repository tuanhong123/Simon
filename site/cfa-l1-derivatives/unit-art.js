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
    // 1 Derivatives: payoff axes with a long call's hockey stick; a dot rides along the payoff line.
    reset(P('M228 130H572') + P('M240 150V30', 'a') + P('M400 122v16', 'a') +
      P('M240 130H400L540 40') + P('M240 146H400L540 56', 'a faint') +
      `<circle class="t ride" r="8" fill="currentColor" stroke="none" style="--k:${k++};offset-path:path('M250 130H400L530 46')"/>` +
      Tx(400, 162, 'X', 22, 'a', 'middle') + Tx(560, 120, 'S', 22, 'a') + Tx(420, 40, 'max(0, S − X)', 24)),
  ];
})();
