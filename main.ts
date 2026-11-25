import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const text = "One star: your soup made my third stomach applaud, so my crew mutinied against nutrient paste.";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, text);
