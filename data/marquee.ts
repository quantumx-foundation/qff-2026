/**
 * Background digital elements.
 *
 * style.md section 23: technical strings and quantum notation at low opacity,
 * used as atmosphere rather than content. Highlighted keywords are the only
 * legible fragments, matching the reference tickers.
 */

const GLYPHS = "!#%&*+-/<>=?@[]{}|~^_:;.,0123456789ΣΔΩΨΦΛΞ±÷≈∞≡⟩⟨";

/** Deterministic pseudo-random noise so server and client render identically. */
function noise(length: number, seed: number): string {
  let state = seed;
  let out = "";
  for (let i = 0; i < length; i += 1) {
    state = (state * 1103515245 + 12345) % 2147483648;
    out += GLYPHS[state % GLYPHS.length];
    if (state % 7 === 0) out += " ";
  }
  return out;
}

export type MarqueeToken =
  | { kind: "noise"; text: string }
  | { kind: "keyword"; text: string; tone: "purple" | "green" | "blue" };

function build(
  keywords: Array<{ text: string; tone: "purple" | "green" | "blue" }>,
  seed: number,
): MarqueeToken[] {
  const tokens: MarqueeToken[] = [];
  keywords.forEach((keyword, i) => {
    tokens.push({ kind: "noise", text: noise(26, seed + i * 977) });
    tokens.push({ kind: "keyword", ...keyword });
  });
  tokens.push({ kind: "noise", text: noise(26, seed + 7919) });
  return tokens;
}

export const marqueeTop: MarqueeToken[] = build(
  [
    { text: "QFF//2026", tone: "purple" },
    { text: "QUBIT::01", tone: "green" },
    { text: "SUPERPOSITION", tone: "purple" },
    { text: "QUANTUM_FIELD", tone: "blue" },
  ],
  20260101,
);

export const marqueeMid: MarqueeToken[] = build(
  [
    { text: "ENTANGLE", tone: "purple" },
    { text: "DECOHERE", tone: "blue" },
    { text: "00 11 01 10", tone: "green" },
    { text: "QUANTUMX", tone: "purple" },
  ],
  73310219,
);
