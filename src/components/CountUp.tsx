"use client";

import { useEffect, useRef } from "react";

/**
 * Counts a figure up from zero the first time it scrolls into view.
 *
 * The final value is what renders on the server, so it is correct without
 * JavaScript and correct for assistive technology; the ticking is applied to
 * the DOM node afterwards. Writing textContent directly rather than holding the
 * number in state avoids re-rendering the tree sixty times a second.
 */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1100,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const render = (n: number) => {
      el.textContent = `${prefix}${n}${suffix}`;
    };

    let done = false;
    render(0);

    const run = () => {
      if (done) return;
      done = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        // easeOutCubic: quick start, settled landing — reads as decisive.
        render(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);

    // If the observer never fires, show the real number rather than a zero.
    const fallback = window.setTimeout(() => {
      if (!done) {
        done = true;
        render(to);
      }
    }, 1400);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [to, prefix, suffix, duration]);

  return (
    <>
      <span ref={ref} aria-hidden="true">
        {prefix}
        {to}
        {suffix}
      </span>
      <span className="sr-only">{`${prefix}${to}${suffix}`}</span>
    </>
  );
}
