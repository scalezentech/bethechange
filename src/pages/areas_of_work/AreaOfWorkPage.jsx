
import {
  ArrowRight,
  Heart,
  Home,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import backgroundBannerImg from "../../assets/images/background/banner.jpg";

import education from "../../assets/images/focused-areas/focused1.jpg";
import health from "../../assets/images/focused-areas/focused4.jpg";
import environment from "../../assets/images/focused-areas/focused2.jpg";
import culture from "../../assets/images/focused-areas/focused3.jpg";
import social from "../../assets/images/focused-areas/focused5.jpg";
import agriculture from "../../assets/images/focused-areas/focused8.jpg";
import womenEmpowerment from "../../assets/images/focused-areas/focused6.jpg";
import sport from "../../assets/images/focused-areas/focused7.jpg";


const areas = [
  {
    number: "01",
    title: "Education",
    image: education,
    href: "/area-of-work/education",
    description:
      "Promoting educational development and learning opportunities for children and communities.",
  },
  {
    number: "02",
    title: "Health",
    image: health,
    href: "/area-of-work/health",
    description:
      "Encouraging health awareness and supporting healthier communities.",
  },
  {
    number: "03",
    title: "Environment",
    image: environment,
    href: "/area-of-work/environment",
    description:
      "Supporting environmental awareness, conservation, and responsible practices.",
  },
  {
    number: "04",
    title: "Culture",
    image: culture,
    href: "/area-of-work/culture",
    description:
      "Promoting cultural awareness and appreciation of our shared heritage.",
  },
  {
    number: "05",
    title: "Social",
    image: social,
    href: "/area-of-work/social",
    description:
      "Encouraging inclusion, social awareness, and community development.",
  },
  {
    number: "06",
    title: "Agriculture",
    image: agriculture,
    href: "/area-of-work/agriculture",
    description:
      "Supporting agricultural awareness and rural community development.",
  },
  {
    number: "07",
    title: "Women Empowerment",
    image: womenEmpowerment,
    href: "/area-of-work/women-empowerment",
    description:
      "Promoting opportunities, participation, and empowerment for women.",
  },
  {
    number: "08",
    title: "Sports",
    image: sport,
    href: "/area-of-work/sport",
    description:
      "Recognising sports as an avenue for participation and community engagement.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-green-800 sm:text-sm">
        <span className="h-px w-8 bg-yellow-500" />
        {eyebrow}
        <span className="h-px w-8 bg-yellow-500" />
      </span>

      <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-yellow-400 to-green-700" />

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

function AreaCard({ area }) {
  return (
    <Link
      to={area.href}
      aria-label={`Explore ${area.title}`}
      className="group relative isolate block overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2 shadow-[0_5px_20px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-green-300 hover:shadow-[0_20px_40px_rgba(15,23,42,0.13)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-4"
    >
      {/* Metallic border and background */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white via-slate-100 to-slate-300 opacity-70"
      />

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
        <img
          src={area.image}
          alt={area.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-900/5 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

        {/* Decorative rings */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white/35 transition-transform duration-700 group-hover:scale-125"
        >
          <div className="absolute inset-3 rounded-full border border-white/25">
            <div className="absolute inset-3 rounded-full border border-yellow-300/40" />
          </div>
        </div>

        {/* Card number */}
        <span className="absolute left-3 top-3 rounded-full border border-white/35 bg-slate-950/25 px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.18em] text-white ">
          {area.number}
        </span>

        {/* Hover indicator */}
        <span className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white opacity-0  transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowRight size={17} />
        </span>
      </div>

      {/* Card label */}
      <div className="relative flex min-h-[76px] items-center justify-between gap-3 px-3 py-4 sm:px-4">
        <div>
          <h3 className="text-sm font-bold tracking-tight text-slate-800 transition-colors duration-300 group-hover:text-green-800 sm:text-base">
            {area.title}
          </h3>

          <span className="mt-2 block h-0.5 w-7 rounded-full bg-gradient-to-r from-yellow-500 to-green-700 transition-all duration-300 group-hover:w-12" />
        </div>

        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-all duration-300 group-hover:border-green-700 group-hover:bg-green-700 group-hover:text-white">
          <ArrowRight size={15} />
        </span>
      </div>
    </Link>
  );
}

export default function AreasOfWork() {
  return (
    <main className="overflow-hidden bg-white">
      {/* Page banner */}
      <section className="relative isolate flex min-h-[190px] items-center overflow-hidden bg-slate-950 sm:min-h-[220px] lg:min-h-[245px]">
        {/* Imported photographic background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundBannerImg})`,
          }}
        />

        {/* Dark navy overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07172f]/95 via-[#10284c]/85 to-[#07172f]/75"
        />

        {/* Banner rings */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-36 -z-10 h-96 w-96 rounded-full border border-white/10"
        >
          <div className="absolute inset-8 rounded-full border border-white/10">
            <div className="absolute inset-8 rounded-full border border-yellow-300/15" />
          </div>
        </div>

        {/* Dotted texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:18px_18px]"
        />

        <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center lg:px-10">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-yellow-300 sm:text-xs">
              <Sparkles size={14} />
              Be The Change Foundation
            </span>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Areas of Work
            </h1>

            <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-yellow-400 to-green-500" />
          </div>

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-semibold text-white/75 sm:text-sm"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 transition-colors hover:text-yellow-300"
            >
              <Home size={15} className="text-yellow-300" />
              Home
            </Link>

            <ArrowRight size={14} className="text-white/50" />

            <span className="text-white">Areas of Work</span>
          </nav>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative isolate overflow-hidden bg-[#f8faf7] px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 -z-10 h-80 w-80 rounded-full border border-green-200/60"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-16 -z-10 h-56 w-56 rounded-full border border-yellow-400/40"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-16 -z-10 h-64 w-64 rounded-full bg-green-100/50 blur-3xl"
        />

        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-green-800 shadow-sm sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-yellow-500" />
            Our Commitment
          </span>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Creating Change
            <span className="block text-green-700">Where It Matters</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            We work across key areas of social development, supporting
            communities and creating opportunities for positive change.
            Explore the areas that guide our work.
          </p>
        </div>
      </section>

      {/* Image gallery */}
      <section className="relative px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Explore Our Work"
            title="Eight Areas. One Purpose."
            description="Discover the areas through which we aim to encourage participation, strengthen communities, and support a better future."
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5">
            {areas.map((area) => (
              <AreaCard key={area.number} area={area} />
            ))}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="relative isolate overflow-hidden bg-[#f7faf7] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-20 -z-10 h-72 w-72 rounded-full border border-green-200/60"
        >
          <div className="absolute inset-8 rounded-full border border-yellow-400/30" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.22em] text-green-700 sm:text-sm">
              Our Approach
            </span>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Empowering people to create lasting change
            </h2>

            <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-yellow-400 to-green-700" />
          </div>

          <div className="space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            <p>
              Sustainable social development begins with understanding
              communities, their needs, and their opportunities.
            </p>

            <p>
              Our approach centres on engaging communities, empowering people,
              supporting meaningful action, and encouraging self-reliance so
              that positive change can continue over time.
            </p>

            <Link
              to="/our-mission"
              className="group inline-flex items-center gap-2 pt-2 font-bold text-green-800 transition-colors hover:text-green-950"
            >
              Discover Our Mission
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#064e30] via-[#087744] to-[#0d8b50] px-6 py-12 text-center shadow-[0_20px_55px_rgba(6,95,55,0.20)] sm:px-12 sm:py-16">
          {/* Upper-right concentric rings */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10"
          >
            <div className="absolute inset-8 rounded-full border border-white/10">
              <div className="absolute inset-8 rounded-full border border-yellow-300/20">
                <div className="absolute inset-8 rounded-full border border-white/10" />
              </div>
            </div>
          </div>

          {/* Lower-left concentric rings */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 -left-28 h-96 w-96 rounded-full border border-white/10"
          >
            <div className="absolute inset-10 rounded-full border border-white/10">
              <div className="absolute inset-10 rounded-full border border-white/10" />
            </div>
          </div>

          {/* Dotted pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:18px_18px]"
          />

          {/* Ambient highlights */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 top-0 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 left-1/3 h-52 w-52 rounded-full bg-yellow-300/10 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-yellow-300 shadow-[0_0_30px_rgba(253,224,71,0.08)] ">
              <Heart size={27} strokeWidth={1.8} />
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-300">
              Make A Difference
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Be Part of the Change
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500" />

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              Learn more about our foundation or connect with us to explore
              ways to support our work.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/about-us"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-green-800 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-800"
              >
                Who We Are?
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact-us"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/40 bg-white/5 px-6 py-3 font-bold text-white  transition-all duration-300 hover:-translate-y-1 hover:border-white/70 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-800"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
