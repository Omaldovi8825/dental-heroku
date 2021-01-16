import React from 'react'

import './styles/HistorialHeader.css'
import Logo from './Logo'

const HistorialHeader = () => {
    return(
        <div className="historial-header">
            <h1>Historial Clínico</h1>
            <Logo className="historial-header-logo"/>
        </div>
    )
}

export default HistorialHeader