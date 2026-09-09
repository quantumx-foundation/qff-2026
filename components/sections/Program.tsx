import { SectionLabel, PendingNote } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { Reveal } from "@/components/effects/Reveal";
import { program, programIntro } from "@/data/program";

/**
 * Program board.
 *
 * Replaced the tabbed schedule table on 9 September 2026: with five events on
 * separate dates and separate Luma pages, tabs hid four fifths of the program
 * behind a click and left one shared CTA that could only point at whichever
 * event happened to be selected. A board shows all five at once and gives each
 * its own Register button, which is the click that matters.
 *
 * The section is a server component; only the per-card running-order toggle is
 * interactive, so the state lives in `ProgramCard`.
 */
export function Program() {
  if (!program.length) return null;

  // Section-level note only where no event carries its own.
  const pending = program.some(
    (day) => day.sessions.some((s) => !s.confirmed) || day.title === null,
  );

  return (
    <section
      id="program"
      aria-labelledby="program-heading"
      className="section bg-surface"
    >
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

          <p className="label-mono-sm max-w-[34ch] text-dim">
            {programIntro.standfirst.toUpperCase()}
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {program.map((day, i) => (
            <Reveal as="li" key={day.id} index={i % 3} className="h-full">
              <ProgramCard day={day} />
            </Reveal>
          ))}
        </ul>

        {pending ? (
          <PendingNote className="mt-10">{programIntro.note}</PendingNote>
        ) : null}
      </div>
    </section>
  );
}
