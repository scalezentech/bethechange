import { useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function GlobalAnimations() {
  const { pathname } = useLocation();

  const { contextSafe } = useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Respect reduced-motion preferences.
      if (prefersReducedMotion) {
        return;
      }

      // 1. Page introduction animations.
      const pageIntro = gsap.utils.toArray("[data-gsap-intro]");

      if (pageIntro.length > 0) {
        gsap.from(pageIntro, {
          autoAlpha: 0,
          y: 18,
          duration: 0.65,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "opacity,visibility,transform",
        });
      }

      // 2. Create an individual reveal animation.
      // contextSafe ensures animations created by image load
      // callbacks are also managed by the GSAP context.
      const createReveal = contextSafe((element, refreshAfter = false) => {
        if (!element.isConnected) return;

        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            y: 28,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              once: true,
              invalidateOnRefresh: true,
            },
          }
        );

        // Recalculate positions after a delayed image has loaded.
        if (refreshAfter) {
          requestAnimationFrame(() => {
            ScrollTrigger.refresh();
          });
        }
      });

      // 3. Reveal elements individually.
      gsap.utils.toArray("[data-gsap-reveal]").forEach((element) => {
        const image = element.querySelector("img");

        // If this element contains an image that hasn't loaded,
        // wait before creating its ScrollTrigger.
        if (image && !image.complete) {
          gsap.set(element, {
            autoAlpha: 0,
            y: 28,
          });

          const handleImageReady = () => {
            if (!element.isConnected) return;

            createReveal(element, true);
          };

          image.addEventListener("load", handleImageReady, {
            once: true,
          });

          image.addEventListener("error", handleImageReady, {
            once: true,
          });

          return;
        }

        createReveal(element);
      });

      // 4. Stagger children when their container enters the viewport.
      gsap.utils
        .toArray("[data-gsap-stagger]")
        .forEach((container) => {
          const children = container.querySelectorAll(
            "[data-gsap-item]"
          );

          if (children.length === 0) return;

          gsap.from(children, {
            autoAlpha: 0,
            y: 22,
            duration: 0.55,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              once: true,
            },
          });
        });

      // Calculate initial positions after registering the triggers.
      ScrollTrigger.refresh();
    },
    {
      dependencies: [pathname],
      revertOnUpdate: true,
    }
  );

  return null;
}