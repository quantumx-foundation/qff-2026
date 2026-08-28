import type { EventConfig, NavItem } from "@/types/event";
import { TBD } from "@/types/event";

/**
 * Single source of truth for event facts and external destinations.
 *
 * Nothing here is invented. Dates, venue and city are held at TBD until
 * approved event content is supplied; `startsAt` being null gates the
 * countdown. External URLs read from NEXT_PUBLIC_* where provided so they can
 * be repointed per environment without a code change.
 */

const url = (key: string, fallback = "#") =>
  process.env[key as keyof NodeJS.ProcessEnv] ?? fallback;

export const event: EventConfig = {
  name: "QFF26",
  shortName: "QFF26",
  year: "2026",
  organisation: "QuantumX Foundation",
  // "QFF" is deliberately not expanded: no approved expansion has been supplied.
  expansion: null,

  // Confirmed start: Saturday 10 October 2026, Bengaluru (IST, UTC+05:30).
  // This is when the festival begins, not the full duration. End date is not
  // yet confirmed. Start time of day is also unconfirmed, so the countdown
  // targets the start of this date; set NEXT_PUBLIC_EVENT_STARTS_AT to override.
  startsAt: process.env.NEXT_PUBLIC_EVENT_STARTS_AT ?? "2026-10-10T00:00:00+05:30",
  // End date not yet confirmed.
  endsAt: process.env.NEXT_PUBLIC_EVENT_ENDS_AT ?? null,
  timeZone: process.env.NEXT_PUBLIC_EVENT_TIMEZONE ?? "Asia/Kolkata",

  dateLabel: "Saturday 10 October 2026",
  // Hybrid event: in person in Bengaluru plus remote participation. The
  // specific venue is still to be announced.
  venue: "Bengaluru + Remote",
  city: "Bengaluru",
  country: "India",
  registrationStatus: "Registration opening soon",

  urls: {
    site: process.env.NEXT_PUBLIC_SITE_URL ?? "https://qff26.quantumx.foundation",
    registration: url("NEXT_PUBLIC_REGISTRATION_URL", "https://luma.com/user/quantumx"),
    speakerApplication: url("NEXT_PUBLIC_SPEAKER_URL", "https://tally.so/r/D46GER"),
    sponsor: url("NEXT_PUBLIC_SPONSOR_URL"),
    press: url("NEXT_PUBLIC_PRESS_URL"),
    contentCreator: url("NEXT_PUBLIC_CREATOR_URL"),
    contact: url("NEXT_PUBLIC_CONTACT_URL"),
    codeOfConduct: url("NEXT_PUBLIC_CODE_OF_CONDUCT_URL"),
    privacy: url("NEXT_PUBLIC_PRIVACY_URL"),
    terms: url("NEXT_PUBLIC_TERMS_URL"),
    communityEvents: url("NEXT_PUBLIC_COMMUNITY_EVENTS_URL"),
    archive: url("NEXT_PUBLIC_ARCHIVE_URL"),
    recap: url("NEXT_PUBLIC_RECAP_URL"),
    program: "#program",
  },

  // Handles are not published until confirmed; each resolves through env.
  socials: [
    { label: "X", href: url("NEXT_PUBLIC_SOCIAL_X"), icon: "x" },
    { label: "LinkedIn", href: url("NEXT_PUBLIC_SOCIAL_LINKEDIN"), icon: "linkedin" },
    { label: "YouTube", href: url("NEXT_PUBLIC_SOCIAL_YOUTUBE"), icon: "youtube" },
    { label: "GitHub", href: url("NEXT_PUBLIC_SOCIAL_GITHUB"), icon: "github" },
    { label: "Discord", href: url("NEXT_PUBLIC_SOCIAL_DISCORD"), icon: "discord" },
  ],
};

/** Only destinations that exist on the implemented page. */
export const navigation: NavItem[] = [
  { label: "About", href: "#about", index: "01" },
  { label: "Program", href: "#program", index: "02" },
  { label: "Speakers", href: "#speakers", index: "03" },
  { label: "Partners", href: "#partners", index: "04" },
  { label: "FAQ", href: "#faq", index: "05" },
];

export const isConfirmed = (value: string) => value !== TBD;
