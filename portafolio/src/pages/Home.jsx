import React, { useState, useEffect } from 'react';
import TextoAnimado from '../components/TextoAnimado';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t, i18n } = useTranslation();
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    setTexts([
      t('texts.hello'),
      t('texts.im'),
      t('texts.do'),
    ]);
  }, [i18n.language]); // Vuelve a cargar los textos si el idioma cambia

  return (
    <main>
      <div className='flex flex-col items-center justify-center w-full h-full p-8'>
        <div className="">
          <div className='flex flex-col w-full h-full mt-4'>
            {texts.length > 0 && <TextoAnimado textos={texts} />}
            <p className='mt-4 font-medium text-center w-96 pb-7 text-slate-700'>
              {t('texts.creating')}
            </p>
          </div>
        </div>
        <div className='p-3 text-white bg-purple-600 rounded-lg '>
          <button type="download"> {t('texts.downloadCV')} <FontAwesomeIcon icon={faDownload} /></button>
        </div>
      </div>
    </main>
  );
}

export default Home;
