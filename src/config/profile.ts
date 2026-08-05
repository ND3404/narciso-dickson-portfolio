export const profile = {
  fullName: "Narciso M. Dickson",
  title:
    "PMP-certified project-management professional, construction project-controls analyst, and AI leadership practitioner",
  shortDescriptor: "Project leadership + controls analytics + responsible AI",
  linkedinUrl: "TODO_LINKEDIN_URL",
  githubProfileUrl: "https://github.com/ND3404",
  publicEmail: "info@inprojectmanagement.com",
  inProjectUrl: "https://www.inprojectmanagement.com/",
  inProjectAiUrl: "https://agents.inprojectmanagement.com/",
  portfolioCanonicalUrl: "https://narciso-dickson-portfolio.vercel.app",
  resumeFile: "TODO_APPROVED_PUBLIC_RESUME_FILE",
  powerBiUrl: "TODO_POWER_BI_PORTFOLIO_URL",
  tableauPublicUrl: "TODO_TABLEAU_PUBLIC_URL",
  projectRepositoryUrls: {
    constructionProjectControlsAnalytics:
      "https://github.com/ND3404/construction-project-controls-analytics",
    changeOrderRfiAnalytics:
      "https://github.com/ND3404/construction-change-order-rfi-analytics",
    predictiveProjectOverrunModel: "TODO_PROJECT_3_REPOSITORY_URL",
  },
  reportUrls: {
    constructionProjectControlsAnalytics:
      "/downloads/construction-project-controls-analytics-case-study.pdf",
    changeOrderRfiAnalytics:
      "https://github.com/ND3404/construction-change-order-rfi-analytics/blob/main/reports/Construction_Change_Order_and_RFI_Analytics_Case_Study.pdf",
    predictiveProjectOverrunModel: "TODO_PROJECT_3_REPORT_URL",
  },
};

export type ProjectStatus = "Complete and Public" | "In Development" | "Planned";

export const projects = [
  {
    slug: "construction-project-controls-analytics",
    status: "Complete and Public" as ProjectStatus,
    title: "Construction Project Controls Analytics",
    subtitle: "Early Warning Analysis for Cost and Schedule Performance",
    problem:
      "Project teams often detect cost and schedule stress after intervention options have narrowed. This case study tests which controls metrics move early enough to support management action.",
    tools: ["Excel", "SQL", "Python", "SQLite", "Power BI-ready spec", "Tableau-ready spec"],
    methodology:
      "Ask, Prepare, Process, Analyze, Share, and Act, supported by terminology and practices from CRISP-DM, DMAIC, Microsoft's data-science lifecycle, and PMI project-governance process groups.",
    deliverables: [
      "Synthetic relational construction portfolio dataset",
      "SQL schema, quality checks, views, and analysis queries",
      "Executive report and case-study PDF",
      "Excel analytical workbook and action plan",
      "Dashboard-ready visuals and reporting specifications",
      "Automation script for management alerts",
    ],
    repoUrl: profile.projectRepositoryUrls.constructionProjectControlsAnalytics,
    reportUrl: profile.reportUrls.constructionProjectControlsAnalytics,
    powerBiUrl: profile.powerBiUrl,
    tableauUrl: profile.tableauPublicUrl,
    detailHref: "/projects/construction-project-controls-analytics",
    disclosure:
      "All project, client, cost, schedule, RFI, and change-order data in this case study is synthetic and does not represent actual client performance or confidential records.",
    facts: [
      "75 synthetic projects",
      "$5.831B portfolio BAC",
      "$6.587B forecast EAC",
      "13.0% forecast overrun",
      "Weighted CPI 0.884",
      "Average delay 33.7 days",
      "50 Red, 13 Yellow, 12 Green projects",
    ],
  },
  {
    slug: "change-order-rfi-analytics",
    status: "Complete and Public" as ProjectStatus,
    title: "Construction Change Order and RFI Analytics",
    subtitle:
      "Root-Cause, Cycle-Time, and Impact Analysis for Construction Decision Workflows",
    problem:
      "Change orders and RFIs move through many reviews, handoffs, and approvals. This case study identifies where cycle time, aging, backlog, and handoff patterns create cost and schedule exposure.",
    tools: ["Python", "SQL", "SQLite", "Excel", "Power BI spec", "Tableau spec"],
    methodology:
      "Ask, Prepare, Process, Analyze, Share, and Act, aligned to CRISP-DM, DMAIC, Microsoft's data-science lifecycle, and PMI process groups.",
    deliverables: [
      "90-project synthetic construction dataset",
      "Clean CSV files and SQLite analytical database",
      "RFI and change-order relationship model",
      "Workflow event duration outputs",
      "Power BI and Tableau dashboard specifications",
      "Final report and management recommendations",
    ],
    repoUrl: profile.projectRepositoryUrls.changeOrderRfiAnalytics,
    reportUrl: profile.reportUrls.changeOrderRfiAnalytics,
    powerBiUrl: profile.powerBiUrl,
    tableauUrl: profile.tableauPublicUrl,
    detailHref: "/projects/change-order-rfi-analytics",
    disclosure:
      "Current materials use synthetic public portfolio data for education, portfolio demonstration, and analytical-methodology development.",
    facts: [
      "Ask through Act complete",
      "90 clean projects",
      "3,318 clean RFI records",
      "1,119 clean change orders",
      "$204.57M approved change value",
      "29 Red, 48 Yellow, 13 Green projects",
      "Pearson r = 0.817 tested relationship",
    ],
  },
  {
    slug: "predictive-project-overrun-model",
    status: "Planned" as ProjectStatus,
    title: "Predictive Project Overrun Model",
    subtitle: "Predicting Construction Cost Overruns and Schedule Delays",
    problem:
      "The planned work will explore how early project-controls signals can support responsible prediction of cost-overrun and schedule-delay probability without replacing professional review.",
    tools: ["Python planned", "SQL planned", "Power BI planned", "Model explainability planned"],
    methodology:
      "Planned feature engineering, model comparison, explainability review, dashboarding, and governance controls.",
    deliverables: [
      "Feature engineering notebook",
      "Predictive model comparison",
      "Cost-overrun and delay probability outputs",
      "Power BI predictive-risk dashboard",
      "Governance and human-review checklist",
      "Transparent limitations section",
    ],
    repoUrl: profile.projectRepositoryUrls.predictiveProjectOverrunModel,
    reportUrl: profile.reportUrls.predictiveProjectOverrunModel,
    powerBiUrl: profile.powerBiUrl,
    tableauUrl: profile.tableauPublicUrl,
    detailHref: "/projects/predictive-project-overrun-model",
    disclosure:
      "This project is planned. No model performance, validation statistics, or production readiness is claimed.",
    facts: [
      "Status: Planned",
      "Feature engineering planned",
      "Python predictive modeling planned",
      "Explainability planned",
      "Human review required",
    ],
  },
];

export const siteNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Expertise", href: "/expertise" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const unresolvedPlaceholders = [
  "TODO_LINKEDIN_URL",
  "TODO_APPROVED_PUBLIC_RESUME_FILE",
  "TODO_POWER_BI_PORTFOLIO_URL",
  "TODO_TABLEAU_PUBLIC_URL",
  "TODO_PROJECT_3_REPOSITORY_URL",
  "TODO_PROJECT_3_REPORT_URL",
];
