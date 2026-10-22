"use client";

import { useEffect, useRef, useSyncExternalStore, type KeyboardEvent, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Tab bar and views for /kochi-hack.
 *
 * Every panel is rendered on the server and stays in the document; inactive
 * ones are only `hidden`, so search engines and find-in-page still see the
 * whole brief. The active tab lives in the URL hash, which keeps `#challenges`
 * links (the hero button, a shared URL) opening the right view. Arrow keys,
 * Home and End move between tabs, per the WAI-ARIA tabs pattern.
 */

type Tab = { id: string; label: string; panel: ReactNode };

// The hash is the source of truth. Tab clicks rewrite it with replaceState,
// which fires no event, so they notify subscribers themselves.
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("hashchange", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("hashchange", onChange);
  };
}

const readHash = () => window.location.hash.slice(1);

export function HackTabs({ tabs }: { tabs: Tab[] }) {
  const hash = useSyncExternalStore(subscribe, readHash, () => "");
  const active = tabs.some((t) => t.id === hash) ? hash : tabs[0]?.id;
  const reduced = useReducedMotion();
  const barRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // A link elsewhere on the page (the hero's "See the challenges") changes
  // the hash; bring the bar up so the reader sees the view it opened.
  useEffect(() => {
    const onHash = () => {
      if (tabs.some((t) => t.id === readHash())) {
        barRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [tabs, reduced]);

  // Keep the active tab in view when the strip scrolls sideways on phones.
  useEffect(() => {
    if (active) tabRefs.current[active]?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [active]);

  function select(id: string, focus = false) {
    window.history.replaceState(null, "", `#${id}`);
    listeners.forEach((notify) => notify());
    if (focus) tabRefs.current[id]?.focus();
    // Start the new view at its top rather than mid-way down the old one.
    const bar = barRef.current;
    if (bar && bar.getBoundingClientRect().top < 0) bar.scrollIntoView();
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const i = tabs.findIndex((t) => t.id === active);
    const next =
      e.key === "ArrowRight" ? (i + 1) % tabs.length
      : e.key === "ArrowLeft" ? (i - 1 + tabs.length) % tabs.length
      : e.key === "Home" ? 0
      : e.key === "End" ? tabs.length - 1
      : null;
    if (next === null) return;
    e.preventDefault();
    select(tabs[next].id, true);
  }

  return (
    <>
      <div ref={barRef} className="hairline-b sticky top-0 z-20 scroll-mt-0 bg-ground">
        <div
          role="tablist"
          aria-label="Hack Day guide"
          onKeyDown={onKeyDown}
          className="container-editorial no-scrollbar flex gap-1 overflow-x-auto py-2.5 pr-16 [mask-image:linear-gradient(to_right,#000_85%,transparent)] lg:pr-[var(--pad)] lg:[mask-image:none]"
        >
          {tabs.map((tab) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[tab.id] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(tab.id)}
                className={cn(
                  "group relative shrink-0 px-4 py-2.5 label-mono font-bold transition-colors duration-200",
                  selected ? "text-on-inverse" : "text-muted hover:bg-surface hover:text-ink",
                )}
              >
                {/* The active block slides between tabs; the site's primary
                    button fill, with a pink keyline along its foot. */}
                {selected ? (
                  <motion.span
                    layoutId="hack-tab-indicator"
                    aria-hidden="true"
                    transition={{ duration: reduced ? 0 : 0.32, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 bg-inverse shadow-[inset_0_-3px_0_var(--color-accent)]"
                  />
                ) : null}
                <span className="relative">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="container-editorial pb-20 sm:pb-28">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            hidden={tab.id !== active}
            tabIndex={0}
            className="focus-visible:outline-offset-8"
          >
            {tab.panel}
          </div>
        ))}
      </div>
    </>
  );
}
