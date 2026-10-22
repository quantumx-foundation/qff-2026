"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * "Copy page" menu: copy the page as Markdown, or open the Markdown itself.
 *
 * The Markdown is fetched from `src` on demand rather than shipped in the
 * bundle. Safari only lets a click write to the clipboard synchronously, so
 * the fetch is handed to ClipboardItem as a promise; browsers without
 * ClipboardItem fall back to fetching first and calling writeText.
 */

function CopyIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5.5" y="5.5" width="8" height="8" />
      <path d="M10.5 5.5v-3h-8v8h3" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1.5 8s2.4-4.5 6.5-4.5S14.5 8 14.5 8 12.1 12.5 8 12.5 1.5 8 1.5 8Z" />
      <circle cx="8" cy="8" r="2" />
    </svg>
  );
}

async function copyFrom(src: string) {
  const text = () => fetch(src).then((r) => {
    if (!r.ok) throw new Error(String(r.status));
    return r.text();
  });
  if (typeof ClipboardItem !== "undefined" && navigator.clipboard?.write) {
    const blob = text().then((t) => new Blob([t], { type: "text/plain" }));
    await navigator.clipboard.write([new ClipboardItem({ "text/plain": blob })]);
  } else {
    await navigator.clipboard.writeText(await text());
  }
}

export function CopyPageMenu({ src, className }: { src: string; className?: string }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (status === "idle") return;
    const t = window.setTimeout(() => setStatus("idle"), 2000);
    return () => window.clearTimeout(t);
  }, [status]);

  async function onCopy() {
    try {
      await copyFrom(src);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    setOpen(false);
  }

  const item =
    "flex w-full items-center gap-3 px-4 py-3 text-left label-mono font-bold text-muted transition-colors duration-200 hover:bg-surface hover:text-ink";

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="hairline inline-flex items-center gap-2.5 bg-raised px-4 py-2.5 label-mono font-bold text-ink transition-colors duration-200 hover:border-ink"
      >
        <span aria-live="polite">
          {status === "copied" ? "Copied" : status === "failed" ? "Copy failed" : "Copy page"}
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 10 6"
          className={cn("h-1.5 w-2.5 transition-transform duration-200", open ? "rotate-180" : "")}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M1 1l4 4 4-4" />
        </svg>
      </button>

      {open ? (
        <div role="menu" className="hairline absolute right-0 top-full z-30 mt-2 w-60 bg-raised shadow-[0_12px_32px_-12px_rgba(48,25,91,0.25)]">
          <button type="button" role="menuitem" onClick={onCopy} className={item}>
            <CopyIcon />
            Copy as Markdown
          </button>
          <a
            role="menuitem"
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className={cn(item, "hairline-t")}
          >
            <EyeIcon />
            View as Markdown
          </a>
        </div>
      ) : null}
    </div>
  );
}
