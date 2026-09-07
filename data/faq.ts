import type { FaqItem, InvolvementAction } from "@/types/event";

/**
 * FAQ.
 *
 * project.md section 20 allows only questions for which approved answers
 * exist. Every answer here restates something the site already publishes —
 * the confirmed dates, the program's four events, the live registration and
 * speaker routes — so the FAQ cannot drift from the rest of the page.
 *
 * The partnership answer names the Partner with us CTA, which resolves through
 * NEXT_PUBLIC_SPONSOR_URL and now falls back to the live partnership form.
 */
export const faq: FaqItem[] = [
  {
    id: "dates",
    category: "EVENT",
    question: "When does QFF26 take place?",
    answer: "QFF26 runs from Saturday 10 October to Saturday 28 November 2026, across four events. Each event lists its own date in the program.",
    confirmed: true,
  },
  {
    id: "location",
    category: "LOCATION",
    question: "Where will QFF26 be held?",
    answer: "QFF26 is hybrid: some events are hosted in person in Bengaluru and others run online. Each event lists its own location in the program.",
    confirmed: true,
  },
  {
    id: "tickets",
    category: "TICKETS",
    question: "How do I register for QFF26?",
    answer: "Registration is open. Each event takes registrations separately, so open the event you want in the program and use its Register button.",
    confirmed: true,
  },
  {
    id: "program",
    category: "PROGRAM",
    question: "What is on the program?",
    answer: "Four events between October and November 2026: a careers fireside, a foundations expert talk, a hands-on Qiskit workshop and an advanced expert session. Each publishes its full running order in the program.",
    confirmed: true,
  },
  {
    id: "speakers",
    category: "SPEAKERS",
    question: "How can I apply to speak at QFF26?",
    answer: "Speaker applications are open through the Apply to speak link on the speakers section.",
    confirmed: true,
  },
  {
    id: "partners",
    category: "SPONSORSHIP",
    question: "How can my organisation partner with QFF26?",
    answer: "Partnership enquiries go through the Partner with us link in the partners section.",
    confirmed: true,
  },
];

/** Primary conversion block before the FAQ. */
export const involvement = {
  label: "GET INVOLVED",
  heading: "Find ways to take part",
  actions: [
    { label: "Register", href: "registration", variant: "primary" },
    { label: "Apply to speak", href: "speakerApplication", variant: "secondary" },
    { label: "Become a partner", href: "sponsor", variant: "secondary" },
    // Press removed on 8 Sep 2026: NEXT_PUBLIC_PRESS_URL has no destination, so
    // the button resolved to "#". Restore this entry once the press route
    // exists — the same convention the partner and social lists follow.
  ] satisfies Array<Omit<InvolvementAction, "href"> & { href: string }>,
};
