import Image from "next/image";
import { projects } from "@/config/profile";
import { ActionLink } from "./Actions";
import { PageHero } from "./PageHero";
import { StatusBadge } from "./ProjectCard";

export function ProjectDetail({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) return null;

  const isComplete = project.slug === "construction-project-controls-analytics";
  const isInDevelopment = project.slug === "change-order-rfi-analytics";

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
            {isInDevelopment && <InDevelopmentCaseStudy />}
            {!isComplete && !isInDevelopment && <PlannedCaseStudy />}

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

function InDevelopmentCaseStudy() {
  const phases = [
    ["Ask", "Complete"],
    ["Prepare", "Complete"],
    ["Process", "Complete"],
    ["Analyze", "Next"],
    ["Share", "Not started"],
    ["Act", "Not started"],
  ];

  return (
    <>
      <section className="detail-section">
        <h2>Current stage</h2>
        <p>
          The local repository verifies the Process phase as passed. Clean CSV files,
          a SQLite analytical database, SQL views, workflow duration outputs, audit
          logs, and validation reports are ready for Analyze.
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
        ["Proposed business question", "Which change-order causes and RFI workflow conditions create the greatest cost and schedule exposure, and where should management intervene to improve response and approval performance?"],
        ["Verified process results", "The processed dataset contains 90 clean projects, 3,318 clean RFI records, 1,119 clean change orders, 11,286 clean workflow events, 677 clean RFI-change links, 28 duplicate removals, 18 quarantined rows, 226 cleaning-log actions, and 22 of 22 quality checks passed."],
        ["Current deliverables", "Project charter, methodology alignment, generated raw files, clean files, SQLite database, SQL schema and views, data dictionary, cleaning log, quarantine records, row reconciliation, and process validation reports."],
        ["Next analysis scope", "Analyze RFI response time, aging, backlog, workflow handoffs, change-order root causes, RFI-to-change relationships, and cost and schedule impact patterns."],
      ].map(([heading, body]) => (
        <section className="detail-section" key={heading}>
          <h2>{heading}</h2>
          <p>{body}</p>
        </section>
      ))}
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
