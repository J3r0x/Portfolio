import { ExternalLink, Github, Star } from "lucide-react";

export const ProjectCard = ({ project }) => {
  return (
    <li className="mb-8">
      <div className="group relative grid pb-1 transition-all duration-500 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition-all duration-500 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gradient-to-r lg:group-hover:from-pink-500/10 lg:group-hover:to-purple-500/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(233,30,99,0.1)] lg:group-hover:drop-shadow-lg lg:group-hover:backdrop-blur-sm"></div>
        
        {/* Project Image */}
        <div className="z-10 mb-2 mt-1 sm:col-span-2">
          <img
            alt={project.title}
            loading="lazy"
            width="200"
            height="48"
            decoding="async"
            className="rounded-lg border-2 border-pink-500/20 transition-all duration-500 group-hover:border-pink-400/60 group-hover:shadow-lg group-hover:shadow-pink-500/25 sm:order-1 sm:col-span-2 sm:translate-y-1"
            src={project.image}
          />
        </div>
        
        {/* Project Content */}
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-800 dark:text-white">
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight text-slate-800 hover:text-[#E91E63] dark:text-white dark:hover:text-[#E91E63] focus-visible:text-[#E91E63] group/link text-base transition-colors duration-300"
                href={project.demo || project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} (opens in a new tab)`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {project.title}
                  <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                </span>
              </a>
            </div>
            
            {/* Stars count if available */}
            {project.stars && (
              <div className="flex items-center mt-2">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-sm text-slate-600 dark:text-slate-300">{project.stars}</span>
              </div>
            )}
          </h3>
          
          <p className="mt-2 text-sm leading-normal text-slate-600 dark:text-slate-300">{project.description}</p>
          
          {/* Project Links */}
          <div className="flex items-center mt-2 space-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm text-slate-500 hover:text-[#E91E63] dark:text-slate-400 dark:hover:text-[#E91E63] transition-colors duration-300"
              >
                <Github className="h-4 w-4 mr-1" />
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm text-slate-500 hover:text-[#E91E63] dark:text-slate-400 dark:hover:text-[#E91E63] transition-colors duration-300"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Demo
              </a>
            )}
          </div>
          
          {/* Technologies */}
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {project.technologies.map((tech, index) => (
              <li key={index} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-[#E91E63]/10 border border-[#E91E63]/20 dark:bg-slate-700/50 dark:border-slate-600 px-3 py-1 text-xs font-medium leading-5 text-[#E91E63] dark:text-[#E91E63] hover:bg-[#E91E63]/20 dark:hover:bg-slate-600/50 transition-all duration-300">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};
