import React from 'react'

import './styles/DiagnosisList.css'

const NewDiagnostico = ({diagnoInfo, openDiagnosisEdit }) => {
    const {diagnostico, fecha, tratamiento, cuota, aCuenta, piezaDentaria, _id} = diagnoInfo 
    const fechaRecortada = fecha.substr(0, 10)

    return(
        <tr>
            <td>{fechaRecortada}</td>
            <td>{diagnostico}</td>
            <td>{tratamiento}</td>
            <td>{piezaDentaria}</td>
            <td>{cuota}</td>
            <td>{aCuenta}</td>
            <td>
                <button type="button" onClick={() => openDiagnosisEdit(_id)}>
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
                {diagnosticos.map( diagnostico => {
                    return(
                        <NewDiagnostico 
                            key={diagnostico._id}
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