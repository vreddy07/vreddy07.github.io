// ---------------------------------------------------------------
// EDIT THIS FILE to update your portfolio content.
// Components read from here — you shouldn't need to touch JSX.
// ---------------------------------------------------------------

export const profile = {
  name: 'Vijayanth Reddy Sandhi',
  handle: 'vijayanth.sandhi',
  eyebrow: 'Senior Full Stack Software Engineer · Indianapolis, IN',
  // {accent} marks the teal-highlighted phrase in the hero headline
  headline: 'Building enterprise platforms with {.NET, Angular & Azure} — and the AI systems that come next.',
  lede:
    'Ten years shipping .NET Core, Angular, and Blazor applications on Azure — from complex data-driven workflow platforms to cloud services at enterprise scale. Now extending that foundation into LLM evaluation, observability, and agentic pipelines.',
  email: 'vijayaccess4.net@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vijay-reddy-5a60bb10b/',
  github: 'https://github.com/vreddy07',
};

export const about = {
  paragraphs: [
    "I'm a senior full stack engineer specializing in the Microsoft ecosystem — .NET Core APIs, Entity Framework Core, SQL Server, Angular, and Blazor — with deep production experience on Azure, Kubernetes, and Docker.",
    "My career has been spent on complex, high-stakes enterprise systems: data-intensive workflow platforms, licensing and compliance applications, and accessibility-compliant public sector software. I care about software that's correct, testable, and maintainable — the kind businesses run on every day.",
    "I'm currently building toward AI platform engineering: LLM evaluation frameworks, observability with OpenTelemetry and Langfuse, and agentic workflows. My conviction is that the next generation of enterprise software needs engineers who understand both production systems and how to make AI reliable inside them.",
  ],
  facts: [
    { label: 'Location', value: 'Indianapolis, Indiana' },
    { label: 'Experience', value: '10 years, full stack' },
    { label: 'Education', value: 'M.S. Computer Science — 4.0 GPA' },
    { label: 'Focus', value: 'Enterprise .NET · Azure · AI platforms' },
  ],
};

