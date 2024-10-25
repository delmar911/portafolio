import i18n from 'i18next';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,  faLanguage } from "@fortawesome/free-solid-svg-icons";
import mifoto from "../assets/img/foto-portafolio.png";
import { useTranslation } from 'react-i18next';

const Lateral = () => {
  const { t, i18n } = useTranslation();

  // Función para cambiar el idioma
  const cambiarIdioma = () => {
    const nuevoIdioma = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(nuevoIdioma);
  };

  return (
    <aside className="lateral-card ">
      <p className="text-2xl md:text-2xl mb-2 text-center ">Maria Del Mar Artunduaga</p>
      <img src={mifoto} alt="foto mar" className="w-32 md:w-48 mb-2 lg:pb-4"  />
      <p className="text-2xl md:text-2xl mb-2">{t('header.description')}</p>
      <div className="p-2 md:p-4">
        <a href="https://www.google.com/maps/place/Bogot%C3%A1">
          <FontAwesomeIcon icon={faLocationDot} /> Bogotá, Colombia
        </a>
      </div>
      <div className="modos flex p-2 md:p-3 space-x-4 items-center lg:pb-12">
        {/* Botón para cambiar el idioma */}
        <button onClick={cambiarIdioma} className="flex items-center">
          <FontAwesomeIcon icon={faLanguage} className="h-7" />
          <span className="ml-2">
            {i18n.language === 'es' ? 'Inglés' : 'Spanish'}
          </span>
        </button>
      </div>
     
      <NavLink className="p-2 md:p-3 bg-violet-800 rounded-lg mt-2" to={"/contacto"}>
        {t('header.contactme')}
      </NavLink>
     
    </aside>
  );
};

export default Lateral;
