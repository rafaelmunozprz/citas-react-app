import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    //Crear STATE de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    //El estado de error es recomendable trabajarlo por separado
    //NO IMPORTA tener más de un estado
    //el valor false es debido a que al cargar el formulario no 
    //existe ningun error
    const [error, actualizarError] = useState(false)

    //Función que se ejecuta cada que el usuario escribe en un input
    const actualizarState = (evt) => {
        //evt.target.name -> Devuelve el nombre (name) desde donde ocurre el evento
        //evt.target.value -> Devuelve el valor desde el campo en donde se esta ejecutando el evento
        actualizarCita({
            //Siempre es recomendable escribir una copia del STATE
            //con la finalidad de no sobreescribir el STATE original
            //para esto usamos el sprear operator '...cita'
            //si quitamos la copia del STATE, solo estará tomando un valor
            //a la vez, lo que implicaría que al cmabiar de campo esta se
            //sobreescribiría.
            ...cita,
            [evt.target.name]: evt.target.value
        });
    };

    //Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //Cuando el usuario presiona agregar cita
    const submitCita = (evt) => {
        //Se recomiendo escuchar el evento y como primera validación
        //evitar que los campos se cargen ya sea en GET (sobre la URL) o POST
        //si estos están vacios
        evt.preventDefault();
        console.log('Enviando form...');

        //Validar los campos
        //Con trim quitamos los espacios vacíos tanto a la derecha como a la izquierda
        if( mascota.trim() === '' || propietario.trim === '' || fecha.trim === '' ||
            hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            //Siempre que ocurra un error en un código secuencial
            //es recomendable utilizar "return" para evitar que el 
            //código continue ejecutandoce
            return;
        }
        //Eliminar mensaje previo
        actualizarError(false);

        //Asignar un ID
        cita.id = uuid();

        //Crear la cita
        crearCita(cita);

        //Reinicar el form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return (
        <Fragment>
            <h2>
                Crear Cita
            </h2>
            {
                error
                ?
                    <p className="alerta-error">
                        Todos los campos son obligatorios
                    </p>
                :
                    null
            }
            <form
                onSubmit={submitCita}
            >
                <label>
                    Nombre mascota
                </label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>
                    Nombre dueño
                </label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>
                    Fecha
                </label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>
                    Hora
                </label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>
                    Síntomas
                </label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar Cita
                </button>
            </form>
        </Fragment>
    );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;