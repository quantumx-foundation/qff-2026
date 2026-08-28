import { Marquee } from "./Marquee";
import type { MarqueeToken } from "@/data/marquee";
import { cn } from "@/lib/utils";

/**
 * The full-bleed technical ticker that sits between sections in the reference:
 * dim symbol noise carrying a handful of highlighted keywords.
 *
 * Atmosphere, not content, so the whole strip is hidden from assistive tech.
 */

const TONE = {
  purple: "text-qff-purple",
  green: "text-qff-green",
  blue: "text-[#6e9ee8]",
} as const;

type Props = {
  tokens: MarqueeToken[];
  duration?: number;
  reverse?: boolean;
  className?: string;
};

export function GlitchMarquee({
  tokens,
  duration = 90,
  reverse = false,
  className,
}: Props) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative w-full select-none overflow-hidden py-3", className)}
    >
      <Marquee duration={duration} reverse={reverse}>
        <span className="whitespace-pre font-mono text-[13px] leading-none tracking-[0.02em] text-white/28">
          {tokens.map((token, i) =>
            token.kind === "noise" ? (
              <span key={i}>{token.text}</span>
            ) : (
              <span key={i} className={cn("font-bold", TONE[token.tone])}>
                {token.text}
              </span>
            ),
          )}
        </span>
      </Marquee>
    </div>
  );
}
