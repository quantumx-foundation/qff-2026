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
  icon: "x" | "linkedin" | "instagram" | "youtube" | "github" | "discord";
};

export type EventConfig = {
  name: string;
  shortName: string;
  year: string;
  organisation: string;
  /** Full expansion of "QFF", e.g. "Qiskit Fall Fest". Null until confirmed. */
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
  /** Published address for organiser enquiries. */
  contactEmail: string;
  urls: {
    site: string;
    /** The hosting organisation's own site, not this event's. */
    organisation: string;
    registration: string;
    speakerApplication: string;
    /** Past speakers on the Foundation's own site, not this event's roster. */
    pastSpeakers: string;
    sponsor: string;
    contact: string;
    codeOfConduct: string;
    privacy: string;
    terms: string;
    /** Null until a destination is published; nothing may render a null. */
    communityEvents: string | null;
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
  /** Small line above the headline. Null renders no eyebrow at all. */
  eyebrow: string | null;
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

export type Treatment = "pink" | "indigo" | "plum" | "mono";

/**
 * Brand accent roles for flat surfaces. `Treatment` drives the photographic
 * duotone filters and shares these names on purpose: a card tinted `pink` and
 * a portrait treated `pink` land on the same brand colour.
 */
export type Accent = "pink" | "indigo" | "plum";

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
  /**
   * Ordinal name ("Event 1"). No longer drawn on the card: the events are
   * identified by title and date instead. It survives as the screen-reader
   * name for an event whose `title` is still null.
   */
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
  /**
   * Marks an event that is not open to general registration, e.g. one hosted
   * on a partner campus for its own students. Draws a PRIVATE EVENT tag on the
   * card. Optional: absent means public, so only closed events declare it.
   */
  isPrivate?: boolean;
  /** The event's own registration page. Null hides the CTA for that event. */
  registrationUrl: string | null;
  /**
   * The event's own key art. Null draws the generated brand tile instead, so
   * the board is final-size before artwork lands, dropping in a file path is
   * the only change needed. Never point this at art whose date or title
   * contradicts the fields above.
   */
  media: MediaRef | null;
  /** Positional brand accent for the generated tile and the card rule. */
  accent: Accent;
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

/** Key into `event.urls`, so an answer can never link somewhere undeclared. */
export type EventUrlKey = keyof EventConfig["urls"];

export type FaqItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
  /**
   * Destinations the answer names, rendered under it. Optional: an answer that
   * points nowhere declares none. A key whose URL is null renders no link.
   */
  links?: Array<{ label: string; href: EventUrlKey }>;
  /** False while the answer is a placeholder awaiting approved copy. */
  confirmed: boolean;
};

/**
 * A short standalone document, terms, privacy, code of conduct, contact.
 *
 * Deliberately small: a title and a couple of paragraphs. Prose stays plain
 * text so it is readable in the data file, and every destination the prose
 * refers to is listed in `links` and rendered as a row beneath it.
 */
export type LegalDocument = {
  title: string;
  /** Standfirst under the title, and the page's meta description. */
  summary: string;
  body: string[];
  links: Array<{ label: string; href: string }>;
};

export type InvolvementAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};
