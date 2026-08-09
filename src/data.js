export const profile = {
  name: "Rishi Pandey",
  roles: ["Full-Stack Developer", "MERN Specialist", "React + Node Builder", "UI-minded Engineer"],
  email: "pandeyrishi7258@gmail.com",
  phone: "+91 7258099839",
  phoneHref: "+917258099839",
  github: "https://github.com/rishi841",
  githubLabel: "github.com/rishi841",
  linkedin: "https://linkedin.com/in/rishi-pandey",
  linkedinLabel: "linkedin.com/in/rishi-pandey",
  location: "Bhopal, M.P (India)",
};

export const about = `I'm a Computer Science Engineering student in Bhopal, specializing in the MERN stack — MongoDB, Express.js, React.js, and Node.js. I like building things that actually work end-to-end: clean React interfaces wired to real APIs, with proper authentication and data modeling underneath, not just the parts that look good in a screenshot.

Outside of code, I spent over a year on the core team of my university's Entrepreneurship & Innovation Cell, coordinating events and working directly with founders — which is where a lot of my "figure it out and ship it" instinct comes from.`;

export const skills = [
  { title: "Frontend", tags: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Backend", tags: ["Node.js", "Express.js", "REST APIs", "JWT Auth"] },
  { title: "Database", tags: ["MongoDB", "Mongoose", "Schema design"] },
  { title: "Tools", tags: ["Git", "GitHub", "Postman", "Vite"] },
];

export const projects = [
  {
    id: "auth-system",
    aliases: ["auth", "auth-system"],
    name: "Basic Authentication & Authorization System",
    tech: "Node.js · Express.js · MongoDB · JWT",
    link: "https://github.com/rishi841",
    bullets: [
      "Full auth flow — signup, login, JWT-based session handling — with protected routes on both frontend and backend.",
      "MongoDB schemas for secure credential storage, plus server-side validation and error handling.",
      "Responsive login/registration UI integrated with backend APIs for real-time validation and redirects.",
    ],
  },
  {
    id: "cmd-palette",
    aliases: ["palette", "cmd-palette", "command-palette"],
    name: "Command Palette",
    tech: "JavaScript · HTML · CSS",
    link: "https://github.com/rishi841",
    bullets: [
      "A Ctrl+K command palette inspired by VS Code and Linear, with real-time fuzzy search and filtering.",
      "Custom keyboard event handling and DOM manipulation — no framework, just fast vanilla JS.",
    ],
  },
  {
    id: "dior-perfume",
    aliases: ["dior", "dior-perfume"],
    name: "Dior-Inspired Perfume Landing Page",
    tech: "React.js · Vite · Tailwind CSS",
    link: "https://github.com/rishi841",
    bullets: [
      "Brand-inspired e-commerce landing page with reusable, component-based architecture.",
      "Premium visual design — typography, spacing, and color theming built to match a luxury aesthetic.",
    ],
  },
];

export const experience = [
  {
    role: "Core Team Member",
    org: "E&I Cell, RNTU Bhopal",
    date: "Oct 2023 – Apr 2025",
    desc: "Coordinated entrepreneurship & innovation events, workshops, and incubation programs. Managed cross-functional communication between students, faculty, and startup founders.",
  },
   {
    role: "Operation Manager",
    org: "Royal Nimar Eagle-A franchise in Madhya Pradesh Premiere League(MPL)",
    date: "Apr 2026-July 2026",
  },
  {
    role: "B.E. Computer Science Engineering",
    org: "Rabindranath Tagore University, Bhopal",
    date: "Aug 2023 – Ongoing",
  },
  {
    role: "12th Grade — Mathematics (72.4%)",
    org: "Swami ANJM Inter College, UP Board",
    date: "2020 – 2022",
  },
 
];

export const bootLines = [
  { t: "$ npm install rishi-pandey", cls: "cmd", delay: 90 },
  { t: "  added 214 packages in 0.6s", cls: "", delay: 30 },
  { t: "$ npm run build:portfolio", cls: "cmd", delay: 90 },
  { t: "  ✓ compiling About.jsx", cls: "ok", delay: 60 },
  { t: "  ✓ compiling Skills.jsx", cls: "ok", delay: 60 },
  { t: "  ✓ compiling Projects/*.jsx", cls: "ok", delay: 60 },
  { t: "  ✓ linking Experience.jsx", cls: "ok", delay: 60 },
  { t: "  ✓ 0 errors, 0 warnings", cls: "ok", delay: 60 },
  { t: "$ portfolio --serve", cls: "cmd", delay: 90 },
  { t: "  ready on http://localhost — welcome ✨", cls: "ok", delay: 40 },
];

export const sectionIds = ["home", "about", "skills", "projects", "experience", "contact"];
