
import axios from 'axios';
import Form from '../components/Proyectos/Form';
import Navbar from '../components/Proyectos/Navbar';
import React, { useEffect, useState } from 'react';
import CardProyecto from '../components/Proyectos/CardProyecto';

const Proyectos = () => {

    const [dataProyectos, setDataProyectos] = useState([]);
    const [nombre, setNombre] = useState(null);

    useEffect(() => {
        const url = 'https://hidden-everglades-90155.herokuapp.com/proyectos';
        axios.get(url)
            .then(response => setDataProyectos(response.data))
    }, []);

    useEffect(() => {
        if (nombre !== null) {
            const url = 'https://hidden-everglades-90155.herokuapp.com/proyectos';
            axios.post(url, { nombre: nombre })
                .then(response => setDataProyectos(prev => [response.data.proyecto, ...prev]))
        }
    }, [nombre]);

    const handleSearchIdDelete = (id) => {
        if (id) {
            const url = `https://hidden-everglades-90155.herokuapp.com/proyectos/${id}`;
            axios.delete(url)
                .then(response => {
                    setDataProyectos(dataProyectos.filter(response => response._id !== id))
                })
        }
    }

    return (
        <>
            <Navbar />
            <div className="container mt-3">
                <div className="row ">
                    <div className="col-lg-6 m-auto">
                        <Form setNombre={setNombre} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-7 m-auto">
                        {
                            dataProyectos.map((proyecto, i) => (
                                <CardProyecto
                                    key={i + 1}
                                    nombre={proyecto.nombre}
                                    id={proyecto._id}
                                    handleSearchIdDelete={handleSearchIdDelete}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proyectos;
