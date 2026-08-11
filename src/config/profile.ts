/**
 * Canonical professional profile.
 *
 * Consolidated from three résumé sources into ONE public profile. Rules applied:
 *  - 15+ years used consistently (sources said both 10+ and 15+)
 *  - PUBLINTER shown as 2011–2021 (sources disagreed: Dec 2021 vs May 2022;
 *    the later date also overlapped the In Project LLC start, so the earlier,
 *    non-contradictory date is used)
 *  - Each metric appears once, in its most persuasive context
 *  - No credential IDs, phone number, street address or ZIP anywhere public
 *  - Location limited to Lehi, Utah, United States
 *  - Earlier 2003–2010 roles framed as commercial, never as construction
 *
 * Every external URL lives here. Anything unknown stays a TODO_ value and the
 * UI renders a disabled state rather than a dead "#" link.
 */

export const profile = {
  fullName: "Narciso M. Dickson",
  credentials: "MS, PMP®",
  title:
    "Construction Project/Program Management · Project Controls · Data Analytics · Responsible AI Leadership",
  recruiterHeadline:
    "PMP® Construction Project/Program Leader · Project Controls · Data Analytics · Responsible AI",
  shortDescriptor: "Project leadership + controls analytics + responsible AI",
  location: "Lehi, Utah, United States",
  experienceYears: "15+",
  languages: ["English", "Spanish"],

  linkedinUrl: "https://www.linkedin.com/in/narcisodickson",
  githubProfileUrl: "https://github.com/ND3404",
  publicEmail: "ndickson@inprojectmanagement.com",
  inProjectUrl: "https://www.inprojectmanagement.com/",
  inProjectAiUrl: "https://agents.inprojectmanagement.com/",
  /**
   * Custom domain, canonical since 2026-08-08. The vercel.app URL still serves
   * the same deployment, so old links keep working; this value decides which
   * host search engines and structured data treat as authoritative.
   */
  portfolioCanonicalUrl: "https://narcisodickson.com",

  /** One canonical résumé download, derived from the PM/Data/Web source. */
  resumeUrl: "/resume/Narciso_M_Dickson_Resume.pdf",
  resumeFormat: "PDF",

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
} as const;

/** A value that has not been supplied yet, so the UI can degrade gracefully. */
export const isPending = (value: string) => value.startsWith("TODO_");

// ---------------------------------------------------------------- positioning

/** Short form for the home page. */
export const positioning =
  "Narciso M. Dickson, MS, PMP®, is a construction project and program manager with 15+ years delivering residential, commercial, and renovation projects across multimillion-dollar portfolios. As the founder of In Project LLC, he combines that construction leadership foundation with Excel, Power BI, SQL, Python, construction analytics, predictive modeling, and responsible AI governance to improve project visibility and support timely, evidence-based decisions.";

/** Expanded form for About and Résumé. Deliberately not identical to the above. */
export const positioningLong = [
  "Narciso M. Dickson, MS, PMP®, is a construction project and program manager with 15+ years delivering residential, commercial, and renovation projects across multimillion-dollar portfolios. His experience spans the full lifecycle: preconstruction planning, budgets, schedules, procurement, contracts, change orders, RFIs, risk, quality, and closeout, leading multidisciplinary teams and reporting to owners and executive stakeholders.",
  "As Founder of In Project LLC, he combines construction project-management experience with project controls and data analytics to improve visibility, decision-making, and project performance. His recent portfolio includes project-controls analytics, RFI and change-order workflow analytics, and predictive cost-overrun and schedule-delay modeling using Excel, SQL, Python, Power BI, Tableau, and responsible machine-learning methods.",
] as const;

/** Verified credibility markers. Not client results — do not present as outcomes. */
export const trustMarkers = [
  "PMP® Certified",
  "Master's in Project Management",
  "15+ Years of Project/Program Management",
  "Construction Project Controls",
  "Data Analytics and BI",
  "Responsible AI Leadership",
] as const;

/** Headline numbers across the three published case studies. */
export const portfolioMetrics = [
  ["2,527", "Synthetic projects analyzed"],
  ["$5.83B", "Portfolio value modeled"],
  ["0.899", "Best model ROC-AUC"],
  ["3", "End-to-end case studies"],
] as const;

