
import { useEffect, useRef } from "react";
import "./CustomCursor.css";

export default function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        );

        let cleanupListeners = null;
        let animationFrame = null;
        let active = false;
        let visible = false;
        let hoveringInteractive = false;

        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;

        const dot = dotRef.current;
        const ring = ringRef.current;

        if (!dot || !ring) return;

        const hideCursor = () => {
            visible = false;
            active = false;

            dot.classList.remove("custom-cursor-visible");
            ring.classList.remove("custom-cursor-visible");

            if (animationFrame !== null) {
                cancelAnimationFrame(animationFrame);
                animationFrame = null;
            }
        };

        const animateRing = () => {
            if (!active) {
                animationFrame = null;
                return;
            }

            // The ring follows the pointer with a smooth delay.
            const easing = 0.16;

            ringX += (mouseX - ringX) * easing;
            ringY += (mouseY - ringY) * easing;

            ring.style.transform = `translate3d(
                ${ringX}px,
                ${ringY}px,
                0
            ) translate(-50%, -50%)`;

            animationFrame = requestAnimationFrame(animateRing);
        };

        const handlePointerMove = (event) => {
            if (event.pointerType === "touch") return;

            mouseX = event.clientX;
            mouseY = event.clientY;

            // Keep the inner dot directly under the pointer.
            dot.style.transform = `translate3d(
                ${mouseX}px,
                ${mouseY}px,
                0
            ) translate(-50%, -50%)`;

            if (!visible) {
                visible = true;

                ringX = mouseX;
                ringY = mouseY;

                ring.style.transform = `translate3d(
                    ${ringX}px,
                    ${ringY}px,
                    0
                ) translate(-50%, -50%)`;

                dot.classList.add("custom-cursor-visible");
                ring.classList.add("custom-cursor-visible");
            }

            if (!active) {
                active = true;
                animationFrame = requestAnimationFrame(animateRing);
            }
        };

        const handlePointerOver = (event) => {
            const target = event.target;

            if (!(target instanceof Element)) return;

            const interactive = target.closest(
                [
                    "a",
                    "button",
                    "input",
                    "textarea",
                    "select",
                    "label",
                    "[role='button']",
                    "[data-cursor='hover']",
                ].join(",")
            );

            const shouldExpand = Boolean(interactive);

            if (shouldExpand !== hoveringInteractive) {
                hoveringInteractive = shouldExpand;

                dot.classList.toggle(
                    "custom-cursor-hover",
                    shouldExpand
                );

                ring.classList.toggle(
                    "custom-cursor-hover",
                    shouldExpand
                );
            }
        };

        const handlePointerLeave = () => {
            hideCursor();
        };

        const handlePointerEnter = () => {
            // The cursor becomes visible on the next pointer movement.
            visible = false;
            dot.classList.remove("custom-cursor-visible");
            ring.classList.remove("custom-cursor-visible");
        };

        const enableCursor = () => {
            if (!mediaQuery.matches || cleanupListeners) return;

            document.documentElement.classList.add(
                "custom-cursor-enabled"
            );

            document.addEventListener(
                "pointermove",
                handlePointerMove,
                { passive: true }
            );

            document.addEventListener(
                "pointerover",
                handlePointerOver,
                { passive: true }
            );

            document.addEventListener(
                "pointerleave",
                handlePointerLeave
            );

            document.addEventListener(
                "pointerenter",
                handlePointerEnter
            );

            cleanupListeners = () => {
                document.removeEventListener(
                    "pointermove",
                    handlePointerMove
                );

                document.removeEventListener(
                    "pointerover",
                    handlePointerOver
                );

                document.removeEventListener(
                    "pointerleave",
                    handlePointerLeave
                );

                document.removeEventListener(
                    "pointerenter",
                    handlePointerEnter
                );

                document.documentElement.classList.remove(
                    "custom-cursor-enabled"
                );

                hideCursor();

                dot.classList.remove("custom-cursor-hover");
                ring.classList.remove("custom-cursor-hover");

                hoveringInteractive = false;
            };
        };

        const disableCursor = () => {
            cleanupListeners?.();
            cleanupListeners = null;
        };

        const handleMediaChange = () => {
            if (mediaQuery.matches) {
                enableCursor();
            } else {
                disableCursor();
            }
        };

        handleMediaChange();

        mediaQuery.addEventListener("change", handleMediaChange);

        return () => {
            mediaQuery.removeEventListener(
                "change",
                handleMediaChange
            );

            disableCursor();

            if (animationFrame !== null) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, []);

    return (
        <div
            className="custom-cursor-container"
            aria-hidden="true"
        >
            <div
                ref={ringRef}
                className="custom-cursor-ring"
            />
            <div
                ref={dotRef}
                className="custom-cursor-dot"
            />
        </div>
    );
}
