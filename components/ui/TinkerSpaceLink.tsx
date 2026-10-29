import { Fragment } from "react";
import { event } from "@/data/event";

/**
 * Text with every "TinkerSpace" in it linked to TinkerSpace's site, underlined.
 *
 * Matches regardless of case, so an uppercase label ("TINKERSPACE, KOCHI")
 * links too, and the visible text is kept exactly as passed in.
 */
const NAME = /(tinkerspace)/i;

export function WithTinkerSpace({ text }: { text: string }) {
  return (
    <>
      {text.split(NAME).map((part, i) =>
        i % 2 === 1 ? (
          <a
            key={i}
            href={event.urls.tinkerspace}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-current/40 underline-offset-4 transition-colors duration-200 hover:decoration-current"
          >
            {part}
          </a>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
