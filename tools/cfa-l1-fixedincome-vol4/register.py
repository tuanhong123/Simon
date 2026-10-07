"""Register a finished chapter: python3 tools/<book>/register.py N "Title" minutes
Adds it to UNITS in the cover, sets the previous chapter's CHAPTER.next, updates chapters.md."""
import re, sys
from pathlib import Path
R = Path(__file__).resolve().parents[2]; ID = 'cfa-l1-fixedincome-vol4'
n, title, mins = int(sys.argv[1]), sys.argv[2], int(sys.argv[3])
UNITS = [('Bond Features and Markets', 1, 5), ('Valuation, Yields and Curves', 6, 9), ('Interest Rate Risk', 10, 13), ('Credit and Securitization', 14, 19)]
idx = R / f'site/{ID}/index.html'; h = idx.read_text()
m = re.search(r'const UNITS = \[(.*?)\n\];', h, re.S)
have = {}
for um in re.finditer(r"\['([^']+)', \[(.*?)\]\],?", m.group(1)):
    have[um.group(1)] = re.findall(r"\['((?:[^'\\]|\\.)*)', (\d+)\]", um.group(2))
unit = next(u for u, a, b in UNITS if a <= n <= b)
lst = have.setdefault(unit, [])
pos = n - next(a for u, a, b in UNITS if u == unit)
lst = [x for x in lst]; t = title.replace("'", "\\'")
if pos < len(lst): lst[pos] = (t, str(mins))
else: lst.append((t, str(mins)))
have[unit] = lst
body = ''.join(f"\n  ['{u}', [{', '.join(f'[\'{a}\', {b}]' for a, b in have[u])}]]," for u, _, _ in UNITS if u in have)
h = h[:m.start()] + 'const UNITS = [   // [unit title, [[chapter title, minutes], ...]]; chapters are numbered in order.' + body + '\n];' + h[m.end():]
idx.write_text(h)
if n > 1:
    pc = R / f'site/{ID}/ch{n-1:02d}/index.html'; s = pc.read_text()
    if 'next:' not in s.split('boot()')[0].split('const CHAPTER')[1].split('\n')[0]:
        s = re.sub(r"(const CHAPTER = \{[^}]*?)( \};)", rf"\1, next: '../ch{n:02d}/'\2", s, count=1); pc.write_text(s)
cm = R / f'books/{ID}/chapters.md'; L = cm.read_text().split('\n')
for i, l in enumerate(L):
    if l.startswith(f'{n} | '):
        c = l.split(' | '); c[3] = str(mins); c[4] = 'ready'; L[i] = ' | '.join(c)
cm.write_text('\n'.join(L))
print('registered', n)
