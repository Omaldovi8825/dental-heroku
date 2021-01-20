import React from 'react'
import {Link} from 'react-router-dom'
import './styles/SearchHeader.css'

const SearchHeader = ({handleSearch}) => {
    const logoInicio = "https://i.ibb.co/HKZpPN7/denti-home.png" 

    return(
        <header className="search-header">
            <h1>Consulta</h1>
            <i className="fas fa-search search-ikon">
            <input 
                type="text"
                onChange={handleSearch}
            />
            </i>
            <Link to="/menu">
                <img className="search-header-logo" src={logoInicio} alt="logo inicio" />
            </Link>
        </header>
    )
}

export default SearchHeader