import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 border-t border-border bg-surface/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-accent/10 text-accent border border-accent/20">
              07 // ACADEMIC BACKGROUND
            </span>
            <div className="h-[1px] flex-1 bg-border" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Education & Academic Credentials
          </h2>
          <p className="text-sm text-muted max-w-2xl">
            Strong foundations in Computer Science, Information Technology, Discrete Mathematics, and Problem Solving.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-border-hover transition-all duration-300 flex flex-col justify-between space-y-6 shadow-sm group"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="px-2.5 py-0.5 text-xs font-mono font-semibold rounded-full bg-accent/10 text-accent border border-accent/20">
                      {edu.score}
                    </span>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors pt-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-foreground">
                      {edu.field}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-surface border border-border text-accent flex-shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>

                {/* Institution & Period */}
                <div className="space-y-1 text-xs font-mono text-muted">
                  <div className="font-semibold text-foreground text-sm font-sans">
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-muted" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-muted" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-border/70">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-muted leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
