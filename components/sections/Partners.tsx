import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Partner, PartnerLogo } from "@/types/event";
import { Button } from "@/components/ui/Button";
import { SectionLabel, PendingNote } from "@/components/ui/SectionLabel";
import { Marquee } from "@/components/effects/Marquee";
import { Reveal } from "@/components/effects/Reveal";
import { partners, partnersIntro } from "@/data/partners";
import { event } from "@/data/event";

/**
 * Partners.
 *
 * Centred label, heading and two CTAs, then the confirmed marks.
 *
 * The mark layout follows the roster size: a short roster sits still in a
 * centred row, because a marquee carrying two or three logos reads as the same
 * logo cycling past rather than as a partner list. Once there are enough marks
 * to fill the width, they run as alternating marquees so the grid reads as
 * continuing past both edges — the reference's treatment.
 */

/**
 * Below this, a scrolling row would visibly repeat itself: each mark occupies
 * roughly 260-300px with its gap, so it takes about a dozen to fill a wide
 * viewport twice over, which is what the seamless -50% loop needs.
 */
const MARQUEE_THRESHOLD = 12;

/**
 * Logo rows read as lopsided when every mark is set to one height: a 7:1
 * wordmark then carries several times the ink of a square badge, and the badge
 * shrinks until it is unreadable. Each mark is sized to a constant optical
 * area instead — height = sqrt(AREA / aspect) — so wide lockups sit shorter
 * and square marks taller, and all of them weigh the same in the row.
 */
const OPTICAL_AREA = 4536;
const MIN_MARK_H = 22;
const MAX_MARK_H = 64;

function markHeight(logo: PartnerLogo) {
  const aspect = logo.width / logo.height;
  const height = Math.sqrt(OPTICAL_AREA / aspect);
  return Math.round(Math.min(MAX_MARK_H, Math.max(MIN_MARK_H, height)));
}

function PartnerMark({ partner }: { partner: Partner }) {
  const { name, logo, href } = partner;

  const height = logo ? markHeight(logo) : 0;
  const sizing = logo
    ? ({
        "--mark-h": `${height}px`,
        "--mark-h-lg": `${Math.round(height * 1.15)}px`,
      } as CSSProperties)
    : undefined;

  const mark = logo ? (
    <Image
      src={logo.src}
      alt={name}
      width={logo.width}
      height={logo.height}
      style={sizing}
      className="h-[var(--mark-h)] w-auto lg:h-[var(--mark-h-lg)]"
    />
  ) : null;

  const inner = logo ? (
    <span className="inline-flex items-center opacity-75 transition-opacity duration-200 hover:opacity-100">
      {mark}
    </span>
  ) : (
    <span className="label-mono-sm flex h-12 min-w-[150px] items-center justify-center border border-[var(--border)] px-6 text-qff-white/35 lg:min-w-[180px]">
      {name.toUpperCase()}
    </span>
  );

  if (!href) return inner;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} — opens in a new tab`}
    >
      {inner}
    </Link>
  );
}

export function Partners() {
  if (!partners.length) return null;

  const scrolls = partners.length >= MARQUEE_THRESHOLD;
  const half = Math.ceil(partners.length / 2);
  const rows = scrolls
    ? [partners.slice(0, half), partners.slice(half)].filter((row) => row.length)
    : [];

  return (
    <section id="partners" aria-labelledby="partners-heading" className="section bg-qff-black">
      <div className="container-editorial text-center">
        <Reveal>
          <SectionLabel className="text-qff-white/70">
            {partnersIntro.label}
          </SectionLabel>
        </Reveal>

        <Reveal index={1}>
          <h2 id="partners-heading" className="text-h2 mx-auto mt-5 max-w-[20ch]">
            {partnersIntro.heading}
          </h2>
        </Reveal>

        <Reveal index={2}>
          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button href={event.urls[partnersIntro.primaryCta.href]}>
              {partnersIntro.primaryCta.label}
            </Button>
            <Button
              href={event.urls[partnersIntro.secondaryCta.href]}
              variant="secondary"
            >
              {partnersIntro.secondaryCta.label}
            </Button>
          </div>
        </Reveal>
      </div>

      {scrolls ? (
        <div className="mt-16 flex flex-col gap-10 lg:mt-24 lg:gap-14">
          {rows.map((row, rowIndex) => (
            <Marquee
              key={rowIndex}
              duration={rowIndex % 2 === 0 ? 70 : 85}
              reverse={rowIndex % 2 === 1}
            >
              {row.map((partner) => (
                <div
                  key={partner.id}
                  className="mr-12 flex shrink-0 items-center lg:mr-20"
                >
                  <PartnerMark partner={partner} />
                </div>
              ))}
            </Marquee>
          ))}
        </div>
      ) : (
        <Reveal index={3}>
          <ul className="container-wide mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-10 lg:mt-24 lg:gap-x-14">
            {partners.map((partner) => (
              <li key={partner.id} className="flex items-center">
                <PartnerMark partner={partner} />
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      {partnersIntro.rosterOpen || partners.some((p) => !p.confirmed) ? (
        <div className="container-wide mt-14 flex justify-center">
          <PendingNote>{partnersIntro.note}</PendingNote>
        </div>
      ) : null}
    </section>
  );
}
