export type ProjectCategory = 'All' | 'Cybersecurity' | 'AI/ML' | 'Cloud' | 'Web Development';

export interface Project {
  id: string;
  title: string;
  category: ('Cybersecurity' | 'AI/ML' | 'Cloud' | 'Web Development')[];
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  problemSolved: string;
  keyFeatures: string[];
  architecture?: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  image: string;
  featured?: boolean;
  securityFocus?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: 'Practitioner' | 'Exploring' | 'Research Focus' | 'Core';
    badgeColor?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Internship' | 'Ambassadorship' | 'Virtual Internship';
  location?: string;
  description: string[];
  technologies: string[];
  highlight?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Ambassadorship' | 'Research' | 'Initiative' | 'Community';
  description: string;
  tags: string[];
  iconName: string;
}

export interface GithubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  topics: string[];
  updatedAt: string;
  url: string;
}
