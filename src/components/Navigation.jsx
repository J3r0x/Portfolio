import { Github, Linkedin, Mail } from "lucide-react";
import { scrollToSection } from '../hooks/useScrollSpy';

export const Navigation = () => {
  const navItems = [
    { id: "home", label: "home" },
    { id: "projects", label: "projects" },
    { id: "experience", label: "experience" },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/isaac-rivera-037bb1223/", icon: Linkedin },
    { name: "GitHub", url: "https://github.com/J3r0x", icon: Github },
    { name: "Email", url: "mailto:jer0xrv@gmail.com", icon: Mail },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/5">
      {/* Logo */}
      <a
        href="#home"
        onClick={(e) => handleNavClick(e, "home")}
        className="text-base font-black text-pink-400 font-mono tracking-tight hover:text-pink-300 transition-colors"
      >
        &lt;IR/&gt;
      </a>

      {/* Nav links */}
      <nav aria-label="Main navigation">
        <ul className="flex items-center gap-3 sm:gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-pink-400 font-mono text-[10px] sm:text-xs hover:text-white transition-colors duration-200"
              >
                &lt;{item.label}&gt;
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social icons */}
      <div className="hidden sm:flex items-center gap-4">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noreferrer" : undefined}
              aria-label={link.name}
              className="text-white/40 hover:text-pink-400 transition-colors duration-200"
            >
              <Icon size={17} />
            </a>
          );
        })}
      </div>
    </header>
  );
};
