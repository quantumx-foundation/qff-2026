"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { PendingNote } from "@/components/ui/SectionLabel";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { CarouselTrack } from "@/components/ui/CarouselTrack";
import { useCarousel } from "@/components/ui/useCarousel";
import { AnnouncementCard } from "@/components/ui/AnnouncementCard";
import { announcements } from "@/data/announcements";

/**
 * Latest updates.
 *
 * Three across on desktop with prev/next controls at the top right; the same
 * row becomes a swipeable rail below the large breakpoint.
 */
export function Announcements() {
  const carousel = useCarousel();
  if (!announcements.length) return null;

  return (
    <section aria-labelledby="announcements-heading" className="section bg-qff-black">
      <div className="container-wide">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            id="announcements-heading"
            lines={["Latest announcements"]}
          />
          <div className="hidden items-center gap-3 md:flex">
            <ArrowButton
              direction="prev"
              label="Previous announcements"
              onClick={carousel.prev}
              disabled={!carousel.canPrev}
            />
            <ArrowButton
              direction="next"
              label="More announcements"
              onClick={carousel.next}
              disabled={!carousel.canNext}
            />
          </div>
        </div>
      </div>

      <div className="mt-10 lg:mt-12">
        <CarouselTrack
          trackRef={carousel.ref}
          label="Latest announcements"
          className="px-[var(--pad)]"
        >
          {announcements.map((item) => (
            <div
              key={item.id}
              className="w-[80vw] shrink-0 snap-start sm:w-[46vw] lg:w-[calc((100vw-2*var(--pad)-3.5rem)/3)]"
            >
              <AnnouncementCard item={item} />
            </div>
          ))}
        </CarouselTrack>
      </div>

      {announcements.some((a) => !a.confirmed) ? (
        <div className="container-wide mt-10">
          <PendingNote>Announcements to be published</PendingNote>
        </div>
      ) : null}
    </section>
  );
}
