#!/usr/bin/env python3
"""Split a Stockfish .wasm into 20 MB parts for GitHub.
Usage: python3 split.py <file.wasm> <18|19>
Writes engines/stockfish-<ver>-part-0.wasm, -part-1.wasm ... and prints the part count."""
import sys,os
src,ver=sys.argv[1],sys.argv[2];P=20_000_000;os.makedirs('engines',exist_ok=True)
d=open(src,'rb').read();n=(len(d)+P-1)//P
for i in range(n):open(f'engines/stockfish-{ver}-part-{i}.wasm','wb').write(d[i*P:(i+1)*P])
print(f'stockfish-{ver}: {n} parts written (the engine .js must start with: var enginePartsCount={n};)')
