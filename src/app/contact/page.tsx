import { ActionLink } from "@/components/Actions";
import { PageHero } from "@/components/PageHero";
import { profile } from "@/config/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Narciso M. Dickson about construction project management and project-controls roles, or about In Project LLC consulting, analytics, dashboards, and In Project AI collaboration.",
  path: "/contact",
});

const SUBJECT_HIRING = encodeURIComponent(
  "Employment opportunity — construction project management / project controls",
);
const SUBJECT_CONSULTING = encodeURIComponent(
  "Consulting or partnership enquiry — In Project LLC",
);

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's Build Better Project Decisions">
        <p>
          Two paths, so the first message already has the right context. Based in{" "}
          {profile.location}.
        </p>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <article className="contact-card">
              <p className="eyebrow">Employment and professional opportunities</p>
              <h2>Recruiters and hiring managers</h2>
              <p>
                For construction project and program management, project controls,
                analytics leadership, BI, and AI-enabled project roles. The résumé,
                experience timeline, and three published case studies are all public — no
                gate, no form.
              </p>
              <div className="action-row">
                <ActionLink
                  href={`mailto:${profile.publicEmail}?subject=${SUBJECT_HIRING}`}
                  variant="primary"
                >
                  Email About a Role
                </ActionLink>
                <ActionLink href="/resume" variant="secondary">
                  View Résumé
                </ActionLink>
              </div>
            </article>

            <article className="contact-card">
              <p className="eyebrow">Consulting and partnerships</p>
              <h2>Organizations and collaborators</h2>
              <p>
                For In Project LLC engagements: construction analytics, project controls
                support, executive dashboards, reporting workflows, and In Project AI
                collaboration.
              </p>
              <div className="action-row">
                <ActionLink
                  href={`mailto:${profile.publicEmail}?subject=${SUBJECT_CONSULTING}`}
                  variant="primary"
                >
                  Discuss an Opportunity
                </ActionLink>
                <ActionLink href="/expertise" variant="secondary">
                  Explore Capabilities
                </ActionLink>
              </div>
            </article>
          </div>

          <div className="sidebar-card" style={{ marginTop: "28px" }}>
            <h2>Direct links</h2>
            <div className="action-row">
              <ActionLink href={`mailto:${profile.publicEmail}`} variant="dark">
                {profile.publicEmail}
              </ActionLink>
              <ActionLink href={profile.linkedinUrl} variant="ghost" external>
                LinkedIn
              </ActionLink>
              <ActionLink href={profile.githubProfileUrl} variant="ghost" external>
                GitHub
              </ActionLink>
              <ActionLink href={profile.inProjectUrl} variant="ghost" external>
                In Project
              </ActionLink>
              <ActionLink href={profile.inProjectAiUrl} variant="ghost" external>
                In Project AI
              </ActionLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
