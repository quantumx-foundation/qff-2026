import { Arrow } from "@/components/ui/Arrow";
import { event } from "@/data/event";

/**
 * "Summarise with AI" strip.
 *
 * Closes the page with one-click handoffs to the major assistants, each opened
 * on "Summarize this page: <site URL>"; the assistant reads the facts from the
 * page itself.
 */

const PROMPT = `Summarize this page: ${event.urls.site}/`;

const q = encodeURIComponent(PROMPT);

const ASSISTANTS: Array<{ label: string; href: string }> = [
  { label: "ChatGPT", href: `https://chatgpt.com/?q=${q}` },
  { label: "Claude", href: `https://claude.ai/new?q=${q}` },
  { label: "Perplexity", href: `https://www.perplexity.ai/search?q=${q}` },
  { label: "Google AI", href: `https://www.google.com/search?udm=50&q=${q}` },
];

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M10 4.5 11.6 9a2 2 0 0 0 1.2 1.2l4.5 1.6-4.5 1.6a2 2 0 0 0-1.2 1.2L10 19.1l-1.6-4.5a2 2 0 0 0-1.2-1.2l-4.5-1.6 4.5-1.6A2 2 0 0 0 8.4 9L10 4.5Z" />
      <path d="M18.5 2.5v4M16.5 4.5h4M19 16v3M17.5 17.5h3" strokeLinecap="round" />
    </svg>
  );
}

export function AskAi() {
  return (
    <section aria-labelledby="ask-ai-heading" className="bg-ground pb-[var(--space-section)]">
      <div className="container-wide">
        <div className="on-accent hairline flex flex-col gap-6 bg-ground px-5 py-6 text-ink sm:px-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="flex items-start gap-4">
            <Sparkle className="mt-0.5 h-7 w-7 shrink-0" />
            <div>
              <h2 id="ask-ai-heading" className="font-mono text-lg font-bold leading-snug">
                Summarise {event.name} with AI
              </h2>
              <p className="text-body mt-1 text-muted">
                Program, speakers, dates and registration in one answer
              </p>
            </div>
          </div>

          <ul className="flex flex-wrap gap-2.5">
            {ASSISTANTS.map((a) => (
              <li key={a.label}>
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-surface px-4 py-2.5 label-mono font-bold text-ink transition-colors duration-200 hover:bg-surface-2"
                >
                  <Arrow className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                  {a.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
