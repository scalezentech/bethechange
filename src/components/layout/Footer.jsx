
import { useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaChevronUp,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import footerBg from "../../assets/images/testimonialsReviewer/testimonials-bg.png";
import logo from "../../assets/images/logo-two.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* --------------------------------------------------
   Footer navigation data
-------------------------------------------------- */

const footerLinks = {
  about: [
    { label: "Our Vision", href: "/our-vision" },
    { label: "Our Mission", href: "/our-mission" },
    {
      label: "Sunrise School",
      href: "https://sunriseschool.bethechange.org.in/",
    },
  ],

  work: [
    { label: "Education", href: "/area-of-work/education" },
    { label: "Health", href: "/area-of-work/health" },
    { label: "Culture", href: "/area-of-work/culture" },
    { label: "Women Empowerment", href: "/area-of-work/women-empowerment" },
  ],
};

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/bethechangemaha",
    Icon: FaFacebookF,
    className: "hover:bg-[#1877F2]",
  },
  {
    label: "Twitter",
    href: "https://x.com/bethechangemaha",
    Icon: FaTwitter,
    className: "hover:bg-[#1DA1F2]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bethechangemaha",
    Icon: FaInstagram,
    className: "hover:bg-[#E4405F]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/bethechangemaha/about/",
    Icon: FaLinkedinIn,
    className: "hover:bg-[#0A66C2]",
  },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
];

/* --------------------------------------------------
   Reusable footer link
-------------------------------------------------- */

