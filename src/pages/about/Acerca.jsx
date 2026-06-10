import { useTranslation } from "react-i18next";
import "./about.css";

const STACK = [
  "JavaScript",
  "Lit Element",
  "React",
  "HTML5",
  "CSS3",
  "Tailwind",
];
const STACKBACK =[
  "Python",
  "Django",
  "MySQL",
]
const STACKTOOLS =[
  "Git",
  "GitHub",
  "MySQL",
]

export const Acerca = () => {
  const { t } = useTranslation("global");
  return (
    <>
      <section id="about">
        <div className="section-label">
          <span className="before-section-label" />
          {t("sobremi.title")}
        </div>
        <div className="section-title">¿Quién soy?</div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Soy Maria Del Mar Artunduaga, desarrolladora de software fullstack
              con base en Bogotá. Me especializo en construir interfaces web
              funcionales con atención al detalle visual y al rendimiento.
            </p>
            <p>
              Mi formación combina lógica de backend con sensibilidad de
              frontend: desde APIs en Django hasta componentes en React.
              Disfruto los proyectos donde el diseño y la ingeniería tienen que
              trabajar juntos.
            </p>
            <p>
              Actualmente en búsqueda de oportunidades donde pueda aportar tanto
              en el código como en la experiencia de usuario.
            </p>
          </div>
          <div className="skills-section">
            <div className="skills-group">
              <div className="skills-group-name">Frontend</div>
              <div className="skills-row">
                {STACK.map((tech) => (
                  <span key={tech} className="skill-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-group">
              <div className="skills-group-name">Backend</div>
              <div className="skills-row">
                {STACKBACK.map((tech) => (
                  <span key={tech} className="skill-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-group">
              <div className="skills-group-name">Herramientas</div>
              <div className="skills-row">
                {STACKTOOLS.map((tech) => (
                  <span key={tech} className="skill-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Acerca;
