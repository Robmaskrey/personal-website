// All of the site's text lives here. Edit this file to update the site;
// the components only handle layout. Anything in [brackets] is a placeholder.

export const site = {
  name: 'Rob Maskrey',
  domain: '[yourname.com]',
  resumeUrl: '/resume.pdf', // drop your resume into /public as resume.pdf
  email: 'mailto:[your-email]',
  linkedin: '[https://www.linkedin.com/in/your-profile]',
  nav: [
    { label: 'Case studies', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
  ],
}

export const hero = {
  availability: 'Open to remote roles · US',
  eyebrow: 'Technical Account Manager · Solutions',
  headline:
    'I help enterprise clients get real results from complex ad tech, and make the technical side make sense.',
  intro:
    "Technical Account Manager at Criteo, working on Performance Media and retargeting for major retail and travel brands. I've been a carpenter, a web developer and an integration engineer, and I bring all of it to client work.",
  photo: null, // e.g. '/headshot.jpg' once you add a photo to /public
}

export const stats = [
  { value: '27', label: 'high-priority enterprise accounts in my book' },
  { value: '~$75M', label: 'combined annual client spend' },
  { value: '2018', label: 'in client-facing technical roles since' },
  { value: '[#]', label: '[trainings led / new hires mentored]' },
]

export const caseStudies = [
  {
    tag: 'Account management · Enterprise retail and travel',
    title: 'Running a $75M enterprise book across retail and travel',
    problem: '[The challenge, e.g. a key account’s performance dropping before peak season.]',
    action: '[How you diagnosed it, what you fixed, and who you brought together.]',
    results: [
      { value: '[X%]', label: '[spend retained or grown]' },
      { value: '[N days]', label: '[time to resolution]' },
    ],
    link: '#',
  },
  {
    tag: 'Analytics engineering · Innovation & Expertise Team',
    title: 'An Analytics Engineer rotation, Oct 2024 – Jul 2025',
    problem: '[What the team needed and why it mattered.]',
    action: '[The model, dashboard or pipeline you built.]',
    results: [
      { value: '[N]', label: '[teams or people using it]' },
      { value: '[X hrs]', label: '[time saved per week]' },
    ],
    link: '#',
  },
  {
    tag: 'Automation · Internal',
    title: 'An AI triage agent for unresolved client issues',
    problem: '[Flags and tickets scattered across tools, slipping through.]',
    action:
      'Built a Glean-powered workflow that gathers open client flags and tickets into one view. [Add how the team uses it.]',
    results: [
      { value: '[X hrs]', label: '[saved per week]' },
      { value: '[X%]', label: '[faster response time]' },
    ],
    link: '#',
  },
]

export const skillGroups = [
  {
    title: 'Technical',
    blurb: 'Integration and full-stack background, so I can go deep with engineers.',
    items: [
      'APIs and Postman',
      'Web development (HTML, CSS, JavaScript)',
      'Client integrations',
      'Analytics engineering',
      'AI tools: Glean, Claude, Cursor, Copilot',
      '[Add: SQL, Python, …]',
    ],
  },
  {
    title: 'Customer',
    blurb: 'I own the relationship long after launch and keep executives informed.',
    items: [
      'Enterprise account management',
      'Executive presentations',
      'Performance Media and retargeting',
      '[Add: renewals, escalations, …]',
    ],
  },
  {
    title: 'Solutions and enablement',
    blurb: 'I support pre-sales and make sure the team knows what I know.',
    items: [
      'Pre-sales support',
      'Training across Operations',
      'Mentoring new hires',
      'Process automation',
    ],
  },
]

export const principles = [
  { title: 'Translate the technical', text: 'Go deep with engineers, then explain it plainly to executives.' },
  { title: 'Fix it once', text: 'When a problem repeats, I build the playbook or the tool so nobody solves it twice.' },
  { title: 'Teach as I go', text: "I lead trainings and mentor new hires so knowledge doesn't sit with one person." },
]

export const about = {
  title: 'From building houses to building client programs',
  paragraphs: [
    'I started out in environmental science and spent years running operations and doing carpentry: remodels, new construction, solving problems with my hands. In 2018 I finished a full-stack coding program and moved into tech as a web developer.',
    "From there I became a Client Integration Engineer at CJ Affiliate, then joined Criteo in 2021. That path is why I'm comfortable in the details and with the people who depend on them.",
    "[One or two lines about you outside work: family, what you're building at home, what you're curious about.]",
  ],
}

export const experience = [
  {
    role: 'Technical Account Manager II · Criteo',
    detail: 'Performance Media and retargeting for enterprise retail and travel. Includes an Analytics Engineer rotation.',
    dates: '2021 – Present',
  },
  {
    role: 'Client Integration Engineer · CJ Affiliate',
    detail: 'Technical onboarding and integrations for advertiser clients.',
    dates: '2018 – 2021',
  },
  {
    role: 'Web Developer · Proud Development',
    detail: 'Built and maintained client websites.',
    dates: '2016 – 2018',
  },
  {
    role: 'Earlier: operations, compliance and construction',
    detail: 'Operations Manager, compliance and quality roles, and years of carpentry.',
    dates: '2008 – 2018',
  },
  {
    role: 'Education',
    detail: 'B.S. Environmental Science, East Stroudsburg University · Full Stack Web Development, Coding Temple',
    dates: '2011 · 2018',
  },
]

export const contact = {
  title: 'Looking for a Technical Account Manager?',
  text: "I'm open to remote TAM and Solutions roles. I'd love to hear what your team is working on.",
}
