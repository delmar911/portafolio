import React from 'react'
import { useTranslation } from 'react-i18next';
export const Proyects = () => {
  const { t } = useTranslation('global'); 
  return (
    <main className="pt-4 px-4 md:px-8 lg:px-16">
      <div className="flex justify-start">
          <div className="text-white bg-black/[0.8] rounded-full p-2 w-32 text-center">
            <p>
              {t('navbar.projects')} 
            </p>
          </div>
        </div>
    </main>
  )
}