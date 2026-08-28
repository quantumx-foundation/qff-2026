import { Button } from "@/components/ui/Button";
import { GlitchImage } from "@/components/effects/GlitchImage";
import { ImageTreatment } from "@/components/effects/ImageTreatment";
import { SteppedMedia } from "@/components/effects/SteppedMedia";
import { hero } from "@/data/hero";
import { event } from "@/data/event";

/**
 * Hero.
 *
 * Full-bleed purple-duotone media with content anchored to the lower left and
 * the black page rising into the image as a descending staircase, exactly as in
 * the reference. Entrance motion is CSS keyframes so the section stays a server
 * component and ships no JavaScript.
 */
export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate w-full bg-qff-black"
      style={{ minHeight: "clamp(560px, 78vh, 900px)" }}
    >
      {/* Media */}
      <SteppedMedia className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="media-settle absolute inset-0">
            {hero.media?.src ? (
              <GlitchImage
                media={hero.media}
                treatment="purple"
                priority
                sizes="100vw"
                className="h-full w-full"
              />
            ) : (
              <ImageTreatment
                media={hero.media}
                treatment="purple"
                priority
                sizes="100vw"
                className="h-full w-full"
              />
            )}
          </div>
          {/* Grade the lower left so the headline holds contrast over any image. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.12)_40%,rgba(0,0,0,0)_68%)]"
          />
          <div aria-hidden="true" className="scanlines absolute inset-0 opacity-40" />
        </div>
      </SteppedMedia>

      {/* Content */}
      <div className="relative flex min-h-[inherit] flex-col justify-end">
        <div
          className="container-wide pb-[calc(var(--hero-step)*4-2.25rem)] pt-32"
        >
          <p
            className="rise label-mono text-qff-white/75"
            style={{ animationDelay: "80ms" }}
          >
            {hero.eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="text-hero mt-5 max-w-[18ch] text-qff-white"
          >
            {hero.headline.map((line, i) => (
              <span
                key={line}
                className="rise block"
                style={{ animationDelay: `${180 + i * 90}ms` }}
              >
                {line}
              </span>
            ))}
          </h1>

          <div
            className="rise mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: `${180 + hero.headline.length * 90 + 60}ms` }}
          >
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            {hero.secondaryCta ? (
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            ) : null}
          </div>

          <p
            className="rise label-mono-sm mt-6 text-qff-white/45"
            style={{ animationDelay: `${180 + hero.headline.length * 90 + 140}ms` }}
          >
            {event.registrationStatus.toUpperCase()}
          </p>
        </div>
      </div>
    </section>
  );
}
