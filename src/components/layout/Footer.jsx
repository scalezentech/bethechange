import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaChevronUp,
  FaExternalLinkAlt,
} from "react-icons/fa";

import footerBg from "../../assets/images/testimonialsReviewer/testimonials-bg.png";
import logo from "../../assets/images/logo-two.png";

const footerLinks = {
  about: [
    { label: "Our Vision", href: "/ourvission.html" },
    { label: "Our Mission", href: "/ourmission.html" },
    { label: "Sunrise School", href: "#" },
  ],

  work: [
    { label: "Education", href: "/education.html" },
    { label: "Health", href: "/health.html" },
    { label: "Culture", href: "/culture.html" },
    { label: "Women Empowerment", href: "/women-empowerment.html" },
  ],
};

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    Icon: FaFacebookF,
    className: "hover:bg-[#1877F2]",
  },
  {
    label: "Twitter",
    href: "#",
    Icon: FaTwitter,
    className: "hover:bg-[#1DA1F2]",
  },
  {
    label: "Instagram",
    href: "#",
    Icon: FaInstagram,
    className: "hover:bg-[#E4405F]",
  },
  {
    label: "LinkedIn",
    href: "#",
    Icon: FaLinkedinIn,
    className: "hover:bg-[#0A66C2]",
  },
];

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="group inline-flex items-start gap-2 text-sm leading-6 text-white/80 transition-colors duration-200 hover:text-white"
    >
      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 border border-white/70 transition-colors group-hover:border-[#ffdc62] group-hover:bg-[#ffdc62]" />
      <span>{children}</span>
    </a>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative isolate overflow-hidden">
      {/* Main green footer */}
      <div className="relative bg-[#087b43]">
        {/* Background texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{ backgroundImage: `url(${footerBg})` }}
        />

        {/* Top border */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-1 bg-gradient-to-r from-transparent via-white/70 to-transparent"
        />

        {/* Footer content */}
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1fr] lg:gap-12">
            {/* Foundation information */}
            <div>
              <a
                href="/"
                aria-label="Be The Change Foundation home"
                className="inline-flex items-center"
              >
                <img
                  src={logo}
                  alt="Be The Change Foundation"
                  loading="lazy"
                  decoding="async"
                  className="h-12 w-auto max-w-[180px] object-contain object-left"
                />
              </a>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/85">
                Be The Change Foundation was established on 28 April 2022 under
                the Societies Registration Act 1860. Be The Change Foundation
                is a national-level society having 80G and 12A certifications.
                It is recognised by the Government of India and is also
                certified by NITI Aayog. The foundation was established with
                the passion of "Devotion to the Nation" and the vision of a
                "Prosperous Nation".
              </p>
            </div>

            {/* About links */}
            <nav aria-label="About the foundation">
              <h2 className="text-base font-bold text-white">About Us</h2>

              <div className="mt-4 flex flex-col items-start gap-2">
                {footerLinks.about.map((link) => (
                  <FooterLink key={link.label} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </div>
            </nav>

            {/* Areas of work */}
            <nav aria-label="Areas of work">
              <h2 className="text-base font-bold text-white">
                Areas Of Work
              </h2>

              <div className="mt-4 flex flex-col items-start gap-2">
                {footerLinks.work.map((link) => (
                  <FooterLink key={link.label} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </div>
            </nav>

            {/* Social links */}
            <div>
              <h2 className="text-base font-bold text-white">
                Connect on Social
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {socialLinks.map(({ label, href, Icon, className }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={href === "#" ? undefined : "_blank"}
                    rel={
                      href === "#"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    onClick={
                      href === "#"
                        ? (event) => event.preventDefault()
                        : undefined
                    }
                    className={`flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white transition-colors duration-200 ${className}`}
                  >
                    <Icon size={17} aria-hidden="true" />
                  </a>
                ))}
              </div>

              <a
                href="payment"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ffdc62] transition-colors hover:text-white"
              >
                Support our mission
                <FaExternalLinkAlt size={12} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-center sm:px-8 md:flex-row md:items-center md:justify-between md:text-left lg:px-10">
          <p className="text-xs leading-6 text-slate-600 sm:text-sm">
            © Copyright {currentYear}{" "}
            <a
              href="/"
              className="font-semibold text-emerald-700 transition-colors hover:text-emerald-900"
            >
              Be The Change Foundation
            </a>
            . All rights reserved.
          </p>

          <nav
            aria-label="Legal links"
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-600 sm:text-sm"
          >
            <a
              href="/sitemap.xml"
              className="transition-colors hover:text-emerald-700"
            >
              Site Map
            </a>

            <span
              aria-hidden="true"
              className="h-4 w-px bg-slate-300"
            />

            <a
              href="/privacy-policy.html"
              className="transition-colors hover:text-emerald-700"
            >
              Privacy Policy
            </a>

            <span
              aria-hidden="true"
              className="h-4 w-px bg-slate-300"
            />

            <a
              href="/terms-and-conditions.html"
              className="transition-colors hover:text-emerald-700"
            >
              Terms &amp; Conditions
            </a>
          </nav>
        </div>
      </div>

      {/* Back to top */}
      <button
        type="button"
        aria-label="Back to top"
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-md bg-emerald-700 text-white shadow-md transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
      >
        <FaChevronUp size={16} aria-hidden="true" />
      </button>
    </footer>
  );
}