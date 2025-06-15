export interface Translation {
  nav: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    location: string;
    contactBtn: string;
    downloadBtn: string;
  };
  about: {
    title: string;
    description: string;
    stats: {
      experience: string;
      projects: string;
      technologies: string;
      satisfaction: string;
    };
  };
  projects: {
    title: string;
    projects: Array<{
      title: string;
      description: string;
      technologies: string[];
      image: string;
      link?: string;
    }>;
  };
  experience: {
    title: string;
    jobs: Array<{
      title: string;
      company: string;
      location: string;
      period: string;
      description: string;
      tech: string[];
    }>;
  };
  skills: {
    title: string;
    education: {
      title: string;
      degree: string;
      university: string;
      period: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      send: string;
      successMsg: string;
    };
    info: {
      email: string;
      phone: string;
      linkedin: string;
    };
  };
  footer: {
    text: string;
  };
}
