import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Handshake,
  MapPin,
} from "lucide-react";
import {sendCSREmail} from "../../utils/csrEmailSender.js"

const initialForm = {
  organisation: "",
  contactPerson: "",
  email: "",
  phone: "",
  focusArea: "",
  budget: "",
  message: "",
};

const focusAreas = [
  "Poverty Alleviation",
  "Child Development",
  "Women Empowerment",
  "Skill Development",
  "Education for Poor & Street Children",
  "Health Programs",
  "Environment Protection",
  "Consumer Awareness",
  "Elderly Care",
  "Rural Development",
  "Slum Development",
  "Livelihood Support",
];

const inputClass =
  "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-green-700 focus:ring-2 focus:ring-green-100";

export default function ApplyCSR() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

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

    if (isSending) return;

    setIsSending(true);
    setError("");

    try {
      await sendCSREmail({
        subject: "New CSR Partnership Enquiry",
        replyTo: form.email.trim(),
        data: {
          "Contact Person Name": form.contactPerson.trim(),
          "Company / Organization": form.organisation.trim(),
          "Official Email ID": form.email.trim(),
          "Contact Number": form.phone.trim(),
          "CSR Focus Area": form.focusArea,
          "Approx CSR Budget": form.budget || "Not specified",
          "CSR Objective, Preferred Location, or Timeline":
            form.message.trim(),
        },
      });

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit your enquiry. Please try again.",
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setSubmitted(false);
    setError("");
  };

  return (
    <main className="min-h-screen bg-[#f8faf7] text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#14532d] px-5 py-16 text-white sm:py-20">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-green-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-green-100 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <div className="flex max-w-3xl items-start gap-4">
            <div className="hidden rounded-2xl bg-white/10 p-4 sm:block">
              <Handshake size={36} />
            </div>

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-200">
                Corporate Social Responsibility
              </p>

              <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
                Apply for CSR Partnership
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-green-50 sm:text-lg">
                Partner with Be The Change Foundation to support meaningful
                community initiatives and create sustainable social impact
                across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Information panel — preserved */}
          <aside>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
              <span className="inline-flex rounded-full bg-green-50 p-3 text-green-800">
                <Building2 size={25} />
              </span>

              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                Let's create change together
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Share your organisation's CSR priorities with us. The
                information below can help outline the initiative, communities
                you want to support, and your proposed timeline.
              </p>

              <div className="mt-7 space-y-5">
                <div className="flex gap-3">
                  <CheckCircle2
                    className="mt-1 shrink-0 text-green-700"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Purpose-led projects
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Identify a social development focus that aligns with
                      your organisation's priorities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin
                    className="mt-1 shrink-0 text-green-700"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Community-focused impact
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Describe the region and communities you would like to
                      support.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Handshake
                    className="mt-1 shrink-0 text-green-700"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Collaborative approach
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Provide the details needed to discuss a possible
                      partnership.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-green-50 p-5">
                <h3 className="font-bold text-green-950">
                  Learn more about CSR
                </h3>

                <p className="mt-2 text-sm leading-6 text-green-900">
                  Understand the purpose of CSR and explore our focus areas
                  before submitting your enquiry.
                </p>

                <Link
                  to="/learn-about-csr"
                  className="mt-4 inline-flex items-center gap-2 font-bold text-green-800 hover:text-green-950"
                >
                  Learn About CSR <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </aside>

          {/* CSR enquiry form */}
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="py-10 text-center">
                <CheckCircle2
                  size={54}
                  className="mx-auto text-green-700"
                />

                <h2 className="mt-5 text-2xl font-bold text-slate-900">
                  Enquiry Submitted Successfully
                </h2>

                <p className="mx-auto mt-3 max-w-lg leading-7 text-slate-600">
                  Thank you for contacting Be The Change Foundation about a
                  CSR partnership. The email service accepted your request.
                  Our team aims to respond within 24–48 working hours.
                </p>

                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-7 rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                    CSR / Partnership Enquiry
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl">
                    CSR Partnership Enquiry
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Share your CSR objective and our team will get back with
                    a suitable proposal.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    className={inputClass}
                    type="text"
                    name="contactPerson"
                    value={form.contactPerson}
                    onChange={handleChange}
                    placeholder="Contact Person Name*"
                    autoComplete="name"
                    maxLength={120}
                    required
                  />

                  <input
                    className={inputClass}
                    type="text"
                    name="organisation"
                    value={form.organisation}
                    onChange={handleChange}
                    placeholder="Company / Organization*"
                    autoComplete="organization"
                    maxLength={200}
                    required
                  />

                  <input
                    className={inputClass}
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Official Email ID*"
                    autoComplete="email"
                    maxLength={254}
                    required
                  />

                  <input
                    className={inputClass}
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Contact Number*"
                    autoComplete="tel"
                    pattern="[+]?[0-9 ()-]{10,20}"
                    title="Enter a valid contact number."
                    required
                  />

                  <select
                    className={`${inputClass} ${
                      form.focusArea ? "" : "text-slate-900"
                    }`}
                    name="focusArea"
                    value={form.focusArea}
                    onChange={handleChange}
                    required
                  >
                    <option value="">CSR Focus Area*</option>

                    {focusAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>

                  <select
                    className={`${inputClass} ${
                      form.budget ? "" : "text-slate-900"
                    }`}
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                  >
                    <option value="">
                      Approx CSR Budget (optional)
                    </option>
                    <option value="Below ₹5 lakh">Below ₹5 lakh</option>
                    <option value="₹5–10 lakh">₹5–10 lakh</option>
                    <option value="₹10–25 lakh">₹10–25 lakh</option>
                    <option value="₹25–50 lakh">₹25–50 lakh</option>
                    <option value="Above ₹50 lakh">Above ₹50 lakh</option>
                    <option value="To be discussed">To be discussed</option>
                  </select>

                  <textarea
                    className={`${inputClass} min-h-24 resize-y`}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your CSR objective, preferred location, or timeline*"
                    minLength={10}
                    maxLength={2000}
                    required
                  />

                  {error && (
                    <p
                      role="alert"
                      className="rounded-md bg-red-50 px-3 py-2 text-sm leading-6 text-red-700"
                    >
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e73549] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ca293c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSending ? "Sending Enquiry..." : "Submit CSR Enquiry"}
                    {!isSending && <ArrowRight size={16} />}
                  </button>

                  <p className="text-xs leading-5 text-slate-600">
                    This enquiry reaches our CSR team directly. We respond
                    within 24–48 working hours.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Learn About CSR section — preserved */}
      <section className="bg-white px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Want to understand our CSR approach first?
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Explore our focus areas and the role of responsible community
              development.
            </p>
          </div>

          <Link
            to="/learn-about-csr"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-green-700 px-5 py-3 font-semibold text-green-800 transition hover:bg-green-50"
          >
            Learn About CSR <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
