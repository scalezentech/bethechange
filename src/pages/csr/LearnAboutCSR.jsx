
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
  ClipboardCheck,
  ChartNoAxesCombined,
  Building2,
  FileCheck,
  Target,
} from "lucide-react";

const csrImpactStats = [
  {
    value: "₹15,000+ Cr",
    label: "CSR spent annually in India",
  },
  {
    value: "20,000+",
    label: "Companies covered",
  },
  {
    value: "2%",
    label: "Minimum CSR spending benchmark",
  },
  {
    value: "100+ Million",
    label: "Lives impacted annually",
  },
];


const focusAreas = [
  {
    title: "Poverty Alleviation",
    description:
      "Support vulnerable communities and improve access to essential resources and opportunities.",
    icon: HandHeart,
  },
  {
    title: "Child Development",
    description:
      "Promote children's wellbeing, education, safety, and opportunities for a brighter future.",
    icon: Heart,
  },
  {
    title: "Women Empowerment",
    description:
      "Encourage women's independence, leadership, skills, and participation in community development.",
    icon: Users,
  },
  {
    title: "Skill Development",
    description:
      "Support practical learning, employability, and opportunities for youth and underserved communities.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Education for Poor & Street Children",
    description:
      "Help improve access to education for children facing social and economic barriers.",
    icon: GraduationCap,
  },
  {
    title: "Health Programs",
    description:
      "Promote health awareness, community wellbeing, and access to health-related initiatives.",
    icon: HeartPulse,
  },
  {
    title: "Environment Protection",
    description:
      "Encourage environmental conservation, sustainability, and responsible use of natural resources.",
    icon: Leaf,
  },
  {
    title: "Consumer Awareness",
    description:
      "Promote informed decisions and awareness of consumer rights and responsibilities.",
    icon: ShieldCheck,
  },
  {
    title: "Elderly Care",
    description:
      "Encourage dignity, inclusion, care, and wellbeing for older members of society.",
    icon: Heart,
  },
  {
    title: "Rural Development",
    description:
      "Support community development and improved opportunities in rural areas.",
    icon: Sprout,
  },
  {
    title: "Slum Development",
    description:
      "Promote community wellbeing and development in underserved urban settlements.",
    icon: Building2,
  },
  {
    title: "Livelihood Support",
    description:
      "Encourage income-generation opportunities, economic participation, and self-reliance.",
    icon: ChartNoAxesCombined,
  },
];

const partnershipBenefits = [
  {
    title: "Comprehensive Expertise",
    description:
      "Bring together project planning, community engagement, and development-focused approaches.",
    icon: BookOpen,
  },
  {
    title: "Transparent Implementation",
    description:
      "Establish clear project objectives, responsibilities, and reporting expectations.",
    icon: ShieldCheck,
  },
  {
    title: "Community Reach",
    description:
      "Explore initiatives designed around local needs and the intended beneficiary communities.",
    icon: Users,
  },
  {
    title: "Impact Measurement",
    description:
      "Identify suitable indicators to review progress and document project outcomes.",
    icon: ChartNoAxesCombined,
  },
];

const csrServices = [
  {
    title: "Strategy Development",
    description:
      "Discuss CSR objectives, stakeholder needs, project planning, and resource allocation.",
  },
  {
    title: "Project Implementation",
    description:
      "Plan activities, coordinate delivery, and engage relevant communities and partners.",
  },
  {
    title: "Monitoring and Evaluation",
    description:
      "Review progress against agreed objectives and assess relevant project outcomes.",
  },
  {
    title: "Reporting and Communication",
    description:
      "Document project progress, outcomes, and reporting information for stakeholders.",
  },
];

const partnershipSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Discuss your organisation's CSR objectives, preferred focus areas, and intended outcomes.",
  },
  {
    number: "02",
    title: "Proposal Development",
    description:
      "Define the proposed activities, project scope, expected outcomes, and implementation approach.",
  },
  {
    number: "03",
    title: "Agreement and Launch",
    description:
      "Agree on responsibilities, timelines, resources, and reporting expectations before implementation.",
  },
  {
    number: "04",
    title: "Implementation and Monitoring",
    description:
      "Carry out agreed activities, coordinate delivery, and review project progress.",
  },
  {
    number: "05",
    title: "Impact Assessment and Reporting",
    description:
      "Review the outcomes against agreed objectives and document relevant findings.",
  },
];

