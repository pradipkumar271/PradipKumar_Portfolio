export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  problem: string;
  solution: string;
  architecture?: string[];
  keyFeatures: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  category: 'Full Stack' | 'AI & ML' | 'Web Apps';
  year: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  subsidiaryOrPartner?: string;
  duration: string;
  period: string;
  location: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
  certificateId?: string;
  certificateUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  partner?: string;
  year: string;
  date?: string;
  category: 'Core Engineering' | 'Artificial Intelligence' | 'Hackathon & Competitions' | 'Programming';
  credentialId?: string;
  scoreOrDetail?: string;
  documentPath: string;
  verifyUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    featured?: boolean;
  }[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  highlights: string[];
}
