import React from 'react';
import Footer from '../components/Custom/Footer';
import Hero from '../components/Custom/Hero';
import Navbar from '../components/Home/Navbar';
import Image1 from '../assets/001-teenager.png';
import Image2 from '../assets/002-teenager.png';
import Image3 from '../assets/003-teenager.png';

const SobreNosotros = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="container mt-4">
                <h3 className="text-center">Acerca de Nosotros</h3>
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <h4 className="text-center">Misión</h4>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente veniam, quam facilis
                            nobis nostrum aspernatur incidunt dolorem illum beatae tempora placeat exercitationem
                            quasi molestiae ut vel assumenda fugit consequuntur tenetur. Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit. Saepe libero autem earum ipsum perspiciatis assumenda
                            labore illum quae maiores, enim cupiditate numquam consectetur consequuntur, provident
                            inventore fuga placeat nobis animi? Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Cupiditate debitis laboriosam tempore soluta minima unde! Qui, et consequatur
                            sit ipsa ea atque officiis ratione modi repudiandae, officia praesentium ipsum unde?
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <h4 className="text-center">Visión</h4>
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente veniam, quam facilis
                            nobis nostrum aspernatur incidunt dolorem illum beatae tempora placeat exercitationem
                            quasi molestiae ut vel assumenda fugit consequuntur tenetur. Lorem ipsum dolor sit amet
                            consectetur, adipisicing elit. Saepe libero autem earum ipsum perspiciatis assumenda
                            labore illum quae maiores, enim cupiditate numquam consectetur consequuntur, provident
                            inventore fuga placeat nobis animi? Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Cupiditate debitis laboriosam tempore soluta minima unde! Qui, et consequatur
                            sit ipsa ea atque officiis ratione modi repudiandae, officia praesentium ipsum unde?
                        </p>
                    </div>
                </div>
                <h3 className="mt-4 text-center">Nuestro Equipo de Trabajo</h3>
                <div className="row mt-4 mb-5">

                    <div className="col-lg-4">
                        <div className="card" >
                            <img src={Image1} className="card-img-top w-75 m-auto" alt="..." />
                            <div className="card-footer text-muted">
                                <p className="card-text text-center">Juan Sebastian</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">

                        <div className="card" >
                            <img src={Image2} className="card-img-top w-75 m-auto" alt="..." />
                            <div className="card-footer text-muted">
                                <p className="card-text text-center">Zuleidy</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card" >
                            <img src={Image3} className="card-img-top w-75 m-auto" alt="..." />
                            <div className="card-footer text-muted">
                                <p className="card-text text-center">Andrés</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default SobreNosotros
