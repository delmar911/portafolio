import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faWhatsapp,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import mifoto from "../assets/img/foto-portafolio.png";
import usa from "../assets/img/usa.png";
import colombia from "../assets/img/colombia.png";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const Lateral = () => {
  // Función para cambiar el idioma
  const cambiarIdioma = (idioma) => {
    i18next.changeLanguage(idioma);
  };
  const { t, i18n } = useTranslation();

  return (
    <aside className="lateral-card">
      <p className="text-xl md:text-2xl mb-2">Maria Del Mar Artunduaga</p>
      <img src={mifoto} alt="foto mar" className="w-32 md:w-48 mb-2" />
      <p className="text-2xl md:text-2xl mb-2">{t('header.description')}</p>
      <div className="p-2 md:p-4 location">
        <a href="https://www.google.com/maps/place/Bogot%C3%A1">
          <FontAwesomeIcon icon={faLocationDot} /> Bogotá, Colombia
        </a>
      </div>
      <div className="modos flex p-2 md:p-3 space-x-4 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 md:w-7 md:h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
        {/* Botón para cambiar a español */}
        <button onClick={() => cambiarIdioma('es')}>
          <img src={colombia} alt="colombia" className="h-4 md:h-5" />
        </button>
        
        {/* Botón para cambiar a inglés */}
        <button onClick={() => cambiarIdioma('en')}>
          <img src={usa} alt="usa" className="h-4 md:h-5" />
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
