import React, { useEffect, useState } from 'react';
import ContenedorRecetas from './Componentes/ContenedorRecetas.jsx';
import { useNavigate } from "react-router-dom";
import Header from './Componentes/Header.jsx';

const FeedPrincipal = () => {
  const [recetas, setRecetas] = useState([]);

 useEffect(() => {
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

  fetch(`${API_URL}/recetas/todos`)
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data)) {
        setRecetas(data);
      }
    })
    .catch(err => {
      console.error("Error al cargar recetas:", err);
    });
}, []);


  return (
    <div>
      <div className='row'>
        <Header />
      </div>
      <div className="feed-principal row w-100 h-100 m-0 justify-content-center mt-5">
        <div className="col-1"></div>
        <div className='data-container col-8 h-100 p-3'>
          <div className='row d-flex justify-content-center align-items-center flex-column'>
            <div className="d-flex text-align-end titulo-busqueda z-3 position-absolute">
              <p>Quien tiene hambre</p>
            </div>
          </div>
          <div className='contenedor-de-todas-recetas p-2 pt-4'>
            {recetas.map((receta) => (
              <ContenedorRecetas
                key={receta.id}
                recetas={[receta]}
              />
            ))}
          </div>
        </div>
        <div className='col-2 align-items-start p-3'>
          <div className='filtro-sidebar p-4 w-100'>
            <h1 className='mb-3'>Filtrar por:</h1>
            <div className="mb-2 w-100">
              <label>Categoría</label>
              <br />
              <select className="categoria-receta mb-3">
                <option>Todas</option>
                <option>Postres</option>
                <option>Salados</option>
                <option>Bebidas</option>
              </select>
            </div>
            <div className="mb-2 w-100">
              <label>Ordenar por</label>
              <br />
              <select className="categoria-receta mb-3">
                <option>Más recientes</option>
                <option>Mejor valoradas</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPrincipal;
