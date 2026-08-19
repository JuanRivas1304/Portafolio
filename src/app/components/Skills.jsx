// Tercera sección - Skills
'use client';
import React from 'react';
import { FaCode } from "react-icons/fa";
import { BiServer } from "react-icons/bi";
import { RiBrushLine } from "react-icons/ri";
import { TbTools } from "react-icons/tb";
import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageProvider';

function Skills() {
  const { translations: t } = useLanguage();

  const skills = [
    {
      key: 'frontend',
      icon: <FaCode size={40} className='text-[#fb4f2d]'/>
    },
    {
      key: 'backend',
      icon: <BiServer size={40} className='text-orange-400'/>
    },
    {
      key: 'design',
      icon: <RiBrushLine size={40} className='text-[#F54927]'/>
    },
    {
      key: 'tools',
      icon: <TbTools size={40} className='text-yellow-600'/>
    }
  ];

  return (
    <section
      id="skills"
      className="relative w-full flex items-center justify-center py-32 px-6 md:px-10 min-h-screen"
    >
      <div className="max-w-7xl w-full">

        <Reveal><h4 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {t.skills.title}
        </h4></Reveal>

        <Reveal delay={100}><h6 className="text-lg font-medium text-center mb-12 text-gray-600">
          {t.skills.subtitle}
        </h6></Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Reveal key={index} delay={index * 90} direction={index % 2 === 0 ? 'left' : 'right'}><div
              key={index}
              className="reveal-card border rounded-xl shadow-md hover:shadow-xl transition-[transform,box-shadow] duration-300 bg-white flex flex-col h-full p-5"
            >
              {/* Icono */}
              <div className="mb-3 flex justify-center">{skill.icon}</div>

              {/* Titulo */}
              <h5 className="text-lg sm:text-xl font-semibold mb-2 text-gray-600 text-center">
                {t.skills.items[skill.key].title}
              </h5>

              {/* Descripción */}
              <ul className="text-gray-500 mb-4 flex-grow list-disc pl-5 text-sm sm:text-base">
                {t.skills.items[skill.key].skills.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
