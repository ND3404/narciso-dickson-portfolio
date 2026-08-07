import Image from "next/image";
import { ActionLink } from "@/components/Actions";
import { PageHero } from "@/components/PageHero";
import {
  profile,
  positioningLong,
  timeline,
  education,
  certifications,
  capabilities,
} from "@/config/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Narciso M. Dickson, MS, PMP®: 15+ years of construction project and program leadership, project controls, construction data analytics, and responsible AI governance. Founder of In Project LLC.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Construction leadership, measured.">
        <p>{profile.recruiterHeadline}</p>
      </PageHero>

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
                Based in {profile.location}. Professional communication in{" "}
                {profile.languages.join(" and ")}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" id="capabilities">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Capabilities</p>
            <h2>Four areas, one delivery discipline.</h2>
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
              Predictive-modeling capability is demonstrated on a synthetic portfolio with
              time-based validation, calibration, feature importance, and a model card. It
              does not represent large-scale production machine-learning deployment or
              measured impact on a real client engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Career</p>
            <h2>How the work has progressed.</h2>
            <p>
              The through-line is the same question in three forms: what is happening on
              this project, why is it happening, and can it be seen coming.
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
                <p>{entry.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container stack-grid stack-grid-2">
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
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="section-actions">
            <ActionLink href="/resume" variant="primary">
              View Résumé
            </ActionLink>
            <ActionLink href="/projects" variant="secondary">
              View Projects
            </ActionLink>
            <ActionLink href="/#contact" variant="ghost">
              Contact
            </ActionLink>
          </div>
        </div>
      </section>
    </>
  );
}
