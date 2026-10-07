#!/bin/bash
# usage: chk.sh chNN [extra shot args]  — wait for narration timings, then capture review sheets
cd /home/user/Simon; CH=$1; shift
for i in $(seq 1 120); do [ -f site/cfa-l1-derivs-alts/$CH/audio/en/timings.js ] && break; sleep 5; done
(curl -s -o /dev/null localhost:8765/ || (python3 -m http.server 8765 -d site >/dev/null 2>&1 &)); sleep 1
rm -rf /tmp/claude-0/s_$CH
uv run --with playwright==1.56.0 --with pillow .claude/skills/papermorph/scripts/shot.py $CH --moments mid "$@" --url http://localhost:8765/cfa-l1-derivs-alts/ --out /tmp/claude-0/s_$CH 2>&1 | tail -2
ls /tmp/claude-0/s_$CH | grep sheet
