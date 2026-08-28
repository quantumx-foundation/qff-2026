import type { MediaRef, Treatment } from "@/types/event";

/**
 * Community image strip that runs full-bleed beneath the statistics.
 *
 * Mixed aspect ratios and vertical offsets, cycling the three treatment
 * colours, matching the reference. All slots are placeholders until QFF26
 * imagery is supplied; only the `src` values need to change.
 */
export type GallerySlot = {
  media: MediaRef;
  treatment: Treatment;
  /** Relative height of the tile, as a multiplier of the strip height. */
  scale: number;
  /** Vertical offset, as a fraction of the strip height. */
  offset: number;
};

const SPECS: Array<{ w: number; h: number; t: Treatment; scale: number; offset: number }> = [
  { w: 900, h: 1200, t: "blue", scale: 1, offset: -0.04 },
  { w: 1000, h: 1250, t: "green", scale: 1.06, offset: 0.02 },
  { w: 1100, h: 900, t: "purple", scale: 0.84, offset: 0.08 },
  { w: 900, h: 1100, t: "blue", scale: 0.95, offset: 0 },
  { w: 1200, h: 900, t: "green", scale: 0.8, offset: 0.1 },
  { w: 950, h: 1250, t: "purple", scale: 1.02, offset: 0.03 },
];

export const gallery: GallerySlot[] = SPECS.map((spec, i) => ({
  media: {
    src: null,
    alt: "",
    placeholderLabel: `COMMUNITY ${String(i + 1).padStart(2, "0")}`,
    width: spec.w,
    height: spec.h,
  },
  treatment: spec.t,
  scale: spec.scale,
  offset: spec.offset,
}));
