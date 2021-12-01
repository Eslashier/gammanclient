import React from 'react';
import Footer from '../components/Custom/Footer';
import Hero from '../components/Custom/Hero';
import Navbar from '../components/Home/Navbar';
import Logo from '../assets/1632184721717.png'

const Contacto = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="container mt-4">
                <h3 className="text-center">Contáctenos</h3>
                <h6 className="text-center">Contáctenos para compartir sus comentarios, opiniones y necesidades</h6>

                <div className="row mt-5 mb-5">

                    <div className="col-lg-6 text-center">
                        <h5>Información de Contacto</h5>
                        <img className="w-75" src={Logo} alt="logo" />
                        <p className="m-0 mt-4 fw-bold">Bogotá - Colombia</p>
                        <p className="m-0 fw-bold">Calle 70a bis # 17 - 62 Piso 2</p>
                        <p className="m-0 fw-bold">Teléfono: 724-8075</p>
                    </div>

                    <div className="col-lg-6 mt-5">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Nombres" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="E-mail" />
                            </div>
                            <div className="mb-3">
                                <input type="tel" className="form-control" placeholder="Celular" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Mensaje" />
                            </div>
                            <button type="submit" className="btn btn-success text-white w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contacto
