import React from 'react';
import { Rocket, ShieldCheck, FileText } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/portfolioData';
import { Certification } from '../../types';

interface HackathonsProps {
  onSelectCert: (cert: Certification) => void;
}

export const Hackathons: React.FC<HackathonsProps> = ({ onSelectCert }) => {
  const isroCert = CERTIFICATIONS.find(c => c.id === 'isro-hackathon-2025');

  return (
    <section className="py-12 border-t border-border bg-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-purple-950/20 via-slate-900/40 to-blue-950/20 border border-purple-500/20 p-8 sm:p-10 overflow-hidden shadow-xl">
          {/* Subtle cosmic glow effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30">
                  NATIONAL HACKATHON
                </span>
                <span className="text-xs font-mono text-muted">2025</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                ISRO Bharatiya Antariksh Hackathon 2025
              </h3>

              <p className="text-sm text-muted leading-relaxed">
                Submitted an engineering concept addressing complex real-world challenges in space, satellite data applications, and advanced technology. Recognized with an official Certificate of Acknowledgement by the <strong className="text-foreground">Indian Space Research Organisation (ISRO)</strong> and Hack2Skill.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-muted font-mono">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Code: 2025H2S06BAH25-P29614</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Rocket className="w-4 h-4 text-purple-400" />
                  <span>National Space Innovation Initiative</span>
                </div>
              </div>
            </div>

            {/* Action Card */}
            {isroCert && (
              <div className="flex-shrink-0 w-full sm:w-auto flex flex-col sm:flex-row lg:flex-col gap-3">
                <button
                  onClick={() => onSelectCert(isroCert)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-purple-600/20 transition-all hover:scale-105"
                >
                  <FileText className="w-4 h-4" />
                  <span>View ISRO Certificate</span>
                </button>

                <a
                  href={isroCert.documentPath}
                  download
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border bg-card hover:bg-card-hover text-foreground text-xs sm:text-sm font-medium transition-colors"
                >
                  <span>Download PDF</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
