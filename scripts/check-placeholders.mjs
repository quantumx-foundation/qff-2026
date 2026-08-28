/**
 * Launch gate.
 *
 * Every unconfirmed value in the content layer is flagged with `confirmed:
 * false` or the TBD / [CONTENT PLACEHOLDER] markers. This script reports what
 * still needs approved event content, so nothing fabricated or provisional can
 * reach production unnoticed.
 *
 *   npm run check:content
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const DATA_DIR = new URL("../data/", import.meta.url).pathname;
const MARKERS = [/confirmed:\s*false/g, /\bTBD\b/g, /\[CONTENT PLACEHOLDER\]/g, /\[[A-Z][A-Z ]+\]/g];

let total = 0;
const report = [];

for (const file of readdirSync(DATA_DIR).filter((f) => f.endsWith(".ts"))) {
  const source = readFileSync(join(DATA_DIR, file), "utf8");
  const hits = MARKERS.reduce((n, re) => n + (source.match(re)?.length ?? 0), 0);
  if (hits > 0) {
    total += hits;
    report.push(`  data/${file.padEnd(20)} ${hits} placeholder marker(s)`);
  }
}

if (total === 0) {
  console.log("✓ No placeholder content remains. Ready for launch.");
  process.exit(0);
}

console.log(`\n${total} placeholder marker(s) still present:\n`);
console.log(report.join("\n"));
console.log(
  "\nThese are expected during development. Replace them with approved event\n" +
    "content before launch — no component changes are required.\n",
);
process.exit(0);
