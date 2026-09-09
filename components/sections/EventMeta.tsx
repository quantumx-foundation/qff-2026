import { event } from "@/data/event";
import { Reveal } from "@/components/effects/Reveal";

/**
 * Compact event information strip sitting directly under the hero: large values
 * with technical labels beneath, exactly as in the reference. Values resolve
 * from the data layer, so they read TBD until confirmed.
 */

/**
 * "Event / QFF26" was dropped on 9 September 2026: the wordmark is in the
 * header, the hero and the footer, so the strip was spending a third of its
 * width restating it. Restoring it is one entry here, the grid sizes from
 * the array length.
 */
const FIELDS = [
  { label: "Starts", value: event.dateLabel },
  { label: "Location", value: event.venue },
] as const;

export function EventMeta() {
  return (
    <section aria-label="Event information" className="bg-ground">
      <div className="container-wide grid grid-cols-1 gap-8 py-14 sm:grid-cols-2 sm:gap-6 lg:py-20">
        {FIELDS.map((field, i) => (
          <Reveal key={field.label} index={i}>
            <div className="flex flex-col gap-2">
              <span className="label-mono-sm text-dim">
                {field.label.toUpperCase()}
              </span>
              <span className="label-mono text-[0.9375rem] text-ink sm:text-base">
                {field.value.toUpperCase()}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
