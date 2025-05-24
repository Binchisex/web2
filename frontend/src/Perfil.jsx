import React, { useState, useEffect } from "react";
import Header from "./Componentes/Header";
//import { useNavigate } from "react-router-dom";
import CardReceta from "./Componentes/CardReceta";
import "./Perfil.css";

const Perfil = () => {

  const [correo, setCorreo] = useState('');

  useEffect(() => {
    const emailGuardado = localStorage.getItem("email");
    if (emailGuardado) {
      setCorreo(emailGuardado);
    }
  }, []);

  const [password, setPassword] = useState('');

  useEffect(() => {
    const passwordguardada = localStorage.getItem("password");
    if (passwordguardada) {
      setCorreo(passwordguardada);
    }
  }, []);
 

  const [activeTab, setActiveTab] = useState("tableros");
  
  // Datos de ejemplo para las tarjetas - no incluimos imagen para usar CupcakePlaceholder como fallback
  const tarjetas = [
    { id: 1, titulo: "Comidas" },
    { id: 2, titulo: "Bebidas" },
    { id: 3, titulo: "Postres" },
    { id: 4, titulo: "Botanas" },
    { id: 5, titulo: "Fitness" },
    { id: 6, titulo: "Carne asada" }
  ];
  
  // Estado para manejar la creación de un nuevo tablero
  const [showNewTableroInput, setShowNewTableroInput] = useState(false);
  const [newTableroName, setNewTableroName] = useState("");
  
  const handleCreateTablero = () => {
    if (!showNewTableroInput) {
      setShowNewTableroInput(true);
    } else if (newTableroName.trim()) {
      // Aquí añadirías la lógica para crear un nuevo tablero
      console.log("Creando nuevo tablero:", newTableroName);
      setNewTableroName("");
      setShowNewTableroInput(false);
    }
  };

  return (
    <>
      <Header />
      <main className="perfil-contenedor">
        <div className="catalogo-recetas">
          <div className="tabs-container">
            <button 
              className={`tab-button ${activeTab === "tableros" ? "active" : ""}`}
              onClick={() => setActiveTab("tableros")}
            >
              Tableros
            </button>
            <button 
              className={`tab-button ${activeTab === "favoritos" ? "active" : ""}`}
              onClick={() => setActiveTab("favoritos")}
            >
              Favoritos
            </button>
            <button 
              className={`tab-button ${activeTab === "mis-recetas" ? "active" : ""}`}
              onClick={() => setActiveTab("mis-recetas")}
            >
              Mis recetas
            </button>
          </div>
          
          <div className="create-tablero">
            {showNewTableroInput ? (
              <div className="new-tablero-input">
                <input
                  type="text"
                  placeholder="Nombre del tablero"
                  value={newTableroName}
                  onChange={(e) => setNewTableroName(e.target.value)}
                  autoFocus
                />
                <button className="btn-confirm" onClick={handleCreateTablero}>✓</button>
                <button className="btn-cancel" onClick={() => setShowNewTableroInput(false)}>✕</button>
              </div>
            ) : (
              <>
                <span>Crear Tablero:</span>
                <button className="btn-circle" onClick={handleCreateTablero}>
                  <span>+</span>
                </button>
              </>
            )}
          </div>
          
          <div className="catalogo-recetascards">
            {tarjetas.map((tarjeta) => (
              <CardReceta 
                key={tarjeta.id} 
                id={tarjeta.id} 
                titulo={tarjeta.titulo} 
                imagen={tarjeta.imagen}                 
              />
            ))}
          </div>
        </div>
        
        <div className="perfil-usuario">
          <h2>Mi Perfil</h2>
          <div className="perfil-foto">
            <div className="profile-image-container">
              <img src="/profile-placeholder.jpg" alt="Foto de perfil" onError={(e) => {
                e.target.onerror = null;
                e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='35' r='25' fill='%23ddd'/><circle cx='50' cy='100' r='40' fill='%23ddd'/></svg>";
              }} />
            </div>
            <button className="cambiar-foto">
              <span>📷</span>
              <span>Cargar Imagen</span>
            </button>
          </div>
          
          <div className="perfil-form">
            <div className="form-field">
              <label>Nombre de usuario:</label>
              <input type="text" placeholder="Nombre de usuario" />
            </div>
            
            <div className="form-row">
              <div className="form-field half">
                <label>Nombre:</label>
                <input type="text" placeholder="Nombre" />
              </div>
              <div className="form-field half">
                <label>Apellidos:</label>
                <input type="text" placeholder="Apellidos" />
              </div>
            </div>
            
            <div className="form-field">
              <label>Correo Electrónico:</label>
              <input
                type="email"
                placeholder="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            
            <div className="form-field">
              <label>Fecha de Nacimiento:</label>
              <input type="date" placeholder="DD/MM/YY" />
            </div>
            
            <div className="form-field">
              <label>Contraseña:</label>
              <input 
              type="password" 
              placeholder="********" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <button className="btn-guardar">Guardar</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Perfil;