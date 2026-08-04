import { ActionLink } from "@/components/Actions";
import { PageHero } from "@/components/PageHero";
import { profile } from "@/config/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Resume",
  description:
    "Resume-style profile for Narciso M. Dickson. Download withheld until an approved public resume file is supplied.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <>
      <PageHero eyebrow="Resume" title="A public resume page, with download pending approval.">
        <p>
          No approved public resume file was found in the local project search, so this
          page presents a resume-style professional profile and keeps the download
          intentionally disabled.
        </p>
      </PageHero>
      <section className="section section-white">
        <div className="container resume-grid">
          <div className="content-stack">
            <p className="resume-note">
              TODO: Add an approved public resume PDF to the portfolio and update
              profile.resumeFile in src/config/profile.ts before enabling downloads.
            </p>
            <article className="detail-section">
              <h2>Professional summary</h2>
              <p>
                PMP-certified project-management professional with a master&apos;s degree
                in project management and more than 10 years of experience across
                construction project management, consulting, and editorial operations.
              </p>
            </article>
            <article className="detail-section">
              <h2>Focus areas</h2>
              <p>
                Project leadership, construction project controls, Earned Value
                Management, stakeholder coordination, executive reporting, data
                analytics, BI dashboards, AI-use-case definition, automation, and
                responsible AI governance.
              </p>
            </article>
            <article className="detail-section">
              <h2>Tools and methods</h2>
              <p>
                Excel, SQL, Python, Power BI, Tableau, relational modeling, dashboard
                development, Agile, Waterfall, Hybrid delivery, CRISP-DM, DMAIC, and
                PMI project-governance process groups.
              </p>
            </article>
          </div>
          <aside className="sidebar-card">
            <h2>Resume download</h2>
            <p>Disabled until a reviewed public file is supplied.</p>
            <ActionLink href={profile.resumeFile} variant="dark">
              Download Resume
            </ActionLink>
          </aside>
        </div>
      </section>
    </>
  );
}
