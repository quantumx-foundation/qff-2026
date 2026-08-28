import type { Stat } from "@/types/event";

/**
 * Statistics.
 *
 * Figures supplied for the three-up row. All confirmed, so the pending note
 * does not render.
 */
export const statsIntro = {
  heading: ["Bringing the quantum", "community together"],
  cta: { label: "Explore the program", href: "#program" },
  note: "FINAL FIGURES TO BE CONFIRMED",
};

export const stats: Stat[] = [
  { value: "1000+", label: "Participants", confirmed: true },
  { value: "30+", label: "Speakers", confirmed: true },
  { value: "10+", label: "Sessions", confirmed: true },
];