export const audiencePaths = [
  {
    eyebrow: "Hiring and recruitment",
    title: "Recruiters and hiring managers",
    body: "Project leadership, project controls, analytics, and AI-enabled management roles, backed by three complete public case studies.",
    cta: "Review Experience",
    href: "/about",
  },
  {
    eyebrow: "Construction and institutional",
    title: "Construction companies and owners",
    body: "Controls, workflow visibility, executive dashboards, risk analysis, and decision support for portfolios under pressure.",
    cta: "Explore Capabilities",
    href: "/about#capabilities",
  },
  {
    eyebrow: "Consulting and partnerships",
    title: "Consulting and partnerships",
    body: "In Project LLC construction analytics, dashboards, reporting workflows, and In Project AI collaboration.",
    cta: "Discuss an Opportunity",
    href: "/#contact",
  },
] as const;

// ---------------------------------------------------------------- experience

export const timeline = [
  {
    period: "January 2022 – Present",
    role: "Founder & Senior Construction Project Manager",
    org: "In Project LLC — Lehi, Utah",
    kind: "Construction Project Controls · Analytics · Digital Solutions",
    summary:
      "Leads construction project planning and controls across multiple concurrent assignments while building the analytics and decision-support practice behind In Project.",
    points: [
      "Direct full construction project lifecycles for residential, commercial, and renovation projects, integrating scope, budget, schedule, procurement, risk, change management, reporting, and closeout",
      "Develop project-control frameworks, KPI reporting, risk registers, change-control workflows, and owner-ready dashboards to improve visibility and accountability",
      "Build Excel and Power BI dashboards for cost, schedule, risk, change orders, RFIs, and executive project reporting",
      "Coordinate stakeholders, vendors, consultants, and project teams while supporting procurement, contract negotiations, invoices, changes, and project governance",
      "Developed an integrated construction analytics portfolio covering project controls, RFI and change-order workflows, and predictive overrun modeling using Python, SQL, SQLite, Excel, Power BI, Tableau, and machine-learning methods",
    ],
    /** Shown once, on the Résumé page only, so the metrics are not repeated. */
    outcomes: [
      "10+ concurrent projects annually",
      "30% reduction in project-preparation time",
      "25% expense reduction through vendor and contract negotiation",
    ],
  },
  {
    period: "2011 – 2021",
    role: "Project/Program Manager",
    org: "PUBLINTER, Arq. y Sup. SRL — Santiago, Dominican Republic",
    kind: "Residential, commercial, and renovation portfolios",
    summary:
      "Led multidisciplinary construction and design delivery across a large annual project load.",
    points: [
      "Managed a $30M+ portfolio of residential, commercial, and renovation construction and design projects",
      "Coordinated 15+ multidisciplinary teams across 20+ annual projects",
      "Improved preparation efficiency by 25% through standardized frameworks and scheduling",
      "Increased stakeholder satisfaction by 30% through clear reporting and progress tracking",
      "Applied Agile, Waterfall, and Hybrid delivery to match project complexity",
      "Implemented risk management and quality assurance frameworks; mentored junior staff",
    ],
  },
  {
    period: "2003 – 2010",
    role: "Earlier Commercial and Client Leadership",
    org: "McGraw-Hill · Grupo SM · Grupo Santillana — Santiago, Dominican Republic",
    kind: "Commercial and client advisory",
    summary:
      "Consultative client leadership that established the executive communication, negotiation, and stakeholder skills later applied to construction delivery. These were commercial roles, not construction roles.",
    points: [
      "Increased sales by up to 35% and developed relationships across 150+ educational institutions",
      "Led events, training, and product launches, positioning the businesses as market leaders",
      "Negotiated contracts and service agreements with customers, agents, and brokers",
    ],
  },
] as const;

export const education = [
  {
    credential: "Master of Science in Project Management",
    org: "PUCMM, Santiago, Dominican Republic / EOI, Madrid, Spain",
    period: "2015 – 2017",
  },
  {
    credential: "Bachelor of Science in Business Administration",
    org: "Universidad Abierta para Adultos (UAPA), Santiago, Dominican Republic",
    period: "2007 – 2013",
  },
] as const;

