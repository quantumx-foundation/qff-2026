import type { FaqItem, InvolvementAction } from "@/types/event";

/**
 * FAQ.
 *
 * project.md section 20 allows only questions for which approved answers
 * exist. No answer here asserts an unconfirmed fact: each states the current,
 * accurate position and is flagged unconfirmed so it is replaced with approved
 * copy before launch.
 */
export const faq: FaqItem[] = [
  {
    id: "dates",
    category: "EVENT",
    question: "When does QFF26 take place?",
    answer: "QFF26 starts on Saturday 10 October 2026. The full duration and daily schedule are still to be announced.",
    confirmed: false,
  },
  {
    id: "location",
    category: "LOCATION",
    question: "Where will QFF26 be held?",
    answer: "QFF26 is hosted in Bengaluru, India, with remote participation. The specific venue is still to be announced.",
    confirmed: false,
  },
  {
    id: "tickets",
    category: "TICKETS",
    question: "How do I register for QFF26?",
    answer: "Registration is not yet open. Details will be published here when it opens.",
    confirmed: false,
  },
  {
    id: "program",
    category: "PROGRAM",
    question: "When will the program be published?",
    answer: "The full agenda is still to be announced.",
    confirmed: false,
  },
  {
    id: "speakers",
    category: "SPEAKERS",
    question: "How can I apply to speak at QFF26?",
    answer: "Speaker applications will be handled through the Apply to Speak link once open.",
    confirmed: false,
  },
  {
    id: "partners",
    category: "SPONSORSHIP",
    question: "How can my organisation partner with QFF26?",
    answer: "Partnership enquiries can be sent through the contact link in this page's footer.",
    confirmed: false,
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
    { label: "Press", href: "press", variant: "secondary" },
  ] satisfies Array<Omit<InvolvementAction, "href"> & { href: string }>,
};
