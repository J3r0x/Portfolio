import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiGit,
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiMongodb,
  SiElectron,
  SiNextdotjs,
} from 'react-icons/si';

const iconMap = {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiGit,
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiMongodb,
  SiElectron,
  SiNextdotjs,
};

const TechBadge = ({ skill }) => {
  const IconComponent = iconMap[skill.icon];

  return (
    <div
      className={`flex items-center gap-2.5 px-4 py-2.5 border font-mono text-sm cursor-default select-none transition-all duration-200 ${
        skill.featured
          ? 'bg-pink-600/15 border-pink-500/35 text-pink-300 hover:bg-pink-600/25 hover:border-pink-500/60'
          : 'bg-white/[0.03] border-white/[0.07] text-gray-500 hover:border-white/20 hover:text-gray-300'
      }`}
    >
      {IconComponent && (
        <IconComponent
          className={`text-lg shrink-0 ${skill.featured ? 'text-pink-400' : 'text-gray-600'}`}
        />
      )}
      <span>{skill.name}</span>
    </div>
  );
};

export const SkillsSection = ({ skills }) => {
  const categories = [
    { label: 'frontend', items: skills.frontend || [] },
    { label: 'backend',  items: skills.backend  || [] },
    { label: 'tools',    items: skills.tools    || [] },
  ].filter(c => c.items.length > 0);

  return (
    <div className="space-y-7">
      {categories.map(({ label, items }) => (
        <div key={label} className="flex gap-6 items-start">
          <span className="shrink-0 text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] w-16 pt-2.5">
            {label}
          </span>
          <div className="flex flex-wrap gap-2">
            {items.map((skill, i) => (
              <TechBadge key={i} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
