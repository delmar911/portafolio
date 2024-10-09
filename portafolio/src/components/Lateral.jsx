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

const Lateral = () => {
  return (
    <>
      <aside className="row-start-1 row-span-3 text-white rounded-[1rem] bg-black/[0.75] lateralCard p-6 m-2 flex flex-col items-center">
        <p className="text-2xl">Maria Del Mar Artunduaga</p>

        <img src={mifoto} alt="foto mar" />

        <p className="text-3xl ">FULL-STACK DEVELOPER</p>
        <div className="p-4 location">
          <a href="https://www.google.com/maps/place/Bogot%C3%A1/@4.6482784,-74.27262,11z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9bfd2da6cb29:0x239d635520a33914!8m2!3d4.7109886!4d-74.072092!16zL20vMDFkenlj?entry=ttu&g_ep=EgoyMDI0MTAwNy4xIKXMDSoASAFQAw%3D%3D">
            <FontAwesomeIcon icon={faLocationDot} /> Bogotá, Colombia
          </a>
        </div>
        <div className="modos flex p-3 space-x-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
          <img src={usa} alt="usa" className="h-5" />
          <img src={colombia} alt="colombia" className="h-5" />
        </div>
        <div className="h-20 space-x-4 redes pt-3 ">
          <a href="mailto:mariadelmar.artunduaga911@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="size-7" />
          </a>
          <a href="https://github.com/delmar911">
            <FontAwesomeIcon icon={faGithub} className="size-7" />
          </a>
          <a href="https://wa.me/qr/UIUPFYPPGGOFE1 ">
            <FontAwesomeIcon icon={faWhatsapp} className="size-7" />
          </a>
          <a href="https://www.linkedin.com/in/mariadelmarartunduaga/">
            <FontAwesomeIcon icon={faLinkedinIn} className="size-7" />
          </a>
        </div>
        <button type="button" className="p-3 bg-violet-800 rounded-lg">
          Contáctame
        </button>
      </aside>
    </>
  );
};

export default Lateral;
