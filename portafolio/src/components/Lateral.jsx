import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faWhatsapp,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Lateral = () => {
  return (
    <>
      <aside className="row-start-1 row-span-3 text-white rounded-[1rem] bg-black/[0.75] lateralCard p-6 m-2 flex flex-col items-center">
        <p className="text-2xl">Maria Del Mar Artunduaga</p>
        <div className="w-96 h-96 bg-[url('./src/assets/img/foto-portafolio.png')] bg-no-repeat">
         
        </div>
       
        <p className="text-3xl ">FULL-STACK DEVELOPER</p>
        <div className="p-8 location">
          <FontAwesomeIcon icon={faLocationDot} /> Bogotá, Colombia
        </div>
        <div className="h-24 space-x-4 redes ">
          <FontAwesomeIcon icon={faEnvelope} className="size-7" />
          <FontAwesomeIcon icon={faGithub} className="size-7" />
          <FontAwesomeIcon icon={faWhatsapp} className="size-7" />
          <FontAwesomeIcon icon={faLinkedinIn} className="size-7" />
        </div>
        <button type="button" className="p-3 bg-purple-600 rounded-lg">
          Contáctame
        </button>
      </aside>
    </>
  );
};

export default Lateral;
