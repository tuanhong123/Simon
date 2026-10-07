'use strict';
/* Economics chart helpers shared by every chapter (prefix ec; the engine owns the other names). */
function ecChart(p, { x0 = 170, y0 = 770, w = 800, h = 560, xmax, ymax, xl = 'Quantity', yl = 'Price' }, t0 = 0) {
  const C = { x0, y0, w, h, xmax, ymax, X: v => x0 + v / xmax * w, Y: v => y0 - v / ymax * h };
  draw(path(p, `M${x0} ${y0 - h - 24}V${y0}H${x0 + w + 24}`, { stroke: COL.dim, 'stroke-width': 3 }, { d: 0 }), t0, .8);
  show(T(p, xl, { x: x0 + w, y: y0 + 90, size: 28, fill: COL.dim, anchor: 'end', o: 0 }), t0 + .3);
  show(T(p, yl, { x: x0 + 14, y: y0 - h - 34, size: 28, fill: COL.dim, o: 0 }), t0 + .3);
  return C;
}
function ecLine(p, C, pts, color, t0, dur = .9, w = 6) {
  const d = pts.map(([q, pr], i) => `${i ? 'L' : 'M'}${C.X(q).toFixed(1)} ${C.Y(pr).toFixed(1)}`).join('');
  const e = path(p, d, { stroke: color, 'stroke-width': w }, { d: 0 });
  draw(e, t0, dur); return e;
}
function ecFn(p, C, fn, q0, q1, color, t0, dur = 1.1, w = 6, n = 60) {
  const pts = []; for (let i = 0; i <= n; i++) { const q = q0 + (q1 - q0) * i / n; pts.push([q, fn(q)]); }
  return ecLine(p, C, pts, color, t0, dur, w);
}
function ecDot(p, C, q, pr, color, t0, r = 12) {
  const g = G(p, { x: C.X(q), y: C.Y(pr), s: 0, o: 0 });
  mk('circle', { r, fill: color, stroke: COL.board, 'stroke-width': 3 }, g);
  pop(g, t0); return g;
}
function ecGuide(p, C, q, pr, color, t0) {
  const e = path(p, `M${C.x0} ${C.Y(pr)}H${C.X(q)}V${C.y0}`, { stroke: color, 'stroke-width': 3, 'stroke-dasharray': '9 9' }, { o: 0 });
  show(e, t0); return e;
}
const ecLabX = (p, C, q, str, t0, fill = COL.dim) => { const e = T(p, str, { x: C.X(q), y: C.y0 + 40, size: 26, fill, anchor: 'middle', o: 0 }); show(e, t0); return e; };
const ecLabY = (p, C, pr, str, t0, fill = COL.dim) => { const e = T(p, str, { x: C.x0 - 16, y: C.Y(pr) + 9, size: 26, fill, anchor: 'end', o: 0 }); show(e, t0); return e; };
const ecNote = (p, str, x, y, t0, { size = 30, fill = COL.chalk, anchor = 'start', weight = 500 } = {}) => { const e = T(p, str, { x, y, size, fill, anchor, weight, o: 0 }); show(e, t0); return e; };
const ecBullet = (p, lines, x, y, t0s, { size = 32, gap = 58, fills = [] } = {}) => lines.map((s, i) => ecNote(p, s, x, y + i * gap, t0s[i], { size, fill: fills[i] || COL.chalk, weight: 600 }));
