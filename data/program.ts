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
    location: "Startup Park, Bangalore",
    description:
      "A community meetup bringing together students, researchers, developers, and professionals interested in quantum computing and the rapidly growing quantum technology ecosystem.",
    note: null,
    registrationUrl: "https://luma.com/1sxdwrff",
    sessions: [
      session(
        "Welcome Note",
        "An introduction to QuantumX's Qiskit Fall Fest 2026 and the community, workshops, expert talks, and flagship events planned throughout the festival.",
      ),
      session(
        "Introduction to Qiskit",
        "An introduction to Qiskit and the IBM Quantum ecosystem, with insights into how to get started learning and building with quantum computing.",
      ),
      session(
        "Fireside Chat: Careers in Quantum",
        "A conversation on career pathways in quantum computing and quantum programming, followed by insights into skills, opportunities, and getting started in the field.",
      ),
      session(
        "Audience Q&A",
        "An open Q&A with speakers and members of the quantum community.",
      ),
      session(
        "Networking & Community Connect",
        "Connect with students, researchers, developers, industry professionals, mentors, collaborators, and future teammates from the growing quantum ecosystem.",
      ),
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
    registrationUrl: "https://luma.com/8jpgnkcg",
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
    registrationUrl: "https://luma.com/79i0vamg",
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
    registrationUrl: "https://luma.com/rzpptnuq",
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
