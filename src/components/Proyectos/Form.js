import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-regular-svg-icons';

const Form = ({setNombre}) => {

    const [queryName, setQueryName]=useState('');

    const handleQueryName=(e)=>{
        setQueryName(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setNombre(queryName);
        setQueryName('')
    }

    return (
        <form className="text-center" onSubmit={handleSubmit}>
            <div className="mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Nombre del Proyecto" 
                    onChange={handleQueryName}
                    value={queryName}
                />
                
            </div>
            <button className="btn btn-success w-50">Guardar <FontAwesomeIcon icon={faSave} size="lg"/></button>
        </form>
    )
}

export default Form
