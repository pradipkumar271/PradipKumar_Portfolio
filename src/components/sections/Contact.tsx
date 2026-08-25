import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, MapPin, Send, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon, CodeChefIcon } from '../ui/Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ContactProps {
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onShowToast('Email address copied to clipboard!');
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject || 'Opportunity / Collaboration')}&body=${encodeURIComponent(message)}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-accent/10 text-accent border border-accent/20">
              08 // GET IN TOUCH
            </span>
            <div className="h-[1px] w-24 bg-border hidden sm:block" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Let's build something meaningful.
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-2xl">
            Whether you are looking for a Software Engineer, Full Stack Developer, or discussing prospective AI & web projects, feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Direct Connect Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-card border border-border space-y-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-accent/10 text-accent border border-accent/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">Direct Email</h3>
                  <p className="text-xs text-muted">Fastest response channel</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface border border-border flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-foreground truncate select-all">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-card hover:bg-card-hover border border-border text-muted hover:text-foreground transition-all active:scale-95 flex-shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3 text-xs text-muted">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-2xl bg-card border border-border space-y-4">
              <h4 className="text-xs font-bold text-muted uppercase tracking-wider">
                Professional Networks
              </h4>

              <div className="space-y-2.5">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-surface hover:bg-surface/80 border border-border hover:border-border-hover text-foreground text-xs font-semibold transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-blue-500" />
                    <span>Connect on LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted group-hover:text-foreground transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-surface hover:bg-surface/80 border border-border hover:border-border-hover text-foreground text-xs font-semibold transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-foreground" />
                    <span>View GitHub Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted group-hover:text-foreground transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-surface hover:bg-surface/80 border border-border hover:border-border-hover text-foreground text-xs font-semibold transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <CodeChefIcon className="w-4 h-4 text-amber-500" />
                    <span>Check CodeChef Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-muted group-hover:text-foreground transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Direct Message Launcher */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-muted">
                  Launches your default email client pre-addressed to {PERSONAL_INFO.email}
                </p>
              </div>
            </div>

            <form onSubmit={handleSendEmail} className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-foreground">
                  Subject / Topic
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                  className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-foreground text-xs sm:text-sm placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Pradip, I reviewed your portfolio and would like to discuss..."
                  className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-foreground text-xs sm:text-sm placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <span className="text-[11px] text-muted">
                  Delivered straight to <span className="text-foreground">{PERSONAL_INFO.email}</span>
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email Client</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
