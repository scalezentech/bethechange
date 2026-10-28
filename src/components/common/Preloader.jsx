import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */

const wait = (ms) => new Promise((resolve) => window.setTimeout(resolve, ms));

function waitForDocumentReady() {
  if (document.readyState !== "loading") return Promise.resolve();
  return new Promise((resolve) => {
    document.addEventListener("DOMContentLoaded", resolve, { once: true });
  });
}

function waitForImage(image) {
  if (image.complete) return Promise.resolve();
  return new Promise((resolve) => {
    image.addEventListener("load", resolve, { once: true });
    image.addEventListener("error", resolve, { once: true });
  });
}

/* ------------------------------------------------------------------ */
/* Ashoka Chakra                                                       */
/* ------------------------------------------------------------------ */

const SPOKES = Array.from({ length: 24 }, (_, i) => i * 15);

/** Chakra drawn around (0,0) with radius 112 – used inside the waving flag */
function ChakraShapes({ color = "#16329a" }) {
  return (
    <g>
      <circle r="104" fill="none" stroke={color} strokeWidth="9" />
      <circle r="88" fill="none" stroke={color} strokeWidth="3" />
      {SPOKES.map((a) => (
        <g key={a} transform={`rotate(${a})`}>
          <path d="M0 0 L-4.5 -84 L0 -97 L4.5 -84 Z" fill={color} />
        </g>
      ))}
      {SPOKES.map((a) => {
        const r = (a * Math.PI) / 180;
        return (
          <circle
            key={`d-${a}`}
            cx={Math.sin(r + 0.13) * 99}
            cy={-Math.cos(r + 0.13) * 99}
            r="3.4"
            fill={color}
          />
        );
      })}
      <circle r="13" fill={color} />
    </g>
  );
}

