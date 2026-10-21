
import { useRef, useState } from "react";
import { CheckCircle2, Play } from "lucide-react";
import TypingHeading from "./TypingHeading";

export default function AwardHighlights({
  videoId,
  videoTitle = "Award highlights",
  organization = "Be The Change Foundation",
  title = "Maharashtra State Level Teachers Award",
  description = "",
  highlights = [
    "State Level Award Ceremony",
    "Honouring Excellence",
    "Inspirational Success Stories",
  ],
  orientation = "horizontal",
  videoPosition = "left",
  videoType = "youtube",
  videoSrc,
  thumbnail,
}) {
  const videoOnLeft = videoPosition === "left";
  const isVertical = orientation === "vertical";

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const paragraphs = Array.isArray(description)
    ? description
    : [description];

  const youtubeEmbedUrl = videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}`
    : "";

  const handlePlay = async () => {
    if (!videoRef.current) return;

    try {
      videoRef.current.muted = false;
      await videoRef.current.play();
    } catch (error) {
      console.error("Unable to play award video:", error);
    }
  };

  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-[1400px] items-center gap-7 lg:grid-cols-12 lg:gap-10">
        {/* Video */}
        <div
          data-gsap-reveal
          className={`min-w-0 lg:col-span-7 ${
            videoOnLeft ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div
            className={`relative mx-auto w-full overflow-hidden rounded-2xl bg-black shadow-[0_8px_28px_rgba(0,0,0,0.14)] ${
              isVertical
                ? "aspect-[3/4] max-w-[360px]"
                : "aspect-video"
            }`}
          >
            {videoType === "file" && videoSrc ? (
              <>
                <video
                  ref={videoRef}
                  src={videoSrc}
                  poster={thumbnail}
                  title={videoTitle}
                  controls={isPlaying}
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                />

                {!isPlaying && (
                  <button
                    type="button"
                    onClick={handlePlay}
                    aria-label={`Play ${videoTitle}`}
                    className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 transition hover:bg-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/60 text-white shadow-lg transition-transform hover:scale-110">
                      <Play
                        size={32}
                        fill="currentColor"
                        className="ml-1"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                )}
              </>
            ) : videoId ? (
              <iframe
                src={youtubeEmbedUrl}
                title={videoTitle}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center px-5 text-center text-sm text-white">
                Video is currently unavailable.
              </div>
            )}
          </div>
        </div>

        {/* Award information */}
        <div
          data-gsap-reveal
          className={`min-w-0 lg:col-span-5 ${
            videoOnLeft ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_5px_25px_rgba(0,0,0,0.09)] sm:p-7 lg:p-8">
            <span className="inline-flex max-w-full rounded-md bg-[#ed3e50] px-2.5 py-1 text-xs font-bold leading-tight text-white">
              {organization}
            </span>

            <TypingHeading
              as="h2"
              text={title}
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#353535] sm:text-4xl"
              speed={0.035}
              delay={0.1}
              triggerOnView
            />

            <div
              data-gsap-stagger
              className="mt-4 space-y-3 text-sm leading-7 text-[#666666] sm:text-[15px]"
            >
              {paragraphs.filter(Boolean).map((paragraph, index) => (
                <p key={index} data-gsap-item>
                  {paragraph}
                </p>
              ))}
            </div>

            {highlights.length > 0 && (
              <ul
                data-gsap-stagger
                className="mt-5 space-y-2.5"
              >
                {highlights.map((highlight, index) => (
                  <li
                    key={`${highlight}-${index}`}
                    data-gsap-item
                    className="flex items-start gap-2 text-sm leading-5 text-[#666666] sm:text-[15px]"
                  >
                    <CheckCircle2
                      size={17}
                      strokeWidth={2}
                      className="mt-0.5 shrink-0 text-[#777777]"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}
