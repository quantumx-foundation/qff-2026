import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { Reveal } from "@/components/effects/Reveal";
import { community } from "@/data/community";

/**
 * Community band.
 *
 * A pink `.on-accent` band, which is the page's one full-colour interruption:
 * it gives the Discord invitation its own stop rather than leaving it as a
 * footer icon, and it breaks up a long run of white sections.
 *
 * The oversized glyph is decorative and sits behind the copy, clipped by the
 * band, so it reads as a graphic rather than as a second icon to click.
 */
export function Community() {
  if (!community) return null;

  return (
    <section
      id="community"
      aria-labelledby="community-heading"
      className="on-accent section-tight relative isolate overflow-hidden bg-ground"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -bottom-16 text-ink/10 sm:-right-4"
      >
        <SocialIcon icon="discord" className="h-[280px] w-[280px] lg:h-[380px] lg:w-[380px]" />
      </div>

      <div className="container-wide relative">
        <div className="max-w-[46ch]">
          <Reveal>
            <SectionLabel>{community.label}</SectionLabel>
          </Reveal>

          <Reveal index={1}>
            <SectionHeading
              id="community-heading"
              lines={community.heading}
              className="mt-5"
            />
          </Reveal>

          <Reveal index={2}>
            <p className="text-body mt-5 max-w-[52ch]">{community.body}</p>
          </Reveal>

          <Reveal index={3}>
            <Button
              href={community.cta.href}
              className="mt-8"
              leading={<SocialIcon icon="discord" className="h-4 w-4" />}
            >
              {community.cta.label}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
