// Segunda sección - Projects
import React from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  const projects = [
    {
      img: "/images/odontosalud1.png",
      alt: "Odontosalud",
      title: "Software de Gestion de citas medicas",
      desc: "Desarrollé un sistema de gestion de citas medicas con distintos dashboards y verificación de cuentas mediante códigos enviados al correo.",
      demo: null,
      github: "https://github.com/JuanRivas1304/OdontoSalud",
    },
    {
      img: "/images/jiraclone.png",
      alt: "Jira Clone",
      title: "Jira Clone con Next 14",
      desc: "App tipo Jira con autenticación, drag & drop, dashboards y manejo de tareas.",
      demo: "https://next14-jira-clone-lzbz.vercel.app/sign-in",
      github: "https://github.com/JuanRivas1304/next14-jira-clone",
    },
    {
      img: "/images/todolist.png",
      alt: "To-Do List",
      title: "To-Do List",
      desc: "Aplicación para gestionar tareas con almacenamiento persistente.",
      demo: "https://to-do-list-nine-gules-93.vercel.app/",
      github: "https://github.com/JuanRivas1304/To-Do-List",
    },
    {
      img: "/images/calculadora.png",
      alt: "Calculadora",
      title: "Calculadora Web",
      desc: "Calculadora basica con tema claro y oscuro.",
      demo: "https://calculadora-blond-seven.vercel.app/",
      github: "https://github.com/JuanRivas1304/Calculadora",
    },
    {
      img: "/images/habit-tracker.png",
      alt: "Habit Tracker",
      title: "Habit Tracker",
      desc: "Aplicación para gestionar hábitos con almacenamiento persistente.",
      demo: "https://habit-tracker-plum-sigma.vercel.app/",
      github: "https://github.com/JuanRivas1304/Habit-Tracker",
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

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-auto">
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
