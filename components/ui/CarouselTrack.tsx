"use client";

import type { ReactNode, RefObject } from "react";
import { cn } from "@/lib/utils";

/**
 * The scrolling rail itself. Cards bleed to the page edge on touch so the row
 * reads as continuing past the viewport, matching the reference.
 */
export function CarouselTrack({
  trackRef,
  children,
  label,
  className,
}: {
  trackRef: RefObject<HTMLDivElement | null>;
  children: ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div
      ref={trackRef}
      role="group"
      aria-label={label}
      tabIndex={0}
      className={cn(
        "no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth scroll-px-[var(--pad)] lg:gap-7",
        className,
      )}
    >
      {children}
    </div>
  );
}
