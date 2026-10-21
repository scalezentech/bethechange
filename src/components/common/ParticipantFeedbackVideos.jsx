
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import TypingHeading from "./TypingHeading";

export default function ParticipantFeedbackVideos({
  title = "Participant Feedback Videos",
  videos = [],
  initialVisible = 3,
}) {
  const [showAll, setShowAll] = useState(false);

  const visibleCount = Math.max(1, initialVisible);
  const displayedVideos = showAll
    ? videos
    : videos.slice(0, visibleCount);

  if (videos.length === 0) return null;

  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-6 text-center">
          <TypingHeading
            as="h2"
            text={title}
            className="text-2xl font-bold leading-tight text-[#353535] sm:text-3xl"
            speed={0.035}
            delay={0.1}
            triggerOnView
          />
        </div>

        <div
          data-gsap-stagger
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {displayedVideos.map((video, index) => (
            <div
              key={video.id || video.videoId || index}
              data-gsap-item
              className="min-w-0 overflow-hidden rounded-xl bg-black shadow-[0_4px_14px_rgba(0,0,0,0.10)] transition-shadow duration-300 hover:shadow-[0_8px_22px_rgba(0,0,0,0.16)]"
            >
              <div className="relative aspect-video w-full">
                {video.videoId ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                    title={video.title || `${title} ${index + 1}`}
                    className="absolute inset-0 h-full w-full border-0"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gray-900 text-sm text-white">
                    Video unavailable
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {videos.length > visibleCount && (
          <div
            data-gsap-reveal
            className="mt-8 flex justify-center"
          >
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              aria-expanded={showAll}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#10884d] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#096b3b] focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
            >
              {showAll ? (
                <>
                  View Less
                  <ChevronUp size={18} aria-hidden="true" />
                </>
              ) : (
                <>
                  View More ({videos.length - visibleCount})
                  <ChevronDown size={18} aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
