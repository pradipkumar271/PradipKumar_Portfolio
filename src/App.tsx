import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { CredibilityStrip } from './components/sections/CredibilityStrip';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { FeaturedProjects } from './components/sections/FeaturedProjects';
import { SkillsMatrix } from './components/sections/SkillsMatrix';
import { Certifications } from './components/sections/Certifications';
import { Hackathons } from './components/sections/Hackathons';
import { GitHubActivity } from './components/sections/GitHubActivity';
import { CompetitiveProgramming } from './components/sections/CompetitiveProgramming';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { ProjectModal } from './components/ui/ProjectModal';
import { CertificateModal } from './components/ui/CertificateModal';
import { Toast } from './components/ui/Toast';
import { Project, Certification } from './types';

export function App() {
  const [isDark, setIsDark] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3200);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-400">
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      <main className="flex-grow">
        <Hero />
        <CredibilityStrip />
        <About />
        <Experience onSelectCert={setSelectedCert} />
        <FeaturedProjects onSelectProject={setSelectedProject} />
        <SkillsMatrix />
        <Certifications onSelectCert={setSelectedCert} />
        <Hackathons onSelectCert={setSelectedCert} />
        <GitHubActivity />
        <CompetitiveProgramming />
        <Education />
        <Contact onShowToast={showToast} />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      <Toast message={toastMessage} visible={toastVisible} />
    </div>
  );
}

export default App;
