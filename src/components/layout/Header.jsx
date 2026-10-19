import { useState } from "react";
import {
  Languages,
  BriefcaseBusiness,
  HeartHandshakeIcon,
  ChevronDown,
  Menu,
  X,
  Heart,
} from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import desktopHeaderImage from "../../assets/images/header_images/desktop-header.webp";
import mobileHeaderImage from "../../assets/images/header_images/mobile-header.webp";
import { Link } from "react-router-dom";

const areasOfWork = [
  { label: "Education", href: "/education.html" },
  { label: "Health", href: "/health.html" },
  { label: "Culture", href: "/culture.html" },
  { label: "Women Empowerment", href: "/women-empowerment.html" },
  { label: "Environment", href: "/environment.html" },
  { label: "Social", href: "/social.html" },
  { label: "Agriculture", href: "/agriculture.html" },
  { label: "Sport", href: "/sport.html" },
];

const projects = [
  {
    label: "Sunrise Pre School",
    href: "https://sunriseschool.bethechange.org.in/",
    external: true,
  },
  {
    label: "Teachers Award",
    href: "https://shikshakpuraskar.in/",
    external: true,
  },
  {
    label: "Sparsh Arts",
    href: "https://sparshart.com/",
    external: true,
  },
  { label: "Tree Plantation", href: "#" },
  { label: "Educational Awareness", href: "#" },
  { label: "Our Programs", href: "/ourprograms.html" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/bethechangemaha",
    Icon: FaFacebookF,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/bethechangemaha",
    Icon: FaTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bethechangemaha",
    Icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/bethechangemaha/about/",
    Icon: FaLinkedinIn,
  },
];

const languages = [
  { label: "हिन्दी (Hindi)", code: "hi" },
  { label: "मराठी (Marathi)", code: "mr" },
  { label: "English", code: "en" },
];

