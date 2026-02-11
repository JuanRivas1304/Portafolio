// Segunda sección - Projects
import React from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiTypescript,
  SiAppwrite,
} from "react-icons/si";

const techConfig = {
  React: {
    icon: FaReact,
    color: "bg-sky-100 text-sky-700 border-sky-200",
    label: "Librería para interfaces de usuario",
  },
  "Next.js": {
    icon: SiNextdotjs,
    color: "bg-gray-100 text-gray-800 border-gray-300",
    label: "Framework fullstack para React",
  },
  JavaScript: {
    icon: FaJsSquare,
    color: "bg-yellow-100 text-yellow-700 border-yellow-300",
    label: "Lenguaje de programación",
  },
  HTML: {
    icon: FaHtml5,
    color: "bg-orange-100 text-orange-700 border-orange-300",
    label: "Estructura de la web",
  },
  CSS: {
    icon: FaCss3Alt,
    color: "bg-blue-100 text-blue-700 border-blue-300",
    label: "Estilos y diseño visual",
  },
  Python: {
    icon: FaPython,
    color: "bg-green-100 text-green-700 border-green-300",
    label: "Lenguaje backend y lógica",
  },
  PostgreSQL: {
    icon: SiPostgresql,
    color: "bg-indigo-100 text-indigo-700 border-indigo-300",
    label: "Base de datos relacional",
  },
  TypeScript: {
    icon: SiTypescript,
    color: "bg-blue-100 text-blue-700 border-blue-300",
    label: "JavaScript tipado",
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "bg-cyan-100 text-cyan-700 border-cyan-300",
    label: "Framework de estilos utility-first",
  },
  Appwrite: {
    icon: SiAppwrite,
    color: "bg-pink-100 text-pink-700 border-pink-300",
    label: "Backend as a Service",
  },
};


function Projects() {
  const projects = [
    {
      img: "/images/odontosalud1.png",
      alt: "Odontosalud",
      title: "Software de Gestion de citas medicas",
      desc: "Sistema web para la gestión de citas médicas con registro de usuarios, validaciones y verificación de cuentas por correo. Proyecto enfocado en resolver un problema real y practicar lógica backend y frontend.",
      technologies: ["React", "PostgreSQL", "Next.js", "Python"],
      demo: null,
      github: "https://github.com/JuanRivas1304/OdontoSalud",
    },
    {
      img: "/images/jiraclone.png",
      alt: "Jira Clone",
      title: "Jira Clone con Next 14",
      desc: "Aplicación web inspirada en Jira para crear y organizar tareas por estados. Implementé manejo de estados, componentes reutilizables y una interfaz enfocada en flujos de trabajo reales.",
      technologies: ["Next.js", "Tailwind CSS", "React", "TypeScript", "Appwrite"],
      demo: "https://next14-jira-clone-lzbz.vercel.app/sign-in",
      github: "https://github.com/JuanRivas1304/next14-jira-clone",
    },
    {
      img: "/images/habit-tracker.png",
      alt: "Habit Tracker",
      title: "Habit Tracker",
      desc: "Aplicación web para el seguimiento de hábitos diarios con notas y persistencia de datos. Diseñada para el uso continuo y el control del progreso del usuario.",
      technologies: ["Next.js", "Tailwind CSS"],
      demo: "https://habit-tracker-plum-sigma.vercel.app/",
      github: "https://github.com/JuanRivas1304/Habit-Tracker",
    },
    {
      img: "/images/todolist.png",
      alt: "To-Do List",
      title: "To-Do List",
      desc: "Aplicación de lista de tareas desarrollada con JavaScript, html y css que permite agregar, completar y eliminar tareas. y cuenta con almacenamiento persistente.",
      technologies: ["JavaScript", "HTML", "CSS"],
      demo: "https://to-do-list-nine-gules-93.vercel.app/",
      github: "https://github.com/JuanRivas1304/To-Do-List",
    },
    {
      img: "/images/calculadora.png",
      alt: "Calculadora",
      title: "Calculadora Web",
      desc: "Calculadora web funcional con operaciones básicas y modo claro/oscuro. Proyecto enfocado en lógica de eventos, manipulación del DOM y validación de entradas.",
      technologies: ["JavaScript", "HTML", "CSS"],
      demo: "https://calculadora-blond-seven.vercel.app/",
      github: "https://github.com/JuanRivas1304/Calculadora",
    }
  ];

  return (
    <section
      id="projects"
      className="relative w-full flex items-center justify-center py-32 px-6 md:px-10 min-h-screen"
    >
      <div className="max-w-7xl w-full">
        <h4 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Proyectos Destacados
        </h4>
        <h6 className="text-lg font-medium text-center mb-12 text-gray-600">
          Algunos de los proyectos en los que he trabajado recientemente 😁
        </h6>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col h-full"
            >
              {/* Imagen */}
              <div className="w-full h-48 sm:h-56 relative rounded-t-xl overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.alt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Texto */}
              <div className="p-5 flex flex-col flex-grow">
                <h5 className="text-lg sm:text-xl font-semibold mb-2 text-gray-600">
                  {project.title}
                </h5>

                <p className="text-gray-500 mb-4 flex-grow text-sm sm:text-base">
                  {project.desc}
                </p>

                {/* Tecnologías */}
              <div className="mt-4 mb-4">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, index) => {
                    const techData = techConfig[tech];
                    if (!techData) return null;

                    const Icon = techData.icon;

                    return (
                      <div
                        key={index}
                        className={`group relative flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full border
                        ${techData.color}`}
                      >
                        <Icon className="text-sm" />
                        <span>{tech}</span>

                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                          hidden group-hover:block
                          bg-gray-900 text-white text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-lg">
                          {techData.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>


                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-auto">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-orange-600 text-white font-semibold rounded-md hover:bg-[#f73d11] transition text-sm flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon icon={faUpRightFromSquare} /> Demo
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border-2 border-orange-600 text-orange-600 font-semibold rounded-md hover:bg-[#f73d11] hover:text-white transition text-sm flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faGithub} /> Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
