import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles/Login.css'

const Login = (props) => {

    const [user, setUser] = useState('')
    const [passwoord, setPassword ] = useState('')

    const usuario = 'dental'
    const contrasena = 'caries'

    return(
        <form className="login-Form">
            <label>Usuario</label>
            <input 
                type="text"
                onChange={ e => setUser(e.target.value)}
            />
            <label>Contraseña</label>
            <input 
                type="password"
                onChange={ e => setPassword(e.target.value)}
            />
            { user === usuario && passwoord === contrasena &&
                <Link 
                    className="login-form-button"
                    to='/menu'
                >
                    Login
                </Link>
            }
        </form>
    )
}

export default Login