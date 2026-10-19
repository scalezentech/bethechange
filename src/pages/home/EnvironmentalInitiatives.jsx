import {
  Users,
  Trees,
  HandCoins,
} from "lucide-react";

import counterBg from "../../assets/images/background/counter-bg.png"
import sectionTitleBgTwo from "../../assets/images/background/section-title-bg-two.png"

export default function EnvironmentalInitiatives() {


  const statistics = [
    {
      value: "25+",
      label: "BTFC Volunteers",
      icon: Users,
    },
    {
      value: "450K",
      label: "BTFC Fund Raised",
      icon: HandCoins,
    },
    {
      value: "0.5M",
      label: "Tree Plantation Pledge",
      icon: Trees,
    },
  ];

  return (
    <section className="relative isolate overflow-hidden  py-16 sm:py-20 lg:py-24">
      {/* Forest background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:`url(${counterBg})`
        }}
      />


      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* Heading */}
        <header className="mx-auto max-w-[900px] text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[52px]">
            Creating a Sustainable Future
            <br className="hidden sm:block" /> Be The Change Foundation's
            <span className="relative isolate mt-1 block">
              {/* Brush-style background */}
              
              <img className=" absolute object-center w-full h-25 z-0" src={sectionTitleBgTwo} alt="sectionTitleBgTwo" />

              <span className="relative z-10 text-[#087F3E] text-shadow-2xs">
                Environmental Initiatives
              </span>
            </span>
          </h2>

          {/* Accent line */}
          <div
            aria-hidden="true"
            className="mx-auto mt-7 h-[5px] w-[90px] rounded-full bg-gradient-to-r from-green-400 to-emerald-300"
          />

          {/* Description */}
          <p className="mx-auto mt-5 max-w-[820px] text-sm font-medium leading-7 text-white sm:text-base sm:leading-[1.9] lg:text-[17px]">
            Be The Change Foundation is committed to protecting and preserving
            the environment for future generations. Through our initiatives in
            conservation, energy and climate, and sustainability, we strive to
            make a positive impact on the planet. Join us in building a better
            world through environmental activism and responsible practices.
            Together, we can create a sustainable future for all.
          </p>
        </header>

        {/* Impact statistics */}
        <div className="mx-auto mt-10 grid max-w-[1100px] grid-cols-1 divide-y divide-white/20 sm:mt-12 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {statistics.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center px-5 py-5 text-center sm:py-0"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="text-5xl font-extrabold leading-none tracking-tight text-[#ffdc58] sm:text-6xl lg:text-[76px]">
                  {value}
                </span>
              </div>

              <p className="mt-3 text-sm font-semibold italic text-white sm:text-base">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}