import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import HistorialHeader from '../components/HistorialHeader'
import NewDiagnosis from '../components/NewDiagnosis'
import DiagnosisList from '../components/DiagnosisList'
import EditDiagnosisModal from '../components/modals/EditDiagnosisModal'

import {getPacienteData, getPacienteDiagnosis, deleteDiagnosis, postNewDiagnosis, updateDiagnosis} from '../apiCalls'

import './styles/PacienteDetails.css'

class ClientDetails extends Component {

    constructor(props){
        super(props)
        this.state = {
            paciente: {},
            edad: '',
            ingreso: '',
            newDiagnosisIsOpened: false,
            diagnosticos: [],
            newDiagnosisForm: {
                paciente: this.props.match.params.pacienteId,
                diagnostico: '',
                tratamiento: '',
                piezaDentaria: '',
                cuota: '',
                aCuenta: ''
            },
            editModalIsOpen: false,
            diagosticoToEdit: {},
            diagnosisModifications: {} 
        }

        this.openDiagnosisModal = this.openDiagnosisModal.bind(this)
        this.closeDiagnosisModal = this.closeDiagnosisModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.openEditDiagnosisModal = this.openEditDiagnosisModal.bind(this)
        this.closeEditModal = this.closeEditModal.bind(this)
        this.handleDeleteDiagnosis = this.handleDeleteDiagnosis.bind(this)
        this.handleUpdateDiagnosis = this.handleUpdateDiagnosis.bind(this)
        this.handleEditDiagnosisChange = this.handleEditDiagnosisChange.bind(this)
    }
   
    openDiagnosisModal(e) {
        this.setState({
            newDiagnosisIsOpened: true       
        })
    }

    closeDiagnosisModal(e) {
        this.setState({
            newDiagnosisIsOpened: false
        })
    }

    openEditDiagnosisModal(key){
        const filteredDiagnostico = this.state.diagnosticos.filter(diagnostico => {
            return diagnostico._id === key 
        })
        this.setState({
            editModalIsOpen: true,
            diagosticoToEdit: filteredDiagnostico[0]
        })
    }

    closeEditModal(e){
        this.setState({editModalIsOpen: false})
    }

    handleChange(e){
        let {name, value} = e.target
        this.setState({
            newDiagnosisForm: {
                ...this.state.newDiagnosisForm,
                [name]:value
            }
        })
    }

    handleEditDiagnosisChange(e){
        let {name, value} = e.target
        this.setState({
            diagnosisModifications: {
                ...this.state.diagnosisModifications,
                [name]: value
            }
        })
    }

    handleSubmit(e){
        postNewDiagnosis('api/diagnosticos', this.state.newDiagnosisForm)
            .then(res => {
                console.log(res.status)
                getPacienteDiagnosis(`api/diagnosticos/?paciente=${this.props.match.params.pacienteId}`)
                .then(diagnosticos => {
                    this.setState({
                        diagnosticos: diagnosticos,
                        newDiagnosisIsOpened: false,
                        newDiagnosisForm: {
                            paciente: this.props.match.params.pacienteId,
                            diagnostico: '',
                            tratamiento: '',
                            piezaDentaria: '',
                            cuota: '',
                            aCuenta: ''
                        }
                    })
                })
                .catch(err => console.log(err.message))
            })
    }

    handleDeleteDiagnosis(id){
        deleteDiagnosis(`api/diagnosticos/${id}`)
        .then(res => {
            console.log(res.status)
            getPacienteDiagnosis(`api/diagnosticos/?paciente=${this.props.match.params.pacienteId}`)
            .then(diagnosticos => {
                this.setState({
                    diagnosticos: diagnosticos,
                    editModalIsOpen: false
                })
            })
            .catch(err => console.log(err.message))
        })
        .catch(err => console.log(err))
    }

