import {
  Trees,
  Droplets,
  Sprout,
  PawPrint,
} from "lucide-react";

import pollutionBg from "../../assets/images/background/pollution-lavel-bg.png";
import sectionTitleBg from "../../assets/images/background/section-title-bg-two.png";

const initiatives = [
  {
    title: "Implementing community-driven initiatives",
    Icon: Trees,
    color: "#d7edf8",
    number: "01",
  },
  {
    title: "Collaborating with stakeholders and government",
    Icon: Droplets,
    color: "#d8f5dc",
    number: "02",
  },
  {
    title: "Promoting sustainable practices",
    Icon: Sprout,
    color: "#f8dedb",
    number: "03",
  },
  {
    title: "Engaging in research and data analysis",
    Icon: PawPrint,
    color: "#f6d9eb",
    number: "04",
  },
];

export default function PollutionInitiatives() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f4f7f4] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${pollutionBg})`,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* Heading */}
        <header className="mx-auto max-w-[1000px] text-center">
          <h2
            data-gsap-reveal
            className="text-3xl font-extrabold leading-tight tracking-tight text-[#353535] sm:text-4xl md:text-5xl lg:text-[56px]"
          >
            Taking Action Against Pollution for a

            <span className="relative mx-auto mt-2 block w-fit max-w-full px-3 py-1.5">
              <span
                aria-hidden="true"
                className="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${sectionTitleBg})`,
                }}
              />

              <span className="relative z-10 text-[#087f3e]">
                Better Future
              </span>
            </span>
          </h2>

          <p
            data-gsap-reveal
            className="mx-auto mt-5 max-w-[920px] text-base font-medium leading-7 text-[#304256] sm:mt-6 sm:text-lg sm:leading-8 md:text-xl lg:text-[28px] lg:leading-[1.5]"
          >
            Fighting pollution to improve lives and protect the environment.
            Be The Change Foundation takes proactive measures to address high
            levels of pollution.
          </p>

          {/* Accent line */}
          <div
            data-gsap-reveal
            aria-hidden="true"
            className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-green-600 to-emerald-400 sm:mt-7 sm:w-24"
          />
        </header>

        {/* Environmental initiative cards */}
        <div
          data-gsap-stagger
          className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5"
        >
          {initiatives.map(
            ({ title, Icon, color, number }) => (
              <article
                key={number}
                data-gsap-item
                className="group relative flex min-h-[205px] flex-col overflow-hidden rounded-3xl border border-white/90 bg-linear-to-br from-white/7 via-[#f1f3f2] to-[#dfe4e1] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_5px_16px_rgba(31,48,39,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b9d8c5] hover:shadow-[inset_0_1px_0_rgba(255,255,255,1),0_10px_25px_rgba(31,88,54,0.13)] sm:p-6"
              >
                {/* Subtle metallic highlight */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white"
                />

                <div className="flex items-center justify-between">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/90 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_2px_5px_rgba(0,0,0,0.05)]"
                    style={{
                      background: `linear-gradient(145deg, ${color}, #ffffff)`,
                    }}
                  >
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                      className="text-[#10884d]"
                      aria-hidden="true"
                    />
                  </span>

                  <span className="font-mono text-xs tracking-[0.18em] text-[#718078]">
                    {number}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-semibold leading-relaxed text-[#304256] transition-colors duration-300 group-hover:text-[#087f3e] sm:text-lg">
                  {title}
                </h3>

                <div className="mt-auto pt-5">
                  <div
                    aria-hidden="true"
                    className="h-[2px] w-9 rounded-full bg-gradient-to-r from-[#10884d] to-[#9bd6af] transition-all duration-300 group-hover:w-14"
                  />
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}