/**
 * Credential IDs are deliberately omitted from the public site.
 * "Agile Hybrid Project" is the wording used in the approved résumé source; it is
 * kept verbatim rather than expanded to a title the source does not state.
 */
export const certifications = [
  { name: "Project Management Professional (PMP)®", org: "Project Management Institute" },
  { name: "Google Data Analytics Professional Certificate", org: "Google" },
  { name: "Google Project Management Specialization", org: "Google" },
  { name: "Construction Management Specialization", org: "Columbia University / Coursera" },
  { name: "Agile Hybrid Project", org: "Project Management Institute" },
] as const;

export const targetRoles = [
  "Senior Construction Project Manager",
  "Project/Program Manager",
  "Project Controls Manager or Lead",
  "Construction Analytics or BI Project Lead",
  "PMO, Governance, or Transformation Lead",
  "Data Analytics Project Manager",
  "AI-enabled Project Management or Responsible AI Program Lead",
  "Construction consulting and owner-representative engagements",
] as const;

export const competencies = [
  {
    title: "Project and program leadership",
    items: [
      "Full project lifecycle",
      "Scope and schedule management",
      "Predictive, Agile, Waterfall, Hybrid",
      "Multidisciplinary team leadership",
      "Executive communication",
    ],
  },
  {
    title: "Construction project controls and scheduling",
    items: [
      "Cost and budget control",
      "Earned Value Management",
      "CPI, SPI, EAC, variance analysis",
      "Primavera P6",
      "Microsoft Project",
    ],
  },
  {
    title: "Commercial, contracts, procurement, and change",
    items: [
      "RFQ and RFP processes",
      "Contract negotiation",
      "Vendor management",
      "Change orders and invoices",
      "Project closeout",
    ],
  },
  {
    title: "Risk, quality, governance, and stakeholders",
    items: [
      "Risk management",
      "Quality assurance",
      "Governance and reporting",
      "Stakeholder engagement",
      "Lessons learned and mentoring",
    ],
  },
  {
    title: "Data analytics, dashboards, and predictive modeling",
    items: [
      "Excel",
      "SQL and SQLite",
      "Python",
      "Power BI",
      "Tableau",
      "Relational modeling and validation",
      "Descriptive, diagnostic, predictive analysis",
    ],
  },
  {
    title: "Responsible AI and digital solutions",
    items: [
      "AI use-case definition",
      "Model cards and human review",
      "Drift monitoring and overrides",
      "Web design and local SEO",
      "Bilingual English and Spanish",
    ],
  },
] as const;

/** Four capability areas, shown in About. Replaces the standalone Expertise page. */
export const capabilities = [
  {
    title: "Project and Program Leadership",
    items: [
      "Project lifecycle and governance",
      "Scope, schedule, budget, risk, quality, and stakeholder management",
      "Agile, Waterfall, and Hybrid delivery",
      "Multidisciplinary team leadership",
    ],
  },
  {
    title: "Construction Project Controls",
    items: [
      "Cost and schedule controls",
      "CPI, SPI, EAC, variance, and contingency",
      "Procurement, contracts, RFIs, submittals, and change orders",
      "Forecasting, reporting, and closeout",
    ],
  },
  {
    title: "Construction Data Analytics",
    items: [
      "Excel, Power BI, SQL, SQLite, Python, and Tableau",
      "Data preparation and validation",
      "Dashboard development",
      "Descriptive, diagnostic, and predictive analytics",
    ],
  },
  {
    title: "Responsible AI and Digital Solutions",
    items: [
      "AI-enabled project workflows",
      "Predictive-risk concepts",
      "Data-quality and leakage controls",
      "Model cards, human review, overrides, and monitoring",
      "In Project AI product and workflow leadership",
    ],
  },
] as const;

/** Condensed stack summary for the landing page. */
export const techStack = [
  {
    title: "Analytics and engineering",
    items: ["Python", "pandas", "scikit-learn", "SQL", "SQLite", "Excel modeling",
            "Data validation", "Relational design"],
  },
  {
    title: "Business intelligence",
    items: ["Power BI", "Tableau", "Executive dashboards", "KPI design",
            "Report automation", "Data storytelling"],
  },
  {
    title: "Project controls and governance",
    items: ["Earned Value Management", "CPI / SPI", "Primavera P6", "Microsoft Project",
            "Change management", "RFI workflow", "Model governance", "PMP®"],
  },
] as const;

