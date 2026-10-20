import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Search, X } from "lucide-react";

import programsData from "../data/programsData";
import ProgramTimeline from "../components/common/programs/ProgramTimeline"

const OurPrograms = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPrograms = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return programsData;
    }

    return programsData.filter((program) => {
      const searchableContent = [
        program.title,
        program.date,
        program.location,
        program.description,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableContent.includes(query);
    });
  }, [searchTerm]);

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <main className="min-h-screen bg-[#f7f4ec] text-stone-800">

      {/* Hero and search */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#f1ead9] via-[#f7f4ec] to-[#f7f4ec]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-[#d9d0b9]/60 sm:h-[450px] sm:w-[450px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-16 h-64 w-64 rounded-full border border-[#d9d0b9]/40 sm:h-[350px] sm:w-[350px]"
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-20 lg:px-10 lg:pb-20 lg:pt-24">
          <div className="max-w-4xl">
            <p className="mb-5 font-serif text-lg italic text-[#9b3435] sm:text-xl">
              Field notes from the ground
            </p>

            <h1 className="max-w-4xl font-serif text-4xl font-medium leading-[1.12] tracking-tight text-[#183e31] sm:text-5xl md:text-6xl lg:text-[72px]">
              Our Recent
              <br className="hidden sm:block" /> Initiatives
            </h1>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
              Every award ceremony, plantation drive, and classroom we've
              touched — with the photographs, films, voices and press clippings
              that came out of it. Open any card below to step inside the story.
            </p>

            {/* Search */}
            <div className="mt-9 max-w-2xl">
              <label
                htmlFor="initiative-search"
                className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-stone-500"
              >
                Explore our initiatives
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white/90 px-4 shadow-sm transition focus-within:border-emerald-800 focus-within:ring-2 focus-within:ring-emerald-800/10 sm:px-5">
                <Search
                  size={19}
                  className="shrink-0 text-stone-400"
                  aria-hidden="true"
                />

                <input
                  id="initiative-search"
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search initiatives by name or year..."
                  autoComplete="off"
                  className="min-h-[54px] w-full min-w-0 bg-transparent text-sm text-stone-800 outline-none placeholder:text-stone-400 sm:min-h-[60px] sm:text-base"
                />

                {searchTerm && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    aria-label="Clear search"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-stone-500 transition hover:bg-stone-100 hover:text-stone-900"
                  >
                    <X size={17} />
                  </button>
                )}
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500">
                <span>
                  Showing{" "}
                  <strong className="font-semibold text-[#183e31]">
                    {filteredPrograms.length}
                  </strong>{" "}
                  of{" "}
                  <strong className="font-semibold text-[#183e31]">
                    {programsData.length}
                  </strong>{" "}
                  initiatives
                </span>

                {searchTerm && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="font-semibold text-emerald-800 underline-offset-4 hover:underline"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives timeline */}
      <section
        className="mx-auto max-w-7xl px-5 pb-20 pt-5 sm:px-8 sm:pb-24 sm:pt-8 lg:px-10"
        aria-label="Recent initiatives"
      >
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b3435] sm:text-xs">
              Our work in action
            </p>

            <h2 className="font-serif text-2xl font-medium text-[#183e31] sm:text-3xl">
              Stories of change
            </h2>
          </div>

          <span className="hidden text-sm text-stone-500 sm:block">
            People. Purpose. Progress.
          </span>
        </div>

        <ProgramTimeline programs={filteredPrograms} />

        {/* End-of-timeline note */}
        {filteredPrograms.length > 0 && (
          <div className="ml-10 mt-12 flex items-center gap-3 sm:ml-14">
            <span className="h-px w-10 bg-stone-300" />

            <p className="text-xs font-medium italic text-stone-500 sm:text-sm">
              Every small step can create lasting change.
            </p>
          </div>
        )}
      </section>

    </main>
  );
};

export default OurPrograms;