const es = {
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    stack: "Tecnologías",
    projects: "Proyectos",
    contact: "Contacto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    main: "Navegación principal",
  },
  hero: {
    available: "Disponible para nuevas oportunidades",
    role: "Full Stack Developer",
    subtitle: "Estudiante de Desarrollo de Software",
    location: "Medellín, Colombia",
    photoAlt: "Foto de Juan Diego Murillo Rivas",
    pitch:
      "Construyo aplicaciones web completas, desde la interfaz hasta la base de datos y los servicios que las conectan. Tres proyectos propios con Next.js y React, con autenticación, bases de datos e integración de servicios.",
    ctaProjects: "Ver proyectos",
    ctaCv: "Descargar CV",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  about: {
    kicker: "Sobre mí",
    title: "Desarrollo web de punta a punta",
    paragraphs: [
      "Soy estudiante de octavo semestre de Desarrollo de Software y construyo aplicaciones web completas: interfaces con React y Next.js, lógica de negocio y APIs con Python y JavaScript, y bases de datos como PostgreSQL y Appwrite.",
      "Mis proyectos incluyen un sistema de gestión para un consultorio odontológico con acceso por roles y recordatorios por correo, y una aplicación de estudio con repetición espaciada e inteligencia artificial.",
    ],
    cards: [
      {
        title: "Qué construyo",
        text: "Aplicaciones web con autenticación, bases de datos, integración de servicios y despliegue en línea.",
      },
      {
        title: "Con qué lo hago",
        text: "Next.js, React, TypeScript, Tailwind CSS, Python, PostgreSQL y Appwrite.",
      },
      {
        title: "Cómo abordo los problemas",
        text: "Primero entiendo el problema, lo divido en funcionalidades pequeñas, las implemento y las valido de forma iterativa, corrigiendo errores a medida que avanzo.",
      },
    ],
  },
  stack: {
    kicker: "Tecnologías",
    title: "Stack tecnológico",
    subtitle: "Herramientas que uso en mis proyectos, agrupadas por área. Nivel general: intermedio.",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Bases de datos",
      tools: "Herramientas",
    },
  },
  projects: {
    kicker: "Proyectos",
    title: "Proyectos destacados",
    subtitle: "Tres aplicaciones que diseñé y desarrollé, presentadas como pequeños casos de estudio.",
    labels: {
      problem: "Problema",
      features: "Funcionalidades",
      stack: "Tecnologías",
      role: "Mi participación",
      demo: "Ver demo",
      code: "Ver código",
      details: "Ver detalles",
      close: "Cerrar",
      screenshotOf: "Captura de pantalla de",
    },
    items: {
      odontosalud: {
        tag: "Full Stack Project",
        title: "OdontoSalud",
        summary:
          "Sistema web para gestionar un consultorio odontológico: pacientes, citas, turnos y recordatorios automáticos por correo.",
        problem:
          "Organizar pacientes, citas y turnos de un consultorio, y recordar a cada paciente su cita de forma centralizada y automática.",
        features: [
          "Inicio de sesión y acceso por roles: administrador, doctor, recepcionista y paciente",
          "Gestión de pacientes, citas, historial y turnos",
          "Recordatorios automáticos por correo con plantillas HTML y CSS",
          "API de mensajería en Python (Flask) con SMTP",
          "Registro de usuarios y validación de formularios",
          "Verificación de cuentas por correo",
        ],
        role: "Proyecto académico desarrollado de forma individual: diseñé y desarrollé la aplicación web, la autenticación por roles, la base de datos y la API de mensajería en Python.",
      },
      akinmind: {
        tag: "Full Stack · IA",
        title: "AkinMind",
        summary:
          "Aplicación de estudio con tarjetas, repetición espaciada (SM-2) y generación de tarjetas con inteligencia artificial.",
        problem:
          "Crear tarjetas de estudio toma tiempo y repasarlas sin un método hace perder eficiencia. AkinMind automatiza la creación con IA y programa los repasos con repetición espaciada.",
        features: [
          "Autenticación y datos de usuario con Appwrite",
          "Gestión de mazos y tarjetas",
          "Sesiones de estudio con el algoritmo de repetición espaciada SM-2",
          "Generación de tarjetas con IA (OpenRouter)",
          "Conversión de PDF a tarjetas",
          "Estadísticas con seguimiento de rachas",
          "Web Speech API y módulo de práctica",
        ],
        role: "Proyecto personal que desarrollo de forma individual y sigo mejorando de forma iterativa: interfaz, autenticación, lógica de repetición espaciada e integración con IA.",
      },
      "habit-tracker": {
        tag: "Aplicación web",
        title: "Habit Tracker",
        summary:
          "Aplicación web para registrar hábitos diarios, marcarlos en un calendario y guardar notas por día.",
        problem:
          "Mantener la constancia es más fácil cuando el registro es rápido y visual: marcar el día en un calendario y anotar cómo fue.",
        features: [
          "Registro de hábitos diarios",
          "Calendario para marcar cada día",
          "Notas por día",
          "Persistencia de datos con Appwrite",
        ],
        role: "Proyecto personal desarrollado de forma individual: interfaz, calendario, notas y persistencia con Appwrite.",
      },
    },
  },
  education: {
    kicker: "Formación y experiencia",
    title: "Formación y experiencia práctica",
    studyTitle: "Formación",
    study: [
      {
        title: "Fundación Universitaria María Cano",
        subtitle: "Desarrollo de Software (programa profesional)",
        period: "Octavo semestre en curso · Graduación estimada a mitad de 2027",
      },
      {
        title: "Educación secundaria",
        subtitle: "Bachiller",
        period: "2010 – 2021",
      },
    ],
    coursesTitle: "Cursos e idiomas",
    courses: [
      { title: "Fundamentos de Programación", detail: "MinTIC · Misión TIC 2022 · Universidad de Caldas" },
      { title: "Inglés", detail: "Nivel A2 · Curso universitario hacia B1" },
    ],
    practiceTitle: "Experiencia práctica",
    practiceText:
      "Mi experiencia práctica viene de los proyectos que diseño y desarrollo por mi cuenta, desde la interfaz hasta la base de datos.",
    practiceItems: ["OdontoSalud (proyecto académico)", "AkinMind (proyecto personal)", "Habit Tracker (proyecto personal)"],
  },
  contact: {
    kicker: "Contacto",
    title: "¿Conversamos?",
    text: "Si tienes una oportunidad en tu equipo o un proyecto en mente, escríbeme. Me encantará conversar.",
    email: "Escribirme",
    copy: "Copiar correo",
    copied: "Copiado",
    linkedin: "LinkedIn",
    github: "GitHub",
    cv: "Descargar CV",
  },
  footer: {
    built: "Hecho con Next.js y React",
    rights: "Todos los derechos reservados",
  },
};

export default es;
