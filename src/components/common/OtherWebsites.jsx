
import { ArrowUpRight, ExternalLink } from "lucide-react";
import sunriseLogo from "../../assets/images/other_websites/SUNRISE PRE SCHOOL.png"
import shikshakPurskarLogo from "../../assets/images/other_websites/SHIKSHAK PURSKAR.jpg"
import sparshLogo from "../../assets/images/other_websites/SPARSH ARTS.jpg"
import nationalLogo from "../../assets/images/other_websites/nationallogo.jpeg"
import mahaLogo from "../../assets/images/other_websites/favicon.jpg"
import saundrayaLogo from "../../assets/images/other_websites/saundarya-kala.jpeg"
import nationalEnterprenourLogo from "../../assets/images/other_websites/nationa enter.jpg"
import artLogo from "../../assets/images/other_websites/art.png"


const websites = [
    {
        title: "Sunrise Pre School",
        description:
            "Quality early childhood education fostering creativity, learning, and development in a nurturing environment.",
        image: sunriseLogo,
        url: "#",
        category: "Education",
        accent: "#f59e0b",
    },
    {
        title: "Shikshak Puraskar",
        description:
            "Recognizing and honoring exceptional teachers who make a difference in students' lives and education.",
        image: shikshakPurskarLogo,
        url: "#",
        category: "Awards & Recognition",
        accent: "#eab308",
    },
    {
        title: "Sparsh Arts",
        description:
            "Promoting creativity and artistic expression through various art forms and cultural programs.",
        image: sparshLogo,
        url: "#",
        category: "Arts & Culture",
        accent: "#ec4899",
    },
    {
        title: "National Teacher Award",
        description:
            "Celebrating excellence in education by recognizing the efforts and dedication of outstanding teachers.",
        image: nationalLogo,
        url: "https://nationalteacheraward.com/",
        category: "Education",
        accent: "#f97316",
    },
    {
        title: "Maha Award",
        description:
            "Honoring extraordinary individuals and institutions contributing to social, educational, and cultural growth.",
        image: mahaLogo,
        url: "#",
        category: "Awards & Recognition",
        accent: "#dc2626",
    },
    {
        title: "Saundarya Kala",
        description:
            "Promoting art, culture, and creativity by empowering artists and celebrating India's rich aesthetic heritage.",
        image: saundrayaLogo,
        url: "#",
        category: "Arts & Culture",
        accent: "#db2777",
    },
    {
        title: "National Entrepreneur",
        description:
            "Honoring visionary entrepreneurs and business leaders who drive innovation, leadership, and economic growth.",
        image: nationalEnterprenourLogo,
        url: "#",
        category: "Entrepreneurship",
        accent: "#ea580c",
    },
    {
        title: "Sparsh Art Exhibition",
        description:
            "A vibrant platform celebrating creativity, talent, and artistic expression through inspiring exhibitions and cultural showcases.",
        image: artLogo,
        url: "#",
        category: "Arts & Culture",
        accent: "#8b5cf6",
    },
];

export default function OtherWebsites() {
    return (
        <>
            <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/60 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                {/* Decorative background */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-emerald-200/20 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-amber-100/40 blur-3xl"
                />

                <div className="mx-auto max-w-7xl">
                    {/* Section heading */}
                    <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800 shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            Our Network
                        </span>

                        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Our Other{" "}
                            <span className="text-emerald-700">Websites</span>
                        </h2>

                        <div
                            aria-hidden="true"
                            className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-amber-400"
                        />

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                            Explore our initiatives, educational platforms, awards, and
                            creative programs making a difference in the community.
                        </p>
                    </header>

                    {/* Website cards */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {websites.map((website) => (
                            <article
                                key={website.title}
                                className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white bg-white/90 p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)] hover:ring-emerald-200"
                                style={{ "--card-accent": website.accent }}
                            >
                                {/* Accent line */}
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                                    style={{
                                        background: `linear-gradient(90deg, ${website.accent}, #10b981)`,
                                    }}
                                />

                                {/* Logo */}
                                <div className="relative mb-5 flex h-28 items-center justify-center rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-4">
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                        style={{
                                            background: `radial-gradient(circle at center, ${website.accent}12, transparent 70%)`,
                                        }}
                                    />

                                    <img
                                        src={website.image}
                                        alt={`${website.title} logo`}
                                        loading="lazy"
                                        decoding="async"
                                        className="relative z-10 h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>

                                {/* Category */}
                                <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-700">
                                    {website.category}
                                </span>

                                {/* Content */}
                                <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-emerald-800">
                                    {website.title}
                                </h3>

                                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                                    {website.description}
                                </p>

                                {/* Link */}
                                <a
                                    href={website.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit ${website.title} website`}
                                    className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                                >
                                    Visit Website
                                    {website.url === "#" ? (
                                        <ArrowUpRight size={16} aria-hidden="true" />
                                    ) : (
                                        <ExternalLink size={15} aria-hidden="true" />
                                    )}
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>


            {/* Premium Donation CTA */}
            <div className="relative mt-16 overflow-hidden border-y border-white/10 bg-[#171b19] sm:mt-20">
                {/* Ambient lighting */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-[90px]"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -bottom-24 h-64 w-64 rounded-full bg-amber-400/10 blur-[90px]"
                />

                {/* Fine metallic highlights */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
                />

                <div className="relative mx-auto flex max-w-5xl flex-col items-center px-5 py-12 text-center sm:px-8 sm:py-16 lg:py-20">
                    <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-white/[0.04] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-amber-300 sm:text-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                        Make a Difference
                    </span>

                    <h2 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                        Join Be The Change Foundation
                        <span className="mt-2 block bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
                            For a Better Life and Future
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                        Your support helps us create meaningful opportunities and build a
                        stronger, more inclusive community.
                    </p>

                    <a
                        href="payment"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-rose-300/30 bg-gradient-to-b from-rose-500 to-rose-600 px-7 py-3 text-sm font-bold text-white shadow-[0_8px_25px_rgba(225,29,72,0.22),inset_0_1px_0_rgba(255,255,255,0.25)] transition-all duration-300  hover:border-rose-200/60 hover:from-rose-400 hover:to-rose-600 hover:shadow-[0_12px_35px_rgba(225,29,72,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
                    >
                        Donate Now
                        <ArrowUpRight
                            size={17}
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </a>

                    <p className="mt-4 text-xs tracking-wide text-slate-500">
                        Every contribution can help create lasting change.
                    </p>
                </div>
            </div>


        </>
    );
}
