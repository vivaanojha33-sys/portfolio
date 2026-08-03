import { motion } from 'framer-motion';
import { Cloud, Database, Layout, Server, Shield, Wrench } from 'lucide-react';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
import { skillCategories } from '../data/portfolio';

const iconMap = {
  layout: Layout,
  server: Server,
  database: Database,
  cloud: Cloud,
  shield: Shield,
  wrench: Wrench,
};

export function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-white/[0.01]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          subtitle="Expertise"
          title="Technical Skills"
          description="A comprehensive toolkit for building modern, scalable applications"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass group rounded-2xl p-6 transition-shadow hover:shadow-lg hover:shadow-violet-500/5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 transition group-hover:from-violet-600/30 group-hover:to-cyan-500/30">
                    <Icon className="text-violet-400" size={22} />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-400 transition group-hover:bg-white/8 group-hover:text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass rounded-2xl p-8"
        >
          <h3 className="mb-6 text-center text-lg font-semibold">Technology Radar</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React 19', 'Node.js 22', 'TypeScript 5', 'NestJS', 'Next.js',
              'Docker', 'Kubernetes', 'AWS Lambda', 'Azure AKS', 'Redis',
              'PostgreSQL', 'MongoDB', 'GraphQL', 'WebSockets', 'CI/CD',
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2 text-sm font-medium text-violet-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
