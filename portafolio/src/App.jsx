import { BrowserRouter, Routes, Route } from "react-router-dom";
/** Archivo de barril que contiene todas mis paginas */
import {
  Home,
  Acerca,
  Error404,
  Proyects,
  Resume,
  Contact,
} from "./pages";
import Menu from "./components/Menu";
import Lateral from "./components/Lateral";
import "./App.css";

function App() {
  return (
    <>
      {/* Enrutador general */}
      <BrowserRouter>
        
          <Lateral />
          <Menu />
          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Proyects />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/resumen" element={<Resume />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
