import React, { useState, useEffect } from 'react';

const TextoAnimado = ({ texto = "Soy Maria del Mar Artunduaga" }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-12 overflow-hidden">
      <h1 
        className={`text-4xl font-bold text-slate-950 transition-all duration-1000 ease-out ${
          visible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-full'
        }`}
      >
        {texto}
      </h1>
    </div>
  );
};

export default TextoAnimado;