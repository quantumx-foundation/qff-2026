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
  /** One line held under the title in both the open and the closed state. */
  summary: string;
  /** Longer copy revealed when the block is opened. */
  body: string;
  /** Mono metadata closing the open panel, e.g. "RESEARCH • FRONTIER TECHNOLOGY". */
  tag: string;
  media: MediaRef | null;
  confirmed: boolean;
};

export type ProgramSession = {
  /** Null where the running order is published without clock times. */
  time: string | null;
  title: string;
  /** Null where the session carries no session-type label. */
  type: string | null;
  speaker: string | null;
  track: string | null;
  detail: string | null;
  confirmed: boolean;
};

export type ProgramDay = {
  id: string;
  label: string;
  /** Event title shown above the running order. Null while unannounced. */
  title: string | null;
  dateLabel: string;
  /** Venue and city. Null until confirmed. */
  location: string | null;
  /** Standfirst under the event title. Null while unannounced. */
  description: string | null;
  /** Overrides the section pending note, e.g. where only the speaker is open. */
  note: string | null;
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
  /** Overrides the rail's positional duotone cycle. Null follows the cycle. */
  treatment: Treatment | null;
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
  media: MediaRef | null;
  confirmed: boolean;
};

/**
 * A partner mark. Intrinsic dimensions travel with the file so the tile can
 * size by height without object-contain letterboxing a logo whose ratio
 * differs from a hardcoded guess.
 */
export type PartnerLogo = {
  /** White-on-transparent SVG/PNG/WebP under /public/images/partners. */
  src: string;
  width: number;
  height: number;
};

export type Partner = {
  id: string;
  name: string;
  /** Null renders a marked tile in place of the mark. */
  logo: PartnerLogo | null;
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
