import { Navigation } from "../components/Navigation"
import { ExperienceCard } from "../components/ExperienceCard"
import { ProjectCard } from "../components/ProjectCard"
import { SkillsSection } from "../components/SkillsSection"
import { FadeIn } from "../components/FadeIn"
import { useInView } from "../hooks/useInView"
import { projects, experience, skills } from "../data/projects"

const EASE = 'cubic-bezier(0.16,1,0.3,1)';

const Tag = ({ name, closing = false }) => (
  <span className="text-pink-400 font-mono text-sm select-none">
    {closing ? `</${name}>` : `<${name}>`}
  </span>
);

const SectionLabel = ({ tag }) => {
  const [ref, inView] = useInView(0.1);
  return (
    <div ref={ref} className="mb-14">
      {/* Tag wipes in from left */}
      <div style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateX(-16px) skewX(-2deg)',
        transition: `opacity 600ms ${EASE}, transform 800ms ${EASE}`,
      }}>
        <Tag name={tag} />
      </div>
      {/* Line draws right */}
      <div className="mt-3 h-px bg-gradient-to-r from-pink-500/60 to-pink-500/10" style={{
        width: inView ? '5rem' : '0',
        opacity: inView ? 1 : 0,
        transition: `width 900ms ${EASE} 150ms, opacity 500ms ease 150ms`,
      }} />
    </div>
  );
};

