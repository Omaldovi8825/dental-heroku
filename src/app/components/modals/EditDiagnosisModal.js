import React from 'react'
import {createPortal} from 'react-dom'

import './styles/EditDiagnosisModal.css'

const EditDiagnosisModal = ({isOpen, closeModal, toEdit, deleteDiagnosis, updateDiagnosis, handleChange}) => {

    if(!isOpen){
        return null
    }

    const { diagnostico, tratamiento, piezaDentaria, cuota, aCuenta, _id} = toEdit

    return createPortal(
        <div className="modal">
            <i onClick={closeModal} className="far fa-window-close"></i>
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
                                    placeholder={diagnostico}
                                    onChange={handleChange}   
                                />
                            </td>
                            <td>
                                <input 
                                    type="text"
                                    name="tratamiento"
                                    placeholder={tratamiento}
                                    onChange={handleChange}      
                                />
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    style={{textAlign: 'center'}}
                                    name="piezaDentaria"
                                    placeholder={piezaDentaria}
                                    onChange={handleChange}   
                                />
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    style={{textAlign: 'center'}}
                                    name="cuota"
                                    placeholder={cuota}
                                    onChange={handleChange}   
                                />
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    style={{textAlign: 'center'}}
                                    name="aCuenta"
                                    placeholder={aCuenta}
                                    onChange={handleChange}   
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="edit-diagnosis">
                <button 
                    type="button"
                    onClick={() => updateDiagnosis(_id)}
                >
                    Guardar
                </button>
                <button 
                    type="button"
                    onClick={() => deleteDiagnosis(_id)}
                >
                    Eliminar
                </button>
            </div>
        </div>, 
        document.getElementById('modal'))
}

export default EditDiagnosisModal