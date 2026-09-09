import Image from "next/image";
import { Reveal } from "@/components/effects/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { hostBand } from "@/data/host";

/**
 * Host band.
 *
 * The three elements are centred as one group rather than pushed to the
 * container's edges, so the composition reads as a lockup, IBM's programme on
 * the left, the host on the right, rather than as two marks with a gap. The
 * line is given room for a single row at this size. Both marks are wide
 * wordmarks of near-identical aspect, so one shared height sets them at
 * matching optical weight without the per-mark sizing the partner roster needs.
 *
 * Below `md` the row wraps by reordering rather than by duplicating a mark:
 * the two logos hold their row and the line drops beneath them, which keeps
 * the pairing legible at the width where a three-column split would squeeze
 * the line to a few words per row.
 */
const { label, lead, accent, marks } = hostBand;

function Mark({ name, logo }: (typeof marks)["host"]) {
  return (
    <Image
      src={logo.src}
      alt={name}
      width={logo.width}
      height={logo.height}
      className="h-6 w-auto shrink-0 sm:h-7 lg:h-9"
    />
  );
}

export function HostBand() {
  return (
    <section aria-labelledby="host-heading" className="on-dark section-tight bg-ground">
      <div className="container-wide">
        <Reveal>
          <SectionLabel className="text-center">{label}</SectionLabel>
        </Reveal>

        <Reveal index={1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-10 md:flex-nowrap md:gap-x-14 lg:mt-12 lg:gap-x-20">
            <Mark {...marks.programme} />

            <h2
              id="host-heading"
              className="text-card-title order-last w-full text-balance text-center text-ink md:order-none md:w-auto md:max-w-[42ch]"
            >
              {lead} <span className="text-accent">{accent}</span>
            </h2>

            <Mark {...marks.host} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
