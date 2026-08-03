import { motion } from 'framer-motion';
import { ExternalLink, Lock } from 'lucide-react';
import { GitHubIcon } from './icons/SocialIcons';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
import { projects } from '../data/portfolio';

export function Projects() {
  const featuredProjects = projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99));
  const enterpriseProjects = projects.filter((p) => p.enterprise);

  return (
    <SectionWrapper id="projects" className="bg-white/[0.01]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          subtitle="Portfolio"
          title="Featured Projects"
          description="Personal and enterprise projects showcasing full-stack expertise"
        />

        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`glass group overflow-hidden rounded-2xl ${
                project.priority === 1 ? 'lg:col-span-2 lg:row-span-1 ring-1 ring-violet-500/30' : ''
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80" />
                {project.priority && project.priority <= 3 && (
                  <span className="absolute top-4 left-4 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    #{project.priority} Featured
                  </span>
                )}
                <div className="absolute right-4 bottom-4 left-4 flex gap-2 opacity-0 transition group-hover:opacity-100">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
                    >
                      <GitHubIcon className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold transition group-hover:text-violet-400">
                  {project.title}
                </h3>
                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <SectionHeading
          subtitle="Enterprise"
          title="Professional Work"
          description="Confidential enterprise platforms delivered for leading organizations"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {enterpriseProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass flex gap-5 rounded-2xl p-6"
            >
              <div className="hidden h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:block">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-60"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <Lock size={14} className="text-zinc-500" />
                  <span className="text-xs tracking-wider text-zinc-500 uppercase">Enterprise</span>
                </div>
                <h3 className="mb-2 font-bold">{project.title}</h3>
                <p className="mb-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-violet-500/10 px-2 py-1 text-xs font-medium text-violet-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
