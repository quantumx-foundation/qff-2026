"use client";

import { useRef, type ComponentProps, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

/**
 * A `.box-grid` surface whose lines glow violet around the pointer.
 *
 * The drawing is all CSS (see `.box-grid` in globals.css); this only writes
 * the pointer position into --mx/--my, once per frame, and toggles --glow.
 * Touch drags count as pointer moves, so the glow follows a finger too.
 *
 * The glow is for the empty grid, so it fades out while the pointer is on or
 * within NEAR px of content: text, links, buttons, images. The check samples
 * the pointer and four points around it, so the glow clears before the cursor
 * reaches a line of copy rather than once it is already on it.
 */

const NEAR = 24;
const OFFSETS = [
  [0, 0],
  [NEAR, 0],
  [-NEAR, 0],
  [0, NEAR],
  [0, -NEAR],
] as const;

const MEDIA = "a, button, input, select, textarea, img, svg, video, canvas";

/** Does the box, grown by NEAR on every side, contain the point? */
const within = (r: DOMRect, x: number, y: number) =>
  x >= r.left - NEAR && x <= r.right + NEAR && y >= r.top - NEAR && y <= r.bottom + NEAR;

/**
 * True when the pointer is within NEAR px of drawn content. Measures the text
 * itself (a Range over each text node), not the block holding it, so the
 * empty space beside a short headline line still glows.
 */
function nearContent(x: number, y: number, root: HTMLElement) {
  const range = document.createRange();
  const seen = new Set<Element>();
  for (const [dx, dy] of OFFSETS) {
    for (let node = document.elementFromPoint(x + dx, y + dy); node && node !== root; node = node.parentElement) {
      if (seen.has(node)) break;
      seen.add(node);
      if (node.matches(MEDIA)) {
        if (within(node.getBoundingClientRect(), x, y)) return true;
        continue;
      }
      for (const child of node.childNodes) {
        if (child.nodeType !== Node.TEXT_NODE || !child.textContent?.trim()) continue;
        range.selectNodeContents(child);
        for (const r of range.getClientRects()) if (within(r, x, y)) return true;
      }
    }
  }
  return false;
}

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
      el.style.setProperty("--glow", nearContent(clientX, clientY, el) ? "0" : "1");
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
