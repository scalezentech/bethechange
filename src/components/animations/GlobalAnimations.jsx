import { useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function GlobalAnimations() {
  const { pathname } = useLocation();

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Respect the user's reduced-motion preference.
      if (prefersReducedMotion) {
        ScrollTrigger.refresh();
        return;
      }

      // 1. Page introduction animations.
      // These run when the page is rendered, not on scroll.
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

      // 2. Reveal elements when they enter the viewport.
      gsap.utils
        .toArray("[data-gsap-reveal]")
        .forEach((element) => {
          gsap.from(element, {
            autoAlpha: 0,
            y: 28,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "opacity,visibility,transform",
            scrollTrigger: {
              trigger: element,
              start: "top 60%",
              end : "top 40%",
              once: true,
            },
          });
        });

      // 3. Stagger children when their container enters the viewport.
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

      // Recalculate trigger positions after setting up animations.
      ScrollTrigger.refresh();
    },
    {
      dependencies: [pathname],
      revertOnUpdate: true,
    }
  );

  return null;
}