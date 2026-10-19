import { useState } from "react";
import { CalendarDays, Users } from "lucide-react";

// import sectionTitleBg from "../assets/images/background/section-title-bg-two.png";

import treePlantation from "../../assets/images/causes/cause-two1.jpg";
import bloodDonation from "../../assets/images/causes/cause-two2.jpg";
import careerGuidance from "../../assets/images/causes/cause-two22.jpg";

const causes = [
  {
    id: 1,
    title: "Tree Plantation Program at Khanapur Village",
    category: "Environment",
    image: treePlantation,
    date: "25 Jan 2023",
    volunteers: 10,
    progress: 48,
    featured: true,
  },
  {
    id: 2,
    title: "Blood Donation Camp in Shrirampur City",
    category: "Health",
    image: bloodDonation,
    date: "15 March 2023",
    volunteers: 107,
    progress: 52,
  },
  {
    id: 3,
    title: "Career Guidance Program in Kopargaon City",
    category: "Education",
    image: careerGuidance,
    date: "10 May 2023",
    volunteers: 6,
    progress: 50,
  },
];

function CauseCard({ cause }) {
  return (
    <article className="group mx-auto w-full max-w-[560px] overflow-hidden rounded-xl bg-white shadow-[0_3px_12px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.13)]">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={cause.image}
          alt={cause.title}
          loading="lazy"
          decoding="async"
          className="h-[230px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] sm:h-[270px]"
        />

        {/* Category label */}
        <span className="absolute bottom-0 right-5 z-10 min-w-[120px] bg-[#ffdc65] px-5 py-3 text-center text-xs font-bold uppercase text-[#353535]">
          {cause.category}

          <span
            aria-hidden="true"
            className="absolute -bottom-3 left-6 h-0 w-0 border-r-[12px] border-t-[12px] border-r-transparent border-t-[#ffdc65]"
          />
        </span>
      </div>

      {/* Cause details */}
      <div className="px-6 pb-6 pt-7 sm:px-8 sm:pb-7">
        <h3 className="min-h-[60px] text-xl font-bold leading-snug text-[#353535] sm:text-[23px]">
          {cause.title}
        </h3>

        {/* Progress bar */}
        <div
          className="relative mt-6 flex h-3 items-center"
          role="progressbar"
          aria-label={`${cause.title} progress`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={cause.progress}
        >
          <div className="h-[9px] w-full overflow-hidden rounded-full bg-[#dedede]">
            <div
              className="h-full rounded-full bg-[#10884d] transition-all duration-500"
              style={{ width: `${cause.progress}%` }}
            />
          </div>

          <span
            aria-hidden="true"
            className="absolute top-1/2 h-8 w-8 -translate-y-1/2 rounded-full border-[4px] border-white bg-[#10884d]"
            style={{ left: `calc(${cause.progress}% - 24px)` }}
          />
        </div>
      </div>

      {/* Date and volunteers */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 bg-[#f4f4f4] px-6 py-5 text-sm italic text-[#777777] sm:px-8 sm:text-base">
        <div className="flex items-center gap-2">
          <CalendarDays
            size={16}
            className="shrink-0 text-[#10884d]"
            aria-hidden="true"
          />
          <span>{cause.date}</span>
        </div>

        <div className="flex items-center gap-2">
          <Users
            size={16}
            className="shrink-0 text-[#10884d]"
            aria-hidden="true"
          />
          <span>{cause.volunteers} Volunteers</span>
        </div>
      </div>
    </article>
  );
}

export default function RecentCauses() {
  const [showAll, setShowAll] = useState(false);

  const visibleCauses = showAll ? causes : causes.slice(0, 3);

  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        {/* Section heading */}
        <header className="relative mb-10 text-center sm:mb-12">
          <h2 className="relative mx-auto max-w-[1050px] text-3xl font-bold leading-tight text-[#353535] sm:text-4xl lg:text-[48px]">
            Our Recent Causes Transforming Lives
            <br className="hidden sm:block" />
            Through Recent Initiatives Environment
          </h2>

          <div
            aria-hidden="true"
            className="mx-auto mt-5 h-1 w-24 rounded-full bg-[#20b76b]"
          />
        </header>

        {/* Cause cards */}
        <div className="grid grid-cols-1 items-center gap-7  md:grid-cols-2">
          {visibleCauses.map((cause) => (
            <CauseCard key={cause.id} cause={cause} />
          ))}
        </div>

        {/* View more / less */}
        {causes.length > 3 && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              aria-expanded={showAll}
              className="text-base italic text-[#777777] transition-colors hover:text-[#10884d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10884d] focus-visible:ring-offset-4"
            >
              Want to see our area’s of work{" "}
              <span className="font-semibold text-[#10884d] underline underline-offset-4">
                {showAll ? "View Less" : "Click here to View More"}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}