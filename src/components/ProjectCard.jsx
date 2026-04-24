import { ExternalLink, Github } from "lucide-react";

export const ProjectCard = ({ project, index = 0 }) => {
  const demoLink = project.demo;
  const githubLink = project.github;
  const num = String(index + 1).padStart(2, '0');

  return (
    <div className="relative flex flex-col w-full bg-[#0d0d0d] border border-white/[0.07] overflow-hidden group hover:border-pink-500/25 transition-all duration-500">

      {/* Top gradient accent bar */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-pink-500/60 to-transparent shrink-0" />

      {/* Corner cut — top right */}
      <div className="absolute top-0 right-0 pointer-events-none z-10">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M0 0 L32 0 L32 32 Z" fill="#0a0a0a" />
          <line x1="0.5" y1="0.5" x2="31.5" y2="31.5" stroke="rgba(236,72,153,0.45)" strokeWidth="1" />
        </svg>
      </div>

      {/* Faded project number */}
      <span className="absolute bottom-2 right-4 text-[7rem] font-black font-mono text-white/[0.03] select-none leading-none pointer-events-none">
        {num}
      </span>

      {/* Image header */}
      {project.image ? (
        <div className="relative h-56 bg-[#080808] border-b border-white/[0.05] overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className={`transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100 ${
              project.imageContain
                ? 'w-full h-full object-contain opacity-75 p-4'
                : `w-full h-full object-cover opacity-75 ${project.imagePosition ?? 'object-top'}`
            }`}
          />
          {/* Fade to card bg at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
        </div>
      ) : (
        <div className="h-36 bg-[#080808] border-b border-white/[0.05] flex items-center justify-center shrink-0 overflow-hidden">
          <span className="text-white/[0.04] font-black font-mono text-3xl uppercase tracking-widest select-none">
            {project.title}
          </span>
        </div>
      )}

      {/* Body */}
      <div className="relative flex-1 flex flex-col p-7 gap-4 z-10">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-white font-bold text-lg tracking-wide leading-tight">
            {project.title}
          </h3>
          {project.badge && (
            <span className="shrink-0 px-2 py-0.5 bg-pink-500/10 border border-pink-500/25 text-pink-400 text-xs font-mono">
              {project.badge}
            </span>
          )}
        </div>

        <p className="text-gray-500 text-base leading-relaxed flex-1">
          {project.description}
        </p>

        {project.technologies && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-white/[0.03] border border-white/[0.08] text-gray-500 text-xs font-mono hover:text-gray-300 hover:border-white/20 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* CTA row */}
      <div className="relative flex border-t border-white/[0.07] z-10 shrink-0">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 flex items-center justify-center gap-2 transition-colors duration-200 text-xs font-mono uppercase tracking-widest"
          >
            <ExternalLink size={12} />
            Live Demo
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className={`${
              demoLink ? 'px-5 border-l border-white/[0.07]' : 'flex-1'
            } bg-[#111] hover:bg-[#181818] text-gray-500 hover:text-white py-3 flex items-center justify-center gap-2 transition-colors duration-200 text-xs font-mono uppercase tracking-widest`}
          >
            <Github size={13} />
            {!demoLink && 'Source Code'}
          </a>
        )}
        {!demoLink && !githubLink && (
          <div className="flex-1 bg-[#111] text-gray-700 py-3 flex items-center justify-center text-xs font-mono uppercase tracking-widest">
            TBD
          </div>
        )}
      </div>
    </div>
  );
};
