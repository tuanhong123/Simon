// Drawing helpers shared by every chapter of this book (load after engine.js).
'use strict';
const mline = (p, parts, x, y, t0, fill = COL.chalk, size = 48, anchor = 'middle') => { const e = M(p, [].concat(parts), { x, y, size, fill, anchor, o: 0 }); show(e, t0); return e; };
const text = (p, str, x, y, t0, { size = 30, fill = COL.chalk, anchor = 'start', weight = 500 } = {}) => { const e = T(p, str, { x, y, size, fill, anchor, weight, o: 0 }); show(e, t0); return e; };
const pill = (p, str, color, x, y, t0, size = 30) => {
  const w = uiW(str, size) + 56, hh = size * 2.05, g = G(p, { x, y, o: 0 });
  mk('rect', { x: -w / 2, y: -hh / 2, width: w, height: hh, rx: hh / 2, fill: COL.board, stroke: color, 'stroke-width': 3 }, g);
  T(g, str, { y: size * .34, size, fill: color, weight: 600, anchor: 'middle' });
  show(g, t0);
  return g;
};
// A counterparty box centred on (x, y); '\n' splits the label into lines.
const cbox = (p, label, color, x, y, t0, { w = 300, h = 110, size = 30, fillO = 0 } = {}) => {
  const g = G(p, { x, y, o: 0 });
  g._r = mk('rect', { x: -w / 2, y: -h / 2, width: w, height: h, rx: 16, fill: fillO ? color : COL.board, 'fill-opacity': fillO || 1, stroke: color, 'stroke-width': 3 }, g);
  const ls = label.split('\n');
  ls.forEach((s, i) => T(g, s, { y: (i - (ls.length - 1) / 2) * size * 1.2 + size * .35, size, fill: fillO ? COL.board : color, weight: 600, anchor: 'middle' }));
  show(g, t0);
  return g;
};
// An arrow from (x1, y1) to (x2, y2); bend > 0 curves it to the left of travel. Returns the group so it can fade as one.
const flow = (p, x1, y1, x2, y2, color, t0, label, { bend = 0, w = 4, size = 26, lx, ly, anchor = 'middle', dash } = {}) => {
  const g = G(p), dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), nx = dy / L, ny = -dx / L;
  const cx = (x1 + x2) / 2 + nx * bend, cy = (y1 + y2) / 2 + ny * bend;
  const at = { stroke: color, 'stroke-width': w };
  if (dash) at['stroke-dasharray'] = dash;
  const line = path(g, bend ? `M${x1} ${y1}Q${cx} ${cy} ${x2} ${y2}` : `M${x1} ${y1}L${x2} ${y2}`, at, dash ? { o: 0 } : { d: 0 });
  dash ? show(line, t0, .5) : draw(line, t0, .6);
  const hx = x2 - (bend ? cx : x1), hy = y2 - (bend ? cy : y1), hl = Math.hypot(hx, hy), ux = hx / hl, uy = hy / hl, a = 20, b = 11;
  draw(path(g, `M${x2 - ux * a - uy * b} ${y2 - uy * a + ux * b}L${x2} ${y2}L${x2 - ux * a + uy * b} ${y2 - uy * a - ux * b}`, { stroke: color, 'stroke-width': w }, { d: 0 }), t0 + .5, .2);
  if (label) text(g, label, lx ?? (x1 + x2) / 2 + nx * (bend / 2 + (bend >= 0 ? 30 : -30)), ly ?? (y1 + y2) / 2 + ny * (bend / 2 + (bend >= 0 ? 30 : -30)) + size * .35, t0 + .4, { size, fill: color, anchor, weight: 600 });
  return g;
};
const numbered = (p, items, t, { x = 140, y0 = 250, gap = 120, size = 32, col = COL.task } = {}) => items.forEach(([str, mark], i) => {
  const g = G(p, { x: -16, y: y0 + i * gap, o: 0 });
  mk('circle', { cx: x, cy: -12, r: 26, fill: col }, g);
  T(g, String(i + 1), { x, y: -1, size: 30, fill: COL.board, weight: 700, anchor: 'middle' });
  T(g, str, { x: x + 60, size, weight: 600 });
  tw(g, { o: 1, x: 0 }, t(mark), .6);
});
const title = (p, str, t0, y = 110) => text(p, str, 800, y, t0, { size: 40, anchor: 'middle', weight: 700 });
const swapTok = (p, str, color, x, y, t0) => {   // a small labelled token (asset or cash)
  const w = uiW(str, 24) + 34, g = G(p, { x, y, o: 0 });
  mk('rect', { x: -w / 2, y: -22, width: w, height: 44, rx: 10, fill: color }, g);
  T(g, str, { y: 8, size: 24, fill: COL.board, weight: 700, anchor: 'middle' });
  show(g, t0);
  return g;
};

