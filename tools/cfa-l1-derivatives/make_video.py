"""Render a chapter to MP4: deterministic frame capture (engine seek + evalTo) + beat audio.
Every lesson beat is captured at FPS; the finish card (interactive) is left out.
This book has no question beats.

python3 -m http.server 8765 -d site &
uv run --with playwright==1.56.0 python tools/cfa-l1-derivatives/make_video.py ch01 [ch02 ...]
uv run python tools/cfa-l1-derivatives/make_video.py --join     # video/<book>-full.mp4 from the chapter files
"""
import asyncio, shutil, subprocess, sys
from pathlib import Path

BOOK = "cfa-l1-derivatives"
ROOT = Path(__file__).resolve().parents[2]
OUTDIR = ROOT / "video"
FPS = 24
VF = "scale=1920:1080:flags=lanczos,format=yuv420p"
ENC = ["-c:v", "libx264", "-preset", "medium", "-crf", "22", "-tune", "animation", "-c:a", "aac", "-b:a", "128k", "-ar", "44100", "-ac", "2"]


def ff(*a):
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", *a], check=True)


async def chapter(p, ch):
    site = ROOT / f"site/{BOOK}/{ch}"
    work = Path(f"/tmp/claude-0/vid_{BOOK}_{ch}")
    shutil.rmtree(work, ignore_errors=True); work.mkdir(parents=True)
    b = await p.chromium.launch()
    pg = await b.new_page(viewport={"width": 1600, "height": 960})
    await pg.goto(f"http://localhost:8765/{BOOK}/{ch}/index.html?beat=0&t=0"); await pg.wait_for_timeout(800)
    await pg.add_style_tag(content=".caption,#bar,.paused-mark,.bar{display:none!important}")
    beats = await pg.evaluate("BEATS.map(b=>[b.id, !!b.ask])")
    clips = []
    for i, (bid, ask) in enumerate(beats):
        if ask: continue
        mp3 = site / f"audio/en/{bid}.mp3"
        await pg.evaluate(f"seek({i}, false)"); await pg.wait_for_timeout(600)
        box = await pg.locator("#stage").bounding_box()
        clip = dict(x=box["x"], y=box["y"], width=box["width"], height=box["height"])
        end = await pg.evaluate("P.end")
        n = int(end * FPS) + 1
        fd = work / f"f_{bid}"; fd.mkdir()
        for k in range(n):
            await pg.evaluate(f"P.t={k / FPS}; evalTo(P.t)")
            await pg.screenshot(path=str(fd / f"{k:05d}.jpg"), type="jpeg", quality=90, clip=clip)
        out = work / f"{i:02d}_{bid}.mp4"
        ff("-framerate", str(FPS), "-i", str(fd / "%05d.jpg"), "-i", str(mp3), "-vf", VF, "-af", f"apad=whole_dur={end}", "-t", f"{end}", *ENC, str(out))
        shutil.rmtree(fd)
        clips.append(out); print(ch, "done", bid, round(end, 1), flush=True)
    await b.close()
    lst = work / "list.txt"; lst.write_text("".join(f"file '{c}'\n" for c in clips))
    OUTDIR.mkdir(exist_ok=True)
    dest = OUTDIR / f"{BOOK}-{ch}.mp4"
    ff("-f", "concat", "-safe", "0", "-i", str(lst), "-c", "copy", "-movflags", "+faststart", str(dest))
    shutil.rmtree(work)
    print("WROTE", dest, flush=True)


async def main(chs):
    from playwright.async_api import async_playwright
    async with async_playwright() as p:
        for ch in chs:
            await chapter(p, ch)


if __name__ == "__main__":
    if sys.argv[1:] == ["--join"]:
        parts = sorted(OUTDIR.glob(f"{BOOK}-ch[0-9][0-9].mp4"))
        lst = OUTDIR / f".{BOOK}-list.txt"; lst.write_text("".join(f"file '{c}'\n" for c in parts))
        ff("-f", "concat", "-safe", "0", "-i", str(lst), "-c", "copy", "-movflags", "+faststart", str(OUTDIR / f"{BOOK}-full.mp4"))
        lst.unlink(); print("WROTE", OUTDIR / f"{BOOK}-full.mp4")
    else:
        asyncio.run(main(sys.argv[1:]))
