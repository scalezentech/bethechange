import {
  BookOpen,
  HeartPulse,
  Leaf,
  Palette,
  Users,
  Sprout,
  HeartHandshake,
  Trophy,
} from "lucide-react";

import education from "../../assets/images/focused-areas/focused1.jpg";
import health from "../../assets/images/focused-areas/focused4.jpg";
import environment from "../../assets/images/focused-areas/focused2.jpg";
import culture from "../../assets/images/focused-areas/focused3.jpg";
import social from "../../assets/images/focused-areas/focused5.jpg";
import agriculture from "../../assets/images/focused-areas/focused8.jpg";
import womenEmpowerment from "../../assets/images/focused-areas/focused6.jpg";
import sport from "../../assets/images/focused-areas/focused7.jpg";

const defaultAreas = [
  {
    title: "Education",
    description:
      "Empowering Minds: Providing Quality Education for Underprivileged Children",
    image: education,
    color: "#254DB5",
    textColor: "#ffffff",
    icon: BookOpen,
    featured: true,
    href: "/areas-of-work/education",
  },
  {
    title: "Health",
    description: "Advocating for Better Healthcare Systems",
    image: health,
    color: "#F4512B",
    textColor: "#ffffff",
    icon: HeartPulse,
    href: "/areas-of-work/health",
  },
  {
    title: "Environment",
    description:
      "Green Revolution: Inspiring Action for a Greener and Cleaner World",
    image: environment,
    color: "#4289DF",
    textColor: "#ffffff",
    icon: Leaf,
    href: "/areas-of-work/environment",
  },
  {
    title: "Culture",
    description:
      "Celebrating Diversity: Preserving and Promoting Cultural Heritage",
    image: culture,
    color: "#FFDF70",
    textColor: "#343434",
    icon: Palette,
    href: "/areas-of-work/culture",
  },
  {
    title: "Social",
    description:
      "Breaking Barriers, Building Inclusion: Social Justice for All",
    image: social,
    color: "#AAA5F7",
    textColor: "#ffffff",
    icon: Users,
    href: "/areas-of-work/social",
  },
  {
    title: "Agriculture",
    description:
      "Harvesting Hope: Supporting Farmers and Boosting Rural Economy",
    image: agriculture,
    color: "#F4512B",
    textColor: "#ffffff",
    icon: Sprout,
    href: "/areas-of-work/agriculture",
  },
  {
    title: "Women Empowerment",
    description:
      "Women Rising: Creating Opportunities, Nurturing Leadership",
    image: womenEmpowerment,
    color: "#AAA5F7",
    textColor: "#ffffff",
    icon: HeartHandshake,
    href: "/areas-of-work/women-empowerment",
  },
  {
    title: "Sports",
    description:
      "Empowering Through Sports: Be The Change Foundation's Sporting Initiatives",
    image: sport,
    color: "#AAA5F7",
    textColor: "#ffffff",
    icon: Trophy,
    href: "/areas-of-work/sport",
  },
];

function AreaCard({ area, featured = false }) {
  const Icon = area.icon;

  return (
    <article
      data-gsap-item
      className={`group relative min-w-0 rounded-2xl ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <a
        href={area.href || "#"}
        aria-label={`Read more about ${area.title}`}
        className={`group/card block h-full ${
          featured ? "lg:flex lg:w-full" : ""
        }`}
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden bg-gray-100 ${
            featured
              ? "aspect-[4/3] rounded-t-2xl lg:aspect-auto lg:min-h-[298px] lg:w-[48%] lg:shrink-0 lg:rounded-l-2xl lg:rounded-tr-none"
              : "aspect-[4/3] w-full rounded-t-2xl"
          }`}
        >
          <img
            src={area.image}
            alt={area.imageAlt || area.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.03]"
          />
        </div>

        {/* Content panel */}
        <div
          className={`relative flex min-w-0 flex-1 flex-col px-6 pb-7 pt-12 sm:px-7 ${
            featured
              ? "rounded-b-2xl lg:justify-center lg:rounded-b-none lg:rounded-r-2xl lg:py-8 lg:pl-9"
              : "min-h-[215px] rounded-b-2xl sm:min-h-[220px]"
          }`}
          style={{
            backgroundColor: area.color,
            color: area.textColor || "#ffffff",
          }}
        >
          {/* Icon badge */}
          <span
            className={`absolute z-20 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#10884d] text-white shadow-sm transition-transform duration-300 group-hover/card:-translate-y-1 ${
              featured
                ? "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
                : "left-6 -top-7"
            }`}
          >
            <Icon
              size={32}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </span>

          <h3 className="text-xl font-bold leading-snug">
            {area.title}
          </h3>

          <p className="mt-2 text-sm leading-[1.9] sm:text-[15px]">
            {area.description}
          </p>

          <span className="mt-4 inline-flex w-fit text-xs font-bold italic underline underline-offset-4 transition-opacity group-hover/card:opacity-75">
            READ MORE
          </span>
        </div>
      </a>
    </article>
  );
}

export default function FocusedAreas({
  eyebrow = "Our Focused Area’s",
  title = "Building a Better World",
  description = "Our focused areas include Education, Health, Environment, Culture, Social, Agriculture, Women Empowerment, and Sport. Each of these areas is essential to building a progressive society.",
  areas = defaultAreas,
}) {
  const educationArea = areas.find(
    (area) => area.title.toLowerCase() === "education"
  );

  const healthArea = areas.find(
    (area) => area.title.toLowerCase() === "health"
  );

  const remainingAreas = areas.filter(
    (area) =>
      area.title.toLowerCase() !== "education" &&
      area.title.toLowerCase() !== "health"
  );

  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-7">
          {/* Left column */}
          <div className="min-w-0 lg:col-span-8">
            <header className="mb-10 text-center">
              <span
                data-gsap-reveal
                className="relative isolate inline-flex items-center justify-center px-5 py-2 text-3xl font-extrabold text-[#10884d] sm:text-4xl"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-[url('/assets/images/background/section-title-bg-two.png')] bg-contain bg-center bg-no-repeat"
                />
                {eyebrow}
              </span>

              <h2
                data-gsap-reveal
                className="mt-3 text-3xl font-bold leading-tight text-[#353535] sm:text-4xl lg:text-[44px]"
              >
                {title}
              </h2>

              <span
                data-gsap-reveal
                className="mx-auto mt-4 block h-[3px] w-[72px] rounded-full bg-[#20B76B]"
              />

              <p
                data-gsap-reveal
                className="mx-auto mt-4 max-w-3xl text-left text-sm leading-[1.9] text-[#666666] sm:text-[15px]"
              >
                {description}
              </p>
            </header>

            <div
              data-gsap-stagger
              className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2"
            >
              {educationArea && (
                <AreaCard
                  key={educationArea.title}
                  area={educationArea}
                  featured
                />
              )}

              {remainingAreas.slice(0, 2).map((area) => (
                <AreaCard
                  key={area.title}
                  area={area}
                />
              ))}
            </div>
          </div>

          {/* Right column */}
          <div
            data-gsap-stagger
            className="min-w-0 lg:col-span-4"
          >
            {healthArea && (
              <div className="mb-6">
                <AreaCard area={healthArea} />
              </div>
            )}

            {remainingAreas.slice(2, 3).map((area) => (
              <div key={area.title} className="mb-6">
                <AreaCard area={area} />
              </div>
            ))}
          </div>
        </div>

        {/* Remaining areas */}
        {remainingAreas.length > 3 && (
          <div
            data-gsap-stagger
            className="mt-7 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {remainingAreas.slice(3).map((area) => (
              <AreaCard
                key={area.title}
                area={area}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}