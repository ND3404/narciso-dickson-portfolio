import Image from "next/image";
import { projects, profile, isPending } from "@/config/profile";
import { ActionLink } from "./Actions";
import { PageHero } from "./PageHero";
import { StatusBadge } from "./ProjectCard";

type Section = { heading: string; body: string };
type Figure = { src: string; alt: string; caption: string };

const LIFECYCLE = ["Ask", "Prepare", "Process", "Analyze", "Share", "Act"];

/**
 * Per-project narrative. Kept beside the metrics in config/profile.ts so the
 * numbers have a single source of truth and the prose has a single home.
 */
const NARRATIVE: Record<string, { sections: Section[]; figures: Figure[] }> = {
  "construction-project-controls-analytics": {
    sections: [
      ["Executive overview", "A completed end-to-end portfolio analytics case study evaluating early-warning indicators across 75 synthetic construction projects with a $5.831B budget at completion and a $6.587B forecast at completion."],
      ["Business problem", "Cost and schedule stress often becomes visible after the practical window for intervention has narrowed. The study focuses on earlier signals that management can monitor from month one."],
      ["Primary question", "Which project-controls metrics move first, early enough to intervene before overruns become unavoidable?"],
      ["Stakeholders", "Executive sponsors, project managers, project-controls teams, owners, finance reviewers, and operations leaders who need clear risk visibility."],
      ["Analytics lifecycle", "Ask, Prepare, Process, Analyze, Share, and Act, supported by terminology and practice from CRISP-DM, DMAIC, Microsoft's data-science lifecycle, and PMI project-governance process groups."],
      ["Relational data model", "Projects, monthly performance, change orders, and RFI logs, with analysis views for project performance, RFI summary, change-order summary, and latest monthly performance."],
      ["Data quality and cleaning", "The workflow validates data types, deduplicates records, applies quality checks, loads a SQLite database, and documents known limitations rather than hiding them."],
      ["Analytical results", "The portfolio is forecast to finish 13.0% over budget at a weighted CPI of 0.884, with an average forecast delay of 33.7 days and 50 of 75 projects at Red status."],
      ["Early-warning relationships", "Contingency burn ratio has the strongest tested association with forecast overrun (Pearson r = 0.901). RFI response time shows a weaker but real association with schedule delay (r = 0.517), while RFI density does not. These are associations, not causal claims."],
      ["Management recommendations", "Track contingency burn from month one, review CPI thresholds before monthly reporting closes, separate cost and schedule change-order drivers, and manage RFIs as a systemic workflow constraint."],
      ["Automation and governance", "The repository includes a PowerShell pipeline runner and a Python management-alert generator that produces alert outputs from the validated analysis data."],
      ["Limitations", "The data is synthetic, correlations are not causal claims, small subgroups are not generalised, and retained data-quality gaps are disclosed in the project documentation."],
    ].map(([heading, body]) => ({ heading, body })),
    figures: [
      { src: "/case-study/p1-executive-dashboard.png", caption: "Executive dashboard: portfolio health, forecast overrun by project type, cost and schedule efficiency, and the top-10 review list.", alt: "Executive dashboard showing portfolio health, forecast overrun by project type, cost and schedule efficiency, and the top-10 review list" },
      { src: "/case-study/p1-operational-dashboard.png", caption: "Operational insights: CPI and SPI trend, approved change value by category, tested early-warning relationships, and RFI response by discipline.", alt: "Operational dashboard showing CPI and SPI trend, approved change value by category, tested early-warning relationships, and RFI response by discipline" },
    ],
  },

  "construction-change-order-rfi-analytics": {
    sections: [
      ["Executive overview", "A complete public case study analysing RFI response performance, change-order approval cycles, workflow-event histories, commercial exposure, and project-level management priorities across 90 synthetic construction projects."],
      ["Business problem", "Change orders and RFIs pass through many reviews, handoffs, and approvals. Each pause is invisible in a monthly cost report, yet the accumulated delay shows up as commercial exposure and schedule pressure."],
      ["Primary question", "Which change-order causes and RFI workflow conditions create the greatest cost and schedule exposure, and where should management intervene to improve response and approval performance?"],
      ["Stakeholders", "Project managers, project-controls teams, design managers, commercial and contracts staff, owners, and executives responsible for portfolio decisions."],
      ["Analytics lifecycle", "Ask, Prepare, Process, Analyze, Share, and Act, aligned to CRISP-DM, DMAIC, Microsoft's data-science lifecycle, and PMI process groups."],
      ["Relational data model", "The processed dataset contains 90 clean projects, 3,318 clean RFI records, 1,119 clean change orders, 11,286 clean workflow events, and 677 clean RFI-to-change links."],
      ["Data quality and cleaning", "Duplicates removed, categories standardised, invalid relationships quarantined rather than guessed, one-to-one relationships enforced, and every treatment logged before analysis."],
      ["RFI performance", "Average RFI response is 12.21 days against a 45.7% on-time rate, with 295 overdue open RFIs. Response speed varies by discipline, and every discipline sits below a healthy on-time threshold."],
      ["Change-order exposure", "Approved change value reaches $204.57M with $88.10M still pending. Owner-directed changes, design errors or omissions, and unforeseen conditions account for the largest share of approved value."],
      ["Workflow bottlenecks", "Stage-duration analysis locates where time accumulates by item type and accountable role, and separates genuine review time from rework loops returned for revision or clarification."],
      ["Statistical relationships", "Project-average RFI response and project-average change approval cycle produce the strongest tested portfolio relationship at Pearson r = 0.817. This is an association between two workflow speeds, not evidence that one causes the other."],
      ["Project workflow-risk framework", "Each project receives a composite workflow-risk score from response time, overdue backlog, approval cycle, pending exposure, forecast lag, and incorporation performance, producing 29 Red, 48 Yellow, and 13 Green projects."],
      ["Management recommendations", "Treat RFI response and change approval as one connected decision system, target the slowest accountable stages, reduce rework loops, and incorporate approved changes into forecasts on a fixed cadence."],
      ["Automation and governance", "A Python alert generator and PowerShell pipeline produce management alerts from validated analysis outputs, with governance cadence and KPI targets defined in the Act workbook."],
      ["Limitations", "The data is synthetic. Correlation does not establish causation, exploratory models are not approved for production use, and group comparisons are portfolio observations rather than industry benchmarks."],
    ].map(([heading, body]) => ({ heading, body })),
    figures: [
      { src: "/case-study/p2-executive-dashboard.png", caption: "Executive portfolio view: decision speed, commercial exposure by change category, workflow health, and the projects needing management attention.", alt: "Executive dashboard showing RFI response performance, commercial exposure by change category, workflow health, and the projects needing attention" },
      { src: "/case-study/p2-workflow-analysis.png", caption: "Workflow bottlenecks and drivers: the slowest stages, rework loops, tested relationships, and approved value by initiating party.", alt: "Workflow analysis dashboard showing slowest stages, rework loops, tested relationships, and approved value by initiating party" },
    ],
  },

  "predictive-construction-project-overrun-model": {
    sections: [
      ["Executive overview", "A complete public case study predicting final cost overrun of at least 10% and final schedule delay of at least 30 days from early and mid-project controls and workflow indicators, using 2,362 clean synthetic project snapshots and 40 predictors."],
      ["Business problem and prediction targets", "Cost and schedule outcomes are usually confirmed too late to change them. The model predicts two binary outcomes, cost overrun and schedule delay, plus continuous forecasts of final overrun percentage and delay days."],
      ["Relationship to Projects 1 and 2", "The 40 predictors combine controls concepts from the first case study, including CPI, SPI, variance, and contingency, with workflow concepts from the second, including RFI backlog, change exposure, approval cycles, and revision loops."],
      ["Dataset design and snapshot boundary", "Each project contributes a single snapshot taken partway through delivery. Final outcome fields sit strictly outside that boundary so the model never sees the answer it is being asked to predict."],
      ["Feature lineage", "Every predictor is traced to the case study and the operational process that produced it, so a reviewer can challenge any input rather than accept the model as a black box."],
      ["Data preparation and leakage prevention", "Cleaning, validation, and quarantine run before modeling. Final outcome fields are excluded from predictors, and the test period is untouched during model and threshold selection."],
      ["Time-based validation methodology", "Models are split by time rather than at random: 1,577 projects from 2019 through 2023 for training, 349 from 2024 for validation, and 436 from 2025 as a future test period. This is the honest test for an early-warning tool."],
      ["Classification model comparison", "Logistic Regression and Random Forest were compared for both targets. The cost-overrun champion is a Random Forest at test ROC-AUC 0.899 and PR-AUC 0.774; the schedule-delay champion is a Logistic Regression at test ROC-AUC 0.756 and PR-AUC 0.524."],
      ["Regression model comparison", "Ridge and Random Forest regressors forecast final overrun percentage and final delay days. Cost regression reaches R² 0.520 on the test period; schedule regression is materially weaker at R² 0.333."],
      ["Calibration and confusion matrices", "Predicted probabilities are compared against observed rates by decile, and confusion matrices at the selected thresholds show the real trade-off between missed overruns and false alarms."],
      ["Feature importance", "Permutation importance identifies CPI as the leading cost-overrun driver and SPI as the leading schedule-delay driver. Importance measures predictive contribution, not causation: changing a feature will not by itself change the outcome."],
      ["Project risk scoring", "Each test project receives a cost probability, a schedule probability, a combined probability, and a Red, Yellow, or Green band, producing 188 Red, 138 Yellow, and 110 Green projects for review prioritisation."],
      ["Temporal degradation finding", "Schedule-delay performance declines from validation to the future test period. This was documented as a model-monitoring concern rather than hidden, and it drives the retraining and drift thresholds defined in the Act phase."],
      ["Controlled-pilot roadmap", "The Act phase defines a staged pilot with defined scope, success criteria, and a decision point, rather than an open-ended rollout."],
      ["Human-review workflow", "Predictions enter a review queue. A qualified professional confirms, overrides, or rejects each one, and the override is logged as training signal for the next cycle."],
      ["Drift, monitoring, override, and retraining controls", "Monitoring thresholds, override logging, retraining triggers, incident handling, and a model card are defined before any pilot begins."],
      ["Limitations and responsible AI", "The data is synthetic and the results are not industry benchmarks. The model establishes association rather than causation, production use on real projects is not authorised by this case study, and predictions support human review rather than replacing qualified project judgment."],
    ].map(([heading, body]) => ({ heading, body })),
    figures: [
      { src: "/case-study/p3-executive-dashboard.png", caption: "Executive model view: predicted risk bands, champion performance on validation versus the 2025 test period, and the highest predicted-risk projects.", alt: "Executive model dashboard showing predicted risk bands, champion model performance, and the highest predicted-risk projects" },
      { src: "/case-study/p3-model-performance.png", caption: "Model performance and calibration: predicted probability against observed rate, model comparison across both targets and splits, and the confusion matrix.", alt: "Model performance dashboard showing calibration, model comparison, and confusion matrix for both classifiers" },
    ],
  },
};

