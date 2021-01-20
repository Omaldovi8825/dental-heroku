import React from 'react'
import {Link} from 'react-router-dom'
import './styles/Logo.css'

const Logo = (props) => {
    return(
        <Link to="/menu">
            <img 
                className={props.className || "Inicio_logo"} 
                src="https://i.ibb.co/HKZpPN7/denti-home.png" 
                alt="logo">   
            </img>        
        </Link>
    )
}

export default Logo