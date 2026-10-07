"""Rebuild UNITS on the cover and each chapter's `next` link from books/<book>/chapters.md (rows marked ready)."""
import re
from pathlib import Path
R = Path(__file__).resolve().parents[2]; ID = 'cfa-l1-fixedincome-vol4'
rows = []
for l in (R / f'books/{ID}/chapters.md').read_text().split('\n')[1:]:
    c = [x.strip() for x in l.split('|')]
    if len(c) >= 5 and c[0].isdigit() and c[4] == 'ready': rows.append((int(c[0]), c[1], c[2], c[3]))
units = {}
for n, t, u, m in rows: units.setdefault(u, []).append((t, m))
body = ''.join("\n  ['%s', [%s]]," % (u, ', '.join("['%s', %s]" % (t.replace("'", "\\'"), m) for t, m in ch)) for u, ch in units.items())
idx = R / f'site/{ID}/index.html'; h = idx.read_text()
h = re.sub(r'const UNITS = \[.*?\n\];', 'const UNITS = [   // [unit title, [[chapter title, minutes], ...]]; chapters are numbered in order.' + body.replace('\\', '\\\\') + '\n];', h, count=1, flags=re.S)
idx.write_text(h)
nums = [r[0] for r in rows]
for n in nums:
    pf = R / f'site/{ID}/ch{n:02d}/index.html'; s = pf.read_text()
    m = re.search(r"const CHAPTER = \{[^\n]*\};", s)
    line = m.group(0)
    line = re.sub(r", next: '[^']*'", '', line)
    if n + 1 in nums: line = line[:-3] + f", next: '../ch{n+1:02d}/' }};"
    s = s.replace(m.group(0), line); pf.write_text(s)
print('units', len(rows), 'chapters')
