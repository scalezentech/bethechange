
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ArrowUpRight,
} from "lucide-react";
import { gsap } from "gsap";

import sectionTitleBg from "../../assets/images/background/section-title-bg-two.png";
import aboutBgImage from "../../assets/images/about/about-bg.png";
import useScrollTriggerVisibility from "../../hooks/useScrollTriggerVisibility";
import TypingHeading from "./TypingHeading";

const AUTOPLAY_DELAY = 5000;
const TRANSITION_DURATION = 1.2;

/* =========================================================
   INITIATIVE IMAGE SLIDER (3D GSAP VERSION)
========================================================= */

function InitiativeSlider({ images = [], title = "" }) {
  const slideImages = Array.isArray(images) ? images : [];
  const imageCount = slideImages.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeIndexRef = useRef(0);
  const transitioningRef = useRef(false);

  const currentImageRef = useRef(null);
  const incomingImageRef = useRef(null);
  const stageRef = useRef(null);
  const sliderVisibilityRef = useRef(null);

  const animationRef = useRef(null);
  const autoplayRef = useRef(null);

  // Refs prevent circular callback dependencies.
  const changeSlideRef = useRef(null);
  const startAutoplayRef = useRef(null);

  const isSliderVisible = useScrollTriggerVisibility(
    sliderVisibilityRef
  );

  const clearAutoplay = useCallback(() => {
    if (autoplayRef.current !== null) {
      window.clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const preloadImage = useCallback((src) => {
    return new Promise((resolve) => {
      const image = new Image();
      let settled = false;

      const finish = (result) => {
        if (settled) return;
        settled = true;
        resolve(result);
      };

      image.onload = async () => {
        try {
          if (image.decode) {
            await image.decode();
          }
        } catch {
          // Continue if decoding is unsupported.
        }

        finish(true);
      };

      image.onerror = () => finish(false);
      image.src = src;

      if (image.complete && image.naturalWidth > 0) {
        finish(true);
      }
    });
  }, []);

  // Autoplay uses refs so it always calls the latest slide function.
  const startAutoplay = useCallback(() => {
    clearAutoplay();

    if (!isSliderVisible || imageCount <= 1) {
      return;
    }

    autoplayRef.current = window.setTimeout(() => {
      changeSlideRef.current?.(1);
    }, AUTOPLAY_DELAY);
  }, [clearAutoplay, isSliderVisible, imageCount]);

  const changeSlide = useCallback(
    async (direction, requestedIndex = null) => {
      if (transitioningRef.current || imageCount <= 1) {
        return;
      }

      const currentIndex = activeIndexRef.current;

      const nextIndex =
        requestedIndex !== null
          ? requestedIndex
          : (currentIndex + direction + imageCount) % imageCount;

      if (nextIndex === currentIndex) {
        startAutoplayRef.current?.();
        return;
      }

      transitioningRef.current = true;
      setIsTransitioning(true);
      clearAutoplay();

      const currentImage = currentImageRef.current;
      const incomingImage = incomingImageRef.current;
      const stage = stageRef.current;

      try {
        const loaded = await preloadImage(slideImages[nextIndex]);

        if (
          !loaded ||
          !currentImage ||
          !incomingImage ||
          !stage
        ) {
          if (!loaded) {
            console.warn(
              "Unable to load initiative image:",
              slideImages[nextIndex]
            );
          }

          transitioningRef.current = false;
          setIsTransitioning(false);
          startAutoplayRef.current?.();
          return;
        }

        animationRef.current?.kill();

        incomingImage.src = slideImages[nextIndex];

        try {
          if (incomingImage.decode) {
            await incomingImage.decode();
          }
        } catch {
          // Continue because the image has already been preloaded.
        }

        const isNext = direction === 1;
        const rotationAngle = 85;

        // Setup the 3D stage — unchanged.
        gsap.set(stage, {
          perspective: 2000,
          transformStyle: "preserve-3d",
        });

        // Reset current image — unchanged.
        gsap.set(currentImage, {
          opacity: 1,
          visibility: "visible",
          rotationY: 0,
          rotationX: 0,
          scale: 1,
          z: 0,
          transformOrigin: isNext
            ? "left center"
            : "right center",
          backfaceVisibility: "hidden",
        });

        // Setup incoming image — unchanged.
        gsap.set(incomingImage, {
          opacity: 0,
          visibility: "visible",
          rotationY: isNext
            ? rotationAngle
            : -rotationAngle,
          rotationX: 0,
          scale: 0.8,
          z: -800,
          transformOrigin: isNext
            ? "right center"
            : "left center",
          backfaceVisibility: "hidden",
        });

        const timeline = gsap.timeline({
          onComplete: () => {
            if (!currentImageRef.current || !incomingImageRef.current) {
              transitioningRef.current = false;
              setIsTransitioning(false);
              return;
            }

            gsap.set(incomingImage, {
              rotationY: 0,
              rotationX: 0,
              scale: 1,
              z: 0,
              opacity: 1,
              visibility: "visible",
              clearProps: "transform,transformOrigin",
            });

            gsap.set(currentImage, {
              opacity: 0,
              visibility: "hidden",
              clearProps: "transform,transformOrigin",
            });

            activeIndexRef.current = nextIndex;
            setActiveIndex(nextIndex);

            transitioningRef.current = false;
            setIsTransitioning(false);

            // Schedule the next slide after the animation finishes.
            startAutoplayRef.current?.();
          },

          onInterrupt: () => {
            transitioningRef.current = false;
            setIsTransitioning(false);
          },
        });

        animationRef.current = timeline;

        // Animate out current image — unchanged.
        timeline.to(
          currentImage,
          {
            rotationY: isNext
              ? -rotationAngle
              : rotationAngle,
            scale: 0.8,
            z: -800,
            opacity: 0,
            duration: TRANSITION_DURATION,
            ease: "expo.inOut",
          },
          0
        );

        // Animate in next image — unchanged.
        timeline.to(
          incomingImage,
          {
            rotationY: 0,
            scale: 1,
            z: 0,
            opacity: 1,
            duration: TRANSITION_DURATION,
            ease: "expo.inOut",
          },
          0
        );
      } catch (error) {
        console.error(
          "Initiative slider transition failed:",
          error
        );

        transitioningRef.current = false;
        setIsTransitioning(false);
        startAutoplayRef.current?.();
      }
    },
    [
      clearAutoplay,
      preloadImage,
      slideImages,
      imageCount,
    ]
  );

  // Always keep the latest callbacks available to the timer.
  useEffect(() => {
    changeSlideRef.current = changeSlide;
  }, [changeSlide]);

  useEffect(() => {
    startAutoplayRef.current = startAutoplay;
  }, [startAutoplay]);

  // Start/restart autoplay when visibility changes.
  useEffect(() => {
    startAutoplay();

    return () => {
      clearAutoplay();
    };
  }, [isSliderVisible, startAutoplay, clearAutoplay]);

  // Reset safely if the image list becomes shorter.
  useEffect(() => {
    if (activeIndexRef.current >= imageCount) {
      activeIndexRef.current = 0;
      setActiveIndex(0);
    }

    if (imageCount <= 1) {
      clearAutoplay();
    }
  }, [imageCount, clearAutoplay]);

  // Clean up timers and animations when unmounting.
  useEffect(() => {
    return () => {
      clearAutoplay();
      animationRef.current?.kill();
      transitioningRef.current = false;
    };
  }, [clearAutoplay]);

  const showPrevious = () => changeSlide(-1);
  const showNext = () => changeSlide(1);

  const goToSlide = (index) => {
    if (
      index === activeIndexRef.current ||
      transitioningRef.current
    ) {
      return;
    }

    changeSlide(
      index > activeIndexRef.current ? 1 : -1,
      index
    );
  };

  if (imageCount === 0) {
    return (
      <div
        ref={sliderVisibilityRef}
        className="flex aspect-[4/3] w-full items-center justify-center bg-stone-100 text-sm text-stone-500"
      >
        No images available.
      </div>
    );
  }

  return (
    <div
      ref={sliderVisibilityRef}
      className="relative w-full overflow-hidden bg-white"
    >
      {/* 3D Slider viewport */}
      <div
        ref={stageRef}
        className="relative aspect-[4/3] w-full overflow-hidden"
        style={{ perspective: "2000px" }}
      >
        {/* Current image */}
        <img
          ref={currentImageRef}
          src={slideImages[activeIndex]}
          alt={`${title} image ${activeIndex + 1}`}
          className="absolute inset-0 h-full w-full object-contain object-center"
          style={{
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            willChange: "transform, opacity",
          }}
          loading="eager"
          decoding="async"
          draggable={false}
        />

        {/* Incoming 3D image */}
        {imageCount > 1 && (
          <img
            ref={incomingImageRef}
            src={slideImages[activeIndex]}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-contain object-center"
            style={{
              opacity: 0,
              visibility: "hidden",
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
              willChange: "transform, opacity",
            }}
            draggable={false}
          />
        )}
      </div>

      {/* Navigation controls */}
      {imageCount > 1 && (
        <>
          <button
            type="button"
            onClick={showPrevious}
            disabled={isTransitioning}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-wait"
          >
            <ChevronLeft size={21} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={showNext}
            disabled={isTransitioning}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-wait"
          >
            <ChevronRight size={21} aria-hidden="true" />
          </button>

          {/* Image indicators */}
          <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center px-4">
            <div className="flex max-w-full items-center gap-1.5 overflow-x-auto rounded-full bg-black/40 px-2 py-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {slideImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
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
            <InitiativeSlider images={images} title={title} />
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

          {/* Initiative heading */}
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

          {/* Description paragraphs */}
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
                  <ArrowUpRight size={16} aria-hidden="true" />
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
