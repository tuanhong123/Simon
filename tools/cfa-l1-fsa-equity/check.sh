#!/bin/bash
# usage: check.sh chNN  -> waits for narration audio, renders frames, builds contact sheets
cd /home/user/Simon; CH=$1
until [ -f site/cfa-l1-fsa-equity/$CH/audio/en/timings.js ]; do sleep 3; done
rm -f /tmp/claude-0/shots/${CH}_*
pgrep -f "http.server 8765" >/dev/null || (nohup python3 -m http.server 8765 -d site >/dev/null 2>&1 &)
uv run --with playwright==1.56.0 python tools/cfa-l1-fsa-equity/shots.py $CH 2>&1 | grep errors
uv run --with pillow python tools/cfa-l1-fsa-equity/sheet.py $CH 2>&1 | grep frames
