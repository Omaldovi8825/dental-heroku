import React from 'react'
import SearhCard from './SearchCard'

import Loader from '../components/Loader'

const SearchCardList = ({pacientes, loading}) => {
    
    if(loading){
        return (
            <Loader />
            )
        }
        
    if(pacientes.length === 0){
        return (
            <h1 style={{textAlign: 'center'}}>No hay coincidencias</h1>
        )
    }

    return(
        <div className="cards-area">
            {pacientes.map((paciente) => {
                return(
                    <SearhCard 
                        key={paciente._id}
                        pacienteInfo={paciente}
                    />
                )
            })}
        </div>
    )
}

export default SearchCardList