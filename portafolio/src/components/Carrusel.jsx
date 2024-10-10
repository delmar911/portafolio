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
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-carousel">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex space-x-16 min-w-full">
            {images.map((src, index) => (
              <img key={index} src={src} alt="" className="w-14 h-14 object-contain" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;