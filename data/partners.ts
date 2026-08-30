import type { Partner } from "@/types/event";

/**
 * Partners / sponsors.
 *
 * Only confirmed partners are listed — project.md section 19 forbids inventing
 * sponsors. Logos live under /public/images/partners, trimmed of transparent
 * padding so every mark sizes from its own ink rather than from its canvas.
 * Each is the partner's own on-dark artwork: none has been recoloured, since
 * keying a mark to white alters it.
 *
 * Websites and tiers are not yet supplied; each tile renders unlinked until a
 * partner's own URL is confirmed.
 */
export const partners: Partner[] = [
  {
    id: "ibm-quantum",
    name: "IBM Quantum",
    logo: { src: "/images/partners/ibm-quantum.png", width: 800, height: 109 },
    href: null,
    tier: "TBC",
    confirmed: true,
  },
  {
    id: "startup-park",
    name: "Startup Park",
    logo: { src: "/images/partners/startup-park.png", width: 800, height: 209 },
    href: null,
    tier: "TBC",
    confirmed: true,
  },
  {
    id: "woi-india",
    name: "WOI India",
    logo: { src: "/images/partners/woi-india.png", width: 800, height: 298 },
    href: null,
    tier: "TBC",
    confirmed: true,
  },
  {
    id: "appetite",
    name: "Appetite",
    logo: { src: "/images/partners/appetite.png", width: 800, height: 192 },
    href: null,
    tier: "TBC",
    confirmed: true,
  },
  {
    id: "tinkerhub",
    name: "TinkerHub Foundation",
    logo: { src: "/images/partners/tinkerhub.png", width: 800, height: 155 },
    href: null,
    tier: "TBC",
    confirmed: true,
  },
  {
    id: "hkbk",
    name: "HKBK College of Engineering",
    logo: { src: "/images/partners/hkbk.png", width: 256, height: 249 },
    href: null,
    tier: "TBC",
    confirmed: true,
  },
  {
    id: "skill-univ",
    name: "Skill Univ",
    // Supplied at 96x80 — the smallest mark here, and soft on dense displays.
    logo: { src: "/images/partners/skill-univ.png", width: 96, height: 80 },
    href: null,
    tier: "TBC",
    confirmed: true,
  },
];

export const partnersIntro = {
  label: "PARTNERS",
  heading: "Become a QFF26 partner",
  primaryCta: { label: "Contact us", href: "contact" as const },
  secondaryCta: { label: "Partner with us", href: "sponsor" as const },
  /** The roster is still open, so the note stands even though each listed partner is confirmed. */
  rosterOpen: true,
  note: "MORE PARTNERS TO BE ANNOUNCED",
};
