
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Users,
  School,
  Award,
  Monitor,
  BriefcaseBusiness,
  CheckCircle2,
  ShieldCheck,
  ClipboardCheck,
  ChartNoAxesCombined,
  Handshake,
  Mail,
  Phone,
  MapPin,
  Send,
  LoaderCircle,
  HeartHandshake,
  Target,
  FileCheck,
} from "lucide-react";
import { sendCSREmail } from "../../utils/csrEmailSender";

const initialForm = {
  contactPerson: "",
  organisation: "",
  email: "",
  phone: "",
  focusArea: "",
  budget: "",
  message: "",
};

const focusAreas = [
  "School Education Support (Class I–X)",
  "Scholarship & Competitive Exam Programs",
  "Teacher Training & National Award Programs",
  "Digital Learning & Rural School Development",
  "Career Guidance & Student Mentorship",
  "Skill Development & Youth Empowerment",
  "Other Education Initiative",
];

const budgetOptions = [
  "Below ₹1 Lakh",
  "₹1 Lakh – ₹5 Lakhs",
  "₹5 Lakhs – ₹10 Lakhs",
  "₹10 Lakhs – ₹25 Lakhs",
  "₹25 Lakhs – ₹50 Lakhs",
  "Above ₹50 Lakhs",
  "To Be Discussed",
];

const coreFocusAreas = [
  {
    number: "01",
    title: "School Education Support",
    subtitle: "Class I–X",
    description:
      "Support educational opportunities and learning initiatives for school students.",
    icon: School,
  },
  {
    number: "02",
    title: "Scholarships & Competitive Exams",
    subtitle: "Learning opportunities",
    description:
      "Help students access scholarship opportunities and competitive examination preparation.",
    icon: Award,
  },
  {
    number: "03",
    title: "Teacher Training & National Awards",
    subtitle: "Empowering educators",
    description:
      "Support teacher development, recognition, and initiatives that strengthen education.",
    icon: GraduationCap,
  },
  {
    number: "04",
    title: "Digital Learning & Rural Schools",
    subtitle: "Bridging the digital divide",
    description:
      "Promote digital learning opportunities and educational development in rural schools.",
    icon: Monitor,
  },
  {
    number: "05",
    title: "Career Guidance & Student Mentorship",
    subtitle: "Preparing for the future",
    description:
      "Help students explore career paths, receive guidance, and make informed decisions.",
    icon: Users,
  },
  {
    number: "06",
    title: "Skill Development & Youth Empowerment",
    subtitle: "Building capabilities",
    description:
      "Support skill development and help young people prepare for employment opportunities.",
    icon: BriefcaseBusiness,
  },
];

const credentials = [
  "CSR-1 Registered NGO",
  "12A & 80G Compliance",
  "NITI Aayog Darpan Registered",
  "Transparent Reporting & Impact Metrics",
  "State-Level Reach & Execution Capability",
];

const expectedOutcomes = [
  {
    title: "Reduced Dropout Rates",
    description:
      "Support initiatives that help students continue their education.",
    icon: BookOpen,
  },
  {
    title: "Increased Digital Literacy",
    description:
      "Expand access to digital learning and technology-enabled education.",
    icon: Monitor,
  },
  {
    title: "Empowered Teachers",
    description:
      "Encourage teacher development, learning, and professional recognition.",
    icon: GraduationCap,
  },
  {
    title: "Skilled, Employable Youth",
    description:
      "Promote career readiness, practical skills, and youth empowerment.",
    icon: BriefcaseBusiness,
  },
];

