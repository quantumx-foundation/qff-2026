import Image from "next/image";
import { cn } from "@/lib/utils";
import type { MediaRef, Treatment } from "@/types/event";

/**
 * Signature image treatment for the hero: a duotoned photograph carrying
 * occasional horizontal slice displacement and a faint chromatic split.
 *
 * The duotone filter is applied once, at the wrapper, so the whole stack costs
 * a single filter pass rather than one per layer. The slices are copies of the
 * same `src`, so the browser makes one request and one decode; they sit at
 * opacity 0 until the pulse fires, which keeps the photograph clean and the
 * glitch an accent rather than a permanent filter.
 *
 * Falls back to a still duotone when the reader prefers reduced motion, and to
 * the marked placeholder panel when no file is set.
 */

type Slice = { top: number; bottom: number; shift: string; duration: number; delay: number };

/** Irregular band positions; a regular ladder reads as a pattern, not a fault. */
const SLICES: Slice[] = [
  { top: 18, bottom: 74, shift: "-2.2%", duration: 9, delay: 0 },
  { top: 41, bottom: 52, shift: "3.1%", duration: 11, delay: 1.7 },
  { top: 63, bottom: 30, shift: "-1.4%", duration: 13, delay: 3.4 },
  { top: 78, bottom: 17, shift: "2.4%", duration: 10, delay: 5.1 },
];

export function GlitchImage({
  media,
  treatment = "purple",
  className,
  sizes = "100vw",
  priority = false,
}: {
  media: MediaRef;
  treatment?: Treatment;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (!media.src) return null;

  const layer = (extra?: string) => (
    <Image
      src={media.src as string}
      alt=""
      fill
      sizes={sizes}
      priority={priority}
      aria-hidden="true"
      className={cn("object-cover", extra)}
    />
  );

  return (
    <div className={cn("relative overflow-hidden", `duotone-${treatment}`, className)}>
      <Image
        src={media.src}
        alt={media.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />

      {SLICES.map((slice, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="glitch-slice"
          style={
            {
              clipPath: `inset(${slice.top}% 0 ${slice.bottom}% 0)`,
              "--slice-shift": slice.shift,
              "--slice-duration": `${slice.duration}s`,
              "--slice-delay": `${slice.delay}s`,
            } as React.CSSProperties
          }
        >
          {layer()}
        </div>
      ))}

      {/* Chromatic split: one offset copy tinted toward the accent. */}
      <div
        aria-hidden="true"
        className="glitch-split"
        style={
          {
            clipPath: "inset(30% 0 44% 0)",
            "--slice-shift": "1.1%",
            "--slice-duration": "9s",
            "--slice-delay": "0.06s",
          } as React.CSSProperties
        }
      >
        {layer("opacity-45")}
      </div>
    </div>
  );
}
