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
    predictiveProjectOverrunModel:
      "https://github.com/ND3404/predictive-construction-project-overrun-model",
  },
  reportUrls: {
    constructionProjectControlsAnalytics:
      "/downloads/construction-project-controls-analytics-case-study.pdf",
    changeOrderRfiAnalytics:
      "https://github.com/ND3404/construction-change-order-rfi-analytics/blob/main/reports/Construction_Change_Order_and_RFI_Analytics_Case_Study.pdf",
    predictiveProjectOverrunModel:
      "https://github.com/ND3404/predictive-construction-project-overrun-model/blob/main/reports/Predictive_Construction_Project_Overrun_Model_Case_Study.pdf",
  },
};

export type ProjectStatus = "Complete and Public" | "In Development" | "Planned";

/** Headline results across the published case studies, for the landing page. */
export const portfolioMetrics = [
  ["2,527", "Synthetic projects analyzed"],
  ["$5.83B", "Portfolio value modeled"],
  ["0.899", "Best model ROC-AUC"],
  ["3", "End-to-end case studies"],
] as const;

export const techStack = [
  {
    title: "Analytics and engineering",
    items: ["Python", "pandas", "scikit-learn", "SQL", "SQLite", "Excel modeling",
            "Data validation", "Relational design"],
  },
  {
    title: "Business intelligence",
    items: ["Power BI", "Tableau", "Executive dashboards", "KPI design",
            "matplotlib", "Report automation", "Data storytelling"],
  },
  {
    title: "Project controls and governance",
    items: ["Earned Value Management", "CPI / SPI", "Change management", "RFI workflow",
            "Risk registers", "Model governance", "Responsible AI", "PMP"],
  },
] as const;

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
    thumb: "/case-study/p1-executive-dashboard.png",
    thumbAlt: "Executive dashboard showing portfolio health, forecast overrun by project type and the top-10 review list",
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
    thumb: "/case-study/p2-executive-dashboard.png",
    thumbAlt: "Executive dashboard showing RFI response performance, commercial exposure by change category and workflow health",
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
    status: "Complete and Public" as ProjectStatus,
    title: "Predictive Construction Project Overrun Model",
    subtitle: "Early-Warning Classification and Regression for Cost Overruns and Schedule Delays",
    problem:
      "Cost and schedule outcomes are usually confirmed too late to change them. This case study tests which early and mid-project controls and workflow indicators predict material overruns and delays while intervention is still possible.",
    tools: ["Python", "scikit-learn", "SQL", "SQLite", "Excel", "Power BI spec", "Tableau spec"],
    methodology:
      "Ask, Prepare, Process, Analyze, Share, and Act, aligned to CRISP-DM, DMAIC, Microsoft's data-science lifecycle, and PMI process groups, with a time-based train, validation, and test split.",
    deliverables: [
      "Synthetic relational dataset with generation, cleaning, and validation pipeline",
      "Classification and regression models with calibration and feature importance",
      "Scoring and monitoring automation with a runnable sample input",
      "Executive, risk, performance, and feature-driver dashboards",
      "Model card, governance framework, and controlled-pilot roadmap",
      "Final case-study report, Excel workbooks, and SQL",
    ],
    repoUrl: profile.projectRepositoryUrls.predictiveProjectOverrunModel,
    reportUrl: profile.reportUrls.predictiveProjectOverrunModel,
    powerBiUrl: profile.powerBiUrl,
    tableauUrl: profile.tableauPublicUrl,
    detailHref: "/projects/predictive-project-overrun-model",
    thumb: "/case-study/p3-executive-dashboard.png",
    thumbAlt: "Executive model dashboard showing predicted risk bands, champion model performance and the highest-risk projects",
    disclosure:
      "All projects, organizations, budgets, schedules, workflow records, and outcomes in this case study are synthetic. Model results are portfolio demonstrations, not industry benchmarks, and the model is not authorized for production use.",
    facts: [
      "Ask through Act complete",
      "2,362 clean modeling projects",
      "40 predictors, time-based split",
      "Cost ROC-AUC 0.899, PR-AUC 0.774",
      "Schedule ROC-AUC 0.756, PR-AUC 0.524",
      "188 Red, 138 Yellow, 110 Green test projects",
      "Human review required before action",
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
];
