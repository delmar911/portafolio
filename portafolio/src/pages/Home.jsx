import React from 'react'
import TextoAnimado from '../components/TextoAnimado'

export const Home = () => {
  return (
   <main>
    <div className='flex flex-col items-center justify-center w-full h-full p-8 text-white'>
        <div className="">
          <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-bold pb-7'>
            
            </h1>
            <TextoAnimado texto="Soy Maria del Mar Artunduaga" />
            <p className='font-light text-center w-96 pb-7'>
            Desarrolladora de software FullStack
            </p>
          </div>  
          
          
        </div>
      </div>
   </main>
  )
}