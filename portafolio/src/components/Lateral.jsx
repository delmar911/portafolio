import i18n from 'i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faWhatsapp, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
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
    <aside className="lateral-card">
      <p className="text-xl md:text-2xl mb-2">Maria Del Mar Artunduaga</p>
      <img src={mifoto} alt="foto mar" className="w-32 md:w-48 mb-2" />
      <p className="text-2xl md:text-2xl mb-2">{t('header.description')}</p>
      <div className="p-2 md:p-4">
        <a href="https://www.google.com/maps/place/Bogot%C3%A1">
          <FontAwesomeIcon icon={faLocationDot} /> Bogotá, Colombia
        </a>
      </div>
      <div className="modos flex p-2 md:p-3 space-x-4 items-center">
        {/* Botón para cambiar el idioma */}
        <button onClick={cambiarIdioma} className="flex items-center">
          <FontAwesomeIcon icon={faLanguage} className="h-7" />
          <span className="ml-2">
            {i18n.language === 'es' ? 'Inglés' : 'Español'}
          </span>
        </button>
      </div>
      <div className="h-16 md:h-20 space-x-3 md:space-x-4 redes pt-2 md:pt-3">
        <a href="mailto:mariadelmar.artunduaga911@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 md:w-7 md:h-7" />
        </a>
        <a href="https://github.com/delmar911">
          <FontAwesomeIcon icon={faGithub} className="w-6 h-6 md:w-7 md:h-7" />
        </a>
        <a href="https://wa.me/qr/UIUPFYPPGGOFE1">
          <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 md:w-7 md:h-7" />
        </a>
        <a href="https://www.linkedin.com/in/mariadelmarartunduaga/">
          <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6 md:w-7 md:h-7" />
        </a>
      </div>
      <button type="button" className="p-2 md:p-3 bg-violet-800 rounded-lg mt-2">
        {t('header.contactme')}
      </button>
    </aside>
  );
};

export default Lateral;
