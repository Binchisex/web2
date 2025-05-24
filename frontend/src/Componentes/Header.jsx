import React from "react";
import "../Header.css";
import fotoperfil from '../assets/img/fotoperfil.jpg';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header container-fluid">
      <div className="row align-items-center w-100">
        <div className="col-2 d-flex justify-content-start">
          <div className="header_logo-container">
            <a href="#" onClick={() => navigate("/feed-principal")}>
              <h3>SweetAlert</h3>
            </a>
          </div>
        </div>
        <div className="col-7 d-flex justify-content-center">
          <div className="header_searchbar w-100">
            <input type="text" placeholder="Search..." />
            <button type="submit">Search</button>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-end align-items-center gap-4">
          <a href="#" onClick={() => navigate("/Perfil")}>Favoritos</a>
          <a href="#" onClick={() => navigate("/crear-receta")}>Crear Receta</a>
          <div className="header_nav-img" onClick={() => navigate("/Perfil")}>
            <img src={fotoperfil} alt="Foto de perfil" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
