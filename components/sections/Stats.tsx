import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/effects/Reveal";
import { PendingNote } from "@/components/ui/SectionLabel";
import { Marquee } from "@/components/effects/Marquee";
import { ImageTreatment } from "@/components/effects/ImageTreatment";
import { stats, statsIntro } from "@/data/stats";
import { gallery } from "@/data/gallery";
import { cn } from "@/lib/utils";

/**
 * Statistics.
 *
 * Centred statement and CTA over three oversized figures set in the techno
 * display face with small mono labels beneath — the number dominates its label,
 * as in the reference. Figures are marked placeholders: project.md forbids
 * fabricating statistics.
 *
 * The full-bleed community strip below runs as a slow marquee of mixed aspect
 * ratios and duotones.
 */
export function Stats() {
  return (
    <section aria-labelledby="stats-heading" className="bg-qff-black pb-0">
      <div className="container-editorial pt-[var(--space-section)] text-center">
        <Reveal>
          <h2 id="stats-heading" className="text-h2 mx-auto max-w-[20ch]">
            {statsIntro.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <Reveal index={1}>
          <div className="mt-9 flex justify-center">
            <Button href={statsIntro.cta.href} variant="primary">
              {statsIntro.cta.label}
            </Button>
          </div>
        </Reveal>
      </div>

      <div className="container-wide mt-16 lg:mt-24">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal
              as="li"
              key={stat.label}
              index={i}
              className={cn(
                // Avoid an orphan in the two-column mobile grid.
                i === stats.length - 1 && stats.length % 2 === 1 && "col-span-2 sm:col-span-1",
              )}
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="num-display text-stat text-qff-white">
                  {stat.value}
                </span>
                <span className="label-mono max-w-[18ch] text-qff-white/85">
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

      {/* Full-bleed community strip */}
      <div className="mt-16 lg:mt-24">
        <Marquee duration={95} className="py-2">
          {gallery.map((slot, i) => (
            <div
              key={i}
              className="mr-5 h-[clamp(200px,24vw,420px)] shrink-0"
              // One height for the whole row; each frame takes its own width.
              style={{ aspectRatio: `${slot.media.width} / ${slot.media.height}` }}
            >
              <ImageTreatment
                media={slot.media}
                treatment={slot.treatment}
                sizes="(max-width: 768px) 60vw, 30vw"
                className="h-full w-full"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
