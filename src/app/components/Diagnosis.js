import React, {Fragment} from 'react'

import IpsumLorem from './IpsumLorem'

import './styles/Diagnosis.css'

const Diagnosis = (props) => {

    // const {fecha, isOpen, openModal, closeModal} = props

    return(
        <Fragment>
            <button 
                className="diagnosis-button" 
                type="button"
                onClick={() => console.log('hey')}>
                    Fecha: 12/12/2009
            </button>
            <IpsumLorem 
                // isOpen={isOpen}
                // closeModal={closeModal}
            />
        </Fragment>
    )
}

export default Diagnosis