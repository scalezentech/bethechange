import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, ArrowUpRight } from "lucide-react";
import sectionTitleBg from "../../assets/images/background/section-title-bg-two.png";

function InitiativeSlider({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [images.length]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={`${image}-${index}`} className="h-full w-full shrink-0">
              <img
                src={image}
                alt={`${title} - image ${index + 1}`}
                className="h-full w-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white transition hover:bg-black/70"
          >
            <ChevronLeft size={21} />
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white transition hover:bg-black/70"
          >
            <ChevronRight size={21} />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show image ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all ${
                  activeIndex === index
                    ? "w-8 bg-white"
                    : "w-4 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function RecentInitiativeShowcase({
  title,
  images = [],
  date,
  description,
  contentPosition = "right",
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText = "Know More",
  secondaryButtonLink,
}) {
  const contentOnRight = contentPosition === "right";
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <section className="relative isolate overflow-hidden bg-[#f5f5f1] px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[580px] lg:px-10 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage:
            "url('/assets/images/background/initiative-bg.png')",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className={contentOnRight ? "lg:order-1" : "lg:order-2"}>
          <div className="overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <InitiativeSlider images={images} title={title} />
          </div>
        </div>

        <div
          className={`min-w-0 ${
            contentOnRight ? "text-center lg:order-2" : "text-center lg:order-1"
          }`}
        >
          <div className="relative mb-5 inline-flex items-center justify-center px-5 py-2">
            <span
              aria-hidden="true"
              className="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${sectionTitleBg})` }}
            />
            <span className="relative z-10 text-3xl font-extrabold text-green-700 sm:text-4xl">
              Our Recent Initiative
            </span>
          </div>

          <h2 className="text-2xl font-bold leading-tight text-[#353535] sm:text-3xl lg:text-[36px]">
            {title}
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-green-600" />

          {date && (
            <p className="mt-4 text-left text-sm leading-6 text-[#666666] sm:text-base">
              <span className="font-semibold">Date:</span> {date}
            </p>
          )}

          <div className="mt-4 space-y-3 text-left text-sm leading-7 text-[#666666] sm:text-base">
            {paragraphs.filter(Boolean).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {(primaryButtonText || secondaryButtonText) && (
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start">
              {primaryButtonText && primaryButtonLink && (
                <a
                  href={primaryButtonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#10884d] px-7 py-3 text-sm font-bold text-white transition hover:bg-green-800"
                >
                  {primaryButtonText}
                  <ArrowUpRight size={16} />
                </a>
              )}

              {secondaryButtonText && secondaryButtonLink && (
                <a
                  href={secondaryButtonLink}
                  className="inline-flex items-center gap-2 font-semibold text-green-700 underline underline-offset-4 transition hover:text-green-900"
                >
                  <Heart size={16} fill="currentColor" />
                  {secondaryButtonText}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}