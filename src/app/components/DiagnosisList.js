import React from 'react'

import './styles/DiagnosisList.css'

const NewDiagnostico = ({diagnoInfo, openDiagnosisEdit}) => {
    const {diagnostico, fecha, tratamiento, cuota, aCuenta} = diagnoInfo 

    return(
        <tr>
            <td>{fecha}</td>
            <td>{diagnostico}</td>
            <td>{tratamiento}</td>
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

const DiagnosisList = ({openDiagnosisEdit}) => {
    const diagnosticos = [
        {
            fecha:'10-10-2020',
            diagnostico: 'caries',
            tratamiento: 'quitar caires',
            cuota: 2500,
            aCuenta: 1200
        },
        {
            fecha:'13-11-2018',
            diagnostico: 'muela rota',
            tratamiento: 'pegar muela',
            cuota: 1800,
            aCuenta: 1000
        },
        {
            fecha:'10-09-2015',
            diagnostico: 'dientes feos',
            tratamiento: 'limpieza dental',
            cuota: 1500,
            aCuenta: 850
        },
    ]

    return(
        <table className="diagnosis-table">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Diagnostico</th>
                    <th>Tratamiento</th>
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