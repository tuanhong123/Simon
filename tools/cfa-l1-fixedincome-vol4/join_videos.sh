#!/bin/sh
# Join all chapter videos into one: video/cfa-l1-fixedincome-vol4-full.mp4 (re-encoded so mixed frame rates concat cleanly)
ID=cfa-l1-fixedincome-vol4; cd "$(dirname "$0")/../../video" || exit 1
ls $ID-ch[0-9][0-9].mp4 | sort > /tmp/claude-0/join_list.txt
args=""; filt=""; i=0
for f in $(cat /tmp/claude-0/join_list.txt); do args="$args -i $f"; filt="$filt[$i:v]fps=24,setsar=1[v$i];[$i:a]aresample=44100[a$i];"; i=$((i+1)); done
cat_in=""; j=0; while [ $j -lt $i ]; do cat_in="$cat_in[v$j][a$j]"; j=$((j+1)); done
ffmpeg -y -loglevel error $args -filter_complex "${filt}${cat_in}concat=n=$i:v=1:a=1[v][a]" -map "[v]" -map "[a]" -c:v libx264 -preset medium -crf 21 -c:a aac -b:a 128k $ID-full.mp4 && echo "WROTE $ID-full.mp4 from $i chapters"
