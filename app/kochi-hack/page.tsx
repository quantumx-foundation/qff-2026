import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { BoxGrid } from "@/components/effects/BoxGrid";
import { Community } from "@/components/sections/Community";
import { HackTabs } from "@/components/sections/HackTabs";
import { Footer } from "@/components/layout/Footer";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { Arrow } from "@/components/ui/Arrow";
import { Button } from "@/components/ui/Button";
import { CopyPageMenu } from "@/components/ui/CopyPageMenu";
import { PendingNote, SectionLabel } from "@/components/ui/SectionLabel";
import { event } from "@/data/event";
import { hackDay } from "@/data/hackDay";

/**
 * /kochi-hack: everything a Hack Day participant needs on one page.
 *
 * Built from the GuidePage treatment, heading in the left column, so it reads
 * as one of the site's documents; the sections are tab views (HackTabs). The hero is
 * the only box-grid band. Anything the organisers have not confirmed carries a
 * PendingNote beside it; see `data/hackDay.ts`.
 */

const PAGE_URL = `${event.urls.site}/kochi-hack`;

// The event-3 key art as a JPG: LinkedIn previews reject WebP and WhatsApp
// renders it unreliably, and those are where this link gets pasted.
const SHARE_IMAGE = {
  url: "/images/program/event-3-og.jpg",
  width: 1200,
  height: 763,
  alt: "Qiskit Fall Fest 2026 #3, Quantum Hack Day Kochi, 1st November",
};

export const metadata: Metadata = {
  title: hackDay.title,
  description: hackDay.summary,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: `${hackDay.title} | ${event.shortName}`,
    description: hackDay.summary,
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: hackDay.title,
    description: hackDay.summary,
    images: [SHARE_IMAGE],
  },
};

