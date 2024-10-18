import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const Menu = () => {
  const { t } = useTranslation();
  return (
    <nav className="menu-nav">
      <NavLink
        className={({ isActive }) => 
          `menu-link ${isActive ? "active-link" : ""}`
        }
        to={"/"}
      >
        {t('navbar.home')}
      </NavLink>
      <NavLink
        className={({ isActive }) => 
          `menu-link ${isActive ? "active-link" : ""}`
        }
        to={"/proyectos"}
      >
        {t('navbar.projects')}
      </NavLink>
      <NavLink
        className={({ isActive }) => 
          `menu-link ${isActive ? "active-link" : ""}`
        }
        to={"/acerca"}
      >
        {t('navbar.about')}
      </NavLink>
      <NavLink
        className={({ isActive }) => 
          `menu-link ${isActive ? "active-link" : ""}`
        }
        to={"/resumen"}
      >
        {t('navbar.education')}
      </NavLink>
      <NavLink
        className={({ isActive }) => 
          `menu-link ${isActive ? "active-link" : ""}`
        }
        to={"/contacto"}
      >
       {t('navbar.contact')}
      </NavLink>
    </nav>
  );
};

export default Menu;