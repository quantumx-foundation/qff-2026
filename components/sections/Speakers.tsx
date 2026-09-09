import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/effects/Reveal";
import { SpeakerCard } from "@/components/ui/SpeakerCard";
import { SpeakerCtaCard } from "@/components/ui/SpeakerCtaCard";
import { speakers, speakersIntro } from "@/data/speakers";
import { event } from "@/data/event";
import type { Treatment } from "@/types/event";

/**
 * Speakers grid.
 *
 * The roster is laid out in full rather than on a rail: at this size every
 * confirmed speaker is visible at once, with no horizontal scroll to discover.
 * Only approved people are named; the grid closes on an open CTA card rather
 * than on invented holding slots, so the last cell always reads as "more to
 * come" instead of leaving a ragged row.
 */

const TREATMENTS: Treatment[] = ["plum", "pink", "indigo", "mono"];

export function Speakers() {
  if (!speakers.length) return null;

  return (
    <section id="speakers" aria-labelledby="speakers-heading" className="section bg-ground">
      <div className="container-wide">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel>{speakersIntro.label}</SectionLabel>
            <SectionHeading
              id="speakers-heading"
              lines={speakersIntro.heading}
              className="mt-5"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              href={event.urls[speakersIntro.pastCta.href]}
              variant="secondary"
            >
              {speakersIntro.pastCta.label}
            </Button>
            <Button href={event.urls[speakersIntro.cta.href]} variant="secondary">
              {speakersIntro.cta.label}
            </Button>
          </div>
        </div>

        {/* Cards top-align so the CTA panel, which carries no caption beneath
            it, sits flush with the portraits in its row. */}
        {/* Two up from the smallest width: a single column turned six cards
            plus the CTA into an unreasonably long scroll on a phone. Gutters
            are tighter below sm so the narrower cards keep their image ratio. */}
        <ul className="mt-12 grid grid-cols-2 items-start gap-x-4 gap-y-8 sm:gap-x-5 sm:gap-y-10 md:grid-cols-3 lg:mt-16 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-14">
          {speakers.map((speaker, i) => (
            <Reveal as="li" key={speaker.id} index={i}>
              <SpeakerCard
                speaker={speaker}
                treatment={speaker.treatment ?? TREATMENTS[i % TREATMENTS.length]}
              />
            </Reveal>
          ))}

          {/* Closing card: continues the positional treatment cycle. */}
          <Reveal as="li" index={speakers.length}>
            <SpeakerCtaCard
              treatment={TREATMENTS[speakers.length % TREATMENTS.length]}
              note={speakersIntro.more}
              cta={{
                label: speakersIntro.cta.label,
                href: event.urls[speakersIntro.cta.href],
              }}
            />
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
