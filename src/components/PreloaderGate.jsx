import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function PreloaderGate({ children }) {
  const gateRef = useRef(null);

  const [preloaderComplete, setPreloaderComplete] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.dataset.preloaderComplete ===
        "true"
  );

  /*
   * Wait for the preloader's exit animation to finish.
   */
  useEffect(() => {
    const handlePreloaderComplete = () => {
      setPreloaderComplete(true);
    };

    /*
     * The preloader might have finished before this effect
     * attaches its listener, so check the document as well.
     */
    if (
      document.documentElement.dataset.preloaderComplete ===
      "true"
    ) {
      handlePreloaderComplete();
    }

    window.addEventListener(
      "site:preloader-complete",
      handlePreloaderComplete
    );

    return () => {
      window.removeEventListener(
        "site:preloader-complete",
        handlePreloaderComplete
      );
    };
  }, []);

  /*
   * Animate the homepage after it mounts.
   */
  useGSAP(
    () => {
      if (!preloaderComplete || !gateRef.current) return;

      const pageElements = Array.from(
        gateRef.current.children
      );

      if (pageElements.length === 0) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(pageElements, {
          clearProps: "opacity,visibility,transform",
        });

        return;
      }

      gsap.fromTo(
        pageElements,
        {
          autoAlpha: 0,
          y: 24,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.06,
          ease: "power3.out",
          clearProps: "opacity,visibility,transform",
        }
      );
    },
    {
      scope: gateRef,
      dependencies: [preloaderComplete],
      revertOnUpdate: true,
    }
  );

  /*
   * Crucial: do not mount the homepage before completion.
   */
  if (!preloaderComplete) {
    return null;
  }

  return (
    <div ref={gateRef} className="contents">
      {children}
    </div>
  );
}