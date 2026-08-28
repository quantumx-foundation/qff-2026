"use client";

import { SectionLabel, PendingNote } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Button } from "@/components/ui/Button";
import { CarouselTrack } from "@/components/ui/CarouselTrack";
import { useCarousel } from "@/components/ui/useCarousel";
import { SpeakerCard } from "@/components/ui/SpeakerCard";
import { speakers, speakersIntro } from "@/data/speakers";
import { event } from "@/data/event";
import type { Treatment } from "@/types/event";

/**
 * Speakers rail.
 *
 * Horizontally scrolling on every breakpoint, with prev/next controls on
 * pointer devices and native swipe on touch. Names are explicit "to be
 * announced" slots: project.md forbids inventing speakers or affiliations.
 */

const TREATMENTS: Treatment[] = ["purple", "green", "blue", "mono"];

export function Speakers() {
  const carousel = useCarousel();
  if (!speakers.length) return null;

  return (
    <section id="speakers" aria-labelledby="speakers-heading" className="section bg-qff-black">
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

          <div className="flex items-center gap-3">
            <Button href={event.urls[speakersIntro.cta.href]} variant="secondary">
              {speakersIntro.cta.label}
            </Button>
            <div className="hidden items-center gap-3 md:flex">
              <ArrowButton
                direction="prev"
                label="Previous speakers"
                onClick={carousel.prev}
                disabled={!carousel.canPrev}
              />
              <ArrowButton
                direction="next"
                label="More speakers"
                onClick={carousel.next}
                disabled={!carousel.canNext}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 lg:mt-16">
        <CarouselTrack
          trackRef={carousel.ref}
          label="Speakers"
          className="px-[var(--pad)]"
        >
          {speakers.map((speaker, i) => (
            <div
              key={speaker.id}
              className="w-[72vw] shrink-0 snap-start sm:w-[46vw] lg:w-[23vw] lg:max-w-[360px]"
            >
              <SpeakerCard
                speaker={speaker}
                treatment={TREATMENTS[i % TREATMENTS.length]}
              />
            </div>
          ))}
        </CarouselTrack>
      </div>

      {speakers.some((s) => !s.confirmed) ? (
        <div className="container-wide mt-10">
          <PendingNote>Speakers to be announced</PendingNote>
        </div>
      ) : null}
    </section>
  );
}
