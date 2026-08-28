import type { Speaker } from "@/types/event";

/**
 * Speakers.
 *
 * project.md section 15 forbids inventing speaker names or affiliations: only
 * approved people are named, and the rail closes on an open CTA card rather
 * than on invented or numbered holding slots. Cards share one 900x1200 frame so
 * the rail stays aligned whatever the source photograph's aspect ratio is.
 */
const FRAME = { width: 900, height: 1200 } as const;

export const speakers: Speaker[] = [
  {
    id: "ajmal-ibn-mohammed-althaf",
    name: "Ajmal Ibn Mohammed Althaf",
    role: "Founder, CEO & Scientific Lead",
    organisation: null,
    topic: null,
    href: null,
    media: {
      src: "/images/speakers/ajmal.webp",
      alt: "Ajmal Ibn Mohammed Althaf speaking on stage",
      placeholderLabel: "SPEAKER 01",
      ...FRAME,
    },
    treatment: null,
    confirmed: true,
  },
  {
    id: "muhammed-ameen",
    name: "Muhammed Ameen Sulaiman",
    role: "Director",
    organisation: "QuantumX Foundation",
    topic: null,
    href: null,
    media: {
      src: "/images/speakers/ameen.webp",
      alt: "Portrait of Muhammed Ameen Sulaiman",
      placeholderLabel: "SPEAKER 02",
      ...FRAME,
    },
    treatment: "mono",
    confirmed: true,
  },
  {
    id: "shreyansu-panda",
    name: "Shreyansu Panda",
    role: "Research Engineer",
    organisation: "QuantumX Foundation",
    topic: null,
    href: null,
    media: {
      src: "/images/speakers/shreyansu-panda.webp",
      alt: "Portrait of Shreyansu Panda",
      placeholderLabel: "SPEAKER 03",
      ...FRAME,
    },
    treatment: null,
    confirmed: true,
  },
  {
    id: "sampark-bhol",
    name: "Sampark Bhol",
    role: "Research Engineer",
    organisation: "QuantumX Foundation",
    topic: null,
    href: null,
    media: {
      src: "/images/speakers/sampark-bhol.webp",
      alt: "Portrait of Sampark Bhol",
      placeholderLabel: "SPEAKER 04",
      ...FRAME,
    },
    treatment: "green",
    confirmed: true,
  },
];

export const speakersIntro = {
  label: "SPEAKERS",
  heading: ["The speakers"],
  cta: { label: "Apply to speak", href: "speakerApplication" as const },
  /** Copy on the closing card of the rail. */
  more: "More speakers to be announced soon",
};
