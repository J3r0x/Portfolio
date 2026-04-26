import { ExternalLink } from "lucide-react";

export const ExperienceCard = ({ experience }) => {
  return (
    <div className="flex gap-8 p-8 bg-[#111] border border-white/5 border-l-2 border-l-pink-500 hover:border-l-pink-400 hover:border-white/10 transition-all duration-300 group">

        {/* Period */}
        <div className="hidden sm:block shrink-0 w-28 pt-0.5">
          <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
            {experience.period}
          </span>
          {experience.current && (
            <span className="mt-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              <span className="text-xs font-mono text-pink-400">current</span>
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          <div>
            <a
              className="inline-flex items-center gap-1.5 font-bold text-white text-lg hover:text-pink-400 transition-colors duration-200 font-sans"
              href={experience.companyUrl}
              target="_blank"
              rel="noreferrer"
            >
              {experience.title}
              <span className="text-gray-500 font-normal">·</span>
              <span className="text-pink-400">{experience.company}</span>
              {experience.companyUrl !== "#" && (
                <ExternalLink className="h-3.5 w-3.5 text-gray-500 group-hover:text-pink-400 transition-colors" />
              )}
            </a>
            {/* Mobile period */}
            <p className="sm:hidden text-xs font-mono text-gray-500 mt-1">{experience.period}</p>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 pt-1" aria-label="Technologies used">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
  );
};
