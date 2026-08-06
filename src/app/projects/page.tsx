import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/config/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Three complete public construction analytics case studies: project controls early warning, RFI and change-order workflow diagnostics, and predictive cost-overrun and schedule-delay modeling.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Analytics portfolio"
        title="Three complete case studies, from project controls to predictive intelligence."
      >
        <p>
          Each project ran the full Ask, Prepare, Process, Analyze, Share and Act
          lifecycle and publishes its data, SQL, Python, dashboards and report on GitHub.
          Every dataset is synthetic and disclosed as such on each case study.
        </p>
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="progression">
            {projects.map((project) => (
              <div className="progression-step" key={project.slug}>
                <span className="progression-index">0{project.order}</span>
                <div>
                  <p className="eyebrow">{project.stage}</p>
                  <h2>{project.title}</h2>
                  <p>{project.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
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
