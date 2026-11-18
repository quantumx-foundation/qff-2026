/**
 * The event /live currently points at.
 *
 * /live is the one link shared ahead of a session. Before `startsAt` it shows
 * the event and sends people to Luma to register; from `startsAt` on it
 * redirects straight to the stream. Pointing it at the next session means
 * replacing this object, the shared link stays the same.
 *
 * `stream` is null until the session link (YouTube Live, Meet…) is known. While it is null
 * the page never redirects: past the start time it keeps the Luma CTA and says
 * the stream link is on its way, rather than sending anyone somewhere invented.
 */

export type LiveEvent = {
  title: string;
  /**
   * Set once the session is over. /live then says thank you and points at the
   * YouTube recording, rendered on the server so nothing else flashes first.
   */
  ended: boolean;
  /** ISO timestamps with offset. */
  startsAt: string;
  endsAt: string;
  /** When /live stops showing the page and sends everyone to `stream`.
   *  Usually a little before `startsAt`, so people are in the room on time. */
  opensAt: string;
  /** `opensAt` as people read it, shown under the RSVP button. */
  joinLabel: string;
  dateLabel: string;
  timeLabel: string;
  registration: string;
  stream: string | null;
  /** YouTube Live for the same session, for anyone who would rather watch, or
   *  can't get into the Meet (free Meet calls cap at 100 people). */
  youtube: string | null;
  /** Set for an in-person session. /live then points people at the venue
   *  instead of offering online ways in. */
  venue: { name: string; address: string } | null;
  image: { src: string; alt: string; width: number; height: number };
};

export const liveEvent: LiveEvent = {
  title: "QFF 2026: QuantumX Summit",
  ended: false,
  startsAt: "2026-11-28T09:00:00+05:30",
  endsAt: "2026-11-28T12:00:00+05:30",
  // In person: no doors-open time has been published, so the page turns over
  // at the start time.
  opensAt: "2026-11-28T09:00:00+05:30",
  joinLabel: "9:00 am IST",
  dateLabel: "Saturday, 28 November",
  timeLabel: "9:00 am – 12:00 pm IST",
  registration: "https://luma.com/rzpptnuq",
  // Treat any link set here as public: this object ships in the client bundle
  // (SECURITY_AUDIT.md #3).
  stream: null,
  youtube: null,
  venue: {
    name: "Quad AI School of Technology and Business, Bengaluru",
    address: "27th Main Rd, beside RBIH, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102",
  },
  // Supplied key art for event 6.
  image: {
    src: "/images/live/quantumx-summit.jpg",
    alt: "Qiskit Fall Fest 2026 #6, QuantumX Summit, 28th November",
    width: 800,
    height: 800,
  },
};
