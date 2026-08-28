import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * CSS-driven horizontal ticker. The children are rendered twice and the track
 * translates by exactly -50%, so the loop is seamless without a JS frame loop.
 * Pauses on hover/focus; fully disabled under prefers-reduced-motion.
 */

type Props = {
  children: ReactNode;
  /** Seconds for one full pass. */
  duration?: number;
  reverse?: boolean;
  className?: string;
  trackClassName?: string;
};

export function Marquee({
  children,
  duration = 60,
  reverse = false,
  className,
  trackClassName,
}: Props) {
  return (
    <div className={cn("marquee", className)}>
      <div
        className={cn("marquee-track", trackClassName)}
        data-direction={reverse ? "reverse" : undefined}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <div aria-hidden={false} className="flex shrink-0 items-center">
          {children}
        </div>
        <div aria-hidden="true" className="flex shrink-0 items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
