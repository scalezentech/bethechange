import { cloneElement, Fragment, isValidElement, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function animateContent(node, path = "text") {
  if (node == null || typeof node === "boolean") {
    return node;
  }

  if (typeof node === "string" || typeof node === "number") {
    const tokens = String(node).split(/(\s+)/u);

    return tokens.map((token, tokenIndex) => {
      if (token === "") return null;

      const key = `${path}-${tokenIndex}`;

      if (/^\s+$/u.test(token)) {
        return (
          <span key={key} className="whitespace-pre-wrap">
            {token}
          </span>
        );
      }

      return (
        <span key={key} className="inline-block whitespace-nowrap">
          {Array.from(token).map((character, characterIndex) => (
            <span
              key={`${key}-${characterIndex}`}
              data-typing-character
              className="inline-block"
            >
              {character}
            </span>
          ))}
        </span>
      );
    });
  }

  if (Array.isArray(node)) {
    return node.map((child, index) =>
      animateContent(child, `${path}-${index}`)
    );
  }

  if (isValidElement(node)) {
    if (node.type === "br") {
      return cloneElement(node, { key: node.key ?? path });
    }

    const key = node.key ?? path;
    const children = node.props.children;

    if (children === undefined) {
      return cloneElement(node, { key });
    }

    const animatedChildren = animateContent(
      children,
      `${path}-child`
    );

    if (node.type === Fragment) {
      return (
        <Fragment key={key}>
          {animatedChildren}
        </Fragment>
      );
    }

    return cloneElement(node, { key }, animatedChildren);
  }

  return node;
}

export default function TypingHeading({
  text,
  children,
  as: Tag = "h1",
  className = "",
  speed = 0.035,
  delay = 0.1,
  triggerOnView = false,
  ariaLabel,
  ...props
}) {
  const headingRef = useRef(null);

  const content = children !== undefined ? children : text ?? "";

  const accessibleText =
    ariaLabel ??
    (typeof content === "string" || typeof content === "number"
      ? String(content)
      : undefined);

  useGSAP(
    () => {
      const heading = headingRef.current;
      if (!heading) return;

      const characters = heading.querySelectorAll(
        "[data-typing-character]"
      );

      if (!characters.length) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(characters, {
          autoAlpha: 1,
          y: 0,
          clearProps: "opacity,visibility,transform",
        });

        return;
      }

      gsap.fromTo(
        characters,
        {
          y: 20,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.45,
          stagger: speed,
          delay,
          ease: "power3.out",
          clearProps: "opacity,visibility,transform",
          ...(triggerOnView
            ? {
                scrollTrigger: {
                  trigger: heading,
                  start: "top 85%",
                  once: true,
                },
              }
            : {}),
        }
      );
    },
    {
      scope: headingRef,
      dependencies: [content, speed, delay, triggerOnView],
      revertOnUpdate: true,
    }
  );

  return (
    <Tag
      ref={headingRef}
      className={className}
      aria-label={accessibleText}
      {...props}
    >
      {animateContent(content)}
    </Tag>
  );
}