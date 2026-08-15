import type { ReactNode } from "react";
import { focusAreas } from "@/config/profile";

export function PageHero({
  eyebrow,
  title,
  children,
  variant,
  aside,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  /** "compact" trims the band and the heading for document-style pages. */
  variant?: "compact";
  /** Optional visual placed beside the copy; turns the band into two columns. */
  aside?: ReactNode;
}) {
  const classes = [
    "page-hero",
    variant === "compact" ? "page-hero-compact" : "",
    aside ? "page-hero-split" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes}>
      <div className={`container${aside ? "" : " narrow"} page-hero-inner`}>
        <div className="page-hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-rule" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1>{title}</h1>
          {children ? <div className="lead-text">{children}</div> : null}
          {/* Same four areas on every hero, from one source. */}
          <ul className="focus-areas">
            {focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
        {aside ? <div className="page-hero-aside">{aside}</div> : null}
      </div>
    </section>
  );
}
