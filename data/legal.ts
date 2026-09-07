import type { LegalDocument } from "@/types/event";
import { event } from "@/data/event";

/**
 * The four documents linked from the footer.
 *
 * Short by intent: a title and a couple of paragraphs each, no clause
 * numbering. That is also what keeps them honest under project.md's rule
 * against invented content — every sentence here either describes how this
 * site and this event actually work, or points at a document someone else
 * has published. Nothing commits QuantumX Foundation to a policy it has not
 * adopted, so there is no placeholder wording to replace later.
 */

/** IBM's published code, which explicitly covers event attendees and speakers. */
const QISKIT_CODE_OF_CONDUCT =
  "https://quantum.cloud.ibm.com/docs/en/open-source/code-of-conduct";

const mailto = `mailto:${event.contactEmail}`;

/** Named in the contact prose, so it is only offered when it resolves. */
const discord = event.socials.find(
  (social) => social.icon === "discord" && social.href.startsWith("http"),
);

export const terms: LegalDocument = {
  title: "Terms of use",
  summary:
    "The terms you accept by using this site or taking part in QFF26.",
  body: [
    `These terms cover your use of this site and your participation in QFF26, the ${event.organisation} edition of the Qiskit Fall Fest. Using the site means you accept them. Dates, the program, speakers and partners are our current plan rather than a guarantee, and where an event has its own registration page, that page carries the definitive detail.`,
    `Registration runs on external platforms, which handle whatever you enter under their own terms. The words, artwork and photography on this site belong to ${event.organisation} or to whoever supplied them; Qiskit and IBM are trademarks of International Business Machines Corporation, and nothing here transfers any right in them. Taking part also means following the code of conduct. Anything unclear, write to us.`,
  ],
  links: [
    { label: "Code of conduct", href: "/code-of-conduct" },
    { label: "Privacy", href: "/privacy" },
    { label: "Contact", href: mailto },
  ],
};

export const privacy: LegalDocument = {
  title: "Privacy",
  summary: "What this site collects, which is nothing, and who holds what you send elsewhere.",
  body: [
    "This site collects nothing about you. It sets no cookies, runs no analytics and stores nothing in your browser; the fonts and images are served from this domain rather than fetched from a third party, and there is no form here to fill in and no account to make.",
    `Registration, speaker applications and partnership enquiries all happen on external platforms: Luma and Tally. Anything you enter there is held by those companies under their own privacy policies rather than ours. If you have registered for a QFF26 event or written to us and want to know what we hold, or want it removed, email ${event.contactEmail}.`,
  ],
  links: [
    { label: "Contact", href: mailto },
    { label: "Terms of use", href: "/terms" },
  ],
};

export const codeOfConduct: LegalDocument = {
  title: "Code of conduct",
  summary:
    "QFF26 runs under the Qiskit code of conduct, in person and online.",
  body: [
    "QFF26 runs under the Qiskit code of conduct. It applies to everyone at every session, workshop and channel: attendees, speakers, partners, volunteers and organisers alike, in person and online.",
    `In short: be courteous, assume good faith, and leave room for people who are new to this. Harassment of any kind is not tolerated. If something goes wrong, tell an organiser at the event or email ${event.contactEmail}. It reaches the QFF26 organising team directly.`,
  ],
  links: [
    { label: "Read the Qiskit code of conduct", href: QISKIT_CODE_OF_CONDUCT },
    { label: "Contact", href: mailto },
  ],
};

export const contact: LegalDocument = {
  title: "Contact",
  summary: `How to reach the ${event.organisation} team about QFF26.`,
  body: [
    `QFF26 is organised by ${event.organisation}. Email ${event.contactEmail} and it reaches the organising team, whether that is a question about an event, speaking, partnering, press, or anything else you have found on this site.`,
    "Some things move faster elsewhere. Each event in the program takes its own registrations, speaking and partnership both have their own forms, and the community is on Discord day to day.",
  ],
  links: [
    { label: `Email ${event.contactEmail}`, href: mailto },
    { label: "Register", href: event.urls.registration },
    { label: "Apply to speak", href: event.urls.speakerApplication },
    { label: "Partner with us", href: event.urls.sponsor },
    ...(discord ? [{ label: "Discord", href: discord.href }] : []),
  ],
};
