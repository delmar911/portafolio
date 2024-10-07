import React from 'react'

export const Contact = () => {
  return (
    <main>
      <div className='flex flex-col items-center justify-center w-full p-8 text-white h-96'>
        <div className="">
          <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-bold pb-7'>
              Contáctanos 
            </h1>
            <p className='font-light text-center w-96 pb-7'>
              Estos son los medios por el cual puedes contactarnos y encontrarnos, es un placer atenderte
            </p>
          </div>  
          
          <div className='flex flex-row items-center'>
            <div className="icons">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <h1 className=''>Dirección</h1>
              <p className='text-info'>Calle Belleza 123, Ciudad</p>
            </div>
            <div className="icons">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              <h1 className="">Teléfono</h1>
              <p className="text-info">(123) 456-7890</p>
            </div>
            <div className="icons">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <h1 className="">Email</h1>
              <p className="text-info">info@beautyglow.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}