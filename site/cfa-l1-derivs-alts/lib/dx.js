'use strict';
/* Shared drawing helpers for the Derivatives & Alternatives book (chapters 2+). Load after engine.js. */
const mline = (p, parts, x, y, t0, fill = COL.chalk, size = 48, anchor = 'middle') => { const e = M(p, [].concat(parts), { x, y, size, fill, anchor, o: 0 }); show(e, t0); return e; };
const text = (p, str, x, y, t0, { size = 30, fill = COL.chalk, anchor = 'start', weight = 500 } = {}) => { const e = T(p, str, { x, y, size, fill, anchor, weight, o: 0 }); show(e, t0); return e; };
const pill = (p, str, color, x, y, t0, size = 28) => {
  const w = uiW(str, size) + 48, g = G(p, { x, y, o: 0 });
  mk('rect', { x: -w / 2, y: -28, width: w, height: 56, rx: 28, fill: 'none', stroke: color, 'stroke-width': 3 }, g);
  T(g, str, { y: 10, size, fill: color, weight: 600, anchor: 'middle' });
  show(g, t0);
  return g;
};
// labelled rounded box centred on (x, y); '\n' makes lines
const lbox = (p, str, color, x, y, w, h, t0, size = 28, fillOp = 0) => {
  const g = G(p, { x, y, o: 0 });
  mk('rect', { x: -w / 2, y: -h / 2, width: w, height: h, rx: 14, fill: color, 'fill-opacity': fillOp, stroke: color, 'stroke-width': 3 }, g);
  if (str) str.split('\n').forEach((s, i, a) => T(g, s, { y: 10 + (i - (a.length - 1) / 2) * size * 1.2, size, fill: fillOp > .5 ? COL.board : color, weight: 600, anchor: 'middle' }));
  show(g, t0);
  return g;
};
const seg = (p, x1, y1, x2, y2, color, t0, dur = .7, w = 4) => { const e = path(p, `M${x1} ${y1}L${x2} ${y2}`, { stroke: color, 'stroke-width': w }, { d: 0 }); draw(e, t0, dur); return e; };
const arrowHead = (p, x, y, dir, color, t0, w = 4) => { const a = 15; draw(path(p, dir > 0 ? `M${x - a} ${y - a}L${x} ${y}L${x - a} ${y + a}` : `M${x + a} ${y - a}L${x} ${y}L${x + a} ${y + a}`, { stroke: color, 'stroke-width': w }, { d: 0 }), t0, .3); };
const harrow = (p, x1, x2, y, color, t0, dur = .7, w = 4) => { seg(p, x1, y, x2, y, color, t0, dur, w); arrowHead(p, x2, y, x2 > x1 ? 1 : -1, color, t0 + dur - .2, w); };
const varrow = (p, x, y1, y2, color, t0, dur = .7, w = 4) => { seg(p, x, y1, x, y2, color, t0, dur, w); const a = 15, s = y2 > y1 ? -1 : 1; draw(path(p, `M${x - a} ${y2 + s * a}L${x} ${y2}L${x + a} ${y2 + s * a}`, { stroke: color, 'stroke-width': w }, { d: 0 }), t0 + dur - .2, .3); };
const poly = (xs, ys, q) => {              // polyline through the first fraction q of the points
  const n = xs.length - 1, f = Math.min(n, q * n), k = Math.floor(f);
  let d = `M${xs[0]} ${ys[0]}`;
  for (let i = 1; i <= k; i++) d += `L${xs[i]} ${ys[i]}`;
  if (k < n && f > k) d += `L${xs[k] + (xs[k + 1] - xs[k]) * (f - k)} ${ys[k] + (ys[k + 1] - ys[k]) * (f - k)}`;
  return d;
};
const fmt$ = (v, d = 0) => (v < 0 ? '−$' : '$') + Math.abs(v).toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const bullets = (p, items, x, y0, dy, t0s, { size = 30, fill = COL.chalk } = {}) => items.map((s, i) => {
  const g = G(p, { x: x - 14, y: y0 + i * dy, o: 0 });
  mk('circle', { cx: 0, cy: -9, r: 7, fill: COL.task }, g);
  T(g, s, { x: 24, size, fill, weight: 600 });
  tw(g, { o: 1, x }, t0s[i], .6); return g;
});
// numbered summary list used by every wrap beat
const wrapList = (m, items) => {
  const p = panel(0);
  items.forEach((str, i) => {
    const g = G(p, { x: -16, y: 250 + i * 120, o: 0 });
    mk('circle', { cx: 140, cy: -12, r: 26, fill: COL.task }, g);
    T(g, String(i + 1), { x: 140, y: -1, size: 30, fill: COL.board, weight: 700, anchor: 'middle' });
    T(g, str, { x: 200, size: 32, weight: 600 });
    tw(g, { o: 1, x: 0 }, m('w' + (i + 1)), .6);
  });
};
// title card shared by every chapter's first beat
const introBeat = (unit, num, l1, l2, sub) => (m, D) => {
  const g = G(scene, { o: 0, y: 24 });
  T(g, `${unit}, Module ${num}`, { x: 800, y: 300, size: 28, fill: COL.dim, anchor: 'middle' });
  T(g, l1, { x: 800, y: 400, size: 72, weight: 600, anchor: 'middle' });
  T(g, l2, { x: 800, y: 490, size: 72, weight: 600, anchor: 'middle' });
  tw(g, { o: 1, y: 0 }, .2, 1.1, out);
  const r = text(scene, sub, 800, 620, m('sub'), { size: 34, fill: COL.dim, anchor: 'middle' });
  tw(g, { o: 0, y: -24 }, D - .9, .8); hide(r, D - .9, .8);
};
// x–y chart with a horizontal zero axis; returns scale functions X(v), Y(v)
const chart = (p, { x, y, w, h, x0, x1, y0, y1, xl = '', yl = '', ticks = [], size = 24 }) => {
  const X = v => x + (v - x0) / (x1 - x0) * w, Y = v => y + h - (v - y0) / (y1 - y0) * h, Z = Y(Math.max(0, y0));
  path(p, `M${x} ${Z}H${x + w}`, { stroke: COL.chalk, 'stroke-width': 3 });
  path(p, `M${x} ${y}V${y + h}`, { stroke: COL.dim, 'stroke-width': 3 });
  if (xl) T(p, xl, { x: x + w, y: Z + size * 3.3, size, fill: COL.dim, anchor: 'end' });
  if (yl) T(p, yl, { x: x + 10, y: y - 12, size, fill: COL.dim });
  ticks.forEach(([v, s, c]) => { path(p, `M${X(v)} ${Z - 8}V${Z + 8}`, { stroke: c || COL.chalk, 'stroke-width': 3 }); T(p, s, { x: X(v), y: Z + size * 1.5 + 6, size, fill: c || COL.dim, anchor: 'middle' }); });
  return { X, Y, x, y, w, h, x0, x1, y0, y1 };
};
// a function drawn across the chart (clipped to the y range)
const curve = (ch, p, f, color, t0, dur = 1, w = 6, dash) => {
  let d = '';
  for (let i = 0; i <= 120; i++) { const v = ch.x0 + (ch.x1 - ch.x0) * i / 120, fy = Math.max(ch.y0, Math.min(ch.y1, f(v))); d += (i ? 'L' : 'M') + ch.X(v).toFixed(1) + ' ' + ch.Y(fy).toFixed(1); }
  const e = path(p, d, { stroke: color, 'stroke-width': w, ...(dash ? { 'stroke-dasharray': dash } : {}) }, dash ? { o: 0 } : { d: 0 });
  dash ? show(e, t0, dur) : draw(e, t0, dur);
  return e;
};
// a ledger column: rows [label, amount, colour] (amount right-aligned); a row '-' draws a rule; t0s gives each row's start time
const ledger = (p, x, y, w, rows, t0s, { size = 30, dy = 62 } = {}) => rows.forEach((r, i) => {
  const yy = y + i * dy;
  if (r === '-') { const e = path(p, `M${x} ${yy - dy * .55}H${x + w}`, { stroke: COL.chalk, 'stroke-width': 3 }, { d: 0 }); draw(e, t0s[i], .6); return; }
  const [a, b, c = COL.chalk, bold = false] = r;
  text(p, a, x, yy, t0s[i], { size, fill: bold ? c : COL.dim, weight: bold ? 700 : 500 });
  if (b !== undefined) text(p, b, x + w, yy, t0s[i] + .2, { size, fill: c, anchor: 'end', weight: 700 });
});
// a horizontal ruler from v0 to v1 spanning x0..x1 at height y; returns X(v)
const ruler = (p, x0, x1, y, v0, v1, ticks, fmt = v => String(v), size = 24) => {
  const X = v => x0 + (v - v0) / (v1 - v0) * (x1 - x0);
  path(p, `M${x0} ${y}H${x1}`, { stroke: COL.chalk, 'stroke-width': 3 });
  ticks.forEach(v => { path(p, `M${X(v)} ${y - 8}V${y + 8}`, { stroke: COL.chalk, 'stroke-width': 3 }); T(p, fmt(v), { x: X(v), y: y + 38, size, fill: COL.dim, anchor: 'middle' }); });
  return X;
};
const rdot = (p, X, v, y, color, label, t0, { up = true, size = 26, dx = 0, ly } = {}) => {
  const g = G(p, { x: X(v), y, o: 0, s: .4 });
  mk('circle', { r: 13, fill: color, stroke: COL.board, 'stroke-width': 3 }, g);
  T(g, label, { x: dx, y: ly !== undefined ? ly : up ? -30 : 52, size, fill: color, weight: 700, anchor: 'middle' });
  tw(g, { o: 1, s: 1 }, t0, .5, back); return g;
};
