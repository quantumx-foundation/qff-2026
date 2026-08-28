import type { Partner } from "@/types/event";

/**
 * Partners / sponsors.
 *
 * project.md section 19 permits building the component with placeholders when
 * sponsor data is unavailable. No partner names or logos are invented.
 */
export const partners: Partner[] = Array.from({ length: 12 }, (_, i) => ({
  id: `partner-${i + 1}`,
  name: `Partner ${String(i + 1).padStart(2, "0")}`,
  logo: null,
  href: null,
  tier: "TBC",
  confirmed: false,
}));

export const partnersIntro = {
  label: "PARTNERS",
  heading: "Become a QFF26 partner",
  primaryCta: { label: "Contact us", href: "contact" as const },
  secondaryCta: { label: "Partner with us", href: "sponsor" as const },
  note: "PARTNERS TO BE ANNOUNCED",
};
