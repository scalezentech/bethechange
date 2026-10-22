
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import testimonialBg from "../../assets/images/testimonialsReviewer/testimonials-bg.png";

import stripImage1 from "../../assets/images/instagram/instagram1.jpg";
import stripImage2 from "../../assets/images/instagram/instagram2.jpg";
import stripImage3 from "../../assets/images/instagram/instagram3.jpg";
import stripImage4 from "../../assets/images/instagram/instagram4.jpg";
import stripImage5 from "../../assets/images/instagram/instagram5.jpg";
import stripImage6 from "../../assets/images/instagram/instagram6.jpg";

const galleryImages = [
    {
        src: stripImage1,
        alt: "Children participating in education initiatives",
    },
    {
        src: stripImage2,
        alt: "Farmer working in a field",
    },
    {
        src: stripImage3,
        alt: "Children participating in sports activities",
    },
    {
        src: stripImage4,
        alt: "Tree plantation initiative",
    },
    {
        src: stripImage5,
        alt: "Cultural and community activities",
    },
    {
        src: stripImage6,
        alt: "Community awareness program",
    },
];

export default function Reviews({
    title = "Be the Change Reviews",
    reviews = [],
    autoPlay = true,
    interval = 6000,
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [imageFailed, setImageFailed] = useState(false);

    const hasReviews = Array.isArray(reviews) && reviews.length > 0;

    const safeIndex = hasReviews ? activeIndex % reviews.length : 0;
    const review = hasReviews ? reviews[safeIndex] : null;

    // Support common reviewer image property names.
    const reviewerImage = review
        ? review.image ||
          review.photo ||
          review.avatar ||
          review.imageUrl ||
          review.image_url
        : null;

    useEffect(() => {
        if (!autoPlay || reviews.length < 2) return;

        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % reviews.length);
        }, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval, reviews.length]);

    useEffect(() => {
        setImageFailed(false);
    }, [reviewerImage]);

    const previousReview = () => {
        if (!hasReviews) return;

        setActiveIndex(
            (current) => (current - 1 + reviews.length) % reviews.length
        );
    };

    const nextReview = () => {
        if (!hasReviews) return;

        setActiveIndex((current) => (current + 1) % reviews.length);
    };

    return (
        <>
            {/* Testimonials section */}
            <section className="relative isolate overflow-hidden px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
                {/* Background image */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url("${testimonialBg}")`,
                    }}
                />

                

                {/* Decorative quote */}
                <Quote
                    aria-hidden="true"
                    className="pointer-events-none absolute right-[8%] top-8 z-[2] h-24 w-24 text-white/[0.06] sm:h-36 sm:w-36"
                    strokeWidth={1}
                />

                <div className="relative z-10 mx-auto max-w-6xl">
                    {/* Heading */}
                    <header
                        className="mb-10 text-center sm:mb-12"
                        data-gsap-reveal
                    >
                        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                            {title}
                        </h2>

                        <div
                            aria-hidden="true"
                            className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-green-300 to-emerald-200"
                        />
                    </header>

                    {hasReviews ? (
                        <div
                            className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14"
                            aria-live="polite"
                        >
                            {/* Reviewer portrait */}
                            <div className="flex flex-col items-center justify-center">
                                <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-2 border-dotted border-white/90 p-2 sm:h-44 sm:w-44 lg:h-48 lg:w-48">
                                    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white/10">
                                        {reviewerImage && !imageFailed ? (
                                            <img
                                                key={reviewerImage}
                                                src={reviewerImage}
                                                alt={review.name || "Reviewer"}
                                                loading="lazy"
                                                decoding="async"
                                                className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                                                onError={() => setImageFailed(true)}
                                            />
                                        ) : (
                                            <div
                                                className="flex h-full w-full items-center justify-center bg-white/10 text-4xl font-bold uppercase text-white"
                                                aria-label="Reviewer photo unavailable"
                                            >
                                                {(review.name || "R")
                                                    .trim()
                                                    .charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial */}
                            <div className="min-w-0 text-center lg:text-left">
                                <p
                                    className="text-base font-medium italic leading-8 text-white sm:text-lg sm:leading-8 lg:text-xl lg:leading-9"
                                    data-gsap-reveal
                                >
                                    <span
                                        aria-hidden="true"
                                        className="mr-1 text-2xl font-bold text-[#ffdc62]"
                                    >
                                        “
                                    </span>

                                    {review.text}

                                    <span
                                        aria-hidden="true"
                                        className="ml-1 text-2xl font-bold text-[#ffdc62]"
                                    >
                                        ”
                                    </span>
                                </p>

                                <p className="mt-5 text-sm font-extrabold leading-6 text-[#ffdc62] sm:text-base">
                                    {review.name}
                                    {review.role ? `, ${review.role}` : ""}
                                </p>

                                {/* Review navigation */}
                                {reviews.length > 1 && (
                                    <div className="mt-7 flex items-center justify-center gap-4 lg:justify-start">
                                        <button
                                            type="button"
                                            onClick={previousReview}
                                            aria-label="Previous review"
                                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white transition hover:border-[#ffdc62] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffdc62]"
                                        >
                                            <ChevronLeft size={20} />
                                        </button>

                                        <div className="flex items-center gap-2">
                                            {reviews.map((item, index) => (
                                                <button
                                                    key={`${item.name || "review"}-${index}`}
                                                    type="button"
                                                    onClick={() => setActiveIndex(index)}
                                                    aria-label={`Show review ${index + 1}`}
                                                    aria-current={
                                                        index === safeIndex
                                                            ? "true"
                                                            : undefined
                                                    }
                                                    className={`h-2 rounded-full transition-all duration-300 ${
                                                        index === safeIndex
                                                            ? "w-7 bg-[#ffdc62]"
                                                            : "w-2 bg-white/50 hover:bg-white"
                                                    }`}
                                                />
                                            ))}
                                        </div>

                                        <button
                                            type="button"
                                            onClick={nextReview}
                                            aria-label="Next review"
                                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white transition hover:border-[#ffdc62] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffdc62]"
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <p className="relative z-10 py-6 text-center text-white/80">
                            Testimonials will be displayed here.
                        </p>
                    )}
                </div>
            </section>

            {/* Bottom image gallery: always renders, even when reviews is empty */}
            <div className="relative z-10 w-full overflow-hidden border-y-4 border-white/80">
                <div className="grid grid-cols-3 sm:grid-cols-6" data-gsap-stagger>
                    {galleryImages.map((image) => (
                        <div
                            key={image.src}
                            className="group relative aspect-[4/3] min-w-0 overflow-hidden bg-gray-200 sm:aspect-[3/2]"
                            data-gsap-item
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                decoding="async"
                                className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                onError={(event) => {
                                    console.error(
                                        "Failed to load gallery image:",
                                        image.src
                                    );
                                    event.currentTarget.style.visibility = "hidden";
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
