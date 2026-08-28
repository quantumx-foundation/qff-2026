"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "@/components/ui/BrandMark";
import { cn } from "@/lib/utils";

/**
 * Small fixed control in the bottom-right corner, as in the reference.
 * Scrolls back to the top; appears only once the page has been scrolled.
 */
export function FloatingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
        })
      }
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full",
        "border border-[var(--border)] bg-qff-black text-qff-white",
        "transition-all duration-300 hover:bg-qff-white hover:text-qff-black",
        visible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}
    >
      <BrandMark className="h-3.5" />
    </button>
  );
}
