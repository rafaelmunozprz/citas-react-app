import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';

function App() {

    //Arreglo de citas
    const [citas, guardarCitas] = useState([]);

    //Funcion que toma las citas actuales y agregue la nueva
    const crearCita = (cita) => {
        //RECUERDA SIEMPRE guardar una copia de tu STATE
        //de lo contrario se sobre escribirá sobre la existente
        guardarCitas([
            ...citas,
            cita
        ]);
    }
    return (
        <Fragment>
            <h1>
                Administrador de Citas
            </h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario
                            crearCita={crearCita}
                        />
                    </div>
                    <div className="one-half column">
                        2
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
