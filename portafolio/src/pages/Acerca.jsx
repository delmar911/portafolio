import React from "react";
import Carrusel from "../components/Carrusel";
import { useTranslation } from 'react-i18next';

export const Acerca = () => {
  const { t } = useTranslation('global'); 
  return (
    <>
      <main className="pt-4 px-4 md:px-8 lg:px-16">
        <div className="flex justify-start">
         
        </div>
        <div className="flex flex-col items-center justify-center w-full pt-12 pb-12 text-white rounded-2xl mt-4">
          <div className="flex flex-col items-center">
            <p className="text-sm md:text-base lg:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl text-center md:text-left">
              {t('sobremi.description')} 
            </p>
          </div>
        </div>
        <Carrusel />
      </main>
    </>
  );
};

export default Acerca;
