import portfolioImage from '../assets/img/personalporfolio.png';
import discordBotImage from '../assets/img/discordBot.png';

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "A modern and responsive portfolio built with React and Tailwind CSS. Features smooth navigation, interactive hover effects, and accessibility-optimized design. Uses reusable components and scalable architecture.",
    image: portfolioImage,
    technologies: ["React", "Vite", "Tailwind CSS", "Lucide React", "JavaScript"],
    github: "https://github.com/J3r0x/Portfolio",
    demo: null,
    featured: true,
    stars: null
  },
  {
    id: 2,
    title: "Discord Music Bot",
    description: "Discord bot for music playback with custom commands, advanced playback queues, and integration with multiple streaming platforms. Includes features like skip, pause, resume, queue management, and music moderation commands.",
    image: discordBotImage,
    technologies: ["Node.js", "Discord.js", "JavaScript", "FFmpeg", "YouTube API"],
    github: "https://github.com/J3r0x/discord-music-bot",
    demo: null,
    featured: true,
    stars: null
  }
];

export const experience = [
  {
    id: 1,
    period: "2022 — Present",
    title: "Addon Developer",
    company: "HoneyFrost",
    companyUrl: "https://honeyfrost.net",
    description: "Develop addons and plugins for Minecraft using the Minecraft Scripting API. Create custom content, innovative game mechanics, advanced command systems, and tools that significantly enhance the gaming experience. Work with JavaScript and native Minecraft APIs to create unique and optimized functionalities.",
    technologies: ["JavaScript", "Minecraft Scripting API", "JSON", "Git", "Node.js"],
    current: true
  }
];

export const skills = {
  frontend: [
    { name: "React", icon: "SiReact" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "HTML", icon: "SiHtml5" },
    { name: "CSS", icon: "SiCss3" }
  ],
  backend: [
    { name: "Node.js", icon: "SiNodedotjs" }
  ],
  tools: [
    { name: "Git", icon: "SiGit" }
  ]
};
