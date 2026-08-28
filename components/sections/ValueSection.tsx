"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ImageTreatment } from "@/components/effects/ImageTreatment";
import { PendingNote } from "@/components/ui/SectionLabel";
import { values } from "@/data/values";
import { event } from "@/data/event";
import { CORNER_STEPS, topStaircase } from "@/lib/steps";
import { cn } from "@/lib/utils";

/**
 * "Why QFF26".
 *
 * Centred heading over a two-column composition: editorial image on the left,
 * a list of value blocks on the right where the open item shows its body and
 * the others sit dimmed behind thin rules. Selecting an item swaps the image.
 *
 * The image carries a stepped top-right edge, one of the recurring geometric
 * devices in the reference.
 */

const IMAGE_CLIP = topStaircase(CORNER_STEPS, "var(--corner-step)");

const TREATMENTS = ["blue", "purple", "green", "blue"] as const;

export function ValueSection() {
  const [activeId, setActiveId] = useState(values[0]?.id);
  const reduced = useReducedMotion();
  const activeIndex = Math.max(0, values.findIndex((v) => v.id === activeId));
  const active = values[activeIndex];

  if (!values.length) return null;

  return (
    <section aria-labelledby="values-heading" className="section bg-qff-black">
      <div className="container-editorial">
        <h2 id="values-heading" className="text-h2 text-center">
          Why {event.shortName}
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          {/* Media */}
          <div className="relative min-h-[260px] lg:min-h-[520px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.id}
                className="absolute inset-0"
                style={{ clipPath: IMAGE_CLIP }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduced ? 0.15 : 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <ImageTreatment
                  media={active.media}
                  treatment={TREATMENTS[activeIndex % TREATMENTS.length]}
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="h-full w-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Blocks */}
          <ul className="flex flex-col">
            {values.map((block) => {
              const open = block.id === activeId;
              return (
                <li key={block.id} className="hairline-t last:border-b last:border-[var(--border)]">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setActiveId(block.id)}
                      aria-expanded={open}
                      aria-controls={`value-panel-${block.id}`}
                      className={cn(
                        "w-full py-6 text-left transition-colors duration-200",
                        open
                          ? "text-qff-white"
                          : "text-qff-white/45 hover:text-qff-white/80",
                      )}
                    >
                      <span className="text-h3 block">{block.title}</span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        id={`value-panel-${block.id}`}
                        key="panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: reduced ? 0.01 : 0.35,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7">
                          <p className="text-body max-w-[46ch]">{block.body}</p>
                          {!block.confirmed ? (
                            <PendingNote className="mt-5">
                              Copy pending approval
                            </PendingNote>
                          ) : null}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
