"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { SectionLabel, PendingNote } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { program, programIntro } from "@/data/program";
import { cn } from "@/lib/utils";

/**
 * Program.
 *
 * Day filter across the top, then an editorial schedule grid: time, session,
 * type and speaker as aligned columns on desktop, collapsing to a stacked
 * vertical schedule on mobile rather than a squeezed table. Rows with detail
 * copy expand in place.
 *
 * All rows are marked placeholders until the agenda is confirmed.
 */
export function Program() {
  const [dayId, setDayId] = useState(program[0]?.id);
  const [openRow, setOpenRow] = useState<string | null>(null);
  const reduced = useReducedMotion();

  if (!program.length) return null;
  const day = program.find((d) => d.id === dayId) ?? program[0];

  return (
    <section id="program" aria-labelledby="program-heading" className="section bg-qff-black">
      <div className="container-wide">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel>{programIntro.label}</SectionLabel>
            <SectionHeading
              id="program-heading"
              lines={programIntro.heading}
              className="mt-5"
            />
          </div>

          {/* Day filter */}
          <div role="tablist" aria-label="Program days" className="flex flex-wrap gap-2">
            {program.map((d) => {
              const selected = d.id === day.id;
              return (
                <button
                  key={d.id}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`program-panel-${d.id}`}
                  id={`program-tab-${d.id}`}
                  onClick={() => {
                    setDayId(d.id);
                    setOpenRow(null);
                  }}
                  className={cn(
                    "label-mono border px-4 py-2.5 font-bold transition-colors duration-200",
                    selected
                      ? "border-qff-white bg-qff-white text-qff-black"
                      : "border-[var(--border)] text-qff-white/70 hover:border-qff-white hover:text-qff-white",
                  )}
                >
                  {d.label.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          id={`program-panel-${day.id}`}
          aria-labelledby={`program-tab-${day.id}`}
          className="mt-12 lg:mt-16"
        >
          <p className="label-mono-sm text-qff-white/45">
            {day.dateLabel.toUpperCase()}
          </p>

          <ul className="mt-6 flex flex-col">
            {day.sessions.map((session, i) => {
              const rowId = `${day.id}-${i}`;
              const open = openRow === rowId;
              const expandable = Boolean(session.detail);

              return (
                <li
                  key={rowId}
                  className="hairline-t last:border-b last:border-[var(--border)]"
                >
                  <div
                    className={cn(
                      "grid grid-cols-1 items-start gap-2 py-6",
                      "lg:grid-cols-[130px_1fr_180px_200px_48px] lg:items-center lg:gap-6",
                    )}
                  >
                    <span className="label-mono text-qff-white/55">
                      {session.time.toUpperCase()}
                    </span>

                    <span className="text-card-title text-qff-white">
                      {session.title}
                    </span>

                    <span className="label-mono-sm text-qff-white/45">
                      {session.type.toUpperCase()}
                    </span>

                    <span className="label-mono-sm text-qff-white/45">
                      {session.speaker ?? "SPEAKER TBA"}
                      {session.track ? ` · ${session.track.toUpperCase()}` : ""}
                    </span>

                    {expandable ? (
                      <button
                        type="button"
                        onClick={() => setOpenRow(open ? null : rowId)}
                        aria-expanded={open}
                        aria-controls={`program-detail-${rowId}`}
                        aria-label={
                          open
                            ? `Hide details for ${session.title}`
                            : `Show details for ${session.title}`
                        }
                        className="hidden h-8 w-8 items-center justify-center border border-[var(--border)] text-qff-white transition-colors duration-200 hover:border-qff-white hover:bg-qff-white hover:text-qff-black lg:flex"
                      >
                        <span aria-hidden="true" className="relative block h-3 w-3">
                          <span className="absolute left-0 top-1/2 h-[1.5px] w-3 -translate-y-1/2 bg-current" />
                          {!open ? (
                            <span className="absolute left-1/2 top-0 h-3 w-[1.5px] -translate-x-1/2 bg-current" />
                          ) : null}
                        </span>
                      </button>
                    ) : (
                      <span aria-hidden="true" className="hidden lg:block" />
                    )}
                  </div>

                  <AnimatePresence initial={false}>
                    {open && session.detail ? (
                      <motion.div
                        id={`program-detail-${rowId}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: reduced ? 0.01 : 0.32,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-body max-w-[62ch] pb-6 lg:pl-[154px]">
                          {session.detail}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <PendingNote className="mt-10">{programIntro.note}</PendingNote>
        </div>
      </div>
    </section>
  );
}
