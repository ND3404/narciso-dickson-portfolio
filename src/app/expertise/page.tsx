import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Expertise",
  description:
    "Expertise in project leadership, construction project controls, data analytics and BI, and responsible AI leadership and automation.",
  path: "/expertise",
});

const expertise = [
  ["Project Leadership", ["Project and program management", "Agile, Waterfall, and Hybrid delivery", "Team leadership", "Stakeholder management", "Procurement", "Risk and change management", "Executive communication"]],
  ["Construction and Project Controls", ["Scope, cost, and schedule control", "Earned Value Management", "Forecasting", "Contingency monitoring", "RFIs and submittals", "Change-order management", "Executive and owner reporting"]],
  ["Data Analytics and BI", ["Excel", "SQL", "Python", "Power BI", "Tableau", "Data preparation and validation", "Relational modeling", "Dashboard development", "Descriptive and diagnostic analysis"]],
  ["AI Leadership and Automation", ["AI business-use-case definition", "AI-enabled project initiatives", "Analytics and AI workflow integration", "Prompt and agent workflow design", "Responsible AI governance", "Data quality and human oversight", "Predictive-risk concepts", "In Project AI product leadership"]],
];

export default function ExpertisePage() {
  return (
    <>
      <PageHero eyebrow="Command-center capabilities" title="Four connected lanes of professional expertise.">
        <p>
          The portfolio is organized around project delivery judgment, construction
          project controls, analytics execution, and AI leadership with human oversight.
        </p>
      </PageHero>
      <section className="section">
        <div className="container card-grid">
          {expertise.map(([title, items]) => (
            <article className="value-card" key={title as string}>
              <h3>{title as string}</h3>
              <div className="chip-grid">
                {(items as string[]).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
