// Cuarta sección - Contact
import React from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

function Contact() {
  const contact = [
    {
      title: "Email",
      desc: "Juandrivas66@gmail.com",
      icon: <MdOutlineMailOutline size={40} className='text-[#fb4f2d]'/>
    },
    {
      title: "Teléfono",
      desc: "+57 301 419 29 33",
      icon: <FaPhoneAlt size={40} className='text-orange-400'/>
    },
    {
      title: "Ubicación",
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

        <h4 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Contacto
        </h4>

        <h6 className="text-lg font-medium text-center mb-12 text-gray-600">
          No dudes en contactarme 🙌
        </h6>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contact.map((contactItem, index) => (
            <div
              key={index}
              className="border rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col h-full p-5"
            >
              {/* Icono */}
              <div className="mb-3 flex justify-center">{contactItem.icon}</div>

              {/* Título */}
              <h5 className="text-lg sm:text-xl font-semibold mb-2 text-gray-600 text-center">
                {contactItem.title}
              </h5>

              {/* Descripción */}
              <p className="text-gray-500 mb-4 flex-grow text-center text-sm sm:text-base">
                {contactItem.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;