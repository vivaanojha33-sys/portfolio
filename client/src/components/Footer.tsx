import { Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="flex items-center gap-1 text-sm text-zinc-500">
          © {year} {personalInfo.name}. Built with
          <Heart size={14} className="text-violet-400" fill="currentColor" />
          using React & TypeScript
        </p>
        <div className="flex gap-6 text-sm text-zinc-500">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-violet-400">
            LinkedIn
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-violet-400">
            GitHub
          </a>
          <a href={`mailto:${personalInfo.email}`} className="transition hover:text-violet-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
