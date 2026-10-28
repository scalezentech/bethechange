import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";

import flyer1 from "../../assets/images/flyer/1.webp";
import flyer2 from "../../assets/images/flyer/2.webp";
import flyer3 from "../../assets/images/flyer/3.webp";
import flyer4 from "../../assets/images/flyer/4.webp";
import flyer5 from "../../assets/images/flyer/5.webp";
import flyer6 from "../../assets/images/flyer/6.webp";
import flyer7 from "../../assets/images/flyer/7.webp";
import flyer8 from "../../assets/images/flyer/8.webp";
import flyer9 from "../../assets/images/flyer/9.webp";
import flyer10 from "../../assets/images/flyer/10.webp";
import flyer11 from "../../assets/images/flyer/11.webp";

import newFlyer from "../../assets/images/flyer/new.jpg";
import newFlyer1 from "../../assets/images/flyer/new1.jpg";
import newFlyer2 from "../../assets/images/flyer/new2.jpg";
import newFlyer3 from "../../assets/images/flyer/new3.jpg";
import newFlyer4 from "../../assets/images/flyer/new4.jpg";
import newFlyer5 from "../../assets/images/flyer/new5.jpg";

const slides = [
    newFlyer,
    newFlyer1,
    newFlyer3,
    newFlyer4,
    newFlyer2,
    flyer1,
    newFlyer5,
    flyer2,
    flyer3,
    flyer4,
    flyer5,
    flyer6,
    flyer7,
    flyer8,
    flyer9,
    flyer10,
    flyer11,
];

const AUTOPLAY_DELAY = 5000;
const TRANSITION_DURATION = 1.2; // Increased slightly for the premium expo ease

