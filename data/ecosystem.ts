import type { EcosystemEvent } from "@/types/event";

/**
 * Ecosystem / side events carousel.
 *
 * Hidden until announced events exist: an empty list keeps the section off
 * the page (see EventCarousel). Restore placeholder cards from git when the
 * rail should show again.
 */
export const ecosystemEvents: EcosystemEvent[] = [];

export const ecosystemIntro = {
  heading: ["Explore events across", "the QFF26 ecosystem"],
  cta: { label: "See community events", href: "communityEvents" as const },
};
