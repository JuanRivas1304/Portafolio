// Primera sección - Presentation
'use client';
import Image from "next/image";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Reveal from './Reveal';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageProvider';

function Presentation() {
  const { translations: t } = useLanguage();

  return (
    <section id="presentation" className="relative w-full flex items-center justify-center py-16 px-6 md:px-10 min-h-screen">

      <LanguageSwitcher />

      {/* CONTENEDOR PRINCIPAL */}
      <div className="flex flex-col md:flex-row items-center md:gap-16 gap-10">

        {/* FOTO / CÍRCULO */}
        <Reveal direction="left"><div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl shadow-[#fa5c0f]/80 mb-6 md:mb-0">
          <Image
            className="w-full h-full object-cover transition-transform duration-[350ms] hover:scale-105"
            src="/images/foto1.jpg"
            alt={t.presentation.imageAlt}
            width={400}
            height={400}
          />
        </div></Reveal>

        {/* CONTENIDO DE TEXTO */}
        <div className="max-w-xl text-center md:text-left">
          <Reveal><h4 className="text-2xl md:text-3xl font-semibold text-black">
            {t.presentation.greeting} <span className="text-[#f73d11]">Juan Rivas</span>
          </h4></Reveal>

          <Reveal delay={100}><p className="mt-4 text-gray-500 leading-relaxed text-sm md:text-base">
            {t.presentation.description}
          </p></Reveal>

          {/* BOTONES */}
          <Reveal delay={180}><div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <a href="#projects">
              <button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-[#f73d11] hover:scale-[1.02] transition duration-[250ms]">
                {t.presentation.buttons.projects}
              </button>
            </a>
            <a href="#contact">
              <button className="px-6 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-md hover:bg-[#f73d11] hover:text-white hover:scale-[1.02] transition duration-[250ms]">
                {t.presentation.buttons.contact}
              </button>
            </a>
            <a href="CV_Juan_Diego_Murillo_Rivas.pdf" download="CV_Juan_Diego_Murillo_Rivas.pdf">
              <button className="px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-md hover:bg-[#ea401a] hover:text-white hover:scale-[1.02] transition duration-[250ms]">
                {t.presentation.buttons.cv}
              </button>
            </a>
          </div></Reveal>

          {/* ICONOS */}
          <Reveal delay={260}><div className="flex justify-center md:justify-start gap-6 text-gray-600 text-2xl mt-6">
            <a href="https://github.com/JuanRivas1304" title={t.presentation.social.github} aria-label={t.presentation.social.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="hover:text-[#f73d11] hover:scale-110 transition duration-[250ms]"/>
            </a>
            <a href="https://www.linkedin.com/in/juan-diego-murillo-rivas-05447430b/" title={t.presentation.social.linkedin} aria-label={t.presentation.social.linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className="hover:text-[#f73d11] hover:scale-110 transition duration-[250ms]"/>
            </a>
            <a href="mailto:juandrivas66@gmail.com" title={t.presentation.social.email} aria-label={t.presentation.social.email} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className="hover:text-[#f73d11] hover:scale-110 transition duration-[250ms]"/>
            </a>
          </div></Reveal>
        </div>
      </div>

      {/* FLECHA HACIA ABAJO */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-gray-600">
        <a href="#projects" aria-label={t.presentation.buttons.projects}>
          <FontAwesomeIcon icon={faArrowDown} bounce />
        </a>
      </div>
    </section>
  );
}

export default Presentation;