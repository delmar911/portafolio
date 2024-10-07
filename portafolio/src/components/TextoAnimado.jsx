import React, { useState, useEffect } from 'react';

const TextoAnimado = ({ textos = ["Soy Maria del Mar Artunduaga"] }) => {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const showNextText = () => {
      setVisibleIndex((prevIndex) => 
        prevIndex < textos.length - 1 ? prevIndex + 1 : prevIndex
      );
    };

    const timer = setInterval(showNextText, 2000); // Cambia cada 2 segundos

    return () => clearInterval(timer);
  }, [textos.length]);

  return (
    <div className="flex flex-col items-center justify-center h-24 overflow-hidden">
      {textos.map((texto, index) => (
        <h1 
          key={index}
          className={`text-4xl font-bold text-slate-950 transition-all duration-1000 ease-out absolute ${
            index === visibleIndex
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-full'
          }`}
        >
          {texto}
        </h1>
      ))}
    </div>
  );
};

export default TextoAnimado;