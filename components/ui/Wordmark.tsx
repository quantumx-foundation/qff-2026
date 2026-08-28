import { BrandMark } from "./BrandMark";
import { cn } from "@/lib/utils";
import { event } from "@/data/event";

/**
 * Lockup used in the header and menu overlay: mark plus the compact event
 * identifier, set in the techno display face.
 */
export function Wordmark({
  className,
  markClassName,
  textClassName,
}: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <BrandMark className={cn(markClassName ?? "h-[0.95em]", "text-current")} />
      <span
        className={cn(
          "num-display leading-none tracking-[-0.03em]",
          textClassName ?? "text-[1.4rem]",
        )}
      >
        {event.shortName}
      </span>
    </span>
  );
}
