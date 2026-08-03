import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, MapPin, Phone } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './icons/SocialIcons';
import { personalInfo, stats } from '../data/portfolio';
import { useTypewriter } from '../hooks/useScrollSpy';

const roles = [
  'Senior Software Engineer',
  'Full-Stack Developer',
  'Cloud-Native Architect',
  'Microservices Expert',
];

export function Hero() {
  const typedRole = useTypewriter(roles, 70, 2500);

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-20">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {personalInfo.availability}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-2 font-mono text-sm tracking-wider text-zinc-500 uppercase"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              {personalInfo.shortName.split(' ')[0]}{' '}
              <span className="gradient-text">{personalInfo.shortName.split(' ')[1]}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 h-8 text-xl font-medium text-zinc-300 md:text-2xl"
            >
              {typedRole}
              <span className="ml-1 animate-pulse text-violet-400">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8 max-w-xl text-lg leading-relaxed text-zinc-400"
            >
              {personalInfo.tagline}. {personalInfo.yearsOfExperience}+ years crafting production-grade
              applications across Insurance, Banking, and Pharma.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8 flex flex-wrap items-center gap-4 text-sm text-zinc-500"
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-violet-400" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone size={16} className="text-violet-400" />
                {personalInfo.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail size={16} className="text-violet-400" />
                {personalInfo.email}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-violet-500/25 transition hover:shadow-violet-500/40 hover:brightness-110"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Projects
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:border-violet-500/50 hover:text-violet-400"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:border-violet-500/50 hover:text-violet-400"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.resumeUrl}
                download="Vivaan_Ojha_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-400 transition hover:bg-white/10 hover:text-white"
              >
                <Download size={16} />
                Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 blur-2xl" />
              <div className="glass relative flex h-full flex-col justify-center rounded-3xl p-8">
                <div className="mb-6 font-mono text-xs text-violet-400">// tech-stack.ts</div>
                <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-zinc-300">
                  <code>{`const engineer = {
  name: "${personalInfo.shortName}",
  role: "Senior Software Engineer",
  experience: "${personalInfo.yearsOfExperience}+ years",
  stack: [
    "React", "Node.js", "TypeScript",
    "AWS", "Azure", "Kubernetes"
  ],
  domains: [
    "Insurance", "Banking", "Pharma"
  ],
  available: true
};`}</code>
                </pre>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-white/5 p-4 text-center">
                      <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                      <div className="mt-1 text-xs text-zinc-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-zinc-500 transition hover:text-violet-400"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
