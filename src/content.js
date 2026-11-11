// All of the site's text lives here. Edit this file to update the site;
// the components only handle layout. Anything in [brackets] is a placeholder.

export const site = {
  name: 'Rob Maskrey',
  domain: '[yourname.com]',
  resumeUrl: '/resume.pdf', // drop your resume into /public as resume.pdf
  email: 'mailto:[your-email]',
  linkedin: '[https://www.linkedin.com/in/your-profile]',
  nav: [
    { label: '01 Plans', href: '#plans' },
    { label: '02 Materials', href: '#materials' },
    { label: '03 Sequence', href: '#sequence' },
  ],
}

export const hero = {
  drawingNo: 'DWG. NO. TAM-01 / Technical Account Manager · Solutions',
  headlineTop: 'Measured twice.',
  headlineAccent: 'Built to last.',
  span: 'From carpentry to client engineering · 2008 – 2026',
  intro:
    "I'm Rob Maskrey. I used to build houses; now I build client programs. As a Technical Account Manager at Criteo, I help major retail and travel brands get real results from Performance Media and retargeting, and I make the technical side make sense.",
  titleBlock: [
    { label: 'Name', value: 'Rob Maskrey' },
    { label: 'Role', value: 'Technical Account Manager II' },
    { label: 'Based', value: 'New York · Remote-ready' },
  ],
  status: '● Open to new roles',
}

export const stats = [
  { value: '27', label: 'Enterprise accounts in my book' },
  { value: '$75M', label: 'Combined annual client spend' },
  { value: '8 yrs', label: 'In client-facing tech roles' },
  { value: '[#]', label: '[Trainings led / hires mentored]' },
]

export const plans = [
  {
    id: 'A-01',
    category: 'Account management · Enterprise retail & travel',
    title: 'Running a $75M enterprise book',
    conditions: "[The challenge, e.g. a key account's performance dropping before peak season.]",
    build: '[How you diagnosed it, what you fixed, who you brought together.]',
    results: [
      { value: '[X%]', label: '[Spend retained / grown]' },
      { value: '[N days]', label: '[Time to resolution]' },
    ],
    link: '#',
  },
  {
    id: 'A-02',
    category: 'Analytics engineering · Oct 2024 – Jul 2025',
    title: 'A rotation on the Innovation & Expertise Team',
    conditions: '[What the team needed and why it mattered.]',
    build: '[The model, dashboard or pipeline you built.]',
    results: [
      { value: '[N]', label: '[Teams using it]' },
      { value: '[X hrs]', label: '[Saved per week]' },
    ],
    link: '#',
  },
  {
    id: 'A-03',
    category: 'Automation · Internal tooling',
    title: 'An AI triage agent for client issues',
    conditions: '[Flags and tickets scattered across tools, slipping through.]',
    build: 'A Glean-powered workflow that gathers open client flags and tickets into one view.',
    results: [
      { value: '[X hrs]', label: '[Saved per week]' },
      { value: '[X%]', label: '[Faster response]' },
    ],
    link: '#',
  },
]

export const materials = [
  {
    id: 'M-01',
    category: 'Technical',
    spec: 'APIs and Postman · client integrations · web development (HTML, CSS, JavaScript, Vue) · analytics engineering · [SQL, Python, …]',
  },
  {
    id: 'M-02',
    category: 'Customer',
    spec: 'Enterprise account management · executive presentations · Performance Media and retargeting',
  },
  { id: 'M-03', category: 'Solutions', spec: 'Pre-sales support · solution scoping · process automation' },
  { id: 'M-04', category: 'Enablement', spec: 'Training across Operations · mentoring new hires' },
  { id: 'M-05', category: 'Tools', spec: 'Glean · Claude · Cursor · GitHub Copilot · Postman' },
]

export const sequence = [
  {
    dates: '2008 – 2018',
    title: 'Foundations',
    text: 'Operations manager, compliance and quality roles, and years of carpentry. B.S. Environmental Science, 2011.',
  },
  {
    dates: '2016 – 2018',
    title: 'Framing',
    text: 'Web Developer at Proud Development. Full Stack certification, Coding Temple.',
  },
  { dates: '2018 – 2021', title: 'Systems', text: 'Client Integration Engineer at CJ Affiliate.' },
  {
    dates: '2021 – Now',
    title: 'Finish work',
    text: 'Technical Account Manager II at Criteo, with an Analytics Engineer rotation.',
  },
]

export const notes = [
  { title: 'Translate the technical', text: 'Go deep with engineers, then explain it plainly to executives.' },
  { title: 'Fix it once', text: 'When a problem repeats, build the tool so nobody solves it twice.' },
  { title: 'Teach as I go', text: "Trainings and mentoring, so knowledge doesn't sit with one person." },
]

export const contact = {
  eyebrow: '04 — Next project',
  titleTop: "Let's build",
  titleBottom: 'something.',
  text: "Open to remote Technical Account Manager and Solutions roles. I'd love to hear what your team is working on.",
}
