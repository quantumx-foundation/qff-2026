import { statement } from "@/data/hero";
import { stats, statsIntro } from "@/data/stats";
import { Reveal } from "@/components/effects/Reveal";
import { PendingNote } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

/**
 * Large editorial statement: a small technical label in the left column and the
 * statement itself in the right, breaking at roughly 38% of the page width as
 * in the reference. The opening fragment carries the brand accent.
 *
 * The three headline figures close the band. They used to run as a section of
 * their own with a heading and a CTA repeating the ones above them, which cost
 * a full screen of scroll for three numbers; folded in here they keep the
 * emphasis without the second heading.
 */
export function EditorialStatement() {
  return (
    <section id="about" className="section bg-ground">
      <div className="container-wide grid grid-cols-1 gap-10 lg:grid-cols-[38%_1fr] lg:gap-6">
        <Reveal>
          <p className="label-mono max-w-[26ch] text-muted">
            {statement.label}
          </p>
        </Reveal>

        <Reveal index={1}>
          <div>
            <p className="text-statement max-w-[36ch] text-ink">
              <span className="text-accent">{statement.lead}</span>{" "}
              {statement.body}
            </p>
            {!statement.confirmed ? (
              <PendingNote className="mt-8">Copy pending approval</PendingNote>
            ) : null}
          </div>
        </Reveal>
      </div>

      {/* Bound to the statement by a rule rather than floated below it: three
          numerals adrift in open ground read as a gap, not as a band. */}
      {stats.length ? (
        <div className="container-wide mt-12 lg:mt-16">
          <ul className="hairline-t grid grid-cols-2 gap-x-6 gap-y-10 pt-12 sm:grid-cols-3 lg:pt-14">
            {stats.map((stat, i) => (
              <Reveal
                as="li"
                key={stat.label}
                index={i}
                className={cn(
                  // Avoid an orphan in the two-column mobile grid.
                  i === stats.length - 1 &&
                    stats.length % 2 === 1 &&
                    "col-span-2 sm:col-span-1",
                )}
              >
                <div className="flex flex-col items-center gap-2 text-center">
                  <span className="num-display text-stat text-accent-2">
                    {stat.value}
                  </span>
                  <span className="label-mono max-w-[18ch] text-muted">
                    {stat.label.toUpperCase()}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>

          {stats.some((s) => !s.confirmed) ? (
            <div className="mt-12 flex justify-center">
              <PendingNote>{statsIntro.note}</PendingNote>
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
