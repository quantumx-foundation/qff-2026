"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Wordmark } from "@/components/ui/Wordmark";
import { Arrow } from "@/components/ui/Arrow";
import { MenuPanel } from "./MenuPanel";
import { event } from "@/data/event";
import { cn } from "@/lib/utils";

const PANEL_ID = "qff-menu-panel";

/**
 * Header.
 *
 * The reference does not justify the header to the page edges: it is a compact
 * cluster centred at the top of the viewport, and opening the menu unfolds it
 * into a single black panel rather than a full-screen overlay. Three states are
 * reproduced here:
 *
 *   at the top of the page - wordmark plate and menu trigger only
 *   scrolled               - the REGISTER control appears alongside
 *   open                   - the cluster widens into one panel, rows unfold
 *
 * Because the panel is a disclosure and not a modal, the page behind stays
 * scrollable; Escape and an outside click close it and return focus.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      e.preventDefault();
      close();
      triggerRef.current?.focus();
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!shellRef.current?.contains(e.target as Node)) close();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, close]);

  // The reference shows REGISTER whenever the panel is open, at any scroll
  // position.
  const showRegister = scrolled || open;
  const externalRegistration = event.urls.registration.startsWith("http");

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 sm:pt-5">
      <motion.div
        ref={shellRef}
        layout={reduced ? false : "size"}
        transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "pointer-events-auto flex flex-col bg-qff-black",
          open && "w-[min(92vw,29rem)] border border-[var(--border)] p-2",
        )}
      >
        <div className="flex items-stretch justify-between gap-2">
          <Link
            href="#top"
            aria-label={`${event.shortName} home`}
            onClick={close}
            className="flex items-center px-4 text-qff-white sm:px-5"
          >
            <Wordmark
              markClassName="h-[0.95em]"
              textClassName="text-[1.25rem] sm:text-[1.4rem]"
            />
          </Link>

          <div className="flex items-stretch gap-2">
            <AnimatePresence initial={false}>
              {showRegister ? (
                <motion.div
                  key="register"
                  className="flex items-stretch"
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={event.urls.registration}
                    target={externalRegistration ? "_blank" : undefined}
                    rel={externalRegistration ? "noopener noreferrer" : undefined}
                    className={cn(
                      "group items-center gap-2 bg-qff-white px-4 label-mono font-bold text-qff-black transition-colors duration-200 hover:bg-qff-purple",
                      open ? "flex" : "hidden sm:flex",
                    )}
                  >
                    Register
                    <Arrow className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                  </Link>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls={PANEL_ID}
              className="flex h-12 w-12 shrink-0 items-center justify-center bg-qff-surface text-qff-white transition-colors duration-200 hover:bg-qff-white hover:text-qff-black"
            >
              {open ? (
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M5 5l14 14M19 5L5 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              ) : (
                <span aria-hidden="true" className="flex flex-col gap-[5px]">
                  <span className="block h-[2px] w-[18px] bg-current" />
                  <span className="block h-[2px] w-[18px] bg-current" />
                </span>
              )}
            </button>
          </div>
        </div>

        <MenuPanel open={open} id={PANEL_ID} onNavigate={close} />
      </motion.div>
    </header>
  );
}
