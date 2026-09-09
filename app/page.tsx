import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButton } from "@/components/layout/FloatingButton";
import { StructuredData } from "@/components/layout/StructuredData";

import { Hero } from "@/components/sections/Hero";
import { EventMeta } from "@/components/sections/EventMeta";
import { HostBand } from "@/components/sections/HostBand";
import { EditorialStatement } from "@/components/sections/EditorialStatement";
import { Program } from "@/components/sections/Program";
import { Speakers } from "@/components/sections/Speakers";
import { IdentityBand } from "@/components/sections/IdentityBand";
import { EventCarousel } from "@/components/sections/EventCarousel";
import { Testimonials } from "@/components/sections/Testimonials";
import { Community } from "@/components/sections/Community";
import { Partners } from "@/components/sections/Partners";
import { Involvement } from "@/components/sections/Involvement";
import { Faq } from "@/components/sections/Faq";

import { GlitchMarquee } from "@/components/effects/GlitchMarquee";
import { marqueeTop, marqueeMid } from "@/data/marquee";

/**
 * The homepage composes sections only.
 *
 * The page runs light, with four deliberate breaks in it: the hero and the
 * host lockup sit on plum, the community band on pink, and the footer closes
 * on plum again. Those bands are also where every white-on-transparent partner
 * mark lives, so the dark grounds are load-bearing, not only rhythm.
 *
 * Trimmed on 9 September 2026 at marketing's request: the four value blocks
 * and the single-item announcements rail came out, and the statistics row
 * folded into the editorial statement. All three components and their data
 * files are intact, restoring any of them is re-adding the line here.
 */
export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />

      <main id="main">
        <Hero />
        <EventMeta />
        <HostBand />
        <EditorialStatement />

        <GlitchMarquee tokens={marqueeTop} duration={95} />

        <Program />
        <Speakers />

        <IdentityBand />

        <GlitchMarquee tokens={marqueeMid} duration={110} reverse />

        <EventCarousel />
        <Testimonials />
        <Community />
        <Partners />
        <Involvement />
        <Faq />
      </main>

      <Footer />
      <FloatingButton />
    </>
  );
}
