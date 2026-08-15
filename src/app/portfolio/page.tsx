import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/config/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Construction analytics case studies by Narciso M. Dickson: project-controls early warning, RFI and change-order workflow diagnostics, and predictive cost-overrun and schedule-delay modeling.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Construction analytics, end to end.">
        <p>
          Each case study starts with a question a project manager actually asks, works
          through the data, and ends with what to do about it. Data, SQL, Python,
          dashboards and the full report are public on GitHub.
        </p>
      </PageHero>

      <section className="section">
        <div className="container">
          {/* Stage labels, not numbers: the sequence is a method, and the list grows. */}
          <ol className="stage-rail">
            {projects.map((project) => (
              <li key={project.slug}>
                <span className="stage-dot" aria-hidden="true" />
                <a href={project.detailHref}>
                  <strong>{project.stage}</strong>
                  <span>{project.title}</span>
                </a>
              </li>
            ))}
          </ol>

          <div className="project-grid">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 90}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          {/* Applies to the case studies marked Synthetic data, not to the
              portfolio as a whole — later work may use real project data. */}
          {projects.some((p) => p.dataType === "synthetic") ? (
            <p className="portfolio-note">
              <strong>On the data.</strong> Case studies marked{" "}
              <span className="mini-label">Synthetic data</span> use datasets generated
              for portfolio demonstration. They show method and decision support, and do
              not represent actual client performance or industry benchmarks. Each case
              study states this on its own page.
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
