// Cuarta sección - Contact
'use client';
import React from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageProvider';

function Contact() {
  const { translations: t } = useLanguage();

  const contact = [
    {
      key: 'email',
      desc: "Juandrivas66@gmail.com",
      icon: <MdOutlineMailOutline size={40} className='text-[#fb4f2d]'/>
    },
    {
      key: 'phone',
      desc: "+57 301 419 29 33",
      icon: <FaPhoneAlt size={40} className='text-orange-400'/>
    },
    {
      key: 'location',
      desc: "Medellin, Colombia",
      icon: <CiLocationOn size={40} className='text-[#F54927]'/>
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full flex items-center justify-center py-32 px-6 md:px-10 min-h-screen"
    >
      <div className="max-w-7xl w-full">

        <Reveal><h4 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {t.contact.title}
        </h4></Reveal>

        <Reveal delay={100}><h6 className="text-lg font-medium text-center mb-12 text-gray-600">
          {t.contact.subtitle}
        </h6></Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contact.map((contactItem, index) => (
            <Reveal key={index} delay={index * 90} scale><div
              key={index}
              className="reveal-card border rounded-xl shadow-md hover:shadow-xl transition-[transform,box-shadow] duration-300 bg-white flex flex-col h-full p-5"
            >
              {/* Icono */}
              <div className="mb-3 flex justify-center transition-transform duration-300 hover:scale-110">{contactItem.icon}</div>

              {/* Título */}
              <h5 className="text-lg sm:text-xl font-semibold mb-2 text-gray-600 text-center">
                {t.contact.items[contactItem.key]}
              </h5>

              {/* Descripción */}
              <p className="text-gray-500 mb-4 flex-grow text-center text-sm sm:text-base">
                {contactItem.desc}
              </p>
            </div></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;