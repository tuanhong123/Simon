'use strict';
/* Shared chapter helpers for this book (load after engine.js). */
const text = (p, str, x, y, t0, { size = 30, fill = COL.chalk, anchor = 'start', weight = 500 } = {}) => { const e = T(p, str, { x, y, size, fill, anchor, weight, o: 0 }); show(e, t0); return e; };
const box = (p, x, y, w, h, color, t0, fillOp = 0) => {
  const g = G(p, { o: 0 });
  mk('rect', { x, y, width: w, height: h, rx: 18, fill: color, 'fill-opacity': fillOp, stroke: color, 'stroke-width': 3 }, g);
  show(g, t0); return g;
};
const arrowDown = (p, x, y0, y1, color, t0) => {
  draw(path(p, `M${x} ${y0}V${y1}`, { stroke: color, 'stroke-width': 4 }, { d: 0 }), t0, .5);
  draw(path(p, `M${x - 12} ${y1 - 14}L${x} ${y1}L${x + 12} ${y1 - 14}`, { stroke: color, 'stroke-width': 4 }, { d: 0 }), t0 + .3, .3);
};
const arrowRight = (p, x0, x1, y, color, t0) => {
  draw(path(p, `M${x0} ${y}H${x1}`, { stroke: color, 'stroke-width': 4 }, { d: 0 }), t0, .5);
  draw(path(p, `M${x1 - 14} ${y - 12}L${x1} ${y}L${x1 - 14} ${y + 12}`, { stroke: color, 'stroke-width': 4 }, { d: 0 }), t0 + .3, .3);
};
const pill = (p, str, color, x, y, t0, size = 28) => {
  const w = uiW(str, size) + 56, g = G(p, { x, y, o: 0 });
  mk('rect', { x: -w / 2, y: -size, width: w, height: size * 2, rx: size, fill: 'none', stroke: color, 'stroke-width': 3 }, g);
  T(g, str, { y: size * .35, size, fill: color, weight: 600, anchor: 'middle' });
  show(g, t0); return g;
};
const leg = (p, s, c, x, y, t0, size = 26) => { const g = G(p, { o: 0 }); mk('rect', { x, y: y - 20, width: 24, height: 24, rx: 5, fill: c }, g); T(g, s, { x: x + 38, y, size, fill: COL.dim }); show(g, t0); return g; };
const axisLine = (p, x0, x1, y) => path(p, `M${x0} ${y}H${x1}`, { stroke: COL.chalk, 'stroke-width': 3 });
/* stacked bar: segs = [[value, colour], ...] bottom to top; k = px per unit */
const bar = (p, cx, base, k, segs, t0, { w = 130, label = '', top = '', topColor = COL.chalk, sub = '' } = {}) => {
  const g = G(p, { y: 30, o: 0 }); let y = base;
  segs.forEach(([v, c]) => { const h = Math.abs(v) * k; y -= h; mk('rect', { x: cx - w / 2, y, width: w, height: h, rx: 4, fill: c, 'fill-opacity': .88 }, g); });
  if (label) T(g, label, { x: cx, y: base + 42, size: 26, fill: COL.dim, anchor: 'middle' });
  if (sub) T(g, sub, { x: cx, y: base + 80, size: 24, fill: COL.dim, anchor: 'middle' });
  if (top) T(g, top, { x: cx, y: y - 16, size: 30, fill: topColor, weight: 700, anchor: 'middle' });
  tw(g, { o: 1, y: 0 }, t0, .6, out); return g;
};
const wrapList = (p, m, items, size = 30) => items.forEach(([str, mark], i) => {
  const g = G(p, { x: -16, y: 250 + i * 120, o: 0 });
  mk('circle', { cx: 120, cy: -12, r: 26, fill: COL.task }, g);
  T(g, String(i + 1), { x: 120, y: -1, size: 30, fill: COL.board, weight: 700, anchor: 'middle' });
  T(g, str, { x: 180, size, weight: 600 });
  tw(g, { o: 1, x: 0 }, m(mark), .6);
});
const introBeat = (kicker, l1, l2, sub) => ['intro', l1 + ' ' + l2, (m, D) => {
  const g = G(scene, { o: 0, y: 24 });
  T(g, kicker, { x: 800, y: 300, size: 28, fill: COL.dim, anchor: 'middle' });
  T(g, l1, { x: 800, y: 400, size: 76, weight: 600, anchor: 'middle' });
  if (l2) T(g, l2, { x: 800, y: 490, size: 76, weight: 600, anchor: 'middle' });
  tw(g, { o: 1, y: 0 }, .2, 1.1, out);
  const r = text(scene, sub, 800, 620, m('sub'), { size: 34, fill: COL.dim, anchor: 'middle' });
  tw(g, { o: 0, y: -24 }, D - .9, .8); hide(r, D - .9, .8);
}];
const FINISH = ['finish', 'Finished', () => { panel(0); }, { ask: finishCard }];
/* greedy word wrap into lines of at most n characters */
const lines = (str, n) => str.split(' ').reduce((ls, w) => { if (ls.length && (ls[ls.length - 1] + ' ' + w).length <= n) ls[ls.length - 1] += ' ' + w; else ls.push(w); return ls; }, []);
/* a titled card with wrapped body lines; returns nothing, everything appears at t0 */
const infoCard = (p, x, y, w, h, color, head, body, t0, { hs = 30, bs = 24, n = 20, hy = 70 } = {}) => {
  show(box(p, x, y, w, h, color, t0, .1), 0);
  lines(head, Math.floor(w / (hs * .56))).forEach((l, i) => text(p, l, x + w / 2, y + hy + i * (hs + 6), t0, { size: hs, fill: color, anchor: 'middle', weight: 700 }));
  let yy = y + hy + (lines(head, Math.floor(w / (hs * .56))).length) * (hs + 6) + 24;
  body.forEach(([s, c], k) => lines(s, n).forEach((l, i) => { text(p, l, x + w / 2, yy, t0 + .4 + k * .5, { size: bs, fill: c || COL.chalk, anchor: 'middle' }); yy += bs + 8; }));
};
