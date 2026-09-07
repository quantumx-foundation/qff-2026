import Link from "next/link";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { Footer } from "@/components/layout/Footer";
import { Arrow } from "@/components/ui/Arrow";
import type { LegalDocument } from "@/types/event";

/**
 * Renderer for the four short documents linked from the footer.
 *
 * Black, quiet and deliberately plain: title, prose, and a row of the
 * destinations the prose names. None of the homepage's duotones, tickers or
 * stepped geometry — those belong to the event, not to a page someone opens to
 * check one thing. The purple footer still closes it so the page reads as part
 * of the same site.
 */
export function LegalPage({ doc }: { doc: LegalDocument }) {
  return (
    <>
      <SubpageHeader />

      <main id="main" className="bg-qff-black">
        <div className="container-editorial py-20 sm:py-28 lg:py-36">
          <h1 className="text-hero max-w-[16ch]">{doc.title}</h1>

          <div className="mt-10 flex max-w-[68ch] flex-col gap-6 lg:mt-12">
            {doc.body.map((paragraph, i) => (
              <p key={i} className="text-faq text-qff-white/85">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="hairline-t mt-14 flex flex-wrap gap-x-8 gap-y-4 pt-8 lg:mt-16">
            {doc.links.map((link) => {
              const external = link.href.startsWith("http");
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group inline-flex items-center gap-2 label-mono font-bold text-qff-white/70 transition-colors duration-200 hover:text-qff-white"
                  >
                    {link.label}
                    <Arrow className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
