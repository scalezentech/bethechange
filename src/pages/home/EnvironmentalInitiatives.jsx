import { useRef } from "react";
import { Users, Trees, HandCoins } from "lucide-react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import counterBg from "../../assets/images/background/counter-bg.png";
import sectionTitleBgTwo from "../../assets/images/background/section-title-bg-two.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const statistics = [
  {
    target: 25,
    suffix: "+",
    decimals: 0,
    label: "BTFC Volunteers",
    icon: Users,
  },
  {
    target: 450,
    suffix: "K",
    decimals: 0,
    label: "BTFC Fund Raised",
    icon: HandCoins,
  },
  {
    target: 0.5,
    suffix: "M",
    decimals: 1,
    label: "Tree Plantation Pledge",
    icon: Trees,
  },
];

export default function EnvironmentalInitiatives() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const counters = section.querySelectorAll(
        "[data-gsap-counter]"
      );

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      counters.forEach((element) => {
        const target = Number(element.dataset.gsapCounter);
        const suffix = element.dataset.gsapSuffix || "";
        const decimals = Number(element.dataset.gsapDecimals) || 0;

        const formatValue = (value) =>
          `${value.toFixed(decimals)}${suffix}`;

        // Keep the final value visible when reduced motion is preferred.
        if (prefersReducedMotion) {
          element.textContent = formatValue(target);
          return;
        }

        const counter = { value: 0 };

        element.textContent = formatValue(0);

        gsap.to(counter, {
          value: target,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            once: true,
          },
          onUpdate: () => {
            element.textContent = formatValue(counter.value);
          },
          onComplete: () => {
            element.textContent = formatValue(target);
          },
        });
      });
    },
    {
      scope: sectionRef,
      revertOnUpdate: true,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Forest background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${counterBg})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* Heading */}
        <header className="mx-auto max-w-[900px] text-center">
          <h2
            data-gsap-reveal
            className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[52px]"
          >
            Creating a Sustainable Future
            <br className="hidden sm:block" /> Be The Change Foundation's

            <span className="relative isolate mt-1 block">
              <img
                src={sectionTitleBgTwo}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="pointer-events-none absolute inset-0 z-0 h-25 w-full object-center"
              />

              <span className="relative z-10 text-[#087F3E] text-shadow-2xs">
                Environmental Initiatives
              </span>
            </span>
          </h2>

          {/* Accent line */}
          <div
            data-gsap-reveal
            aria-hidden="true"
            className="mx-auto mt-7 h-[5px] w-[90px] rounded-full bg-gradient-to-r from-green-400 to-emerald-300"
          />

          {/* Description */}
          <p
            data-gsap-reveal
            className="mx-auto mt-5 max-w-[820px] text-sm font-medium leading-7 text-white sm:text-base sm:leading-[1.9] lg:text-[17px]"
          >
            Be The Change Foundation is committed to protecting and preserving
            the environment for future generations. Through our initiatives in
            conservation, energy and climate, and sustainability, we strive to
            make a positive impact on the planet. Join us in building a better
            world through environmental activism and responsible practices.
            Together, we can create a sustainable future for all.
          </p>
        </header>

        {/* Impact statistics */}
        <div
          data-gsap-stagger
          className="mx-auto mt-10 grid max-w-[1100px] grid-cols-1 divide-y divide-white/20 sm:mt-12 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {statistics.map(
            ({ target, suffix, decimals, label, icon: Icon }) => {
              const finalValue = `${target.toFixed(decimals)}${suffix}`;

              return (
                <div
                  key={label}
                  data-gsap-item
                  className="flex flex-col items-center justify-center px-5 py-6 text-center sm:py-0"
                >
                  <div className="flex items-center justify-center gap-3">
                    <Icon
                      size={27}
                      strokeWidth={1.8}
                      aria-hidden="true"
                      className="shrink-0 text-white"
                    />

                    <span
                      data-gsap-counter={target}
                      data-gsap-suffix={suffix}
                      data-gsap-decimals={decimals}
                      aria-label={finalValue}
                      className="text-5xl font-extrabold leading-none tracking-tight text-[#ffdc58] sm:text-6xl lg:text-[76px]"
                    >
                      {finalValue}
                    </span>
                  </div>

                  <p className="mt-3 text-sm font-semibold italic text-white sm:text-base">
                    {label}
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}