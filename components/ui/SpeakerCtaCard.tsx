import { Button } from "./Button";
import {
  PLACEHOLDER_TONE,
  PLACEHOLDER_EDGE,
} from "@/components/effects/ImageTreatment";
import type { Treatment } from "@/types/event";

/**
 * Closing card on the speakers rail.
 *
 * Holds the same 3:4 frame and holding-panel treatment an unannounced speaker
 * card would, so the row keeps its rhythm, with the note and apply CTA centred
 * inside the panel instead of a portrait.
 */
export function SpeakerCtaCard({
  treatment = "purple",
  note,
  cta,
}: {
  treatment?: Treatment;
  note: string;
  cta: { label: string; href: string };
}) {
  return (
    <article
      className="relative overflow-hidden noise"
      style={{
        backgroundImage: PLACEHOLDER_TONE[treatment],
        aspectRatio: "3 / 4",
      }}
    >
      {/* Same diagonal rule as the holding panel: reads as intentionally open. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(135deg, ${PLACEHOLDER_EDGE[treatment]} 0 1px, transparent 1px 14px)`,
          opacity: 0.5,
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-7 p-8 text-center">
        <p className="text-h3 text-balance text-qff-white">{note}</p>
        <Button href={cta.href} variant="secondary">
          {cta.label}
        </Button>
      </div>
    </article>
  );
}
