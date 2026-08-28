import type { ProgramDay } from "@/types/event";
import { TBD } from "@/types/event";

/**
 * Program / agenda.
 *
 * project.md section 14 permits mock placeholder data, clearly marked for
 * replacement. No session titles, speakers or tracks are invented: each row is
 * a structural placeholder that demonstrates the layout and is replaced
 * wholesale when the agenda is confirmed.
 */
const placeholderSessions = (count: number) =>
  Array.from({ length: count }, () => ({
    time: TBD,
    title: "[SESSION TO BE ANNOUNCED]",
    type: TBD,
    speaker: null,
    track: null,
    detail: null,
    confirmed: false,
  }));

export const program: ProgramDay[] = [
  {
    id: "day-1",
    label: "Day 01",
    dateLabel: TBD,
    sessions: placeholderSessions(4),
  },
  {
    id: "day-2",
    label: "Day 02",
    dateLabel: TBD,
    sessions: placeholderSessions(4),
  },
  {
    id: "day-3",
    label: "Day 03",
    dateLabel: TBD,
    sessions: placeholderSessions(3),
  },
];

export const programIntro = {
  label: "PROGRAM",
  heading: ["Three days of", "research and build"],
  note: "FULL AGENDA TO BE ANNOUNCED",
};
