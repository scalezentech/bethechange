
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import HeroSlider from "../../components/common/HeroSlider";
import heroBgImage from "../../assets/images/hero/hero-two-bg.jpg";
import sectionTitleBgTwo from "../../assets/images/background/section-title-bg-two.png";
import pdf from "../../assets/BE_THE_CHANGE_PROSPECTUS_2025.pdf";

export default function HomePage() {
    const [preloaderDone, setPreloaderDone] = useState(
        () =>
            typeof document !== "undefined" &&
            document.documentElement.dataset.preloaderComplete === "true"
    );

    useEffect(() => {
        const handlePreloaderComplete = () => {
            setPreloaderDone(true);
        };

        // Handle the case where the preloader finished before this effect ran.
        if (
            document.documentElement.dataset.preloaderComplete === "true"
        ) {
            setPreloaderDone(true);
            return;
        }

        window.addEventListener(
            "site:preloader-complete",
            handlePreloaderComplete
        );

        return () => {
            window.removeEventListener(
                "site:preloader-complete",
                handlePreloaderComplete
            );
        };
    }, []);

    const headingClassName =
        "max-w-xl text-4xl font-bold leading-tight sm:text-5xl lg:text-[58px]";

    return (
        <main className="w-full">
            <section className="relative isolate overflow-hidden py-10 sm:py-12 lg:min-h-160 lg:py-15">
                {/* Background image */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${heroBgImage})`,
                    }}
                />

                {/* Background overlay */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-1 bg-black/75"
                />

                <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-5">
                        {/* Hero slider */}
                        <div className="min-w-0 lg:col-span-7">
                            <div className="border-[5px] border-white bg-white shadow-lg">
                                <HeroSlider />
                            </div>
                        </div>

                        {/* Hero content */}
                        <div className="flex min-w-0 flex-col items-center text-center text-white lg:col-span-5">
                            {/* Section badge */}
                            <span className="relative isolate mb-5 inline-flex items-center justify-center px-6 py-3 text-sm font-extrabold uppercase tracking-[0.2em] text-[#008b53] sm:text-base">
                                <img
                                    className="absolute z-0 h-20 w-full object-center"
                                    src={sectionTitleBgTwo}
                                    alt=""
                                    aria-hidden="true"
                                    loading="lazy"
                                    decoding="async"
                                />

                                <span className="relative z-10">
                                    Small Actions, Big Impact
                                </span>
                            </span>

                        
                                <h1 className={headingClassName}>
                                    Creating Lasting Change
                                </h1>
                        

                            {/* Description */}
                            <p className="mx-auto mt-6 max-w-xl text-base leading-7 sm:text-lg sm:leading-8">
                                Our collaborative efforts promote social
                                justice, equity, and sustainable solutions.
                                Support our mission to create a world that is
                                equitable.
                            </p>

                            {/* Download prospectus */}
                            <a
                                href={pdf}
                                download
                                className="mt-6 inline-flex items-center justify-center rounded-md bg-[#168b54] px-7 py-4 font-semibold text-white transition hover:bg-green-800"
                            >
                                Download Prospectus
                            </a>
                        </div>
                    </div>

                    {/* CTA cards */}
                    <div className="mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-2 lg:mt-7">
                        {/* Areas of Work */}
                        <Link
                            to="/area-of-work"
                            className="group flex min-h-29 items-center justify-between gap-4 rounded-xl bg-[#0875e1] px-6 py-5 text-white transition hover:bg-blue-700 sm:px-7"
                        >
                            <div>
                                <h2 className="text-xl font-bold sm:text-2xl">
                                    Areas of Work
                                </h2>

                                <p className="mt-2 text-sm leading-6 sm:text-base">
                                    Discover our key focus areas and
                                    initiatives
                                </p>
                            </div>

                            <span
                                aria-hidden="true"
                                className="shrink-0 text-2xl transition-transform group-hover:translate-x-1"
                            >
                                →
                            </span>
                        </Link>

                        {/* Who We Are */}
                        <Link
                            to="/about-us"
                            className="group flex min-h-29 items-center justify-between gap-4 rounded-xl bg-[#20963d] px-6 py-5 text-white transition hover:bg-green-800 sm:px-7"
                        >
                            <div>
                                <h2 className="text-xl font-bold sm:text-2xl">
                                    Who We Are
                                </h2>

                                <p className="mt-2 text-sm leading-6 sm:text-base">
                                    Learn about our mission, vision, and team
                                </p>
                            </div>

                            <span
                                aria-hidden="true"
                                className="shrink-0 text-2xl transition-transform group-hover:translate-x-1"
                            >
                                →
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
