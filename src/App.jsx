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
import Menu from "./components/nav-bar/Menu";
import "./App.css";

function App() {
  return (
    <>
      {/* Enrutador general */}
      <BrowserRouter>
        
          {/* <Lateral /> */}
          <Menu />       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Home />} />
          <Route path="/acerca" element={<Home />} />
          <Route path="/resumen" element={<Home />} />
          <Route path="/contacto" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
