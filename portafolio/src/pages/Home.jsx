import React from 'react'
import TextoAnimado from '../components/TextoAnimado'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
export const Home = () => {
  const textos = [
    "¡Hola a todos!",
    "Soy Maria del Mar Artunduaga",
    "Desarrolladora de Software FullStack",
  
  ];

  return (
    <main>
      <div className='flex flex-col items-center justify-center w-full h-full p-8'>
        <div className="">
          <div className='flex flex-col w-full h-full mt-4'>
            <TextoAnimado textos={textos} />
            <p className='mt-4 font-medium text-center w-96 pb-7 text-slate-700'>
              Creando soluciones innovadoras con código
            </p>
          </div>
        </div>
        <div className='p-3 text-white bg-purple-600 rounded-lg '>
          <button type="dowload">Descargar CV <FontAwesomeIcon icon={faDownload} /></button>
        </div>
      </div>
    </main>
  )
}

export default Home;