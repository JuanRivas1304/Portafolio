export const SITE = {
  name: "Juan Diego Murillo Rivas",
  shortName: "Juan Diego",
  initials: "JD",
  email: "juandrivas66@gmail.com",
  github: "https://github.com/JuanRivas1304",
  linkedin: "https://www.linkedin.com/in/juan-diego-murillo-rivas-05447430b/",
  cv: "/CV_JuanDiegoMurillo_FullStackDeveloperIntern.pdf",
  cvFileName: "CV_JuanDiegoMurillo_FullStackDeveloperIntern.pdf",
};

export const NAV = [
  { id: "inicio", key: "home" },
  { id: "sobre-mi", key: "about" },
  { id: "tecnologias", key: "stack" },
  { id: "proyectos", key: "projects" },
  { id: "contacto", key: "contact" },
];

export const STACK = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  backend: ["Node.js", "Python", "Flask", "APIs REST", "NextAuth", "JWT", "SMTP"],
  databases: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Appwrite", "SQL"],
  tools: ["Git", "GitHub", "Postman", "Vercel", "Pruebas unitarias"],
};

export const PROJECTS = [
  {
    id: "odontosalud",
    image: "/images/odontosalud1.png",
    stack: ["React", "Next.js", "PostgreSQL", "Python", "Flask", "Tailwind CSS", "NextAuth", "JWT"],
    demo: null,
    repo: "https://github.com/JuanRivas1304/OdontoSalud",
  },
  {
    id: "akinmind",
    image: "/images/akinmind.png",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Appwrite", "OpenRouter"],
    demo: "https://akin-mind.vercel.app/login",
    repo: "https://github.com/JuanRivas1304/Akin-Mind",
  },
  {
    id: "habit-tracker",
    image: "/images/habit-tracker.png",
    stack: ["Next.js", "React", "Tailwind CSS", "Appwrite"],
    demo: "https://habit-tracker-plum-sigma.vercel.app/",
    repo: "https://github.com/JuanRivas1304/Habit-Tracker",
  },
];
