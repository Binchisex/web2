import React from 'react';

const PasoLectura = ({ index, paso, descripcion, onEliminar }) => {
    return (
        <div className='contenedor-pasos-card mb-3'>
            <div className='row'>
                <div className='col-1'>
                    <div className='numero-paso'>
                        {index + 1}
                    </div>
                </div>
                <div className='col-9 d-flex flex-column'>
                    <input type="text" maxLength="50" className="input-standar" readOnly placeholder="Titulo de Paso"/>
                </div>
                <div className='col-1 d-flex justify-content-end align-items-end'>
                 </div>
            </div>
            <div className='contenido-paso p-3'>
            <textarea 
                        className="input-descripcion" 
                        rows="10" 
                        maxLength="500"
                        placeholder="Descripción de pasos"
                        readOnly
            />
            </div>
        </div>
    );
};

export default PasoLectura;
