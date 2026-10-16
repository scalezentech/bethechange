
import { ExternalLink } from "lucide-react";

export default function VoiceOfChange({
  videoId,
  videoTitle = "Teacher testimonial",
  eyebrow = "TEACHER TESTIMONIAL",
  title = "Real Stories. Real Impact.",
  description = [],
  orientation = "horizontal",
  videoPosition = "left",
  videoLink,
  linkText = "Watch on YouTube",
}) {
  const paragraphs = Array.isArray(description)
    ? description
    : [description];

  const videoOnLeft = videoPosition === "left";
  const isVertical = orientation === "vertical";

  return (
    <section className="bg-[#fafafa] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-[1120px] items-center gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-7">
        {/* Video */}
        <div
          className={`min-w-0 lg:col-span-7 ${
            videoOnLeft ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div
            className={`relative mx-auto w-full overflow-hidden rounded-2xl bg-black shadow-[0_16px_35px_rgba(15,23,42,0.16)] ${
              isVertical
                ? "max-w-[360px] aspect-[9/16]"
                : "aspect-video"
            }`}
          >
            {videoId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title={videoTitle}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-sm text-white/80">
                Video unavailable
              </div>
            )}
          </div>
        </div>

        {/* Testimonial card */}
        <div
          className={`min-w-0 lg:col-span-5 ${
            videoOnLeft ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <article className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 lg:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-red-500">
              {eyebrow}
            </p>

            <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-[#243244] sm:text-3xl">
              {title}
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-[1.85] text-[#626262]">
              {paragraphs.filter(Boolean).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {videoLink && (
              <a
                href={videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-700 transition hover:text-green-900"
              >
                {linkText}
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}
