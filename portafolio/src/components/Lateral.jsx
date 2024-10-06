import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Lateral = () => {
  return (
    <>
      <aside className='  row-start-2 text-white rounded-[1rem] bg-slate-950 lateralCard p-6 m-1'>
        <p>Maria Del Mar Artunduaga</p>
        <div>
          <img src="../assets/img/foto-portafolio.png" alt=""/>
        </div>
        <p className=''>FULL-STACK DEVELOPER</p>
        <div className="flex space-y-32 location">
          <FontAwesomeIcon icon={faLocationDot} /> Bogotá, Colombia
        </div>
        <div className="flex space-x-4 redes">
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
        <button type="button" className='p-3 bg-purple-600 rounded-lg'>Contáctame</button>
      </aside>
    </>
  );
};

export default Lateral;
