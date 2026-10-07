import sys, glob
from PIL import Image
d, pat, out = sys.argv[1], sys.argv[2], sys.argv[3]
fs = sorted(glob.glob(f"{d}/{pat}")); cols = 2
ims = [Image.open(f).resize((800, 450)) for f in fs]; rows = (len(ims) + cols - 1) // cols
S = Image.new("RGB", (800 * cols, 450 * rows))
for i, im in enumerate(ims): S.paste(im, ((i % cols) * 800, (i // cols) * 450))
S.save(out); print(len(fs), out)
