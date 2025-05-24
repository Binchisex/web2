import React from 'react';
import ContenedorRecetas from './Componentes/ContenedorRecetas.jsx';
import { useNavigate } from "react-router-dom";
import Header from './Componentes/Header.jsx';

const FeedPrincipal = () => {
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
                        <ContenedorRecetas recetas={[{ id: 1, nombre: 'Receta 1', descripcion: 'Descripción de la receta 1', imagen: '/img/burger.jpg' }]} />
                        <ContenedorRecetas recetas={[{ id: 2, nombre: 'Receta 2', descripcion: 'Descripción de la receta 2', imagen: '/img/gelato.jpg' }]} />
                        <ContenedorRecetas recetas={[{ id: 3, nombre: 'Receta 3', descripcion: 'Descripción de la receta 3', imagen: '/img/burger-kawai.jpg' }]} />
                        <ContenedorRecetas recetas={[{ id: 4, nombre: 'Receta 4', descripcion: 'Descripción de la receta 4', imagen: '/img/cupcakes.jpg' }]} />
                        <ContenedorRecetas recetas={[{ id: 5, nombre: 'Receta 5', descripcion: 'Descripción de la receta 5', imagen: '/img/flan.jpg' }]} />
                        <ContenedorRecetas recetas={[{ id: 6, nombre: 'Receta 6', descripcion: 'Descripción de la receta 6', imagen: '/img/pasta.jpg' }]} />
                        <ContenedorRecetas recetas={[{ id: 7, nombre: 'Receta 7', descripcion: 'Descripción de la receta 7', imagen: '/img/strawberrycream.jpg' }]} />
                        <ContenedorRecetas recetas={[{ id: 8, nombre: 'Receta 8', descripcion: 'Descripción de la receta 8', imagen: '/img/potatoes.jpg' }]} />
                        <ContenedorRecetas recetas={[{ id: 9, nombre: 'Receta 9', descripcion: 'Descripción de la receta 9', imagen: '/img/milkshake.jpg' }]} />
                    </div>
                </div>
                <div className='col-2 align-items-start p-3'>
                    <div className='filtro-sidebar p-4  w-100'>
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
}

export default FeedPrincipal;
