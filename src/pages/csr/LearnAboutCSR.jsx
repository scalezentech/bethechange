
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Heart,
  HeartPulse,
  Leaf,
  Scale,
  ShieldCheck,
  Sprout,
  Users,
  HandHeart,
} from "lucide-react";

const focusAreas = [
  {
    title: "Poverty Alleviation",
    description:
      "Support vulnerable communities with initiatives that improve access to essential resources and opportunities.",
    icon: HandHeart,
  },
  {
    title: "Child Development",
    description:
      "Encourage children's wellbeing, development, safety, and opportunities for a better future.",
    icon: Heart,
  },
  {
    title: "Women Empowerment",
    description:
      "Promote women's participation, independence, skills, and opportunities for social and economic progress.",
    icon: Users,
  },
  {
    title: "Skill Development",
    description:
      "Encourage practical learning and skills that can support employability and self-reliance.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Education for Poor & Street Children",
    description:
      "Support educational access and learning opportunities for children facing social or economic barriers.",
    icon: GraduationCap,
  },
  {
    title: "Health Programs",
    description:
      "Promote health awareness, wellbeing, and community-oriented health initiatives.",
    icon: HeartPulse,
  },
  {
    title: "Environment Protection",
    description:
      "Encourage environmental awareness, conservation, and responsible use of natural resources.",
    icon: Leaf,
  },
  {
    title: "Consumer Awareness",
    description:
      "Help people understand consumer awareness, informed choices, and their rights and responsibilities.",
    icon: ShieldCheck,
  },
  {
    title: "Elderly Care",
    description:
      "Support dignity, inclusion, care, and wellbeing for older members of the community.",
    icon: Heart,
  },
  {
    title: "Rural Development",
    description:
      "Encourage sustainable community development and access to opportunities in rural areas.",
    icon: Sprout,
  },
  {
    title: "Slum Development",
    description:
      "Support community wellbeing and development for people living in underserved urban settlements.",
    icon: Users,
  },
  {
    title: "Livelihood Support",
    description:
      "Encourage income-generation opportunities, economic participation, and long-term self-reliance.",
    icon: BriefcaseBusiness,
  },
];

const steps = [
  {
    number: "01",
    title: "Identify a social need",
    description:
      "Define the community, issue, or development outcome your CSR initiative aims to address.",
  },
  {
    number: "02",
    title: "Explore a suitable partnership",
    description:
      "Identify a focus area and share your organisation's priorities, geography, and intended outcomes.",
  },
  {
    number: "03",
    title: "Discuss the project",
    description:
      "Work through the proposed scope, timeline, resources, responsibilities, and implementation approach.",
  },
  {
    number: "04",
    title: "Plan and evaluate impact",
    description:
      "Establish suitable milestones and ways to review the project's progress and outcomes.",
  },
];

export default function LearnAboutCSR() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#14532d] px-5 py-20 text-white sm:py-28">
        <div className="absolute -right-16 -top-20 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />
        <div className="absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-green-100">
            <BookOpen size={16} />
            Corporate Social Responsibility
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Learn About CSR
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-green-50 sm:text-lg">
            Corporate Social Responsibility connects organisational
            responsibility with social and environmental priorities. Explore
            how CSR partnerships can help support communities and contribute
            to meaningful development.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/apply-csr"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-bold text-green-900 transition hover:bg-green-50"
            >
              Apply for CSR <ArrowRight size={18} />
            </Link>
            <a
              href="https://razorpay.me/@bethechangefoundation5072"
              className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              Support Our Work <Heart size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* What is CSR */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Understanding CSR
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Responsibility that contributes to a better society
            </h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-green-700" />
          </div>

          <div className="space-y-4 text-base leading-8 text-slate-600">
            <p>
              Corporate Social Responsibility (CSR) refers broadly to the
              ways organisations consider and respond to their social,
              environmental, and community responsibilities.
            </p>
            <p>
              In India, Section 135 of the Companies Act, 2013 and Schedule
              VII provide an important framework for CSR obligations and
              eligible activities for companies that fall within the law's
              applicability criteria.
            </p>
            <p>
              Be The Change Foundation seeks to work towards holistic
              development through community-oriented initiatives. CSR
              partnerships can help align organisational resources with
              clearly defined social needs.
            </p>
            <p className="text-sm leading-6 text-slate-500">
              Note: CSR eligibility, permitted activities, and reporting
              requirements depend on applicable law and the specific
              circumstances of a company and project.
            </p>
          </div>
        </div>
      </section>

      {/* Article 21 */}
      <section className="bg-[#f5f8f3] px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex justify-center">
            <div className="flex h-36 w-36 items-center justify-center rounded-full border border-green-200 bg-white text-green-800 shadow-sm sm:h-44 sm:w-44">
              <Scale size={68} strokeWidth={1.4} />
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Dignity and human wellbeing
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              A life of dignity and opportunity
            </h2>
            <blockquote className="mt-5 border-l-4 border-green-700 pl-5 text-lg font-semibold leading-8 text-slate-700">
              Article 21 of the Constitution of India protects the right to
              life and personal liberty.
            </blockquote>
            <p className="mt-5 leading-8 text-slate-600">
              At Be The Change Foundation, we believe that every person
              deserves a worthy, meaningful, and dignified life. Community
              development efforts can help address barriers to opportunity,
              strengthen wellbeing, and support people in building a more
              secure future.
            </p>
          </div>
        </div>
      </section>

      {/* CSR focus areas */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Where we focus
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Our CSR Focus Areas
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Explore the areas in which community-focused initiatives can
              contribute to social development and improved opportunities.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
                >
                  <span className="inline-flex rounded-xl bg-green-50 p-3 text-green-800 transition group-hover:bg-green-100">
                    <Icon size={25} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership process */}
      <section className="bg-[#f8faf7] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Working together
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              How a CSR partnership can begin
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              A practical starting point for organisations interested in
              exploring a community development initiative.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="text-3xl font-extrabold text-green-700">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-3xl bg-[#14532d] p-7 text-white sm:p-10 lg:flex-row lg:items-center lg:p-14">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-200">
              Be part of the change
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Help create meaningful change across India
            </h2>
            <p className="mt-4 leading-8 text-green-50">
              If your organisation is interested in supporting social
              development, start a conversation about a potential CSR
              partnership with Be The Change Foundation.
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/apply-csr"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 font-bold text-green-900 transition hover:bg-green-50"
            >
              Apply for CSR <ArrowRight size={18} />
            </Link>
            <a
              href="https://razorpay.me/@bethechangefoundation5072"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              Donate <Heart size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
