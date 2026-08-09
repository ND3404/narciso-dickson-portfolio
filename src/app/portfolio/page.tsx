import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/config/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Construction analytics case studies: project-controls early warning, RFI and change-order workflow diagnostics, and predictive cost-overrun and schedule-delay modeling. Every dataset is synthetic.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Construction analytics, end to end.">
        <p>
          Each case study starts with a question a project manager actually asks, works
          through the data, and ends with what to do about it. Data, SQL, Python,
          dashboards and the full report are public on GitHub. Every dataset is synthetic.
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
            {projects.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
