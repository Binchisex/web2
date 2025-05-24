import React from 'react';
import BotonQuitar from './BotonQuitar';

const Paso = ({ index, paso, descripcion, onEliminar }) => {
    return (
        <div className='contenedor-pasos-card mb-3'>
            <div className='row'>
                <div className='col-1'>
                    <div className='numero-paso'>
                        {index + 1}
                    </div>
                </div>
                <div className='col-9 d-flex flex-column'>
                    <input type="text" maxLength="50" className="input-standar" placeholder="Titulo de Paso"/>
                </div>
                <div className='col-1 d-flex justify-content-end align-items-end'>
                    <div>
                        {/* El botón de eliminar solo aparece desde el segundo paso */}
                        {index > 0 && <BotonQuitar onClick={() => onEliminar(index)} />}
                    </div>
                </div>
            </div>
            <div className='contenido-paso p-3'>
            <textarea 
                        className="input-descripcion" 
                        rows="10" 
                        maxLength="500"
                        placeholder="Escribe una descripción (máx. 500 caracteres)..."
            />
            </div>
        </div>
    );
};

export default Paso;
