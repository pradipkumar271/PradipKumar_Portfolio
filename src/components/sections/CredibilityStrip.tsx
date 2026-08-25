import React from 'react';
import { GraduationCap, Briefcase, Award, Rocket } from 'lucide-react';

export const CredibilityStrip: React.FC = () => {
  const items = [
    {
      icon: GraduationCap,
      label: 'Parul University',
      value: '7.97 CGPA',
      sub: 'B.Tech Information Technology',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      icon: Briefcase,
      label: 'EdiGlobe AI Intern',
      value: 'AI / CV Models',
      sub: '3+ Models • 15% Acc. Boost',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: Award,
      label: 'NPTEL Elite',
      value: '64% Score',
      sub: 'Computer Networks (IIT KGP)',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
    },
    {
      icon: Rocket,
      label: 'ISRO Hackathon',
      value: '2025 Submission',
      sub: 'Space & Tech Innovation',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20',
    },
  ];

  return (
    <section className="py-8 border-y border-border bg-surface/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-card border border-border/80 hover:border-border transition-colors group"
              >
                <div className={`p-2.5 rounded-lg ${item.bg} ${item.color} flex-shrink-0 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-medium text-muted truncate">
                    {item.label}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-foreground truncate">
                    {item.value}
                  </div>
                  <div className="text-[11px] text-muted truncate">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
