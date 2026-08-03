import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
import { personalInfo, summary, education } from '../data/portfolio';

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          subtitle="About Me"
          title="Crafting Digital Excellence"
          description="Passionate about building production-grade applications with clean architecture"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass lg:col-span-3 rounded-2xl p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/20">
                <Sparkles className="text-violet-400" size={20} />
              </div>
              <h3 className="text-xl font-semibold">Professional Summary</h3>
            </div>
            <p className="leading-relaxed text-zinc-400">{summary}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-xs tracking-wider text-zinc-500 uppercase">Full Name</p>
                <p className="mt-1 font-medium">{personalInfo.name}</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-xs tracking-wider text-zinc-500 uppercase">Location</p>
                <p className="mt-1 font-medium">{personalInfo.location}</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-xs tracking-wider text-zinc-500 uppercase">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="mt-1 block font-medium text-violet-400 hover:underline">
                  {personalInfo.email}
                </a>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-xs tracking-wider text-zinc-500 uppercase">Status</p>
                <p className="mt-1 flex items-center gap-2 font-medium text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {personalInfo.availability}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            <div className="glass rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <GraduationCap className="text-cyan-400" size={22} />
                <h3 className="text-lg font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.degree} className="border-l-2 border-violet-500/50 pl-4">
                    <p className="font-medium">{edu.degree}</p>
                    <p className="text-sm text-zinc-400">{edu.institution}</p>
                    <p className="text-xs text-zinc-500">{edu.period}</p>
                    {edu.highlight && (
                      <span className="mt-1 inline-block rounded-full bg-violet-500/10 px-2 py-0.5 text-xs text-violet-300">
                        {edu.highlight}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <Briefcase className="text-violet-400" size={22} />
                <h3 className="text-lg font-semibold">Core Domains</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Insurance', 'Banking', 'Pharmaceutical', 'E-Commerce', 'Enterprise SaaS'].map((domain) => (
                  <span
                    key={domain}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
