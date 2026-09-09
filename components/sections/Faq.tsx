"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { PendingNote } from "@/components/ui/SectionLabel";
import { faq } from "@/data/faq";
import { event } from "@/data/event";
import { cn } from "@/lib/utils";

/**
 * FAQ.
 *
 * Large title in the left column, accordion in the right, separated by thin
 * rules with a square plus/minus control, the reference layout exactly. One
 * item open at a time; the first opens by default.
 *
 * Answers state the current position rather than asserting unconfirmed facts,
 * and every entry is flagged for replacement with approved copy.
 */
export function Faq() {
  const [openId, setOpenId] = useState<string | null>(faq[0]?.id ?? null);
  const reduced = useReducedMotion();

  if (!faq.length) return null;

  return (
    <section id="faq" aria-labelledby="faq-heading" className="section bg-ground">
      <div className="container-wide grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,14rem)_1fr] lg:gap-16">
        <h2 id="faq-heading" className="text-h2">
          FAQ
        </h2>

        <ul className="flex flex-col">
          {faq.map((item) => {
            const open = item.id === openId;
            return (
              <li
                key={item.id}
                className="hairline-t last:border-b last:border-[var(--border)]"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : item.id)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${item.id}`}
                    id={`faq-trigger-${item.id}`}
                    className="group flex w-full items-start justify-between gap-6 py-6 text-left lg:py-7"
                  >
                    <span className="text-faq text-ink">
                      {item.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className={cn(
                        "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border transition-colors duration-200",
                        open
                          ? "border-transparent bg-surface-2 text-ink"
                          : "border-[var(--border)] text-ink group-hover:border-ink",
                      )}
                    >
                      <span className="relative block h-3 w-3">
                        <span className="absolute left-0 top-1/2 h-[1.5px] w-3 -translate-y-1/2 bg-current" />
                        <span
                          className={cn(
                            "absolute left-1/2 top-0 h-3 w-[1.5px] -translate-x-1/2 bg-current transition-opacity duration-200",
                            open ? "opacity-0" : "opacity-100",
                          )}
                        />
                      </span>
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      key="panel"
                      id={`faq-panel-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: reduced ? 0.01 : 0.32,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 pr-14">
                        <p className="text-body max-w-[62ch]">{item.answer}</p>

                        {/* Destinations the answer names, so the reader can act
                            without hunting for the section it describes. A key
                            whose URL is null is skipped, not rendered dead. */}
                        {item.links?.length ? (
                          <ul className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-3">
                            {item.links.map((link) => {
                              const href = event.urls[link.href];
                              if (!href) return null;
                              const external = href.startsWith("http");
                              return (
                                <li key={link.label}>
                                  <Link
                                    href={href}
                                    {...(external
                                      ? {
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                        }
                                      : {})}
                                    className="group inline-flex items-center gap-1.5 label-mono-sm font-bold text-ink transition-opacity duration-200 hover:opacity-60"
                                  >
                                    {link.label.toUpperCase()}
                                    <Arrow className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        ) : null}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}

          {faq.some((item) => !item.confirmed) ? (
            <li className="pt-8">
              <PendingNote>Answers pending final approval</PendingNote>
            </li>
          ) : null}
        </ul>
      </div>
    </section>
  );
}
