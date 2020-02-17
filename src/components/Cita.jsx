import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {
    const {mascota, propietario, fecha, hora, sintomas, id} = cita;
    return (
        <Fragment>
            <div className="cita">
                <p>
                    Mascota: 
                    <span>
                        {mascota}
                    </span>
                </p>
                <p>
                    Dueño: 
                    <span>
                        {propietario}
                    </span>
                </p>
                <p>
                    Fecha: 
                    <span>
                        {fecha}
                    </span>
                </p>
                <p>
                    Hora: 
                    <span>
                        {hora}
                    </span>
                </p>
                <p>
                    Síntomas: 
                    <span>
                        {sintomas}
                    </span>
                </p>
                <button
                    className="button eliminar u-full-width"
                    //Se usa un arrow function para esperar a que el botón
                    //sea presionado
                    onClick={()=> eliminarCita(id)}
                >
                    Eliminar &times;
                </button>
            </div>
        </Fragment>
    );
}

Cita.propTypes = {
    cita:   PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;