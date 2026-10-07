#!/bin/sh
# Render every chapter to video/econ-chNN.mp4 (needs the site served on :8765), then join them.
cd "$(dirname "$0")/../.."
N=${PAR:-3}
printf '%s\n' ch01 ch02 ch03 ch04 ch05 ch06 ch07 | xargs -P "$N" -I{} sh -c 'uv run --with playwright==1.56.0 python tools/econ/make_video.py {} > /tmp/claude-0/render_{}.log 2>&1'
ls video/econ-ch0*.mp4 | sed "s/^/file '/;s/$/'/" | sed "s#file 'video/#file '$(pwd)/video/#" > /tmp/claude-0/econ_list.txt
ffmpeg -y -loglevel error -f concat -safe 0 -i /tmp/claude-0/econ_list.txt -c copy video/econ-full.mp4 && echo ALLDONE
