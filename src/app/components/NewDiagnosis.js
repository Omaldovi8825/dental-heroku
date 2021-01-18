import React from 'react'
import ReactDOM from 'react-dom'

import './styles/NewDiagnosis.css'

const NewDiagnosis = (props) => {

    let {isOpen, closeDiagnosisModal} = props

    if(!isOpen){
        return null
    }

    return ReactDOM.createPortal(
        <div className="modal">
            <i onClick={closeDiagnosisModal} className="far fa-window-close"></i>
            <div className="new-diagnosis-area" >
            <table>
                <thead>
                    <tr>
                        <th>Diagnostico</th>
                        <th>Tratamiento</th>
                        <th>Cuota</th>
                        <th>A cuenta</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                        <td><input type="text"/></td>
                    </tr>
                </tbody>
            </table>
            </div>
            <button 
                className="new-diagnosis-button"
                type="button"
                onClick={closeDiagnosisModal}
            >
                Guardar
            </button>
        </div>, 
        document.getElementById('modal'))
}

export default NewDiagnosis