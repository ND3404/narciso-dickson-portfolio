"use client";

import { useEffect, useRef, useState } from "react";

const SHOW_AFTER = 600;

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = sentinel.current;
    if (!node) return;

    // IntersectionObserver rather than a scroll listener: `html` carries
    // `overflow-x: clip`, which makes it a scroll container, and observing a
    // sentinel is independent of which element actually scrolls. It also avoids
    // running a handler on every scroll frame.
    if (typeof IntersectionObserver !== "undefined") {
      const io = new IntersectionObserver(
        ([entry]) => setVisible(!entry.isIntersecting),
        { rootMargin: "0px" },
      );
      io.observe(node);
      return () => io.disconnect();
    }

    const offset = () =>
      window.scrollY || document.documentElement.scrollTop || 0;
    const onScroll = () => setVisible(offset() > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toTop() {
    // Honour the OS setting rather than forcing an animated scroll.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduced ? "auto" : "smooth";
    window.scrollTo({ top: 0, behavior });
    // `html` is the scroll container here, so target it as well.
    document.documentElement.scrollTo?.({ top: 0, behavior });
    document.getElementById("main")?.focus?.();
  }

  return (
    <>
      {/* Marks SHOW_AFTER px down the document; absolutely positioned against
          the initial containing block, so it tracks document coordinates. */}
      <div ref={sentinel} className="btt-sentinel" aria-hidden="true" />
      <button
        type="button"
        className={`back-to-top${visible ? " is-visible" : ""}`}
        onClick={toTop}
        aria-label="Back to top"
        tabIndex={visible ? 0 : -1}
        aria-hidden={!visible}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
          <path
            d="M12 19V5M12 5l-6 6M12 5l6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
}