function HeaderLink({
  href,
  children,
  external = false,
  className = "",
  onClick,
}) {
  return (
    <Link
      to={href}
      className={className}
      onClick={onClick}
      {...(external
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
    >
      {children}
    </Link>
  );
}

function Dropdown({ label, items, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((previous) => !previous)}
        className="flex w-full items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 lg:w-auto"
      >
        {label}

        <ChevronDown
          size={15}
          strokeWidth={2}
          className={`shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label={`Close ${label} menu`}
            className="fixed inset-0 z-20 cursor-default"
            onClick={() => setOpen(false)}
          />

          <div className="absolute left-0 top-full z-30 max-h-80 min-w-56 overflow-y-auto rounded-lg border border-gray-100 bg-white py-2 text-left shadow-xl">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={
                  item.external ? "noopener noreferrer" : undefined
                }
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
                className="block px-5 py-2.5 text-sm text-gray-700 transition-colors hover:bg-green-50 hover:text-green-800"
              >
                {item.label}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleLanguageChange = (code) => {
    setLanguageMenuOpen(false);

    window.dispatchEvent(
      new CustomEvent("site-language-change", {
        detail: code,
      }),
    );
  };

  return (
    <header className="relative z-40 w-full bg-[#1e8449] text-white">
      {/* Top information bar */}
      <div className="border-b border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row lg:px-6">
          {/* Social links */}
          <div className="flex items-center gap-1">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#147D4B] text-white transition-colors duration-200 hover:bg-[#09683C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-10 sm:w-10"
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            ))}
          </div>

          {/* Utility navigation */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm">
            <HeaderLink
              href="/about-us.html"
              className="transition-colors hover:text-green-200"
            >
              <strong>About</strong>
            </HeaderLink>

            <HeaderLink
              href="/contact-us.html"
              className="transition-colors hover:text-green-200"
            >
              <strong>Contact</strong>
            </HeaderLink>

            {/* Language menu */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={languageMenuOpen}
                onClick={() =>
                  setLanguageMenuOpen((previous) => !previous)
                }
                className="flex items-center gap-2 transition-colors hover:text-green-200"
              >
                <Languages size={16} strokeWidth={2} aria-hidden="true" />
                <strong>Language</strong>

                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${
                    languageMenuOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {languageMenuOpen && (
                <>
                  <button
                    type="button"
                    aria-label="Close language menu"
                    className="fixed inset-0 z-40 cursor-default"
                    onClick={() => setLanguageMenuOpen(false)}
                  />

                  <div className="absolute right-0 top-full z-50 mt-3 min-w-44 overflow-hidden rounded-lg border border-gray-200 bg-white py-1 text-sm text-gray-800 shadow-xl">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        type="button"
                        onClick={() =>
                          handleLanguageChange(language.code)
                        }
                        className="block w-full px-4 py-2.5 text-left transition-colors hover:bg-green-50 hover:text-green-800"
                      >
                        {language.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <HeaderLink
              href="/contact-us.html"
              className="flex items-center gap-1.5 transition-colors hover:text-green-200"
            >
              <BriefcaseBusiness
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
              <strong>Careers</strong>
            </HeaderLink>

            <HeaderLink
              href="/contact-us.html"
              className="flex items-center gap-1.5 transition-colors hover:text-green-200"
            >
              <HeartHandshakeIcon
                size={17}
                strokeWidth={2}
                aria-hidden="true"
              />
              <strong>Become Volunteer</strong>
            </HeaderLink>
          </div>
        </div>
      </div>

      {/* Responsive header images */}
      <div className="w-full overflow-hidden bg-white">
        <img
          src={mobileHeaderImage}
          alt="Be The Change Foundation"
          className="h-auto w-full object-cover md:hidden"
          fetchPriority="high"
        />

        <img
          src={desktopHeaderImage}
          alt="Be The Change Foundation"
          className="hidden h-auto w-full object-cover md:block"
          fetchPriority="high"
        />
      </div>

      {/* Main navigation */}
      <nav className="border-y border-white/70 bg-[#1e8449]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 lg:justify-center lg:px-6">
          {/* Mobile brand */}
          <HeaderLink
            href="/"
            className="py-3 text-base font-bold lg:hidden"
            onClick={closeMobileMenu}
          >
            Be The Change
          </HeaderLink>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={
              mobileMenuOpen ? "Close navigation" : "Open navigation"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() =>
              setMobileMenuOpen((previous) => !previous)
            }
            className="my-2 flex h-10 w-11 items-center justify-center rounded-md border border-white/60 transition-colors hover:bg-white/10 lg:hidden"
          >
            {mobileMenuOpen ? (
              <X size={22} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Menu size={22} strokeWidth={2} aria-hidden="true" />
            )}
          </button>

          {/* Navigation links */}
          <div
            className={`${
              mobileMenuOpen ? "flex" : "hidden"
            } w-full flex-col items-stretch pb-4 lg:flex lg:w-auto lg:flex-row lg:items-center lg:pb-0`}
          >
            <HeaderLink
              href="/"
              onClick={closeMobileMenu}
              className="px-4 py-3 text-center text-sm font-semibold transition-colors hover:bg-white/10"
            >
              Home
            </HeaderLink>

            <HeaderLink
              href="/about-us"
              onClick={closeMobileMenu}
              className="px-4 py-3 text-center text-sm font-semibold transition-colors hover:bg-white/10"
            >
              About Us
            </HeaderLink>

            <HeaderLink
              href="/our-mission"
              onClick={closeMobileMenu}
              className="px-4 py-3 text-center text-sm font-semibold transition-colors hover:bg-white/10"
            >
              Our Mission
            </HeaderLink>

            <HeaderLink
              href="/ourvission"
              onClick={closeMobileMenu}
              className="px-4 py-3 text-center text-sm font-semibold transition-colors hover:bg-white/10"
            >
              Our Vision
            </HeaderLink>

            <Dropdown
              label="Areas of Work"
              items={areasOfWork}
              onNavigate={closeMobileMenu}
            />

            <Dropdown
              label="Projects"
              items={projects}
              onNavigate={closeMobileMenu}
            />

            <HeaderLink
              href="/contact-us"
              onClick={closeMobileMenu}
              className="px-4 py-3 text-center text-sm font-semibold transition-colors hover:bg-white/10"
            >
              Contact Us
            </HeaderLink>

            {/* Donate button */}
            <div className="flex justify-center px-4 py-3 lg:pl-3 lg:pr-0">
              <HeaderLink
                href="https://razorpay.me/@bethechangefoundation5072"
                external
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-2.5 text-sm font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Heart size={18} strokeWidth={2.5} aria-hidden="true" />
                <span>Donate</span>
              </HeaderLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}