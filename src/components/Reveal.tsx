"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Fades and lifts its children into view once, when they first scroll into
 * frame.
 *
 * The hidden class is added from JavaScript rather than in the stylesheet, so a
 * visitor with JS disabled sees the content normally instead of a blank page.
 * A timeout also reveals everything if IntersectionObserver never fires, which
 * happens when a page is rendered in a tab that is never composited.
 *
 * Classes are toggled on the node directly: the animation is a visual effect
 * with no bearing on React's tree, and driving it through state would re-render
 * every card on every step.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.classList.add("reveal-hidden");

    const show = () => {
      el.classList.remove("reveal-hidden");
      el.classList.add("reveal-shown");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          show();
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.06 },
    );
    observer.observe(el);

    // Safety net: never leave content hidden because the observer stayed quiet.
    const fallback = window.setTimeout(show, 1400);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
