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
  image: { src: string; alt: string; width: number; height: number };
};

export const liveEvent: LiveEvent = {
  title: "QFF 2026: Foundations of Quantum Computing X Girls In Quantum",
  startsAt: "2026-10-17T19:00:00+05:30",
  endsAt: "2026-10-17T20:30:00+05:30",
  opensAt: "2026-10-17T18:45:00+05:30",
  joinLabel: "6:45 pm IST",
  dateLabel: "Saturday, 17 October",
  timeLabel: "7:00 pm – 8:30 pm IST",
  registration: "https://luma.com/8jpgnkcg",
  // Google Meet for this session. ?authuser=1 dropped from the shared link: it
  // picks the sender's second Google account and can misroute a visitor.
  stream: "https://meet.google.com/eez-iwqj-kwr",
  // Self-hosted from the Luma cover (images.lumacdn.com/.../c9b09d1e-...png):
  // the privacy page states images are served from this domain.
  image: {
    src: "/images/live/foundations-girls-in-quantum.jpg",
    alt: "QFF 2026: Foundations of Quantum Computing X Girls In Quantum",
    width: 800,
    height: 800,
  },
};
