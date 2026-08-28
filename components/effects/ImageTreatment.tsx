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
  purple: "linear-gradient(148deg, #4b2f78 0%, #2a1747 46%, #170c27 100%)",
  green: "linear-gradient(148deg, #1d5a3a 0%, #0e2e1e 46%, #04140c 100%)",
  blue: "linear-gradient(148deg, #26497f 0%, #142a4c 46%, #08111f 100%)",
  mono: "linear-gradient(148deg, #3a3a3a 0%, #1d1d1d 46%, #0b0b0b 100%)",
};

export const PLACEHOLDER_EDGE: Record<Treatment, string> = {
  purple: "rgba(161,106,243,0.34)",
  green: "rgba(112,238,157,0.28)",
  blue: "rgba(74,128,216,0.30)",
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
};

export function ImageTreatment({
  media,
  treatment = "purple",
  className,
  imageClassName,
  sizes = "100vw",
  priority = false,
  fill = true,
  showPlaceholderLabel = true,
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
          `duotone-${treatment}`,
          imageClassName,
        )}
      />
    </div>
  );
}
