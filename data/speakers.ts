import type { Speaker } from "@/types/event";

/**
 * Speakers.
 *
 * project.md section 15 forbids inventing speaker names or affiliations, so
 * every card is an explicit "to be announced" slot. Replacing this array with
 * confirmed speakers requires no component change.
 */
export const speakers: Speaker[] = Array.from({ length: 6 }, (_, i) => ({
  id: `speaker-${i + 1}`,
  name: "To be announced",
  role: null,
  organisation: null,
  topic: null,
  href: null,
  media: {
    src: null,
    alt: "",
    placeholderLabel: `SPEAKER ${String(i + 1).padStart(2, "0")}`,
    width: 900,
    height: 1200,
  },
  confirmed: false,
}));

export const speakersIntro = {
  label: "SPEAKERS",
  heading: ["Speakers", "to be announced"],
  cta: { label: "Apply to speak", href: "speakerApplication" as const },
};