function Section({
  id,
  heading,
  aside,
  children,
}: {
  id: string;
  heading: string;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      aria-labelledby={`${id}-heading`}
      className="grid gap-8 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] lg:gap-12 lg:py-20"
    >
      <div className="flex flex-col gap-4">
        <h2 id={`${id}-heading`} className="text-h2">
          {heading}
        </h2>
        {aside}
      </div>
      <div className="flex min-w-0 flex-col gap-10">{children}</div>
    </section>
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="label-mono font-bold text-ink">{children}</h3>;
}

function Bullets({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={className ?? "flex flex-col gap-2.5"}>
      {items.map((item) => (
        <li key={item} className="text-body flex gap-3">
          <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Sets the event's name in bold wherever a paragraph mentions it. */
function withName(text: string) {
  return text.split(hackDay.title).flatMap((part, i) =>
    i === 0 ? [part] : [<strong key={i} className="font-semibold text-ink">{hackDay.title}</strong>, part],
  );
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group inline-flex items-center gap-2 label-mono font-bold text-muted transition-colors duration-200 hover:text-ink"
    >
      {children}
      <Arrow className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
    </Link>
  );
}

export default function KochiHackPage() {
  const { hero, about, schedule, challenges, requirements, submission, judging, rules, faq, venue, resources, community, awards } = hackDay;

  return (
    <>
      <SubpageHeader />

      <main id="main" className="bg-ground">
        {/* Hero */}
        <BoxGrid className="hairline-b">
          <div className="container-editorial pt-8 pb-12 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-32">
            <div className="flex">
              <div
                aria-label={`Organised by ${hero.organisers.map((o) => o.name).join(" and ")}`}
                className="on-dark flex items-center gap-3 bg-ground px-4 py-2.5 sm:gap-4 sm:px-5 sm:py-3"
              >
                {hero.organisers.map((o, i) => (
                  <span key={o.name} className="flex items-center gap-3 sm:gap-4">
                    {i > 0 ? (
                      <span aria-hidden="true" className="label-mono text-dim">
                        ×
                      </span>
                    ) : null}
                    {o.logo ? (
                      <Image src={o.logo.src} alt={o.logo.alt} width={o.logo.width} height={o.logo.height} priority className="h-5 w-auto sm:h-7" />
                    ) : (
                      <span className="num-display text-base text-ink sm:text-xl">{o.name}</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between gap-4 sm:mt-10">
              <SectionLabel>{hero.label}</SectionLabel>
              <CopyPageMenu src="/kochi-hack.md" className="shrink-0" />
            </div>
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-12">
              <div className="min-w-0">
                <h1 className="text-hero mt-6 max-w-[20ch] sm:mt-8">
                  {hero.heading.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="text-statement mt-8 max-w-[34ch] text-muted">{hero.standfirst}</p>

                <div className="mt-10 flex max-w-[68ch] flex-col gap-5">
                  {hero.body.map((p) => (
                    <p key={p} className="text-body">
                      {withName(p)}
                    </p>
                  ))}
                </div>
              </div>

              <Image
                src={hero.image.src}
                alt=""
                width={hero.image.width}
                height={hero.image.height}
                priority
                sizes="(min-width: 1024px) 26rem, 300px"
                className="mx-auto w-full max-w-[240px] sm:max-w-[320px] lg:max-w-none"
              />
            </div>

            <dl className="mt-10 grid grid-cols-2 border-l border-t border-[var(--border)] sm:mt-12 lg:grid-cols-3">
              {hero.facts.map((fact) => (
                <div key={fact.label} className="min-w-0 border-b border-r border-[var(--border)] bg-raised px-3.5 py-3 sm:px-5 sm:py-4">
                  <dt className="label-mono-sm text-dim">{fact.label}</dt>
                  <dd className="mt-1.5 text-[0.9375rem] text-ink sm:text-base">
                    {"href" in fact && fact.href ? (
                      <a
                        href={fact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-[var(--border)] underline-offset-4 transition-colors duration-200 hover:decoration-current"
                      >
                        {fact.value}
                      </a>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={hackDay.registrationUrl} className="w-full sm:w-auto">
                Register free
              </Button>
              <Button href="#challenges" variant="secondary" className="w-full sm:w-auto">
                See the challenges
              </Button>
            </div>
            <PendingNote className="mt-5">{community.notice}</PendingNote>
          </div>
        </BoxGrid>

        <HackTabs
          tabs={[
            { id: "about", label: "About", panel: (
          <Section id="about" heading="About the hackathon">
            <div className="flex max-w-[68ch] flex-col gap-5">
              {about.body.map((p) => (
                <p key={p} className="text-faq text-muted">
                  {withName(p)}
                </p>
              ))}
            </div>
            <div className="grid gap-10 md:grid-cols-2">
              <div className="flex flex-col gap-4">
                <SubHeading>What you can expect</SubHeading>
                <Bullets items={about.expect} />
              </div>
              <div className="flex flex-col gap-4">
                <SubHeading>Who can participate?</SubHeading>
                <Bullets items={about.audience} />
              </div>
            </div>
            <div className="hairline bg-surface px-5 py-4">
              <p className="text-body">
                <strong className="text-ink">Prerequisites: </strong>
                {about.prerequisites}
              </p>
            </div>
          </Section>
            ) },

            { id: "schedule", label: "Schedule", panel: (
          <Section id="schedule" heading="Schedule" aside={<PendingNote>{schedule.pending}</PendingNote>}>
            <ol className="flex flex-col">
              {schedule.rows.map((row) => (
                <li
                  key={row.activity}
                  className="hairline-b grid gap-1 py-4 first:pt-0 sm:grid-cols-[11rem_1fr] sm:gap-6"
                >
                  <span className="label-mono text-dim">{row.time}</span>
                  <span className="text-ink">{row.activity}</span>
                </li>
              ))}
            </ol>
          </Section>
            ) },

            { id: "challenges", label: "Challenges", panel: (
          <Section
            id="challenges"
            heading="Problem statements"
            aside={
              <p className="text-body">
                Choose one challenge. Your solution should address the stated problem and include a meaningful quantum
                computing component.
              </p>
            }
          >
            {challenges.map((c, i) => (
              <article key={c.title} className="hairline bg-raised">
                <header className="hairline-b flex flex-col gap-3 p-6 lg:p-8">
                  <p className="label-mono-sm text-accent-2">
                    Challenge {String(i + 1).padStart(2, "0")} · {c.track}
                  </p>
                  <h3 className="text-card-title text-ink">{c.title}</h3>
                </header>
                <div className="flex flex-col gap-8 p-6 lg:p-8">
                  <div className="flex flex-col gap-3">
                    <SubHeading>The problem</SubHeading>
                    {c.problem.map((p) => (
                      <p key={p} className="text-body">
                        {p}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    <SubHeading>Your challenge</SubHeading>
                    <p className="text-body">{c.challenge}</p>
                    {c.outcome ? (
                      <p className="text-body">
                        <strong className="text-ink">Expected outcome: </strong>
                        {c.outcome}
                      </p>
                    ) : null}
                  </div>
                  <div className="grid gap-8 md:grid-cols-2">
                    {c.inputs ? (
                      <div className="flex flex-col gap-3">
                        <SubHeading>Inputs you can work with</SubHeading>
                        <Bullets items={c.inputs} />
                      </div>
                    ) : null}
                    <div className="flex flex-col gap-3">
                      <SubHeading>Possible approaches</SubHeading>
                      <Bullets items={c.approaches} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <SubHeading>What to demonstrate</SubHeading>
                    <Bullets items={c.demonstrate} />
                  </div>
                  {c.consideration ? (
                    <div className="hairline bg-surface px-5 py-4">
                      <p className="text-body">
                        <strong className="text-ink">Important: </strong>
                        {c.consideration}
                      </p>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </Section>
            ) },

            { id: "requirements", label: "Requirements", panel: (
          <Section
            id="requirements"
            heading="Project requirements"
            aside={
              <p className="text-body">
                Every submission must show a clear connection between the chosen problem and the proposed solution.
              </p>
            }
          >
            <ol className="flex flex-col">
              {requirements.map((r, i) => (
                <li key={r.heading} className="hairline-b flex flex-col gap-3 py-7 first:pt-0">
                  <h3 className="text-h3 text-ink">
                    <span className="label-mono mr-3 align-middle text-dim">{String(i + 1).padStart(2, "0")}</span>
                    {r.heading}
                  </h3>
                  {r.body ? <p className="text-body max-w-[68ch]">{r.body}</p> : null}
                  <Bullets items={r.items} />
                  {r.note ? <p className="text-body max-w-[68ch] italic">{r.note}</p> : null}
                </li>
              ))}
            </ol>
          </Section>
            ) },

            { id: "submission", label: "Submission", panel: (
          <Section id="submission" heading="Submission" aside={<p className="text-body">{submission.intro}</p>}>
            <div className="flex flex-col gap-4">
              <SubHeading>Required checklist</SubHeading>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {submission.checklist.map((item) => (
                  <li key={item} className="text-body flex gap-3">
                    <span aria-hidden="true" className="mt-[0.3em] h-3.5 w-3.5 shrink-0 border border-ink" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-body">
                <strong className="text-ink">Recommended additions: </strong>
                {submission.recommended}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <SubHeading>What makes a strong submission?</SubHeading>
              <ol className="flex flex-col gap-2.5">
                {submission.strong.map((item, i) => (
                  <li key={item} className="text-body flex gap-3">
                    <span className="label-mono text-dim">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
              <div className="on-dark bg-ground px-5 py-4">
                <p className="text-body">{submission.strongNote}</p>
              </div>
            </div>
            <dl className="grid border-l border-t border-[var(--border)] sm:grid-cols-2">
              {submission.details.map((d) => (
                <div key={d.label} className="border-b border-r border-[var(--border)] bg-raised px-5 py-4">
                  <dt className="label-mono-sm text-dim">{d.label}</dt>
                  <dd className="mt-1.5 text-[0.9375rem] text-ink sm:text-base">{d.value}</dd>
                </div>
              ))}
            </dl>
          </Section>
            ) },

            { id: "judging", label: "Judging", panel: (
          <Section id="judging" heading="Judging criteria" aside={<PendingNote>{judging.pending}</PendingNote>}>
            {judging.phases.map((phase) => (
              <div key={phase.heading} className="flex flex-col gap-5">
                <h3 className="text-h3 text-ink">{phase.heading}</h3>
                <ul className="flex flex-col gap-4">
                  {phase.criteria.map((c) => (
                    <li key={c.label} className="flex flex-col gap-2">
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="text-ink">{c.label}</span>
                        <span className="num-display text-xl text-ink">{c.weight}%</span>
                      </div>
                      <div aria-hidden="true" className="h-1.5 bg-surface">
                        <div className="h-full bg-accent-2" style={{ width: `${c.weight * 4}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>
            ) },

            { id: "rules", label: "Rules", panel: (
          <Section id="rules" heading="Rules and code of conduct" aside={<PendingNote>{rules.pending}</PendingNote>}>
            <ol className="grid gap-x-10 gap-y-6 md:grid-cols-2">
              {rules.items.map((r, i) => (
                <li key={r.heading} className="flex flex-col gap-1.5">
                  <h3 className="text-ink font-semibold">
                    <span className="label-mono mr-2 text-dim">{String(i + 1).padStart(2, "0")}</span>
                    {r.heading}
                  </h3>
                  <p className="text-body">{r.body}</p>
                </li>
              ))}
            </ol>
            <TextLink href={event.urls.codeOfConduct}>QFF26 code of conduct</TextLink>
          </Section>
            ) },

            { id: "faq", label: "FAQ", panel: (
          <Section id="faq" heading="FAQ">
            {/* Native disclosure: no client JS, and every answer stays in the
                document for search and find-in-page. */}
            <ul className="flex flex-col">
              {faq.map((item) => (
                <li key={item.question} className="hairline-b first:border-t first:border-[var(--border)]">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                      <span className="text-faq text-ink">{item.question}</span>
                      <span
                        aria-hidden="true"
                        className="hairline mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-ink group-open:border-transparent group-open:bg-surface-2"
                      >
                        <span className="relative block h-3 w-3">
                          <span className="absolute left-0 top-1/2 h-[1.5px] w-3 -translate-y-1/2 bg-current" />
                          <span className="absolute left-1/2 top-0 h-3 w-[1.5px] -translate-x-1/2 bg-current group-open:opacity-0" />
                        </span>
                      </span>
                    </summary>
                    <p className="text-body max-w-[62ch] pb-6 pr-14">{item.answer}</p>
                  </details>
                </li>
              ))}
            </ul>
          </Section>
            ) },

            { id: "venue", label: "Venue", panel: (
          <Section id="venue" heading="Venue and travel">
            <div className="flex flex-col gap-3">
              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-h3 w-fit text-ink underline decoration-[var(--border)] underline-offset-[6px] transition-colors duration-200 hover:decoration-current"
              >
                {venue.name}
              </a>
              <p className="text-body">{venue.body}</p>
              <TextLink href={venue.mapUrl}>Open in Google Maps</TextLink>
            </div>
            <div className="flex flex-col gap-4">
              <SubHeading>Before you travel</SubHeading>
              <Bullets items={venue.beforeYouTravel} />
            </div>
          </Section>
            ) },

            { id: "resources", label: "Resources", panel: (
          <Section id="resources" heading="Tools and resources">
            <div className="flex flex-col gap-4">
              <SubHeading>Useful links</SubHeading>
              <ul className="flex flex-wrap gap-x-8 gap-y-4">
                {resources.links.map((l) => (
                  <li key={l.href}>
                    <TextLink href={l.href}>{l.label}</TextLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <SubHeading>Preparation tips</SubHeading>
              <Bullets items={resources.tips} />
            </div>
          </Section>
            ) },

            { id: "community", label: "Community", panel: (
          <Section id="community" heading="Community and support">
            <p className="text-faq max-w-[68ch] text-muted">{community.body}</p>
            <div className="flex flex-col gap-4">
              <SubHeading>{community.access.heading}</SubHeading>
              <p className="text-body max-w-[68ch]">{community.access.body}</p>
              <pre className="hairline overflow-x-auto bg-raised px-5 py-4 font-mono text-sm leading-7 text-ink">
                {community.access.fields.map((f) => `${f}:`).join("\n")}
              </pre>
              <Bullets items={community.access.rules} />
            </div>
            <div className="flex flex-col gap-4">
              <SubHeading>On the server</SubHeading>
              <Bullets items={community.onDiscord} />
            </div>
            <ul className="flex flex-wrap gap-x-8 gap-y-4">
              <li>
                <TextLink href={community.joinUrl}>Join the QuantumX community</TextLink>
              </li>
              <li>
                <TextLink href={`mailto:${community.email}`}>{community.email}</TextLink>
              </li>
            </ul>
          </Section>
            ) },

            { id: "awards", label: "Awards", panel: (
          <Section id="awards" heading="Awards and recognition" aside={<PendingNote>{awards.pending}</PendingNote>}>
            <p className="text-faq max-w-[68ch] text-muted">{awards.body}</p>
          </Section>
            ) },
          ]}
        />

        {/* Closing call to action */}
        <section className="on-dark bg-ground">
          <div className="container-editorial flex flex-col items-start gap-8 py-20 sm:py-24">
            <SectionLabel>1 November 2026 · TinkerSpace, Kochi</SectionLabel>
            <p className="text-h2 max-w-[30ch]">Bring your curiosity, collaborate with others, and turn your ideas into working prototypes.</p>
            <Button href={hackDay.registrationUrl}>Register free</Button>
          </div>
        </section>
        {/* Its own id: "community" is already this page's tab. */}
        <Community id="join-community" />
      </main>

      <Footer />
    </>
  );
}
