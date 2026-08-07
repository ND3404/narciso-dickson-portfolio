export function PageHero({
  eyebrow,
  title,
  children,
  variant,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  /** "compact" trims the band and the heading for document-style pages. */
  variant?: "compact";
}) {
  return (
    <section className={`page-hero${variant === "compact" ? " page-hero-compact" : ""}`}>
      <div className="container narrow">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="lead-text">{children}</div>
      </div>
    </section>
  );
}
