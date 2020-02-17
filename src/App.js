import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

    //Citas en local storage
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(!citasIniciales){
        citasIniciales = [];
    }

    //Arreglo de citas
    const [citas, guardarCitas] = useState(citasIniciales);

    //useEffect para realizar ciertas operaciones cuando el STATE cambia
    //se le pasa un arreglo vacío para que solo se ejecute una sola vez
    useEffect(()=>{
        if(citasIniciales){
            localStorage.setItem('citas', JSON.stringify(citas));
        }else{
            localStorage.setItem('citas', JSON.stringify([]));
        }
    }, [citas, citasIniciales]);

    //Funcion que toma las citas actuales y agregue la nueva
    const crearCita = (cita) => {
        //RECUERDA SIEMPRE guardar una copia de tu STATE
        //de lo contrario se sobre escribirá sobre la existente
        guardarCitas([
            ...citas,
            cita
        ]);
    };

    //Funcion que elimina CITA por su ID
    const eliminarCita = id => {
        //Con el método filter buscamos una coincidencia
        //por lo tanto para eliminar se buscan los que sean
        //diferentes a la llave de busqueda, para guardar
        //todos los que sean diferentes
        const nuevasCitas = citas.filter(cita => cita.id !== id);
        guardarCitas(nuevasCitas)
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
                        {
                            citas.length >= 1
                            ?
                                <h2>Administra tus citas</h2>
                            :
                                <h2>No hay citas</h2>
                        }
                        {citas.map(cita => (
                            <Cita
                                key={cita.id}
                                cita={cita}
                                eliminarCita={eliminarCita}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
