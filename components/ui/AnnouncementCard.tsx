import Link from "next/link";
import { Arrow } from "./Arrow";
import type { Announcement } from "@/types/event";
import { cn } from "@/lib/utils";

/**
 * Announcement card.
 *
 * Black tile with a hairline border, category pinned to the top and the title
 * anchored to the bottom with the arrow set inline after the text — the
 * reference's exact hierarchy. Aspect ratio matches the measured 532x332.
 */
export function AnnouncementCard({ item }: { item: Announcement }) {
  const interactive = Boolean(item.href);

  const inner = (
    <article
      className={cn(
        "group flex h-full min-h-[248px] flex-col justify-between bg-qff-black p-6 transition-colors duration-200 lg:min-h-[300px] lg:p-8",
        "hairline",
        interactive && "hover:border-qff-white/45",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="label-mono-sm text-qff-white/55">{item.category}</span>
        {item.dateLabel ? (
          <span className="label-mono-sm text-qff-white/35">
            {item.dateLabel.toUpperCase()}
          </span>
        ) : null}
      </div>

      <h3 className="text-card-title mt-12 text-qff-white">
        {item.title}
        {interactive ? (
          <Arrow className="ml-2 inline-block translate-y-[0.05em] transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
        ) : null}
      </h3>
    </article>
  );

  if (!interactive) return inner;

  return (
    <Link
      href={item.href as string}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      {inner}
    </Link>
  );
}
