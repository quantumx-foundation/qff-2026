/**
 * QFF26 content types.
 *
 * Every field that is not yet confirmed event information is either nullable
 * or carries a `confirmed` flag. Nothing in the UI fabricates a value: unset
 * content renders as an explicit, visible placeholder (see `TBD`), and
 * sections whose data is empty do not render at all.
 */

/** Marker used wherever confirmed event content is not yet available. */
export const TBD = "TBD" as const;

/** Longer form marker for prose-length placeholders. */
export const CONTENT_PLACEHOLDER = "[CONTENT PLACEHOLDER]" as const;

export type Confirmable<T> = {
  value: T;
  /** False while awaiting approved event content. */
  confirmed: boolean;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "x" | "linkedin" | "youtube" | "github" | "discord";
};

export type EventConfig = {
  name: string;
  shortName: string;
  year: string;
  organisation: string;
  /** Full expansion of "QFF". Null until supplied as approved content. */
  expansion: string | null;
  /** ISO 8601 with offset. Null until the date is confirmed; gates the countdown. */
  startsAt: string | null;
  endsAt: string | null;
  timeZone: string | null;
  /** Human readable date range, e.g. "15-17 NOVEMBER 2026". */
  dateLabel: string;
  venue: string;
  city: string;
  country: string | null;
  registrationStatus: string;
  urls: {
    site: string;
    registration: string;
    speakerApplication: string;
    sponsor: string;
    press: string;
    contentCreator: string;
    contact: string;
    codeOfConduct: string;
    privacy: string;
    terms: string;
    communityEvents: string;
    archive: string;
    recap: string;
    program: string;
  };
  socials: SocialLink[];
};

export type NavItem = {
  label: string;
  href: string;
  /** Mono index shown beside the label in the overlay menu. */
  index: string;
};

export type HeroContent = {
  eyebrow: string;
  /** Rendered as separate lines to control the break points. */
  headline: string[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string } | null;
  media: MediaRef | null;
  confirmed: boolean;
};

export type MediaRef = {
  /** Path under /public. Null renders the marked placeholder panel. */
  src: string | null;
  alt: string;
  /** Short label shown inside the placeholder panel. */
  placeholderLabel: string;
  width: number;
  height: number;
};

export type Treatment = "purple" | "green" | "blue" | "mono";

export type Stat = {
  value: string;
  label: string;
  confirmed: boolean;
};

export type ValueBlock = {
  id: string;
  title: string;
  body: string;
  media: MediaRef | null;
  confirmed: boolean;
};

export type ProgramSession = {
  time: string;
  title: string;
  type: string;
  speaker: string | null;
  track: string | null;
  detail: string | null;
  confirmed: boolean;
};

export type ProgramDay = {
  id: string;
  label: string;
  dateLabel: string;
  sessions: ProgramSession[];
};

export type Speaker = {
  id: string;
  name: string;
  role: string | null;
  organisation: string | null;
  topic: string | null;
  href: string | null;
  media: MediaRef | null;
  confirmed: boolean;
};

export type EcosystemEvent = {
  id: string;
  category: string;
  name: string;
  dateLabel: string;
  location: string;
  description: string | null;
  href: string | null;
  media: MediaRef | null;
  treatment: Treatment;
  confirmed: boolean;
};

export type Testimonial = {
  id: string;
  quote: string;
  handle: string | null;
  name: string;
  role: string | null;
  media: MediaRef | null;
  confirmed: boolean;
};

export type Announcement = {
  id: string;
  category: "EVENT" | "NEWS" | "RECAP" | "PARTNER" | "ANNOUNCEMENT";
  title: string;
  dateLabel: string | null;
  href: string | null;
  confirmed: boolean;
};

export type Partner = {
  id: string;
  name: string;
  /** White SVG/PNG under /public/images/partners. Null renders a marked tile. */
  logo: string | null;
  href: string | null;
  tier: string;
  confirmed: boolean;
};

export type FaqItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
  /** False while the answer is a placeholder awaiting approved copy. */
  confirmed: boolean;
};

export type InvolvementAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};
