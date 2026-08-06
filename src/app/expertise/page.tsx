import { ActionLink } from "@/components/Actions";
import { PageHero } from "@/components/PageHero";
import { expertiseAreas } from "@/config/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Expertise",
  description:
    "Project and program leadership, construction project controls, data analytics and business intelligence, and AI leadership with model governance.",
  path: "/expertise",
});

export default function ExpertisePage() {
  return (
    <>
      <PageHero eyebrow="Expertise" title="Four capabilities, one delivery discipline.">
        <p>
          Construction leadership sets the context, project controls supply the
          measurement, analytics turn that into evidence, and governance decides what
          may be acted on.
        </p>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="stack-grid stack-grid-2">
            {expertiseAreas.map((area) => (
              <article className="value-card" key={area.title}>
                <h2>{area.title}</h2>
                <p>{area.body}</p>
                <ul className="tick-list">
                  {area.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="callout-warning" style={{ marginTop: "34px" }}>
            <h2>Scope of the predictive work</h2>
            <p>
              Predictive-modeling capability is demonstrated on a synthetic portfolio with
              time-based validation, calibration, feature importance, and a model card.
              It does not represent large-scale production machine-learning deployment or
              measured impact on a real client engagement.
            </p>
          </div>

          <div className="section-actions">
            <ActionLink href="/projects" variant="primary">
              See It Applied
            </ActionLink>
            <ActionLink href="/contact" variant="secondary">
              Discuss an Opportunity
            </ActionLink>
          </div>
        </div>
      </section>
    </>
  );
}
