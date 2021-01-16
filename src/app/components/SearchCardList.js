import React from 'react'
import SearhCard from './SearchCard'

const SearchCardList = ({pacientes}) => {
    if(pacientes.length === 0){
        return (
            <h1>No hay coincidencias</h1>
        )
    }

    return(
        <div className="cards-area">
            {pacientes.map((paciente) => {
                return(
                    <SearhCard 
                        key={paciente.folio}
                        pacienteInfo={paciente}
                    />
                )
            })}
        </div>
    )
}

export default SearchCardList