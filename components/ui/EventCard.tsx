import Link from "next/link";
import { ImageTreatment } from "@/components/effects/ImageTreatment";
import { Arrow } from "./Arrow";
import type { EcosystemEvent } from "@/types/event";
import { cn } from "@/lib/utils";

/**
 * Ecosystem event card.
 *
 * Image-led poster rather than a conventional UI card: the treated image fills
 * the tile and the metadata sits over it in a small black panel, matching the
 * reference's editorial treatment. Sharp corners, no shadow, no radius.
 */
export function EventCard({ item }: { item: EcosystemEvent }) {
  const interactive = Boolean(item.href);

  const content = (
    <article
      className={cn(
        "group relative isolate h-full w-full overflow-hidden bg-qff-black",
        "hairline",
      )}
    >
      <div className="relative aspect-[4/5] w-full">
        <div className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]">
          <ImageTreatment
            media={item.media}
            treatment={item.treatment}
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 46vw, 30vw"
            className="h-full w-full"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.1)_55%)]"
        />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-5">
          <span className="label-mono-sm bg-qff-black px-2.5 py-1.5 text-qff-white">
            {item.category}
          </span>
          {interactive ? (
            <Arrow className="mt-1 text-qff-white transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
          ) : null}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="text-card-title text-qff-white">{item.name}</h3>
          {item.description ? (
            <p className="text-body mt-2.5 max-w-[34ch]">{item.description}</p>
          ) : null}
          <p className="label-mono-sm mt-4 text-qff-white/60">
            {item.dateLabel.toUpperCase()} · {item.location.toUpperCase()}
          </p>
        </div>
      </div>
    </article>
  );

  if (!interactive) return content;

  return (
    <Link
      href={item.href as string}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      {content}
    </Link>
  );
}
