import { ActionLink } from "@/components/Actions";
import { PageHero } from "@/components/PageHero";
import {
  profile,
  timeline,
  education,
  certifications,
  targetRoles,
  competencies,
  projects,
} from "@/config/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Résumé",
  description:
    "PMP® construction project and program leader with 15+ years of experience, project controls, data analytics, business intelligence, and responsible AI governance. Based in Lehi, Utah.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <>
      <PageHero eyebrow="Résumé" title={`${profile.fullName}, ${profile.credentials}`}>
        <p>{profile.recruiterHeadline}</p>
      </PageHero>

      <section className="section">
        <div className="container detail-layout">
          <article className="detail-main">
            <section className="detail-section">
              <h2>Professional summary</h2>
              <p>
                PMP®-certified construction project and program leader with{" "}
                {profile.experienceYears} years delivering construction and design work,
                currently Senior Construction Project Manager and founder of In Project
                LLC. Experience spans multimillion-dollar portfolios, concurrent project
                loads, procurement and contract negotiation, risk and quality governance,
                and executive stakeholder reporting — now combined with Excel, Power BI,
                SQL, predictive analytics, and responsible AI governance. Bilingual in{" "}
                {profile.languages.join(" and ")}, based in {profile.location}.
              </p>
            </section>

            <section className="detail-section">
              <h2>Experience</h2>
              <div className="timeline">
                {timeline.map((entry) => (
                  <article className="timeline-item" key={entry.period}>
                    <header>
                      <span className="timeline-period">{entry.period}</span>
                      <span className="mini-label">{entry.kind}</span>
                    </header>
                    <h3>{entry.role}</h3>
                    <p className="timeline-org">{entry.org}</p>
                    <ul>
                      {entry.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
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
              <h2>Target role families</h2>
              <p className="muted-note">
                Pathways where this combination of construction delivery, controls, and
                analytics applies — not a list of titles already held.
              </p>
              <div className="role-grid">
                {targetRoles.map((role) => (
                  <span key={role}>{role}</span>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <h2>Education</h2>
              <div className="credential-list">
                {education.map((item) => (
                  <div key={item.credential}>
                    <strong>{item.credential}</strong>
                    <span>
                      {item.org} · {item.period}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <h2>Certifications</h2>
              <div className="credential-list">
                {certifications.map((item) => (
                  <div key={item.name}>
                    <strong>{item.name}</strong>
                    <span>{item.org}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <h2>Published case studies</h2>
              <div className="credential-list">
                {projects.map((project) => (
                  <div key={project.slug}>
                    <strong>{project.title}</strong>
                    <span>{project.scale}</span>
                    <div className="action-row" style={{ marginTop: "10px" }}>
                      <ActionLink href={project.detailHref} variant="ghost">
                        Case study
                      </ActionLink>
                      <ActionLink href={project.repoUrl} variant="ghost" external>
                        GitHub
                      </ActionLink>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </article>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h2>Download</h2>
              <div className="stacked-actions">
                <ActionLink href={profile.resumeUrl} variant="primary" external>
                  Download Résumé ({profile.resumeFormat})
                </ActionLink>
              </div>
              <p className="sidebar-note" style={{ marginTop: "12px" }}>
                One-page résumé. Contact details on the file match the professional
                address below.
              </p>
            </div>

            <div className="sidebar-card">
              <h2>Contact</h2>
              <div className="stacked-actions">
                <ActionLink href={`mailto:${profile.publicEmail}`} variant="dark">
                  Email
                </ActionLink>
                <ActionLink href={profile.linkedinUrl} variant="secondary" external>
                  LinkedIn
                </ActionLink>
                <ActionLink href={profile.githubProfileUrl} variant="ghost" external>
                  GitHub
                </ActionLink>
              </div>
            </div>

            <div className="sidebar-card">
              <h2>At a glance</h2>
              <ul className="tick-list">
                <li>{profile.experienceYears} years project and program management</li>
                <li>PMP® · MS in Project Management</li>
                <li>$30M+ construction and design portfolios</li>
                <li>{profile.location}</li>
                <li>{profile.languages.join(" and ")}</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
