import Link from "next/link";
import { Wordmark } from "@/components/ui/Wordmark";
import { Arrow } from "@/components/ui/Arrow";
import { event } from "@/data/event";

/**
 * Header for the standalone pages.
 *
 * The homepage header is a fixed cluster whose menu addresses in-page anchors,
 * which do not exist here. A subpage gets a plain bar in the normal flow
 * instead: the wordmark home, and one route back to the site. Same plate and
 * same mono voice, none of the overlay machinery.
 */
export function SubpageHeader() {
  return (
    <header className="hairline-b bg-qff-black">
      <div className="container-wide flex items-center justify-between gap-4 py-5">
        <Link
          href="/"
          aria-label={`${event.shortName} home`}
          className="flex items-center text-qff-white transition-opacity duration-200 hover:opacity-70"
        >
          <Wordmark
            markClassName="h-[0.95em]"
            textClassName="text-[1.25rem] sm:text-[1.4rem]"
          />
        </Link>

        <Link
          href="/"
          className="group inline-flex items-center gap-2 label-mono font-bold text-qff-white/70 transition-colors duration-200 hover:text-qff-white"
        >
          Back to site
          <Arrow className="rotate-[-135deg] transition-transform duration-200 group-hover:-translate-x-[2px]" />
        </Link>
      </div>
    </header>
  );
}
