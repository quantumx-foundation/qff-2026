import Image from "next/image";
import { cn } from "@/lib/utils";
import type { MediaRef, Treatment } from "@/types/event";

/**
 * Every photograph on the page goes through this component so the duotone,
 * grain and contrast treatment stay identical across sections.
 *
 * When `media.src` is null a marked placeholder panel is drawn at the correct
 * aspect ratio, so layouts are final-size before real imagery is supplied.
 * Dropping a file path into the data layer is the only change needed later.
 */

/**
 * Placeholder panels carry the same tonal range a duotone photograph would, so
 * section composition and contrast read correctly before real imagery lands.
 */
export const PLACEHOLDER_TONE: Record<Treatment, string> = {
  pink: "linear-gradient(148deg, #8d3f68 0%, #4b2447 46%, #22112f 100%)",
  indigo: "linear-gradient(148deg, #3f45ad 0%, #2b2570 46%, #180f38 100%)",
  plum: "linear-gradient(148deg, #4d2c8f 0%, #30195b 46%, #1a0e33 100%)",
  mono: "linear-gradient(148deg, #3a3a3a 0%, #1d1d1d 46%, #0b0b0b 100%)",
};

export const PLACEHOLDER_EDGE: Record<Treatment, string> = {
  pink: "rgba(243,126,181,0.34)",
  indigo: "rgba(80,87,214,0.34)",
  plum: "rgba(215,228,255,0.24)",
  mono: "rgba(255,255,255,0.16)",
};

type Props = {
  media: MediaRef | null;
  treatment?: Treatment;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Fills the parent instead of laying out from intrinsic dimensions. */
  fill?: boolean;
  /** Hide the placeholder label and size (e.g. when the panel is a design surface). */
  showPlaceholderLabel?: boolean;
  /**
   * Skip the duotone. For supplied key art that is already designed — an event
   * banner carrying the IBM Quantum and Qiskit marks must keep its own colour,
   * since greyscaling a partner's logo misrepresents their brand.
   */
  untreated?: boolean;
};

export function ImageTreatment({
  media,
  treatment = "plum",
  className,
  imageClassName,
  sizes = "100vw",
  priority = false,
  fill = true,
  showPlaceholderLabel = true,
  untreated = false,
}: Props) {
  if (!media) return null;

  if (!media.src) {
    return (
      <div
        className={cn("relative overflow-hidden noise", className)}
        style={{
          backgroundImage: PLACEHOLDER_TONE[treatment],
          ...(fill ? {} : { aspectRatio: `${media.width} / ${media.height}` }),
        }}
        role="img"
        aria-label={`Placeholder: ${media.placeholderLabel}`}
      >
        {/* Diagonal rule pattern reads as an intentional holding panel. */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(135deg, ${PLACEHOLDER_EDGE[treatment]} 0 1px, transparent 1px 14px)`,
            opacity: 0.5,
          }}
        />
        {showPlaceholderLabel ? (
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 flex flex-col items-end gap-1 p-3 text-right"
          >
            <span
              className="label-mono-sm"
              style={{ color: PLACEHOLDER_EDGE[treatment].replace(/[\d.]+\)$/, "0.9)") }}
            >
              {media.placeholderLabel}
            </span>
            <span className="label-mono-sm text-white/30">
              {media.width}&times;{media.height}
            </span>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      // Reserve the frame before the file loads, as the placeholder branch does.
      style={fill ? undefined : { aspectRatio: `${media.width} / ${media.height}` }}
    >
      <Image
        src={media.src}
        alt={media.alt}
        {...(fill
          ? { fill: true }
          : { width: media.width, height: media.height })}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={cn(
          "h-full w-full object-cover",
          !untreated && `duotone-${treatment}`,
          imageClassName,
        )}
      />
    </div>
  );
}
