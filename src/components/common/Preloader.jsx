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
    document.addEventListener("DOMContentLoaded", resolve, { once: true });
  });
}

function waitForImage(image) {
  if (image.complete) return Promise.resolve();

  return new Promise((resolve) => {
    const finish = () => resolve();
    image.addEventListener("load", finish, { once: true });
    image.addEventListener("error", finish, { once: true });
  });
}

export default function Preloader({ onRevealStart, onComplete }) {
  const [progress, setProgress] = useState(0);

  const overlayRef = useRef(null);
  const brandRef = useRef(null);
  const timelineRef = useRef(null);

  // Keep the latest callbacks in refs so the loading effect runs only once,
  // even if the parent passes new function instances.
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

    // Scroll lock without touching overflow, so the scrollbar never
    // appears/disappears and the layout width never changes.
    const preventScroll = (e) => e.preventDefault();

    const preventScrollKeys = (e) => {
      const keys = [
        " ",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        "ArrowUp",
        "ArrowDown",
      ];
      if (keys.includes(e.key)) e.preventDefault();
    };

    const lockScroll = () => {
      if (scrollLocked) return;
      scrollLocked = true;
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
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
      // Start at the top and stop the browser restoring an old position.
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);

      setProgress(8);

      // 1. Wait for the document structure.
      await waitForDocumentReady();
      if (cancelled) return;

      setProgress(25);

      // 2. Wait only for images near the initial viewport.
      const importantImages = Array.from(document.images).filter((image) => {
        const rect = image.getBoundingClientRect();
        return (
          rect.bottom >= -window.innerHeight * 0.5 &&
          rect.top <= window.innerHeight * 1.5
        );
      });

      const imageTasks = importantImages.map(waitForImage);

      const fontTask = document.fonts?.ready
        ? Promise.resolve(document.fonts.ready).catch(() => undefined)
        : Promise.resolve();

      const tasks = [...imageTasks, fontTask];
      const totalTasks = tasks.length;
      let completedTasks = 0;

      setProgress(55);

      const resourceTask = Promise.all(
        tasks.map((task) =>
          task.then(() => {
            completedTasks += 1;
            if (cancelled || !progressUpdatesEnabled) return;

            setProgress(55 + Math.round((40 * completedTasks) / totalTasks));
          })
        )
      );

      // Don't let one slow resource block the site forever.
      await Promise.race([resourceTask, wait(2500)]);
      if (cancelled) return;

      progressUpdatesEnabled = false;

      setProgress(100);
      await wait(200);
      if (cancelled) return;

      const overlay = overlayRef.current;
      const brand = brandRef.current;
      const siteContent = document.querySelector("[data-site-content]");

      // Mounts the page animations (GlobalAnimations).
      onRevealStartRef.current?.();

      if (!overlay) {
        onCompleteRef.current?.();
        return;
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Reduced motion: no curtain animation, just show the site.
      if (prefersReducedMotion) {
        if (siteContent) {
          gsap.set(siteContent, { clearProps: "opacity,visibility" });
        }
        onCompleteRef.current?.();
        return;
      }

      lockScroll();

      const timeline = gsap.timeline({
        onComplete: () => {
          unlockScroll();

          // Re-measure scroll positions once the curtain is gone.
          ScrollTrigger.refresh();

          if (!cancelled) {
            onCompleteRef.current?.();
          }
        },
      });

      timelineRef.current = timeline;

      // Brand fades up and out.
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

      // Reveal page content behind the curtain.
      // Opacity only: a transform on this wrapper would break the
      // fixed/sticky Header and cause a snap when cleared.
      if (siteContent) {
        gsap.set(siteContent, { autoAlpha: 0 });

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

      // Slide the curtain upward.
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

    startLoading();

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
      className="fixed inset-0 z-999999 flex items-center justify-center overflow-hidden bg-[#123d2b] px-6 text-white"
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
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}