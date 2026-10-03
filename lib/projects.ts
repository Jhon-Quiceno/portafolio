export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  githubUrl: string;
};

export const projects: Project[] = [
  {
    slug: "korofin",
    name: "KoroFin",
    description:
      "Personal finance app (mobile, Flutter) with a Spring Boot backend and multi-provider AI integration.",
    stack: ["Flutter", "Dart", "Java", "Spring Boot", "Python", "Docker"],
    githubUrl: "https://github.com/Jhon-Quiceno/KoroFin",
  },
  {
    slug: "trueque-estudiantil",
    name: "trueque-estudiantil",
    description:
      "Collaborative academic swap platform for verified university students.",
    stack: ["PHP", "Laravel", "Blade", "CSS"],
    githubUrl: "https://github.com/Jhon-Quiceno/trueque-estudiantil",
  },
  {
    slug: "finsmart",
    name: "FinSmart",
    description:
      "Smart finance platform with a Java backend and a TypeScript front-end.",
    stack: ["Java", "TypeScript", "CSS"],
    githubUrl: "https://github.com/Jhon-Quiceno/FinSmart",
  },
  {
    slug: "watchvault",
    name: "watchvault",
    description:
      "Personal library for tracking movies, series and anime — TMDB + AniList search, dashboard and stats.",
    stack: ["TypeScript", "CSS"],
    githubUrl: "https://github.com/Jhon-Quiceno/watchvault",
  },
  {
    slug: "mantenimiento-predictivo",
    name: "mantenimiento-predictivo",
    description:
      "Industrial predictive-maintenance platform (classification + regression) built with Python and Jupyter.",
    stack: ["Python", "Jupyter Notebook"],
    githubUrl: "https://github.com/Jhon-Quiceno/mantenimiento-predictivo",
  },
  {
    slug: "clinica-citas",
    name: "clinica-citas",
    description: "Clinic appointment-booking system.",
    stack: ["PHP", "Blade", "CSS", "SCSS"],
    githubUrl: "https://github.com/Jhon-Quiceno/clinica-citas",
  },
];
