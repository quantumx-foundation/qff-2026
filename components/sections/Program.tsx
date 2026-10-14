import { SectionLabel, PendingNote } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramBoard } from "@/components/sections/ProgramBoard";
import { program, programIntro } from "@/data/program";

/**
 * Program board.
 *
 * Replaced the tabbed schedule table on 9 September 2026: with five events on
 * separate dates and separate Luma pages, tabs hid four fifths of the program
 * behind a click and left one shared CTA that could only point at whichever
 * event happened to be selected. A board shows every event at once and gives each
 * its own Register button, which is the click that matters.
 *
 * Upcoming / Past / All filters were added on 14 October 2026, once the
 * first event had run. They split by date rather than hide anything: All still
 * shows the whole series, and Upcoming is the default because it is the list
 * a visitor can still act on.
 *
 * The section is a server component; the filters and the per-card agenda
 * toggle are the interactive parts, in `ProgramBoard` and `ProgramCard`.
 */
/**
 * When this module was evaluated, i.e. build time on a static deploy. The board
 * splits Upcoming / Past by it in the HTML, then by the browser clock.
 */
const RENDERED_AT = Date.now();

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

        <ProgramBoard program={program} renderedAt={RENDERED_AT} />

        {pending ? (
          <PendingNote className="mt-10">{programIntro.note}</PendingNote>
        ) : null}
      </div>
    </section>
  );
}
