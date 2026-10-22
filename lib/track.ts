import { sendGAEvent } from "@next/third-parties/google";
import type { ProgramDay } from "@/types/event";

/**
 * GA4 click tracking for the program board.
 *
 * Every outbound program link fires one `program_click` event carrying a
 * stable `track_id` (e.g. `prog_e2_register`), so marketing can count clicks
 * per button. The same id is written to the element as `data-track-id` and
 * into the destination as `utm_content`, so a Luma registration can be traced
 * back to the button that sent it. The id list marketing works from is the
 * README's "Program click tracking" table; keep the two in step.
 */

export type ProgramLink = "register" | "luma_past" | "apply" | "watch" | "guide";

/** "event-2" → "e2". */
const short = (day: ProgramDay) => day.id.replace("event-", "e");

export const programTrackId = (day: ProgramDay, link: ProgramLink | "agenda") =>
  `prog_${short(day)}_${link}`;

/** Tags an outbound URL so Luma and Tally attribute the visit to this site. */
export function withUtm(href: string, trackId: string) {
  try {
    const url = new URL(href);
    url.searchParams.set("utm_source", "qff26_website");
    url.searchParams.set("utm_medium", "program");
    url.searchParams.set("utm_campaign", "qff26");
    url.searchParams.set("utm_content", trackId);
    return url.toString();
  } catch {
    return href;
  }
}

export function trackProgramClick(
  day: ProgramDay,
  link: ProgramLink,
  href: string,
) {
  sendGAEvent("event", "program_click", {
    track_id: programTrackId(day, link),
    program_event: day.id,
    program_title: day.title ?? day.label,
    link_type: link,
    link_url: href,
  });
}

/** Board-level interactions that are not links: filters and agenda toggles. */
export function trackProgramUi(trackId: string, params: Record<string, string> = {}) {
  sendGAEvent("event", "program_ui", { track_id: trackId, ...params });
}