    handleUpdateDiagnosis(id){
        updateDiagnosis(`api/diagnosticos/${id}`, this.state.diagnosisModifications)
        .then(res => {
            console.log(res.status)
            getPacienteDiagnosis(`api/diagnosticos/?paciente=${this.props.match.params.pacienteId}`)
            .then(diagnosticos => {
                this.setState({
                    diagnosticos: diagnosticos,
                    editModalIsOpen: false,
                    diagnosisModifications: {}
                })
            })
            .catch(err => console.log(err.message))
        })
        .catch(err => console.log(err))
    }

    componentDidMount(){
        getPacienteData(`api/pacientes/${this.props.match.params.pacienteId}`)
            .then(paciente => {
                let fechaExtraida = paciente.fechaNacimiento
                const edad =  Math.floor((((((new Date() - new Date(fechaExtraida))/1000)/60)/60)/24)/365)
                const ingreso = paciente.fechaAlta.substr(0,10)

                this.setState({
                    paciente: paciente,
                    edad: edad,
                    ingreso: ingreso
                })
            })
            .catch(err => console.log('error al conectarse'))

        getPacienteDiagnosis(`api/diagnosticos/?paciente=${this.props.match.params.pacienteId}`)
            .then(diagnosticos => {
                this.setState({
                    diagnosticos: diagnosticos
                })
            })
            .catch(err => console.log(err.message))
    }

    render(){

        const {
            nombre, 
            apellido, 
            apellido2, 
            folio, 
            foto, 
            telefono, 
            celular, 
            condicion, 
            email, 
            estadoCivil, 
            fechaAlta, 
            fechaNacimiento} = this.state.paciente

        return(
            <div>
                <HistorialHeader />
                <div className="historial-area">
                    <div className="historial-area-up">
                        <div className="historial-area-buttons">
                            <Link to={`${this.props.match.params.pacienteId}/edit`}>
                                <img src="https://i.ibb.co/mTZV5pL/denti-diagnostico.png" alt="nuevo diagnostico"/>
                            </Link>
                            <button 
                                type="button"
                                onClick={this.openDiagnosisModal}>
                                <img src="https://i.ibb.co/RQpnSjK/denti-agenda.png" alt="nueva nota"/>
                            </button>
                            <NewDiagnosis 
                                isOpen={this.state.newDiagnosisIsOpened}
                                closeDiagnosisModal={this.closeDiagnosisModal}
                                saveNewDiagnosis={this.handleSubmit}
                                onInputChange={this.handleChange}
                                newDiagnosisForm={this.state.newDiagnosisForm}
                            />
                        </div>
                        <div className="historial-data-container">
                            <div className="historial-data-container-up">
                                <div className="historial-id-data">
                                    <p>Folio: {folio}</p>
                                    <img src={foto} alt="foto paciente"/>
                                    <h1>{nombre} 
                                    <br/>{apellido}
                                    <br/>{apellido2}
                                    </h1>
                                    <p>({condicion})</p>
                                </div>
                                <div className="historial-user-data">
                                    <p>Telefono fijo: <span>{telefono}</span></p>
                                    <p>Celular: <span>{celular}</span></p>
                                    <p>Fecha de ingreso: <span>{this.state.ingreso}</span></p>
                                    <p>Fecha de nacimiento: <span>{fechaNacimiento}</span></p>
                                    <p>Edad: <span>{this.state.edad}</span></p>
                                    <p>Estado civil: <span>{estadoCivil}</span></p>
                                    <p>E-mail: <span>{email}</span></p>                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="historial-data-container-down">
                        <DiagnosisList 
                            openDiagnosisEdit={this.openEditDiagnosisModal}
                            diagnosticos={this.state.diagnosticos}
                        />
                    </div>
                </div>
                <EditDiagnosisModal 
                    isOpen={this.state.editModalIsOpen}
                    closeModal={this.closeEditModal}
                    toEdit={this.state.diagosticoToEdit}
                    deleteDiagnosis={this.handleDeleteDiagnosis}
                    updateDiagnosis={this.handleUpdateDiagnosis}
                    handleChange={this.handleEditDiagnosisChange}
                />
            </div>
        )
    }
}

export default ClientDetails