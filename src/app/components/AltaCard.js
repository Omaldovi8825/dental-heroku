import React, {useState, useEffect} from 'react'

import './styles/AltaCard.css'

const useCalcularEdad = fechaNacimiento => {
    const [edad, setEdad] = useState(fechaNacimiento)

    useEffect(() => {
        if(!fechaNacimiento){
            setEdad('')
        } else {
            let calculateEdad = Math.floor((((((new Date() - new Date(fechaNacimiento) )/1000)/60)/60)/24)/365) 
            let edad = calculateEdad.toString()
            setEdad(edad)
        }
    }, [fechaNacimiento])

    return edad
}

const AltaCard = ({formValues}) => {
    
    const {
        nombre, 
        apellido, 
        apellido2, 
        foto, 
        folio, 
        condicion,
        telefono,
        celular,
        email,
        fechaNacimiento,
        estadoCivil,    
    } = formValues

    const edad = useCalcularEdad(fechaNacimiento)

    return(
        <div className="card-container">
            <div className="card-user">
                <img src={foto || 'https://i.ibb.co/vmq8213/denti-foto.png'} alt="foto paciente"/>
                <div>
                    <p>Folio: {folio || '000000'}</p>
                    <h1>{nombre || 'Nombre'}
                    <br/>{apellido || 'Apellido1'} 
                    <br/>{apellido2 || 'Apellido2'}</h1>
                </div>
            </div>
            <div className="card-data">
                <p>Condición: <span>{condicion}</span></p>
                <p>Teléfono fijo: <span>{telefono}</span></p>
                <p>Teléfono celular: <span>{celular}</span></p>
                <p>Correo electrónico: <span>{email}</span></p>
                <p>Fecha de nacimiento: <span>{fechaNacimiento}</span></p>
                <p>Edad: <span>{edad}</span></p>                
                <p>Estado civil: <span>{estadoCivil}</span></p>
            </div>
        </div>
    )
}

export default AltaCard