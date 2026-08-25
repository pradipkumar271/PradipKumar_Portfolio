import React from 'react';
import { Terminal, Code, Cpu, Network, ShieldCheck, Database, FileCheck } from 'lucide-react';

export const About: React.FC = () => {
  const strengths = [
    {
      icon: Code,
      title: 'Full Stack Engineering',
      desc: 'Architecting end-to-end web applications with React.js, Node.js, Express, and normalized MongoDB schemas. Experienced in JWT auth, role validation, and responsive UI design.',
    },
    {
      icon: Cpu,
      title: 'Applied AI & Computer Vision',
      desc: 'Developing deep learning and CNN models with TensorFlow & OpenCV. Practical experience in optimizing inference pipelines and boosting classification accuracy in real-time feeds.',
    },
    {
      icon: Network,
      title: 'Networking & Protocols',
      desc: 'Elite certified by IIT Kharagpur in Computer Networks and Internet Protocols. Strong grasp of OSI model, TCP/IP stack, routing algorithms, and reliable client-server communication.',
    },
    {
      icon: Database,
      title: 'CS & Problem Solving',
      desc: 'Solid foundations in Data Structures & Algorithms, Object-Oriented Programming (C++), and algorithmic constraint validation applied to real-world scheduling systems.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-accent/10 text-accent border border-accent/20">
              01 // BACKGROUND
            </span>
            <div className="h-[1px] flex-1 bg-border" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            About & Engineering Focus
          </h2>
        </div>

        {/* Story & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-muted leading-relaxed">
            <p>
              I am a software developer based in Gujarat, India, currently pursuing my <span className="text-foreground font-semibold">B.Tech in Information Technology</span> at <span className="text-foreground font-semibold">Parul University (PIET)</span> with an academic CGPA of <span className="text-foreground font-semibold">7.97 / 10</span>. My engineering journey began with a rigorous science and mathematical foundation at Jawahar Navodaya Vidyalaya (JNV).
            </p>
            <p>
              My primary focus spans two interconnected disciplines: <span className="text-foreground font-semibold">Full-Stack Web Development</span> and <span className="text-foreground font-semibold">Practical Machine Learning</span>. Rather than treating web and AI as separate silos, I build intelligent web platforms that combine responsive frontend interfaces, reliable RESTful microservices, and specialized deep learning models.
            </p>
            <p>
              During my internship at <span className="text-foreground font-semibold">EdiGlobe (Zhagaram Technologies)</span>, I engineered computer vision models with TensorFlow and OpenCV, improving prediction accuracy by 15% and cutting inference latency by 20%. I have also built production-style platforms such as <span className="text-foreground font-semibold">EduX</span>, a constraint-driven academic timetable scheduler preventing faculty clashes in real-time.
            </p>

            {/* Quick Fact Badges */}
            <div className="pt-2 flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs text-foreground font-mono">
                <Terminal className="w-3.5 h-3.5 text-accent" />
                <span>Languages: English, Hindi, Gujarati</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs text-foreground font-mono">
                <FileCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified NPTEL Roll: NPTEL25CS15S859701500</span>
              </div>
            </div>
          </div>

          {/* Quick Terminal Card */}
          <div className="lg:col-span-5 rounded-2xl bg-card border border-border overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 bg-surface border-b border-border text-xs font-mono text-muted">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span>pradip@dev: ~/profile</span>
            </div>
            <div className="p-5 font-mono text-xs text-muted space-y-3">
              <div>
                <span className="text-accent">$</span> cat current_focus.json
              </div>
              <div className="p-3 rounded-lg bg-surface/80 border border-border/60 text-[11px] leading-relaxed text-foreground space-y-1">
                <div>{'{'}</div>
                <div className="pl-4"><span className="text-accent">"status"</span>: <span className="text-emerald-400">"Active Contributor & Builder"</span>,</div>
                <div className="pl-4"><span className="text-accent">"degree"</span>: <span className="text-amber-400">"B.Tech Information Technology"</span>,</div>
                <div className="pl-4"><span className="text-accent">"institution"</span>: <span className="text-muted">"Parul University (2023-2027)"</span>,</div>
                <div className="pl-4"><span className="text-accent">"core_stacks"</span>: [<span className="text-indigo-400">"MERN"</span>, <span className="text-indigo-400">"Python AI/ML"</span>, <span className="text-indigo-400">"C++ OOP"</span>],</div>
                <div className="pl-4"><span className="text-accent">"open_to"</span>: [<span className="text-emerald-400">"SDE Roles"</span>, <span className="text-emerald-400">"Full Stack Developer"</span>, <span className="text-emerald-400">"AI Internships"</span>]</div>
                <div>{'}'}</div>
              </div>
              <div className="text-[11px] text-muted flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>All facts verified against institutional certificates</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
          {strengths.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-surface border border-border hover:border-border-hover transition-all hover:translate-y-[-2px] space-y-3 group"
              >
                <div className="p-2.5 w-fit rounded-xl bg-card border border-border text-accent group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
