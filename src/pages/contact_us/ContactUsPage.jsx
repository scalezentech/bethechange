import { useState } from "react";
import {
  MapPin,
  Phone,
  Globe,
  ArrowUpRight,
  Send,
  Clock,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Navigation,
} from "lucide-react";


const foundationAddress =
  "Maruti Temple Road, At/Po - Khandala, Tal. - Shrirampur, Dist. - Ahmednagar, Maharashtra, Pin Code - 413709";

const mapSearchQuery = encodeURIComponent(
  `Be The Change Foundation, ${foundationAddress}, India`
);

const mapEmbedUrl = `https://maps.google.com/maps?q=${mapSearchQuery}&z=17&output=embed`;

const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${mapSearchQuery}`;

const contactDetails = [
  {
    title: "Our Address",
    value: foundationAddress,
    icon: MapPin,
    href: mapOpenUrl,
    action: "Get directions",
    external: true,
  },
  {
    title: "Phone Number",
    value: "+91 9067498721",
    icon: Phone,
    href: "tel:+919067498721",
    action: "Call the foundation",
  },
  {
    title: "Website",
    value: "bethechange.org.in",
    icon: Globe,
    href: "https://bethechange.org.in/",
    action: "Visit website",
    external: true,
  },
];

const inputClass =
  "w-full rounded-xl border border-stone-200 bg-[#fcfbf8] px-4 py-3.5 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-emerald-800 focus:bg-white focus:ring-2 focus:ring-emerald-800/10";

const ContactUs = () => {
  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormStatus({
      type: "",
      message: "",
    });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      mobile: formData.get("mobile")?.toString().trim(),
    };

    const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL;

    // Do not claim a message was delivered without a configured API.
    if (!contactApiUrl) {
      setFormStatus({
        type: "error",
        message:
          "Online form submission has not been connected yet. Please call +91 9067498721 to contact the foundation.",
      });

      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to submit your details.");
      }

      setFormStatus({
        type: "success",
        message:
          "Your details have been submitted successfully. Thank you for contacting the foundation.",
      });

      form.reset();
    } catch {
      setFormStatus({
        type: "error",
        message:
          "We could not submit your details. Please try again later or call +91 9067498721.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c8b991]/70 bg-white/50 px-4 py-2">
                <MessageCircle
                  size={15}
                  className="text-emerald-900"
                />

                <span className="text-xs font-semibold text-[#315542]">
                  We'd love to hear from you
                </span>
              </div>

              <h1 className="font-serif text-5xl font-medium leading-[1.1] tracking-tight text-[#183e31] sm:text-6xl lg:text-7xl">
                Get in
                <span className="italic text-[#9b3435]">
                  {" "}touch.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg sm:leading-9">
                Have a question about our initiatives, want to collaborate,
                or would like to support our work? Reach out to Be The Change
                Foundation. We'd be glad to hear from you.
              </p>

              <a
                href="#contact-details"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2"
              >
                Contact Information
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT DETAILS + FORM */}
        <section
          id="contact-details"
          className="scroll-mt-24 py-14 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
              {/* CONTACT INFORMATION */}
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#9b3435] sm:text-sm">
                  Get in touch
                </p>

                <h2 className="font-serif text-3xl font-medium leading-tight text-[#183e31] sm:text-4xl">
                  We're here to help.
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
                  We are at your disposal 7 days a week. Contact us using
                  the information below for questions about our work and
                  activities.
                </p>

                <div className="mt-8 space-y-4">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon;

                    return (
                      <article
                        key={detail.title}
                        className="group rounded-2xl border border-stone-200 bg-white p-5 transition-colors duration-300 hover:border-[#bfd2c2] sm:p-6"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf2e9] text-emerald-900 transition-colors duration-300 group-hover:bg-emerald-900 group-hover:text-white">
                            <Icon size={22} strokeWidth={1.7} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-[#183e31]">
                              {detail.title}
                            </h3>

                            <p className="mt-2 break-words text-sm leading-7 text-stone-600">
                              {detail.value}
                            </p>

                            <a
                              href={detail.href}
                              target={
                                detail.external ? "_blank" : undefined
                              }
                              rel={
                                detail.external
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 transition-colors hover:text-[#9b3435] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 sm:text-sm"
                            >
                              {detail.action}
                              <ArrowUpRight size={14} />
                            </a>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-start gap-3 rounded-2xl bg-[#f0ede4] p-5">
                  <Clock
                    size={20}
                    className="mt-0.5 shrink-0 text-emerald-900"
                  />

                  <div>
                    <h3 className="text-sm font-semibold text-[#183e31]">
                      Get in touch with us
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-stone-600">
                      Reach out by phone or use the contact form to share
                      your details with the foundation.
                    </p>
                  </div>
                </div>
              </div>

              {/* CONTACT FORM */}
              <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_8px_35px_rgba(24,62,49,0.04)] sm:p-9 lg:p-10">
                <div className="mb-8">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9b3435]">
                    Have a question?
                  </p>

                  <h2 className="font-serif text-3xl font-medium text-[#183e31] sm:text-4xl">
                    Drop us a line.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-stone-500">
                    Fill in the required details below so the foundation
                    can identify and respond to your enquiry.
                  </p>

                  <p className="mt-3 text-xs text-stone-500">
                    Fields marked with{" "}
                    <span className="font-bold text-[#9b3435]">*</span>{" "}
                    are required.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* FULL NAME */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-semibold text-stone-700"
                    >
                      Complete Name
                      <span className="ml-1 text-[#9b3435]">*</span>
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your complete name"
                      required
                      maxLength={120}
                      className={inputClass}
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-semibold text-stone-700"
                    >
                      Email Address
                      <span className="ml-1 text-[#9b3435]">*</span>
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                      maxLength={254}
                      className={inputClass}
                    />
                  </div>

                  {/* MOBILE NUMBER */}
                  <div>
                    <label
                      htmlFor="contact-mobile"
                      className="mb-2 block text-sm font-semibold text-stone-700"
                    >
                      Mobile Number
                      <span className="ml-1 text-[#9b3435]">*</span>
                    </label>

                    <input
                      id="contact-mobile"
                      name="mobile"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="Enter your mobile number"
                      required
                      minLength={7}
                      maxLength={20}
                      pattern="[0-9+() -]{7,20}"
                      title="Enter a valid phone number using digits, spaces, +, parentheses, or hyphens."
                      className={inputClass}
                    />
                  </div>

                  {/* SUBMISSION STATUS */}
                  {formStatus.message && (
                    <div
                      role="status"
                      aria-live="polite"
                      className={`flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${
                        formStatus.type === "success"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                          : "border-red-200 bg-red-50 text-red-800"
                      }`}
                    >
                      {formStatus.type === "success" ? (
                        <CheckCircle2
                          size={19}
                          className="mt-0.5 shrink-0"
                        />
                      ) : (
                        <AlertCircle
                          size={19}
                          className="mt-0.5 shrink-0"
                        />
                      )}

                      <p>{formStatus.message}</p>
                    </div>
                  )}

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-900 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Now"}

                    {!isSubmitting && <Send size={16} />}
                  </button>

                  <p className="text-xs leading-6 text-stone-500">
                    Your details should be handled securely and only used
                    for the purpose of responding to your enquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* MAP */}
        <section className="border-t border-stone-200 bg-[#f1eee5] py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#9b3435] sm:text-sm">
                  Find us
                </p>

                <h2 className="font-serif text-3xl font-medium text-[#183e31] sm:text-4xl">
                  Visit our location.
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
                  {foundationAddress}
                </p>
              </div>

              <a
                href={mapOpenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-[#183e31] transition-colors hover:border-emerald-800 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 sm:self-auto"
              >
                <Navigation size={16} />
                Open in Maps
                <ArrowUpRight size={15} />
              </a>
            </div>

            {/* MAP EMBED */}
            <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white p-2 shadow-sm">
              <iframe
                title="Be The Change Foundation location in Khandala, Shrirampur"
                src={mapEmbedUrl}
                className="h-[320px] w-full rounded-2xl border-0 sm:h-[420px] lg:h-[480px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <p className="mt-3 text-xs leading-6 text-stone-500">
              The map uses the foundation's published address. Verify the
              marker in Google Maps before travelling.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#183e31] px-5 py-14 text-white sm:px-8 sm:py-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between lg:px-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8d6a1]">
                Let's create change
              </p>

              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                Every conversation can be a beginning.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                Connect with Be The Change Foundation and learn more about
                our work.
              </p>
            </div>

            <a
              href="tel:+919067498721"
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#e8d6a1] px-6 py-3.5 text-sm font-semibold text-[#183e31] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#183e31] sm:self-auto"
            >
              <Phone size={16} />
              Call Us
              <ArrowUpRight size={15} />
            </a>
          </div>
        </section>
      </main>

    </>
  );
};

export default ContactUs;