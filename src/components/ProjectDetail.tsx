import Image from "next/image";
import { projects } from "@/config/profile";
import { ActionLink } from "./Actions";
import { PageHero } from "./PageHero";
import { StatusBadge } from "./ProjectCard";

export function ProjectDetail({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return null;

  const isComplete = project.slug === "construction-project-controls-analytics";
  const isProject2 = project.slug === "change-order-rfi-analytics";
  const isProject3 = project.slug === "predictive-project-overrun-model";

  return (
    <>
      <PageHero eyebrow={project.status} title={project.title}>
        <p>{project.subtitle}</p>
      </PageHero>
      <section className="section">
        <div className="container detail-layout">
          <article className="detail-main">
            <div className="detail-intro">
              <StatusBadge status={project.status} />
              <p>{project.problem}</p>
            </div>

            {isComplete && <CompleteCaseStudy />}
            {isProject2 && <Project2CompleteCaseStudy />}
            {isProject3 && <Project3CompleteCaseStudy />}
            {!isComplete && !isProject2 && !isProject3 && <PlannedCaseStudy />}

            <section className="detail-section">
              <h2>Synthetic-data disclosure</h2>
              <p>{project.disclosure}</p>
            </section>
          </article>
          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h2>Project links</h2>
              <div className="stacked-actions">
                <ActionLink href={project.repoUrl} variant="dark" external>
                  GitHub
                </ActionLink>
                <ActionLink href={project.reportUrl} variant="secondary">
                  Report
                </ActionLink>
                <ActionLink href={project.powerBiUrl} variant="ghost" external>
                  Power BI
                </ActionLink>
                <ActionLink href={project.tableauUrl} variant="ghost" external>
                  Tableau
                </ActionLink>
              </div>
            </div>
            <div className="sidebar-card">
              <h2>Tools</h2>
              <div className="chip-grid">
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function CompleteCaseStudy() {
  const sections = [
    ["Executive overview", "A completed end-to-end portfolio analytics case study evaluating early-warning indicators across 75 synthetic construction projects with a $5.831B BAC and $6.587B forecast EAC."],
    ["Business problem", "Cost and schedule stress often becomes visible after the practical window for intervention has narrowed. The study focuses on earlier signals that management can monitor."],
    ["Primary business question", "Which project-controls metrics move first, early enough to intervene before overruns become unavoidable?"],
    ["Stakeholders", "Executive sponsors, project managers, project controls teams, owners, finance reviewers, and operations leaders who need clear risk visibility."],
    ["Methodology", "Ask, Prepare, Process, Analyze, Share, and Act, supported by terminology and practices from CRISP-DM, DMAIC, Microsoft's data-science lifecycle, and PMI project-governance process groups."],
    ["Data model", "The model includes projects, monthly performance, change orders, and RFI logs, with analysis views for project performance, RFI summary, change-order summary, and latest monthly performance."],
    ["Data preparation and cleaning", "The workflow validates data types, deduplicates records, applies quality checks, loads a SQLite database, and documents known limitations rather than hiding them."],
    ["KPIs", "BAC, EAC, VAC, forecast overrun percent, CPI, SPI, approved and pending change orders, contingency utilization, RFI response time, and forecast delay days."],
    ["Analytical results", "The portfolio shows a 13.0% forecast overrun, weighted CPI of 0.884, average delay of 33.7 days, and 50 Red, 13 Yellow, and 12 Green projects."],
  ];

  return (
    <>
      {sections.map(([heading, body]) => (
        <section className="detail-section" key={heading}>
          <h2>{heading}</h2>
          <p>{body}</p>
        </section>
      ))}
      <section className="detail-section">
        <h2>Executive dashboard</h2>
        <Image
          className="case-image"
          src="/case-study/p1-executive-dashboard.png"
          alt="Executive dashboard showing portfolio health, forecast overrun by project type, cost and schedule efficiency, and the top-10 review list"
          width={2400}
          height={1425}
        />
      </section>
      <section className="detail-section">
        <h2>Portfolio health</h2>
        <Image
          className="case-image"
          src="/case-study/portfolio-health-overview.png"
          alt="Portfolio health overview chart from the synthetic construction project-controls case study"
          width={1400}
          height={900}
        />
      </section>
      <section className="detail-section">
        <h2>Operational dashboard</h2>
        <Image
          className="case-image"
          src="/case-study/cpi-spi-trend.png"
          alt="CPI and SPI trend chart for the synthetic construction project-controls portfolio"
          width={1400}
          height={900}
        />
      </section>
      <section className="detail-section">
        <h2>Early-warning relationships</h2>
        <p>
          Contingency burn ratio is the strongest early-warning signal in the synthetic
          dataset. RFI response time has a weaker but meaningful relationship with
          schedule delay, while RFI density does not predict delay in this case study.
        </p>
        <Image
          className="case-image"
          src="/case-study/early-warning-correlations.png"
          alt="Early-warning correlation chart showing relationships among construction project-control metrics"
          width={1400}
          height={900}
        />
      </section>
      {[
        ["Management recommendations", "Track contingency burn from month one, review CPI thresholds before monthly reporting cycles close, separate cost and schedule change-order drivers, and manage RFIs as a systemic workflow constraint."],
        ["Automation architecture", "The repository includes a PowerShell pipeline runner and Python management-alert generator that produces alert outputs from the validated analysis data."],
        ["Limitations", "The data is synthetic, correlations are not causal claims, small subgroups are not generalized, and several retained data-quality gaps are disclosed in the project documentation."],
      ].map(([heading, body]) => (
        <section className="detail-section" key={heading}>
          <h2>{heading}</h2>
          <p>{body}</p>
        </section>
      ))}
    </>
  );
}

function Project2CompleteCaseStudy() {
  const phases = [
    ["Ask", "Complete"],
    ["Prepare", "Complete"],
    ["Process", "Complete"],
    ["Analyze", "Complete"],
    ["Share", "Complete"],
    ["Act", "Complete"],
  ];

  return (
    <>
      <section className="detail-section">
        <h2>Executive overview</h2>
        <p>
          This complete public case study analyzes RFI response performance,
          change-order approval cycles, workflow-event histories, commercial
          exposure, and project-level management priorities across 90 synthetic
          construction projects.
        </p>
        <div className="phase-grid">
          {phases.map(([phase, status]) => (
            <div className="phase-card" key={phase}>
              <span>{phase}</span>
              <strong>{status}</strong>
            </div>
          ))}
        </div>
      </section>
      {[
        ["Business question", "Which change-order causes and RFI workflow conditions create the greatest cost and schedule exposure, and where should management intervene to improve response and approval performance?"],
        ["Data model", "The processed dataset contains 90 clean projects, 3,318 clean RFI records, 1,119 clean change orders, 11,286 clean workflow events, and 677 clean RFI-change links."],
        ["Analytical results", "The synthetic portfolio shows a 12.21-day average RFI response, 45.68% RFI on-time rate, $204.57M approved change value, $88.10M pending exposure, and 29 Red, 48 Yellow, and 13 Green workflow-health statuses."],
        ["Tested relationship", "The strongest tested relationship is between project-average RFI response time and project-average change approval cycle, with Pearson r = 0.817. This is an association, not proof of causation."],
        ["Deliverables", "The public repository includes the final PDF report, Share dashboard workbook, Act workbook, analytical CSV outputs, SQL, Python automation, dashboard images, documentation, synthetic-data license, and citation file."],
      ].map(([heading, body]) => (
        <section className="detail-section" key={heading}>
          <h2>{heading}</h2>
          <p>{body}</p>
        </section>
      ))}
      <section className="detail-section">
        <h2>Executive dashboard</h2>
        <Image
          className="case-image"
          src="/case-study/p2-executive-dashboard.png"
          alt="Executive dashboard showing RFI response performance, commercial exposure by change category, workflow health and the projects needing attention"
          width={2400}
          height={1425}
        />
      </section>
      <section className="detail-section">
        <h2>Workflow bottlenecks</h2>
        <Image
          className="case-image"
          src="/case-study/p2-workflow-analysis.png"
          alt="Workflow analysis dashboard showing the slowest stages, rework loops, tested relationships and approved value by initiating party"
          width={2400}
          height={1425}
        />
      </section>
    </>
  );
}

function Project3CompleteCaseStudy() {
  const phases = [
    ["Ask", "Complete"],
    ["Prepare", "Complete"],
    ["Process", "Complete"],
    ["Analyze", "Complete"],
    ["Share", "Complete"],
    ["Act", "Complete"],
  ];

  return (
    <>
      <section className="detail-section">
        <h2>Executive overview</h2>
        <p>
          This complete public case study predicts final cost overrun of at least
          10 percent and final schedule delay of at least 30 days from early and
          mid-project controls and workflow indicators, using 2,362 clean synthetic
          project snapshots and 40 predictors.
        </p>
        <div className="phase-grid">
          {phases.map(([phase, status]) => (
            <div className="phase-card" key={phase}>
              <span>{phase}</span>
              <strong>{status}</strong>
            </div>
          ))}
        </div>
      </section>
      {[
        ["Business question", "Which early and mid-project indicators best predict material construction cost overruns and schedule delays, and how can management prioritize intervention before the outcomes become unavoidable?"],
        ["Feature lineage", "The 40 predictors combine controls concepts from the first case study, including CPI, SPI, variance, and contingency, with workflow concepts from the second, including RFI backlog, change exposure, approval cycles, and revision loops."],
        ["Validation design", "Models are split by time rather than at random: 1,577 projects from 2019 through 2023 for training, 349 from 2024 for validation, and 436 from 2025 as a future test period. Final outcome fields are excluded from the predictors."],
        ["Model performance", "The cost-overrun champion is a Random Forest with test ROC-AUC 0.899 and PR-AUC 0.774. The schedule-delay champion is a Logistic Regression with test ROC-AUC 0.756 and PR-AUC 0.524."],
        ["Temporal degradation", "Schedule-delay performance declines from validation to the future test period. This is reported as a model-monitoring concern rather than hidden, and it drives the retraining and drift thresholds defined in the Act phase."],
        ["Management output", "Each test project receives a cost probability, a schedule probability, a combined probability, and a Red, Yellow, or Green risk band, producing 188 Red, 138 Yellow, and 110 Green projects for review prioritization."],
        ["Governance", "The Act phase defines a controlled-pilot path with human review, drift monitoring, override logging, retraining triggers, incident controls, and a model card. Production use is not authorized."],
        ["Limitations", "The data is synthetic, the results are not industry benchmarks, the models establish association rather than causation, and every prediction requires professional review before any decision."],
      ].map(([heading, body]) => (
        <section className="detail-section" key={heading}>
          <h2>{heading}</h2>
          <p>{body}</p>
        </section>
      ))}
      <section className="detail-section">
        <h2>Executive model dashboard</h2>
        <Image
          className="case-image"
          src="/case-study/p3-executive-dashboard.png"
          alt="Executive dashboard summarizing predicted cost-overrun and schedule-delay risk across the synthetic construction portfolio"
          width={2400}
          height={1425}
        />
      </section>
      <section className="detail-section">
        <h2>Model performance</h2>
        <Image
          className="case-image"
          src="/case-study/p3-model-performance.png"
          alt="Model performance dashboard showing calibration, model comparison and the confusion matrix for both classifiers"
          width={2400}
          height={1425}
        />
      </section>
    </>
  );
}

function PlannedCaseStudy() {
  return (
    <>
      {[
        ["Proposed business question", "Can early project-controls, workflow, and risk signals estimate the probability of construction cost overruns and schedule delays early enough to support management review?"],
        ["Planned features", "Earned-value indicators, schedule variance patterns, contingency burn, change-order exposure, RFI response behavior, project attributes, and time-based trend features."],
        ["Proposed modeling workflow", "Define target outcomes, engineer features, compare candidate Python models, evaluate calibration and error behavior, and document limitations before sharing any result."],
        ["Planned governance controls", "Synthetic-data disclosure, model-card style documentation, explainability checks, confidence boundaries, data-quality review, and required human approval before any decision support."],
        ["Expected deliverables", "Notebook, reproducible dataset, model comparison, explainability summary, Power BI predictive-risk dashboard, governance checklist, and final portfolio case study."],
      ].map(([heading, body]) => (
        <section className="detail-section" key={heading}>
          <h2>{heading}</h2>
          <p>{body}</p>
        </section>
      ))}
    </>
  );
}
