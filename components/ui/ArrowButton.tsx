"use client";

import { cn } from "@/lib/utils";

/**
 * 48px square carousel control with a hairline border, matching the reference.
 * Sharp corners, no fill until hover.
 */
export function ArrowButton({
  direction,
  onClick,
  disabled,
  label,
  className,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled?: boolean;
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={cn(
        "inline-flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--border)] text-qff-white transition-colors duration-200",
        "hover:border-qff-white hover:bg-qff-white hover:text-qff-black",
        "disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-qff-white disabled:hover:border-[var(--border)]",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className={cn("h-4 w-4", direction === "prev" && "rotate-180")}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 12h15m-6.5-6.5L19 12l-6.5 6.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="square"
        />
      </svg>
    </button>
  );
}
