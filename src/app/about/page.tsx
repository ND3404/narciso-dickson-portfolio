import Image from "next/image";
import { ActionLink } from "@/components/Actions";
import { CopyEmail } from "@/components/CopyEmail";
import { PageHero } from "@/components/PageHero";
import {
  profile,
  positioningLong,
  timeline,
  education,
  certifications,
  capabilities,
  competencies,
  projects,
} from "@/config/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About and Résumé",
  description:
    "Narciso M. Dickson, MS, PMP®: 15+ years of construction project and program leadership, project controls, construction data analytics, and responsible AI. Founder of In Project LLC, Lehi, Utah.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About and Résumé" title="Narciso M. Dickson" variant="compact">
        <p>Construction Project / Program Management</p>
        <p className="hero-subline">
          Project Controls · Construction Data Analytics · Responsible AI
        </p>
      </PageHero>

      {/* Who, in plain language, next to the photograph. */}
      <section className="section">
        <div className="container">
          <div className="about-split">
            <Image
              className="headshot"
              src="/images/narciso-dickson-headshot.jpg"
              alt="Narciso M. Dickson, construction project management and analytics professional"
              width={1204}
              height={1605}
              sizes="(max-width: 820px) 280px, 360px"
            />
            <div className="lead-text">
              {positioningLong.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
              <p>
                Based in {profile.location}. Works in{" "}
                {profile.languages.join(" and ")}.
              </p>
              <div className="action-row">
                <a className="btn btn-primary" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                  Download Résumé ({profile.resumeFormat})
                </a>
                <ActionLink href="/portfolio" variant="secondary">
                  See the Portfolio
                </ActionLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewritten: says plainly what changed across the career. */}
      <section className="section section-white">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Career</p>
            <h2>Fifteen years running construction work, then learning to measure it.</h2>
            <p>
              The first decade was delivery: budgets, schedules, procurement, and the
              teams that carry them. What kept repeating was how late a problem became
              visible. That is why the recent work is analytics — same job, better
              instruments.
            </p>
          </div>
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
        </div>
      </section>

      <section className="section" id="capabilities">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Capabilities</p>
            <h2>What I do, in four areas.</h2>
            <p>
              Construction leadership sets the context, project controls supply the
              measurement, analytics turn that into evidence, and governance decides what
              may be acted on.
            </p>
          </div>
          <div className="stack-grid stack-grid-2">
            {capabilities.map((area) => (
              <article className="value-card" key={area.title}>
                <h3>{area.title}</h3>
                <ul className="tick-list">
                  {area.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="callout-warning" style={{ marginTop: "28px" }}>
            <h3>Scope of the predictive work</h3>
            <p>
              The predictive modeling is demonstrated on a synthetic portfolio with
              time-based validation, calibration, feature importance, and a model card. It
              does not represent production machine learning deployed on a real client
              engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Portfolio</p>
            <h2>Case studies, in short.</h2>
          </div>
          <div className="exp-list">
            {projects.map((project) => (
              <article className="exp-item" key={project.slug}>
                <div className="exp-head">
                  <h3>{project.title}</h3>
                  <span className="exp-period">{project.stage}</span>
                </div>
                <p className="exp-org">{project.scale}</p>
                <p>{project.problem}</p>
                <div className="action-row" style={{ marginTop: "12px" }}>
                  <ActionLink href={project.detailHref} variant="ghost">
                    View case study
                  </ActionLink>
                  <ActionLink href={project.repoUrl} variant="ghost" external>
                    GitHub
                  </ActionLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Core competencies</p>
            <h2>Tools and methods.</h2>
          </div>
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
        </div>
      </section>

      <section className="section section-white">
        <div className="container stack-grid stack-grid-2">
          <div>
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
            <h2 style={{ marginTop: "28px" }}>Languages</h2>
            <p className="sidebar-note">
              {profile.languages.join(" and ")}, professional working proficiency.
            </p>
          </div>
          <div>
            <h2>Certifications</h2>
            <ul className="cert-list plain-list">
              {certifications.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}</strong>
                  <span>{item.org}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container narrow">
          <div className="contact-card-compact">
            <p className="eyebrow">Contact</p>
            <h2>Open to roles and consulting work.</h2>
            <p>
              Construction project and program management, project controls, construction
              analytics, and consulting. Based in Lehi, Utah; open to Utah-based and
              remote work.
            </p>
            <p className="contact-email">
              <a href={`mailto:${profile.publicEmail}`}>{profile.publicEmail}</a>
            </p>
            <div className="action-row">
              <a className="btn btn-primary" href={`mailto:${profile.publicEmail}`}>
                Email Narciso
              </a>
              <CopyEmail email={profile.publicEmail} />
              <a className="btn btn-ghost" href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="btn btn-ghost" href={profile.githubProfileUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