export function ProjectDetail({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return null;
  const narrative = NARRATIVE[slug];
  const isPredictive = slug === "predictive-construction-project-overrun-model";

  return (
    <>
      <PageHero eyebrow={project.stage} title={project.title}>
        <p>{project.subtitle}</p>
      </PageHero>

      <section className="section">
        <div className="container detail-layout">
          <article className="detail-main">
            <div className="detail-intro">
              <StatusBadge status={project.status} />
              <p>{project.problem}</p>
            </div>

            <section className="detail-section">
              <h2>Validated results</h2>
              <p className="muted-note">
                Every figure below is reproduced from the analytical outputs in the
                public repository.
              </p>
              <div className="result-table" role="table" aria-label={`${project.title} validated results`}>
                {project.results.map(([label, value]) => (
                  <div className="result-row" role="row" key={label}>
                    <span role="cell">{label}</span>
                    <strong role="cell">{value}</strong>
                  </div>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <h2>Analytics lifecycle</h2>
              <div className="phase-grid">
                {LIFECYCLE.map((phase) => (
                  <div className="phase-card" key={phase}>
                    <span>{phase}</span>
                    <strong>Complete</strong>
                  </div>
                ))}
              </div>
            </section>

            {narrative?.sections.map((s) => (
              <section className="detail-section" key={s.heading}>
                <h2>{s.heading}</h2>
                <p>{s.body}</p>
              </section>
            ))}

            {narrative?.figures.map((f) => (
              <section className="detail-section" key={f.src}>
                <h2>{f.caption.split(":")[0]}</h2>
                <Image
                  className="case-image"
                  src={f.src}
                  alt={f.alt}
                  width={2400}
                  height={1425}
                  sizes="(max-width: 900px) 100vw, 760px"
                />
                <p className="figure-caption">{f.caption}</p>
              </section>
            ))}

            {isPredictive && (
              <section className="detail-section callout-warning">
                <h2>Authorised use</h2>
                <p>
                  Production use on real construction projects is <strong>not
                  authorised</strong> by this case study. The model is human decision
                  support: predictions prioritise review, and a qualified professional
                  remains accountable for every decision.
                </p>
              </section>
            )}

            <section className="detail-section">
              <h2>Synthetic-data disclosure</h2>
              <p className="disclosure">{project.disclosure}</p>
            </section>
          </article>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h2>Project links</h2>
              <div className="stacked-actions">
                <ActionLink href={project.repoUrl} variant="dark" external>
                  View on GitHub
                </ActionLink>
                <ActionLink href={project.reportUrl} variant="secondary" external>
                  Case-study report (PDF)
                </ActionLink>
                {isPending(profile.powerBiUrl) ? (
                  <span className="btn btn-ghost btn-disabled" aria-disabled="true">
                    Power BI — coming soon
                  </span>
                ) : (
                  <ActionLink href={profile.powerBiUrl} variant="ghost" external>
                    Power BI
                  </ActionLink>
                )}
                {isPending(profile.tableauPublicUrl) ? (
                  <span className="btn btn-ghost btn-disabled" aria-disabled="true">
                    Tableau — coming soon
                  </span>
                ) : (
                  <ActionLink href={profile.tableauPublicUrl} variant="ghost" external>
                    Tableau
                  </ActionLink>
                )}
              </div>
            </div>

            <div className="sidebar-card">
              <h2>Dataset scale</h2>
              <p className="sidebar-note">{project.scale}</p>
            </div>

            <div className="sidebar-card">
              <h2>Tools</h2>
              <div className="chip-grid">
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>

            <div className="sidebar-card">
              <h2>Deliverables</h2>
              <ul className="tick-list">
                {project.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
