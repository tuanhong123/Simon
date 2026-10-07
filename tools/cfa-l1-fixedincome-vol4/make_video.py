"""Render chapter 1 to MP4: deterministic frame capture (engine seek + evalTo) + beat audio.
Lesson beats: every frame at FPS. Quick checks: question frame, then the answered frame (static).
Practice and the finish card are interactive-only and are left out.

uv run --with playwright==1.56.0 python tools/<book>/make_video.py  (server on :8765)
"""
import asyncio, json, shutil, subprocess, sys
from pathlib import Path
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parents[2]
CH = sys.argv[1] if len(sys.argv) > 1 else "ch01"
SITE = ROOT / f"site/cfa-l1-fixedincome-vol4/{CH}"
URL = f"http://localhost:8765/cfa-l1-fixedincome-vol4/{CH}/index.html?beat=0&t=0"
WORK = Path(f"/tmp/claude-0/vid_{CH}"); OUT = ROOT / f"video/cfa-l1-fixedincome-vol4-{CH}.mp4"
FPS = 24
ANS = {}   # quiz beats are left out of the video

def ff(*a):
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", *a], check=True)

VF = "scale=1920:1080:flags=lanczos,format=yuv420p"
ENC = ["-c:v", "libx264", "-preset", "medium", "-crf", "20", "-c:a", "aac", "-b:a", "128k", "-ar", "44100", "-ac", "2"]

async def main():
    shutil.rmtree(WORK, ignore_errors=True); WORK.mkdir(parents=True)
    clips = []
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={"width": 1600, "height": 960})
        await pg.goto(URL); await pg.wait_for_timeout(800)
        await pg.add_style_tag(content=".caption,#bar,.paused-mark,.bar{display:none!important}")
        ids = await pg.evaluate("BEATS.map(b=>b.id)")
        asks = await pg.evaluate("BEATS.map(b=>!!b.ask)")
        IDS = [x for x, a in zip(ids, asks) if not a]
        for id_ in IDS:
            i = ids.index(id_); mp3 = SITE / f"audio/en/{id_}.mp3"
            await pg.evaluate(f"seek({i}, false)"); await pg.wait_for_timeout(900)
            box = await pg.locator("#stage").bounding_box()
            clip = dict(x=box["x"], y=box["y"], width=box["width"], height=box["height"])
            shot = lambda path: pg.screenshot(path=str(path), type="jpeg", quality=92, clip=clip)
            out = WORK / f"{id_}.mp4"
            if id_ in ANS:
                dur = float(subprocess.check_output(["ffprobe","-v","error","-show_entries","format=duration","-of","csv=p=0",str(mp3)]))
                await shot(WORK / f"{id_}_a.jpg")
                inp = pg.locator("input").first
                await inp.fill(ANS[id_]); await inp.press("Enter"); await pg.wait_for_timeout(900)
                await shot(WORK / f"{id_}_b.jpg")
                ta, tb = dur + 3.5, 4.5
                ff("-loop","1","-framerate",str(FPS),"-t",f"{ta}","-i",str(WORK/f"{id_}_a.jpg"),"-loop","1","-framerate",str(FPS),"-t",f"{tb}","-i",str(WORK/f"{id_}_b.jpg"),
                   "-i",str(mp3),"-filter_complex",f"[0:v][1:v]concat=n=2:v=1:a=0,{VF}[v];[2:a]apad=whole_dur={ta+tb}[a]","-map","[v]","-map","[a]","-t",f"{ta+tb}",*ENC,str(out))
            else:
                end = await pg.evaluate("P.end")
                n = int(end * FPS) + 1
                fd = WORK / f"f_{id_}"; fd.mkdir()
                for k in range(n):
                    await pg.evaluate(f"P.t={k / FPS}; evalTo(P.t)")
                    await pg.screenshot(path=str(fd / f"{k:05d}.jpg"), type="jpeg", quality=90, clip=clip)
                    if k % 120 == 0: print(id_, k, n, flush=True)
                ff("-framerate",str(FPS),"-i",str(fd/"%05d.jpg"),"-i",str(mp3),"-vf",VF,"-af",f"apad=whole_dur={end}","-t",f"{end}",*ENC,str(out))
                shutil.rmtree(fd)
            clips.append(out); print("done", id_, flush=True)
        await b.close()
    lst = WORK / "list.txt"; lst.write_text("".join(f"file '{c}'\n" for c in clips))
    OUT.parent.mkdir(exist_ok=True)
    ff("-f","concat","-safe","0","-i",str(lst),"-c","copy",str(OUT))
    print("WROTE", OUT, flush=True)
asyncio.run(main())
