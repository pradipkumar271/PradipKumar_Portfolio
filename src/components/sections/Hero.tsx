import React from 'react';
import { ArrowRight, Download, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, CodeChefIcon } from '../ui/Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 radial-gradient-bg pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 emerald-gradient-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Software Engineering & Full-Stack Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-blue-500 to-indigo-500">{PERSONAL_INFO.name}</span>.
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-muted">
                {PERSONAL_INFO.role}
              </p>
            </div>

            {/* Bio */}
            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
              {PERSONAL_INFO.bio}
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-muted font-medium pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                <span>Parul University (7.97 CGPA)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-500" />
                <span>NPTEL Elite (64%)</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent hover:bg-accent-glow text-white text-sm font-semibold shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card hover:bg-card-hover text-foreground text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-emerald-500" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-transparent hover:border-border text-muted hover:text-foreground text-sm font-medium transition-colors"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Social Proof Strip */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-border/80">
              <span className="text-xs text-muted font-mono">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-foreground hover:underline transition-colors font-medium"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-border">•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-foreground hover:underline transition-colors font-medium"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-500" />
                <span>LinkedIn</span>
              </a>
              <span className="text-border">•</span>
              <a
                href={PERSONAL_INFO.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-foreground hover:underline transition-colors font-medium"
              >
                <CodeChefIcon className="w-4 h-4 text-amber-500" />
                <span>CodeChef</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-End Avatar & Profile Card */}
          <div className="flex-shrink-0 relative">
            <div className="relative group">
              {/* Subtle ambient blur ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-3xl opacity-20 group-hover:opacity-35 blur-xl transition-all duration-500" />
              
              {/* Card Container */}
              <div className="relative w-64 sm:w-80 rounded-2xl bg-surface border border-border overflow-hidden shadow-2xl p-3 space-y-3">
                {/* Photo with aspect ratio */}
                <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 relative">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt="Pradip Kumar"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Overlay Gradient on bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-3">
                    <div>
                      <h2 className="text-white font-bold text-base leading-tight">
                        {PERSONAL_INFO.fullName}
                      </h2>
                      <p className="text-emerald-400 text-xs font-mono">
                        B.Tech IT • 2023–2027
                      </p>
                    </div>
                  </div>
                </div>

                {/* Micro tech pills */}
                <div className="flex items-center justify-between px-1 py-1 text-xs text-muted font-mono">
                  <span className="px-2 py-0.5 rounded bg-card border border-border text-foreground">React</span>
                  <span className="px-2 py-0.5 rounded bg-card border border-border text-foreground">Node.js</span>
                  <span className="px-2 py-0.5 rounded bg-card border border-border text-foreground">Python</span>
                  <span className="px-2 py-0.5 rounded bg-card border border-border text-foreground">MongoDB</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
