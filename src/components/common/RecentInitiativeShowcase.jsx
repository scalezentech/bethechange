import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ArrowUpRight,
} from "lucide-react";

import sectionTitleBg from "../../assets/images/background/section-title-bg-two.png";
import aboutBgImage from "../../assets/images/about/about-bg.png";
import useScrollTriggerVisibility from "../../hooks/useScrollTriggerVisibility";
import TypingHeading from "./TypingHeading";

/* =========================================================
   INITIATIVE IMAGE SLIDER
========================================================= */

function InitiativeSlider({ images = [], title = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const isSliderVisible = useScrollTriggerVisibility(sliderRef);

  const slideImages = Array.isArray(images) ? images : [];
  const imageCount = slideImages.length;

  useEffect(() => {
    setActiveIndex((currentIndex) => {
      if (imageCount === 0) return 0;
      return Math.min(currentIndex, imageCount - 1);
    });
  }, [imageCount]);

  // Autoplay runs only while the slider is visible.
  useEffect(() => {
    if (!isSliderVisible || imageCount <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex(
        (currentIndex) => (currentIndex + 1) % imageCount
      );
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isSliderVisible, imageCount]);

  const showPrevious = () => {
    if (imageCount <= 1) return;

    setActiveIndex(
      (currentIndex) =>
        (currentIndex - 1 + imageCount) % imageCount
    );
  };

  const showNext = () => {
    if (imageCount <= 1) return;

    setActiveIndex(
      (currentIndex) => (currentIndex + 1) % imageCount
    );
  };

  if (imageCount === 0) {
    return (
      <div
        ref={sliderRef}
        className="flex aspect-[4/3] w-full items-center justify-center bg-stone-100 text-sm text-stone-500"
      >
        No images available.
      </div>
    );
  }

  return (
    <div
      ref={sliderRef}
      className="relative w-full overflow-hidden"
    >
      {/* Slider viewport */}

      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {slideImages.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="h-full w-full shrink-0"
            >
              <img
                src={image}
                alt={`${title} - image ${index + 1}`}
                className="h-full w-full object-contain object-center"
                loading={
                  isSliderVisible && index === activeIndex
                    ? "eager"
                    : "lazy"
                }
                decoding="async"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation controls */}

      {imageCount > 1 && (
        <>
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft size={21} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight size={21} aria-hidden="true" />
          </button>

          {/* Image indicators */}

          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center px-4">
            <div className="flex max-w-full items-center gap-1.5 overflow-x-auto rounded-full bg-black/10 px-2 py-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {slideImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show image ${index + 1} of ${imageCount}`}
                  aria-current={
                    index === activeIndex ? "true" : undefined
                  }
                  className={`h-2 shrink-0 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-6 bg-white"
                      : "w-2 bg-white/65 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* =========================================================
   RECENT INITIATIVE SHOWCASE
========================================================= */

export default function RecentInitiativeShowcase({
  initiativeTitle = "Our Recent Initiative",
  title,
  images = [],
  date,
  description,
  contentPosition = "left",
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText = "Know More",
  secondaryButtonLink,
}) {
  const contentOnRight = contentPosition === "right";

  const paragraphs = Array.isArray(description)
    ? description
    : [description];

  return (
    <section
      data-gsap-reveal
      className="relative isolate overflow-hidden px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[580px] lg:px-10 lg:py-20"
    >
      {/* Background image */}

      <img
        src={aboutBgImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Initiative slider */}

        <div
          className={
            contentOnRight
              ? "min-w-0 lg:order-1"
              : "min-w-0 lg:order-2"
          }
        >
          <div className="overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <InitiativeSlider
              images={images}
              title={title}
            />
          </div>
        </div>

        {/* Initiative content */}

        <div
          className={`min-w-0 ${
            contentOnRight
              ? "text-center lg:order-2"
              : "text-center lg:order-1"
          }`}
        >
          {/* Section title */}

          <div
            data-gsap-reveal
            className="relative mb-5 inline-flex items-center justify-center overflow-visible px-5 py-2"
          >
            <img
              src={sectionTitleBg}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="pointer-events-none absolute z-0 h-20 w-full bg-cover bg-center bg-no-repeat object-contain"
            />

            <span className="relative z-[1] text-3xl font-extrabold text-green-700 sm:text-4xl">
              {initiativeTitle}
            </span>
          </div>

          {/* Initiative heading: letter-by-letter reveal on scroll */}

          <TypingHeading
            as="h2"
            text={title}
            className="text-2xl font-bold leading-tight text-[#353535] sm:text-3xl lg:text-[36px]"
            speed={0.035}
            delay={0.1}
            triggerOnView
          />

          <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-green-600" />

          {/* Date */}

          {date && (
            <p
              data-gsap-reveal
              className="mt-4 text-left text-sm leading-6 text-[#666666] sm:text-base"
            >
              <span className="font-semibold">Date:</span> {date}
            </p>
          )}

          {/* Staggered description paragraphs */}

          <div
            data-gsap-stagger
            className="mt-4 space-y-3 text-left text-sm leading-7 text-[#666666] sm:text-base"
          >
            {paragraphs.filter(Boolean).map((paragraph, index) => (
              <p key={index} data-gsap-item>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Action buttons */}

          {(primaryButtonText || secondaryButtonText) && (
            <div
              data-gsap-stagger
              className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start"
            >
              {primaryButtonText && primaryButtonLink && (
                <a
                  data-gsap-item
                  href={primaryButtonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#10884d] px-7 py-3 text-sm font-bold text-white transition hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
                >
                  {primaryButtonText}

                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                  />
                </a>
              )}

              {secondaryButtonText && secondaryButtonLink && (
                <a
                  data-gsap-item
                  href={secondaryButtonLink}
                  className="inline-flex items-center gap-2 font-semibold text-green-700 underline underline-offset-4 transition hover:text-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700"
                >
                  <Heart
                    size={16}
                    fill="currentColor"
                    aria-hidden="true"
                  />

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