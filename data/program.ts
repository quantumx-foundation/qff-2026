import type { ProgramDay, ProgramSession } from "@/types/event";

/**
 * Program / agenda.
 *
 * All six events carry approved content; nothing here is placeholder copy.
 * Speakers that are still open are declared on the event's `note` rather than
 * invented into a session row. An event whose running order has not been
 * published carries no sessions at all rather than a guessed agenda, with one
 * deliberate exceptions: the orders for events 3 and 4 are assumed, and each
 * says so in a comment beside its sessions.
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

/** A session with a published clock time. */
const timed = (time: string, title: string): ProgramSession => ({
  ...session(title),
  time,
});

export const program: ProgramDay[] = [
  {
    id: "event-1",
    label: "Event 1",
    title: "Qiskit Fall Fest 2026: Quantum Community Connect",
    dateLabel: "10 OCT",
    date: "2026-10-10",
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
    date: "2026-10-17",
    // Finished on the evening of the 17th; past now rather than at midnight.
    ended: true,
    location: "Online",
    description: null,
    note: null,
    registrationUrl: "https://luma.com/8jpgnkcg",
    // Streamed on YouTube Live on the day; the card links here instead of Luma.
    watchUrl: "https://youtube.com/live/hwWfou1kUN4",
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
    date: "2026-11-01",
    location: "TinkerSpace, Kochi",
    description: null,
    note: null,
    registrationUrl: "https://luma.com/ndjvmw7w",
    guide: { label: "Hackathon details", href: "/kochi-hack" },
    // Supplied key art, untreated for the same reason as event 1.
    media: {
      src: "/images/program/event-3.webp",
      alt: "Qiskit Fall Fest 2026 #3, Quantum Hack Day Kochi, 1st November",
      placeholderLabel: "EVENT 3 KEY ART",
      width: 1573,
      height: 1000,
    },
    accent: "plum",
    // The organisers' published event flow (Discord, 31 Oct 2026). Also the
    // Schedule tab on /kochi-hack, which reads these rows. 4:00–4:15 PM is
    // unscheduled in the published flow.
    sessions: [
      timed("9:00–9:30 AM", "Registration"),
      timed("9:30–9:45 AM", "Welcome & Hack Day Briefing"),
      timed("9:45–10:00 AM", "Challenge Tracks & Problem Statement Reveal"),
      timed("10:00 AM–1:30 PM", "Hackathon Build Sprint I"),
      timed("1:30–2:00 PM", "Lunch & Networking"),
      timed("2:00–4:00 PM", "Hackathon Build Sprint II"),
      timed("4:15–4:30 PM", "Project Submission & Demo Preparation"),
      timed("4:30–5:15 PM", "Project Showcase / Demos"),
      timed("5:15–5:30 PM", "Jury Deliberation + Community Activity"),
      timed("5:30–6:00 PM", "Awards & Closing"),
    ],
  },
  {
    id: "event-4",
    label: "Event 4",
    title: "Qiskit Fall Fest 2026: Quantum and Qiskit 101",
    dateLabel: "06 NOV",
    date: "2026-11-06",
    location: "Startup Park, Bengaluru",
    description: null,
    note: null,
    registrationUrl: "https://luma.com/hczdve5y",
    // Supplied key art, untreated for the same reason as event 1.
    media: {
      src: "/images/program/event-4.webp",
      alt: "Qiskit Fall Fest 2026 #4, Quantum and Qiskit 101, 6th November",
      placeholderLabel: "EVENT 4 KEY ART",
      width: 1574,
      height: 999,
    },
    accent: "indigo",
    // The running order below is ASSUMED, not published: added at the user's
    // request on 14 Sep 2026, modelled on the other expert-talk events (2 and
    // 6) and the Luma page, which describes an expert talk by Dr. Subarna Roy
    // with Q&A, networking and a look at upcoming Fall Fest events. Nothing on
    // the page marks it as provisional. Replace it once the real order lands.
    sessions: [
      session("Expert Talk: Quantum and Qiskit 101", null, "Dr. Subarna Roy"),
      session("Audience Q&A"),
      session("Networking & Community Connect"),
      session("Upcoming QFF26 Events & Community Invitation"),
      session("Closing Remarks"),
    ],
  },
  {
    id: "event-5",
    label: "Event 5",
    title: "Qiskit Fall Fest 2026: Hands-On Quantum Programming with Qiskit",
    dateLabel: "16 NOV",
    date: "2026-11-16",
    location: "HKBK College of Engineering, Bengaluru",
    description: null,
    note: null,
    // Hosted on a college campus rather than open to general registration.
    isPrivate: true,
    registrationUrl: "https://luma.com/79i0vamg",
    // Supplied key art, untreated for the same reason as event 1.
    media: {
      src: "/images/program/event-5.webp",
      alt: "Qiskit Fall Fest 2026 #5, Hands-On Quantum Programming with Qiskit, 16th November",
      placeholderLabel: "EVENT 5 KEY ART",
      width: 1573,
      height: 1000,
    },
    accent: "pink",
    sessions: [
      session("Hands-on Workshop"),
      session("Q&A Session"),
      session("Community Invitation & Closing"),
    ],
  },
  {
    id: "event-6",
    label: "Event 6",
    title: "QuantumX Summit",
    dateLabel: "28 NOV",
    date: "2026-11-28",
    location: "Startup Park, Bengaluru",
    description: null,
    note: null,
    registrationUrl: "https://luma.com/rzpptnuq",
    // The QuantumX Speaker Interest Form, taking 5-minute presentation slots.
    openCall: {
      description: "Present a paper, your work, or a side project in a 5-minute slot.",
      label: "Apply to present",
      href: "https://tally.so/r/XxpNLY",
    },
    // Supplied key art, untreated for the same reason as event 1.
    media: {
      src: "/images/program/event-6.webp",
      alt: "Qiskit Fall Fest 2026 #6, QuantumX Summit, 28th November",
      placeholderLabel: "EVENT 6 KEY ART",
      width: 1573,
      height: 1000,
    },
    accent: "plum",
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
  heading: ["Six events.", "October to November."],
  /** Sits opposite the heading; states the shape of the program, nothing new. */
  standfirst:
    "Each event registers separately. Open the one you want and take its own registration link.",
  note: "FULL AGENDA TO BE ANNOUNCED",
};
