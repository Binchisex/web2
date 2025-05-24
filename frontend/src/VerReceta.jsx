import React, { useState, useRef } from "react";
import Comentario from "./Componentes/Comentario.jsx";
import Paso from './Componentes/PasoLectura.jsx';
import Header from './Componentes/Header.jsx';
import Swal from 'sweetalert2'; 

const VerReceta = () => {
    /*-----------Pasos-----------*/
    const [pasos, setPasos] = useState([{ paso: "Paso 1", descripcion: "Describe el primer paso aquí" }]);

    const eliminarPaso = (index) => {
        const nuevosPasos = pasos.filter((_, i) => i !== index);
        setPasos(nuevosPasos);
    };

    /*---------------------------*/

    const [imagenSrc, setImagenSrc] = useState("/img/burger.jpg");
    const [ingredientes, setIngredientes] = useState([""]);
    const inputFileRef = useRef(null);

    const handleImagenChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagenSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClickSubir = () => {
        inputFileRef.current.click();
    };

    const agregarIngrediente = () => {
        setIngredientes([...ingredientes, ""]);
    };

    const handleIngredienteChange = (index, value) => {
        const nuevosIngredientes = [...ingredientes];
        nuevosIngredientes[index] = value;
        setIngredientes(nuevosIngredientes);
    };

    const handlePublicar = () => {
        console.log("Ingredientes:", ingredientes);
        // Aquí puedes conectar el fetch después
    };

    /*------------------------ */

    const handleAgregarATablero = async () => {
        const { value: tablero } = await Swal.fire({
            title: 'Selecciona un tablero',
            input: 'select',
            inputOptions: {
                misTableros: {
                    tablero1: 'Comidas favoritas',
                    tablero2: 'Recetas para cena',
                    tablero3: 'Para compartir'
                }
            },
            inputPlaceholder: 'Elige un tablero',
            showCancelButton: true,
            confirmButtonText: 'Agregar',
            cancelButtonText: 'Cancelar',
            customClass: {
                popup: 'swal-wide'
            }
        });
    
        if (tablero) {
            Swal.fire(`¡Receta añadida a: ${tablero.replace("tablero", "Tablero ")}!`);
            // Aquí puedes hacer el fetch o acción para agregar realmente al tablero
        }
    };

    return (
    <div>
        <div className='row'>
            <Header/>
        </div>
        
        <div className='data-container justify-content-center align-items-center pt-5'>     
            <div className="row contenedor-standar p-3">
                <div className="col-3 align-items-center justify-content-start p-4 pt-2">
                    <div className="titulo-receta">
                        <p>Hamburguesas chidas</p>
                    </div>
                    <img className="img-receta" src={imagenSrc} alt="ImagenReceta" />
                    <div className="subir-imagen-container mt-3 d-flex align-items-center" onClick={handleClickSubir}>
                        <input 
                            type="file" 
                            ref={inputFileRef} 
                            onChange={handleImagenChange} 
                            style={{ display: 'none' }} 
                            accept="image/*"
                        />
                    </div>
                    <div className="subir-imagen-container mt-3 d-flex align-items-center" onClick={agregarIngrediente}>
                        <span className="texto-subir ms-2">Ingredientes</span>
                    </div>

                    <div className="mt-3">
                        {ingredientes.map((ingrediente, index) => (
                            <div key={index} className="d-flex align-items-center mb-2">
                                <input 
                                    type="text"
                                    className="input-standar"
                                    placeholder={`Tomates ${index + 1}`}
                                    value={ingrediente}
                                    onChange={(e) => handleIngredienteChange(index, e.target.value)}
                                    readOnly
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-9 p-3">
                <div className="d-flex flex-row justify-content-end align-items-center gap-2">
                        <button className="btn-success p-2 py-0" onClick={handlePublicar}>Agregar a Favoritos</button>
                        <button className="btn-guardar-en-tablero p-2 py-0 d-flex align-items-center gap-1" onClick={handleAgregarATablero}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark m-0 p-0" viewBox="0 0 16 16">
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                            </svg>
                        </button>
                    </div>
                        <br />
                    <textarea 
                        className="input-descripcion" 
                        rows="10" 
                        maxLength="500"
                        placeholder="Se va a hacer la carnita asada"
                        readOnly
                    />
                    <div className="row justify-content-center align-items-center mt-3">
                        <div className="col-6 justify-content-start d-flex">
                            <span className="texto-descripcion ms-2 p-2">Categoría:</span>
                            <div className="categoria-creada-container">
                                <div className="categoria-creada mt-1 p-2">
                                    <span>Categoria</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 justify-content-center align-items-center">
                            
                        </div>
                    </div>
                    <div className="row justify-content-between align-items-center mt-3 d-flex">
                        {/* Mostrar las categorías creadas */}
                        <div className="categoria-creada-container">
                            <div className="categoria-creada mt-1 p-2">
                                <span>Categoria</span>
                            </div>
                            <div className="categoria-creada mt-1 p-2">
                                <span>Categoria</span>
                            </div>
                            <div className="categoria-creada mt-1 p-2">
                                <span>Categoria</span>
                            </div>
                            <div className="categoria-creada mt-1 p-2">
                                <span>Categoria1</span>
                            </div>
                            <div className="categoria-creada mt-1 p-2">
                                <span>Categoria</span>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start align-items-start mt-3">
                        <div className="col-6 justify-content-start align-items-start">
                            <span className="texto-descripcion2 ms-2 p-2">Pasos:</span>
                        </div>
                    </div>
                    <div className='row justify-content-start align-items-start mt-3 d-flex flex-column'> 
                        <div className="col-12 justify-content-start align-items-start">
                        <div className="mt-3">
                        {pasos.slice(0, 5).map((paso, index) => (
                            <div key={index}>
                                <Paso
                                index={index}
                                paso={paso.paso}
                                descripcion={paso.descripcion}
                                onEliminar={eliminarPaso}
                                />
                            </div>
                        ))}
                        {pasos.slice(0, 5).map((paso, index) => (
                            <div key={index}>
                                <Paso
                                index={index}
                                paso={paso.paso}
                                descripcion={paso.descripcion}
                                onEliminar={eliminarPaso}
                                />
                            </div>
                        ))}
                        {pasos.slice(0, 5).map((paso, index) => (
                            <div key={index}>
                                <Paso
                                index={index}
                                paso={paso.paso}
                                descripcion={paso.descripcion}
                                onEliminar={eliminarPaso}
                                />
                            </div>
                        ))}
                        {pasos.slice(0, 5).map((paso, index) => (
                            <div key={index}>
                                <Paso
                                index={index}
                                paso={paso.paso}
                                descripcion={paso.descripcion}
                                onEliminar={eliminarPaso}
                                />
                            </div>
                        ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row p-3 ">
            <div className="col-12 justify-content-center align-items-center d-flex">
                <div className="titulo-receta p-2">
                    <p>Comentarios</p>
                </div>
            </div>
        </div>
        <div className="row p-3 d-flex flex-column">
            <div className="col-12 justify-content-center align-items-center d-flex flex-column">
                <div className="comentario-container p-3 w-100">
                    <div className="d-flex justify-content-between align-items-center gap-2">
                        <input 
                            type="text" 
                            maxLength="50" 
                            className="input-standar flex-grow-1" 
                            placeholder="Escribe un comentario aquí" 
                        />
                        <button className="btn btn-publicar">
                            Publicar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <div className="row p-3">
            <div className="col-12 justify-content-center align-items-center d-flex">
                <div className="comentario-container p-2">
                <Comentario texto="Qué rica se ve la receta!" usuario="Alejandra" fecha="10/04/2025" />
                <Comentario texto="Me encantan las hamburguesas!" usuario="Carlos" fecha="10/04/2025" />
                <Comentario texto="¿Cuál es la receta?" usuario="Juan" fecha="10/04/2025" />
                <Comentario texto="Me gusta mucho!" usuario="María" fecha="10/04/2025" />
                <Comentario texto="¿Dónde puedo conseguir los ingredientes?" usuario="Luis" fecha="10/04/2025" />
                <Comentario texto="¿Cuál es la receta?" usuario="Juan" fecha="10/04/2025" />
                <Comentario texto="Me gusta mucho!" usuario="María" fecha="10/04/2025" />
                <Comentario texto="¿Dónde puedo conseguir los ingredientes?" usuario="Luis" fecha="10/04/2025" />
                <Comentario texto="¿Cuál es la receta?" usuario="Juan" fecha="10/04/2025" />
                <Comentario texto="Me gusta mucho!" usuario="María" fecha="10/04/2025" />
                </div>
            </div>
        </div>
    </div>   
    );
};

export default VerReceta;