export default function HeroSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const activeIndexRef = useRef(0);
    const transitioningRef = useRef(false);

    const currentImageRef = useRef(null);
    const incomingImageRef = useRef(null);
    const stageRef = useRef(null);

    const animationRef = useRef(null);
    const autoplayRef = useRef(null);

    const clearAutoplay = useCallback(() => {
        if (autoplayRef.current !== null) {
            window.clearTimeout(autoplayRef.current);
            autoplayRef.current = null;
        }
    }, []);

    const preloadImage = useCallback((src) => {
        return new Promise((resolve) => {
            const image = new Image();

            image.onload = async () => {
                try {
                    if (image.decode) await image.decode();
                } catch {
                    // Continue if decode is unsupported.
                }
                resolve(true);
            };

            image.onerror = () => resolve(false);
            image.src = src;

            if (image.complete && image.naturalWidth > 0) {
                resolve(true);
            }
        });
    }, []);

    const changeSlide = useCallback(
        async (direction, requestedIndex = null) => {
            if (transitioningRef.current) return;

            const currentIndex = activeIndexRef.current;
            const nextIndex =
                requestedIndex !== null
                    ? requestedIndex
                    : (currentIndex + direction + slides.length) % slides.length;

            if (nextIndex === currentIndex) return;

            transitioningRef.current = true;
            setIsTransitioning(true);
            clearAutoplay();

            const currentImage = currentImageRef.current;
            const incomingImage = incomingImageRef.current;
            const stage = stageRef.current;

            try {
                const loaded = await preloadImage(slides[nextIndex]);

                if (!loaded || !currentImage || !incomingImage || !stage) {
                    activeIndexRef.current = nextIndex;
                    setActiveIndex(nextIndex);
                    transitioningRef.current = false;
                    setIsTransitioning(false);
                    startAutoplay();
                    return;
                }

                animationRef.current?.kill();

                incomingImage.src = slides[nextIndex];

                try {
                    if (incomingImage.decode) await incomingImage.decode();
                } catch {
                    // The image is already preloaded.
                }

                const isNext = direction === 1;
                const rotationAngle = 85; 

                // Setup the 3D Stage
                gsap.set(stage, {
                    perspective: 2000, // Deeper perspective for a more cinematic feel
                    transformStyle: "preserve-3d",
                });

                // Reset Current Image
                gsap.set(currentImage, {
                    opacity: 1,
                    visibility: "visible",
                    rotationY: 0,
                    rotationX: 0,
                    scale: 1,
                    z: 0,
                    transformOrigin: isNext ? "left center" : "right center",
                    backfaceVisibility: "hidden",
                });

                // Setup Incoming Image deeper in the Z-axis
                gsap.set(incomingImage, {
                    opacity: 0,
                    visibility: "visible",
                    rotationY: isNext ? rotationAngle : -rotationAngle,
                    rotationX: 0,
                    scale: 0.8, // Start slightly smaller
                    z: -800, // Start deep in the background
                    transformOrigin: isNext ? "right center" : "left center",
                    backfaceVisibility: "hidden",
                });

                const timeline = gsap.timeline({
                    onComplete: () => {
                        // Switch to a single stable image after the transition.
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
                        startAutoplay();
                    },
                    onInterrupt: () => {
                        transitioningRef.current = false;
                        setIsTransitioning(false);
                    },
                });

                // Animate out the current image
                timeline.to(
                    currentImage,
                    {
                        rotationY: isNext ? -rotationAngle : rotationAngle,
                        scale: 0.8,
                        z: -800,
                        opacity: 0,
                        duration: TRANSITION_DURATION,
                        ease: "expo.inOut", // Snappy, Apple-like easing
                    },
                    0
                );

                // Animate in the next image
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
                    0 // Start exactly at the same time
                );
            } catch (error) {
                console.error("Hero slider transition failed:", error);

                transitioningRef.current = false;
                setIsTransitioning(false);
                startAutoplay();
            }
        },
        [clearAutoplay, preloadImage]
    );

    const startAutoplay = useCallback(() => {
        clearAutoplay();

        autoplayRef.current = window.setTimeout(() => {
            changeSlide(1);
        }, AUTOPLAY_DELAY);
    }, [changeSlide, clearAutoplay]);

    useEffect(() => {
        let cancelled = false;

        const preloadSlides = async () => {
            await Promise.all(slides.map(preloadImage));
            if (!cancelled) startAutoplay();
        };

        preloadSlides();

        return () => {
            cancelled = true;
            clearAutoplay();
            animationRef.current?.kill();
        };
    }, [clearAutoplay, preloadImage, startAutoplay]);

    const showNext = () => changeSlide(1);
    const showPrevious = () => changeSlide(-1);

    const goToSlide = (index) => {
        if (index === activeIndexRef.current) return;
        changeSlide(index > activeIndexRef.current ? 1 : -1, index);
    };

    return (
        <section
            className="relative w-full overflow-hidden bg-gray-100"
            aria-label="Be The Change Foundation image slider"
            aria-roledescription="carousel"
        >
            <div
                ref={stageRef}
                className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-video lg:aspect-[16/9] bg-white"
                style={{ perspective: "2000px" }}
            >
                {/* Current flyer */}
                <img
                    ref={currentImageRef}
                    src={slides[activeIndex]}
                    alt={`Be The Change Foundation flyer ${activeIndex + 1}`}
                    className="absolute inset-0 h-full w-full object-cover drop-shadow-2xl"
                    style={{
                        backfaceVisibility: "hidden",
                        transformStyle: "preserve-3d",
                        willChange: "transform, opacity",
                    }}
                    draggable="false"
                />

                {/* Incoming 3D flyer */}
                <img
                    ref={incomingImageRef}
                    src={slides[activeIndex]}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover drop-shadow-2xl"
                    style={{
                        opacity: 0,
                        visibility: "hidden",
                        backfaceVisibility: "hidden",
                        transformStyle: "preserve-3d",
                        willChange: "transform, opacity",
                    }}
                    draggable="false"
                />
            </div>

            {/* Previous */}
            <button
                type="button"
                onClick={showPrevious}
                disabled={isTransitioning}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/75 disabled:cursor-wait sm:left-5 sm:h-11 sm:w-11"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Next */}
            <button
                type="button"
                onClick={showNext}
                disabled={isTransitioning}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/75 disabled:cursor-wait sm:right-5 sm:h-11 sm:w-11"
            >
                <ChevronRight size={24} />
            </button>

            {/* Pagination */}
            <div className="absolute bottom-3 left-1/2 z-20 flex max-w-[85%] -translate-x-1/2 items-center justify-center gap-1.5 overflow-hidden rounded-full bg-black/40  px-2 py-1.5">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => goToSlide(index)}
                        disabled={isTransitioning}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index === activeIndex ? "true" : undefined}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            index === activeIndex
                                ? "w-5 bg-white"
                                : "w-2 bg-white/50 hover:bg-white"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}