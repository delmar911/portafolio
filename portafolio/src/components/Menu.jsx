import { NavLink } from "react-router-dom";


const Menu = () => {
  return (
    // Componente Nav por semantica
    <nav className="flex justify-around mt-2 mr-4 col-span-2 col-start-2 text-white bg-black/[0.5] rounded-lg p-2">
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/"}
      >
        Inicio
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/proyectos"}
      >
        Proyectos
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/acerca"}
      >
        Acerca de mi
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/resumen"}
      >
        Resumen
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/contacto"}
      >
        Contacto
      </NavLink>

      
    </nav>
  );
};

export default Menu;
