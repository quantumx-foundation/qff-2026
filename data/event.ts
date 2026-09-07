import type { EventConfig, NavItem } from "@/types/event";
import { TBD } from "@/types/event";

/**
 * Single source of truth for event facts and external destinations.
 *
 * Nothing here is invented. This site runs with no environment configuration:
 * every value below is the literal published one, so what is written here is
 * exactly what ships. Changing a destination means editing this file.
 */

export const event: EventConfig = {
  name: "QFF26",
  shortName: "QFF26",
  year: "2026",
  organisation: "QuantumX Foundation",
  // QuantumX is the official host of the Qiskit Fall Fest 2026 edition, so the
  // expansion is confirmed and carries the programme's own name.
  expansion: "Qiskit Fall Fest",

  // Confirmed start: Saturday 10 October 2026, Bengaluru (IST, UTC+05:30).
  // The start time of day is not published, so the countdown targets the start
  // of this date. `endsAt` is the last event on the program, 28 November.
  startsAt: "2026-10-10T00:00:00+05:30",
  endsAt: "2026-11-28T23:59:59+05:30",
  timeZone: "Asia/Kolkata",

  dateLabel: "10 October – 28 November 2026",
  // Hybrid event: in person in Bengaluru plus remote participation. The
  // specific venue is still to be announced.
  venue: "Bengaluru + Remote",
  city: "Bengaluru",
  country: "India",

  // Reaches the organising team.
  contactEmail: "hi.quantumx@gmail.com",

  urls: {
    site: "https://qff26.quantumx.foundation",
    organisation: "https://quantumx.foundation",
    registration: "https://luma.com/qff26xquantumx",
    speakerApplication: "https://tally.so/r/D46GER",
    sponsor: "https://tally.so/r/kdoOkZ",
    // The four footer documents live on this site.
    contact: "/contact",
    codeOfConduct: "/code-of-conduct",
    privacy: "/privacy",
    terms: "/terms",
    // No destination yet. The section that would link this is hidden while
    // `ecosystemEvents` is empty, so nothing renders it; give it a real URL
    // before restoring that rail.
    communityEvents: null,
    program: "#program",
  },

  // Only handles with a real destination are listed; the footer renders every
  // entry here, so an unpublished channel is left out rather than stubbed.
  socials: [
    { label: "X", href: "https://x.com/_Quantum_X_", icon: "x" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/quantumx-foundation/",
      icon: "linkedin",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/quantumx.school/",
      icon: "instagram",
    },
    {
      label: "Discord",
      href: "https://discord.gg/hjtdgYbGk",
      icon: "discord",
    },
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
