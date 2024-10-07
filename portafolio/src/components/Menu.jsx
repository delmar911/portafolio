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
      
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>


    </nav>
  );
};

export default Menu;