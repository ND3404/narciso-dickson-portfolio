import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "About Narciso M. Dickson: PMP-certified project-management professional, founder of In Project LLC, and construction analytics and AI leadership practitioner.",
  path: "/about",
});

const groups = [
  ["Project leadership", "More than 10 years of project-management experience across construction, consulting, and editorial operations, with work spanning initiation, planning, execution, monitoring, control, and closeout."],
  ["Delivery methods", "Experience working across Agile, Waterfall, and Hybrid approaches, with a practical focus on stakeholder coordination, executive reporting, scope, budget, schedule, procurement, risk, and change management."],
  ["Analytics transition", "A professional path that connects project leadership with data analytics, business intelligence, dashboard development, and analytical workflow design."],
  ["Responsible AI", "A practical approach to AI-enabled project leadership that treats AI as decision support requiring business alignment, data quality, governance, and qualified human review."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Professional narrative" title="Project management depth, analytics discipline, and responsible AI leadership.">
        <p>
          Narciso M. Dickson is a PMP-certified project-management professional with
          a master&apos;s degree in project management and more than 10 years of experience
          across construction project management, consulting, and editorial operations.
        </p>
      </PageHero>
      <section className="section section-white">
        <div className="container content-stack">
          <div className="text-block">
            <p>
              His work combines project leadership, construction project controls,
              data analytics, business intelligence, and AI leadership to improve
              visibility, decision-making, risk management, and project outcomes.
              He is the founder of In Project LLC.
            </p>
            <p>
              The through-line is practical: make project information clearer, make
              risk visible sooner, and help teams move from fragmented reporting to
              owner-ready decision support without replacing professional judgment.
            </p>
          </div>
          <div className="card-grid">
            {groups.map(([title, body]) => (
              <article className="value-card" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
