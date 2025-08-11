import { Navigation } from "../components/Navigation"
import { SocialLinks } from "../components/SocialLinks"
import { ExperienceCard } from "../components/ExperienceCard"
import { ProjectCard } from "../components/ProjectCard"
import { SkillsSection } from "../components/SkillsSection"
import { projects, experience, skills } from "../data/projects"

export const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-800 dark:text-white relative">
            <div className="fixed inset-0 pointer-events-none hidden dark:block">
                <div className="absolute top-10 left-10 w-1 h-1 bg-blue-300 rounded-full animate-pulse"></div>
                <div className="absolute top-20 right-32 w-1 h-1 bg-pink-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-40 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-60 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute top-80 left-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-40 right-20 w-1 h-1 bg-pink-300 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
                <div className="absolute bottom-60 left-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '3.5s'}}></div>
                <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
                <div className="absolute top-1/2 left-10 w-1 h-1 bg-pink-300 rounded-full animate-pulse" style={{animationDelay: '4.5s'}}></div>
                <div className="absolute top-32 left-2/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '5s'}}></div>
                <div className="absolute bottom-20 right-1/2 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '5.5s'}}></div>
            </div>
            
            {/* Main Container*/}
            <div className="mx-auto min-h-screen max-w-7xl font-sans lg:flex">
                {/* Left Side */}
                <header className="lg:fixed lg:top-0 lg:left-1/2 lg:transform lg:-translate-x-full lg:h-screen lg:w-1/2 lg:max-w-lg lg:flex lg:flex-col lg:justify-between lg:py-16 lg:px-8 xl:px-16 2xl:px-20 px-4 py-8 md:px-8 md:py-16">
                        <div>
                            <div className="floating">
                                <h1 className="text-4xl font-bold tracking-tight text-[#E91E63] dark:text-white sm:text-5xl lg:text-6xl mb-4">
                                    Isaac Rivera
                                </h1>
                                <h2 className="mt-6 text-lg font-medium tracking-tight text-[#E91E63] dark:text-[#E91E63] sm:text-xl lg:text-2xl">
                                    Software Developer
                                </h2>
                                <p className="mt-6 max-w-md leading-relaxed text-slate-600 dark:text-slate-300 text-base lg:text-lg">
                                    Software Engineering student passionate about building interactive web applications, custom tools, and digital experiences using modern technologies.
                                </p>
                            </div>
                            
                            {/* Navigation Component */}
                            <div className="mt-10">
                                <Navigation />
                            </div>
                        </div>
                        
                        {/* Social Links Component */}
                        <div className="mt-12 lg:mt-auto">
                            <SocialLinks />
                        </div>
                    </header>
                    
                {/* Right Side - Main Content */}
                <main className="lg:ml-auto lg:w-1/2 lg:max-w-3xl pt-16 lg:py-16 px-4 md:px-8 lg:px-8 xl:px-16 2xl:px-20">
                        {/* About Section */}
                        <section id="about" className="mb-16 scroll-mt-16 md:mb-20 lg:mb-24 lg:scroll-mt-20">
                            <div className="mb-6">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-[#E91E63] dark:text-[#E91E63]">
                                    About Me
                                </h2>
                            </div>
                            <div className="space-y-4 text-slate-700 dark:text-slate-300">
                                    <p className="leading-relaxed">
                                        Hi! I'm a software engineering student who loves turning ideas into real projects. I enjoy building web apps, experimenting with new technologies, and creating digital tools that make life easier or more fun. I'm always curious and looking for ways to learn and grow as a developer.
                                    </p>
                                    <p className="leading-relaxed">
                                        I'm also passionate about frontend development, creating modern interfaces with{" "}
                                        <span className="font-medium text-[#E91E63]">
                                            React, JavaScript, and TypeScript
                                        </span>
                                        . I focus on creating intuitive user experiences and clean, maintainable code.
                                    </p>
                                <p className="leading-relaxed">
                                    In my free time, I contribute to open source projects and explore new technologies 
                                    in web development and gaming.
                                </p>
                            </div>
                        </section>
                        
                        {/* Skills Section */}
                        <section id="skills" className="mb-16 scroll-mt-16 md:mb-20 lg:mb-24 lg:scroll-mt-20">
                            <div className="bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-blue-900/90 backdrop-blur-sm border border-slate-700/50 shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#E91E63]/10 via-transparent to-blue-500/10"></div>
                                <div className="relative z-10">
                                    <div className="mb-6">
                                        <h2 className="text-sm font-bold uppercase tracking-widest text-[#E91E63] dark:text-[#E91E63]">
                                            Technical Skills
                                        </h2>
                                    </div>
                                    <SkillsSection skills={skills} />
                                </div>
                            </div>
                        </section>
                        
                        {/* Experience Section */}
                        <section id="experience" className="mb-16 scroll-mt-16 md:mb-20 lg:mb-24 lg:scroll-mt-20">
                            <div className="mb-4">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-[#E91E63] dark:text-[#E91E63] lg:sr-only">
                                    Experience
                                </h2>
                            </div>
                            <div>
                                <ol className="group/list">
                                    {experience.map((exp) => (
                                        <ExperienceCard key={exp.id} experience={exp} />
                                    ))}
                                </ol>
                                <div className="mt-8">
                                    <a
                                        className="inline-flex items-center font-medium leading-tight text-[#E91E63] dark:text-[#E91E63] group"
                                        aria-label="View Full Résumé (opens in a new tab)"
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span>
                                            <span className="border-b border-transparent pb-px transition group-hover:border-pink-400 motion-reduce:transition-none">
                                                View Full Resume
                                            </span>
                                            <span className="whitespace-nowrap">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </section>
                        
                        {/* Projects Section */}
                        <section id="projects" className="mb-16 scroll-mt-16 md:mb-20 lg:mb-24 lg:scroll-mt-20">
                            <div className="mb-4">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-[#E91E63] dark:text-[#E91E63] lg:sr-only">
                                    Projects
                                </h2>
                            </div>
                            <div>
                                <ol className="group/list">
                                    {projects.map((project) => (
                                        <ProjectCard key={project.id} project={project} />
                                    ))}
                                </ol>
                                <div className="mt-8">
                                    <a
                                        className="inline-flex items-center font-medium leading-tight text-[#E91E63] dark:text-[#E91E63] group"
                                        aria-label="View Full Project Archive (opens in a new tab)"
                                        href="https://github.com/J3r0x"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span>
                                            <span className="border-b border-transparent pb-px transition group-hover:border-pink-400 motion-reduce:transition-none">
                                                View Full Project Archive
                                            </span>
                                            <span className="whitespace-nowrap">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </main>
            </div>
        </div>
    )
}