/** Four premium capability areas for the Expertise page. */
export const expertiseAreas = [
  {
    title: "Project and Program Leadership",
    body: "Initiation through closeout, with the delivery method chosen to fit the work rather than the fashion.",
    items: [
      "Project initiation through closeout",
      "Agile, Waterfall, and Hybrid delivery",
      "Multidisciplinary team leadership",
      "Scope, procurement, risk, and change management",
      "Stakeholder coordination",
      "Executive communication and governance",
    ],
  },
  {
    title: "Construction and Project Controls",
    body: "The measurement layer that tells leadership what is really happening to cost and schedule.",
    items: [
      "Cost and schedule control",
      "Earned Value Management",
      "CPI, SPI, EAC, and variance analysis",
      "RFIs, submittals, and change orders",
      "Contingency and forecast monitoring",
      "Workflow and backlog analysis",
      "Executive and owner reporting",
    ],
  },
  {
    title: "Data Analytics and Business Intelligence",
    body: "Turning project-control records into validated, decision-ready analysis and dashboards.",
    items: [
      "Excel, SQL, and SQLite",
      "Python",
      "Power BI and Tableau",
      "Data preparation and validation",
      "Relational modeling",
      "Descriptive, diagnostic, and predictive analysis",
      "Dashboard development and analytical storytelling",
    ],
  },
  {
    title: "AI Leadership and Model Governance",
    body: "Predictive capability applied with the controls that make it safe to rely on.",
    items: [
      "AI business use-case definition",
      "AI-enabled project workflows",
      "Prompt and agent workflow design",
      "Predictive-risk concepts",
      "Data quality and leakage controls",
      "Model cards, human review, and overrides",
      "Drift monitoring and responsible AI governance",
      "In Project AI product leadership",
    ],
  },
] as const;

// ---------------------------------------------------------------- projects

export type ProjectStatus = "Complete and Public" | "In Development" | "Planned";

/**
 * Where a case study's data comes from. Only "synthetic" carries a disclosure,
 * so future work using real data does not inherit a claim that is untrue of it.
 */
export type DataType = "synthetic" | "real";

