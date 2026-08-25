import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers, ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Full Stack' | 'AI & ML'>('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-accent/10 text-accent border border-accent/20">
                03 // PROJECTS
              </span>
              <div className="h-[1px] w-24 bg-border" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Featured Engineering Work
            </h2>
            <p className="text-sm text-muted max-w-xl">
              Production-ready web applications, automated scheduling engines, and computer vision systems built with clean code and tested architecture.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface border border-border">
            {(['All', 'Full Stack', 'AI & ML'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-card text-foreground shadow-sm border border-border'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {cat === 'All' ? 'All Projects' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-card border border-border hover:border-border-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-sm hover:shadow-xl hover:translate-y-[-2px]"
            >
              {/* Card Header Area */}
              <div className="p-6 sm:p-7 space-y-5 flex-1">
                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 text-xs font-mono font-semibold rounded-full bg-accent/10 text-accent border border-accent/20">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-muted">
                      {project.year}
                    </span>
                  </div>

                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                {/* Title */}
                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Problem / Solution Snapshot */}
                <div className="p-3.5 rounded-xl bg-surface border border-border/60 text-xs space-y-1.5">
                  <div>
                    <span className="font-semibold text-foreground">Core Impact: </span>
                    <span className="text-muted">{project.solution}</span>
                  </div>
                </div>

                {/* Key feature pills */}
                <div className="space-y-1.5">
                  {project.keyFeatures.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-surface border border-border text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-surface border border-border text-muted">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 border-t border-border bg-surface/50 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline focus:outline-none"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Architecture & Deep Dive</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border bg-card hover:bg-card-hover text-muted hover:text-foreground transition-colors"
                      title="Live Demo"
                      aria-label="Live Demo"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-card-hover text-foreground text-xs font-medium transition-colors"
                    title="View Source on GitHub"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repositories Link */}
        <div className="p-6 rounded-2xl bg-card border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-foreground">
              Looking for more repositories and open source work?
            </h4>
            <p className="text-xs text-muted">
              Explore all active codebases, Jupyter notebooks, and utility libraries on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/pradipkumar271"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface hover:bg-card-hover border border-border text-foreground text-xs sm:text-sm font-semibold transition-colors flex-shrink-0"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Visit @pradipkumar271</span>
            <ExternalLink className="w-3.5 h-3.5 text-muted" />
          </a>
        </div>
      </div>
    </section>
  );
};
