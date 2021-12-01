import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FormEditar = () => {

    const { id } = useParams();

    const [dataProyecto, setDataProyecto] = useState([]);
    const [nombre, setNombre] = useState('');

    useEffect(() => {

        const url = `https://hidden-everglades-90155.herokuapp.com/proyectos/${id}`
        const handledPutProyecto = () => {
            axios.get(url)
                .then(response => setDataProyecto(response.data))
        }
        handledPutProyecto();
    }, [id]);

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = `https://hidden-everglades-90155.herokuapp.com/proyectos/${id}`;
        axios.put(url, { nombre: nombre })
            .then(response => console.log(response.data))
        setNombre('');
    }

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h3 className="text-center mt-4">Editar proyecto: {dataProyecto.nombre}</h3>
                <div className="row mt-4">
                    <div className="col-lg-6 m-auto">
                        <form className="text-center" onSubmit={handleSubmit} >
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre del Proyecto"
                                    onChange={handleNombre}
                                    value={nombre}
                                />

                            </div>
                            <button className="btn btn-success  w-50">Guardar <FontAwesomeIcon icon={faSave} size="lg" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormEditar
