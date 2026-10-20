
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  FileText,
  ShieldCheck,
} from "lucide-react";


const LegalPageLayout = ({
  title,
  eyebrow,
  description,
  lastUpdated = "20 October 2026",
  sections = [],
}) => {
  return (
    <>

      <main className="min-h-screen bg-[#fbfaf6] text-stone-800">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#f1ead9]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#d9cdb2]/60 sm:h-[450px] sm:w-[450px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-16 h-60 w-60 rounded-full border border-[#d9cdb2]/50 sm:h-[350px] sm:w-[350px]"
          />

          <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            {/* BREADCRUMB */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex items-center gap-2 text-sm text-stone-600"
            >
              <Link
                to="/"
                className="transition-colors hover:text-emerald-900"
              >
                Home
              </Link>

              <ChevronRight size={15} />

              <span aria-current="page" className="font-medium text-[#183e31]">
                {title}
              </span>
            </nav>

            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c8b991]/70 bg-white/50 px-4 py-2">
                <ShieldCheck size={16} className="text-emerald-900" />

                <span className="text-xs font-semibold text-[#315542]">
                  {eyebrow}
                </span>
              </div>

              <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-[#183e31] sm:text-5xl lg:text-6xl">
                {title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg sm:leading-9">
                {description}
              </p>

              <p className="mt-5 text-xs font-medium text-stone-500 sm:text-sm">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* LEGAL CONTENT */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14 lg:px-10">
            {/* TABLE OF CONTENTS */}
            <aside className="h-fit lg:sticky lg:top-28">
              <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-emerald-900" />

                  <h2 className="font-semibold text-[#183e31]">
                    On this page
                  </h2>
                </div>

                <nav aria-label="Page contents" className="mt-4">
                  <ul className="space-y-1">
                    {sections.map((section, index) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="group flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm leading-5 text-stone-600 transition-colors hover:bg-[#edf2e9] hover:text-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800"
                        >
                          <span className="shrink-0 text-xs font-semibold text-stone-400 group-hover:text-emerald-800">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span>{section.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-5 border-t border-stone-200 pt-5">
                  <p className="text-xs leading-6 text-stone-500">
                    Have a question about this page?
                  </p>

                  <Link
                    to="/contact-us"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 transition-colors hover:text-[#9b3435]"
                  >
                    Contact us
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </aside>

            {/* POLICY SECTIONS */}
            <div className="min-w-0">
              <div className="mb-8 rounded-2xl border border-[#dfe6d9] bg-[#edf2e9] p-5 sm:p-6">
                <p className="text-sm leading-7 text-[#315542]">
                  Please read this page carefully. It explains the rules
                  and information relevant to using the Be The Change
                  Foundation website.
                </p>
              </div>

              <div className="space-y-10 sm:space-y-12">
                {sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 border-b border-stone-200 pb-9 last:border-b-0 last:pb-0 sm:pb-11"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#edf2e9] text-sm font-bold text-emerald-900">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h2 className="pt-1 font-serif text-2xl font-medium leading-tight text-[#183e31] sm:text-3xl">
                        {section.title}
                      </h2>
                    </div>

                    <div className="mt-5 space-y-4 pl-0 text-sm leading-7 text-stone-600 sm:pl-[52px] sm:text-base sm:leading-8">
                      {(section.paragraphs || []).map((paragraph, paragraphIndex) => (
                        <p key={`${section.id}-p-${paragraphIndex}`}>
                          {paragraph}
                        </p>
                      ))}

                      {section.bullets?.length > 0 && (
                        <ul className="space-y-3 pl-5">
                          {section.bullets.map((bullet, bulletIndex) => (
                            <li
                              key={`${section.id}-b-${bulletIndex}`}
                              className="list-disc marker:text-emerald-800"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.note && (
                        <div className="rounded-xl border-l-4 border-[#b9c9b4] bg-[#f2f3eb] px-4 py-3 text-sm leading-7 text-[#315542]">
                          {section.note}
                        </div>
                      )}
                    </div>
                  </section>
                ))}
              </div>

              {/* CONTACT CTA */}
              <div className="mt-10 rounded-3xl bg-[#183e31] p-6 text-white sm:mt-14 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e8d6a1]">
                  Need clarification?
                </p>

                <h2 className="mt-3 font-serif text-2xl font-medium sm:text-3xl">
                  We're here to help.
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">
                  If you have questions about this page or your interaction
                  with our website, get in touch with our foundation.
                </p>

                <Link
                  to="/contact-us"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#e8d6a1] px-5 py-3 text-sm font-semibold text-[#183e31] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#183e31]"
                >
                  Contact the foundation
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                <Link
                  to="/privacy-policy"
                  className="font-medium text-emerald-900 underline-offset-4 hover:underline"
                >
                  Privacy Policy
                </Link>

                <Link
                  to="/terms-and-conditions"
                  className="font-medium text-emerald-900 underline-offset-4 hover:underline"
                >
                  Terms and Conditions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LegalPageLayout;
