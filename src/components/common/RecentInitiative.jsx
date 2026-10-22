
import { ExternalLink } from "lucide-react";
import TypingHeading from "./TypingHeading";

export default function RecentInitiative({
  title,
  date,
  location,
  description,
  videoId,
  link,
  Icon,
  linkText = "Learn More",
  videoPosition = "left",
  orientation = "vertical",
  videoWidth = "default",
}) {
  const videoOnLeft = videoPosition === "left";
  const isHorizontal = orientation === "horizontal";

  const paragraphs = Array.isArray(description)
    ? description
    : [description];

  // Keep the video and content columns balanced.
  const videoColumnClass =
    videoWidth === "wide"
      ? "lg:col-span-5"
      : videoWidth === "compact"
        ? "lg:col-span-3"
        : "lg:col-span-4";

  const contentColumnClass =
    videoWidth === "wide"
      ? "lg:col-span-7"
      : videoWidth === "compact"
        ? "lg:col-span-9"
        : "lg:col-span-8";

  return (
    <section className="bg-[#f8f9f7] py-10 sm:py-12 lg:py-12">
      <div className="mx-auto grid max-w-[1600px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-10">
        {/* Video column */}

        <div
          data-gsap-reveal
          className={`min-w-0 ${videoColumnClass} ${
            videoOnLeft ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div
            className={`mx-auto w-full overflow-hidden rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.16)] ${
              isHorizontal ? "max-w-[640px]" : "max-w-[435px]"
            }`}
          >
            <div
              className={`relative w-full bg-black ${
                isHorizontal ? "aspect-video" : "aspect-[9/16]"
              }`}
            >
              {videoId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                  title={title}
                  className="absolute inset-0 block h-full w-full border-0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-white/70">
                  Video unavailable
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content column */}

        <div
          className={`min-w-0 ${contentColumnClass} ${
            videoOnLeft ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {/* Section label */}

          <span
            data-gsap-reveal
            className="inline-flex items-center rounded-full bg-[#e4f0e7] px-5 py-3 text-sm font-medium leading-5 text-[#236b42]"
          >
            Recent Initiatives
          </span>

          {/* Initiative title: individual letters rise and fade in */}

          <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1">
            <TypingHeading
              as="h2"
              text={title}
              className="text-2xl font-bold leading-[1.2] tracking-tight text-[#242424] sm:text-3xl lg:text-[42px]"
              speed={0.035}
              delay={0.5}
            />

            {Icon && (
              <Icon
                size={35}
                aria-hidden="true"
                className="inline-block shrink-0 text-[#F59E0B]"
              />
            )}
          </div>

          {/* Location and date */}

          {(location || date) && (
            <p
              data-gsap-reveal
              className="mt-2 text-sm font-semibold leading-6 text-[#666666] sm:text-base"
            >
              {[location, date].filter(Boolean).join(" · ")}
            </p>
          )}

          {/* Description paragraphs: staggered by GlobalAnimations */}

          <div
            data-gsap-stagger
            className="mt-5 space-y-4 text-sm leading-[1.8] text-[#242424] sm:text-base sm:leading-[1.8]"
          >
            {paragraphs.filter(Boolean).map((paragraph, index) => (
              <p
                key={index}
                data-gsap-item
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* External action link */}

          {link && (
            <a
              data-gsap-reveal
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#286b43] px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1d5433] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#286b43]"
            >
              {linkText}

              <ExternalLink
                size={15}
                aria-hidden="true"
              />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
