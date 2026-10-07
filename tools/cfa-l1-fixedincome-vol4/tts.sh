#!/bin/sh
# usage: tools/<book>/tts.sh chNN  -> site/<book>/chNN/audio/en
ID=cfa-l1-fixedincome-vol4; CH=$1; cd "$(dirname "$0")/../.."
mkdir -p site/$ID/$CH/audio/en
uv run --with kokoro-onnx --with soundfile --with numpy tools/$ID/tts_kokoro.py content/$ID/$CH/narration.en.json site/$ID/$CH/audio/en /tmp/claude-0/-home-user-Simon/092ee40c-1b76-5d4d-bec0-7a1416dcb4b4/scratchpad/kokoro am_michael 0.97
