import React from "react";
import IniciarSesion from "./IniciarSesion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CrearCuenta from "./CrearCuenta";
import FeedPrincipal from "./FeedPrincipal";
import CrearReceta from "./CrearReceta";
import Perfil from "./Perfil"; 
import VerReceta from "./VerReceta";
import ModificarReceta from "./ModificarReceta"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IniciarSesion />} />
        <Route path="/crear-cuenta" element={<CrearCuenta />} />
        <Route path="/feed-principal" element={<FeedPrincipal />} />
        <Route path="/crear-receta" element={<CrearReceta />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/VerReceta" element={<VerReceta />} />
        <Route path="/ModificarReceta" element={<ModificarReceta />} />
      </Routes>
    </Router>
  );
  
}

export default App;
