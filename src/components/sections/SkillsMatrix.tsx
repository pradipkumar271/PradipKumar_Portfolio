import React from 'react';
import { Layout, Server, Cpu, Database, Wrench, Binary, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

const ICON_MAP: Record<string, React.ElementType> = {
  Layout,
  Server,
  Cpu,
  Database,
  Wrench,
  Binary,
};

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-border bg-surface/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-accent/10 text-accent border border-accent/20">
              04 // TECHNICAL EXPERTISE
            </span>
            <div className="h-[1px] flex-1 bg-border" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Skills & Technology Stack
          </h2>
          <p className="text-sm text-muted max-w-2xl">
            Verified technologies applied across production web applications, deep learning projects, academic coursework, and industry internships.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = ICON_MAP[category.iconName] || Layout;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card border border-border hover:border-border-hover transition-all duration-200 flex flex-col justify-between space-y-5 shadow-sm group"
              >
                {/* Category Header */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-surface border border-border text-accent group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-muted line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border/80">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-3 py-1 text-xs font-mono rounded-lg border transition-colors flex items-center gap-1.5 ${
                        skill.featured
                          ? 'bg-surface border-accent/30 text-foreground font-medium hover:border-accent'
                          : 'bg-surface/50 border-border text-muted hover:text-foreground'
                      }`}
                    >
                      {skill.featured && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      )}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CS Core Focus Callout */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-indigo-500/10 border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-card border border-border text-emerald-500 flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-foreground">
                Engineering Fundamentals & Continuous Learning
              </h4>
              <p className="text-xs text-muted">
                Proven mastery in Computer Networks (NPTEL Elite, IIT KGP) and Placement-Oriented OOP in C++ (Hitbullseye & Parul Univ).
              </p>
            </div>
          </div>

          <a
            href="#certifications"
            className="px-4 py-2 rounded-xl bg-card hover:bg-card-hover border border-border text-foreground text-xs font-semibold whitespace-nowrap transition-colors"
          >
            View Verification
          </a>
        </div>
      </div>
    </section>
  );
};