/** Stand-alone chakra (progress knob) */
function AshokaChakra({ className = "" }) {
  return (
    <svg viewBox="-120 -120 240 240" className={className} aria-hidden="true">
      <circle r="116" fill="#fff" />
      <ChakraShapes />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Waving flag (animated every frame)                                  */
/* ------------------------------------------------------------------ */

const FLAG_W = 1600;
const FLAG_H = 700;
const X_START = -140;
const X_END = FLAG_W + 140;
const STEP = 20;
const STRIPS = 64;
const BAND = 160; // thickness of each stripe

/** vertical position of boundary `i` (0..3) at x for time t */
function boundaryY(i, x, t) {
  const grow = 0.45 + 0.55 * (x / FLAG_W); // free end waves more
  const drape = 95 * Math.sin((x / FLAG_W) * Math.PI * 0.95 - 0.2);
  const w =
    40 * Math.sin(x * 0.0048 - t * 1.6 + i * 0.22) +
    21 * Math.sin(x * 0.0115 - t * 2.4 + 1.2 + i * 0.12) +
    9 * Math.sin(x * 0.021 - t * 3.3 + i * 0.3);
  return -70 + i * BAND + drape + w * grow;
}

/** derivative of the wave (for lighting / chakra tilt) */
function slopeAt(x, t) {
  const a = boundaryY(1, x - 4, t);
  const b = boundaryY(1, x + 4, t);
  return (b - a) / 8;
}

function buildBandPath(i, t) {
  let top = "";
  let bottom = "";

  for (let x = X_START; x <= X_END; x += STEP) {
    top += `${top ? "L" : "M"}${x} ${boundaryY(i, x, t).toFixed(1)} `;
  }
  for (let x = X_END; x >= X_START; x -= STEP) {
    bottom += `L${x} ${boundaryY(i + 1, x, t).toFixed(1)} `;
  }
  return `${top}${bottom}Z`;
}

function WavingFlag() {
  const saffronRef = useRef(null);
  const whiteRef = useRef(null);
  const greenRef = useRef(null);
  const clipRef = useRef(null);
  const chakraRef = useRef(null);
  const shadeRefs = useRef([]);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const stripWidth = (X_END - X_START) / STRIPS;

    const render = (t) => {
      saffronRef.current?.setAttribute("d", buildBandPath(0, t));
      whiteRef.current?.setAttribute("d", buildBandPath(1, t));
      greenRef.current?.setAttribute("d", buildBandPath(2, t));

      /* one outline path (top of band0 → bottom of band2) for clipping */
      let outline = "";
      for (let x = X_START; x <= X_END; x += STEP) {
        outline += `${outline ? "L" : "M"}${x} ${boundaryY(0, x, t).toFixed(1)} `;
      }
      for (let x = X_END; x >= X_START; x -= STEP) {
        outline += `L${x} ${boundaryY(3, x, t).toFixed(1)} `;
      }
      clipRef.current?.setAttribute("d", `${outline}Z`);

      /* fabric light and shadow */
      shadeRefs.current.forEach((rect, idx) => {
        if (!rect) return;
        const x = X_START + idx * stripWidth + stripWidth / 2;
        const s = slopeAt(x, t);
        const light = s < 0;
        const amount = Math.min(Math.abs(s) * 0.55, 0.42);
        rect.setAttribute("fill", light ? "#ffffff" : "#1b2a10");
        rect.setAttribute(
          "opacity",
          (light ? amount * 0.9 : amount * 0.75).toFixed(3)
        );
      });

      /* chakra follows the fabric in the middle of the white band */
      const cx = 790;
      const cy = (boundaryY(1, cx, t) + boundaryY(2, cx, t)) / 2;
      const angle = (Math.atan(slopeAt(cx, t)) * 180) / Math.PI;
      const squeeze = 1 - Math.min(Math.abs(slopeAt(cx, t)) * 0.12, 0.14);
      chakraRef.current?.setAttribute(
        "transform",
        `translate(${cx} ${cy.toFixed(1)}) rotate(${angle.toFixed(2)}) scale(${(
          0.88 * squeeze
        ).toFixed(3)} 0.88)`
      );
    };

    if (reduced) {
      render(0);
      return undefined;
    }

    const start = performance.now();
    const tick = () => render((performance.now() - start) / 1000);

    gsap.ticker.add(tick);
    tick();

    return () => gsap.ticker.remove(tick);
  }, []);

  return (
    <svg
      className="btcf-flag"
      viewBox={`0 0 ${FLAG_W} ${FLAG_H}`}
      preserveAspectRatio="xMidYMin slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="btcf-saffron" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff9a1f" />
          <stop offset="60%" stopColor="#ff7a00" />
          <stop offset="100%" stopColor="#ee5c00" />
        </linearGradient>
        <linearGradient id="btcf-white" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f1efe6" />
        </linearGradient>
        <linearGradient id="btcf-green" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#25a13c" />
          <stop offset="65%" stopColor="#0a7a2c" />
          <stop offset="100%" stopColor="#075d25" />
        </linearGradient>
        <clipPath id="btcf-flag-clip">
          <path ref={clipRef} d="M0 0" />
        </clipPath>
        <filter id="btcf-soft" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <g clipPath="url(#btcf-flag-clip)">
        <path ref={saffronRef} fill="url(#btcf-saffron)" d="M0 0" />
        <path ref={whiteRef} fill="url(#btcf-white)" d="M0 0" />
        <path ref={greenRef} fill="url(#btcf-green)" d="M0 0" />

        {/* moving highlights + folds */}
        <g filter="url(#btcf-soft)">
          {Array.from({ length: STRIPS }, (_, i) => (
            <rect
              key={i}
              ref={(el) => (shadeRefs.current[i] = el)}
              x={X_START + i * ((X_END - X_START) / STRIPS)}
              y="-300"
              width={(X_END - X_START) / STRIPS + 2}
              height="1400"
              opacity="0"
            />
          ))}
        </g>

        <g ref={chakraRef}>
          <ChakraShapes />
        </g>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Scenery                                                             */
/* ------------------------------------------------------------------ */

function Bird({ color, className }) {
  return (
    <svg
      viewBox="0 0 80 50"
      className={`btcf-bird ${className}`}
      aria-hidden="true"
    >
      <g className="btcf-wings" fill={color}>
        <path d="M40 28 C30 8 12 6 2 12 C16 14 26 22 36 34Z" />
        <path d="M40 28 C50 8 68 6 78 12 C64 14 54 22 44 34Z" />
      </g>
      <ellipse cx="40" cy="32" rx="8" ry="6" fill={color} />
      <path d="M44 36 L62 46 L46 40Z" fill={color} />
    </svg>
  );
}

function Skyline() {
  return (
    <svg
      className="btcf-skyline"
      viewBox="0 0 1600 260"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      {/* far haze */}
      <g fill="#e7e2cf" opacity=".7">
        <path d="M520 220 V190 H530 V220Z M515 190 L525 172 L535 190Z" />
        <path d="M1100 220 V186 H1112 V220Z M1094 186 L1106 166 L1118 186Z" />
        <path d="M640 220 Q690 170 740 220Z M900 220 Q950 175 1000 220Z" />
      </g>

      {/* Taj Mahal-inspired */}
      <g fill="#e4dcc5">
        <rect x="110" y="120" width="12" height="100" />
        <path d="M107 120 H125 L116 104Z" />
        <rect x="300" y="120" width="12" height="100" />
        <path d="M297 120 H315 L306 104Z" />
        <path d="M130 220 V160 H290 V220Z" />
        <path d="M165 160 Q210 70 255 160Z" fill="#f3eddc" />
        <rect x="208" y="62" width="4" height="18" />
        <path d="M150 160 Q170 130 190 160Z M230 160 Q250 130 270 160Z" />
        <path d="M185 220 V185 Q210 150 235 185 V220Z" fill="#cfc3a2" />
        <path d="M390 220 V175 Q420 135 450 175 V220Z" opacity=".8" />
      </g>

      {/* India Gate-inspired */}
      <g fill="#e1c699">
        <path d="M1250 220 V130 H1370 V220Z" />
        <path d="M1240 130 H1380 V142 H1240Z" />
        <path d="M1286 220 V165 Q1310 125 1334 165 V220Z" fill="#fff0cf" />
        <path d="M1270 118 H1350 V130 H1270Z" />
      </g>

      {/* trees */}
      <g fill="#4f7a3a">
        <ellipse cx="40" cy="170" rx="70" ry="68" />
        <ellipse cx="90" cy="215" rx="60" ry="30" fill="#5f8a45" />
        <ellipse cx="1540" cy="190" rx="75" ry="58" />
        <ellipse cx="1470" cy="215" rx="60" ry="26" fill="#5f8a45" />
        <ellipse cx="480" cy="212" rx="55" ry="22" fill="#6a9650" />
        <ellipse cx="560" cy="216" rx="50" ry="18" fill="#6a9650" />
        <ellipse cx="1130" cy="212" rx="55" ry="22" fill="#6a9650" />
        <ellipse cx="1190" cy="217" rx="48" ry="18" fill="#6a9650" />
      </g>
    </svg>
  );
}

const LEAVES = [
  { left: "5%", delay: "0s", dur: "11s", color: "#ff9b32", size: 20 },
  { left: "14%", delay: "-4s", dur: "13s", color: "#5ea83a", size: 24 },
  { left: "27%", delay: "-8s", dur: "12s", color: "#ff9b32", size: 16 },
  { left: "41%", delay: "-2s", dur: "14s", color: "#5ea83a", size: 18 },
  { left: "63%", delay: "-6s", dur: "12.5s", color: "#5ea83a", size: 22 },
  { left: "78%", delay: "-9s", dur: "13.5s", color: "#ff9b32", size: 17 },
  { left: "90%", delay: "-3s", dur: "11.5s", color: "#5ea83a", size: 24 },
];

/* ------------------------------------------------------------------ */
/* Preloader                                                           */
/* ------------------------------------------------------------------ */

export default function Preloader({ onRevealStart, onComplete }) {
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
    let oldScrollRestoration;

    const preventScroll = (event) => event.preventDefault();
    const preventScrollKeys = (event) => {
      if (
        [" ", "PageUp", "PageDown", "Home", "End", "ArrowUp", "ArrowDown"].includes(
          event.key
        )
      ) {
        event.preventDefault();
      }
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

    const completePreloader = () => {
      if (cancelled || completionSignalled) return;
      completionSignalled = true;

      document.documentElement.dataset.preloaderComplete = "true";
      window.dispatchEvent(new Event("site:preloader-complete"));

      onRevealStartRef.current?.();
      onCompleteRef.current?.();
    };

    const startLoading = async () => {
      if ("scrollRestoration" in window.history) {
        oldScrollRestoration = window.history.scrollRestoration;
        window.history.scrollRestoration = "manual";
      }

      window.scrollTo(0, 0);
      setProgress(8);

      await waitForDocumentReady();
      if (cancelled) return;

      setProgress(25);

      const importantImages = Array.from(document.images).filter((image) => {
        const rect = image.getBoundingClientRect();
        return (
          rect.bottom >= -window.innerHeight * 0.5 &&
          rect.top <= window.innerHeight * 1.5
        );
      });

      const tasks = [
        ...importantImages.map(waitForImage),
        ...(document.fonts?.ready
          ? [Promise.resolve(document.fonts.ready).catch(() => undefined)]
          : []),
      ];

      let completedTasks = 0;
      const totalTasks = tasks.length;

      setProgress(45);

      const resourceTask = Promise.all(
        tasks.map((task) =>
          task.then(() => {
            completedTasks += 1;
            if (cancelled || !progressUpdatesEnabled) return;

            const resourceProgress =
              totalTasks > 0
                ? Math.round((50 * completedTasks) / totalTasks)
                : 50;

            setProgress(Math.min(95, 45 + resourceProgress));
          })
        )
      );

      await Promise.race([resourceTask, wait(2500)]);
      if (cancelled) return;

      progressUpdatesEnabled = false;
      setProgress(100);

      await wait(350);
      if (cancelled) return;

      const overlay = overlayRef.current;
      const brand = brandRef.current;
      const siteContent = document.querySelector("[data-site-content]");

      if (!overlay) {
        if (siteContent)
          gsap.set(siteContent, { clearProps: "opacity,visibility" });
        completePreloader();
        return;
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        if (siteContent)
          gsap.set(siteContent, { clearProps: "opacity,visibility" });
        gsap.set(overlay, { clearProps: "all" });
        completePreloader();
        return;
      }

      lockScroll();

      const timeline = gsap.timeline({
        onComplete: () => {
          unlockScroll();
          ScrollTrigger.refresh();
          completePreloader();
        },
      });

      timelineRef.current = timeline;

      if (brand) {
        timeline.to(
          brand,
          { autoAlpha: 0, y: -18, duration: 0.3, ease: "power2.in" },
          0
        );
      }

      if (siteContent) {
        timeline.set(siteContent, { autoAlpha: 0 }, 0);
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

      timeline.to(
        overlay,
        { yPercent: -100, duration: 0.9, ease: "power4.inOut" },
        0.1
      );
    };

    startLoading().catch((error) => {
      console.error("Preloader failed:", error);

      if (!cancelled) {
        const siteContent = document.querySelector("[data-site-content]");
        if (siteContent)
          gsap.set(siteContent, { clearProps: "opacity,visibility" });
        completePreloader();
      }
    });

    return () => {
      cancelled = true;
      progressUpdatesEnabled = false;

      timelineRef.current?.kill();
      timelineRef.current = null;

      unlockScroll();

      if (
        oldScrollRestoration !== undefined &&
        "scrollRestoration" in window.history
      ) {
        window.history.scrollRestoration = oldScrollRestoration;
      }
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      role="status"
      aria-label={`Loading Be The Change Foundation: ${progress}%`}
      className="btcf-preloader fixed inset-0 z-[999999] flex items-center justify-center overflow-hidden px-4 text-center sm:px-8"
    >
      {/* ---------- scenery ---------- */}
      <div className="btcf-sky" aria-hidden="true" />
      <div className="btcf-sun" aria-hidden="true" />
      <div className="btcf-cloud cloud-a" aria-hidden="true" />
      <div className="btcf-cloud cloud-b" aria-hidden="true" />
      <div className="btcf-cloud cloud-c" aria-hidden="true" />

      <Skyline />
      <div className="btcf-water" aria-hidden="true" />
      <div className="btcf-mist" aria-hidden="true" />

      {/* ---------- the waving flag ---------- */}
      <WavingFlag />

      {/* birds */}
      <Bird color="#f58220" className="bird-one" />
      <Bird color="#d9dcd9" className="bird-two" />
      <Bird color="#1c9a35" className="bird-three" />

      {/* leaves */}
      {LEAVES.map((leaf, i) => (
        <span
          key={i}
          className="btcf-leaf"
          aria-hidden="true"
          style={{
            left: leaf.left,
            width: leaf.size,
            height: leaf.size * 1.5,
            background: leaf.color,
            animationDelay: leaf.delay,
            animationDuration: leaf.dur,
          }}
        />
      ))}

      {/* ---------- content ---------- */}
      <div
        ref={brandRef}
        className="btcf-loader-content relative z-10 flex w-full max-w-5xl flex-col items-center"
      >
        {/* soft readability backdrop */}
        <div className="btcf-text-backdrop" aria-hidden="true" />

        <div className="btcf-brand-block">
          <h1 className="btcf-title text-4xl font-black tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
            Be The Change
          </h1>

          <div className="mt-1 flex items-center justify-center gap-3 sm:gap-5">
            <span className="h-px w-8 bg-[#4a4f4a] sm:w-14" />
            <p className="text-xs font-semibold tracking-[0.32em] text-[#2f3430] sm:text-base sm:tracking-[0.45em]">
              FOUNDATION
            </p>
            <span className="h-px w-8 bg-[#4a4f4a] sm:w-14" />
          </div>
        </div>

        <p className="mt-5 max-w-3xl text-base italic leading-relaxed text-[#1f262b] sm:mt-6 sm:text-xl md:text-2xl">
          “Be the change you wish to see in the world.”
        </p>

        <div className="mt-8 w-full max-w-[min(82vw,620px)] sm:mt-10">
          <div
            className="btcf-progress-track relative h-3 overflow-visible rounded-full sm:h-3.5"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
            aria-label="Website loading progress"
          >
            <div
              className="btcf-progress-fill h-full rounded-full"
              style={{ width: `${progress}%` }}
            />

            <div
              className="btcf-progress-knob absolute top-1/2 flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-white bg-white shadow-[0_3px_18px_rgba(22,139,43,0.28)] sm:h-11 sm:w-11"
              style={{ left: `${progress}%` }}
            >
              <AshokaChakra className="h-full w-full" />
            </div>
          </div>

          <p className="mt-5 text-3xl font-extrabold tabular-nums text-[#08752d] sm:mt-6 sm:text-4xl">
            {progress}%
          </p>

          <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#3f473f] sm:text-xs sm:tracking-[0.4em]">
            Loading a brighter tomorrow...
          </p>
        </div>
      </div>

      <style>{`
        .btcf-preloader {
          isolation: isolate;
          color: #123d2b;
          background: #fffaf0;
        }

        /* ---------- sky ---------- */
        .btcf-sky {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            #bcdcf3 0%,
            #dcecf5 22%,
            #fff1cf 52%,
            #fff8e8 78%,
            #fffdf6 100%
          );
        }

        .btcf-sun {
          position: absolute;
          top: 6%;
          right: 14%;
          width: 38vmax;
          height: 38vmax;
          transform: translate(30%, -20%);
          background: radial-gradient(
            circle,
            rgba(255,255,255,.95) 0%,
            rgba(255,236,170,.65) 25%,
            rgba(255,220,140,.25) 50%,
            transparent 70%
          );
          animation: btcf-sun-pulse 6s ease-in-out infinite;
        }

        .btcf-cloud {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,.85);
          filter: blur(22px);
          animation: btcf-cloud-drift 38s linear infinite alternate;
        }
        .cloud-a { top: 6%;  right: 4%;  width: 34vw; height: 11vh; }
        .cloud-b { top: 38%; left: -4%;  width: 30vw; height: 12vh; animation-duration: 46s; opacity: .8; }
        .cloud-c { top: 30%; right: 8%;  width: 26vw; height: 10vh; animation-duration: 52s; opacity: .7; }

        /* ---------- flag ---------- */
        .btcf-flag {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 58%;
          overflow: visible;
          filter: drop-shadow(0 18px 18px rgba(30, 70, 35, .12));
          pointer-events: none;
        }

        /* ---------- ground ---------- */
        .btcf-skyline {
          position: absolute;
          z-index: 1;
          left: 0;
          bottom: 8vh;
          width: 100%;
          height: clamp(110px, 27vh, 260px);
          pointer-events: none;
        }

        .btcf-water {
          position: absolute;
          z-index: 1;
          left: 0;
          right: 0;
          bottom: 0;
          height: 10vh;
          background:
            repeating-linear-gradient(
              180deg,
              rgba(255,255,255,.35) 0 2px,
              transparent 2px 9px
            ),
            linear-gradient(180deg, #f3e6c2 0%, #f6d79a 55%, #f1c97f 100%);
          animation: btcf-water-shimmer 4s ease-in-out infinite alternate;
        }

        .btcf-mist {
          position: absolute;
          z-index: 1;
          left: 0;
          right: 0;
          bottom: 6vh;
          height: 9vh;
          background: linear-gradient(0deg, rgba(255,255,255,.75), transparent);
          filter: blur(6px);
        }

        /* ---------- birds ---------- */
        .btcf-bird {
          position: absolute;
          z-index: 2;
          width: clamp(34px, 4.2vw, 60px);
          animation: btcf-bird-fly 7s ease-in-out infinite;
        }
        .bird-one   { top: 9%;  right: 21%; }
        .bird-two   { top: 7%;  right: 12%; animation-delay: -2s; }
        .bird-three { top: 18%; right: 6%;  animation-delay: -4s; }

        .btcf-wings {
          transform-box: fill-box;
          transform-origin: center bottom;
          animation: btcf-flap .55s ease-in-out infinite alternate;
        }

        /* ---------- leaves ---------- */
        .btcf-leaf {
          position: absolute;
          z-index: 2;
          top: -6%;
          border-radius: 100% 0 100% 0;
          opacity: .75;
          pointer-events: none;
          animation-name: btcf-leaf-fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        /* ---------- content ---------- */
        .btcf-loader-content {
          transform: translateY(8vh);
          padding-bottom: 5vh;
        }

        /* soft light panel behind the text */
        .btcf-text-backdrop {
          position: absolute;
          z-index: -1;
          left: 50%;
          top: 50%;
          width: min(96vw, 860px);
          height: 130%;
          transform: translate(-50%, -48%);
          background: radial-gradient(
            ellipse at center,
            rgba(255, 253, 245, 0.96) 0%,
            rgba(255, 253, 245, 0.88) 45%,
            rgba(255, 253, 245, 0.55) 68%,
            rgba(255, 253, 245, 0) 100%
          );
          filter: blur(6px);
          pointer-events: none;
        }

        .btcf-brand-block {
          animation: btcf-brand-appear 900ms cubic-bezier(.2,.75,.25,1) both;
        }

        /* stronger title */
        .btcf-title {
          color: #066b28;
          text-shadow:
            0 0 2px rgba(255, 255, 255, 0.95),
            0 0 14px rgba(255, 255, 255, 0.9),
            0 2px 4px rgba(0, 0, 0, 0.08);
        }

        /* quote + FOUNDATION + caption get a light halo */
        .btcf-loader-content p {
          text-shadow:
            0 0 8px rgba(255, 255, 255, 0.95),
            0 0 18px rgba(255, 255, 255, 0.85);
        }

        .btcf-progress-track {
          background: rgba(215, 225, 205, .85);
        }

        .btcf-progress-fill {
          background: linear-gradient(
            90deg,
            #ff6b0a 0%,
            #ffad31 32%,
            #b1bb42 58%,
            #168b2b 100%
          );
          box-shadow: 0 0 14px rgba(22,139,43,.2);
          transition: width 350ms ease-out;
        }

        .btcf-progress-knob {
          transition: left 350ms ease-out;
          transform: translate(-50%, -50%);
        }

        /* ---------- keyframes ---------- */
        @keyframes btcf-sun-pulse {
          0%, 100% { opacity: .9; transform: translate(30%, -20%) scale(1); }
          50%      { opacity: 1;  transform: translate(30%, -20%) scale(1.08); }
        }
        @keyframes btcf-cloud-drift {
          from { transform: translateX(-3vw); }
          to   { transform: translateX(4vw); }
        }
        @keyframes btcf-water-shimmer {
          from { background-position: 0 0, 0 0; opacity: .95; }
          to   { background-position: 0 6px, 0 0; opacity: 1; }
        }
        @keyframes btcf-bird-fly {
          0%, 100% { transform: translate(0, 0) rotate(-3deg); }
          50%      { transform: translate(-18px, -12px) rotate(3deg); }
        }
        @keyframes btcf-flap {
          from { transform: scaleY(1); }
          to   { transform: scaleY(.45); }
        }
        @keyframes btcf-leaf-fall {
          0%   { transform: translate(0, 0) rotate(0deg); }
          25%  { transform: translate(36px, 28vh) rotate(110deg); }
          50%  { transform: translate(-24px, 56vh) rotate(220deg); }
          75%  { transform: translate(30px, 84vh) rotate(320deg); }
          100% { transform: translate(-10px, 112vh) rotate(420deg); }
        }
        @keyframes btcf-brand-appear {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ---------- responsive ---------- */
        @media (max-height: 720px) {
          .btcf-loader-content {
            transform: translateY(9vh) scale(.88);
            padding-bottom: 2vh;
          }
        }

        @media (max-width: 640px) {
          .btcf-flag { height: 46%; }
          .btcf-loader-content { transform: translateY(6vh); }
          .btcf-skyline { opacity: .6; }
          .bird-three { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .btcf-sun,
          .btcf-cloud,
          .btcf-water,
          .btcf-bird,
          .btcf-wings,
          .btcf-leaf,
          .btcf-brand-block {
            animation: none !important;
          }
          .btcf-progress-fill,
          .btcf-progress-knob {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}