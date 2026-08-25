import React, { useState } from 'react';
import { ExternalLink, Download, Eye, FileCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/portfolioData';
import { Certification } from '../../types';

interface CertificationsProps {
  onSelectCert: (cert: Certification) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ onSelectCert }) => {
  const [filter, setFilter] = useState<'All' | 'Core Engineering' | 'Artificial Intelligence' | 'Hackathon & Competitions' | 'Programming'>('All');

  const filteredCerts = filter === 'All'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter(c => c.category === filter);

  return (
    <section id="certifications" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-accent/10 text-accent border border-accent/20">
                05 // CREDENTIALS & CERTIFICATIONS
              </span>
              <div className="h-[1px] w-24 bg-border" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Verified Certifications & Accreditations
            </h2>
            <p className="text-sm text-muted max-w-xl">
              Authentic certifications from Indian Institute of Technology (IIT Kharagpur), ISRO Hackathon, EdiGlobe, and Parul University.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-surface border border-border">
            {(['All', 'Core Engineering', 'Artificial Intelligence', 'Hackathon & Competitions', 'Programming'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-card text-foreground shadow-sm border border-border'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {cat === 'Hackathon & Competitions' ? 'Hackathon' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-card border border-border hover:border-border-hover transition-all duration-300 flex flex-col justify-between space-y-5 group shadow-sm hover:shadow-xl hover:translate-y-[-2px]"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 text-xs font-mono font-medium rounded-full bg-surface border border-border text-muted">
                    {cert.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-muted">
                    <span>{cert.year}</span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-accent flex items-center gap-1">
                    <span>{cert.issuer}</span>
                    {cert.partner && <span className="text-muted font-normal">({cert.partner})</span>}
                  </p>
                </div>

                {/* Score / Details */}
                {cert.scoreOrDetail && (
                  <div className="p-3 rounded-xl bg-surface border border-border/70 text-xs text-muted leading-relaxed">
                    <span className="font-semibold text-foreground">Highlight: </span>
                    <span>{cert.scoreOrDetail}</span>
                  </div>
                )}

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="text-[11px] font-mono text-muted flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ID: <strong className="text-foreground">{cert.credentialId}</strong></span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-border flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectCert(cert)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface hover:bg-card-hover border border-border text-foreground text-xs font-semibold transition-colors group/btn"
                >
                  <Eye className="w-3.5 h-3.5 text-accent group-hover/btn:scale-110 transition-transform" />
                  <span>View Document</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-muted hover:text-foreground hover:bg-surface border border-transparent hover:border-border transition-colors"
                      title="Verify Online"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <a
                    href={cert.documentPath}
                    download
                    className="p-1.5 rounded-lg text-muted hover:text-emerald-500 hover:bg-surface border border-transparent hover:border-border transition-colors"
                    title="Download Certificate PDF"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
