import Link from "next/link";
import { ImageTreatment } from "@/components/effects/ImageTreatment";
import { Arrow } from "./Arrow";
import type { Speaker, Treatment } from "@/types/event";

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
          sizes="(max-width: 640px) 72vw, (max-width: 1024px) 40vw, 22vw"
          className="w-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <p className="text-h3 text-qff-white">{speaker.name}</p>
          {speaker.role || speaker.organisation ? (
            <p className="label-mono-sm mt-2 text-qff-white/50">
              {[speaker.role, speaker.organisation]
                .filter(Boolean)
                .join(" · ")
                .toUpperCase()}
            </p>
          ) : (
            <p className="label-mono-sm mt-2 text-qff-white/35">
              ROLE &amp; ORGANISATION TBA
            </p>
          )}
          {speaker.topic ? (
            <p className="text-body mt-3 max-w-[30ch]">{speaker.topic}</p>
          ) : null}
        </div>
        {speaker.href ? (
          <Arrow className="mt-1 shrink-0 text-qff-white transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
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
