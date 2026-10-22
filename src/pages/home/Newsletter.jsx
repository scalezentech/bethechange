import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import newsletterBg from "../../assets/images/background/newsletter-bg.png";

export default function Newsletter() {
  return (
    <section className="relative -mt-5 isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${newsletterBg})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[850px] text-center">
        <p
          data-gsap-reveal
          className="text-lg font-bold italic leading-relaxed text-[#ffdc62] sm:text-2xl"
        >
          Join Us: Let's Make a Difference Together
        </p>

        <h2
          data-gsap-reveal
          className="mt-3 text-2xl font-bold leading-snug text-white sm:text-3xl md:text-4xl"
        >
          Be the first to know about specials,
          <br className="hidden sm:block" /> events, and much more!

          <span className="mt-1 block">
            Stand with Our Campaigns for Society
          </span>
        </h2>

        {/* Accent line */}
        <div
          data-gsap-reveal
          aria-hidden="true"
          className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#20b76b]"
        />

        {/* Contact CTA */}
        <div
          data-gsap-stagger
          className="mt-7 flex justify-center"
        >
          <Link
            to="/contact-us"
            data-gsap-item
            className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#ffdc62] px-8 py-4 text-sm font-bold text-[#087f3e] shadow-lg transition-colors duration-300 hover:bg-[#ffcf35] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70 sm:min-w-[190px] sm:text-base"
          >
            Contact Us

            <ArrowRight
              size={18}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}