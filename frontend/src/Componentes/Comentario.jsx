import React from 'react';
import '../Componentes.css'; 

const Comentario = ({ texto, usuario = "Usuario Anónimo", fecha = new Date().toLocaleDateString() }) => {
    return (
        <div className="comentario-publicado d-flex align-items-start gap-3 mb-3">
            <img src="img/burger.jpg" alt="Perfil" className="comentario-img" />
            <div className="comentario-contenido">
                <div className="comentario-header mb-1">
                    <strong className="comentario-usuario">{usuario}</strong>
                    <span className="comentario-fecha ms-2">{fecha}</span>
                </div>
                <div className="comentario-texto">
                    {texto}
                </div>
            </div>
        </div>
    );
};

export default Comentario;
