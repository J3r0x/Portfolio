import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss3, 
  SiNodedotjs, 
  SiGit 
} from 'react-icons/si';

export const SkillItem = ({ skill }) => {
  // Mapeo de iconos
  const iconMap = {
    SiReact,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiNodedotjs,
    SiGit
  };
  
  const IconComponent = iconMap[skill.icon];
  
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-slate-700/50 hover:bg-[#E91E63]/10 dark:hover:bg-slate-600/50 transition-colors duration-300">
      <IconComponent className="text-2xl text-[#E91E63]" />
      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
        {skill.name}
      </span>
    </div>
  );
};

export const SkillsSection = ({ skills }) => {
  const categories = [
    { key: 'frontend', title: 'Frontend', icon: '🎨' },
    { key: 'backend', title: 'Backend', icon: '⚙️' },
    { key: 'tools', title: 'Herramientas', icon: '🛠️' }
  ];

  return (
    <div className="space-y-6">
      {categories.map((category) => (
        <div key={category.key}>
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-3 text-[#E91E63] dark:text-[#E91E63]">
            <span>{category.icon}</span>
            {category.title}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {skills[category.key]?.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
