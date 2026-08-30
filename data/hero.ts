import type { HeroContent } from "@/types/event";
import { event } from "./event";

/**
 * Hero copy.
 *
 * The headline is the example wording carried in style.md section 6. It is
 * marked unconfirmed until approved event copy is supplied.
 */
export const hero: HeroContent = {
  eyebrow: `${event.shortName} / ${event.organisation.toUpperCase()}`,
  headline: ["The future", "of quantum", "is being built", "here."],
  primaryCta: { label: "Register", href: event.urls.registration },
  secondaryCta: { label: "View program", href: event.urls.program },
  media: {
    src: "/images/hero/hero.jpg",
    alt: "Gold-plated dilution refrigerator suspended in a darkened laboratory.",
    placeholderLabel: "HERO MEDIA",
    width: 1641,
    height: 958,
  },
  confirmed: false,
};

/** Editorial statement following the event meta strip. */
export const statement = {
  label: "THE FUTURE OF QUANTUM, IN ONE ROOM.",
  /** First fragment renders in purple, matching the reference treatment. */
  lead: `${event.shortName}`,
  body: "brings researchers, builders, industry and institutions together around the technologies moving quantum computing from laboratory to infrastructure.",
  confirmed: true,
};

/**
 * Mid-page purple interruption. Carries the oversized sliced wordmark and the
 * primary conversion path. No past-edition recap is claimed: QFF26 has no
 * confirmed prior event, so the band states the confirmed start date.
 */
export const identityBand = {
  eyebrow: `${event.shortName} / ${event.year}`,
  status: event.dateLabel,
  cta: { label: "Register", href: event.urls.registration },
  media: {
    src: null,
    alt: "",
    placeholderLabel: "FEATURE MEDIA",
    width: 2400,
    height: 1200,
  },
  confirmed: false,
};
