import type { EcosystemEvent, Treatment } from "@/types/event";
import { TBD } from "@/types/event";

/**
 * Ecosystem / side events carousel.
 *
 * No third-party events are invented. Each card is a marked placeholder that
 * demonstrates the carousel and card composition; the treatments cycle through
 * the three reference duotones.
 */
const treatments: Treatment[] = ["purple", "green", "blue", "mono"];

export const ecosystemEvents: EcosystemEvent[] = Array.from(
  { length: 4 },
  (_, i) => ({
    id: `ecosystem-${i + 1}`,
    category: "ECOSYSTEM",
    name: "[EVENT TO BE ANNOUNCED]",
    dateLabel: TBD,
    location: TBD,
    description: null,
    href: null,
    media: {
      src: null,
      alt: "",
      placeholderLabel: `EVENT ${String(i + 1).padStart(2, "0")}`,
      width: 1000,
      height: 1250,
    },
    treatment: treatments[i % treatments.length],
    confirmed: false,
  }),
);

export const ecosystemIntro = {
  heading: ["Explore events across", "the QFF26 ecosystem"],
  cta: { label: "See community events", href: "communityEvents" as const },
};
