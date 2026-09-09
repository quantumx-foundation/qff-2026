"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { ImageTreatment } from "@/components/effects/ImageTreatment";
import { PendingNote } from "@/components/ui/SectionLabel";
import type { Accent, ProgramDay } from "@/types/event";
import { cn } from "@/lib/utils";

/**
 * One event on the program board.
 *
 * Poster-led rather than a table row: the date and the title are the two
 * things a visitor scans for, so they are the two largest elements, and the
 * Luma link is a real button on every card instead of one shared CTA hidden
 * behind a tab. The agenda is folded away, it is detail for someone
 * already interested, and it was previously what made the section long.
 *
 * Where an event has no key art, the tile is drawn from the brand palette with
 * the event's own index and date. It is a generated surface, not a stand-in
 * for artwork that exists: nothing on it claims content the data does not have.
 */

/** Flat brand grounds for the generated tile, one per accent role. */
const TILE: Record<Accent, string> = {
  pink: "linear-gradient(152deg, #f9a6cd 0%, #f37eb5 52%, #d85f99 100%)",
  indigo: "linear-gradient(152deg, #7b81e6 0%, #5057d6 52%, #3a40ad 100%)",
  plum: "linear-gradient(152deg, #4d2c8f 0%, #30195b 52%, #1d0f38 100%)",
};

/** Ink that clears AA on each of the three tiles. */
const TILE_INK: Record<Accent, string> = {
  pink: "#30195b",
  indigo: "#ffffff",
  plum: "#d7e4ff",
};

const RULE: Record<Accent, string> = {
  pink: "bg-qff-pink",
  indigo: "bg-qff-indigo",
  plum: "bg-qff-plum",
};

export function ProgramCard({ day }: { day: ProgramDay }) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  const detailId = `program-detail-${day.id}`;
  const headingId = `program-card-${day.id}`;
  const hasSessions = day.sessions.length > 0;

  return (
    <article
      aria-labelledby={headingId}
      className="group hairline flex h-full flex-col bg-raised"
    >
      {/* Key art, or the generated brand tile until artwork is confirmed. */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {day.media ? (
          <ImageTreatment
            media={day.media}
            untreated
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
            className="h-full w-full"
          />
        ) : (
          <div
            aria-hidden="true"
            className="noise absolute inset-0 flex flex-col justify-end p-5"
            style={{
              background: TILE[day.accent],
              color: TILE_INK[day.accent],
            }}
          >
            <span className="num-display text-[clamp(2.5rem,7vw,4rem)] leading-none">
              {day.dateLabel.toUpperCase()}
            </span>
          </div>
        )}
      </div>

      <div aria-hidden="true" className={cn("h-1 w-full", RULE[day.accent])} />

      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <p className="label-mono-sm text-dim">
          {day.dateLabel.toUpperCase()}
          {day.location ? ` · ${day.location.toUpperCase()}` : ""}
        </p>

        {/* Sits in the card body rather than on the tile so it survives an
            event supplying its own key art. */}
        {day.isPrivate ? (
          <span className="label-mono-sm hairline mt-3 w-fit px-2 py-1 font-bold text-dim">
            PRIVATE EVENT
          </span>
        ) : null}

        {day.title ? (
          <h3 id={headingId} className="text-card-title mt-3 text-ink">
            {day.title}
          </h3>
        ) : (
          <span id={headingId} className="sr-only">
            {day.label}
          </span>
        )}

        {day.description ? (
          <p className="text-body mt-3">{day.description}</p>
        ) : null}

        {/* Pushes the actions to the card foot so a row of cards lines up. */}
        <div className="mt-6 flex flex-1 flex-col justify-end gap-4">
          {hasSessions ? (
            <div>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls={detailId}
                className="inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap border border-ink px-5 py-3 label-mono font-bold text-ink transition-colors duration-200 hover:bg-inverse hover:text-on-inverse"
              >
                <span
                  aria-hidden="true"
                  className="relative block h-2.5 w-2.5 shrink-0"
                >
                  <span className="absolute left-0 top-1/2 h-[1.5px] w-2.5 -translate-y-1/2 bg-current" />
                  {!open ? (
                    <span className="absolute left-1/2 top-0 h-2.5 w-[1.5px] -translate-x-1/2 bg-current" />
                  ) : null}
                </span>
                {open ? "Hide agenda" : "View agenda"}
              </button>

              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    id={detailId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: reduced ? 0.01 : 0.32,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <ol className="mt-4 flex flex-col">
                      {day.sessions.map((session, i) => (
                        <li
                          key={`${day.id}-${i}`}
                          className="hairline-t py-3 last:border-b last:border-[var(--border)]"
                        >
                          <div className="flex gap-3">
                            <span className="label-mono-sm shrink-0 pt-[3px] text-dim">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <div>
                              <p className="text-ink">{session.title}</p>
                              {/* An unconfirmed row says so rather than
                                  showing a blank where a name belongs. */}
                              {session.speaker || !session.confirmed ? (
                                <p className="label-mono-sm mt-1 text-dim">
                                  {session.speaker ?? "SPEAKER TBA"}
                                </p>
                              ) : null}
                              {session.detail ? (
                                <p className="text-body mt-1.5">
                                  {session.detail}
                                </p>
                              ) : null}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ) : null}

          {/* Shown beside an agenda too, not only in place of one, so an
              event can publish its rows and still flag them as provisional. */}
          {day.note ? <PendingNote>{day.note}</PendingNote> : null}

          {day.registrationUrl ? (
            <Button href={day.registrationUrl} className="w-full">
              Register
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
