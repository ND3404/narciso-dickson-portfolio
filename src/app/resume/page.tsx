import { ActionLink } from "@/components/Actions";
import { CopyEmail } from "@/components/CopyEmail";
import { PageHero } from "@/components/PageHero";
import {
  profile,
  positioningLong,
  timeline,
  education,
  certifications,
  competencies,
  projects,
} from "@/config/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Résumé",
  description:
    "PMP® construction project and program leader with 15+ years of experience, project controls, construction data analytics, and responsible AI governance. Founder of In Project LLC, based in Lehi, Utah.",
  path: "/resume",
});

/** Two or three lines per project; the full narrative lives on the case study. */
const PROJECT_LINES: Record<string, string[]> = {
  "construction-project-controls-analytics": [
    "Built an early-warning analysis across 75 synthetic projects and a $5.83B portfolio, covering earned value, change orders, RFIs, and contingency.",
    "Identified contingency burn ratio as the strongest tested association with forecast overrun (Pearson r = 0.901).",
    "Delivered SQL schema and views, Excel workbooks, executive dashboards, a management action plan, and an alerting script.",
  ],
  "construction-change-order-rfi-analytics": [
    "Analyzed 3,318 RFIs and 1,119 change orders across 90 synthetic projects to locate where cycle time and backlog create exposure.",
    "Found the strongest portfolio relationship between RFI response time and change approval cycle (Pearson r = 0.817).",
    "Produced a composite workflow-risk score, executive and operational dashboards, and a management action plan.",
  ],
  "predictive-construction-project-overrun-model": [
    "Trained classification and regression models on 2,362 synthetic projects with 40 predictors and a time-based 2019-2025 split.",
    "Reached test ROC-AUC 0.899 for cost overrun; documented the schedule model's decline from validation to test as a monitoring concern.",
    "Delivered calibration, permutation importance, a model card, human-review workflow, and drift controls. Production use is not authorized.",
  ],
};

export default function ResumePage() {
  return (
    <>
      <PageHero
        eyebrow="Résumé"
        title={`${profile.fullName}, ${profile.credentials}`}
        variant="compact"
      >
        <p>Construction Project / Program Management</p>
        <p className="hero-subline">
          Project Controls · Construction Data Analytics · Responsible AI
        </p>
      </PageHero>

      <section className="section">
        <div className="container detail-layout">
          <article className="detail-main">
            <section className="detail-section">
              <h2>Professional summary</h2>
              {positioningLong.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </section>

            <section className="detail-section">
              <h2>Core competencies</h2>
              <div className="cluster-grid">
                {competencies.map((cluster) => (
                  <article className="value-card" key={cluster.title}>
                    <h3>{cluster.title}</h3>
                    <div className="chip-grid">
                      {cluster.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <h2>Professional experience</h2>
              <div className="exp-list">
                {timeline.map((entry) => (
                  <article className="exp-item" key={entry.period}>
                    <div className="exp-head">
                      <h3>{entry.role}</h3>
                      <span className="exp-period">{entry.period}</span>
                    </div>
                    <p className="exp-org">{entry.org}</p>
                    <ul>
                      {entry.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    {"outcomes" in entry && entry.outcomes ? (
                      <div className="fact-list" style={{ marginTop: "12px" }}>
                        {entry.outcomes.map((o) => (
                          <span key={o}>{o}</span>
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <h2>Selected construction analytics projects</h2>
              <div className="exp-list">
                {projects.map((project) => (
                  <article className="exp-item" key={project.slug}>
                    <div className="exp-head">
                      <h3>{project.title}</h3>
                      <span className="exp-period">{project.stage}</span>
                    </div>
                    <ul>
                      {PROJECT_LINES[project.slug].map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                    <div className="action-row" style={{ marginTop: "12px" }}>
                      <ActionLink href={project.detailHref} variant="ghost">
                        Case study
                      </ActionLink>
                      <ActionLink href={project.repoUrl} variant="ghost" external>
                        GitHub
                      </ActionLink>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <h2>Certifications</h2>
              <ul className="cert-list plain-list">
                {certifications.map((item) => (
                  <li key={item.name}>
                    <strong>{item.name}</strong>
                    <span>{item.org}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="detail-section">
              <h2>Education</h2>
              <ul className="cert-list plain-list">
                {education.map((item) => (
                  <li key={item.credential}>
                    <strong>{item.credential}</strong>
                    <span>
                      {item.org} · {item.period}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="detail-section">
              <h2>Languages</h2>
              <p>{profile.languages.join(" and ")}, professional working proficiency.</p>
            </section>

            <section className="detail-section">
              <h2>Download résumé</h2>
              <p className="muted-note">
                One-page résumé. Contact details on the file match the address below.
              </p>
              <div className="action-row">
                <ActionLink href={profile.resumeUrl} variant="primary" external>
                  Download Résumé ({profile.resumeFormat})
                </ActionLink>
              </div>
            </section>
          </article>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h2>Contact</h2>
              <p className="sidebar-note" style={{ marginBottom: "12px" }}>
                <a href={`mailto:${profile.publicEmail}`}>{profile.publicEmail}</a>
              </p>
              <div className="stacked-actions">
                <a className="btn btn-dark" href={`mailto:${profile.publicEmail}`}>
                  Email Narciso
                </a>
                <CopyEmail email={profile.publicEmail} />
                <a
                  className="btn btn-secondary"
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="btn btn-ghost"
                  href={profile.githubProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="sidebar-card">
              <h2>At a glance</h2>
              <ul className="tick-list">
                <li>{profile.experienceYears} years project and program management</li>
                <li>PMP® · MS in Project Management</li>
                <li>$30M+ construction and design portfolios</li>
                <li>Founder, In Project LLC</li>
                <li>{profile.location}</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
