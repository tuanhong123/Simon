#!/bin/bash
# renders each chapter's MP4 once /tmp/claude-0/ready_chNN exists; logs to /tmp/claude-0/vq.log
cd /home/user/Simon
for n in $(seq -w 2 17); do
  CH=ch$n
  until [ -f /tmp/claude-0/ready_$CH ]; do sleep 20; done
  [ -f video/cfa-l1-derivs-alts-$CH.mp4 ] && continue
  echo "START $CH $(date +%T)" >> /tmp/claude-0/vq.log
  uv run --with playwright==1.56.0 python tools/cfa-l1-derivs-alts/make_video.py $CH >> /tmp/claude-0/vq_$CH.log 2>&1
  echo "END $CH $(date +%T) $(tail -1 /tmp/claude-0/vq_$CH.log)" >> /tmp/claude-0/vq.log
done
