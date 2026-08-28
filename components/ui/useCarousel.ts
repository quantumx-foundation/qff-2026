"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Horizontal carousel behaviour shared by the ecosystem, speaker, community and
 * announcement rails.
 *
 * Scrolling is native, so touch swipe, trackpad and keyboard scrolling all work
 * without a gesture library; the prev/next controls simply page the scroller by
 * one card. Respects reduced motion by skipping smooth scrolling.
 */
export function useCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const sync = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", sync);
      observer.disconnect();
    };
  }, [sync]);

  const page = useCallback((direction: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const step = first
      ? first.getBoundingClientRect().width + 28
      : el.clientWidth * 0.8;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({
      left: step * direction,
      behavior: reduced ? "auto" : "smooth",
    });
  }, []);

  return {
    ref,
    canPrev,
    canNext,
    prev: () => page(-1),
    next: () => page(1),
  };
}
