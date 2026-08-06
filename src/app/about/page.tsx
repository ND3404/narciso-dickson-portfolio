import { ActionLink } from "@/components/Actions";
import { PageHero } from "@/components/PageHero";
import { profile, positioning, timeline, education, certifications } from "@/config/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Narciso M. Dickson, MS, PMP®: 15+ years of construction project and program leadership, project controls, and the move into construction data analytics and responsible AI.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Construction leadership, measured.">
        <p>{profile.recruiterHeadline}</p>
      </PageHero>

      <section className="section">
        <div className="container narrow">
          <div className="lead-text">
            <p>{positioning}</p>
          </div>

          <h2>How the work has progressed</h2>
          <p>
            The through-line is the same question in three forms: what is actually
            happening on this project, why is it happening, and can it be seen coming.
            Construction delivery taught the first, project controls the second, and
            analytics the third.
          </p>

          <div className="timeline">
            {timeline.map((entry) => (
              <article className="timeline-item" key={entry.period}>
                <header>
                  <span className="timeline-period">{entry.period}</span>
                  <span className="mini-label">{entry.kind}</span>
                </header>
                <h3>{entry.role}</h3>
                <p className="timeline-org">{entry.org}</p>
                <p>{entry.summary}</p>
                <ul>
                  {entry.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <h2>Where the portfolio fits</h2>
          <p>
            The three published case studies mirror that same progression: descriptive
            project-controls analytics, then diagnostic workflow analysis of RFIs and
            change orders, then predictive early warning for cost overruns and schedule
            delays. Each was built end to end, published with its data and code, and
            documented with its limitations.
          </p>

          <h2>On AI</h2>
          <p>
            AI should strengthen professional judgment, not replace it. Every predictive
            output in this portfolio is framed as decision support: a review queue, a
            model card, a human override, and a monitoring threshold. Where a model
            degrades, that is reported rather than hidden.
          </p>

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

          <h2>Certifications</h2>
          <div className="credential-list">
            {certifications.map((item) => (
              <div key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.org}</span>
              </div>
            ))}
          </div>

          <p className="sidebar-note">
            Based in {profile.location}. Professional communication in{" "}
            {profile.languages.join(" and ")}.
          </p>

          <div className="section-actions">
            <ActionLink href="/resume" variant="primary">
              View Résumé
            </ActionLink>
            <ActionLink href="/projects" variant="secondary">
              View Case Studies
            </ActionLink>
          </div>
        </div>
      </section>
    </>
  );
}
