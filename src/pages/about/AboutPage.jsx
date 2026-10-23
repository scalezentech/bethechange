
import {
  ArrowRight,
  HeartHandshake,
  Eye,
  Target,
  GraduationCap,
  HeartPulse,
  Leaf,
  Palette,
  Users,
  Sprout,
  HandHeart,
  Trophy,
  CheckCircle2,
} from "lucide-react";

import LeadershipPage from "../home/LeadershipPage";
import { Link } from "react-router-dom";

const impactAreas = [
  {
    title: "Education",
    description:
      "Bridging educational disparities, empowering underprivileged children, and promoting 21st-century skills development.",
    Icon: GraduationCap,
  },
  {
    title: "Health",
    description:
      "Strengthening healthcare awareness and supporting better health outcomes for communities.",
    Icon: HeartPulse,
  },
  {
    title: "Environment",
    description:
      "Advocating sustainable development and protecting natural resources for future generations.",
    Icon: Leaf,
  },
  {
    title: "Culture",
    description:
      "Preserving and promoting India's rich cultural heritage through community participation.",
    Icon: Palette,
  },
  {
    title: "Social Initiatives",
    description:
      "Promoting social awareness, inclusion, equality, and the welfare of underprivileged communities.",
    Icon: Users,
  },
  {
    title: "Agriculture",
    description:
      "Encouraging sustainable agricultural practices and supporting rural communities.",
    Icon: Sprout,
  },
  {
    title: "Women Empowerment",
    description:
      "Supporting equal opportunities, awareness, and empowerment for women and girls.",
    Icon: HandHeart,
  },
  {
    title: "Sports",
    description:
      "Encouraging participation, teamwork, discipline, and personal development through sports.",
    Icon: Trophy,
  },
];

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
      <span className="h-[2px] w-7 bg-emerald-600" />
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* PAGE HERO */}
      <section className="relative isolate overflow-hidden bg-[#073d2a]">
        {/* Decorative background elements */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-32 -z-10 h-96 w-96 rounded-full border border-white/[0.08]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -top-20 -z-10 h-72 w-72 rounded-full border border-white/[0.08]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-10 lg:py-28">
          <div>
            <div className="flex items-center gap-2 text-sm text-white/65">
              <a href="/" className="transition hover:text-white">
                Home
              </a>
              <span aria-hidden="true">/</span>
              <span className="text-emerald-300">About Us</span>
            </div>

            <SectionLabel>Who We Are</SectionLabel>

            <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Together, We Can
              <span className="mt-2 block text-[#ffdc62]">
                Create Lasting Change.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Be The Change Foundation is a non-profit organization dedicated
              to empowering society and driving social development. We work
              towards a world free from hunger, poverty, discrimination,
              corruption, and injustice.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#our-story"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#ffdc62] px-6 py-3 text-sm font-bold text-[#173d2b] transition hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Discover Our Story
                <ArrowRight size={17} aria-hidden="true" />
              </a>

              <Link
                to="/contact-us"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5"
              >
                Get Involved
              </Link>
            </div>
          </div>

          {/* Mission statement visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-sm sm:p-9">
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-emerald-400/[0.08]"
              />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#ffdc62] text-[#173d2b]">
                  <HeartHandshake size={30} strokeWidth={1.7} />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                  Our guiding belief
                </p>

                <blockquote className="mt-3 text-2xl font-semibold leading-relaxed text-white sm:text-3xl">
                  "Be the change you wish to see in the world."
                </blockquote>

                <div className="mt-6 h-px w-full bg-white/15" />

                <p className="mt-5 text-sm leading-7 text-white/65">
                  Through collective action, innovative practices, modern
                  technology, and strong values, we strive to make a positive
                  difference in society.
                </p>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 -z-10 h-24 w-24 rounded-2xl border border-emerald-400/30"
            />
          </div>
        </div>
      </section>

      {/* FOUNDATION INTRODUCTION */}
      <section
        id="our-story"
        className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <SectionLabel>Our Introduction</SectionLabel>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              A Foundation Built on
              <span className="mt-1 block text-emerald-700">
                Purpose and Values.
              </span>
            </h2>

            <div className="mt-6 h-1 w-16 rounded-full bg-[#ffdc62]" />
          </div>

          <div className="space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">
            <p>
              Welcome to Be The Change Foundation (BTCF), a non-profit
              organization dedicated to empowering society and driving social
              development. Our mission is to bring about lasting change and
              work towards a world free from hunger, poverty, discrimination,
              corruption, and injustice.
            </p>

            <p>
              At BTCF, we believe in the power of collective action and the
              potential of individuals to create meaningful change. Our work
              focuses on educational development and social transformation,
              with result-oriented efforts to provide additional support and
              opportunities to underprivileged sections of society.
            </p>

            <p>
              We aim to promote the public interest and serve the public good
              by engaging communities, empowering individuals, and supporting
              initiatives that contribute to holistic social development.
            </p>
          </div>
        </div>

        {/* Foundation facts */}
        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 border-y border-slate-200 sm:grid-cols-3">
          <div className="py-6 sm:px-6 sm:py-8">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
              Established
            </p>
            <p className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
              28 April 2022
            </p>
          </div>

          <div className="border-t border-slate-200 py-6 sm:border-l sm:border-t-0 sm:px-6 sm:py-8">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
              Organization
            </p>
            <p className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
              Non-profit Foundation
            </p>
          </div>

          <div className="border-t border-slate-200 py-6 sm:border-l sm:border-t-0 sm:px-6 sm:py-8">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
              Approach
            </p>
            <p className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">
              Holistic Development
            </p>
          </div>
        </div>
      </section>

      {/* VISION AND MISSION */}
      <section className="bg-[#f5f8f5] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SectionLabel>Our Direction</SectionLabel>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Vision &amp; Mission
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              The principles that guide our work and our commitment to
              meaningful social transformation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {/* Vision */}
            <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)] sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition-colors group-hover:bg-emerald-700 group-hover:text-white">
                <Eye size={25} strokeWidth={1.7} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Our Vision
              </h3>

              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Our vision is to empower society through the integration of
                better innovative practices, modern technology, and strong
                values. We aspire to create a world where everyone has equal
                access to opportunities and where lasting, irreversible change
                for the good is possible.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-700">
                <CheckCircle2 size={17} />
                <span>Respect, integrity, commitment, and excellence</span>
              </div>
            </article>

            {/* Mission */}
            <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)] sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition-colors group-hover:bg-emerald-700 group-hover:text-white">
                <Target size={25} strokeWidth={1.7} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Our Mission
              </h3>

              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Our mission is to advocate for causes that contribute to the
                betterment of society, including health and educational
                awareness, environmental conservation, human rights, youth
                leadership, cultural promotion, women's and children's safety,
                organic farming, and assistance for underprivileged
                communities.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-700">
                <CheckCircle2 size={17} />
                <span>Engage, empower, execute, and exit</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FOUNDER AND LEADERSHIP TEAM */}
      <section
        id="leadership"
        className="scroll-mt-20 bg-white py-8 sm:py-12"
      >
        <LeadershipPage />
      </section>

      {/* EIGHT AREAS OF IMPACT */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Our Areas of Impact</SectionLabel>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Empowering Communities,
              <span className="mt-1 block text-emerald-700">
                Creating Opportunities.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              We believe in holistic, 360-degree development through eight
              key areas that contribute to a more inclusive and progressive
              society.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
            {impactAreas.map(({ title, description, Icon }, index) => (
              <article
                key={title}
                className="group flex gap-4 border-b border-slate-200 py-6 sm:px-3 lg:px-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 transition-all duration-300 group-hover:bg-emerald-700 group-hover:text-white">
                  <Icon
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-[0.15em] text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-1 text-base font-bold text-slate-900 transition-colors group-hover:text-emerald-700">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[#073d2a] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <SectionLabel>Be Part of the Change</SectionLabel>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              A better future begins
              <span className="text-[#ffdc62]">
                {" "}with collective action.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
              Join us in supporting education, social welfare, environmental
              awareness, and sustainable development.
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/contact-us"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#ffdc62] px-6 py-3 text-sm font-bold text-[#173d2b] transition hover:bg-yellow-300"
            >
              Contact Us
              <ArrowRight size={17} aria-hidden="true" />
            </Link>

            <a
              href="https://razorpay.me/@bethechangefoundation5072"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
