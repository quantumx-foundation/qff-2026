import { Button } from "@/components/ui/Button";
import { ImageTreatment } from "@/components/effects/ImageTreatment";
import { SlicedWordmark } from "@/components/effects/SlicedWordmark";
import { identityBand } from "@/data/hero";
import { event } from "@/data/event";

/**
 * Purple interruption band.
 *
 * Reproduces the reference's large treated media block with an oversized,
 * horizontally sliced wordmark ghosted across it and the content anchored to
 * the lower left. This is the page's single strongest use of the glitch
 * system, and the only place it appears at display size.
 */
export function IdentityBand() {
  return (
    <section
      aria-labelledby="identity-band-heading"
      className="bg-qff-black py-[calc(var(--space-section)*0.5)]"
    >
      <div className="container-wide">
        <div className="relative isolate w-full overflow-hidden">
          {/* Treated media */}
          <div className="relative min-h-[440px] lg:min-h-[70vh]">
            <div className="absolute inset-0">
              <ImageTreatment
                media={identityBand.media}
                treatment="purple"
                sizes="100vw"
                className="h-full w-full"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.66)_0%,rgba(0,0,0,0.12)_52%,rgba(0,0,0,0.22)_100%)]"
            />

            {/* Ghosted sliced wordmark */}
            <div className="pointer-events-none absolute inset-x-0 top-[26%] flex justify-center">
              <SlicedWordmark
                text={event.shortName}
                bands={9}
                className="w-full text-center"
                textClassName="num-display text-[26vw] leading-[0.8] tracking-[-0.04em] text-qff-purple-lift/25"
              />
            </div>

            <div aria-hidden="true" className="scanlines absolute inset-0 opacity-35" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
              <p className="label-mono text-qff-white/75">
                {identityBand.eyebrow}
              </p>
              <h2
                id="identity-band-heading"
                className="text-h2 mt-4 max-w-[16ch] text-qff-white"
              >
                {identityBand.status}
              </h2>
              <div className="mt-8">
                <Button href={identityBand.cta.href}>
                  {identityBand.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
