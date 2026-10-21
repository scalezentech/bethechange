import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import TypingHeading from "./TypingHeading";

export default function NewspaperGallery({
  title = "NEWSPAPER VISUALS OF PROGRAM",
  images = [],
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeLightbox = () => setSelectedIndex(null);

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const getImageSrc = (image) =>
    typeof image === "string" ? image : image?.src;

  const getImageAlt = (image, index) =>
    typeof image === "string"
      ? `Newspaper clipping ${index + 1}`
      : image?.alt || `Newspaper clipping ${index + 1}`;

  if (!images.length) return null;

  const selectedImage =
    selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1700px]">
        {/* Section heading with typing animation */}

        <div className="mb-8 text-center sm:mb-10">
          <TypingHeading
            as="h2"
            text={title}
            className="text-2xl font-bold uppercase leading-tight text-[#353535] sm:text-3xl lg:text-4xl"
            speed={0.025}
            delay={0.1}
            triggerOnView
          />
        </div>

        {/* Responsive newspaper gallery */}

        <div
          className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4"
        >
          {images.map((image, index) => {
            const src = getImageSrc(image);
            const alt = getImageAlt(image, index);

            return (
              <button
                key={`${src}-${index}`}
                data-gsap-item
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`View newspaper image ${index + 1}`}
                className="mb-5 block w-full break-inside-avoid cursor-pointer overflow-hidden rounded-xl bg-gray-50 text-left shadow-[0_3px_14px_rgba(0,0,0,0.10)] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(0,0,0,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 motion-reduce:transition-none"
              >
                <img
                  src={src}
                  alt={alt}
                  loading={"lazy"}
                  decoding="async"
                  className="block h-auto w-full"
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Full-screen image viewer */}

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Newspaper image viewer"
          onClick={closeLightbox}
        >
          {/* Close button */}

          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X size={24} aria-hidden="true" />
          </button>

          {/* Previous image */}

          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6"
            >
              <ChevronLeft size={26} aria-hidden="true" />
            </button>
          )}

          {/* Selected image */}

          <img
            src={getImageSrc(selectedImage)}
            alt={getImageAlt(selectedImage, selectedIndex)}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[85vh] max-w-[85vw] object-contain"
          />

          {/* Next image */}

          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6"
            >
              <ChevronRight size={26} aria-hidden="true" />
            </button>
          )}

          {/* Image counter */}

          <span className="absolute bottom-4 text-sm text-white/80">
            {selectedIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </section>
  );
}