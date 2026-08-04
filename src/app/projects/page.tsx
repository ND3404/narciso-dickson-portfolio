import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/config/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Portfolio projects covering construction project controls analytics, RFI and change-order analytics, and planned predictive project-overrun modeling.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Analytics portfolio" title="Case studies for construction data analytics and project controls.">
        <p>
          Each project card shows status, business problem, methodology, deliverables,
          links, and synthetic-data disclosure. In-development and planned work is
          intentionally labeled so the portfolio does not overstate current results.
        </p>
      </PageHero>
      <section className="section">
        <div className="container project-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
