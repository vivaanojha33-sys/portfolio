import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, ChevronDown, MapPin } from 'lucide-react';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
import { experiences } from '../data/portfolio';

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0].id);

  return (
    <SectionWrapper id="experience">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          subtitle="Career"
          title="Professional Experience"
          description="7+ years delivering enterprise solutions across top organizations"
        />

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-6 hidden w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/30 to-transparent md:left-8 md:block" />

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative md:pl-20"
                >
                  <div className="absolute left-4 hidden h-4 w-4 rounded-full border-2 border-violet-500 bg-[#0a0a0f] md:left-6 md:block">
                    <div className="absolute inset-1 rounded-full bg-violet-500" />
                  </div>

                  <div
                    className={`glass cursor-pointer rounded-2xl transition-all ${
                      isExpanded ? 'ring-1 ring-violet-500/30' : ''
                    }`}
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  >
                    <div className="flex items-start justify-between gap-4 p-6">
                      <div className="flex-1">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-violet-500/10 px-3 py-0.5 text-xs font-medium text-violet-300">
                            {exp.period}
                          </span>
                          {exp.client && (
                            <span className="rounded-full bg-cyan-500/10 px-3 py-0.5 text-xs font-medium text-cyan-300">
                              Client: {exp.client}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <div className="mt-1 flex flex-wrap items-center gap-3 text-zinc-400">
                          <span className="flex items-center gap-1.5">
                            <Building2 size={14} />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>
                        {exp.project && (
                          <p className="mt-2 font-mono text-sm text-violet-400">Project: {exp.project}</p>
                        )}
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-1 text-zinc-500"
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-white/5 px-6 pt-2 pb-6">
                            <p className="mb-4 text-zinc-400">{exp.description}</p>
                            <ul className="mb-4 space-y-2">
                              {exp.highlights.map((highlight) => (
                                <li key={highlight} className="flex gap-2 text-sm text-zinc-400">
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                              {exp.tech.map((t) => (
                                <span
                                  key={t}
                                  className="rounded-lg bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-400"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
