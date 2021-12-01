import React, { useState } from 'react';
import Navbar from '../Home/Navbar';
import Logo from '../../assets/1632184721717.png';
import axios from 'axios';
import {withRouter} from 'react-router-dom';


const Login = (props) => {

    const [credenciales, setGredenciales] = useState({});

    const leerDatos = (e) => {
        setGredenciales({
            ...credenciales,
            [e.target.name]: e.target.value
        })
    }

    const iniciarSesion = async (e) => {
        e.preventDefault();
        try {
            const url = 'https://hidden-everglades-90155.herokuapp.com/iniciar-sesion';
            const respuesta = await axios.post(url, credenciales);
            const { token } = respuesta.data;
            localStorage.setItem('token', token);
            props.history.push('/proyectos')
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h3 className="text-center">Iniciar Sesión</h3>
                <div className="row mt-5">
                    <div className="col-lg-7 text-center">
                        <img className="w-50" src={Logo} alt="" />
                    </div>
                    <div className="col-lg-5">
                        <form onSubmit={iniciarSesion}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" required onChange={leerDatos} name="email" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" required onChange={leerDatos} name="password" />
                            </div>
                            <button className="btn btn-success w-100">Submit</button>
                            <p>Crear una Cuenta Nueva</p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(Login);
