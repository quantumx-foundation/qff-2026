import type { ProgramDay, ProgramSession } from "@/types/event";

/**
 * Program / agenda.
 *
 * All five events carry approved content; nothing here is placeholder copy.
 * Speakers that are still open are declared on the event's `note` rather than
 * invented into a session row. An event whose running order has not been
 * published carries no sessions at all rather than a guessed agenda, with one
 * deliberate exception: event 3's order is assumed, and says so in its `note`.
 *
 * Every event publishes a running order rather than a timed schedule: `time` is
 * null on every row, which drops the time column from the schedule grid.
 *
 * Each event registers on its own Luma page rather than through the shared
 * event.urls.registration hub, so the CTA sends people to the event they are
 * actually looking at.
 */
const session = (
  title: string,
  detail: string | null = null,
  speaker: string | null = null,
): ProgramSession => ({
  time: null,
  title,
  type: null,
  speaker,
  track: null,
  detail,
  confirmed: true,
});

export const program: ProgramDay[] = [
  {
    id: "event-1",
    label: "Event 1",
    title: "Qiskit Fall Fest 2026: Quantum Community Connect",
    dateLabel: "10 OCT",
    location: "Startup Park, Bengaluru",
    description: null,
    note: null,
    registrationUrl: "https://luma.com/1sxdwrff",
    // Supplied key art. Rendered untreated: it already carries the IBM Quantum
    // and Qiskit marks in their own colours.
    media: {
      src: "/images/program/event-1.webp",
      alt: "Qiskit Fall Fest 2026 #1, Quantum Community Connect, October 10th",
      placeholderLabel: "EVENT 1 KEY ART",
      width: 1573,
      height: 1000,
    },
    accent: "indigo",
    sessions: [
      session("Introduction to Qiskit"),
      session("Fireside Chat: Careers in Quantum"),
      session("Audience Q&A"),
      session("Networking & Community Connect"),
    ],
  },
  {
    id: "event-2",
    label: "Event 2",
    title: "Qiskit Fall Fest 2026: Foundations of Quantum Computing",
    dateLabel: "17 OCT",
    location: "Online",
    description: null,
    note: null,
    registrationUrl: "https://luma.com/8jpgnkcg",
    // Supplied key art, untreated for the same reason as event 1.
    media: {
      src: "/images/program/event-2.webp",
      alt: "Qiskit Fall Fest 2026 #2, Foundations of Quantum Computing, October 17th",
      placeholderLabel: "EVENT 2 KEY ART",
      width: 1573,
      height: 1000,
    },
    accent: "pink",
    sessions: [
      session("Expert Talk"),
      session("Audience Q&A"),
      session("Upcoming QFF26 Events & Community Invitation"),
      session("Closing Remarks"),
    ],
  },
  {
    id: "event-3",
    label: "Event 3",
    title: "Qiskit Fall Fest 2026: Quantum Hack Day Kochi",
    dateLabel: "01 NOV",
    location: "TinkerSpace, Kochi",
    description: null,
    // The running order below is ASSUMED, not published: it was added at the
    // user's request on 9 Sep 2026 and inferred from the Luma page's format and
    // "What You'll Gain" list, not from a confirmed schedule. The card carried
    // an INDICATIVE RUNNING ORDER note; the user removed it on the same day, so
    // nothing on the page now marks these rows as provisional. Replace them
    // once the real order lands.
    note: null,
    registrationUrl: "https://luma.com/ndjvmw7w",
    // Supplied key art, untreated for the same reason as event 1.
    media: {
      src: "/images/program/event-3.webp",
      alt: "Qiskit Fall Fest 2026 #3, Quantum Hack Day Kochi, 1st November",
      placeholderLabel: "EVENT 3 KEY ART",
      width: 1573,
      height: 1000,
    },
    accent: "plum",
    sessions: [
      session("Introduction to Qiskit & the IBM Quantum Platform"),
      session("Team Formation"),
      session("Guided Challenges: Hack Time"),
      session("Mentor Sessions & Mini-workshops"),
      session("Project Showcase"),
      session("Recognition & Certificates"),
      session("Closing & Networking"),
    ],
  },
  {
    id: "event-4",
    label: "Event 4",
    title: "Qiskit Fall Fest 2026: Hands-On Quantum Programming with Qiskit",
    dateLabel: "16 NOV",
    location: "HKBK College of Engineering, Bengaluru",
    description: null,
    note: null,
    // Hosted on a college campus rather than open to general registration.
    isPrivate: true,
    registrationUrl: "https://luma.com/79i0vamg",
    // Supplied key art, untreated for the same reason as event 1.
    media: {
      src: "/images/program/event-4.webp",
      alt: "Qiskit Fall Fest 2026 #4, Hands-On Quantum Programming with Qiskit, 16th November",
      placeholderLabel: "EVENT 4 KEY ART",
      width: 1573,
      height: 1000,
    },
    accent: "indigo",
    sessions: [
      session("Hands-on Workshop"),
      session("Q&A Session"),
      session("Community Invitation & Closing"),
    ],
  },
  {
    id: "event-5",
    label: "Event 5",
    title: "Qiskit Fall Fest: QuantumX Summit",
    dateLabel: "28 NOV",
    location: "Startup Park, Bengaluru",
    description: null,
    note: null,
    registrationUrl: "https://luma.com/rzpptnuq",
    // Supplied key art, untreated for the same reason as event 1.
    media: {
      src: "/images/program/event-5.webp",
      alt: "Qiskit Fall Fest 2026 #5, QuantumX Summit, 28th November",
      placeholderLabel: "EVENT 5 KEY ART",
      width: 1573,
      height: 1000,
    },
    accent: "pink",
    sessions: [
      session("Advanced Expert Talk"),
      session("Audience Q&A"),
      session("Networking Session"),
      session("Community Announcements & Upcoming QuantumX Activities"),
      session("Closing Remarks"),
    ],
  },
];

export const programIntro = {
  label: "PROGRAM",
  heading: ["Five events.", "October to November."],
  /** Sits opposite the heading; states the shape of the program, nothing new. */
  standfirst:
    "Each event registers separately. Open the one you want and take its own registration link.",
  note: "FULL AGENDA TO BE ANNOUNCED",
};
