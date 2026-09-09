"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { event, navigation } from "@/data/event";

/**
 * The folding half of the header.
 *
 * Matching the reference, the menu is not a full-screen overlay: it unfolds
 * directly beneath the header cluster, inside the same black panel, as a stack
 * of technical rows separated by thin rules. The page behind stays visible and
 * scrollable, so this is a disclosure rather than a modal.
 */

function RowArrow() {
  return (
    <svg
      viewBox="0 0 16 12"
      className="h-[0.7em] w-[0.95em] shrink-0 transition-transform duration-200 group-hover:translate-x-[3px]"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 6h13M9.5 1.5 14.5 6l-5 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function MenuPanel({
  open,
  id,
  onNavigate,
}: {
  open: boolean;
  id: string;
  onNavigate: () => void;
}) {
  const reduced = useReducedMotion();

  return (
    <AnimatePresence initial={false}>
      {open ? (
        <motion.nav
          key="panel"
          id={id}
          aria-label="Primary"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            duration: reduced ? 0.01 : 0.34,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="overflow-hidden"
        >
          {/* Caps the stack on short viewports rather than letting it run off. */}
          <div className="max-h-[min(60vh,26rem)] overflow-y-auto px-3">
            <ul>
              {navigation.map((item, i) => (
                <li
                  key={item.href}
                  className={i === 0 ? undefined : "border-t border-[var(--border)]"}
                >
                  {/* In-page jumps stay plain anchors: next/link would no-op
                      on the section you are already parked at. */}
                  <a
                    href={item.href}
                    onClick={onNavigate}
                    className="group flex items-center gap-3 py-[1.15rem] label-mono text-[0.8125rem] text-ink transition-colors duration-200 hover:text-accent"
                  >
                    {item.label.toUpperCase()}
                    <RowArrow />
                  </a>
                </li>
              ))}
            </ul>

            {/* Utility row closing the stack, mirroring the reference. */}
            <p className="border-t border-[var(--border)] py-[1.15rem] label-mono text-[0.8125rem] text-dim">
              {event.organisation.toUpperCase()}
            </p>
          </div>
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
}
