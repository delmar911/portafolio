import React from "react";

export const Acerca = () => {
  return (
    <>
      <main>
        <div className="flex justify-center text-white bg-black/[0.8] rounded-full p-2 w-32">
          <p>Sobre de mi</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full p-5 text-black h-96 rounded-2xl bg-black/[0.5]">
          <div className="flex flex-col items-center">
            <p className=" w-full">
              Soy Tecnóloga en Análisis y Desarrollo de Software, con una
              profunda pasión por la tecnología y el desarrollo de software. Mis
              habilidades abarcan tanto el liderazgo como el trabajo en equipo.
              Tengo experiencia en el consumo de APIs utilizando Django Rest
              Framework y en el uso de diversas tecnologías y lenguajes de
              programación, incluyendo JavaScript, MySQL, HTML, CSS, Boostrap
              Java, Python, Postman, Git, IA, Linux y GitHub. Estoy comprometida
              con el crecimiento constante y la aplicación de soluciones
              innovadoras en el ámbito del desarrollo de software.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
