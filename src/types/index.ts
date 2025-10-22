export interface IMetaHead {
  title: string;
  description: string;
  ogImageUrl: string;
}

export interface IHeroProps {
  name: string;
  about: string;
  jobTitle: string;
}

export interface IExperience {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  jobTitle: string;
  description: string[];
}

export interface IExperiences {
  title: string;
  details: IExperience[];
}

export interface IProject {
  title: string;
  isFeatured: boolean;
  thumbnail: string;
  githubUrl: string;
  liveUrl: string;
  description?: string;
  technologies?: string[];
}

export interface IProjects {
  projects: IProject[];
}

export interface IProjectDetails {
  projectDetail: IProject;
}

export interface ISkill {
  name: string;
  level: string;
  category: "technical" | "management" | "soft";
}

export interface ILanguage {
  name: string;
  proficiency: "Native" | "Fluent" | "Advanced" | "Intermediate" | "Basic";
}

export interface ISocialMedia {
  linkedin: string;
  twitter?: string;
  email: string;
  github?: string;
  website?: string;
}

export interface IInfo {
  baseUrl: string;
  name: string;
  jobDescription: string;
  about: string;
  experience: IExperience[];
  education: IExperience[];
  languages: ILanguage[];
  skills: ISkill[];
  socialMedia: ISocialMedia;
  projects: IProject[];
}