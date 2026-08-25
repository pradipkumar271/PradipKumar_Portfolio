import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface RepoCard {
  name: string;
  desc: string;
  language: string;
  langColor: string;
  url: string;
  updated: string;
}

const PUBLIC_REPOS: RepoCard[] = [
  {
    name: 'EduX_Time_Table_Managment',
    desc: 'Conflict-free academic timetable management system with dynamic builder, teacher constraint validation, and PDF export.',
    language: 'JavaScript',
    langColor: 'bg-yellow-400',
    url: 'https://github.com/pradipkumar271/EduX_Time_Table_Managment',
    updated: 'Active 2026',
  },
  {
    name: 'Trip-Planner-Web-Application',
    desc: 'Full-stack MERN travel planner with user authentication, itinerary generation, and responsive UI for mobile and desktop.',
    language: 'JavaScript',
    langColor: 'bg-yellow-400',
    url: 'https://github.com/pradipkumar271/Trip-Planner-Web-Application',
    updated: 'Active 2026',
  },
  {
    name: 'SkillGap_AI',
    desc: 'AI-driven skill gap analyzer comparing candidate skills against industry standards to suggest personalized career roadmaps.',
    language: 'JavaScript',
    langColor: 'bg-yellow-400',
    url: 'https://github.com/pradipkumar271/SkillGap_AI',
    updated: 'Active 2026',
  },
  {
    name: 'Auto-Mood-Detection-using-Facial-Recognition',
    desc: 'Real-time webcam facial emotion recognition pipeline using TensorFlow, OpenCV, and deep convolutional neural networks.',
    language: 'Python',
    langColor: 'bg-blue-400',
    url: 'https://github.com/pradipkumar271/Auto-Mood-Detection-using-Facial-Recognition',
    updated: 'Active 2025',
  },
  {
    name: 'EdiGlobe-Major-Project',
    desc: 'Deep learning and computer vision classification models developed during the EdiGlobe Artificial Intelligence internship program.',
    language: 'Jupyter Notebook',
    langColor: 'bg-orange-400',
    url: 'https://github.com/pradipkumar271/EdiGlobe-Major-Project',
    updated: 'Active 2025',
  },
  {
    name: 'Data-Science',
    desc: 'Exploratory data analysis, statistical preprocessing, and predictive machine learning models built in Python.',
    language: 'Jupyter Notebook',
    langColor: 'bg-orange-400',
    url: 'https://github.com/pradipkumar271/Data-Science',
    updated: 'Active 2025',
  },
];

export const GitHubActivity: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 border-t border-border bg-surface/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-accent/10 text-accent border border-accent/20">
                06 // OPEN SOURCE & REPOSITORIES
              </span>
              <div className="h-[1px] w-24 bg-border" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              GitHub Repositories
            </h2>
            <p className="text-sm text-muted max-w-xl">
              Public codebases showcasing full-stack application development, deep learning notebooks, and algorithms.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card hover:bg-card-hover border border-border text-foreground text-xs sm:text-sm font-semibold transition-colors flex-shrink-0"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Follow on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-muted" />
          </a>
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PUBLIC_REPOS.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-card border border-border hover:border-border-hover transition-all duration-200 flex flex-col justify-between space-y-4 group shadow-sm hover:shadow-lg hover:translate-y-[-2px]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-accent">
                    <FolderGit2 className="w-4 h-4" />
                    <span className="font-mono text-xs font-semibold group-hover:underline truncate max-w-[200px]">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted group-hover:text-foreground transition-colors flex-shrink-0" />
                </div>

                <p className="text-xs text-muted leading-relaxed line-clamp-3">
                  {repo.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border/70 text-[11px] font-mono text-muted">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                  <span>{repo.language}</span>
                </div>
                <span>{repo.updated}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
