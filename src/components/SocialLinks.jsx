import { Github, Linkedin, Mail } from "lucide-react";

export const SocialLinks = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/J3r0x", // Update with your real GitHub
      icon: Github,
      ariaLabel: "GitHub (opens in a new tab)"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/isaac-rivera-037bb1223/", // Update with your real LinkedIn
      icon: Linkedin,
      ariaLabel: "LinkedIn (opens in a new tab)"
    },
    {
      name: "Email",
      url: "mailto:jer0xrv@gmail.com", // Update with your real email
      icon: Mail,
      ariaLabel: "Email"
    }
  ];

  return (
    <ul className="ml-1 mt-8 flex items-center justify-center lg:justify-start space-x-6" aria-label="Social media">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <li key={link.name} className="text-xs">
            <a
              href={link.url}
              className="block p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-[#E91E63] hover:text-white hover:border-[#E91E63] hover:scale-110 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-[#E91E63] dark:hover:text-white dark:hover:border-[#E91E63] transition-all duration-300 shadow-lg hover:shadow-xl"
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noreferrer" : undefined}
              aria-label={link.ariaLabel}
            >
              <IconComponent size={20} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
