"""Print a chapter's lesson text without boilerplate, practice problems and solutions: python3 lesson_text.py chNN"""
import re, sys
from pathlib import Path
t = Path(__file__).resolve().parents[2] / 'books/cfa-l1-fixedincome-vol4/pages' / sys.argv[1] / 'text.md'
s = t.read_text()
s = re.sub(r'© CFA Institute\. For candidate use only\. Not for distribution\.\n?', '', s)
s = re.sub(r'^Learning Module \d+\s*$|^\d+\s*$', '', s, flags=re.M)
cut = re.search(r'\nPRACTICE PROBLEMS\n', s)
if cut: s = s[:cut.start()]
s = re.sub(r'(?<=[a-z,])\n(?=[a-z(])', ' ', s)   # join wrapped lines
s = re.sub(r'\n{3,}', '\n\n', s)
print(s)
