import { ActionLink } from "@/components/Actions";
import { CommandCenter } from "@/components/CommandCenter";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, profile } from "@/config/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Construction Project Leadership, Powered by Data and AI",
  description:
    "Narciso M. Dickson combines construction project management, project controls analytics, business intelligence, and responsible AI leadership.",
  path: "/",
});

const valueCards = [
  ["Project and Program Leadership", "Initiation, planning, execution, monitoring, control, closeout, stakeholder coordination, executive reporting, and delivery discipline."],
  ["Construction Project Controls", "Scope, cost, schedule, procurement, risk, change management, Earned Value Management, contingency, RFIs, and change orders."],
  ["Data Analytics and Business Intelligence", "Excel, SQL, Python, Power BI, Tableau, data validation, relational modeling, dashboards, and diagnostic analysis."],
  ["AI Leadership and Automation", "AI use-case definition, workflow automation, responsible governance, human review, and business-aligned decision support."],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Project leadership | Analytics | AI</p>
            <h1>Construction Project Leadership, Powered by Data and AI</h1>
            <p>
              I combine more than a decade of project-management experience with
              construction project controls, data analytics, business intelligence, and
              responsible AI leadership to turn complex project information into clearer
              decisions and more predictable outcomes.
            </p>
            <div className="hero-actions">
              <ActionLink href="/projects/construction-project-controls-analytics" variant="primary">
                View Featured Case Study
              </ActionLink>
              <ActionLink href="/projects" variant="secondary">
                Explore All Projects
              </ActionLink>
              <ActionLink href={profile.linkedinUrl} variant="ghost" external>
                Connect on LinkedIn
              </ActionLink>
            </div>
            <div className="proof-strip" aria-label="Professional profile highlights">
              <span>10+ years experience</span>
              <span>PMP certified</span>
              <span>Master&apos;s in project management</span>
              <span>Founder, In Project LLC</span>
            </div>
          </div>
          <CommandCenter />
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Professional value</p>
            <h2>Project delivery judgment with an analytics operating system.</h2>
          </div>
          <div className="card-grid">
            {valueCards.map(([title, body]) => (
              <article className="value-card" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Featured analytics portfolio</p>
            <h2>Construction analytics case studies with transparent status labels.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container ecosystem-grid">
          <div>
            <p className="eyebrow">In Project ecosystem</p>
            <h2>Founder perspective, kept distinct from the official product sites.</h2>
            <p>
              Narciso is the founder of In Project LLC. In Project supports construction
              teams through project-controls consulting, dashboards, reporting workflows,
              and In Project AI.
            </p>
            <p>
              In Project AI turns project documents into risks, forecasts, dashboards,
              and owner-ready reports. AI-assisted outputs require qualified professional
              review before contractual, legal, engineering, financial, safety, or project
              decisions.
            </p>
            <div className="section-actions">
              <ActionLink href={profile.inProjectUrl} variant="primary" external>
                Visit In Project
              </ActionLink>
              <ActionLink href={profile.inProjectAiUrl} variant="secondary" external>
                Explore In Project AI
              </ActionLink>
            </div>
          </div>
          <div className="ecosystem-panel">
            <h3>Project IQ orientation</h3>
            <p>
              The personal portfolio borrows the command-center language of In Project AI
              while focusing on Narciso&apos;s professional capabilities: project governance,
              controls analysis, BI dashboards, and responsible AI-assisted workflows.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
