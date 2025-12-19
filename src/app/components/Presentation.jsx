// Primera sección - Presentation
'use client';
import Image from "next/image";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Presentation() {
  return (
    <section id="presentation" className="relative w-full flex items-center justify-center py-16 px-6 md:px-10 min-h-screen">

      {/* CONTENEDOR PRINCIPAL */}
      <div className="flex flex-col md:flex-row items-center md:gap-16 gap-10">

        {/* FOTO / CÍRCULO */}
        <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl shadow-[#fa5c0f]/80 mb-6 md:mb-0">
          <Image
            className="w-full h-full object-cover"
            src="/images/foto1.jpg"
            alt="Mi foto"
            width={400}
            height={400}
          />
        </div>

        {/* CONTENIDO DE TEXTO */}
        <div className="max-w-xl text-center md:text-left">
          <h4 className="text-2xl md:text-3xl font-semibold text-black">
            Hola, soy <span className="text-[#f73d11]">Juan Rivas</span>
          </h4>

          <p className="mt-4 text-gray-500 leading-relaxed text-sm md:text-base">
            Desarrollador Web Full Stack apasionado por crear experiencias digitales excepcionales. Especializado en React, TypeScript y diseño moderno de interfaces.
          </p>

          {/* BOTONES */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <a href="#projects">
              <button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-[#f73d11] transition">
                Ver Proyectos
              </button>
            </a>
            <a href="#contact">
              <button className="px-6 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-md hover:bg-[#f73d11] hover:text-white transition">
                Contacto
              </button>
            </a>
            <a href="Hojadevida juan diego.pdf" download="Hojadevida juan diego.pdf">
              <button className="px-6 py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-md hover:bg-[#ea401a] hover:text-white transition">
                Descargar CV
              </button>
            </a>
          </div>

          {/* ICONOS */}
          <div className="flex justify-center md:justify-start gap-6 text-gray-600 text-2xl mt-6">
            <a href="https://github.com/JuanRivas1304" title="Ir a mi Github" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="hover:text-[#f73d11] transition-colors duration-300"/>
            </a>
            <a href="https://www.linkedin.com/in/juan-diego-murillo-rivas-05447430b/" title="Ir a mi Linkedin" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className="hover:text-[#f73d11] transition-colors duration-300"/>
            </a>
            <a href="mailto:juandrivas66@gmail.com" title="Envia me un correo" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} className="hover:text-[#f73d11] transition-colors duration-300"/>
            </a>
          </div>
        </div>
      </div>

      {/* FLECHA HACIA ABAJO */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-gray-600">
        <a href="#projects">
          <FontAwesomeIcon icon={faArrowDown} bounce />
        </a>
      </div>
    </section>
  );
}

export default Presentation;