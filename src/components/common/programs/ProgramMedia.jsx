import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Play,
} from "lucide-react";

const getYouTubeEmbedUrl = (value) => {
  if (!value || typeof value !== "string") {
    return "";
  }

  const input = value.trim();

  // Support YouTube video IDs directly.
  if (
    !input.startsWith("http://") &&
    !input.startsWith("https://")
  ) {
    return `https://www.youtube-nocookie.com/embed/${input}`;
  }

  try {
    const url = new URL(input);
    let videoId = url.searchParams.get("v");

    if (!videoId && url.hostname.includes("youtu.be")) {
      videoId = url.pathname
        .split("/")
        .filter(Boolean)
        .pop();
    }

    if (!videoId) {
      const parts = url.pathname
        .split("/")
        .filter(Boolean);

      const typeIndex = parts.findIndex((part) =>
        ["embed", "shorts", "live", "v"].includes(part)
      );

      if (typeIndex !== -1) {
        videoId = parts[typeIndex + 1];
      }
    }

    return videoId
      ? `https://www.youtube-nocookie.com/embed/${videoId}`
      : input;
  } catch {
    return "";
  }
};

const ProgramMedia = ({ media, title }) => {
  const gallery = media?.gallery ?? [];
  const videos = media?.videos ?? [];
  const feedback = media?.feedback ?? [];
  const newspapers = media?.newspapers ?? [];

  const tabs = [
    {
      id: "gallery",
      label: "Gallery",
      items: gallery,
    },
    {
      id: "videos",
      label: "Video",
      items: videos,
    },
    {
      id: "feedback",
      label: "Feedback",
      items: feedback,
    },
    {
      id: "newspapers",
      label: "Newspaper",
      items: newspapers,
    },
  ].filter((tab) => tab.items.length > 0);

  const [activeTab, setActiveTab] = useState(
    tabs[0]?.id ?? "gallery"
  );

  // Slider state is shared by Gallery and Newspaper.
  const [selectedImage, setSelectedImage] = useState(null);

  const titleSlug = title.replace(/[^a-zA-Z0-9]+/g, "-");
  const isSliderOpen = selectedImage !== null;

  // Reset the active tab if it is no longer available.
  useEffect(() => {
    if (!tabs.some((tab) => tab.id === activeTab)) {
      setActiveTab(tabs[0]?.id ?? "gallery");
    }
  }, [activeTab, media]);

  // Keyboard controls for the image slider.
  useEffect(() => {
    if (!isSliderOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedImage((current) => {
          if (!current || current.items.length < 2) {
            return current;
          }

          return {
            ...current,
            index:
              (current.index + 1) % current.items.length,
          };
        });
      }

      if (event.key === "ArrowLeft") {
        setSelectedImage((current) => {
          if (!current || current.items.length < 2) {
            return current;
          }

          return {
            ...current,
            index:
              (current.index - 1 + current.items.length) %
              current.items.length,
          };
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSliderOpen]);

  // Open the slider for the selected category.
  const openImageSlider = (images, index, type) => {
    setSelectedImage({
      items: images,
      index,
      type,
    });
  };

  const closeImageSlider = () => {
    setSelectedImage(null);
  };

  const showPreviousImage = () => {
    setSelectedImage((current) => {
      if (!current || current.items.length < 2) {
        return current;
      }

      return {
        ...current,
        index:
          (current.index - 1 + current.items.length) %
          current.items.length,
      };
    });
  };

  const showNextImage = () => {
    setSelectedImage((current) => {
      if (!current || current.items.length < 2) {
        return current;
      }

      return {
        ...current,
        index:
          (current.index + 1) % current.items.length,
      };
    });
  };

  // Render image thumbnails for Gallery or Newspaper.
  const renderImages = (images, type = "gallery") => {
    const isNewspaper = type === "newspapers";

    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={`${type}-${image}-${index}`}
            type="button"
            onClick={() =>
              openImageSlider(images, index, type)
            }
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-200 text-left outline-none ring-offset-2 transition focus-visible:ring-2 focus-visible:ring-emerald-700"
            aria-label={`View ${
              isNewspaper
                ? "newspaper clipping"
                : "gallery image"
            } ${index + 1} for ${title}`}
          >
            <img
              src={image}
              alt={`${title} - ${
                isNewspaper
                  ? "newspaper clipping"
                  : "gallery image"
              } ${index + 1}`}
              loading="lazy"
              className={`h-full w-full transition duration-500 group-hover:scale-105 ${
                isNewspaper
                  ? "object-contain p-1"
                  : "object-cover"
              }`}
            />

            <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />

            {isNewspaper && (
              <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-stone-700">
                Clipping {index + 1}
              </span>
            )}
          </button>
        ))}
      </div>
    );
  };

  // Render YouTube videos and participant feedback.
  const renderVideos = (items, type = "videos") => (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((video, index) => {
        const embedUrl = getYouTubeEmbedUrl(video);
        const isFeedback = type === "feedback";

        return (
          <div
            key={`${type}-${video}-${index}`}
            className="overflow-hidden rounded-2xl border border-stone-200 bg-white"
          >
            {embedUrl ? (
              <div className="aspect-video bg-stone-950">
                <iframe
                  src={embedUrl}
                  title={`${title} - ${
                    isFeedback ? "Feedback" : "Video"
                  } ${index + 1}`}
                  className="h-full w-full border-0"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex aspect-video items-center justify-center bg-stone-100 px-4 text-center text-sm text-stone-500">
                This video link is not valid.
              </div>
            )}

            <div className="flex items-center gap-3 px-4 py-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-800">
                <Play size={15} fill="currentColor" />
              </span>

              <div>
                <p className="text-sm font-semibold text-stone-800">
                  {isFeedback
                    ? "Participant Feedback"
                    : "Event Video"}
                </p>

                <p className="mt-0.5 text-xs text-stone-500">
                  {isFeedback
                    ? "Feedback recording"
                    : `Video ${index + 1}`}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const activeItems =
    tabs.find((tab) => tab.id === activeTab)?.items ?? [];

  const sliderItems = selectedImage?.items ?? [];
  const sliderIndex = selectedImage?.index ?? 0;
  const sliderType = selectedImage?.type ?? "gallery";

  const currentImage = sliderItems[sliderIndex];
  const isNewspaperSlider = sliderType === "newspapers";

  if (tabs.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 px-5 py-8 text-center">
        <p className="text-sm text-stone-500">
          Media for this initiative will be available soon.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      {/* Media tabs */}
      <div
        className="mb-5 flex flex-wrap gap-2 border-b border-stone-200 pb-4"
        role="tablist"
        aria-label={`${title} media categories`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${titleSlug}-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${titleSlug}-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold transition sm:text-sm ${
              activeTab === tab.id
                ? "bg-emerald-900 text-white shadow-sm"
                : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900"
            }`}
          >
            {tab.label}

            <span
              className={`rounded-full px-2 py-0.5 text-[10px] ${
                activeTab === tab.id
                  ? "bg-white/15 text-white"
                  : "bg-white text-stone-500"
              }`}
            >
              {tab.items.length}
            </span>
          </button>
        ))}
      </div>

      {/* Active media panel */}
      <div
        id={`panel-${titleSlug}-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${titleSlug}-${activeTab}`}
      >
        {activeTab === "gallery" &&
          renderImages(activeItems, "gallery")}

        {activeTab === "videos" &&
          renderVideos(activeItems, "videos")}

        {activeTab === "feedback" &&
          renderVideos(activeItems, "feedback")}

        {activeTab === "newspapers" &&
          renderImages(activeItems, "newspapers")}
      </div>

      {/* Full-screen slider for Gallery and Newspaper */}
      {isSliderOpen && currentImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={
            isNewspaperSlider
              ? `${title} newspaper viewer`
              : `${title} gallery viewer`
          }
          onClick={closeImageSlider}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeImageSlider}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close image viewer"
          >
            <X size={22} />
          </button>

          {/* Previous image */}
          {sliderItems.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousImage();
              }}
              className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6 sm:h-12 sm:w-12"
              aria-label="Previous image"
            >
              <ChevronLeft size={25} />
            </button>
          )}

          {/* Current image */}
          <div
            className="flex max-h-[85vh] max-w-[85vw] flex-col items-center gap-3"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              key={`${sliderType}-${sliderIndex}`}
              src={currentImage}
              alt={`${title} - ${
                isNewspaperSlider
                  ? "newspaper clipping"
                  : "gallery image"
              } ${sliderIndex + 1}`}
              className="max-h-[78vh] max-w-[85vw] rounded-lg object-contain"
            />

            <p className="text-center text-sm text-white/80">
              {isNewspaperSlider
                ? "Newspaper clipping"
                : "Gallery image"}{" "}
              {sliderIndex + 1} of {sliderItems.length}
            </p>
          </div>

          {/* Next image */}
          {sliderItems.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNextImage();
              }}
              className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:h-12 sm:w-12"
              aria-label="Next image"
            >
              <ChevronRight size={25} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProgramMedia;