import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionLabel, PendingNote } from "@/components/ui/SectionLabel";
import { Marquee } from "@/components/effects/Marquee";
import { Reveal } from "@/components/effects/Reveal";
import { partners, partnersIntro } from "@/data/partners";
import { event } from "@/data/event";

/**
 * Partners.
 *
 * Centred label, heading and two CTAs, then logo rows running as alternating
 * marquees so the grid reads as continuing past both edges — the reference's
 * treatment. Logos render as marked tiles until supplied.
 */

function PartnerTile({
  name,
  logo,
  href,
}: {
  name: string;
  logo: string | null;
  href: string | null;
}) {
  const inner = logo ? (
    <Image
      src={logo}
      alt={name}
      width={200}
      height={56}
      className="h-8 w-auto object-contain opacity-75 transition-opacity duration-200 hover:opacity-100 lg:h-9"
    />
  ) : (
    <span className="label-mono-sm flex h-12 min-w-[150px] items-center justify-center border border-[var(--border)] px-6 text-qff-white/35 lg:min-w-[180px]">
      {name.toUpperCase()}
    </span>
  );

  if (!href) return inner;

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </Link>
  );
}

export function Partners() {
  if (!partners.length) return null;

  const rows = [partners.slice(0, 6), partners.slice(6, 12)].filter(
    (row) => row.length > 0,
  );

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
                <PartnerTile
                  name={partner.name}
                  logo={partner.logo}
                  href={partner.href}
                />
              </div>
            ))}
          </Marquee>
        ))}
      </div>

      {partners.some((p) => !p.confirmed) ? (
        <div className="container-wide mt-14 flex justify-center">
          <PendingNote>{partnersIntro.note}</PendingNote>
        </div>
      ) : null}
    </section>
  );
}
