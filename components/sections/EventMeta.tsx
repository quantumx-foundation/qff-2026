import { event } from "@/data/event";
import { Reveal } from "@/components/effects/Reveal";

/**
 * Compact event information strip sitting directly under the hero: large values
 * with technical labels beneath, exactly as in the reference. Values resolve
 * from the data layer, so they read TBD until confirmed.
 */

const FIELDS = [
  { label: "Date", value: event.dateLabel },
  { label: "Location", value: event.venue },
  { label: "Event", value: event.shortName },
] as const;

export function EventMeta() {
  return (
    <section aria-label="Event information" className="bg-qff-black">
      <div className="container-wide grid grid-cols-1 gap-8 py-14 sm:grid-cols-3 sm:gap-6 lg:py-20">
        {FIELDS.map((field, i) => (
          <Reveal key={field.label} index={i}>
            <div className="flex flex-col gap-2">
              <span className="label-mono-sm text-qff-white/45">
                {field.label.toUpperCase()}
              </span>
              <span className="label-mono text-[0.9375rem] text-qff-white sm:text-base">
                {field.value.toUpperCase()}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
