"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { PendingNote } from "@/components/ui/SectionLabel";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Button } from "@/components/ui/Button";
import { CarouselTrack } from "@/components/ui/CarouselTrack";
import { useCarousel } from "@/components/ui/useCarousel";
import { EventCard } from "@/components/ui/EventCard";
import { ecosystemEvents, ecosystemIntro } from "@/data/ecosystem";
import { event } from "@/data/event";

/**
 * Ecosystem events rail.
 *
 * Left-aligned heading with a secondary CTA beneath and the prev/next controls
 * pinned to the right edge, exactly as in the reference. Cards bleed to the
 * page edge so the row reads as continuing beyond the viewport.
 */
export function EventCarousel() {
  const carousel = useCarousel();
  if (!ecosystemEvents.length) return null;

  return (
    <section id="events" aria-labelledby="events-heading" className="section bg-qff-black">
      <div className="container-wide">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionHeading id="events-heading" lines={ecosystemIntro.heading} />
            <div className="mt-8">
              <Button
                href={event.urls[ecosystemIntro.cta.href]}
                variant="secondary"
              >
                {ecosystemIntro.cta.label}
              </Button>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <ArrowButton
              direction="prev"
              label="Previous events"
              onClick={carousel.prev}
              disabled={!carousel.canPrev}
            />
            <ArrowButton
              direction="next"
              label="More events"
              onClick={carousel.next}
              disabled={!carousel.canNext}
            />
          </div>
        </div>
      </div>

      <div className="mt-12 lg:mt-14">
        <CarouselTrack
          trackRef={carousel.ref}
          label="Ecosystem events"
          className="px-[var(--pad)]"
        >
          {ecosystemEvents.map((item) => (
            <div
              key={item.id}
              className="w-[80vw] shrink-0 snap-start sm:w-[46vw] lg:w-[31vw] lg:max-w-[520px]"
            >
              <EventCard item={item} />
            </div>
          ))}
        </CarouselTrack>
      </div>

      {ecosystemEvents.some((e) => !e.confirmed) ? (
        <div className="container-wide mt-10">
          <PendingNote>Ecosystem events to be announced</PendingNote>
        </div>
      ) : null}
    </section>
  );
}
