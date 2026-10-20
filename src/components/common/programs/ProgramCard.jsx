import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  MapPin,
  ChevronDown,
} from "lucide-react";

import ProgramMedia from "./ProgramMedia";

const TRANSITION_DURATION = 300;

const ProgramCard = ({ program, isOpen, onToggle }) => {
  const {
    id,
    date,
    location,
    title,
    description,
    media,
    externalLink,
    externalLinkText,
  } = program;

  const panelId = `program-panel-${
    id || title.replace(/[^a-zA-Z0-9]+/g, "-")
  }`;

  // Keep content mounted until the closing animation finishes.
  const [shouldRenderContent, setShouldRenderContent] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRenderContent(true);
      return undefined;
    }

    if (!shouldRenderContent) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setShouldRenderContent(false);
    }, TRANSITION_DURATION);

    return () => window.clearTimeout(timeoutId);
  }, [isOpen, shouldRenderContent]);

  return (
    <article className="relative rounded-2xl border border-stone-200/90 bg-white p-5 shadow-[0_4px_20px_rgba(31,41,35,0.035)] transition duration-300 hover:border-stone-300 hover:shadow-[0_12px_36px_rgba(31,41,35,0.08)] sm:p-7 md:rounded-3xl md:p-8">
      {/* Card heading */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#a42e32]">
              {date || "Initiative"}
            </span>

            {location && (
              <>
                <span
                  aria-hidden="true"
                  className="h-1 w-1 rounded-full bg-stone-300"
                />

                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500">
                  <MapPin size={13} />
                  {location}
                </span>
              </>
            )}
          </div>

          <h2 className="font-serif text-xl font-medium leading-snug tracking-tight text-[#183e31] sm:text-2xl md:text-[28px]">
            {title}
          </h2>

          {!isOpen && (
            <p className="mt-3 line-clamp-2 max-w-3xl text-sm leading-7 text-stone-600">
              {description}
            </p>
          )}
        </div>

        {/* Expand / collapse button */}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-label={`${isOpen ? "Collapse" : "Expand"} ${title}`}
          onClick={onToggle}
          className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ease-in-out sm:h-11 sm:w-11 ${
            isOpen
              ? "border-emerald-900 bg-emerald-900 text-white"
              : "border-stone-200 bg-white text-emerald-900 hover:border-emerald-900 hover:bg-emerald-900 hover:text-white"
          }`}
        >
          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>

      {/* Animated expanded content */}
      <div
        id={panelId}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          {shouldRenderContent && (
            <div className="mt-6 border-t border-stone-100 pt-6">
              {/* Initiative description */}
              <div className="max-w-4xl">
                <p className="whitespace-pre-line text-sm leading-7 text-stone-600 sm:text-[15px] sm:leading-8">
                  {description}
                </p>
              </div>

              {/* Gallery, video, feedback and newspaper */}
              <ProgramMedia media={media} title={title} />

              {/* External website link */}
              {externalLink && (
                <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-stone-100 pt-5">
                  <a
                    href={externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
                  >
                    {externalLinkText || "Learn More"}
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Explore initiative */}
      {!isOpen && (
        <button
          type="button"
          onClick={onToggle}
          className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-emerald-800 transition-colors duration-200 hover:text-[#a42e32] focus-visible:outline-none focus-visible:underline"
        >
          Explore initiative
          <ArrowUpRight size={14} />
        </button>
      )}
    </article>
  );
};

export default ProgramCard;