export const projects = [
  {
    slug: "construction-project-controls-analytics",
    dataType: "synthetic" as DataType,
    stage: "Descriptive and early-warning analytics",
    status: "Complete and Public" as ProjectStatus,
    title: "Construction Project Controls Analytics",
    subtitle: "Early Warning Analysis for Cost and Schedule Performance",
    problem:
      "Project teams often detect cost and schedule stress after intervention options have narrowed. This case study tests which controls metrics move early enough to support management action.",
    scale: "75 synthetic projects · $5.83B portfolio · 2022–2025",
    tools: ["Excel", "SQL", "SQLite", "Python", "Power BI spec", "Tableau spec"],
    methodology:
      "Ask, Prepare, Process, Analyze, Share, and Act, supported by CRISP-DM, DMAIC, Microsoft's data-science lifecycle, and PMI project-governance process groups.",
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
    detailHref: "/projects/construction-project-controls-analytics",
    thumb: "/case-study/p1-executive-dashboard.png",
    thumbAlt:
      "Executive dashboard showing portfolio health, forecast overrun by project type, cost and schedule efficiency, and the top-10 review list",
    disclosure:
      "All project, client, cost, schedule, RFI, and change-order data in this case study is synthetic and does not represent actual client performance or confidential records.",
    facts: [
      "75 synthetic projects",
      "$5.83B portfolio BAC",
      "13.0% forecast overrun",
      "Weighted CPI 0.884",
      "Average delay 33.7 days",
      "50 Red, 13 Yellow, 12 Green",
    ],
    results: [
      ["Synthetic projects", "75"],
      ["Portfolio BAC", "$5,831,436,600"],
      ["Forecast EAC", "$6,586,989,966"],
      ["Forecast overrun", "13.0%"],
      ["Weighted CPI", "0.884"],
      ["Weighted SPI", "0.987"],
      ["Average forecast delay", "33.7 days"],
      ["Project health", "50 Red / 13 Yellow / 12 Green"],
      ["Contingency burn vs forecast overrun", "Pearson r = 0.901"],
      ["RFI response vs schedule delay", "Pearson r = 0.517"],
    ],
    /** Headline tiles for the dashboard summary. */
    kpis: [
      ["13.0%", "Forecast overrun"],
      ["0.884", "Weighted CPI"],
      ["33.7 d", "Average delay"],
      ["50 / 75", "Projects at Red"],
    ],
    /** What the analysis concluded, in decision terms. */
    conclusions: [
      {
        title: "Contingency burn is the earliest reliable warning",
        body: "It explains 81% of the variance in final overrun and is measurable from month one — well before CPI crosses a reporting threshold. If one number gets watched weekly, this is the one.",
      },
      {
        title: "A healthy schedule index can hide a late project",
        body: "Weighted SPI sits at 0.987 while the average project still finishes 33.7 days late. SPI converges to 1.0 as work completes regardless of the finish date, so delay has to be tracked in days.",
      },
      {
        title: "How fast RFIs are answered matters; how many there are does not",
        body: "Response time tracks with schedule delay (r = 0.517) while RFI density does not (r = -0.058). The constraint is turnaround, not volume — which points at process, not workload.",
      },
    ],
  },
  {
    slug: "construction-change-order-rfi-analytics",
    dataType: "synthetic" as DataType,
    stage: "Diagnostic workflow analytics",
    status: "Complete and Public" as ProjectStatus,
    title: "Construction Change Order and RFI Analytics",
    subtitle:
      "Root-Cause, Cycle-Time, and Impact Analysis for Construction Decision Workflows",
    problem:
      "Change orders and RFIs move through many reviews, handoffs, and approvals. This case study identifies where cycle time, aging, backlog, and handoff patterns create cost and schedule exposure.",
    scale: "90 synthetic projects · 3,318 RFIs · 1,119 change orders · 2022–2025",
    tools: [
      "Excel",
      "SQL",
      "SQLite",
      "Python",
      "Statistical analysis",
      "Power BI spec",
      "Tableau spec",
    ],
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
    detailHref: "/projects/construction-change-order-rfi-analytics",
    thumb: "/case-study/p2-executive-dashboard.png",
    thumbAlt:
      "Executive dashboard showing RFI response performance, commercial exposure by change category, workflow health, and the projects needing attention",
    disclosure:
      "All projects, organizations, people, budgets, schedules, RFIs, change orders, workflow events, and performance records in this case study are synthetic and must not be represented as actual client, company, or industry-benchmark information.",
    facts: [
      "90 synthetic projects",
      "3,318 RFI records",
      "1,119 change orders",
      "12.21-day average RFI response",
      "$204.57M approved change value",
      "29 Red, 48 Yellow, 13 Green",
      "Pearson r = 0.817 tested relationship",
    ],
    results: [
      ["Synthetic construction projects", "90"],
      ["RFIs analyzed", "3,318"],
      ["Change orders analyzed", "1,119"],
      ["Average RFI response", "12.21 days"],
      ["RFI on-time rate", "45.7%"],
      ["Approved change value", "$204.57M"],
      ["Pending change exposure", "$88.10M"],
      ["Average change approval cycle", "28.91 days"],
      ["Project workflow health", "29 Red / 48 Yellow / 13 Green"],
      ["RFI response vs approval cycle", "Pearson r = 0.817"],
    ],
    kpis: [
      ["12.21 d", "Avg RFI response"],
      ["45.7%", "RFI on-time rate"],
      ["$204.57M", "Approved change value"],
      ["29 / 90", "Projects at Red"],
    ],
    conclusions: [
      {
        title: "RFI response and change approval are one system, not two",
        body: "Projects slow at answering RFIs are the same projects slow at approving changes (r = 0.817, the strongest tested relationship). Fixing them separately treats one problem twice.",
      },
      {
        title: "Rework, not review, is where the time goes",
        body: "Change orders returned for revision account for the largest single block of accumulated stage time. The delay is not careful review — it is the same document going round again.",
      },
      {
        title: "Owner decision speed sets the pace of everything downstream",
        body: "Slow-decision projects average 16.45 response days and 26.3% on-time, against 10.4 days and 52.8% where decisions are fast. The owner's cadence, not the contractor's, is the binding constraint.",
      },
    ],
  },
  {
    slug: "predictive-construction-project-overrun-model",
    dataType: "synthetic" as DataType,
    stage: "Predictive early-warning modeling",
    status: "Complete and Public" as ProjectStatus,
    title: "Predictive Construction Project Overrun Model",
    subtitle:
      "Early-Warning Classification and Regression for Cost Overruns and Schedule Delays",
    problem:
      "Cost and schedule outcomes are usually confirmed too late to change them. This case study tests which early and mid-project controls and workflow indicators predict material overruns and delays while intervention is still possible.",
    scale: "2,362 clean modeling projects · 40 predictors · 2019–2025",
    tools: [
      "Python",
      "pandas and NumPy",
      "scikit-learn",
      "SQL and SQLite",
      "Excel",
      "Power BI spec",
      "Tableau spec",
    ],
    methodology:
      "Ask, Prepare, Process, Analyze, Share, and Act with a time-based train, validation, and test split, calibration, permutation importance, segment performance, and a model card.",
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
    detailHref: "/projects/predictive-construction-project-overrun-model",
    thumb: "/case-study/p3-executive-dashboard.png",
    thumbAlt:
      "Executive model dashboard showing predicted risk bands, champion model performance, and the highest predicted-risk projects",
    disclosure:
      "All projects, organizations, budgets, schedules, workflow records, and outcomes in this case study are synthetic. Model results are portfolio demonstrations, not industry benchmarks.",
    facts: [
      "2,362 clean modeling projects",
      "40 predictors",
      "Time-based 2019–2025 split",
      "Cost ROC-AUC 0.899, PR-AUC 0.774",
      "Schedule ROC-AUC 0.756, PR-AUC 0.524",
      "188 Red, 138 Yellow, 110 Green",
      "Human review required before action",
    ],
    results: [
      ["Clean modeling projects", "2,362"],
      ["Predictors", "40"],
      ["Training projects, 2019–2023", "1,577"],
      ["Validation projects, 2024", "349"],
      ["Test projects, 2025", "436"],
      ["Cost-overrun test ROC-AUC", "0.899"],
      ["Cost-overrun test PR-AUC", "0.774"],
      ["Schedule-delay test ROC-AUC", "0.756"],
      ["Schedule-delay test PR-AUC", "0.524"],
      ["Test risk bands", "188 Red / 138 Yellow / 110 Green"],
    ],
    kpis: [
      ["0.899", "Cost ROC-AUC"],
      ["0.756", "Schedule ROC-AUC"],
      ["2,362", "Projects modeled"],
      ["188 / 436", "Flagged Red"],
    ],
    conclusions: [
      {
        title: "Cost overrun is predictable early; schedule delay is harder",
        body: "The cost model reaches 0.899 ROC-AUC on a future test year. The schedule model reaches 0.756 and falls further from validation to test — useful for triage, not for commitments.",
      },
      {
        title: "The schedule model degrades over time, and that is reported",
        body: "Performance drops between the 2024 validation year and the 2025 test year. That decline drives the retraining triggers and drift thresholds rather than being smoothed out of the results.",
      },
      {
        title: "The output is a review queue, not a decision",
        body: "Each project gets a probability and a Red/Yellow/Green band so scarce review time goes where risk is concentrated. A qualified professional confirms or overrides every one; production use is not authorized.",
      },
    ],
  },
] as const;

export type Project = (typeof projects)[number];

/** Redirects from the previous slugs so existing external links keep working. */
export const legacyProjectSlugs: Record<string, string> = {
  "change-order-rfi-analytics": "construction-change-order-rfi-analytics",
  "predictive-project-overrun-model": "predictive-construction-project-overrun-model",
};

/**
 * Main navigation. Expertise and Résumé are folded into About; Contact is a
 * home-page section. Portfolio is the public name for the case-study work.
 */
export const siteNav = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
];

export const unresolvedPlaceholders = [
  "TODO_POWER_BI_PORTFOLIO_URL",
  "TODO_TABLEAU_PUBLIC_URL",
];
