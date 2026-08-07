"use client";

import { useEffect, useState } from "react";

const SHOW_AFTER = 600;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const offset = () =>
      window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const onScroll = () => setVisible(offset() > SHOW_AFTER);
    onScroll();
    // `html` carries overflow-x: clip, which makes it a scroll container. Scroll
    // events then fire on that element and never reach a bubble-phase window
    // listener, even though window.scrollY still updates. Capture catches them
    // wherever they originate.
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    return () =>
      window.removeEventListener("scroll", onScroll, { capture: true } as EventListenerOptions);
  }, []);

  function toTop() {
    // Honour the OS setting rather than forcing an animated scroll.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    document.getElementById("main")?.focus?.();
  }

  return (
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
  );
}
