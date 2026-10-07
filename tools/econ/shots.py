"""Contact-sheet check: end-of-beat screenshots + console errors.  uv run --with playwright python tools/econ/shots.py ch01  (server on :8765)"""
import asyncio, sys
from pathlib import Path
from playwright.async_api import async_playwright
CH = sys.argv[1]; OUT = Path(sys.argv[2] if len(sys.argv) > 2 else "/tmp/claude-0/shots") / CH; OUT.mkdir(parents=True, exist_ok=True)
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(); pg = await b.new_page(viewport={"width": 1600, "height": 960})
        errs = []
        pg.on("pageerror", lambda e: errs.append(str(e))); pg.on("console", lambda m: m.type == "error" and errs.append(m.text))
        await pg.goto(f"http://localhost:8765/econ/{CH}/index.html?beat=0&t=0"); await pg.wait_for_timeout(800)
        ids = await pg.evaluate("BEATS.map(b=>b.id)")
        for i, id_ in enumerate(ids):
            await pg.evaluate(f"seek({i}, false)"); await pg.wait_for_timeout(500)
            end = await pg.evaluate("P.end")
            for tag, f in (("a", .45), ("b", 1.0)):
                await pg.evaluate(f"P.t={end*f}; evalTo(P.t)"); await pg.wait_for_timeout(150)
                await pg.locator("#stage").screenshot(path=str(OUT / f"{i:02d}_{id_}_{tag}.png"))
        print("ERRORS:", errs or "none")
        await b.close()
asyncio.run(main())
