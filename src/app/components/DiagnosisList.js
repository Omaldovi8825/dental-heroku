import React from 'react'

import './styles/DiagnosisList.css'

const NewDiagnostico = ({diagnoInfo, openDiagnosisEdit}) => {
    const {diagnostico, fecha, tratamiento, cuota, aCuenta, piezaDentaria} = diagnoInfo 

    return(
        <tr>
            <td>{fecha}</td>
            <td>{diagnostico}</td>
            <td>{tratamiento}</td>
            <td>{piezaDentaria}</td>
            <td>{cuota}</td>
            <td>{aCuenta}</td>
            <td>
                <button type="button" onClick={openDiagnosisEdit}>
                    <i className="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    )
}

const DiagnosisList = ({openDiagnosisEdit, diagnosticos}) => {
    return(
        <table className="diagnosis-table">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Diagnostico</th>
                    <th>Tratamiento</th>
                    <th>P.D</th>
                    <th>Cuota</th>
                    <th>A cuenta</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                {diagnosticos.map((diagnostico, index) =>{
                    return(
                        <NewDiagnostico 
                            key={index}
                            diagnoInfo={diagnostico}
                            openDiagnosisEdit={openDiagnosisEdit}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}

export default DiagnosisList