import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-gray-100"
      aria-label="Be The Change Foundation image slider"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-video lg:aspect-[5/3]">
        <div
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((image, index) => (
            <div
              key={image}
              className="h-full w-full flex-shrink-0"
            >
              <img
                src={image}
                alt={`Be The Change Foundation flyer ${index + 1}`}
                className="h-full w-full object-contain"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={showPrevious}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/75 sm:left-5 sm:h-11 sm:w-11"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        type="button"
        onClick={showNext}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/75 sm:right-5 sm:h-11 sm:w-11"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-3 left-1/2 z-20 flex max-w-[85%] -translate-x-1/2 items-center justify-center gap-1.5 overflow-hidden rounded-full bg-black/20 px-2 py-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-5 bg-white"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}