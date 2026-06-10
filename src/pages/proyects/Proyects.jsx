import { useTranslation } from "react-i18next";
import { Data } from "../../proyects/proyects";
import "./proyects.css";

export const Proyects = () => {
  const { t } = useTranslation("global");

  return (
    <section className="projects-bg">
      <div className="section-label">
        <span className="before-section-label" />
        Trabajo
      </div>
      <div className="section-title">Proyectos destacados</div>

      <div className="projects-grid">
        {Data.map((project) => (
          <div key={project.id} className="project-card">
            {/* Preview — reemplaza la imagen */}
            <div className="project-preview">
              <img
                src={project.img}
                alt={project.title}
                className="preview-img"
              />
              <div className="preview-overlay">
                <span className="preview-title">{project.title}</span>
              </div>
            </div>

            <div className="project-body">
              <div className="project-name">{project.title}</div>
              <p className="project-desc">{project.description}</p>

              <div className="project-stack">
                {project.type.map((tech, index) => (
                  <span key={index} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.deploy !== "#" && (
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-btn link-web"
                  >
                    Sitio web →
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn link-gh"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyects;
