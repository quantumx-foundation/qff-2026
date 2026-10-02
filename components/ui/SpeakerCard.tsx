import Link from "next/link";
import { ImageTreatment } from "@/components/effects/ImageTreatment";
import { Arrow } from "./Arrow";
import type { Speaker, Treatment } from "@/types/event";

/** "Dr. Subarna Roy" -> "SR", "Astha" -> "A": first and last name, title dropped. */
function initials(name: string) {
  const words = name.replace(/^Dr\.?\s+/i, "").trim().split(/\s+/);
  const picked = words.length > 1 ? [words[0], words[words.length - 1]] : words;
  return picked.map((w) => w[0]).join("").toUpperCase();
}

/**
 * Speaker card: large editorial portrait under a duotone treatment, minimal
 * text beneath, hover lift on the image. Wraps in a link only when a profile
 * URL exists.
 */
export function SpeakerCard({
  speaker,
  treatment,
}: {
  speaker: Speaker;
  treatment: Treatment;
}) {
  const body = (
    <>
      <div className="relative overflow-hidden">
        <ImageTreatment
          media={speaker.media}
          treatment={treatment}
          fill={false}
          monogram={initials(speaker.name)}
          // Two columns from the smallest width, so a card is never wider
          // than about half the viewport until the md breakpoint.
          sizes="(max-width: 768px) 46vw, (max-width: 1024px) 31vw, 23vw"
          className="w-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <p className="text-h3 text-ink">{speaker.name}</p>
          {speaker.role || speaker.organisation ? (
            <p className="label-mono mt-2 text-muted">
              {[speaker.role, speaker.organisation]
                .filter(Boolean)
                .join(" · ")
                .toUpperCase()}
            </p>
          ) : (
            <p className="label-mono mt-2 text-muted">
              ROLE &amp; ORGANISATION TBA
            </p>
          )}
          {speaker.topic ? (
            <p className="text-body mt-3 max-w-[30ch]">{speaker.topic}</p>
          ) : null}
        </div>
        {speaker.href ? (
          <Arrow className="mt-1 shrink-0 text-ink transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
        ) : null}
      </div>
    </>
  );

  if (!speaker.href) {
    return <article className="group">{body}</article>;
  }

  return (
    <article className="group">
      <Link
        href={speaker.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {body}
      </Link>
    </article>
  );
}
