"""Print a chapter's source text minus chrome: python3 src.py chNN [skip_chars] [max_chars]"""
import re, sys
t = open(f"books/cfa-l1-derivs-alts/pages/{sys.argv[1]}/text.md").read()
t = re.sub(r"© CFA Institute\. For candidate use only\. Not for distribution\.", "", t)
t = re.sub(r"## page \d+\n", "", t)
t = re.sub(r"Learning Module \d+\s*\n[^\n]*\n\d+\n", "", t)
i = t.find("LEARNING MODULE SELF-ASSESSMENT"); j = t.find("\n", t.find("1.\t", i)) if i > 0 else -1
# drop self-assessment block (up to the first section heading after it)
m = re.search(r"\n[A-Z][A-Z ,\-–:()&']{5,}\n", t[i:]) if i > 0 else None
if m: t = t[:i] + t[i + m.start():]
k = t.find("PRACTICE PROBLEMS")
if k > 0: t = t[:k]
# drop worked question sets
t = re.sub(r"\n{2,}", "\n", t)
a = int(sys.argv[2]) if len(sys.argv) > 2 else 0; b = int(sys.argv[3]) if len(sys.argv) > 3 else 30000
print(t[a:a + b]); print("\n[total chars]", len(t))
