import type { Stat } from "@/types/event";
import { TBD } from "@/types/event";

/**
 * Statistics.
 *
 * project.md is explicit that figures must not be fabricated. The labels come
 * from the structure in style.md section 9; every value is a marked
 * placeholder until confirmed figures are supplied.
 */
export const statsIntro = {
  heading: ["Bringing the quantum", "community together"],
  cta: { label: "Explore the program", href: "#program" },
  note: "FINAL FIGURES TO BE CONFIRMED",
};

export const stats: Stat[] = [
  { value: TBD, label: "Participants", confirmed: false },
  { value: TBD, label: "Speakers", confirmed: false },
  { value: TBD, label: "Countries", confirmed: false },
];
