import React from 'react'
import ReactDOM from 'react-dom'

import './styles/Modal.css'

const Modal = (props) => {

    let {closeModal, children, isOpen} = props

    return null

    if(!isOpen){
        return null
    }

    return ReactDOM.createPortal(
        <div className="modal">
            <i onClick={() => console.log('hola')} className="far fa-window-close"></i>
            {children}
        </div>, 
        document.getElementById('modal'))
}

export default Modal