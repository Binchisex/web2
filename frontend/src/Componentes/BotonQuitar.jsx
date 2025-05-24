import React from 'react';

const BotonQuitar = ({ onClick }) => {
    return (
        <button 
            className="btn-crear-standar"  // Clase que define el estilo del botón
            onClick={onClick}
        >
            <img 
                src="/img/Quitar.png" 
                alt="Crear" 
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                }} 
            />
        </button>
    );
};

export default BotonQuitar;
