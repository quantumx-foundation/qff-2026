import Link from "next/link";
import { Countdown } from "@/components/sections/Countdown";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Arrow } from "@/components/ui/Arrow";
import { event } from "@/data/event";
import { FOOTER_STEPS, topStaircase } from "@/lib/steps";
import { cn } from "@/lib/utils";

/**
 * Footer.
 *
 * The closing visual statement rather than a utility strip: a full-bleed purple
 * block entered through an irregular stepped skyline, carrying the social row,
 * legal links, the countdown and an oversized wordmark that runs the full width
 * of the page. Geometry is measured from the reference, eight runs across
 * three depth levels.
 */

/**
 * Only handles with a resolved destination are shown. The rest fall back to "#"
 * until their env var is set, and an icon that navigates nowhere is worse than
 * an absent one, same convention the partner and testimonial lists follow.
 */
const SOCIALS = event.socials.filter((social) => social.href.startsWith("http"));

const LEGAL: Array<{ label: string; href: string }> = [
  { label: "Contact", href: event.urls.contact },
  { label: "Code of conduct", href: event.urls.codeOfConduct },
  { label: "Privacy", href: event.urls.privacy },
  { label: "Terms", href: event.urls.terms },
];

function FooterLink({ label, href }: { label: string; href: string }) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group inline-flex items-center gap-1.5 label-mono-sm font-bold text-ink transition-opacity duration-200 hover:opacity-60"
    >
      {label.toUpperCase()}
      <Arrow className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
    </Link>
  );
}

export function Footer() {
  const clipPath = topStaircase(FOOTER_STEPS, "var(--footer-step)");

  return (
    <footer
      className="on-dark relative bg-ground text-ink"
      style={{ clipPath, marginTop: "-1px" }}
    >
      {/* Clear the stepped edge before content begins. */}
      <div className="container-wide pt-20 pb-14 sm:pt-24">
        {/* Social / copyright / legal */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex items-center gap-6">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <Link
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-ink transition-opacity duration-200 hover:opacity-60"
                >
                  <SocialIcon icon={social.icon} />
                </Link>
              </li>
            ))}
          </ul>

          {/* Only the organisation name is the link; the year and the copyright
              mark stay plain so the target of the click is unambiguous. */}
          <p className="label-mono-sm font-bold text-ink lg:order-2">
            &copy;{" "}
            <Link
              href={event.urls.organisation}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-ink/30 decoration-1 underline-offset-4 transition-opacity duration-200 hover:opacity-60"
            >
              {event.organisation.toUpperCase()}
            </Link>{" "}
            | {event.year}
          </p>

          <ul className="flex flex-wrap items-center gap-x-7 gap-y-3 lg:order-3">
            {LEGAL.map((item) => (
              <li key={item.label}>
                <FooterLink {...item} />
              </li>
            ))}
          </ul>
        </div>

        {/* Countdown */}
        <div className="mt-20 sm:mt-24">
          <Countdown />
        </div>
      </div>

      {/* Oversized wordmark, treated as a visual object rather than text.
          Sized in vw so it spans the page width at every breakpoint; the
          negative inline start offsets the glyph side bearing so the ink sits
          flush with the page gutter, and any overflow crops deliberately. */}
      <div className="w-full overflow-hidden px-[var(--pad)] pb-8 sm:pb-10">
        <span
          aria-hidden="true"
          className={cn(
            "num-display block w-full whitespace-nowrap text-ink",
            "-ml-[0.062em] text-[34vw] leading-[0.84] tracking-[-0.045em]",
          )}
        >
          {event.shortName}
        </span>
        <span className="sr-only">{event.shortName}</span>
      </div>

      <div className="container-wide pb-8">
        <p className="label-mono-sm font-bold text-muted">
          <Link
            href={event.urls.organisation}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-ink/30 decoration-1 underline-offset-4 transition-colors duration-200 hover:text-ink"
          >
            {event.organisation.toUpperCase()}
          </Link>
        </p>
      </div>
    </footer>
  );
}
