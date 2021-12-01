import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const CardProyecto = ({ nombre, id, handleSearchIdDelete, handleSearchIdeEdit }) => {

    return (
        <div className="card">
            <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                    <FontAwesomeIcon icon={faBriefcase} size="lg" />
                    <span className="fw-bold px-2"> {nombre}</span>
                </div>

                <div>
                    <Link to={`/proyectos/editar/${id}`}
                        className="btn btn-warning text-white mx-2"
                   
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <button 
                        className="btn btn-danger"
                        onClick={()=>handleSearchIdDelete(id)}
                    >
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardProyecto
