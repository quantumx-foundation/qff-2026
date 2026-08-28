import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { bottomStaircase, HERO_STEPS, type StepSegment } from "@/lib/steps";

/**
 * Applies a hard-edged staircase clip to a media block. The reference uses
 * these on the hero, where the black page eats into the image and steps down
 * towards the right.
 *
 * Step depth reads from a CSS custom property, so it scales per breakpoint;
 * callers own the positioning, and this element is the containing block for
 * anything absolutely positioned inside it.
 */
export function SteppedMedia({
  children,
  className,
  unit = "var(--hero-step)",
  segments = HERO_STEPS,
}: {
  children: ReactNode;
  className?: string;
  /** CSS length expression for one step. */
  unit?: string;
  segments?: StepSegment[];
}) {
  return (
    <div
      className={cn(className)}
      style={{ clipPath: bottomStaircase(segments, unit) }}
    >
      {children}
    </div>
  );
}
