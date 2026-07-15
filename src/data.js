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
    org: 'Deloitte (Department of HealthCare CA) · Indianapolis, IN',
    summary:
      'Built high-concurrency .NET 10 APIs and Blazor Server Claims Processing Portal, improving batch throughput by 40% through parallel processing. Designed SignalR-based real-time architecture supporting 100K+ daily users. Reduced latency from 220ms to 98ms via Frozen Collections and SQL Server optimization. Architected microservices on Docker/Kubernetes for 99.99% uptime.',
  },
  {
    when: 'Mar 2020 — Sep 2023',
    role: 'Senior Full Stack Software Engineer',
    org: 'Indiana Department of Transportation · Indianapolis, IN',
    summary:
      'Built async messaging services using System.Threading.Channels achieving 9,200+ RPS. Optimized memory usage by 30% with Span<T> and Memory<T>. Improved query performance by 35% through Redis caching and Query Store optimization. Implemented JWT auth and CI/CD pipelines on Azure DevOps.',
  },
  {
    when: 'Jun 2019 — Feb 2020',
    role: 'Senior Software Engineer',
    org: 'Healthcare Association with New York State · New York, NY',
    summary:
      'Led full-stack modernization of OJT Training Portal, migrating legacy systems to .NET Core and Angular. Reduced manual testing by 50% through TDD implementation.',
  },
  {
    when: 'Feb 2019 — Jun 2019',
    role: 'Full Stack .NET Developer',
    org: 'Finastra · Portland, OR',
    summary:
      'Developed core payment and lending services for Total-Lending Cloud Portal. Integrated Azure Service Bus for reliable asynchronous inter-service communication.',
  },
];

export const certifications = [
  { badge: 'AZ-305', title: 'Azure Solutions Architect Expert', issuer: 'Microsoft' },
  { badge: 'MCSD', title: 'MCSD: App Builder', issuer: 'Microsoft' },
  { badge: 'RPA', title: 'UiPath Certified Developer', issuer: 'UiPath' },
  { badge: 'AI', title: 'AI Fluency & Claude 101', issuer: 'Anthropic Academy' },
];
