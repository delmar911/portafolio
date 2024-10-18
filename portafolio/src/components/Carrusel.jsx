import React from 'react';
import js from '../assets/img-carrusel/js.png';
import html from '../assets/img-carrusel/html.png';
import react from '../assets/img-carrusel/react.png';
import tailwind from '../assets/img-carrusel/Tailwind.png';
import java from '../assets/img-carrusel/java.png';
import github from '../assets/img-carrusel/github.png';
import linux from '../assets/img-carrusel/linux.png';
import django from '../assets/img-carrusel/django.png';
import mysql from '../assets/img-carrusel/mysql.png'

const images = [js, html, react, tailwind, java, github, linux, django, mysql];

export const Carrusel = () => {
  return (
    <div className="relative w-full overflow-hidden carrusel mt-8">
      <div className="flex animate-carousel">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex space-x-4 sm:space-x-8 md:space-x-10 lg:space-x-14 min-w-full">
            {images.map((src, index) => (
              <img key={index} src={src} alt="" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;