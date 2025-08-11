import { useScrollSpy, scrollToSection } from '../hooks/useScrollSpy';

export const Navigation = () => {
  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" }
  ];

  const activeSection = useScrollSpy(navItems.map(item => item.id));

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-12 w-max">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <li key={item.id}>
              <a 
                className="group flex items-center py-3 transition-all duration-300 cursor-pointer" 
                onClick={(e) => handleNavClick(e, item.id)}
                href={`#${item.id}`}
              >
                <span className={`nav-indicator mr-4 h-px transition-all duration-300 ${
                  isActive 
                    ? 'w-16 bg-gradient-to-r from-pink-500 to-purple-500' 
                    : 'w-8 dark:bg-pink-400/60 light:bg-pink-500/60 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500'
                }`}></span>
                <span className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                  isActive 
                    ? 'dark:text-pink-300 light:text-pink-600' 
                    : 'dark:text-slate-400 dark:group-hover:text-pink-300 light:text-slate-500 light:group-hover:text-pink-600'
                }`}>
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
