import Image from "next/image";
import { ActionLink } from "@/components/Actions";
import { CopyEmail } from "@/components/CopyEmail";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, profile, positioning, timeline } from "@/config/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Construction Project Leadership Informed by Data",
  description:
    "Narciso M. Dickson, MS, PMP®: 15+ years of construction project and program leadership with project controls, construction data analytics, dashboards, and responsible AI governance.",
  path: "/",
});

const TRUST = [
  "15+ Years",
  "PMP®",
  "MS Project Management",
  "Founder, In Project LLC",
];

export default function Home() {
  const current = timeline[0];
  const prior = timeline[1];
  const earlier = timeline[2];

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              Construction project leadership · Project controls · Data analytics
            </p>
            <h1>Construction Project Leadership Informed by Data</h1>
            <p>
              I combine {profile.experienceYears} years of construction project and
              program leadership with project controls, data analytics, dashboards,
              predictive modeling, and responsible AI governance to improve visibility,
              prioritize risk, and support better project decisions.
            </p>
            <div className="hero-actions">
              <ActionLink href="/portfolio" variant="primary">
                View Portfolio
              </ActionLink>
              <ActionLink href="/about" variant="secondary">
                View Résumé
              </ActionLink>
              <ActionLink href={profile.linkedinUrl} variant="ghost" external>
                LinkedIn
              </ActionLink>
              <ActionLink href={profile.githubProfileUrl} variant="ghost" external>
                GitHub
              </ActionLink>
            </div>
            <p className="trust-strip">
              {TRUST.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Construction Leadership and Project Controls Experience</h2>
          </div>
          <div className="exp-list">
            {[current, prior].map((role) => (
              <article className="exp-item" key={role.period}>
                <div className="exp-head">
                  <h3>{role.role}</h3>
                  <span className="exp-period">{role.period}</span>
                </div>
                <p className="exp-org">{role.org}</p>
                <ul>
                  {role.points.slice(0, 4).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
            <article className="exp-item">
              <div className="exp-head">
                <h3>{earlier.role}</h3>
                <span className="exp-period">{earlier.period}</span>
              </div>
              <p className="exp-org">{earlier.org}</p>
              <p>{earlier.summary}</p>
            </article>
          </div>
          <div className="section-actions">
            <ActionLink href="/about" variant="secondary">
              Full Résumé
            </ActionLink>
          </div>
        </div>
      </section>

      <section className="section section-white" id="portfolio">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Portfolio</p>
            <h2>Construction analytics, from measurement to prediction.</h2>
            <p>
              Each case study publishes its data, SQL, Python, dashboards and full report
              on GitHub.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
          <div className="section-actions">
            <ActionLink href="/portfolio" variant="secondary">
              See the full Portfolio
            </ActionLink>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Construction delivery first, analytics second.</h2>
          </div>
          <div className="about-split">
            <Image
              className="headshot"
              src="/images/narciso-dickson-headshot.jpg"
              alt="Narciso M. Dickson, construction project management and analytics professional"
              width={1204}
              height={1605}
              sizes="(max-width: 820px) 280px, 320px"
              priority={false}
            />
            <div>
              <p>{positioning}</p>
              <p>
                The portfolio follows the same progression: what the numbers say, why the
                workflow produces them, and whether the outcome can be seen early enough
                to act. AI should strengthen professional judgment, not replace it.
              </p>
              <div className="section-actions">
                <ActionLink href="/about" variant="secondary">
                  About and Capabilities
                </ActionLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="in-project">
        <div className="container founder-grid">
          <Image
            src="/brand/in-project-ai-logo-inverted.png"
            alt="In Project AI"
            width={2048}
            height={512}
            sizes="(max-width: 820px) 60vw, 220px"
            style={{ width: "100%", maxWidth: 220, height: "auto" }}
          />
          <div>
            <p className="eyebrow">Founder</p>
            <h2>In Project LLC</h2>
            <p>
              Narciso founded In Project LLC, a construction project-management practice
              covering project controls, analytics, dashboards, and reporting workflows.
              In Project AI supports AI-enabled document intelligence, risk visibility,
              forecasts, and management reporting.
            </p>
            <p>
              AI outputs require qualified professional review and human accountability
              before contractual, engineering, financial, or project decisions.
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
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container narrow">
          <div className="contact-card-compact">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build better project decisions.</h2>
            <p>
              Open to construction project/program management, project controls,
              construction analytics, and consulting opportunities. Based in Lehi, Utah,
              with interest in Utah-based and remote roles.
            </p>
            <p className="contact-email">
              <a href={`mailto:${profile.publicEmail}`}>{profile.publicEmail}</a>
            </p>
            <div className="action-row">
              <a className="btn btn-primary" href={`mailto:${profile.publicEmail}`}>
                Email Narciso
              </a>
              <CopyEmail email={profile.publicEmail} />
              <a
                className="btn btn-ghost"
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
        </div>
      </section>
    </>
  );
}
