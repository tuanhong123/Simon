/* Shared chapter helpers for this book (loaded after engine.js). */
const mline = (p, parts, x, y, t0, fill = COL.chalk, size = 48, anchor = 'middle') => { const e = M(p, [].concat(parts), { x, y, size, fill, anchor, o: 0 }); show(e, t0); return e; };
const text = (p, str, x, y, t0, { size = 30, fill = COL.chalk, anchor = 'start', weight = 500 } = {}) => { const e = T(p, str, { x, y, size, fill, anchor, weight, o: 0 }); show(e, t0); return e; };
const pill = (p, str, color, x, y, t0, size = 30) => {
  const w = uiW(str, size) + 56, g = G(p, { x, y, o: 0 });
  mk('rect', { x: -w / 2, y: -31, width: w, height: 62, rx: 31, fill: 'none', stroke: color, 'stroke-width': 3 }, g);
  T(g, str, { y: size / 3, size, fill: color, weight: 600, anchor: 'middle' });
  show(g, t0);
  return g;
};
const card1 = (p, x, y, w, h, color) => { const g = G(p, { x, y, o: 0 }); mk('rect', { x: -w / 2, y: -h / 2, width: w, height: h, rx: 18, fill: 'none', stroke: color, 'stroke-width': 3 }, g); return g; };
const arw = (p, x1, y, x2, color, t0, dur = .8) => {
  const s = Math.sign(x2 - x1);
  draw(path(p, `M${x1} ${y}H${x2}`, { stroke: color, 'stroke-width': 5 }, { d: 0 }), t0, dur);
  draw(path(p, `M${x2 - s * 30} ${y - 26}L${x2} ${y}L${x2 - s * 30} ${y + 26}`, { stroke: color, 'stroke-width': 5 }, { d: 0 }), t0 + dur * .8, .3);
};
/* a card with a coloured title and up to three lines of text; returns the group (hidden until shown) */
const infoCard = (p, x, y, w, h, color, title, lines, tsize = 40) => {
  const g = card1(p, x, y, w, h, color);
  T(g, title, { y: -h / 2 + 62, size: tsize, fill: color, weight: 600, anchor: 'middle' });
  lines.forEach((s, i) => T(g, s, { y: -h / 2 + 118 + i * 40, size: 28, fill: i ? COL.dim : COL.chalk, weight: i ? 500 : 600, anchor: 'middle' }));
  return g;
};
/* axes with an L shape; returns nothing */
const axes2 = (p, x0, y0, x1, y1, xl, yl, t0 = .2) => {
  path(p, `M${x0} ${y0}H${x1}`, { stroke: COL.chalk, 'stroke-width': 3 }); path(p, `M${x0} ${y0}V${y1}`, { stroke: COL.chalk, 'stroke-width': 3 });
  if (xl) text(p, xl, x1, y0 + 80, t0, { size: 26, fill: COL.dim, anchor: 'end' });
  if (yl) text(p, yl, x0 - 80, y1 - 15, t0, { size: 26, fill: COL.dim, anchor: 'start' });
};
const polyline = (pts) => pts.map(([x, y], i) => (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1)).join('');
const bondPrice = (yy, c = 3.2, n = 10) => { let v = 100 / (1 + yy / 200) ** n; for (let k = 1; k <= n; k++) v += c / 2 / (1 + yy / 200) ** k; return v; };
