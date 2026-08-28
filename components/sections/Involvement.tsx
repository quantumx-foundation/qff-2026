import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/effects/Reveal";
import { involvement } from "@/data/faq";
import { event } from "@/data/event";
import type { EventConfig } from "@/types/event";

/**
 * Primary conversion block.
 *
 * A raised #1e1e1e panel inset within the page, centred label, heading and a
 * single row of controls where only the first is filled — the reference's
 * button hierarchy. Every destination resolves through the config layer.
 */
export function Involvement() {
  return (
    <section aria-labelledby="involvement-heading" className="bg-qff-black pb-[var(--space-section)]">
      <div className="container-wide">
        <Reveal>
          <div className="bg-qff-surface px-6 py-16 text-center sm:px-10 lg:py-24">
            <SectionLabel className="text-qff-white/70">
              {involvement.label}
            </SectionLabel>

            <h2 id="involvement-heading" className="text-h2 mx-auto mt-5 max-w-[18ch]">
              {involvement.heading}
            </h2>

            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              {involvement.actions.map((action) => (
                <Button
                  key={action.label}
                  href={event.urls[action.href as keyof EventConfig["urls"]]}
                  variant={action.variant === "primary" ? "primary" : "secondary"}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
