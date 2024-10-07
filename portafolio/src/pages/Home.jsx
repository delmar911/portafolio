import React from 'react'
import TextoAnimado from '../components/TextoAnimado'

export const Home = () => {
  const textos = [
    "Soy Maria del Mar Artunduaga",
    "Desarrolladora de software FullStack",
    "Apasionada por la tecnología"
  ];

  return (
    <main>
      <div className='flex flex-col items-center justify-center w-full h-full p-8 text-white'>
        <div className="">
          <div className='flex flex-col items-center'>
            <TextoAnimado textos={textos} />
            <p className='mt-4 font-light text-center w-96 pb-7'>
              Creando soluciones innovadoras con código
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;