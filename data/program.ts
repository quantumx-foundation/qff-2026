import type { ProgramDay, ProgramSession } from "@/types/event";

/**
 * Program / agenda.
 *
 * All four events carry approved content; nothing here is placeholder copy.
 * Speakers that are still open are declared on the event's `note` rather than
 * invented into a session row.
 *
 * Every event publishes a running order rather than a timed schedule: `time` is
 * null on every row, which drops the time column from the schedule grid.
 */
const session = (title: string, speaker: string | null = null): ProgramSession => ({
  time: null,
  title,
  type: null,
  speaker,
  track: null,
  detail: null,
  confirmed: true,
});

export const program: ProgramDay[] = [
  {
    id: "event-1",
    label: "Event 1",
    title: "Careers in Quantum",
    dateLabel: "10 OCT",
    location: "Startup Park, Bangalore",
    description:
      "A fireside conversation on careers in quantum computing, followed by an open Q&A and networking session with the Qx community.",
    note: null,
    sessions: [
      session("Welcome Note"),
      session("Fireside Chat: Careers in Quantum"),
      session("Audience Q&A"),
      session("Networking & Closing Remarks"),
    ],
  },
  {
    id: "event-2",
    label: "Event 2",
    title: "Expert Talk",
    dateLabel: "17 OCT",
    location: "Online · Zoom",
    description:
      "A foundation-level expert session focused on developers exploring quantum computing, followed by an audience Q&A and an invitation to join the QFF26 community.",
    note: null,
    sessions: [
      session("Welcome Note & Introduction"),
      session("Expert Talk"),
      session("Audience Q&A"),
      session("Upcoming QFF26 Events & Community Invitation"),
      session("Closing Remarks"),
    ],
  },
  {
    id: "event-3",
    label: "Event 3",
    title: "Hands-on with Qiskit SDK",
    dateLabel: "06 NOV 2026",
    location: "Online · Zoom / IBM Quantum Platform",
    description:
      "A hands-on workshop introducing participants to the Qiskit SDK, quantum programming, and the IBM Quantum Platform. Participants will create and run simple quantum circuits and gain practical experience with quantum development.",
    note: null,
    sessions: [
      session("Welcome & Introduction"),
      session("Hands-on Workshop"),
      session("Q&A Session"),
      session("Community Invitation & Closing"),
    ],
  },
  {
    id: "event-4",
    label: "Event 4",
    title: "Advanced Expert Talk",
    dateLabel: "28 NOV",
    location: "Startup Park, Bangalore",
    description:
      "An advanced expert session exploring current quantum computing trends, industry challenges, research pathways, and opportunities across the growing quantum ecosystem.",
    note: null,
    sessions: [
      session("Registration & Networking"),
      session("Welcome Note"),
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
  heading: ["Research and build"],
  note: "FULL AGENDA TO BE ANNOUNCED",
};
