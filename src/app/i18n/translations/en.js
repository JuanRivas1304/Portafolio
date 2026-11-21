const en = {
  nav: {
    home: "Home",
    about: "About",
    stack: "Tech stack",
    projects: "Projects",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    main: "Main navigation",
  },
  hero: {
    available: "Open to new opportunities",
    role: "Full Stack Developer",
    subtitle: "Software Development student",
    location: "Medellín, Colombia",
    photoAlt: "Photo of Juan Diego Murillo Rivas",
    pitch:
      "I build complete web applications, from the interface to the database and the services that connect them. Three personal projects with Next.js and React, featuring authentication, databases and service integration.",
    ctaProjects: "View projects",
    ctaCv: "Download CV",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  about: {
    kicker: "About",
    title: "End-to-end web development",
    paragraphs: [
      "I am an eighth-semester Software Development student and I build complete web applications: interfaces with React and Next.js, business logic and APIs with Python and JavaScript, and databases such as PostgreSQL and Appwrite.",
      "My projects include a management system for a dental clinic with role-based access and email reminders, and a study app with spaced repetition and artificial intelligence.",
    ],
    cards: [
      {
        title: "What I build",
        text: "Web applications with authentication, databases, service integration and online deployment.",
      },
      {
        title: "What I use",
        text: "Next.js, React, TypeScript, Tailwind CSS, Python, PostgreSQL and Appwrite.",
      },
      {
        title: "How I approach problems",
        text: "I first understand the problem, split it into small features, implement them and validate iteratively, fixing bugs as I go.",
      },
    ],
  },
  stack: {
    kicker: "Tech stack",
    title: "Tech stack",
    subtitle: "Tools I use in my projects, grouped by area. Overall level: intermediate.",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
      databases: "Databases",
      tools: "Tools",
    },
  },
  projects: {
    kicker: "Projects",
    title: "Featured projects",
    subtitle: "Three applications I designed and built, presented as small case studies.",
    labels: {
      problem: "Problem",
      features: "Features",
      stack: "Tech stack",
      role: "My role",
      demo: "Live demo",
      code: "View code",
      details: "View details",
      close: "Close",
      screenshotOf: "Screenshot of",
    },
    items: {
      odontosalud: {
        tag: "Full Stack Project",
        title: "OdontoSalud",
        summary:
          "Web system to manage a dental clinic: patients, appointments, shifts and automatic email reminders.",
        problem:
          "Organizing a clinic's patients, appointments and shifts, and reminding each patient of their appointment in a centralized, automatic way.",
        features: [
          "Login and role-based access: administrator, doctor, receptionist and patient",
          "Management of patients, appointments, history and shifts",
          "Automatic email reminders with HTML and CSS templates",
          "Messaging API in Python (Flask) using SMTP",
          "User registration and form validation",
          "Account verification by email",
        ],
        role: "Academic project built individually: I designed and developed the web app, role-based authentication, the database and the Python messaging API.",
      },
      akinmind: {
        tag: "Full Stack · AI",
        title: "AkinMind",
        summary:
          "Study app with flashcards, spaced repetition (SM-2) and AI-powered flashcard generation.",
        problem:
          "Creating flashcards takes time and reviewing them without a method wastes effort. AkinMind automates creation with AI and schedules reviews with spaced repetition.",
        features: [
          "Authentication and user data with Appwrite",
          "Deck and flashcard management",
          "Study sessions using the SM-2 spaced repetition algorithm",
          "AI flashcard generation (OpenRouter)",
          "PDF to flashcards conversion",
          "Statistics with streak tracking",
          "Web Speech API and a practice module",
        ],
        role: "Personal project I build individually and keep improving iteratively: interface, authentication, spaced repetition logic and AI integration.",
      },
      "habit-tracker": {
        tag: "Web app",
        title: "Habit Tracker",
        summary:
          "Web app to log daily habits, mark them on a calendar and save notes for each day.",
        problem:
          "Consistency is easier when logging is quick and visual: mark the day on a calendar and note how it went.",
        features: [
          "Daily habit logging",
          "Calendar to mark each day",
          "Notes per day",
          "Data persistence with Appwrite",
        ],
        role: "Personal project built individually: interface, calendar, notes and persistence with Appwrite.",
      },
    },
  },
  education: {
    kicker: "Education and experience",
    title: "Education and hands-on experience",
    studyTitle: "Education",
    study: [
      {
        title: "Fundación Universitaria María Cano",
        subtitle: "Software Development (professional degree)",
        period: "Eighth semester in progress · Expected graduation mid-2027",
      },
      {
        title: "Secondary education",
        subtitle: "High school diploma (Bachiller)",
        period: "2010 – 2021",
      },
    ],
    coursesTitle: "Courses and languages",
    courses: [
      { title: "Programming Fundamentals", detail: "MinTIC · Misión TIC 2022 · Universidad de Caldas" },
      { title: "English", detail: "A2 level · University course toward B1" },
    ],
    practiceTitle: "Hands-on experience",
    practiceText:
      "My hands-on experience comes from the projects I design and build on my own, from the interface to the database.",
    practiceItems: ["OdontoSalud (academic project)", "AkinMind (personal project)", "Habit Tracker (personal project)"],
  },
  contact: {
    kicker: "Contact",
    title: "Let's talk",
    text: "If you have an opportunity on your team or a project in mind, get in touch. I would love to talk.",
    email: "Email me",
    copy: "Copy email",
    copied: "Copied",
    linkedin: "LinkedIn",
    github: "GitHub",
    cv: "Download CV",
  },
  footer: {
    built: "Built with Next.js and React",
    rights: "All rights reserved",
  },
};

export default en;