// Payoff diagram: axes with S_T across and payoff/profit up. Returns {px, py} mapping data to stage coordinates.
const payAxes = (p, { x0 = 200, y0 = 140, w = 1100, h = 560, xmin = 0, xmax = 60, ymin = -30, ymax = 30, xl = ['S', Sb('T')], yl = 'payoff / profit', ticks = [] } = {}, t0 = 0) => {
  const px = v => x0 + (v - xmin) / (xmax - xmin) * w, py = v => y0 + h - (v - ymin) / (ymax - ymin) * h;
  const g = G(p, { o: 0 });
  path(g, `M${x0} ${py(0)}H${x0 + w + 24}`, { stroke: COL.dim, 'stroke-width': 3 });
  path(g, `M${x0 + w + 10} ${py(0) - 9}L${x0 + w + 26} ${py(0)}L${x0 + w + 10} ${py(0) + 9}`, { stroke: COL.dim, 'stroke-width': 3 });
  path(g, `M${x0} ${y0 + h}V${y0 - 20}`, { stroke: COL.dim, 'stroke-width': 3 });
  path(g, `M${x0 - 9} ${y0 - 6}L${x0} ${y0 - 22}L${x0 + 9} ${y0 - 6}`, { stroke: COL.dim, 'stroke-width': 3 });
  M(g, [].concat(xl), { x: x0 + w + 40, y: py(0) + 12, size: 34, fill: COL.dim, anchor: 'start' });
  T(g, yl, { x: x0 + 16, y: y0 - 18, size: 24, fill: COL.dim });
  T(g, '0', { x: x0 - 14, y: py(0) + 9, size: 24, fill: COL.dim, anchor: 'end' });
  ticks.forEach(([v, lab, c = COL.dim, dy = 42]) => { path(g, `M${px(v)} ${py(0) - 8}V${py(0) + 8}`, { stroke: c, 'stroke-width': 3 }); M(g, [].concat(lab), { x: px(v), y: py(0) + dy, size: 28, fill: c }); });
  show(g, t0);
  return { px, py, g, x0, y0, w, h };
};
// A piecewise-linear line through data points [[s, v], ...], drawn on.
const payLine = (p, ax, pts, color, t0, { dur = 1, w = 5, dash, o = 1 } = {}) => {
  const at = { stroke: color, 'stroke-width': w };
  if (dash) at['stroke-dasharray'] = dash;
  const d = pts.map(([s, v], i) => `${i ? 'L' : 'M'}${ax.px(s).toFixed(1)} ${ax.py(v).toFixed(1)}`).join('');
  const e = path(p, d, at, dash ? { o: 0 } : { d: 0 });
  dash ? tw(e, { o }, t0, dur) : draw(e, t0, dur);
  return e;
};
const payDot = (p, ax, s, v, color, t0, r = 10) => { const g = G(p, { x: ax.px(s), y: ax.py(v), s: 0, o: 0 }); mk('circle', { r, fill: color, stroke: COL.board, 'stroke-width': 3 }, g); pop(g, t0); return g; };
const mtext = (p, parts, x, y, t0, fill = COL.chalk, size = 34, anchor = 'middle') => mline(p, parts, x, y, t0, fill, size, anchor);
// A price-versus-time chart from t = 0 to T; curve(f, colour, t0) draws f(q) for q in [0, 1]. Returns {X, Y, curve}.
const growChart = (p, t0, { x0 = 160, y0 = 170, w = 760, h = 520, lo = 90, hi = 125 } = {}) => {
  const X = t => x0 + t * w, Y = v => y0 + h - (v - lo) / (hi - lo) * h, g = G(p, { o: 0 });
  path(g, `M${x0} ${y0 + h}H${x0 + w + 30}M${x0} ${y0 + h}V${y0 - 20}`, { stroke: COL.dim, 'stroke-width': 3 });
  T(g, 'time', { x: x0 + w + 40, y: y0 + h + 8, size: 24, fill: COL.dim });
  T(g, 'price', { x: x0 + 14, y: y0 - 20, size: 24, fill: COL.dim });
  T(g, '0', { x: x0, y: y0 + h + 40, size: 24, fill: COL.dim, anchor: 'middle' });
  T(g, 'T', { x: x0 + w, y: y0 + h + 40, size: 26, fill: COL.dim, anchor: 'middle', font: MATH });
  path(g, `M${x0 + w} ${y0 + h - 8}V${y0 + h + 8}`, { stroke: COL.dim, 'stroke-width': 3 });
  show(g, t0);
  const curve = (f, c, t1, { dash, label, lw = 5 } = {}) => {
    const pts = Array.from({ length: 41 }, (_, i) => [X(i / 40), Y(f(i / 40))]);
    const at = { stroke: c, 'stroke-width': lw }; if (dash) at['stroke-dasharray'] = dash;
    const e = path(p, pts.map(([a, b], i) => `${i ? 'L' : 'M'}${a.toFixed(1)} ${b.toFixed(1)}`).join(''), at, dash ? { o: 0 } : { d: 0 });
    dash ? show(e, t1, .8) : draw(e, t1, 1.2);
    if (label) mline(p, label, X(1) + 16, Y(f(1)) + 10, t1 + .8, c, 30, 'start');
    return e;
  };
  return { X, Y, curve };
};
