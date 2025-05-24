import React from "react";
import DropdownMenu from "./DropdownMenu";
import CupcakePlaceholder from "./CupcakePlaceholder";
import { useNavigate } from "react-router-dom";

const CardReceta = ({ id, titulo, imagen }) => {
  const handleDelete = () => {
    console.log(`Eliminar tablero ${id}`);
  };

  const handleModify = () => {
    console.log(`Modificar tablero ${id}`);
    navigate("/ModificarReceta", { state: { id } });
  };

  const navigate = useNavigate(); 

  return (
    <div className="cardreceta">
      <div className="card-image-container cursos : pointer" onClick={() => navigate("/VerReceta")}>
        {imagen ? (
          <img src={imagen} alt={titulo} />
        ) : (
          <CupcakePlaceholder />
        )}
      </div>
      <div className="card-footer">
        <input type="text" className="card-title" value={titulo} readOnly />
        <DropdownMenu className="z-2 position:absolute" onDelete={handleDelete} onModify={handleModify} />
      </div>
    </div>
  );
};

export default CardReceta;