function FooterLink({ href, children }) {
  const isInternal = href.startsWith("/");
  const LinkComponent = isInternal ? Link : "a";

  const destinationProps = isInternal
    ? { to: href }
    : {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
      };

  return (
    <LinkComponent
      {...destinationProps}
      data-footer-item
      className="group inline-flex items-start gap-2 text-sm leading-6 text-white/80 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffdc62] focus-visible:ring-offset-2 focus-visible:ring-offset-[#087b43]"
    >
      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 border border-white/70 transition-colors group-hover:border-[#ffdc62] group-hover:bg-[#ffdc62]" />

      <span>{children}</span>
    </LinkComponent>
  );
}

/* --------------------------------------------------
   Footer
-------------------------------------------------- */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerRef = useRef(null);

  /* --------------------------------------------------
     Staggered footer animations

     Main footer components animate when the green
     content grid enters the viewport.

     Copyright and legal items animate separately
     when the white legal bar enters the viewport.

     Both animations run only once.
  -------------------------------------------------- */

  useGSAP(
    () => {
      const footer = footerRef.current;

      if (!footer) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      /* Main footer: animate individual components */

      const contentGrid = footer.querySelector(
        "[data-footer-content]"
      );

      const footerItems = footer.querySelectorAll(
        "[data-footer-item]"
      );

      if (contentGrid && footerItems.length > 0) {
        gsap.fromTo(
          footerItems,
          {
            autoAlpha: 0,
            y: 20,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.065,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: {
              trigger: contentGrid,
              start: "top 90%",
              once: true,
            },
          }
        );
      }

      /* Copyright and legal links: their own stagger */

      const legalBar = footer.querySelector(
        "[data-footer-legal]"
      );

      const legalItems = footer.querySelectorAll(
        "[data-footer-legal-item]"
      );

      if (legalBar && legalItems.length > 0) {
        gsap.fromTo(
          legalItems,
          {
            autoAlpha: 0,
            y: 12,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: {
              trigger: legalBar,
              start: "top 95%",
              once: true,
            },
          }
        );
      }
    },
    {
      scope: footerRef,
    }
  );

  /* --------------------------------------------------
     Back to top
  -------------------------------------------------- */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="relative isolate overflow-hidden"
    >
      {/* MAIN GREEN FOOTER */}

      <div className="relative bg-[#087b43]">
        {/* BACKGROUND TEXTURE */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: `url(${footerBg})`,
          }}
        />

        {/* TOP BORDER */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-1 bg-gradient-to-r from-transparent via-white/70 to-transparent"
        />

        {/* FOOTER CONTENT */}

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          <div
            data-footer-content
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1fr] lg:gap-12"
          >
            {/* FOUNDATION INFORMATION */}

            <div>
              <Link
                to="/"
                aria-label="Be The Change Foundation home"
                data-footer-item
                className="inline-flex items-center"
              >
                <img
                  src={logo}
                  alt="Be The Change Foundation"
                  loading="lazy"
                  decoding="async"
                  className="h-12 w-auto max-w-[180px] object-contain object-left"
                />
              </Link>

              <p
                data-footer-item
                className="mt-5 max-w-sm text-sm leading-7 text-white/85"
              >
                Be The Change Foundation was established on 28 April
                2022 under the Societies Registration Act 1860. Be The
                Change Foundation is a national-level society having
                80G and 12A certifications. It is recognised by the
                Government of India and is also certified by NITI
                Aayog. The foundation was established with the passion
                of "Devotion to the Nation" and the vision of a
                "Prosperous Nation".
              </p>
            </div>

            {/* ABOUT LINKS */}

            <nav aria-label="About the foundation">
              <h2
                data-footer-item
                className="text-base font-bold text-white"
              >
                About Us
              </h2>

              <div className="mt-4 flex flex-col items-start gap-2">
                {footerLinks.about.map((link) => (
                  <FooterLink
                    key={link.label}
                    href={link.href}
                  >
                    {link.label}
                  </FooterLink>
                ))}
              </div>
            </nav>

            {/* AREAS OF WORK */}

            <nav aria-label="Areas of work">
              <h2
                data-footer-item
                className="text-base font-bold text-white"
              >
                Areas Of Work
              </h2>

              <div className="mt-4 flex flex-col items-start gap-2">
                {footerLinks.work.map((link) => (
                  <FooterLink
                    key={link.label}
                    href={link.href}
                  >
                    {link.label}
                  </FooterLink>
                ))}
              </div>
            </nav>

            {/* SOCIAL LINKS AND DONATION */}

            <div>
              <h2
                data-footer-item
                className="text-base font-bold text-white"
              >
                Connect on Social
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {socialLinks.map(
                  ({ label, href, Icon, className }) => (
                    <a
                      key={label}
                      href={href}
                      data-footer-item
                      aria-label={label}
                      target={
                        href === "#" ? undefined : "_blank"
                      }
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
                      className={`flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffdc62] ${className}`}
                    >
                      <Icon
                        size={17}
                        aria-hidden="true"
                      />
                    </a>
                  )
                )}
              </div>

              <a
                href="https://razorpay.me/@bethechangefoundation5072"
                target="_blank"
                rel="noopener noreferrer"
                data-footer-item
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ffdc62] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffdc62]"
              >
                Support our mission

                <FaExternalLinkAlt
                  size={12}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT AND LEGAL LINKS */}

      <div
        data-footer-legal
        className="border-t border-slate-200 bg-white"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p
            data-footer-legal-item
            className="text-center text-xs leading-6 text-slate-600 sm:text-sm md:text-left"
          >
            © Copyright {currentYear}{" "}

            <Link
              to="/"
              className="font-semibold text-emerald-700 transition-colors hover:text-emerald-900"
            >
              Be The Change Foundation
            </Link>

            . All rights reserved.
          </p>

          <nav
            aria-label="Legal links"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 md:justify-end"
          >
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-footer-legal-item
                className="text-xs font-medium text-slate-600 underline-offset-4 transition-colors hover:text-emerald-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 sm:text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* BACK TO TOP */}

      <button
        type="button"
        aria-label="Back to top"
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-md bg-emerald-700 text-white shadow-md transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
      >
        <FaChevronUp
          size={16}
          aria-hidden="true"
        />
      </button>
    </footer>
  );
}
