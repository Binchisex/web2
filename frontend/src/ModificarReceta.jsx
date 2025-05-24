import React, { useState, useRef } from "react";
import BotonCrear from './Componentes/BotonCrear';
import Paso from './Componentes/Paso';
import Header from './Componentes/Header.jsx';
import Swal from 'sweetalert2'; 
import { useParams } from 'react-router-dom';

const ModificarReceta = () => {
  const { id } = useParams();
  const [pasos, setPasos] = useState([{ paso: "Paso 1", descripcion: "Describe el primer paso aquí" }]);
  const [categoriasNuevas, setCategoriasNuevas] = useState([]);
  const [imagenSrc, setImagenSrc] = useState("/img/burger.jpg");
  const [ingredientes, setIngredientes] = useState([""]);
  const inputFileRef = useRef(null);
  const [categoria, setCategoria] = useState("");

  const agregarPaso = () => {
    setPasos([...pasos, { paso: `Paso ${pasos.length + 1}`, descripcion: "" }]);
  };

  const eliminarPaso = (index) => {
    setPasos(pasos.filter((_, i) => i !== index));
  };

  const handleCrearCategoria = () => {
    if (categoriasNuevas.length >= 5) {
      Swal.fire('¡Límite alcanzado!', 'Ya no puedes agregar más categorías', 'error');
      return;
    }

    Swal.fire({
      title: 'Crear nueva categoría',
      html: `
        <input id="nombreCategoria" class="swal2-input" placeholder="Nombre de la categoría" />
        <textarea id="descripcionCategoria" class="swal2-textarea" placeholder="Descripción de la categoría"></textarea>
      `,
      focusConfirm: false,
      preConfirm: () => {
        const nombreCategoria = document.getElementById('nombreCategoria').value;
        const descripcionCategoria = document.getElementById('descripcionCategoria').value;

        if (!nombreCategoria || !descripcionCategoria) {
          Swal.showValidationMessage('Por favor ingrese un nombre y descripción');
        } else {
          setCategoriasNuevas([...categoriasNuevas, { nombre: nombreCategoria, descripcion: descripcionCategoria }]);
          Swal.fire('Categoría creada', `Se ha creado la categoría: ${nombreCategoria}`, 'success');
        }
      }
    });
  };

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagenSrc(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleClickSubir = () => inputFileRef.current.click();

  const agregarIngrediente = () => setIngredientes([...ingredientes, ""]);

  const handleIngredienteChange = (index, value) => {
    const nuevosIngredientes = [...ingredientes];
    nuevosIngredientes[index] = value;
    setIngredientes(nuevosIngredientes);
  };

  const eliminarIngrediente = (index) => {
    setIngredientes(ingredientes.filter((_, i) => i !== index));
  };

  const handlePublicar = async () => {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3002";

    try {
      const response = await fetch(`${API_URL}/recetas/actualizar/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imagen: imagenSrc,
          ingredientes,
          categoria,
          pasos,
        }),
      });

      if (response.ok) {
        Swal.fire('Receta actualizada', 'Tu receta ha sido modificada correctamente.', 'success');
      } else {
        Swal.fire('Error', 'No se pudo actualizar la receta.', 'error');
      }
    } catch (error) {
      console.error("Error al actualizar la receta:", error);
      Swal.fire('Error', 'Ocurrió un error inesperado.', 'error');
    }
  };

  return (
    <div>
      <div className='row'><Header /></div>
      <div className='data-container justify-content-center align-items-center pt-5'>     
        <div className="row contenedor-standar p-3">
          <div className="col-3 p-4 pt-2">
            <div className="titulo-receta"><p>Modificar Receta</p></div>
            <img className="img-receta" src={imagenSrc} alt="ImagenReceta" />
            <div className="subir-imagen-container mt-3 d-flex align-items-center" onClick={handleClickSubir}>
              <img src="/img/Subir.png" className="icono-subir" alt="Subir" />
              <span className="texto-subir ms-2">Cargar imagen</span>
              <input type="file" ref={inputFileRef} onChange={handleImagenChange} style={{ display: 'none' }} accept="image/*" />
            </div>
            <div className="subir-imagen-container mt-3 d-flex align-items-center" onClick={agregarIngrediente}>
              <span className="texto-subir ms-2">Ingredientes</span>
              <img src="/img/Crear.png" className="icono-subir mt-2 p-2" alt="Ingredientes" />
            </div>
            <div className="mt-3">
              {ingredientes.map((ingrediente, index) => (
                <div key={index} className="d-flex align-items-center mb-2">
                  <input type="text" className="input-standar" placeholder={`Ingrediente ${index + 1}`} value={ingrediente} onChange={(e) => handleIngredienteChange(index, e.target.value)} />
                  <button className="btn-ingrediente ms-2" onClick={() => eliminarIngrediente(index)}>
                    <img src="/img/Quitar.png" alt="Eliminar Ingrediente" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="col-9 p-3">
            <div className="d-flex justify-content-end"><button className="btn-success p-2 py-0" onClick={handlePublicar}>Publicar</button></div>
            <div className="p-3 pe-0"><input type="text" className="input-standar" placeholder="Nombre de la receta" /></div>
            <textarea className="input-descripcion" rows="10" maxLength="500" placeholder="Escribe una descripción (máx. 500 caracteres)..." />
            <div className="row mt-3">
              <div className="col-6">
                <span className="texto-descripcion ms-2 p-2">Categoría:</span>
                <select id="categoria" className="categoria-receta" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                  <option value="">Selecciona Categoria</option>
                  <option value="desayuno">Desayuno</option>
                  <option value="comida">Comida</option>
                  <option value="cena">Cena</option>
                  <option value="postre">Postre</option>
                  <option value="snack">Snack</option>
                  <option value="bebida">Bebida</option>
                </select>
              </div>
              <div className="col-6" onClick={handleCrearCategoria}>
                <span className="texto-descripcion ms-2 p-2">Crear Categoría:</span>
                <BotonCrear />
              </div>
            </div>
            <div className="row mt-3">
              <div className="categoria-creada-container">
                {categoriasNuevas.map((categoria, index) => (
                  <div key={index} className="categoria-creada mt-1 p-2"><span>{categoria.nombre}</span></div>
                ))}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <span className="texto-descripcion2 ms-2 p-2">Pasos:</span>
                <BotonCrear onClick={agregarPaso} />
              </div>
            </div>
            <div className='row mt-3 d-flex flex-column'>
              <div className="col-12">
                {pasos.map((paso, index) => (
                  <div key={index}>
                    <Paso index={index} paso={paso.paso} descripcion={paso.descripcion} onEliminar={eliminarPaso} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModificarReceta;
