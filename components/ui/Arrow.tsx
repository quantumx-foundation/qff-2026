import { cn } from "@/lib/utils";

/**
 * The diagonal arrow used on every outbound control in the reference. Drawn
 * rather than typed so its weight matches the mono label beside it and it can
 * translate on hover.
 */
export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={cn("h-[0.85em] w-[0.85em] shrink-0", className)}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
}
