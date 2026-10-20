import { useEffect, useRef, useState } from "react";
import {
  Languages,
  BriefcaseBusiness,
  HeartHandshake,
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
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import desktopHeaderImage from "../../assets/images/header_images/desktop-header.webp";
import mobileHeaderImage from "../../assets/images/header_images/mobile-header.webp";

gsap.registerPlugin(useGSAP);

/* --------------------------------------------------
   Navigation data
-------------------------------------------------- */

const areasOfWork = [
  { label: "All Areas of Work", href: "/area-of-work" },
  { label: "Education", href: "/area-of-work/education" },
  { label: "Health", href: "/area-of-work/health" },
  { label: "Culture", href: "/area-of-work/culture" },
  { label: "Women Empowerment", href: "/area-of-work/women-empowerment" },
  { label: "Environment", href: "/area-of-work/environment" },
  { label: "Social", href: "/area-of-work/social" },
  { label: "Agriculture", href: "/area-of-work/agriculture" },
  { label: "Sport", href: "/area-of-work/sport" },
];

const projects = [
  {
    label: "Sunrise Pre School",
    href: "https://sunriseschool.bethechange.org.in/",
    external: true,
  },
  { label: "Teachers Award", href: "https://shikshakpuraskar.in/", external: true },
  { label: "Sparsh Arts", href: "https://sparshart.com/", external: true },
  { label: "Tree Plantation", href: "#" },
  { label: "Educational Awareness", href: "#" },
  { label: "Our Programs", href: "/our-programs" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/bethechangemaha", Icon: FaFacebookF },
  { label: "Twitter", href: "https://twitter.com/bethechangemaha", Icon: FaTwitter },
  { label: "Instagram", href: "https://www.instagram.com/bethechangemaha", Icon: FaInstagram },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/bethechangemaha/about/",
    Icon: FaLinkedinIn,
  },
];

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Mission", href: "/our-mission" },
  { label: "Our Vision", href: "/our-vision" },
];

const languages = [
  { label: "हिन्दी (Hindi)", code: "hi" },
  { label: "मराठी (Marathi)", code: "mr" },
  { label: "English", code: "en" },
];

/* --------------------------------------------------
   Helpers
-------------------------------------------------- */

const DESKTOP_QUERY = "(min-width: 1024px)";

const isDesktop = () =>
  typeof window !== "undefined" && window.matchMedia(DESKTOP_QUERY).matches;

// Respect "reduce motion": animations collapse to instant changes.
const t = (seconds) =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? 0
    : seconds;

function normalizePath(path = "/") {
  return path.replace(/\/+$/, "").replace(/\$/i, "") || "/";
}

