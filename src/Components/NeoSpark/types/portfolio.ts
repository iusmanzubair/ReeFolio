export interface SocialLink {
  url: string;
  type: 'button';
  label: string;
  style: 'primary' | 'outline';
}

export interface TechItem {
  logo: string;
  name: string;
}

export interface ProjectItem {
  liveLink: string;
  techStack: TechItem[];
  githubLink: string;
  projectName: string;
  projectImage: string;
  projectTitle: string;
  projectDescription: string;
}

export interface ExperienceItem {
  role: string;
  companyName: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  techStack: TechItem[];
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  text: { primary: string; secondary: string };
  background: { primary: string; secondary: string };
  accent: string;
}

// Section Data Types
export interface HeroData {
  name: string;
  badge: { texts: string[]; isVisible: boolean };
  actions: SocialLink[];
  summary: string;
  titlePrefix: string;
  titleSuffixOptions: string[];
}

export interface UserInfoData {
  name: string;
  email: string;
  title: string;
  github: string;
  linkedin: string;
  location: string;
}

export interface SEOData {
  title: string;
  description: string;
}

// Discriminated Union for Section Types
export type Section = 
  | { type: 'hero'; data: HeroData }
  | { type: 'projects'; data: ProjectItem[]; sectionTitle: string; sectionDescription: string }
  | { type: 'experience'; data: ExperienceItem[]; sectionTitle: string; sectionDescription: string }
  | { type: 'technologies'; data: TechItem[]; sectionTitle: string; sectionDescription: string }
  | { type: 'userInfo'; data: UserInfoData; sectionTitle: string; sectionDescription: string }
  | { type: 'themes'; data: Record<string, { colors: ThemeColors }> }
  | { type: 'seo'; data: SEOData; sectionTitle: string; sectionDescription: string };

export interface Config {
  sections: Section[];
}