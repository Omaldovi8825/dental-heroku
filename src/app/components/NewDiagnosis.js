import React from 'react'
import ReactDOM from 'react-dom'

import './styles/NewDiagnosis.css'

const NewDiagnosis = (props) => {

    let {isOpen, closeDiagnosisModal, saveNewDiagnosis, onInputChange, newDiagnosisForm} = props

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
                        <th>P.D.</th>
                        <th>Cuota</th>
                        <th>A cuenta</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input 
                                type="text" 
                                name="diagnostico"
                                onChange={onInputChange}
                                value={newDiagnosisForm.diagnostico}    
                            />
                        </td>
                        <td>
                            <input 
                                type="text"
                                name="tratamiento"
                                onChange={onInputChange}
                                value={newDiagnosisForm.tratamiento}    
                            />
                        </td>
                        <td>
                            <input 
                                type="text" 
                                style={{textAlign: 'center'}}
                                name="piezaDentaria"
                                onChange={onInputChange}
                                value={newDiagnosisForm.piezaDentaria}
                            />
                        </td>
                        <td>
                            <input 
                                type="text" 
                                style={{textAlign: 'center'}}
                                name="cuota"
                                onChange={onInputChange}
                                value={newDiagnosisForm.cuota}
                            />
                        </td>
                        <td>
                            <input 
                                type="text" 
                                style={{textAlign: 'center'}}
                                name="aCuenta"
                                onChange={onInputChange}
                                value={newDiagnosisForm.aCuenta}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            <button 
                className="new-diagnosis-button"
                type="button"
                onClick={saveNewDiagnosis}
            >
                Guardar
            </button>
        </div>, 
        document.getElementById('modal'))
}

export default NewDiagnosis