
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, ChevronRight } from "lucide-react";
import { areasOfWork } from "../../data/areasOfWork";

export default function AreaDetailPage() {
  const { slug } = useParams();
  const area = areasOfWork[slug];

  if (!area) {
    return (
      <main className="min-h-[60vh] bg-white px-5 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            Area not found
          </p>

          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            This page doesn't exist
          </h1>

          <p className="mt-3 text-gray-600">
            The requested area of work could not be found.
          </p>

          <Link
            to="/area-of-work"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            <ArrowLeft size={18} />
            Back to Areas of Work
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-700">
      {/* Page heading */}
      <section className="border-b border-gray-100 bg-gray-50 px-5 py-10 sm:py-14">
        <div className="mx-auto max-w-5xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex flex-wrap items-center gap-2 text-sm text-gray-500"
          >
            <Link to="/" className="transition hover:text-green-700">
              Home
            </Link>

            <ChevronRight size={15} />

            <Link
              to="/area-of-work"
              className="transition hover:text-green-700"
            >
              Areas of Work
            </Link>

            <ChevronRight size={15} />

            <span className="font-medium text-green-800">
              {area.title}
            </span>
          </nav>

          <div className="h-1 w-14 rounded-full bg-red-500" />

          <h1 className="mt-4 text-3xl font-bold uppercase tracking-tight text-gray-900 sm:text-4xl">
            {area.title}
          </h1>
        </div>
      </section>

      {/* Main content */}
      <article className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
        <div className="space-y-8">
          <ContentSection
            title={area.whyTitle}
            text={area.why}
          />

          <ContentSection
            title={area.problemTitle}
            text={area.problem}
            items={area.problemItems}
          />

          <ContentSection
            title="Our Approach"
            text={area.approach}
          />
        </div>

        {/* Objectives */}
        {area.objectives?.length > 0 && (
          <section className="mt-12">
            <div className="mb-6 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                Our commitment
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                Objectives of the BTCF
              </h2>
            </div>

            <ul className="space-y-3">
              {area.objectives.map((objective, index) => (
                <li
                  key={`${slug}-objective-${index}`}
                  className="flex items-start gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50/70"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600">
                    <Check size={15} strokeWidth={3} />
                  </span>

                  <span className="leading-7 text-gray-700">
                    {objective}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Optional page-specific sections */}
        {area.additionalSections?.map((section, index) => (
          <section
            key={`${slug}-section-${index}`}
            className="mt-12 border-t border-gray-100 pt-8"
          >
            <h2 className="mb-5 text-center text-xl font-bold text-gray-900 sm:text-2xl">
              {section.title}
            </h2>

            <ul className="space-y-3">
              {section.items?.map((item, itemIndex) => (
                <li
                  key={`${slug}-section-${index}-item-${itemIndex}`}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-green-700" />

                  <span className="leading-7 text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Back navigation */}
        <div className="mt-12 border-t border-gray-100 pt-6">
          <Link
            to="/area-of-work"
            className="inline-flex items-center gap-2 font-semibold text-green-800 transition hover:text-red-600"
          >
            <ArrowLeft size={18} />
            Explore all areas of work
          </Link>
        </div>
      </article>
    </main>
  );
}

function ContentSection({ title, text, items }) {
  return (
    <section>
      <h2 className="mb-2 text-lg font-semibold text-red-600">
        {title}
      </h2>

      {text && (
        <p className="text-[15px] leading-7 text-gray-600">
          {text}
        </p>
      )}

      {items?.length > 0 && (
        <ul className="mt-3 space-y-2">
          {items.map((item, index) => (
            <li
              key={`${title}-${index}`}
              className="text-[15px] leading-7 text-gray-600"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
