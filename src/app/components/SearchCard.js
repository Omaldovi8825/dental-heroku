import React  from 'react'
import {Link} from 'react-router-dom'

import './styles/SearchCard.css'

const SearchCard = (props) => {
    const {nombre, apellido, apellido2, foto, folio, condicion, _id} = props.pacienteInfo
    return(
        <Link to={`paciente/${_id}`} className="user-link">
            <div className="search-card-container">
                <div className="card-container-up">
                    <p>Folio: {folio}</p>
                    <img src={foto} alt="user foto" />    
                </div>
                <div className="card-container-down">
                    <p>{`${nombre} ${apellido} ${apellido2}`}</p>
                    <p>({condicion})</p>
                </div>
            </div>
        </Link>
    )
}

export default SearchCard