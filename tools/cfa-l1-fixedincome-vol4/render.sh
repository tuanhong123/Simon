#!/bin/sh
# usage: tools/<book>/render.sh chNN  (serialized video render; needs the server on :8765)
ID=cfa-l1-fixedincome-vol4; cd "$(dirname "$0")/../.."
flock /tmp/claude-0/render.lock uv run --with playwright==1.56.0 python tools/$ID/make_video.py "$1" > /tmp/claude-0/vid_$1.log 2>&1
