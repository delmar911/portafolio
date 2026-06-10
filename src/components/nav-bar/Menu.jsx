import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "./nav-bar.css"

const Menu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeId, setActiveId] = useState(location.pathname === '/' ? 'home' : null);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    // If we're already on the home route, scroll directly
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    // Otherwise navigate to home and request scroll after navigation
    navigate("/", { state: { scrollTo: id } });
  };

  useEffect(() => {
    const ids = ["home", "projects", "about", "contact"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // pick the entry with largest intersectionRatio that's intersecting
        const visible = entries.filter((en) => en.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveId(visible[0].target.id);
        }
      },
      { root: null, rootMargin: "0px 0px -40% 0px", threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <nav className="nav-bar">
      <span className="nav-brand">Maria Del Mar</span>
      <div className="menu-link">
        <NavLink
          className={({ isActive }) => `nav-link ${(isActive || activeId === 'home') ? 'active-link' : ''}`}
          to={"/"}
        >
          {t('navbar.home')}
        </NavLink>
      <a
        href="/#projects"
        onClick={(e) => handleScrollTo(e, 'projects')}
        className={`nav-link ${activeId === 'projects' ? 'active-link' : ''}`}
      >
        {t('navbar.projects')}
      </a>
      <a
        href="/#about"
        onClick={(e) => handleScrollTo(e, 'about')}
        className={`nav-link ${activeId === 'about' ? 'active-link' : ''}`}
      >
        {t('navbar.about')}
      </a>
      <NavLink
        className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}
        to={"/resumen"}
      >
        {t('navbar.education')}
      </NavLink>
      <a
        href="/#contact"
        onClick={(e) => handleScrollTo(e, 'contact')}
        className={`nav-link ${activeId === 'contact' ? 'active-link' : ''}`}
      >
        {t('navbar.contact')}
      </a>
      </div>
      
    </nav>
  );
};

export default Menu;
