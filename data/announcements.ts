import type { Announcement } from "@/types/event";

/**
 * Latest updates.
 *
 * Categories are those listed in project.md section 18. Only approved posts
 * are listed; emptying this array hides the section.
 */
export const announcements: Announcement[] = [
  {
    id: "qiskit-fall-fest-2026",
    category: "NEWS",
    title: "QuantumX selected as official host for Qiskit Fall Fest 2026",
    dateLabel: null,
    href: "https://www.linkedin.com/posts/quantumx-foundation_were-super-excited-to-announce-that-quantumx-activity-7490337968432414720-vhCV",
    media: {
      src: "/images/announcements/qiskit-fall-fest.jpg",
      alt: "Students in an auditorium holding Qiskit Fall Fest flyers.",
      placeholderLabel: "NEWS",
      width: 800,
      height: 533,
    },
    confirmed: true,
  },
];
