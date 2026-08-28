"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { SectionLabel, PendingNote } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { ImageTreatment } from "@/components/effects/ImageTreatment";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { testimonials, testimonialsIntro } from "@/data/testimonials";

/**
 * Community quotes.
 *
 * Heading and controls occupy the left column; the right carries a treated
 * image with a white quote panel laid over it — a printed editorial card on a
 * digital background, as in the reference. Quotes are placeholders: project.md
 * forbids inventing testimonials.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  if (!testimonials.length) return null;

  const current = testimonials[index];
  const many = testimonials.length > 1;
  const go = (delta: number) =>
    setIndex((i) => (i + delta + testimonials.length) % testimonials.length);

  return (
    <section aria-labelledby="community-heading" className="section bg-qff-black">
      <div className="container-wide grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
        {/* Left column */}
        <div>
          <SectionLabel>{testimonialsIntro.label}</SectionLabel>
          <SectionHeading
            id="community-heading"
            lines={testimonialsIntro.heading}
            className="mt-5 max-w-[16ch]"
          />

          {many ? (
            <div className="mt-9 flex items-center gap-3">
              <ArrowButton
                direction="prev"
                label="Previous quote"
                onClick={() => go(-1)}
              />
              <ArrowButton
                direction="next"
                label="Next quote"
                onClick={() => go(1)}
              />
            </div>
          ) : null}

          {!current.confirmed ? (
            <PendingNote className="mt-9">
              Awaiting approved community quotes
            </PendingNote>
          ) : null}
        </div>

        {/* Right composition */}
        <div className="relative">
          <div className="relative min-h-[420px] lg:min-h-[540px]">
            <div className="absolute inset-0">
              <ImageTreatment
                media={current.media}
                treatment="purple"
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="h-full w-full"
              />
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={current.id}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-4 top-8 flex min-h-[300px] flex-col justify-between bg-qff-white p-6 text-qff-black sm:top-14 sm:right-10 sm:left-16 sm:p-9 lg:min-h-[360px]"
              >
                <blockquote className="text-quote">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-10 flex items-center gap-3">
                  {current.handle ? (
                    <SocialIcon icon="x" className="h-5 w-5 shrink-0" />
                  ) : null}
                  <div>
                    {current.handle ? (
                      <p className="text-[1.05rem] font-bold underline underline-offset-4">
                        {current.handle}
                      </p>
                    ) : null}
                    <p className="label-mono-sm mt-1 text-qff-black/70">
                      {current.name.toUpperCase()}
                      {current.role ? ` · ${current.role.toUpperCase()}` : ""}
                    </p>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
