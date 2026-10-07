"""Contact-sheet frames: uv run --with playwright python tools/<book>/shots.py ch01 (server on :8765)"""
import asyncio, sys
from playwright.async_api import async_playwright
CH = sys.argv[1]; B = "cfa-l1-fsa-equity"
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(); pg = await b.new_page(viewport={"width": 1600, "height": 960})
        errs = []; pg.on("pageerror", lambda e: errs.append(str(e)))
        await pg.goto(f"http://localhost:8765/{B}/{CH}/index.html?beat=0&t=0"); await pg.wait_for_timeout(800)
        ids = await pg.evaluate("BEATS.map(b=>b.id)")
        for i, id_ in enumerate(ids):
            await pg.evaluate(f"seek({i}, false)"); await pg.wait_for_timeout(500)
            end = await pg.evaluate("P.end")
            for tag, t in (("a", end * .5), ("b", end - .05)):
                await pg.evaluate(f"P.t={t}; evalTo(P.t)"); await pg.wait_for_timeout(150)
                await pg.screenshot(path=f"/tmp/claude-0/shots/{CH}_{i:02d}_{id_}_{tag}.png")
        print("errors:", errs); await b.close()
asyncio.run(main())
