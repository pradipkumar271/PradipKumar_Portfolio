import React from 'react';
import { Code, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const CompetitiveProgramming: React.FC = () => {
  return (
    <section className="py-12 border-t border-border bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-sm">
          {/* Left Info */}
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-muted uppercase">
                  Problem Solving & Algorithms
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  Competitive Programming & CodeChef Profile
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Practicing data structures and algorithmic challenges on <strong className="text-foreground">CodeChef</strong> and competitive programming platforms, strengthening core algorithmic efficiency, space-time optimization, and clean implementation in C++ and Python.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Handle: <strong className="text-foreground">pradipkumar_27</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>C++ OOP & DSA Practice</span>
              </div>
            </div>
          </div>

          {/* Right Action */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <a
              href={PERSONAL_INFO.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              <span>View CodeChef Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
