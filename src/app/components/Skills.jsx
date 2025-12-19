// Tercera sección - Skills
import React from 'react';
import { FaCode } from "react-icons/fa";
import { BiServer } from "react-icons/bi";
import { RiBrushLine } from "react-icons/ri";
import { TbTools } from "react-icons/tb";

function Skills() {
  const skills = [
    {
      title: "Frontend",
      desc: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "HTML/CSS"],
      icon: <FaCode size={40} className='text-[#fb4f2d]'/>
    },
    {
      title: "Backend",
      desc: ["Node.js", "Express", "MongoDB", "REST APIs", "PostgreSQL"],
      icon: <BiServer size={40} className='text-orange-400'/>
    },
    {
      title: "Diseño",
      desc: ["Figma", "UI/UX", "Responsive Design", "Prototipado", "Wireframing"],
      icon: <RiBrushLine size={40} className='text-[#F54927]'/>
    },
    {
      title: "Herramientas",
      desc: ["Git", "GitHub", "Docker", "VS Code", "Postman"],
      icon: <TbTools size={40} className='text-yellow-600'/>
    }
  ];

  return (
    <section
      id="skills"
      className="relative w-full flex items-center justify-center py-32 px-6 md:px-10 min-h-screen"
    >
      <div className="max-w-7xl w-full">

        <h4 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Habilidades
        </h4>

        <h6 className="text-lg font-medium text-center mb-12 text-gray-600">
          Tecnologías y herramientas con las que trabajo 😉
        </h6>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col h-full p-5"
            >
              {/* Icono */}
              <div className="mb-3 flex justify-center">{skill.icon}</div>

              {/* Titulo */}
              <h5 className="text-lg sm:text-xl font-semibold mb-2 text-gray-600 text-center">
                {skill.title}
              </h5>

              {/* Descripción */}
              <ul className="text-gray-500 mb-4 flex-grow list-disc pl-5 text-sm sm:text-base">
                {skill.desc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
