import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, CodeChefIcon } from '../ui/Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-surface/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground text-base tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                B.Tech IT
              </span>
            </div>
            <p className="text-xs text-muted max-w-sm">
              Engineering full-stack architectures & AI solutions. Grounded in CS fundamentals.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border bg-card hover:bg-card-hover text-muted hover:text-foreground transition-all hover:scale-105"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border bg-card hover:bg-card-hover text-muted hover:text-foreground transition-all hover:scale-105"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border bg-card hover:bg-card-hover text-muted hover:text-foreground transition-all hover:scale-105"
              aria-label="CodeChef Profile"
            >
              <CodeChefIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top & Copyright */}
          <div className="flex items-center gap-4 text-xs text-muted">
            <span>© {currentYear} Pradip Kumar. Built with care and code.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg border border-border bg-card hover:bg-card-hover text-muted hover:text-foreground transition-colors"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
