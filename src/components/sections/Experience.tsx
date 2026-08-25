import React from 'react';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../../data/portfolioData';
import { Certification } from '../../types';

interface ExperienceProps {
  onSelectCert: (cert: Certification) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onSelectCert }) => {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-border bg-surface/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-accent/10 text-accent border border-accent/20">
              02 // EXPERIENCE
            </span>
            <div className="h-[1px] flex-1 bg-border" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Work Experience & Industry Internship
          </h2>
          <p className="text-sm text-muted max-w-2xl">
            Practical engineering experience developing production-grade machine learning models and computer vision pipelines.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-border-hover transition-all duration-300 shadow-sm relative overflow-hidden"
            >
              {/* Top Row: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {exp.type}
                    </span>
                    {exp.certificateId && (
                      <span className="text-xs font-mono text-muted">
                        Certificate ID: <strong className="text-foreground">{exp.certificateId}</strong>
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-accent flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                    {exp.subsidiaryOrPartner && (
                      <span className="text-muted font-normal">
                        ({exp.subsidiaryOrPartner})
                      </span>
                    )}
                  </div>
                </div>

                {/* Date & Location */}
                <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-muted">
                  <div className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-lg border border-border text-foreground font-medium">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-muted" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities & Technical Achievements */}
              <div className="py-6 space-y-3">
                <h4 className="text-xs font-bold text-muted uppercase tracking-wider">
                  Key Technical Contributions & Impact
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-surface/80 border border-border/60 flex items-start gap-3 text-xs sm:text-sm text-muted leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Certificate Action */}
              <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-muted font-mono mr-1">Stack:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-surface border border-border text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.certificateUrl && (
                  <button
                    onClick={() => {
                      onSelectCert({
                        id: exp.id,
                        title: 'Certificate of Internship in Artificial Intelligence',
                        issuer: 'EdiGlobe & Zhagaram Technologies',
                        year: '2025',
                        date: '05-08-2025 to 05-10-2025',
                        category: 'Artificial Intelligence',
                        credentialId: exp.certificateId,
                        scoreOrDetail: 'Completed 2-month internship exhibiting problem-solving and AI development',
                        documentPath: exp.certificateUrl || '/documents/ZHAGRAM-Internship-Certificate-EGICZ0190.pdf',
                        featured: true,
                      });
                    }}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold transition-colors flex-shrink-0"
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>View Official Internship Certificate</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
