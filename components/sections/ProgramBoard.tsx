"use client";

import { useState, useSyncExternalStore } from "react";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { Reveal } from "@/components/effects/Reveal";
import type { ProgramDay } from "@/types/event";
import { cn } from "@/lib/utils";
import { trackProgramUi } from "@/lib/track";

/**
 * The filterable half of the program board: Upcoming (the default), Past and
 * All, so a visitor lands on what they can still register for.
 *
 * The page is static, so "now" is read in the browser. The server passes the
 * time it rendered at as `renderedAt`, and that is the server and hydration
 * snapshot: the HTML already splits the events as of the last build, then the
 * live clock takes over, so a stale deploy corrects itself without a mismatch.
 * The clock only needs to be right to the day, so it ticks once a minute.
 */

type Filter = "upcoming" | "past" | "all";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "upcoming", label: "Upcoming" },
  { id: "past", label: "Past" },
  { id: "all", label: "All events" },
];

let now = 0;
let timer: ReturnType<typeof setInterval> | null = null;
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  if (listeners.size === 1) {
    now = Date.now();
    timer = setInterval(() => {
      now = Date.now();
      for (const listener of listeners) listener();
    }, 60_000);
  }
  queueMicrotask(onChange);
  return () => {
    listeners.delete(onChange);
    if (listeners.size === 0 && timer) {
      clearInterval(timer);
      timer = null;
      now = 0;
    }
  };
}

/** An event has ended once its calendar day is over in India. */
const endsAt = (day: ProgramDay) => Date.parse(`${day.date}T23:59:59+05:30`);

export function ProgramBoard({
  program,
  renderedAt,
}: {
  program: ProgramDay[];
  renderedAt: number;
}) {
  const [filter, setFilter] = useState<Filter>("upcoming");
  const clock = useSyncExternalStore(
    subscribe,
    () => now || renderedAt,
    () => renderedAt,
  );

  const isPast = (day: ProgramDay) => clock > endsAt(day);
  const counts: Record<Filter, number> = {
    upcoming: program.filter((d) => !isPast(d)).length,
    past: program.filter(isPast).length,
    all: program.length,
  };
  const shown = program.filter((day) =>
    filter === "all" ? true : filter === "past" ? isPast(day) : !isPast(day),
  );

  return (
    <>
      <div
        role="group"
        aria-label="Filter events"
        className="mt-12 flex flex-wrap gap-2 lg:mt-16"
      >
        {FILTERS.map(({ id, label }) => {
          const active = filter === id;
          return (
            <button
              key={id}
              type="button"
              data-track-id={`prog_filter_${id}`}
              onClick={() => {
                trackProgramUi(`prog_filter_${id}`, { program_filter: id });
                setFilter(id);
              }}
              aria-pressed={active}
              aria-controls="program-board"
              className={cn(
                "inline-flex items-center gap-2 border px-4 py-2.5 label-mono font-bold transition-colors duration-200",
                active
                  ? "border-ink bg-inverse text-on-inverse"
                  : "border-[var(--border)] text-muted hover:border-ink hover:text-ink",
              )}
            >
              {label}
              <span className={cn("tabular-nums", active ? "opacity-70" : "text-dim")}>
                {String(counts[id]).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      {shown.length ? (
        <ul
          id="program-board"
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {shown.map((day, i) => (
            <Reveal as="li" key={day.id} index={i % 3} className="h-full">
              <ProgramCard day={day} past={isPast(day)} />
            </Reveal>
          ))}
        </ul>
      ) : (
        <p id="program-board" className="label-mono-sm mt-8 text-dim">
          {filter === "upcoming"
            ? "NO UPCOMING EVENTS. SEE PAST EVENTS FOR THE FULL SERIES."
            : "NO PAST EVENTS YET."}
        </p>
      )}
    </>
  );
}
