import { statement } from "@/data/hero";
import { Reveal } from "@/components/effects/Reveal";
import { PendingNote } from "@/components/ui/SectionLabel";

/**
 * Large editorial statement: a small technical label in the left column and the
 * statement itself in the right, breaking at roughly 38% of the page width as
 * in the reference. The opening fragment carries the purple accent.
 */
export function EditorialStatement() {
  return (
    <section id="about" className="section bg-qff-black">
      <div className="container-wide grid grid-cols-1 gap-10 lg:grid-cols-[38%_1fr] lg:gap-6">
        <Reveal>
          <p className="label-mono max-w-[26ch] text-qff-white/75">
            {statement.label}
          </p>
        </Reveal>

        <Reveal index={1}>
          <div>
            <p className="text-statement max-w-[36ch] text-qff-white">
              <span className="text-qff-purple">{statement.lead}</span>{" "}
              {statement.body}
            </p>
            {!statement.confirmed ? (
              <PendingNote className="mt-8">Copy pending approval</PendingNote>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
