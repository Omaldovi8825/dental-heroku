import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import HistorialHeader from '../components/HistorialHeader'
import Diagnosis from '../components/Diagnosis'
import NewDiagnosis from '../components/NewDiagnosis'

import './styles/PacienteDetails.css'

class ClientDetails extends Component {
   
    // openModal = () => {
    //     this.setState({
    //         modalOpen: true
    //     })
    // }

    // closeModal = () => {
    //     this.setState({
    //         modalOpen: false
    //     })
    // }

    // openNewDiagnosis = e => {
    //     this.setState({
    //         newDiagnosis: true
    //     })
    // }

    // handleCloseDiagnosisModal = e => {
    //     this.setState({
    //         newDiagnosis: false
    //     })
    // }

    render(){
        return(
            <div>
                <HistorialHeader />
                <div className="historial-area">
                    <div className="historial-area-buttons">
                        <Link to="/">
                            <img src="https://i.ibb.co/mTZV5pL/denti-diagnostico.png" alt="nuevo diagnostico"/>
                        </Link>
                        <button 
                            type="button"
                            onClick={() => console.log('hola')}>
                            <img src="https://i.ibb.co/RQpnSjK/denti-agenda.png" alt="nueva nota"/>
                        </button>
                        <NewDiagnosis 
                            isOpen='hola'
                            closeDiagnosisModal='hols'
                        />
                    </div>
                    <div className="historial-data-container">
                        <div className="historial-data-container-up">
                            <div className="historial-id-data">
                                <p>Folio: 1</p>
                                <h1>Juan 
                                <br/>Hernandez
                                <br/>Melendez
                                </h1>
                                <p>diabetes</p>
                            </div>
                            <div className="historial-user-data">
                                <p>Telefono fijo: <span>722345676</span></p>
                                <p>Celular: <span>7223456787</span></p>
                                <p>Fecha de ingreso: <span>12/10/2009</span></p>
                                <p>Fecha de nacimiento: <span>12/09/09</span></p>
                                <p>Lugar de nacimiento: <span>Toluca</span></p>
                                <p>Estado civil: <span>solter@</span></p>
                            </div>
                        </div>
                        <div className="historial-data-container-down">
                        <Diagnosis 
                            fecha="12/10/2019" 
                            isOpen="si" 
                            openModal="no"
                            closeModal="si"    
                        />
                        <Diagnosis fecha="13/09/2018" />
                        <Diagnosis fecha="15/04/2018" />
                        <Diagnosis fecha="23/07/2016" />
                        <Diagnosis fecha="15/03/2012" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClientDetails