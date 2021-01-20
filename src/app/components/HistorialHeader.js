import React from 'react'

import './styles/HistorialHeader.css'
import Logo from './Logo'
import SearchLink from './SearchLink'

const HistorialHeader = () => {
    return(
        <div className="historial-header">
            <h1>Historial Clínico</h1>
            <SearchLink medida={'100px'}/>
            <Logo className="historial-header-logo"/>
        </div>
    )
}

export default HistorialHeader