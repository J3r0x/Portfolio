import portfolioImage from '../assets/img/personalporfolio.png';
import discordBotImage from '../assets/img/discordBot.png';
import weLedgerImage from '../assets/img/WeLedger.png';
import clutchlyImage from '../assets/img/Captura de pantalla 2026-04-23 192350.png';
import sentinelImage from '../assets/img/sentinel.png';

export const projects = [
  {
    id: 1,
    title: "Sentinel",
    description: "Self-hosted server monitoring platform. A Python agent (psutil) collects CPU, RAM, disk and log data and ships it to a NestJS backend; the Next.js dashboard reflects changes live via WebSocket push in under a second, no polling. Features composite health scores, alert lifecycle with auto-resolve, remote service restarts behind an agent-side allowlist, dual auth (JWT for users, per-node API keys for agents), admin/viewer RBAC, opt-in HMAC-SHA256 request signing, agent exponential backoff, and a local JSONL fallback buffer for offline resilience.",
    image: sentinelImage,
    technologies: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Socket.IO", "Next.js", "Python", "Docker"],
    github: "https://github.com/J3r0x/Sentinel",
    demo: null,
    featured: true,
    badge: null,
  },
  {
    id: 2,
    title: "WeLedger",
    description: "Local-first desktop personal finance manager. Tracks accounts, transactions, budgets, savings goals, investments, and recurring expenses. Features multi-language support, PDF exports, and interactive charts. Built as an Electron app with an embedded MongoDB instance. No cloud, no accounts.",
    image: weLedgerImage,
    technologies: ["Electron", "React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Recharts", "Framer Motion", "Zustand"],
    github: "https://github.com/J3r0x/FinanceApp",
    demo: null,
    featured: true,
    badge: "Desktop",
  },
  {
    id: 3,
    title: "Clutchly",
    description: "Multi-game player tracker for Valorant and League of Legends across 11 regions. Search any player by Riot ID to see match history, ranked stats, agent and champion performance, MMR/LP history charts, map winrates, best duos, performance insights, and live game detection. Built with Next.js Server Components and Suspense streaming. Also available as a desktop app via Electron.",
    image: clutchlyImage,
    technologies: ["TypeScript", "Next.js", "Electron", "Tailwind CSS", "Riot API", "Framer Motion", "Zustand"],
    github: "https://github.com/J3r0x/tracker",
    demo: "https://tracker-m1pooj18m-j3r0xs-projects.vercel.app/",
    featured: false,
    badge: "Beta",
  },
  {
    id: 4,
    title: "EzNotes",
    description: "Full-stack notes app with real-time search, CRUD operations, and a dark-mode interface. React frontend connected to a Node.js/Express REST API backed by MongoDB.",
    image: null,
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/J3r0x/EzNotes",
    demo: null,
    featured: false,
    badge: null,
  },
  {
    id: 5,
    title: "Discord Music Bot",
    description: "Discord bot for music playback with custom commands, advanced playback queues, and integration with multiple streaming platforms.",
    image: discordBotImage,
    imageContain: true,
    technologies: ["Node.js", "Discord.js", "JavaScript", "FFmpeg", "YouTube API"],
    github: "https://github.com/J3r0x/DiscordBot",
    demo: null,
    featured: false,
    badge: null,
  },
];

export const experience = [
  {
    id: 1,
    period: "Sep. 2025 - Present",
    title: "Software Developer",
    company: "Octovon",
    companyUrl: "#",
    technologies: ["JavaScript", "Minecraft Scripting API", "JSON", "Git"],
    current: true,
  },
  {
    id: 2,
    period: "2024 (6 months)",
    title: "Software Developer",
    company: "RareLoot",
    companyUrl: "#",
    technologies: ["JavaScript", "Minecraft Scripting API", "JSON", "Git", "Node.js"],
    current: false,
  },
  {
    id: 3,
    period: "2022 - Aug. 2025",
    title: "Software Developer",
    company: "HoneyFrost",
    companyUrl: "https://honeyfrost.net",
    technologies: ["JavaScript", "Minecraft Scripting API", "JSON", "Git", "Node.js"],
    current: false,
  },
];

export const skills = {
  frontend: [
    { name: "React",       icon: "SiReact",       featured: true },
    { name: "TypeScript",  icon: "SiTypescript",   featured: true },
    { name: "JavaScript", icon: "SiJavascript",   featured: true },
    { name: "Next.js",    icon: "SiNextdotjs",    featured: false },
    { name: "HTML",       icon: "SiHtml5",        featured: false },
    { name: "CSS",        icon: "SiCss3",         featured: false },
    { name: "Tailwind CSS", icon: "SiTailwindcss", featured: false },
    { name: "Vite",       icon: "SiVite",         featured: false },
  ],
  backend: [
    { name: "Node.js",    icon: "SiNodedotjs",   featured: true },
    { name: "Express",    icon: "SiExpress",     featured: true },
    { name: "NestJS",     icon: "SiNestjs",      featured: true },
    { name: "MongoDB",    icon: "SiMongodb",     featured: true },
    { name: "PostgreSQL", icon: "SiPostgresql",  featured: true },
    { name: "Prisma",     icon: "SiPrisma",      featured: false },
    { name: "Python",     icon: "SiPython",      featured: false },
  ],
  tools: [
    { name: "Git",        icon: "SiGit",         featured: true },
    { name: "Docker",     icon: "SiDocker",      featured: true },
    { name: "Electron",   icon: "SiElectron",    featured: false },
  ]
};

