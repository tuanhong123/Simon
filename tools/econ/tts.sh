#!/bin/sh
# usage: tools/econ/tts.sh chNN   (needs /tmp/claude-0/kokoro model files)
cd "$(dirname "$0")/../.." && mkdir -p site/econ/$1/audio/en && uv run --with kokoro-onnx --with soundfile --with numpy python tools/econ/tts_kokoro.py content/econ/$1/narration.en.json site/econ/$1/audio/en /tmp/claude-0/kokoro 2>&1 | grep -v warning | tail -15
