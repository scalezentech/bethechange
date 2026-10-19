
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import newsletterBg from "../../assets/images/background/newsletter-bg.png";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    // Connect this handler to your newsletter API.
    setStatus("pending");
  };

  return (
    <section className="relative -mt-5 isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${newsletterBg})` }}
      />


      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[850px] text-center">
        <p className="text-lg font-bold italic leading-relaxed text-[#ffdc62] sm:text-2xl">
          Join Us: Provide Your Name and Mobile Number
        </p>

        <h2 className="mt-3 text-2xl font-bold leading-snug text-white sm:text-3xl md:text-4xl">
          Be the first to know about specials,
          <br className="hidden sm:block" /> events, and much more!
          <span className="mt-1 block">
            Stand with Our Campaigns for Society
          </span>
        </h2>

        <div
          aria-hidden="true"
          className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#20b76b]"
        />

        {/* Newsletter form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex w-full max-w-[635px] flex-col overflow-hidden rounded-lg bg-white shadow-lg sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>

          <input
            id="newsletter-email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setStatus("idle");
            }}
            placeholder="Enter your email address"
            autoComplete="email"
            required
            className="block h-14 w-full min-w-0 flex-1 appearance-none rounded-none border-0 bg-white px-5 text-sm text-[#343434] outline-none placeholder:text-[#777] focus:outline-none focus:ring-0 sm:px-10"
          />

          <button
            type="submit"
            className="inline-flex h-14 shrink-0 items-center justify-center gap-2 border-0 bg-[#ffdc62] px-7 text-sm font-bold text-[#087f3e] transition-colors hover:bg-[#ffcf35] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#087f3e] sm:min-w-[165px]"
          >
            Subscribe Now
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </form>

        {status === "pending" && (
          <p role="status" className="mt-4 text-sm text-white">
            Newsletter subscription needs to be connected to your backend.
          </p>
        )}
      </div>
    </section>
  );
}
