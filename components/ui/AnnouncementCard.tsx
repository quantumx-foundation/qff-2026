import Link from "next/link";
import { Arrow } from "./Arrow";
import { ImageTreatment } from "@/components/effects/ImageTreatment";
import type { Announcement } from "@/types/event";
import { cn } from "@/lib/utils";

/**
 * Announcement card.
 *
 * Black tile with a hairline border, category pinned to the top and the title
 * anchored to the bottom with the arrow set inline after the text — the
 * reference's exact hierarchy. Optional treated photography sits behind as an
 * image background; text stays dominant. Aspect ratio matches the measured
 * 532x332.
 */
export function AnnouncementCard({ item }: { item: Announcement }) {
  const interactive = Boolean(item.href);

  const inner = (
    <article
      className={cn(
        "group relative isolate flex h-full min-h-[248px] flex-col justify-between overflow-hidden bg-qff-black p-6 transition-colors duration-200 lg:min-h-[300px] lg:p-8",
        "hairline",
        interactive && "hover:border-qff-white/45",
      )}
    >
      {item.media ? (
        <>
          <div className="absolute inset-0">
            <ImageTreatment
              media={item.media}
              treatment="purple"
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 46vw, 32vw"
              className="h-full w-full"
              showPlaceholderLabel={false}
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.35)_48%,rgba(0,0,0,0.45)_100%)]"
          />
        </>
      ) : null}

      <div className="relative flex items-start justify-between gap-4">
        <span className="label-mono-sm text-qff-white/55">{item.category}</span>
        {item.dateLabel ? (
          <span className="label-mono-sm text-qff-white/35">
            {item.dateLabel.toUpperCase()}
          </span>
        ) : null}
      </div>

      <h3 className="text-card-title relative mt-12 text-qff-white">
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
