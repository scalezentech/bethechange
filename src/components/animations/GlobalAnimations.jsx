
import { useLocation } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function GlobalAnimations() {
    const { pathname } = useLocation();

    useGSAP(
        () => {
            const isPreloaderComplete =
                document.documentElement.dataset.preloaderComplete === "true";

            if (!isPreloaderComplete) {
                return;
            }

            const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            if (prefersReducedMotion) {
                gsap.set(
                    [
                        "[data-gsap-intro]",
                        "[data-gsap-reveal]",
                        "[data-gsap-stagger] [data-gsap-item]",
                    ],
                    {
                        clearProps: "opacity,visibility,transform",
                    }
                );

                return;
            }

            // 1. Page intro animations.
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

            // 2. Individual scroll reveals.
            const createReveal = (element, refreshAfter = false) => {
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

                if (refreshAfter) {
                    requestAnimationFrame(() => {
                        ScrollTrigger.refresh();
                    });
                }
            };

            gsap.utils
                .toArray("[data-gsap-reveal]")
                .forEach((element) => {
                    const image = element.querySelector("img");

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

            // 3. Staggered child animations.
            gsap.utils
                .toArray("[data-gsap-stagger]")
                .forEach((container) => {
                    const children = container.querySelectorAll(
                        "[data-gsap-item]"
                    );

                    if (!children.length) return;

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

            ScrollTrigger.refresh();
        },
        {
            dependencies: [pathname],
            revertOnUpdate: true,
        }
    );

    return null;
}
