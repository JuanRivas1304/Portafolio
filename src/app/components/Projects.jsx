// Segunda sección - Projects
'use client';
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
import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageProvider';

const techConfig = {
  React: {
    icon: FaReact,
    color: "bg-sky-100 text-sky-700 border-sky-200",
    labelKey: 'react',
  },
  "Next.js": {
    icon: SiNextdotjs,
    color: "bg-gray-100 text-gray-800 border-gray-300",
    labelKey: 'next',
  },
  JavaScript: {
    icon: FaJsSquare,
    color: "bg-yellow-100 text-yellow-700 border-yellow-300",
    labelKey: 'javascript',
  },
  HTML: {
    icon: FaHtml5,
    color: "bg-orange-100 text-orange-700 border-orange-300",
    labelKey: 'html',
  },
  CSS: {
    icon: FaCss3Alt,
    color: "bg-blue-100 text-blue-700 border-blue-300",
    labelKey: 'css',
  },
  Python: {
    icon: FaPython,
    color: "bg-green-100 text-green-700 border-green-300",
    labelKey: 'python',
  },
  PostgreSQL: {
    icon: SiPostgresql,
    color: "bg-indigo-100 text-indigo-700 border-indigo-300",
    labelKey: 'postgresql',
  },
  TypeScript: {
    icon: SiTypescript,
    color: "bg-blue-100 text-blue-700 border-blue-300",
    labelKey: 'typescript',
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "bg-cyan-100 text-cyan-700 border-cyan-300",
    labelKey: 'tailwind',
  },
  Appwrite: {
    icon: SiAppwrite,
    color: "bg-pink-100 text-pink-700 border-pink-300",
    labelKey: 'appwrite',
  },
};


function Projects() {
  const { translations: t } = useLanguage();

  const projects = [
    {
      key: 'odontosalud',
      img: "/images/odontosalud1.png",
      alt: "Odontosalud",
      technologies: ["React", "PostgreSQL", "Next.js", "Python"],
      demo: null,
      github: "https://github.com/JuanRivas1304/OdontoSalud",
    },
    {
      key: 'jira',
      img: "/images/jiraclone.png",
      alt: "Jira Clone",
      technologies: ["Next.js", "Tailwind CSS", "React", "TypeScript", "Appwrite"],
      demo: "https://next14-jira-clone-lzbz.vercel.app/sign-in",
      github: "https://github.com/JuanRivas1304/next14-jira-clone",
    },
    {
      key: 'akinmind',
      img: "/images/akinmind.png",
      alt: "AkinMind",
      technologies: ["Next.js", "Tailwind CSS", "React", "TypeScript", "Appwrite"],
      demo: "https://akin-mind.vercel.app/login",
      github: "https://github.com/JuanRivas1304/Akin-Mind",
    },
    {
      key: 'habitTracker',
      img: "/images/habit-tracker.png",
      alt: "Habit Tracker",
      technologies: ["Next.js", "Tailwind CSS"],
      demo: "https://habit-tracker-plum-sigma.vercel.app/",
      github: "https://github.com/JuanRivas1304/Habit-Tracker",
    },
    {
      key: 'todoList',
      img: "/images/todolist.png",
      alt: "To-Do List",
      technologies: ["JavaScript", "HTML", "CSS"],
      demo: "https://to-do-list-nine-gules-93.vercel.app/",
      github: "https://github.com/JuanRivas1304/To-Do-List",
    },
    {
      key: 'calculator',
      img: "/images/calculadora.png",
      alt: "Calculadora",
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
        <Reveal><h4 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {t.projects.title}
        </h4></Reveal>
        <Reveal delay={100}><h6 className="text-lg font-medium text-center mb-12 text-gray-600">
          {t.projects.subtitle}
        </h6></Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 90} scale><div
              key={index}
              className="reveal-card border rounded-xl shadow-md hover:shadow-xl transition-[transform,box-shadow] duration-300 bg-white flex flex-col h-full"
            >
              {/* Imagen */}
              <div className="w-full h-48 sm:h-56 relative rounded-t-xl overflow-hidden group">
                <Image
                  src={project.img}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-[350ms] group-hover:scale-105"
                />
              </div>

              {/* Texto */}
              <div className="p-5 flex flex-col flex-grow">
                <h5 className="text-lg sm:text-xl font-semibold mb-2 text-gray-600">
                  {t.projects.items[project.key].title}
                </h5>

                <p className="text-gray-500 mb-4 flex-grow text-sm sm:text-base">
                  {t.projects.items[project.key].description}
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
                          {t.projects.technologies[techData.labelKey]}
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
                      className="px-4 py-2 bg-orange-600 text-white font-semibold rounded-md hover:bg-[#f73d11] hover:scale-[1.02] transition duration-[250ms] text-sm flex items-center justify-center gap-2"
                    >
                      <FontAwesomeIcon icon={faUpRightFromSquare} /> {t.projects.buttons.demo}
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border-2 border-orange-600 text-orange-600 font-semibold rounded-md hover:bg-[#f73d11] hover:text-white hover:scale-[1.02] transition duration-[250ms] text-sm flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faGithub} /> {t.projects.buttons.code}
                  </a>
                </div>
              </div>
            </div></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
