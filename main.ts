// World News — Wednesday, 25 November 2026
//
// make.fun news-image-20261125 entry. The artwork is a pre-rendered
// 1024x1024 PNG (about 101 KiB) that sums up six of the day's biggest
// world stories: Huang apologises to Nvidia staff, NATO sends AWACS
// to Poland, a Houthi strike hits a Riyadh tower, a DR Congo Cessna
// 208 goes missing with rebels claiming a shoot-down, Trump readies
// new tariffs, and a 5.6-magnitude quake shakes eastern Nepal.
//
// This program does exactly one thing: it copies the bundled entry.png
// sitting next to this file into $MAKEFUN_OUTPUT_DIR/entry.png
// (default /output). The copy is byte-for-byte, so every run produces
// an identical file — the output is fully deterministic.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true }); // create the output dir if missing (incl. nested paths)
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
console.log("entry.png written to", join(outDir, "entry.png"));