export default function LearnAboutCSR() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#14532d] px-5 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 left-1/4 -z-10 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-green-100">
            <BookOpen size={17} />
            Corporate Social Responsibility
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Learn About CSR
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-green-50 sm:text-lg">
            Corporate Social Responsibility creates opportunities for
            businesses to contribute to social and environmental development.
            Be The Change Foundation works with organisations to explore
            meaningful community initiatives and sustainable development.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/apply-csr"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-bold text-green-900 transition hover:bg-green-50"
            >
              Apply for CSR <ArrowRight size={18} />
            </Link>

            <a
              href="https://bethechange.org.in/whatiscsr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              View Original CSR Page
            </a>
          </div>
        </div>
      </section>

      {/* What Is CSR */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Understanding CSR
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Corporate responsibility with a purpose
            </h2>

            <div className="mt-5 h-1 w-16 rounded-full bg-green-700" />

            <p className="mt-6 leading-8 text-slate-600">
              Corporate Social Responsibility (CSR) is an approach through
              which businesses contribute to sustainable development by
              considering the social and environmental effects of their
              activities.
            </p>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              CSR partnerships can bring together corporate resources,
              organisational expertise, and community needs to support
              initiatives with clearly defined objectives.
            </p>

            <p>
              Be The Change Foundation works across community development
              themes, including education, health, environment, social
              welfare, rural development, women empowerment, and other
              social initiatives.
            </p>

            <p>
              Every partnership should begin with a clear understanding of
              the intended beneficiaries, project activities, resources,
              responsibilities, and how outcomes will be reviewed.
            </p>
          </div>
        </div>
      </section>

      {/* CSR Impact Statistics - India */}
      <section className="bg-[#14532d] px-5 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-200">
              CSR in India
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              The Scale of Social Impact
            </h2>

            <p className="mt-4 leading-8 text-green-50">
              Corporate Social Responsibility helps mobilise resources and
              supports development initiatives across India.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {csrImpactStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/5 p-5 text-center transition hover:bg-white/10 sm:p-7"
              >
                <p className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                  {stat.value}
                </p>

                <p className="mt-3 text-sm leading-6 text-green-100">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-6 text-green-100/80">
            National CSR statistics are reproduced from figures displayed
            on the existing website. Their reporting period and underlying
            sources should be verified before publication.
          </p> */}
        </div>
      </section>


      {/* CSR Legal Framework */}
      <section className="bg-[#f5f8f3] px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex justify-center">
            <div className="flex h-36 w-36 items-center justify-center rounded-full border border-green-200 bg-white text-green-800 shadow-sm sm:h-44 sm:w-44">
              <Scale size={66} strokeWidth={1.5} />
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              CSR in India
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Understanding the Legal Framework
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Section 135 of the Companies Act, 2013, together with Schedule
              VII and the applicable CSR Rules, establishes the framework
              for corporate social responsibility in India.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-green-100 bg-white p-5">
                <FileCheck className="text-green-700" size={25} />

                <h3 className="mt-3 font-bold text-slate-900">
                  Net Worth
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  ₹500 crore or more.
                </p>
              </div>

              <div className="rounded-xl border border-green-100 bg-white p-5">
                <Building2 className="text-green-700" size={25} />

                <h3 className="mt-3 font-bold text-slate-900">
                  Turnover
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  ₹1,000 crore or more.
                </p>
              </div>

              <div className="rounded-xl border border-green-100 bg-white p-5">
                <ClipboardCheck className="text-green-700" size={25} />

                <h3 className="mt-3 font-bold text-slate-900">
                  Net Profit
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  ₹5 crore or more.
                </p>
              </div>
            </div>

            <p className="mt-5 leading-8 text-slate-600">
              Companies meeting any one of the applicable thresholds may
              be subject to CSR provisions. The statutory framework
              generally provides for spending at least 2% of average net
              profits from the three immediately preceding financial years,
              subject to the Act and applicable rules.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Consult the current legislation and a qualified compliance
              professional for specific eligibility, spending, implementing
              agency, and reporting requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Our areas of work
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Our Key Focus Areas
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Explore the social development themes that can provide a
              starting point for discussing potential CSR initiatives.
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

      {/* Why Partner */}
      <section className="bg-[#f8faf7] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Working together
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Why Partner With Be The Change Foundation?
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Effective CSR partnerships require clear objectives,
              responsible implementation, community participation, and
              meaningful project review.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partnershipBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <Icon size={28} className="text-green-700" />

                  <h3 className="mt-4 font-bold text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CSR Services */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              How we can collaborate
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              CSR Services
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              CSR collaboration may involve planning initiatives,
              coordinating implementation, monitoring progress, and
              documenting results according to the agreed project scope.
            </p>

            <Link
              to="/apply-csr"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-green-700 px-6 py-3 font-bold text-white transition hover:bg-green-800"
            >
              Discuss a CSR Project <ArrowRight size={18} />
            </Link>
          </div>

          <div className="space-y-4">
            {csrServices.map((service) => (
              <article
                key={service.title}
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5"
              >
                <span className="mt-1 rounded-lg bg-green-50 p-2 text-green-800">
                  <CheckCircle2 size={21} />
                </span>

                <div>
                  <h3 className="font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="bg-[#f5f8f3] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              From idea to implementation
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              How a CSR Partnership Works
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              A structured process helps organisations and implementation
              partners agree on project objectives and review progress.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipSteps.map((step) => (
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

      {/* Constitutional Commitment */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-3xl border border-green-100 bg-white p-7 sm:p-10 lg:grid-cols-[auto_1fr] lg:p-14">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-green-50 text-green-800">
            <Scale size={42} strokeWidth={1.5} />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Our constitutional commitment
            </p>

            <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
              Dignity, Opportunity, and a Meaningful Life
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              At Be The Change Foundation, we believe every person deserves
              a worthy, meaningful, and dignified life. Article 21 of the
              Constitution of India protects the right to life and personal
              liberty. Our community-focused mission reflects a commitment
              to social development and improved opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-16 sm:pb-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-3xl bg-[#14532d] p-7 text-white sm:p-10 lg:flex-row lg:items-center lg:p-14">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-200">
              Be part of the change
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Let's Create Meaningful Social Impact Together
            </h2>

            <p className="mt-4 leading-8 text-green-50">
              Share your organisation's CSR objectives and explore a
              potential partnership with Be The Change Foundation.
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/apply-csr"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 font-bold text-green-900 transition hover:bg-green-50"
            >
              Apply for CSR <ArrowRight size={18} />
            </Link>

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
