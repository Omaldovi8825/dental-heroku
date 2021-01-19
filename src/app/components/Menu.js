import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './styles/Menu.css'

const Icon = () => {
    return(
        <i className="fas fa-search"></i>
    ) 
}

const BotonInicio = ({route, name}) => {
    return(
        <Link 
            to={route} 
            className="MenuInicio__boton">
                {name}
        </Link>
    )
}

const Menu = () => {
    const [isOpen, setIsOpen] = useState('')
    const password = 'caries'

    return(
        <div className="MenuInicio">
            {isOpen === password && 
                <div className="MenuInicio__innerSquare">
                    <BotonInicio name="Alta" route="/alta"/>
                    <Link 
                        to="./search"
                        className="MenuInicio__boton"
                    >
                        <Icon />    
                        Consulta
                    </Link>
                    <BotonInicio name="Agenda" route="/" />
                </div>
            }
            {isOpen !== password &&
                <div className="fake-login">
                    <label>Contraseña</label>
                    <input 
                        type="password" 
                        onChange={e => setIsOpen(e.target.value)}
                    />
                </div>
            }
        </div>
    )
}

export default Menu