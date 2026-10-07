"""Contact sheets of the final frame per beat: uv run --with pillow python tools/<book>/sheet.py ch02"""
import sys, glob
from PIL import Image
ch = sys.argv[1]
fs = [f for f in sorted(glob.glob(f'/tmp/claude-0/shots/{ch}_*_b.png')) if 'intro' not in f and 'finish' not in f]
for n in range(0, len(fs), 4):
    sh = Image.new('RGB', (1600, 960))
    for j, f in enumerate(fs[n:n+4]): sh.paste(Image.open(f).resize((800, 480)), ((j % 2) * 800, (j // 2) * 480))
    sh.save(f'/tmp/claude-0/shots/{ch}_sheet{n//4}.png')
print(len(fs), 'frames')
