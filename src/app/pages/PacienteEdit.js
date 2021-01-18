import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './styles/Alta.css'

import AltaForm from '../components/AltaForm'
import AltaCard from '../components/AltaCard'
import Logo from '../components/Logo'
import DeleteModal from '../components/modals/DeleteModal'

class PacienteEdit extends Component {
    constructor(){
        super()
        this.initialSatte = {
            nombre: '',
            apellido: '',
            apellido2: '',
            foto: '',
            folio: '',
            condicion: '',
            telefono: '',
            celular: '',
            email: '',
            fechaNacimiento: '',
            estadoCivil:'solter@'  
        }

        this.state = {
            form: this.initialSatte,
            deleteModal: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleCloseDeleteModal = this.handleCloseDeleteModal.bind(this)
    }

    handleChange(e){
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit(e){
        e.preventDefault()
        fetch(`api/pacientes/${this.props.match.params.pacienteId}`, {
            method: 'PUT',
            body: JSON.stringify(this.state.form),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => console.log(res.status))
            .then(() => this.props.history.push(`/paciente/${this.props.match.params.pacienteId}`))
            .catch(err => alert(err))
        
        // this.setState({
        //     form: this.initialSatte 
        // })

    }

    handleDelete(e) {
        fetch(`api/pacientes/${this.props.match.params.pacienteId}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(res => console.log(res.status))
            .then(() => this.props.history.push('/search'))
            .catch(err => alert(err.status))
    }

    handleCloseDeleteModal(e){
        this.setState({deleteModal: false})
    }

    componentDidMount(){
        fetch(`api/pacientes/${this.props.match.params.pacienteId}`)
            .then(data => data.json())
            .then(infoPaciente => this.setState({
                form: infoPaciente
            }))
            .catch(err => console.log(err.message))
    }

    render(){

        const {
            nombre,
            apellido,
            apellido2,
            foto,
            folio,
            condicion,
            telefono, 
            celulalr, 
            email,
            fechaNacimiento,
            estadoCivil    
        } = this.state.form

        return(
            <div className="container-alta">
                <div className="alta-left-side">
                    <div className="alta-header">
                        <Link to={`/paciente/${this.props.match.params.pacienteId}`}>
                            <i className="fas fa-arrow-alt-circle-left"></i>
                        </Link>
                        <h1>Editar</h1>
                        <button 
                            className="delete-user" 
                            type="button"
                            onClick={() => this.setState({deleteModal:true})}
                        >
                            <i className="fas fa-user-times"></i>
                        </button>
                        <DeleteModal 
                            isOpen={this.state.deleteModal}
                            closeDeleteModal={this.handleCloseDeleteModal}
                            deletePaciente={this.handleDelete}
                        />
                        <Logo className="container-alta-logo"/>
                    </div>
                    <AltaCard formValues={this.state.form}/>
                </div>
                <AltaForm 
                    handleChange={this.handleChange} 
                    formValues={this.state.form}
                    handleSubmit={this.handleSubmit}
                    buttonName='Guardar'
                />
            </div>
        )
    }
}

export default PacienteEdit