const partnershipBenefits = [
  {
    title: "Strong Governance",
    description:
      "Work towards clear objectives, responsible implementation, and transparent operations.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Operations",
    description:
      "Support accountability through appropriate reporting and impact metrics.",
    icon: ClipboardCheck,
  },
  {
    title: "Scalable Programs",
    description:
      "Explore education initiatives designed around project goals and community needs.",
    icon: ChartNoAxesCombined,
  },
];

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p
        className={`text-sm font-bold uppercase tracking-[0.18em] ${light ? "text-green-200" : "text-green-700"
          }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-3 text-3xl font-extrabold leading-tight sm:text-4xl ${light ? "text-white" : "text-slate-900"
          }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base leading-8 ${light ? "text-green-50" : "text-slate-600"
            }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function FormField({ label, required = false, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </span>
      {children}
    </label>
  );
}

const inputClasses =
  "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-green-700 focus:ring-2 focus:ring-green-700/10";

export default function ApplyCSR() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = "smooth";

    return () => {
      root.style.scrollBehavior = previousBehavior;
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await sendCSREmail({
        subject: "New CSR Partnership Enquiry - Be The Change Foundation",
        replyTo: form.email.trim(),
        data: {
          "Contact Person Name": form.contactPerson.trim(),
          "Company / Organization": form.organisation.trim(),
          "Official Email ID": form.email.trim(),
          "Contact Number": form.phone.trim(),
          "CSR Focus Area": form.focusArea,
          "Approximate CSR Budget": form.budget || "Not specified",
          "CSR Objectives / Requirements": form.message.trim(),
        },
      });

      setSubmitted(true);
      setForm(initialForm);
    } catch (submissionError) {
      setError(
        submissionError?.message ||
        "We could not submit your enquiry. Please try again or contact our CSR team directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-800">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#14532d] px-5 py-16 text-white sm:py-24">
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-lime-300/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-36 left-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-green-100">
            <HeartHandshake size={17} />
            CSR Partnership
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Partner with Purpose.
            <span className="block text-green-200">
              Empower Education. Transform Lives.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-green-50 sm:text-lg">
            Be The Change Foundation partners with forward-thinking
            organisations to create measurable, sustainable, and high-impact
            educational change across Maharashtra.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#csr-enquiry"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-bold text-green-900 transition hover:bg-green-50"
            >
              Apply for CSR Partnership
              <ArrowRight size={18} />
            </a>

            <a
              href="#csr-focus-areas"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              Explore Focus Areas
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-6 text-sm text-green-100">
            <span className="inline-flex items-center gap-2">
              <GraduationCap size={18} />
              Education-focused initiatives
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={18} />
              Working across Maharashtra
            </span>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-slate-100 bg-white px-5 py-4">
        <div className="mx-auto flex max-w-7xl items-center gap-2 text-sm text-slate-500">
          <Link to="/" className="transition hover:text-green-700">
            Home
          </Link>
          <span>/</span>
          <span className="font-semibold text-green-800">
            CSR Partnership
          </span>
        </div>
      </div>

      {/* Introduction */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Be The Change Foundation
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Best Education-Based NGO in Maharashtra
            </h2>

            <h3 className="mt-4 text-xl font-semibold text-green-800">
              Working Across the State to Strengthen Education
            </h3>

            <div className="mt-5 h-1 w-16 rounded-full bg-green-700" />

            <p className="mt-6 leading-8 text-slate-600">
              In today&apos;s world, CSR is not just a legal obligation, it
              is a legacy. At Be The Change Foundation, we partner with
              forward-thinking organisations to create measurable,
              sustainable, and high-impact educational change across
              Maharashtra.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              From villages to cities, we are creating access, equity, and
              opportunity through education.
            </p>

            <a
              href="#csr-enquiry"
              className="mt-7 inline-flex items-center gap-2 font-bold text-green-800 transition hover:text-green-950"
            >
              Start a CSR Conversation
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-green-100/70" />

            <div className="relative overflow-hidden rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 via-white to-lime-50 p-7 sm:p-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-800 text-white">
                <GraduationCap size={34} />
              </div>

              <h3 className="mt-6 text-2xl font-extrabold leading-snug text-slate-900">
                Let&apos;s Build a Smarter Tomorrow — Together
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Your CSR can help support educational opportunities,
                strengthen learning environments, and create pathways for
                students and young people.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Access to education",
                  "Equity and opportunity",
                  "Sustainable educational change",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      className="shrink-0 text-green-700"
                    />
                    <span className="font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section
        id="csr-focus-areas"
        className="scroll-mt-20 bg-[#f7faf6] px-5 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Core Focus Areas"
            title="Creating Opportunities Through Education"
            description="Our education-focused CSR initiatives aim to strengthen learning, encourage student development, and expand opportunities for young people across Maharashtra."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreFocusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.number}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex rounded-xl bg-green-50 p-3 text-green-800 transition group-hover:bg-green-100">
                      <Icon size={26} strokeWidth={1.8} />
                    </span>

                    <span className="text-sm font-bold tracking-wider text-green-700/60">
                      {area.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {area.title}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-green-800">
                    {area.subtitle}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>

          <p className="mt-8 text-center leading-7 text-slate-600">
            From villages to cities, we are creating access, equity, and
            opportunity through education.
          </p>
        </div>
      </section>

      {/* Why Corporates Choose Us */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Corporates Choose Us"
            title="A Partnership Built on Trust and Purpose"
            description="With strong governance, transparent operations, and scalable programs, we enable corporates to fulfil their CSR goals while transforming communities."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-green-200 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-800">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
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

      {/* Why Fund Us Through CSR */}
      <section className="bg-[#14532d] px-5 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-200">
              Why Fund Us Through CSR?
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Supporting Education With Accountability
            </h2>

            <p className="mt-5 leading-8 text-green-50">
              Be The Change Foundation highlights governance, compliance,
              transparent reporting, and implementation capability as
              important parts of its CSR partnerships.
            </p>

            <a
              href="#csr-enquiry"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-bold text-green-900 transition hover:bg-green-50"
            >
              Discuss Your CSR Goals
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
            <h3 className="text-xl font-bold">
              Foundation Credentials & Capabilities
            </h3>

            <div className="mt-6 space-y-5">
              {credentials.map((credential) => (
                <div
                  key={credential}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-green-200"
                  />

                  <p className="leading-7 text-green-50">{credential}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Expected Impact"
            title="Your CSR Investment Can Contribute To"
            description="Through education-focused initiatives, CSR partnerships can help support the following intended outcomes."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expectedOutcomes.map((outcome) => {
              const Icon = outcome.icon;

              return (
                <article
                  key={outcome.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-800">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-900">
                    {outcome.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {outcome.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CSR Enquiry Form */}
      <section
        id="csr-enquiry"
        className="scroll-mt-20 bg-[#f7faf6] px-5 py-16 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
              Contact for CSR Partnerships
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Let&apos;s Build a Smarter Tomorrow — Together
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Your CSR can help change lives. Join hands with Be The Change
              Foundation and be a catalyst for educational transformation
              in Maharashtra.
            </p>

            <div className="mt-8 rounded-2xl border border-green-100 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-800">
                  <Handshake size={25} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">CSR Team</p>
                  <h3 className="font-bold text-slate-900">
                    Abhishek Tupe | Mayur Dhokchaule
                  </h3>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <a
                  href="tel:+918796696960"
                  className="flex items-center gap-3 text-slate-700 transition hover:text-green-800"
                >
                  <Phone size={19} className="shrink-0 text-green-700" />
                  <span>8796696960</span>
                  <ArrowUpRight size={15} className="ml-auto" />
                </a>

                <a
                  href="tel:+919067498721"
                  className="flex items-center gap-3 text-slate-700 transition hover:text-green-800"
                >
                  <Phone size={19} className="shrink-0 text-green-700" />
                  <span>9067498721</span>
                  <ArrowUpRight size={15} className="ml-auto" />
                </a>

                <a
                  href="https://bethechange.org.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-700 transition hover:text-green-800"
                >
                  <MapPin size={19} className="shrink-0 text-green-700" />
                  <span>bethechange.org.in</span>
                  <ArrowUpRight size={15} className="ml-auto" />
                </a>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-xl bg-green-50 p-5">
              <ShieldCheck
                size={22}
                className="mt-0.5 shrink-0 text-green-800"
              />
              <p className="text-sm leading-7 text-slate-600">
                Share your CSR requirements so the team can understand your
                organisation&apos;s objectives and preferred education
                initiatives.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-7">
              <h3 className="text-2xl font-extrabold text-slate-900">
                Quick CSR Enquiry
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-500">
                Tell us about your organisation and the CSR initiative you
                would like to explore.
              </p>
            </div>

            {submitted ? (
              <div
                role="status"
                className="rounded-xl border border-green-200 bg-green-50 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-800">
                  <CheckCircle2 size={28} />
                </div>

                <h4 className="mt-4 text-xl font-bold text-green-900">
                  Enquiry Submitted Successfully
                </h4>

                <p className="mt-3 leading-7 text-green-800">
                  Thank you for your interest in partnering with Be The
                  Change Foundation. Your enquiry has been accepted by the
                  email service.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 inline-flex items-center gap-2 font-bold text-green-900 hover:underline"
                >
                  Submit another enquiry <ArrowRight size={17} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Contact Person Name" required>
                    <input
                      type="text"
                      name="contactPerson"
                      autoComplete="name"
                      value={form.contactPerson}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Enter your full name"
                      required
                      maxLength={120}
                    />
                  </FormField>

                  <FormField label="Company / Organization" required>
                    <input
                      type="text"
                      name="organisation"
                      autoComplete="organization"
                      value={form.organisation}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Organization name"
                      required
                      maxLength={180}
                    />
                  </FormField>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="Official Email ID" required>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="name@company.com"
                      required
                      maxLength={254}
                    />
                  </FormField>

                  <FormField label="Contact Number" required>
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Enter contact number"
                      required
                      maxLength={20}
                      pattern="[+0-9() -]{7,20}"
                      title="Enter a valid phone number."
                    />
                  </FormField>
                </div>

                <FormField label="CSR Focus Area" required>
                  <select
                    name="focusArea"
                    value={form.focusArea}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  >
                    <option value="">Select a CSR focus area</option>

                    {focusAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField label="Approximate CSR Budget (Optional)">
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Select an approximate budget</option>

                    {budgetOptions.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField
                  label="CSR Objectives / Requirements"
                  required
                >
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClasses} min-h-32 resize-y`}
                    placeholder="Tell us about your CSR objectives, preferred location, target students, or project requirements."
                    rows={5}
                    required
                    maxLength={3000}
                  />
                </FormField>

                {error && (
                  <div
                    role="alert"
                    className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
                  >
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-800 px-6 py-3.5 font-bold text-white transition hover:bg-green-900 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <LoaderCircle size={19} className="animate-spin" />
                      Submitting Enquiry...
                    </>
                  ) : (
                    <>
                      Submit CSR Enquiry
                      <Send size={18} />
                    </>
                  )}
                </button>

                <p className="text-center text-xs leading-6 text-slate-500">
                  Your enquiry will be sent to the configured foundation
                  email address. Please avoid including sensitive personal
                  information.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-16 sm:pb-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-3xl bg-[#14532d] p-7 text-white sm:p-10 lg:flex-row lg:items-center lg:p-14">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-200">
              Partner With Purpose
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              Let&apos;s Transform Education Across Maharashtra
            </h2>

            <p className="mt-4 leading-8 text-green-50">
              Join hands with Be The Change Foundation to support educational
              transformation and create opportunities for students and
              communities.
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#csr-enquiry"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 font-bold text-green-900 transition hover:bg-green-50"
            >
              Apply for CSR <ArrowRight size={18} />
            </a>

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
