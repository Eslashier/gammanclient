import React from 'react';
import Hero from '../components/Custom/Hero';
import Navbar from '../components/Home/Navbar';
import Logo from '../assets/1632184721717.png';
import Footer from '../components/Custom/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-6 m-auto text-center">
                        <img className="w-75" src={Logo} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
