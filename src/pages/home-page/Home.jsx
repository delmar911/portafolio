import { useEffect } from "react";
import pdfFile from "../../documents/CV-MariaDelMar.pdf";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import Proyects from "../proyects/Proyects";
import Acerca from "../about/Acerca";
import Contact from "../Contact";
import ListaEducacion from "../education/ListaEducacion";
import "./home-page.css";

const STACK = [
  "JavaScript",
  "React",
  "Python",
  "Django",
  "HTML5",
  "CSS3",
  "MySQL",
  "Tailwind",
];

export const Home = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll a sección al navegar desde otra ruta
  useEffect(() => {
    if (location?.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      navigate(location.pathname, { replace: true, state: {} });
      return;
    }

    const routeMap = {
      "/proyectos": "projects",
      "/acerca": "about",
      "/resumen": "about",
      "/contacto": "contact",
    };
    const targetId = routeMap[location.pathname];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
    }
  }, [location, navigate]);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else navigate("/", { state: { scrollTo: id } });
  };

  return (
    <main id="home">
      <section className="hero">
        <div className="absolute w-[600px] h-[600px] rounded-full border border-blush/10 -top-24 -right-24 pointer-events-none" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-blush/[0.08] -bottom-20 left-48 pointer-events-none" />
        <section className="hero-text relative z-10">
          <div className="hero-eyebrow">
            <span className="before-hero-eyebrow" />
            {t("texts.do")}
          </div>

          <h1 className="hero-name">
            Maria <em className="italic text-blush">Del Mar</em>
            <br />
            Artunduaga
          </h1>

          <p className="hero-role">Frontend · Backend · Bogotá, Colombia</p>
          <p className="hero-tagline">{t("hero.tagline")}</p>

          <div className="hero-actions">
            <a
              href="/#projects"
              className="btn-primary"
              onClick={(e) => scrollTo(e, "projects")}
            >
              {t("hero.btn-view-projects")}
            </a>
            <a
              href={pdfFile}
              download="hojadevidaMariaDelMar"
              className="btn-outline"
            >
              {t("hero.btn-download-cv")}
            </a>
          </div>
        </section>

        <section className="hero-visual">
          <div className="hero-stats-row">
            <div className="hero-stat-card">
              <div className="stat-num">4+</div>
              <div className="stat-label">{t("hero.stat-label")}</div>
            </div>
            <div className="hero-stat-card">
              <div className="stat-num">3+</div>
              <div className="stat-label">{t("hero.stat-label-training")}</div>
            </div>
          </div>

          <div className="hero-stat-card">
            <div className="stat-label mb-4">
              {t("hero.stat-label-principal")}
            </div>
            <div className="stack-pills">
              {STACK.map((tech) => (
                <span key={tech} className="pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </section>

      <section id="projects" className="section-projects">
        <Proyects />
      </section>

      <section id="about" className="section-about-me">
        <Acerca />
      </section>

      <section className="section-education">
        <ListaEducacion />
      </section>

      <section className="w-full">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