export const skillGroups = [
  {
    title: 'Backend',
    skills: [
      { name: '.NET Core / C#', hi: true },
      { name: 'ASP.NET Web API', hi: true },
      { name: 'Entity Framework Core' },
      { name: 'SQL Server' },
      { name: 'FastEndpoints' },
      { name: 'Microservices' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'Angular 20', hi: true },
      { name: 'Blazor', hi: true },
      { name: 'TypeScript' },
      { name: 'PrimeNG' },
      { name: 'MudBlazor' },
      { name: 'RxJS' },
      { name: 'WCAG 2.2 / Accessibility' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Azure', hi: true },
      { name: 'Kubernetes' },
      { name: 'Docker' },
      { name: 'Azure DevOps' },
      { name: 'CI/CD Pipelines' },
    ],
  },
  {
    title: 'Testing',
    skills: [
      { name: 'xUnit' },
      { name: 'NSubstitute / Moq' },
      { name: 'FluentAssertions' },
      { name: 'Jasmine / Karma' },
    ],
  },
  {
    title: 'AI & Emerging',
    skills: [
      { name: 'LLM Integration', hi: true },
      { name: 'Agentic Pipelines (MCP)' },
      { name: 'Prompt Engineering' },
      { name: 'OpenTelemetry' },
      { name: 'Python' },
      { name: 'UiPath / RPA' },
    ],
  },
];

export const projects = [
  {
    title: 'Enterprise Workflow Platform',
    description:
      'Large-scale .NET Core + Angular application managing complex, data-intensive operational workflows: drag-and-drop process tooling, batch job orchestration, third-party device and service integrations, and validation-heavy business rules — with full test coverage across the stack.',
    stack: '.NET Core · Angular 20 · EF Core · SQL Server · Azure',
    link: null, // professional work — no public repo
    linkText: 'Professional work — details on request',
  },
  {
    title: 'Agentic Job-Search Pipeline',
    description:
      'Local-first agentic automation built on Claude Desktop with Filesystem, Apify, and Playwright MCP servers — scraping listings, tailoring resumes against job descriptions, and orchestrating multi-step workflows end to end.',
    stack: 'Claude · MCP · Playwright · Python',
    link: 'https://github.com/YOURUSERNAME', // ← replace with real repo
    linkText: 'GitHub repo →',
  },
  {
    title: 'LLM Evaluation Framework',
    description:
      'An evaluation harness for testing LLM output quality, regression-safety, and prompt robustness — with structured metrics, tracing, and observability hooks. In active development as part of a portfolio of AI reliability tooling.',
    stack: 'Python · Langfuse · OpenTelemetry',
    link: 'https://github.com/YOURUSERNAME', // ← replace with real repo
    linkText: 'GitHub repo →',
  },
  {
    title: 'Licensing & Compliance Platform',
    description:
      'Blazor application for license and credential management: organization user administration, single sign-on identity integration, email validation endpoints, and Excel-driven dynamic form configuration.',
    stack: 'Blazor · MudBlazor · FastEndpoints · Azure',
    link: null,
    linkText: 'Professional work — details on request',
  },
];

export const experience = [
  {
    when: 'Oct 2023 — Present',
    role: 'Senior Full Stack Software Engineer',
    org: 'Insight Global',
    location: 'Indianapolis, IN',
    stack: 'ASP.NET Core · C# · SQL Server · Kafka · Azure · Docker',
    highlights: [
      'Lead technical design, development, and support on a large enterprise claims platform (ASP.NET Core, C#, SQL Server) that integrates with half a dozen upstream state systems — authored technical designs, led design reviews, and worked cross-system interdependencies with minimal guidance.',
      'Translate business requirements from Business Systems Analysts and agency stakeholders into maintainable technical solutions; help define acceptance criteria and support user acceptance testing each release.',
      'Production support for Kafka-based event streams feeding the claims platform — monitored consumer lag, replayed failed messages, and resolved broker/consumer issues during incident windows.',
      'Diagnose and resolve complex production issues by identifying root causes across services, queues, and SQL; brought one critical API path from ~220ms down to under 100ms with no schema change.',
      'Own release packaging, implementation plans, rollback scripts, and operational runbooks; kept production upgrades boring (the good kind).',
      'Containerized .NET services with Docker for consistent dev/test/prod parity, wired into CI/CD pipelines on Azure DevOps.',
      'Integrated Azure OpenAI LLM APIs into .NET services for AI-assisted automation and natural-language text processing; use Copilot and Claude day-to-day for AI-assisted development.',
      'Mentor mid-level engineers through pairing, peer code reviews, and architecture walkthroughs; take on-call rotations and after-hours implementation windows for critical systems.',
    ],
  },
  {
    when: 'Mar 2020 — Sep 2023',
    role: 'Senior Software Engineer',
    org: 'Indiana Department of Transportation',
    location: 'Indianapolis, IN',
    stack: 'ASP.NET Core · PostgreSQL · Redis · SQL Server · Azure DevOps',
    highlights: [
      'Led modernization of a legacy ASP.NET MVC system to ASP.NET Core 6/7 using object-oriented analysis and design and established design patterns; phased cutover, zero production downtime.',
      'Maintained enterprise .NET services in a multi-platform distributed environment with controlled deployment windows, change approval, and strict rollback requirements.',
      'Built the team\'s CI/CD pipelines on Azure DevOps — branch policies, build validation, release gates, and artifact retention matched to state audit requirements.',
      'Tuned PostgreSQL and SQL Server workloads and layered Redis for hot lookups; average API latency dropped from 250ms to ~142ms without changing application contracts.',
      'Led peer code reviews across a 10-person team; mentored 3 junior engineers on Clean Architecture, async/await, and EF Core tracking behavior. Wrote technical documentation the sustainment team still uses.',
    ],
  },
  {
    when: 'Jun 2019 — Feb 2020',
    role: 'Senior Software Engineer',
    org: 'Healthcare Association of New York State',
    location: 'New York, NY',
    stack: 'ASP.NET Core · Angular · xUnit · Moq · WebForms',
    highlights: [
      'Led redesign of the OJT Training Portal — migrated a legacy WebForms application to ASP.NET Core + Angular in stages while preserving backward-compatible APIs.',
      'Stood up test-driven development for the service layer (xUnit, Moq); manual regression effort dropped roughly in half as automated testing coverage grew.',
      'Coached two developers through their first production deployments; ran weekly architecture review sessions on Dapper vs EF Core trade-offs.',
    ],
  },
  {
    when: 'Feb 2019 — Jun 2019',
    role: 'Software Engineer (.NET)',
    org: 'Finastra — Total Lending Cloud Portal',
    location: 'Portland, OR',
    stack: 'ASP.NET Core · Entity Framework · Azure Service Bus · SpecFlow · SQL Server',
    highlights: [
      'Extended a multi-tenant SaaS lending platform built on ASP.NET Core and Entity Framework under tight release controls.',
      'Moved inter-service integration onto Azure Service Bus messaging with asynchronous processing, so transient failures stopped causing data-loss incidents during nightly batch runs.',
      'Added SpecFlow scenarios around lending endpoints to catch behavioural regressions before QA.',
    ],
  },
  {
    when: 'Jan 2018 — Jan 2019',
    role: '.NET Developer',
    org: 'NaviHealth',
    location: 'Horsham, PA',
    stack: 'Angular · ASP.NET Web API · SQL Server · OAuth2 · OpenID Connect',
    highlights: [
      'Built and maintained the NH Admin Portal — Angular front-end against API-driven ASP.NET Web APIs backed by SQL Server.',
      'Standardized API auth across services on OAuth2 + OpenID Connect; made integration onboarding a lot less error-prone for partner teams.',
    ],
  },
];

export const certifications = [
  { badge: 'AZ-305', title: 'Azure Solutions Architect Expert', issuer: 'Microsoft' },
  { badge: 'MCSD', title: 'MCSD: App Builder', issuer: 'Microsoft' },
  { badge: 'RPA', title: 'UiPath Certified Developer', issuer: 'UiPath' },
  { badge: 'AI', title: 'AI Fluency & Claude 101', issuer: 'Anthropic Academy' },
];
