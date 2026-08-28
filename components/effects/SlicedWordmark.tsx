import { cn } from "@/lib/utils";

/**
 * Signature level 3 effect: an oversized wordmark sliced into horizontal bands,
 * each nudged sideways, reproducing the ghosted glitch treatment sitting behind
 * the recap media in the reference.
 *
 * Offsets are deterministic so server and client markup match, and the pulse
 * fires briefly on a long cycle rather than animating continuously.
 */

type Props = {
  text: string;
  /** Number of horizontal slices. */
  bands?: number;
  className?: string;
  textClassName?: string;
};

/** Small deterministic hash so a given word always slices the same way. */
function offsetFor(index: number, seed: number): number {
  const value = Math.sin((index + 1) * seed) * 10000;
  return value - Math.floor(value);
}

export function SlicedWordmark({
  text,
  bands = 9,
  className,
  textClassName,
}: Props) {
  const seed = text.length * 12.9898;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none relative select-none overflow-hidden",
        className,
      )}
    >
      {/* Base layer establishes the box height. */}
      <span className={cn("block whitespace-nowrap opacity-0", textClassName)}>
        {text}
      </span>

      {Array.from({ length: bands }, (_, i) => {
        const top = (i / bands) * 100;
        const bottom = 100 - ((i + 1) / bands) * 100;
        const r = offsetFor(i, seed);
        // Most bands sit still; a few carry a visible displacement.
        const slip = (r - 0.5) * (r > 0.72 || r < 0.24 ? 5 : 1.4);

        return (
          <span
            key={i}
            className="glitch-band"
            style={
              {
                clipPath: `inset(${top}% 0 ${bottom}% 0)`,
                transform: `translate3d(${slip.toFixed(2)}%, 0, 0)`,
                "--slip": `${(slip * 1.8).toFixed(2)}%`,
                "--glitch-duration": `${7 + (i % 4)}s`,
                "--glitch-delay": `${(i * 0.37).toFixed(2)}s`,
              } as React.CSSProperties
            }
          >
            <span className={cn("block whitespace-nowrap", textClassName)}>
              {text}
            </span>
          </span>
        );
      })}
    </div>
  );
}
