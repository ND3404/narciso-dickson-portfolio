import Image from "next/image";
import { ActionLink } from "@/components/Actions";
import { CommandCenter } from "@/components/CommandCenter";
import { ProjectCard } from "@/components/ProjectCard";
import {
  projects,
  profile,
  portfolioMetrics,
  trustMarkers,
  audiencePaths,
  techStack,
} from "@/config/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Construction Project Leadership, Powered by Data and AI",
  description:
    "Narciso M. Dickson, MS, PMP®: 15+ years of construction project and program leadership combined with project controls, data analytics, business intelligence, and responsible AI governance.",
  path: "/",
});

const valueCards = [
  ["Project and Program Leadership", "Initiation, planning, execution, monitoring, control, closeout, stakeholder coordination, executive reporting, and delivery discipline."],
  ["Construction Project Controls", "Scope, cost, schedule, procurement, risk, change management, Earned Value Management, contingency, RFIs, and change orders."],
  ["Data Analytics and Business Intelligence", "Excel, SQL, Python, Power BI, Tableau, data validation, relational modeling, dashboards, and diagnostic analysis."],
  ["AI Leadership and Governance", "AI use-case definition, workflow automation, model cards, human review, drift monitoring, and responsible governance."],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              Construction leadership · Analytics · Responsible AI
            </p>
            <h1>
              Turning Complex Construction Data Into Clearer Decisions and More
              Predictable Outcomes
            </h1>
            <p>
              I combine {profile.experienceYears} years of construction project and
              program leadership with project controls, data analytics, business
              intelligence, and responsible AI governance to help organizations
              understand performance, prioritize risk, and act with greater
              confidence.
            </p>
            <div className="hero-actions">
              <ActionLink href="/projects" variant="primary">
                View Case Studies
              </ActionLink>
              <ActionLink href={profile.resumeUrl} variant="secondary" external>
                Download Résumé ({profile.resumeFormat})
              </ActionLink>
              <ActionLink href={profile.linkedinUrl} variant="ghost" external>
                Connect on LinkedIn
              </ActionLink>
            </div>
            <p className="hero-sublink">
              <a href={profile.inProjectUrl} target="_blank" rel="noopener noreferrer">
                Visit In Project →
              </a>
            </p>
            <div className="proof-strip" aria-label="Professional qualifications">
              {trustMarkers.map((marker) => (
                <span key={marker}>{marker}</span>
              ))}
            </div>
          </div>
          <CommandCenter />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Portfolio at a glance</p>
            <h2>Three complete case studies, every number traceable to its source data.</h2>
            <p>
              Each project runs the full Ask, Prepare, Process, Analyze, Share and Act
              lifecycle and publishes its data, SQL, Python, dashboards and report on
              GitHub. All datasets are synthetic and disclosed as such.
            </p>
          </div>
          <div className="metric-band">
            {portfolioMetrics.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Find your path</p>
            <h2>Whatever brought you here, the relevant evidence is one click away.</h2>
          </div>
          <div className="card-grid card-grid-3">
            {audiencePaths.map((path) => (
              <article className="value-card" key={path.title}>
                <p className="eyebrow">{path.eyebrow}</p>
                <h3>{path.title}</h3>
                <p>{path.body}</p>
                <ActionLink href={path.href} variant="ghost">
                  {path.cta}
                </ActionLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
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

      <section className="section section-white">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">From project controls to predictive intelligence</p>
            <h2>Three case studies that build on each other.</h2>
            <p>
              Each project answers a question the previous one raised: first what the
              numbers say, then why the workflow produces them, then whether the
              outcome can be seen coming early enough to act.
            </p>
          </div>
          <div className="progression">
            {projects.map((project) => (
              <div className="progression-step" key={project.slug}>
                <span className="progression-index">0{project.order}</span>
                <div>
                  <p className="eyebrow">{project.stage}</p>
                  <h3>{project.title}</h3>
                  <p>{project.problem}</p>
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

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Tools and methods</p>
            <h2>The stack behind the case studies.</h2>
          </div>
          <div className="stack-grid">
            {techStack.map((group) => (
              <article className="stack-card value-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="chip-grid">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
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
              and analytics.
            </p>
            <p>
              In Project AI turns project documents into risks, forecasts, dashboards,
              and owner-ready reports. AI-assisted outputs require qualified professional
              review before contractual, legal, engineering, financial, safety, or
              project decisions.
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
            <Image
              src="/brand/in-project-ai-logo-inverted.png"
              alt="In Project AI"
              width={2048}
              height={512}
              className="ecosystem-logo"
              sizes="(max-width: 900px) 60vw, 260px"
            />
            <p>
              This personal portfolio is Narciso&apos;s professional site. It is not the
              official In Project company website or the In Project AI application.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
