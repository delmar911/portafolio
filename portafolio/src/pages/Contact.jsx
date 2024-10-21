import React from 'react'
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation('global'); 
  return (
    <main className="pt-4 px-4 md:px-8 lg:px-16">
      <div className="flex justify-start">
          <div className="text-white bg-black/[0.8] rounded-full p-2 w-32 text-center">
            <p>
            {t('header.contactme')} 
            </p>
          </div>
      </div>
      <div className='flex flex-col items-center justify-center w-full p-8 text-white h-96'>
        <div className="">
          <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-bold pb-7'>
            {t('header.contactme')}
            </h1>
            <p className='font-light text-center w-96 pb-7'>
            {t('contact.paragrah')} 
            </p>
          </div>  
          
          <div className='flex flex-row items-center'>
            
          </div>
        </div>
      </div>
    </main>
  )
}