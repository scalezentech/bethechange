import { useEffect, useRef, useState } from "react";
import { Sprout } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const wait = (ms) =>
  new Promise((resolve) => window.setTimeout(resolve, ms));

function waitForDocumentReady() {
  if (document.readyState !== "loading") {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    document.addEventListener("DOMContentLoaded", resolve, {
      once: true,
    });
  });
}

function waitForImage(image) {
  if (image.complete) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const finish = () => resolve();

    image.addEventListener("load", finish, { once: true });
    image.addEventListener("error", finish, { once: true });
  });
}

export default function Preloader({
  onRevealStart,
  onComplete,
}) {
  const [progress, setProgress] = useState(0);

  const overlayRef = useRef(null);
  const brandRef = useRef(null);
  const timelineRef = useRef(null);

  const onRevealStartRef = useRef(onRevealStart);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onRevealStartRef.current = onRevealStart;
    onCompleteRef.current = onComplete;
  }, [onRevealStart, onComplete]);

  useEffect(() => {
    let cancelled = false;
    let progressUpdatesEnabled = true;
    let scrollLocked = false;
    let completionSignalled = false;

    /*
     * Signal completion only once.
     *
     * This function must be called after the curtain has
     * finished exiting, not when progress first reaches 100%.
     */
    const completePreloader = () => {
      if (cancelled || completionSignalled) return;

      completionSignalled = true;

      document.documentElement.dataset.preloaderComplete =
        "true";

      window.dispatchEvent(
        new Event("site:preloader-complete")
      );

      onRevealStartRef.current?.();
      onCompleteRef.current?.();
    };

    const preventScroll = (event) => {
      event.preventDefault();
    };

    const preventScrollKeys = (event) => {
      const keys = [
        " ",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        "ArrowUp",
        "ArrowDown",
      ];

      if (keys.includes(event.key)) {
        event.preventDefault();
      }
    };

    const lockScroll = () => {
      if (scrollLocked) return;

      scrollLocked = true;

      window.addEventListener("wheel", preventScroll, {
        passive: false,
      });

      window.addEventListener("touchmove", preventScroll, {
        passive: false,
      });

      window.addEventListener("keydown", preventScrollKeys);
    };

    const unlockScroll = () => {
      if (!scrollLocked) return;

      scrollLocked = false;

      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventScrollKeys);
    };

    const startLoading = async () => {
      /*
       * Start at the top and disable browser scroll restoration.
       */
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      window.scrollTo(0, 0);

      setProgress(8);

      /*
       * 1. Wait for the document structure.
       */
      await waitForDocumentReady();

      if (cancelled) return;

      setProgress(25);

      /*
       * 2. Wait for images near the initial viewport.
       */
      const importantImages = Array.from(document.images).filter(
        (image) => {
          const rect = image.getBoundingClientRect();

          return (
            rect.bottom >= -window.innerHeight * 0.5 &&
            rect.top <= window.innerHeight * 1.5
          );
        }
      );

      const imageTasks = importantImages.map(waitForImage);

      const fontTask = document.fonts?.ready
        ? Promise.resolve(document.fonts.ready).catch(
            () => undefined
          )
        : Promise.resolve();

      const tasks = [...imageTasks, fontTask];
      const totalTasks = tasks.length;

      let completedTasks = 0;

      setProgress(55);

      /*
       * Track loading progress without letting a single image
       * or font block the preloader indefinitely.
       */
      const resourceTask = Promise.all(
        tasks.map((task) =>
          task.then(() => {
            completedTasks += 1;

            if (cancelled || !progressUpdatesEnabled) return;

            const resourceProgress =
              totalTasks > 0
                ? Math.round(
                    (40 * completedTasks) / totalTasks
                  )
                : 40;

            setProgress(55 + resourceProgress);
          })
        )
      );

      await Promise.race([resourceTask, wait(2500)]);

      if (cancelled) return;

      progressUpdatesEnabled = false;

      setProgress(100);

      await wait(200);

      if (cancelled) return;

      const overlay = overlayRef.current;
      const brand = brandRef.current;
      const siteContent = document.querySelector(
        "[data-site-content]"
      );

      /*
       * If there is no overlay, complete immediately.
       */
      if (!overlay) {
        if (siteContent) {
          gsap.set(siteContent, {
            clearProps: "opacity,visibility",
          });
        }

        completePreloader();
        return;
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      /*
       * Respect the user's reduced-motion preference.
       */
      if (prefersReducedMotion) {
        if (siteContent) {
          gsap.set(siteContent, {
            clearProps: "opacity,visibility",
          });
        }

        gsap.set(overlay, {
          clearProps: "all",
        });

        completePreloader();
        return;
      }

      /*
       * Start the exit animation.
       *
       * IMPORTANT:
       * Do not dispatch the completion event before this timeline
       * finishes. The homepage gate listens for that event.
       */
      lockScroll();

      const timeline = gsap.timeline({
        onComplete: () => {
          unlockScroll();

          ScrollTrigger.refresh();

          completePreloader();
        },
      });

      timelineRef.current = timeline;

      /*
       * Fade the loader branding out.
       */
      if (brand) {
        timeline.to(
          brand,
          {
            autoAlpha: 0,
            y: -18,
            duration: 0.25,
            ease: "power2.in",
          },
          0
        );
      }

      /*
       * Reveal the existing site wrapper behind the curtain.
       * The homepage itself remains unmounted by PreloaderGate.
       */
      if (siteContent) {
        timeline.set(
          siteContent,
          {
            autoAlpha: 0,
          },
          0
        );

        timeline.to(
          siteContent,
          {
            autoAlpha: 1,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "opacity,visibility",
          },
          0.35
        );
      }

      /*
       * Slide the preloader curtain out of view.
       */
      timeline.to(
        overlay,
        {
          yPercent: -100,
          duration: 0.9,
          ease: "power4.inOut",
        },
        0.1
      );
    };

    startLoading().catch((error) => {
      console.error("Preloader failed:", error);

      if (!cancelled) {
        const siteContent = document.querySelector(
          "[data-site-content]"
        );

        if (siteContent) {
          gsap.set(siteContent, {
            clearProps: "opacity,visibility",
          });
        }

        completePreloader();
      }
    });

    return () => {
      cancelled = true;
      progressUpdatesEnabled = false;

      timelineRef.current?.kill();
      timelineRef.current = null;

      unlockScroll();
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      role="status"
      aria-label={`Loading Be The Change Foundation: ${progress}%`}
      className="fixed inset-0 z-[999999] flex items-center justify-center overflow-hidden bg-[#123d2b] px-6 text-white"
    >
      {/* Decorative background rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full border border-white/[0.07]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-28 h-96 w-96 rounded-full border border-white/[0.07]"
      />

      {/* Loader branding */}
      <div
        ref={brandRef}
        className="relative z-10 flex w-full max-w-sm flex-col items-center text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] shadow-lg">
          <Sprout
            size={34}
            strokeWidth={1.6}
            className="text-emerald-300"
            aria-hidden="true"
          />
        </div>

        <p className="mt-7 text-2xl font-extrabold tracking-[0.12em] sm:text-3xl">
          BE THE CHANGE
        </p>

        <p className="mt-2 text-xs font-medium uppercase tracking-[0.24em] text-emerald-200 sm:text-sm">
          Foundation
        </p>

        <p className="mt-5 text-sm leading-6 text-white/65">
          Creating a better tomorrow, together.
        </p>

        {/* Percentage */}
        <div className="mt-9 flex w-56 items-center justify-between">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/55">
            Loading
          </span>

          <span className="text-sm font-semibold tabular-nums text-emerald-200">
            {progress}%
          </span>
        </div>

        {/* Progress bar */}
        <div className="mt-3 h-[3px] w-56 overflow-hidden rounded-full bg-white/15">
          <div
            className="h-full rounded-full bg-emerald-300 transition-[width] duration-300 ease-out"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}