import { useState } from "react";
import { CalendarDays } from "lucide-react";

import ProgramCard from "./ProgramCard";

const ProgramTimeline = ({ programs = [] }) => {
  // Keep track of the single currently expanded initiative.
  const [expandedProgramId, setExpandedProgramId] = useState(null);

  // Open a card or close it if it is already open.
  const handleToggle = (programId) => {
    setExpandedProgramId((currentId) =>
      currentId === programId ? null : programId
    );
  };

  if (programs.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-stone-300 bg-white/70 px-6 py-16 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-800">
          <CalendarDays size={25} />
        </div>

        <h2 className="font-serif text-2xl text-[#183e31]">
          No initiatives found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-stone-500">
          We couldn't find any initiatives matching your search. Try another
          name, location, or year.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Vertical timeline */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-[15px] top-8 border-l border-dashed border-stone-300 sm:left-[19px]"
      />

      <div className="space-y-7 sm:space-y-9">
        {programs.map((program, index) => {
          const programId =
            program.id || `${program.title}-${index}`;

          return (
            <div
              key={programId}
              className="relative pl-10 sm:pl-14"
            >
              {/* Timeline marker */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-7 z-10 flex h-[31px] w-[31px] items-center justify-center rounded-full border border-[#c4d4c8] bg-[#f7f4ec] sm:left-[3px] sm:h-[33px] sm:w-[33px]"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-800 ring-4 ring-[#e6eee7]" />
              </div>

              {/* Only one initiative can be open */}
              <ProgramCard
                program={program}
                isOpen={expandedProgramId === programId}
                onToggle={() => handleToggle(programId)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgramTimeline;