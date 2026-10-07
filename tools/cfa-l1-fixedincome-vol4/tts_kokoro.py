"""Offline narration with Kokoro (Edge TTS is blocked in this environment).
Same outputs as the Skill's tts.py: <beat>.mp3 + timings.js {dur, marks, cues}.
Each beat is split at [[marks]]; segments are synthesized separately and joined,
so a mark's time is the exact start of its segment.

uv run --with kokoro-onnx --with soundfile --with numpy tools/<book>/tts_kokoro.py narration.json out_dir MODEL_DIR
"""
import json, re, subprocess, sys
from pathlib import Path
import numpy as np, soundfile as sf
from kokoro_onnx import Kokoro

MARK = re.compile(r"\[\[(\w+)\]\]")
src, out, mdir = Path(sys.argv[1]), Path(sys.argv[2]), Path(sys.argv[3])
voice = sys.argv[4] if len(sys.argv) > 4 else "am_michael"
speed = float(sys.argv[5]) if len(sys.argv) > 5 else 0.97
out.mkdir(parents=True, exist_ok=True)
k = Kokoro(str(mdir / "kokoro-v1.0.onnx"), str(mdir / "voices-v1.0.bin"))
spec = json.loads(src.read_text())
live = {}
for beat, raw in spec["beats"].items():
    parts = MARK.split(raw)           # text, name, text, name, ...
    segs, names = [parts[0]], []
    for i in range(1, len(parts), 2):
        names.append(parts[i]); segs.append(parts[i + 1])
    audio, t, marks, cues, sr = [], 0.0, {}, [], 24000
    for i, seg in enumerate(segs):
        seg = seg.strip()
        if i: marks[names[i - 1]] = round(t, 3)
        if not seg: continue
        # one cue per sentence inside the segment, timed by character share
        samples, sr = k.create(seg, voice=voice, speed=speed, lang="en-us")
        dur = len(samples) / sr
        sents = [s for s in re.split(r"(?<=[.?!])\s+", seg) if s]
        total = sum(len(s) for s in sents) or 1
        c = t
        for s in sents:
            cues.append([round(c, 3), s]); c += dur * len(s) / total
        audio.append(samples); t += dur
        audio.append(np.zeros(int(.12 * sr), dtype=np.float32)); t += .12
    wav = out / f".{beat}.wav"
    sf.write(wav, np.concatenate(audio), sr)
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", str(wav), "-codec:a", "libmp3lame", "-q:a", "4", str(out / f"{beat}.mp3")], check=True)
    wav.unlink()
    d = float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(out / f"{beat}.mp3")], capture_output=True, text=True, check=True).stdout)
    live[beat] = {"dur": round(d, 3), "marks": marks, "cues": cues}
    print(beat, round(d, 1), flush=True)
(out / "timings.js").write_text("window.TIMINGS = " + json.dumps(live, indent=1) + ";\n")
