import type { MediaRef, Treatment } from "@/types/event";

/**
 * Community image strip that runs full-bleed beneath the statistics.
 *
 * Photography from past QuantumX and partner events. Every tile is drawn at a
 * single strip height and takes its width from its own aspect ratio, so the
 * row keeps a flat top and bottom edge while the rhythm comes from the frames
 * themselves — narrow portraits against long landscapes.
 *
 * Slots are ordered for that rhythm rather than chronology: the two portraits
 * and the widest frame are spaced apart, and the treatments cycle so no two
 * neighbours share a duotone, including across the marquee seam.
 */
export type GallerySlot = {
  media: MediaRef;
  treatment: Treatment;
};

type Spec = {
  /** File under /public/images/community. */
  file: string;
  alt: string;
  w: number;
  h: number;
  t: Treatment;
};

const SPECS: Spec[] = [
  {
    file: "1.jpg",
    alt: "Keynote on real-world readiness for post-quantum cryptography",
    w: 671,
    h: 896,
    t: "blue",
  },
  {
    file: "4.jpg",
    alt: "Speaker tracing the shrinking scale of quantum hardware on a main stage",
    w: 1024,
    h: 768,
    t: "green",
  },
  {
    file: "2.jpg",
    alt: "Attendees gathered on stage for a group photograph at a deep tech summit",
    w: 1024,
    h: 550,
    t: "purple",
  },
  {
    file: "9.jpg",
    alt: "Participants working together at shared tables between sessions",
    w: 682,
    h: 1024,
    t: "blue",
  },
  {
    file: "6.jpg",
    alt: "Small-group quantum workshop session beneath a painted mural",
    w: 1024,
    h: 768,
    t: "green",
  },
  {
    file: "8.jpg",
    alt: "Panel discussion on fibre-based quantum networks in a full auditorium",
    w: 845,
    h: 684,
    t: "purple",
  },
  {
    file: "5.jpg",
    alt: "Team unveiling the QuantumX banner at a launch event",
    w: 1200,
    h: 848,
    t: "blue",
  },
  {
    file: "3.jpg",
    alt: "Speaker presenting the migration challenge for post-quantum cryptography",
    w: 1024,
    h: 768,
    t: "purple",
  },
  {
    file: "7.jpg",
    alt: "A packed session with an attendee raising a hand to ask a question",
    w: 614,
    h: 408,
    t: "green",
  },
  {
    file: "10.jpg",
    alt: "Speaker addressing a seated circle of participants at a community meetup",
    w: 1024,
    h: 768,
    t: "purple",
  },
];

export const gallery: GallerySlot[] = SPECS.map((spec, i) => ({
  media: {
    src: `/images/community/${spec.file}`,
    alt: spec.alt,
    placeholderLabel: `COMMUNITY ${String(i + 1).padStart(2, "0")}`,
    width: spec.w,
    height: spec.h,
  },
  treatment: spec.t,
}));