function isActiveRoute(pathname, href) {
  if (!href || href === "#" || /^https?:\/\//i.test(href)) return false;
  return normalizePath(pathname) === normalizePath(href);
}

/* --------------------------------------------------
   Reusable navigation link
-------------------------------------------------- */

function HeaderLink({
  href,
  children,
  external = false,
  className = "",
  onClick,
  ...props
}) {
  if (external || /^https?:\/\//i.test(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  if (href === "#") {
    return (
      <a
        href="#"
        className={className}
        onClick={(event) => {
          event.preventDefault();
          onClick?.(event);
        }}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className} onClick={onClick} {...props}>
      {children}
    </Link>
  );
}

/* --------------------------------------------------
   Dropdown

   Desktop (mouse): opens on hover / keyboard focus.
   Touch & mobile: opens and closes on tap.
   GSAP animates the panel height + fades the items in.
-------------------------------------------------- */

function Dropdown({ label, items, pathname, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const rootRef = useRef(null);
  const panelRef = useRef(null);
  const pointerType = useRef("mouse");
  const hasMounted = useRef(false);

  const hasActiveItem = items.some((item) => isActiveRoute(pathname, item.href));

  const close = () => setIsOpen(false);

  const handleNavigate = () => {
    close();
    onNavigate?.();
  };

  /* Animation -------------------------------------------------- */
  useGSAP(
    () => {
      const panel = panelRef.current;
      if (!panel) return;

      // Skip the very first run so closed dropdowns don't "animate closed" on load.
      if (!hasMounted.current) {
        hasMounted.current = true;
        return;
      }

      const links = panel.querySelectorAll("[data-item]");

      if (isOpen) {
        gsap.to(panel, {
          height: "auto",
          autoAlpha: 1,
          duration: t(0.35),
          ease: "power3.out",
          overwrite: "auto",
        });

        gsap.fromTo(
          links,
          { autoAlpha: 0, x: -12 },
          {
            autoAlpha: 1,
            x: 0,
            duration: t(0.3),
            ease: "power2.out",
            stagger: t(0.04),
            delay: t(0.05),
            overwrite: "auto",
          }
        );
      } else {
        gsap.to(panel, {
          height: 0,
          autoAlpha: 0,
          duration: t(0.25),
          ease: "power2.in",
          overwrite: "auto",
        });
      }
    },
    { dependencies: [isOpen], scope: rootRef }
  );

  /* Hover only for real mouse on desktop (avoids double-toggle on touch) */
  const handlePointerEnter = (event) => {
    pointerType.current = event.pointerType;
    if (event.pointerType === "mouse" && isDesktop()) setIsOpen(true);
  };

  const handlePointerLeave = (event) => {
    if (event.pointerType === "mouse" && isDesktop()) setIsOpen(false);
  };

  const handleButtonClick = (event) => {
    // On desktop, a mouse click on an already hover-opened menu shouldn't close it.
    if (pointerType.current === "mouse" && isDesktop() && event.detail > 0) {
      setIsOpen(true);
      return;
    }
    setIsOpen((previous) => !previous);
  };

  return (
    <div
      ref={rootRef}
      className="relative w-full lg:w-auto"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) close();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") close();
      }}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={handleButtonClick}
        className={`
          relative flex w-full items-center justify-center gap-2
          px-4 py-3 text-sm font-semibold text-white
          transition-colors duration-200 hover:bg-white/10
          focus-visible:outline-2 focus-visible:outline-offset-[-2px]
          focus-visible:outline-white lg:w-auto
          ${hasActiveItem ? "bg-white/10" : ""}
        `}
      >
        {hasActiveItem && (
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-3 right-3 h-[3px] rounded-full bg-red-500"
          />
        )}

        <span>{label}</span>

        <ChevronDown
          size={15}
          strokeWidth={2}
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Animated wrapper: collapsed by default, GSAP controls height/opacity */}
      <div
        ref={panelRef}
        className="
          invisible z-30 h-0 min-w-56 overflow-hidden rounded-lg
          border border-gray-100 bg-white text-left opacity-0 shadow-xl
          lg:absolute lg:left-0 lg:top-full
        "
      >
        <div className="max-h-80 overflow-y-auto py-2 lg:max-h-[70vh]">
          {items.map((item) => {
            const active = isActiveRoute(pathname, item.href);

            return (
              <HeaderLink
                key={item.label}
                data-item
                href={item.href}
                external={item.external}
                onClick={handleNavigate}
                aria-current={active ? "page" : undefined}
                className={`
                  flex items-center gap-3 border-l-[3px]
                  px-4 py-2.5 text-sm transition-colors
                  focus-visible:bg-green-50 focus-visible:outline-none
                  ${
                    active
                      ? "border-green-700 bg-green-50 font-semibold text-green-800"
                      : "border-transparent text-gray-700 hover:bg-green-50 hover:text-green-800"
                  }
                `}
              >
                <span
                  aria-hidden="true"
                  className={`size-2 shrink-0 rounded-full transition-colors ${
                    active ? "bg-red-500" : "bg-transparent"
                  }`}
                />
                <span>{item.label}</span>
              </HeaderLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------
   Main header
-------------------------------------------------- */

export default function Header() {
  const { pathname } = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const languagePanelRef = useRef(null);
  const menuMounted = useRef(false);
  const languageMounted = useRef(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setLanguageMenuOpen(false);
  };

  const handleLanguageChange = (code) => {
    setLanguageMenuOpen(false);
    window.dispatchEvent(new CustomEvent("site-language-change", { detail: code }));
  };

  /* Mobile menu open / close ----------------------------------- */
  useGSAP(
    () => {
      const menu = menuRef.current;
      if (!menu) return;

      if (!menuMounted.current) {
        menuMounted.current = true;
        return;
      }

      // The desktop layout is always visible, nothing to animate.
      if (isDesktop()) return;

      const children = Array.from(menu.children);

      if (mobileMenuOpen) {
        gsap.to(menu, {
          height: "auto",
          autoAlpha: 1,
          duration: t(0.4),
          ease: "power3.out",
          overwrite: "auto",
        });

        gsap.fromTo(
          children,
          { autoAlpha: 0, y: -12 },
          {
            autoAlpha: 1,
            y: 0,
            duration: t(0.35),
            ease: "power2.out",
            stagger: t(0.05),
            delay: t(0.08),
            overwrite: "auto",
          }
        );
      } else {
        gsap.to(menu, {
          height: 0,
          autoAlpha: 0,
          duration: t(0.3),
          ease: "power2.in",
          overwrite: "auto",
        });
      }
    },
    { dependencies: [mobileMenuOpen] }
  );

  /* Language dropdown ------------------------------------------ */
  useGSAP(
    () => {
      const panel = languagePanelRef.current;
      if (!panel) return;

      if (!languageMounted.current) {
        languageMounted.current = true;
        return;
      }

      if (languageMenuOpen) {
        gsap.fromTo(
          panel,
          { autoAlpha: 0, y: -8, scale: 0.97 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: t(0.25),
            ease: "power3.out",
            transformOrigin: "top right",
            overwrite: "auto",
          }
        );
      } else {
        gsap.to(panel, {
          autoAlpha: 0,
          y: -8,
          scale: 0.97,
          duration: t(0.18),
          ease: "power2.in",
          overwrite: "auto",
        });
      }
    },
    { dependencies: [languageMenuOpen] }
  );

  /* When resizing to desktop, drop GSAP inline styles and reset state */
  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);

    const handleChange = (event) => {
      if (!event.matches) return;
      setMobileMenuOpen(false);

      const menu = menuRef.current;
      if (menu) gsap.set([menu, ...menu.children], { clearProps: "all" });
    };

    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  /* Escape closes the language menu */
  useEffect(() => {
    if (!languageMenuOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setLanguageMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [languageMenuOpen]);

  const mainLinkClass = (href) => {
    const active = isActiveRoute(pathname, href);

    return `
      relative px-4 py-3 text-center text-sm font-semibold
      text-white transition-colors duration-200 hover:bg-white/10
      focus-visible:outline-2 focus-visible:outline-offset-[-2px]
      focus-visible:outline-white
      ${
        active
          ? "bg-white/15 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[3px] after:rounded-full after:bg-red-500"
          : ""
      }
    `;
  };

  const utilityLinkClass =
    "flex items-center gap-1.5 font-semibold transition-colors hover:text-green-200";

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
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#147D4B] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#09683C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            ))}
          </div>

          {/* Utility navigation */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs sm:text-sm">
            <HeaderLink
              href="/about-us"
              aria-current={isActiveRoute(pathname, "/about-us") ? "page" : undefined}
              className={utilityLinkClass}
            >
              About
            </HeaderLink>

            <HeaderLink
              href="/contact-us"
              aria-current={isActiveRoute(pathname, "/contact-us") ? "page" : undefined}
              className={utilityLinkClass}
            >
              Contact
            </HeaderLink>

            {/* Language menu */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={languageMenuOpen}
                aria-haspopup="true"
                onClick={() => setLanguageMenuOpen((previous) => !previous)}
                className="flex items-center gap-2 transition-colors hover:text-green-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <Languages size={16} strokeWidth={2} aria-hidden="true" />
                <strong>Language</strong>
                <ChevronDown
                  size={13}
                  aria-hidden="true"
                  className={`transition-transform duration-300 ${
                    languageMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {languageMenuOpen && (
                <button
                  type="button"
                  aria-label="Close language menu"
                  tabIndex={-1}
                  className="fixed inset-0 z-40 cursor-default"
                  onClick={() => setLanguageMenuOpen(false)}
                />
              )}

              <div
                ref={languagePanelRef}
                className="invisible absolute right-0 top-full z-50 mt-3 min-w-44 overflow-hidden rounded-lg border border-gray-200 bg-white py-1 text-sm text-gray-800 opacity-0 shadow-xl"
              >
                {languages.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    tabIndex={languageMenuOpen ? 0 : -1}
                    onClick={() => handleLanguageChange(language.code)}
                    className="block w-full px-4 py-2.5 text-left transition-colors hover:bg-green-50 hover:text-green-800 focus-visible:bg-green-50 focus-visible:outline-none"
                  >
                    {language.label}
                  </button>
                ))}
              </div>
            </div>

            <HeaderLink href="/contact-us" className={utilityLinkClass}>
              <BriefcaseBusiness size={16} aria-hidden="true" />
              <strong>Careers</strong>
            </HeaderLink>

            <HeaderLink href="/contact-us" className={utilityLinkClass}>
              <HeartHandshake size={17} aria-hidden="true" />
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
      <nav
        aria-label="Main navigation"
        className="border-y border-white/70 bg-[#1e8449]"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 lg:justify-center lg:px-6">
          {/* Mobile brand */}
          <HeaderLink
            href="/"
            onClick={closeMobileMenu}
            className="py-3 text-base font-bold lg:hidden"
          >
            Be The Change
          </HeaderLink>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
            aria-controls="main-navigation-links"
            onClick={() => setMobileMenuOpen((previous) => !previous)}
            className="my-2 flex h-10 w-11 items-center justify-center rounded-md border border-white/60 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:hidden"
          >
            {mobileMenuOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>

          {/* Navigation links (GSAP animates height + opacity on mobile only) */}
          <div
            ref={menuRef}
            id="main-navigation-links"
            className="
              flex w-full flex-col items-stretch overflow-hidden
              max-lg:invisible max-lg:h-0 max-lg:opacity-0
              lg:w-auto lg:flex-row lg:items-center lg:overflow-visible
            "
          >
            {mainLinks.map(({ label, href }) => (
              <HeaderLink
                key={href}
                href={href}
                onClick={closeMobileMenu}
                aria-current={isActiveRoute(pathname, href) ? "page" : undefined}
                className={mainLinkClass(href)}
              >
                {label}
              </HeaderLink>
            ))}

            <Dropdown
              label="Areas of Work"
              items={areasOfWork}
              pathname={pathname}
              onNavigate={closeMobileMenu}
            />

            <Dropdown
              label="Projects"
              items={projects}
              pathname={pathname}
              onNavigate={closeMobileMenu}
            />

            <HeaderLink
              href="/contact-us"
              onClick={closeMobileMenu}
              aria-current={isActiveRoute(pathname, "/contact-us") ? "page" : undefined}
              className={mainLinkClass("/contact-us")}
            >
              Contact Us
            </HeaderLink>

            {/* Donate button */}
            <div className="flex justify-center px-4 py-3 lg:pl-3 lg:pr-0">
              <HeaderLink
                href="https://razorpay.me/@bethechangefoundation5072"
                external
                onClick={closeMobileMenu}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-2.5 text-sm font-bold text-white transition duration-200 hover:scale-105 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
