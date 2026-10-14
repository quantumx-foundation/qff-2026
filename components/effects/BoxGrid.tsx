"use client";

import { useRef, type ComponentProps, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

/**
 * A `.box-grid` surface whose lines glow violet around the pointer.
 *
 * The drawing is all CSS (see `.box-grid` in globals.css); this only writes
 * the pointer position into --mx/--my, once per frame, and toggles --glow.
 * Touch drags count as pointer moves, so the glow follows a finger too.
 */
export function BoxGrid({ className, children, ...rest }: ComponentProps<"div">) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${clientX - rect.left}px`);
      el.style.setProperty("--my", `${clientY - rect.top}px`);
      el.style.setProperty("--glow", "1");
    });
  }

  function onPointerLeave() {
    cancelAnimationFrame(frame.current);
    ref.current?.style.setProperty("--glow", "0");
  }

  return (
    <div
      ref={ref}
      className={cn("box-grid", className)}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      {...rest}
    >
      {children}
    </div>
  );
}
