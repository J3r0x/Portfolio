import portfolioImage from '../assets/img/personalporfolio.png';
import discordBotImage from '../assets/img/discordBot.png';
import weLedgerImage from '../assets/img/WeLedger.png';
import clutchlyImage from '../assets/img/Captura de pantalla 2026-04-23 192350.png';

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "A modern and responsive portfolio built with React and Tailwind CSS. Features smooth navigation, interactive hover effects, and accessibility-optimized design.",
    image: portfolioImage,
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/J3r0x/Portfolio",
    demo: "https://portfolio-nine-ochre-17.vercel.app/",
    featured: true,
    badge: null,
  },
  {
    id: 2,
    title: "EzNotes",
    description: "Full-stack notes app with real-time search, CRUD operations, and a dark-mode interface. React frontend connected to a Node.js/Express REST API backed by MongoDB.",
    image: null,
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/J3r0x/EzNotes",
    demo: null,
    featured: true,
    badge: null,
  },
  {
    id: 3,
    title: "WeLedger",
    description: "Local-first desktop personal finance manager. Tracks accounts, transactions, budgets, savings goals, investments, and recurring expenses. Features multi-language support, PDF exports, and interactive charts. Built as an Electron app with an embedded MongoDB instance — no cloud, no accounts.",
    image: weLedgerImage,
    technologies: ["Electron", "React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Recharts", "Framer Motion", "Zustand"],
    github: "https://github.com/J3r0x/FinanceApp",
    demo: null,
    featured: false,
    badge: "Desktop",
  },
  {
    id: 4,
    title: "Clutchly",
    description: "Multi-game player tracker for Valorant and League of Legends. Search any player by Riot ID to see match history, ranked stats, agent/champion performance, MMR charts, map winrates, and live game data. Uses the official Riot API and Henrik's unofficial API.",
    image: clutchlyImage,
    technologies: ["TypeScript", "Next.js", "Electron", "Tailwind CSS", "Riot API", "Framer Motion", "Zustand"],
    github: "https://github.com/J3r0x/tracker",
    demo: null,
    featured: false,
    badge: "WIP",
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
    period: "Sep. 2025 — Present",
    title: "Software Developer",
    company: "Octovon",
    companyUrl: "#",
    description: "Occasional development of mods and interactive gameplay systems. Design and implement custom gameplay mechanics including blocks, items, entities, and commands. Collaborate with team members on content creation and interactive set design. Troubleshoot mod issues using crash reports, log files, and technical documentation.",
    technologies: ["JavaScript", "Minecraft Scripting API", "JSON", "Git"],
    current: true,
  },
  {
    id: 2,
    period: "2024 (6 months)",
    title: "Software Developer",
    company: "RareLoot",
    companyUrl: "#",
    description: "Development of mods and interactive gameplay systems for Minecraft servers. Designed custom gameplay mechanics, UI elements, and command systems. Implemented custom crafting methods and unique item interactions beyond default mechanics. Used Git and GitHub for version control and team collaboration across remote workflows.",
    technologies: ["JavaScript", "Minecraft Scripting API", "JSON", "Git", "Node.js"],
    current: false,
  },
  {
    id: 3,
    period: "2022 — Aug. 2025",
    title: "Software Developer",
    company: "HoneyFrost",
    companyUrl: "https://honeyfrost.net",
    description: "Development of mods and interactive gameplay systems for Minecraft servers. Built modular, scalable code structures for custom features. Created custom UI elements and command systems. Collaborated on YouTube-style productions. Optimized multiplayer server performance, reducing resource usage by 20%.",
    technologies: ["JavaScript", "Minecraft Scripting API", "JSON", "Git", "Node.js"],
    current: false,
  },
];

export const skills = {
  frontend: [
    { name: "React",      icon: "SiReact",      featured: true },
    { name: "TypeScript", icon: "SiTypescript",  featured: true },
    { name: "JavaScript", icon: "SiJavascript",  featured: true },
    { name: "Next.js",    icon: "SiNextdotjs",   featured: false },
    { name: "HTML",       icon: "SiHtml5",       featured: false },
    { name: "CSS",        icon: "SiCss3",        featured: false },
    { name: "Tailwind CSS", icon: "SiTailwindcss", featured: false },
    { name: "Vite",       icon: "SiVite",        featured: false },
  ],
  backend: [
    { name: "Node.js",  icon: "SiNodedotjs", featured: true },
    { name: "Express",  icon: "SiExpress",   featured: true },
    { name: "MongoDB",  icon: "SiMongodb",   featured: true },
  ],
  tools: [
    { name: "Git",      icon: "SiGit",       featured: true },
    { name: "Electron", icon: "SiElectron",  featured: false },
  ]
};

