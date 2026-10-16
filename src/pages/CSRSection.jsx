import {
  Handshake,
  House,
  Baby,
  Users,
  GraduationCap,
  BookOpen,
  HeartPulse,
  Sprout,
  Scale,
  Heart,
  Trees,
  Building2,
  BriefcaseBusiness,
  FileText,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const SITE = "https://bethechange.org.in";

const focusAreas = [
  { title: "Poverty Alleviation", icon: House },
  { title: "Child Development", icon: Baby },
  { title: "Women Empowerment", icon: Users },
  { title: "Skill Development", icon: GraduationCap },
  { title: "Education for Poor & Street Children", icon: BookOpen },
  { title: "Health Programs", icon: HeartPulse },
  { title: "Environment Protection", icon: Sprout },
  { title: "Consumer Awareness", icon: Scale },
  { title: "Elderly Care", icon: Heart },
  { title: "Rural Development", icon: Trees },
  { title: "Slum Development", icon: Building2 },
  { title: "Livelihood Support", icon: BriefcaseBusiness },
];

export default function CSRSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7faf8] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-green-100/60 " />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-emerald-100/50 " />

      <div className="relative mx-auto max-w-[1180px]">
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-green-800 shadow-sm">
            <Heart size={14} />
            Corporate Social Responsibility
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[42px]">
            Best NGO for CSR in India
            <span className="mt-1 block text-green-700">
              Be the Change Foundation
            </span>
          </h2>

          <div className="mx-auto mt-5 flex flex-col items-center justify-center gap-1.5">
            <span className="h-1 w-20 rounded-full bg-green-600" />
            <span className="h-1 w-20 rounded-full bg-blue-500" />
          </div>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Working together for inclusive growth, stronger communities, and
            meaningful social change across India.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-7">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)] sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
                <Handshake size={25} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Together, We Can Make a Difference
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  We endeavor for the holistic growth of the Nation and its
                  people. Be the Change Foundation works towards building a
                  stronger, more inclusive society through community-focused
                  initiatives.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-xl bg-green-50/80 p-4">
              <Heart size={19} className="mt-0.5 shrink-0 text-green-700" />
              <p className="text-sm leading-6 text-slate-700">
                Support our mission by donating to the NGO and helping people
                in need.
              </p>
            </div>

            <a
              href={`${SITE}/payment`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-bold text-green-800 transition-colors hover:text-green-950"
            >
              Support Our Mission
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-[#123d2b] p-6 text-white shadow-[0_12px_35px_rgba(18,61,43,0.15)] sm:p-8">
            <div aria-hidden="true" className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[24px] border-white/5" />
            <div aria-hidden="true" className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full border-[28px] border-white/5" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-green-200 ring-1 ring-white/15">
                <ShieldCheck size={27} />
              </div>

              <h3 className="mt-5 text-xl font-bold sm:text-2xl">
                Our Constitutional Commitment
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
                We believe every person deserves a worthy, meaningful, and
                dignified life, as guaranteed under Article 21 of the Indian
                Constitution.
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
                <Scale size={23} className="shrink-0 text-green-200" />
                <div>
                  <p className="font-bold text-white">Article 21</p>
                  <p className="mt-1 text-sm text-white/70">
                    Right to life and personal liberty
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 sm:mt-16">
          <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-green-700">
                Where We Make an Impact
              </p>
              <h3 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Our Key Focus Areas
              </h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600 sm:text-right">
              Discover the areas where our efforts help support individuals,
              families, and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map(({ title, icon: Icon }, index) => (
              <div
                key={title}
                className="group flex min-h-[86px] items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_3px_12px_rgba(15,23,42,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-[0_10px_25px_rgba(22,101,52,0.09)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-800 transition-colors duration-300 group-hover:bg-green-700 group-hover:text-white">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-semibold leading-6 text-slate-800">
                    {title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-2xl bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500 px-6 py-9 text-center shadow-[0_14px_35px_rgba(22,101,52,0.16)] sm:mt-16 sm:px-10 sm:py-11">
          <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-20 h-56 w-56 rounded-full border-[30px] border-white/10" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full border-[30px] border-white/10" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-50">
              Your Support Matters
            </p>
            <h3 className="mt-3 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              Help Us Create Lasting Change
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              Your support can help strengthen communities and contribute to
              education, health, livelihood, and social welfare initiatives.
            </p>

            <a
              href={`${SITE}/payment`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 font-bold text-green-800 shadow-sm transition hover:bg-green-50"
            >
              <Heart size={18} />
              Donate and Support Development
              <ArrowRight size={17} />
            </a>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <a
            href={`${SITE}/applyCSR`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-bold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
          >
            <FileText size={17} />
            Apply for CSR
            <ArrowUpRight size={16} />
          </a>

          <a
            href={`${SITE}/whatiscsr.html`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-bold text-slate-700 transition hover:border-green-300 hover:bg-green-50 hover:text-green-800"
          >
            Learn About CSR
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}