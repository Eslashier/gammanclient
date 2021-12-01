import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-color-primary ">
            <div className="container-fluid">
                <Link to="/proyectos" className="navbar-brand text-white" href="#">Gamman APP</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="nav-link text-white" href="#">Gamman APP</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
