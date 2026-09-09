import type { HeroContent } from "@/types/event";
import { event } from "./event";

/**
 * Hero copy.
 *
 * The headline is supplied event copy, split into the lines it should break
 * on: each renders as its own block and carries its own entrance delay, so the
 * break is a design decision rather than whatever the container width gives.
 */
export const hero: HeroContent = {
  // Switched off on 9 Sep 2026 at the user's request: the headline already
  // names the event, so the eyebrow only repeated it. Restore by building the
  // string from `event.expansion` and `event.year` again.
  eyebrow: null,
  // Names the event rather than the theme: a visitor landing here should read
  // what this is in the first line, not a mood. Supplied by marketing.
  headline: ["Qiskit Fall Fest '26", "x QuantumX."],
  primaryCta: { label: "Register", href: event.urls.registration },
  secondaryCta: { label: "View program", href: event.urls.program },
  media: {
    src: "/images/hero/hero.jpg",
    alt: "Gold-plated dilution refrigerator suspended in a darkened laboratory.",
    placeholderLabel: "HERO MEDIA",
    width: 1641,
    height: 958,
  },
  confirmed: true,
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
