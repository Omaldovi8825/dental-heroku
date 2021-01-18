import React from 'react'
import {createPortal} from 'react-dom'

import ('./styles/DeleteModal.css')

const DeleteModal = ({isOpen, closeDeleteModal, deletePaciente}) => {
    if(!isOpen){
        return null
    }

    return (
        createPortal(
        <div className="delete-modal">
            <p>Esta acción no podrá deshacerse</p>
            <div className="delete-modal-buttons-container">
                <button 
                    type="button"
                    onClick={closeDeleteModal}
                >
                    Cancelar
                </button>
                <button 
                    type="button"
                    onClick={deletePaciente}
                >
                    Aceptar
                </button>
            </div>
        </div>
        ,document.getElementById('modal'))
    )
}

export default DeleteModal