export const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── Background Decoration ───────────────────────── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="dot-grid absolute inset-0 opacity-[0.15]" />
        {/* Orbs */}
        <div className="orb-a absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-pink-600/20 blur-[120px]" />
        <div className="orb-b absolute top-[40%] -left-60 w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[110px]" />
        <div className="orb-c absolute bottom-[15%] right-[5%] w-[380px] h-[380px] rounded-full bg-pink-800/15 blur-[100px]" />

        {/* ── Geometric shapes ── */}

        {/* Rotating double-rect — top left */}
        <svg className="shape-spin-slow absolute top-[12%] left-[3%] opacity-[0.07]" width="180" height="180" viewBox="-90 -90 180 180" fill="none">
          <rect x="-78" y="-78" width="156" height="156" stroke="#ec4899" strokeWidth="1" rx="2"/>
          <rect x="-52" y="-52" width="104" height="104" stroke="#ec4899" strokeWidth="0.5" rx="1"/>
          <line x1="-78" y1="0" x2="78" y2="0" stroke="#ec4899" strokeWidth="0.3" />
          <line x1="0" y1="-78" x2="0" y2="78" stroke="#ec4899" strokeWidth="0.3" />
        </svg>

        {/* Counter-rotating triangle — right mid */}
        <svg className="shape-spin-rev absolute top-[44%] right-[3%] opacity-[0.055]" width="130" height="130" viewBox="-65 -65 130 130" fill="none">
          <polygon points="0,-58 50,29 -50,29" stroke="#ec4899" strokeWidth="1" />
          <polygon points="0,-34 30,17 -30,17" stroke="#ec4899" strokeWidth="0.5" />
        </svg>

        {/* Floating diamond — bottom left */}
        <svg className="shape-float absolute bottom-[20%] left-[8%] opacity-[0.06]" style={{"--r":"0deg"}} width="80" height="80" viewBox="-40 -40 80 80" fill="none">
          <rect x="-30" y="-30" width="60" height="60" stroke="#ec4899" strokeWidth="1" transform="rotate(45)" />
          <rect x="-16" y="-16" width="32" height="32" stroke="#ec4899" strokeWidth="0.5" transform="rotate(45)" />
        </svg>

        {/* Floating concentric circles — center */}
        <svg className="shape-float-b absolute top-[68%] left-[36%] opacity-[0.04]" style={{"--r":"0deg"}} width="64" height="64" viewBox="-32 -32 64 64" fill="none">
          <circle cx="0" cy="0" r="30" stroke="#ec4899" strokeWidth="1" />
          <circle cx="0" cy="0" r="20" stroke="#ec4899" strokeWidth="0.6" />
          <circle cx="0" cy="0" r="10" stroke="#ec4899" strokeWidth="0.4" />
        </svg>

        {/* Dashed marching hexagon outline — top right area */}
        <svg className="shape-float absolute top-[28%] left-[50%] opacity-[0.035]" style={{"--r":"0deg"}} width="60" height="60" viewBox="-30 -30 60 60" fill="none">
          <polygon points="0,-26 22.5,-13 22.5,13 0,26 -22.5,13 -22.5,-13" stroke="#ec4899" strokeWidth="1" className="shape-dash-march" />
        </svg>

        {/* Small cross/plus — scattered */}
        <svg className="absolute top-[82%] right-[18%] opacity-[0.05]" width="28" height="28" viewBox="-14 -14 28 28" fill="none">
          <line x1="-12" y1="0" x2="12" y2="0" stroke="#ec4899" strokeWidth="1" />
          <line x1="0" y1="-12" x2="0" y2="12" stroke="#ec4899" strokeWidth="1" />
        </svg>
        <svg className="absolute top-[35%] left-[22%] opacity-[0.04]" width="20" height="20" viewBox="-10 -10 20 20" fill="none">
          <line x1="-8" y1="0" x2="8" y2="0" stroke="#ec4899" strokeWidth="1" />
          <line x1="0" y1="-8" x2="0" y2="8" stroke="#ec4899" strokeWidth="1" />
        </svg>
      </div>

      <Navigation />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center px-4 sm:px-8 md:px-20 max-w-7xl mx-auto py-28 lg:py-0"
      >
        {/* Vertical accent line */}
        <div className="absolute left-0 top-[28%] h-[44%] w-px bg-gradient-to-b from-transparent via-pink-500/30 to-transparent hidden lg:block" />
        {/* Corner bracket decoration */}
        <div className="absolute bottom-12 right-0 hidden lg:block opacity-20">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M40 0 L40 40 L0 40" stroke="#ec4899" strokeWidth="1"/>
          </svg>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30">
          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-500">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-pink-500/60 to-transparent animate-pulse" />
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left — name block */}
          <FadeIn direction="up" delay={0}>
            <div className="relative">
              {/* Open to work badge */}
              <div className="mb-6 flex items-center gap-3">
                <Tag name="developer" />
                <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-emerald-400/80 border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  open to work
                </span>
              </div>

              <h1 className="relative text-5xl sm:text-7xl md:text-[7rem] lg:text-[9rem] font-bold text-white leading-none tracking-tight pl-2">
                Isaac
              </h1>

              {/* Role line */}
              <div className="mt-5 pl-2 flex items-center gap-3">
                <div className="h-px w-8 bg-pink-500/50" />
                <span className="text-xs font-mono text-gray-500 uppercase tracking-[0.18em]">Software Developer</span>
              </div>

              <div className="mt-8 text-right">
                <Tag name="developer" closing />
              </div>
            </div>
          </FadeIn>

          {/* Right — about block */}
          <FadeIn direction="up" delay={180}>
            <div>
              <div className="mb-6">
                <Tag name="about-me" />
              </div>
              <div className="space-y-5 pl-2">
                <p className="text-xs font-mono text-pink-500/70 uppercase tracking-[0.2em]">
                  Software Developer &amp; Student
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                  <span className="text-pink-400">Hey,</span> I build things for the web.
                </h2>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                  I&apos;m a software engineering student who enjoys turning ideas into
                  real products. I&apos;ve worked on full-stack apps, desktop tools, and
                  everything in between, always looking for ways to make software feel
                  both functional and polished.
                </p>
                <p className="text-gray-500 leading-relaxed text-base">
                  When I&apos;m not coding I&apos;m probably breaking something and figuring
                  out why.
                </p>
              </div>
              <div className="mt-6 text-right">
                <Tag name="about-me" closing />
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── Technologies ─────────────────────────────────── */}
      <section id="skills" className="relative py-16 md:py-20 px-4 sm:px-8 md:px-20 max-w-7xl mx-auto border-t border-white/5">
        <SectionLabel tag="technologies" />
        <FadeIn direction="up" delay={100}>
          <SkillsSection skills={skills} />
        </FadeIn>
        <FadeIn direction="none" delay={50}>
          <div className="mt-10 text-right">
            <Tag name="technologies" closing />
          </div>
        </FadeIn>
      </section>

      {/* ── Projects ─────────────────────────────────────── */}
      <section id="projects" className="relative py-16 md:py-20 px-4 sm:px-8 md:px-20 max-w-7xl mx-auto border-t border-white/5">
        <SectionLabel tag="projects" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const colSpans = ['sm:col-span-2 lg:col-span-2', 'sm:col-span-1 lg:col-span-1', 'sm:col-span-1 lg:col-span-1', 'sm:col-span-2 lg:col-span-2', 'sm:col-span-2 lg:col-span-3'];
            const colSpan = colSpans[i] ?? 'sm:col-span-1';
            return (
              <FadeIn key={project.id} direction="up" delay={i * 100} className={`flex ${colSpan}`}>
                <ProjectCard project={project} index={i} />
              </FadeIn>
            );
          })}
        </div>
        <FadeIn direction="none" delay={50}>
          <div className="mt-10 text-right">
            <Tag name="projects" closing />
          </div>
        </FadeIn>
      </section>

      {/* ── Experience ───────────────────────────────────── */}
      <section id="experience" className="relative py-16 md:py-20 px-4 sm:px-8 md:px-20 max-w-7xl mx-auto border-t border-white/5">
        <SectionLabel tag="experience" />
        <div className="space-y-8">
          {experience.map((exp, i) => (
            <FadeIn key={exp.id} direction="left" delay={i * 100}>
              <ExperienceCard experience={exp} />
            </FadeIn>
          ))}
        </div>
        <FadeIn direction="none" delay={50}>
          <div className="mt-10 text-right">
            <Tag name="experience" closing />
          </div>
        </FadeIn>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="relative py-10 px-8 border-t border-white/5 text-center">
        <p className="text-gray-700 text-xs font-mono">
          <span className="text-pink-500/40">&lt;imprint&gt;</span>
          {" "}Isaac © 2026{" "}
          <span className="text-pink-500/40">&lt;/imprint&gt;</span>
        </p>
      </footer>
    </div>
  );
}

