import React from 'react'

import './styles/AltaForm.css'

const AltaForm = ({handleChange, formValues, handleSubmit, buttonName}) => {
    return(
        <form className="alta_form" onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input 
                name="nombre" 
                type="text"
                onChange={handleChange}
                value={formValues.nombre}
            />    
            <label>Apellido paterno</label>
            <input 
                name="apellido" 
                type="text"
                onChange={handleChange}
                value={formValues.apellido}
            />
            <label>Apellido materno</label>
            <input 
                name="apellido2" 
                type="text"
                onChange={handleChange}
                value={formValues.apellido2}
            />
            <label>Foto URL</label>
            <input 
                name="foto" 
                type="text"
                onChange={handleChange}
                value={formValues.foto}
            />
            <label>Folio</label>
            <input 
                name="folio" 
                type="number"
                onChange={handleChange}
                value={formValues.folio}
            />      
            <label>Diagnóstico</label>
            <input 
                name="condicion" 
                type="text"
                onChange={handleChange}
                value={formValues.condicion}
            />      
            <label>Telefono fijo</label>
            <input 
                name="telefono" 
                type="text"
                onChange={handleChange}
                value={formValues.telefono}
            />    
            <label>Celular</label>
            <input 
                name="celular" 
                type="text"
                onChange={handleChange}
                value={formValues.celular}
            />    
            <label>Correo electrónico</label>
            <input 
                name="email" 
                type="email"
                onChange={handleChange}
                value={formValues.email}
            />
            <label>Fecha de nacimiento</label>
                <input 
                    name="fechaNacimiento" 
                    type="date"
                    onChange={handleChange}
                    value={formValues.fechaNacimiento}
                />        
            <label>Estado civil</label>
            <select onChange={handleChange} name="estadoCivil">
                <option value="solter@">solter@</option>
                <option value="casad@">casad@</option>
            </select>
            <button 
                type="submit"
                className="prm-button">
                    {buttonName}
            </button>      
        </form>
    )
}

export default AltaForm