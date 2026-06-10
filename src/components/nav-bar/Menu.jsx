import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./nav-bar.css"

const Menu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeId, setActiveId] = useState(location.pathname === '/' ? 'home' : null);
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    navigate("/", { state: { scrollTo: id } });
  };

  useEffect(() => {
    const ids = ["home", "projects", "about", "contact"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) => `nav-link ${(isActive || activeId === 'home') ? 'active-link' : ''}`}
        to={"/"}
        onClick={() => setIsOpen(false)}
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
        onClick={() => setIsOpen(false)}
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
    </>
  );

  return (
    <nav className="nav-bar">
      <span className="nav-brand">Maria Del Mar</span>

      {/* Desktop links */}
      <div className="menu-link">
        {navLinks}
      </div>

      {/* Hamburger button — mobile only */}
      <button
        className="md:hidden text-blush p-1"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {isOpen
          ? <XMarkIcon className="w-5 h-5" />
          : <Bars3Icon className="w-5 h-5" />
        }
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="menu-mobile">
          {navLinks}
        </div>
      )}
    </nav>
  );
};

export default Menu;
