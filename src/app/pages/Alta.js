import React, { Component } from 'react'

import './styles/Alta.css'

import AltaForm from '../components/AltaForm'
import AltaCard from '../components/AltaCard'
import Logo from '../components/Logo'

class Alta extends Component {
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
            fechaNacimiento:'',
            estadoCivil:'solter@'  
        }

        this.state = {
            form: this.initialSatte
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        fetch('/api/pacientes', {
            method: 'POST',
            body: JSON.stringify(this.state.form),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => alert(res.status))
            .catch(err => console.error(err.message))
        
        this.setState({
            form: this.initialSatte 
        })
        
    }

    render(){
        return(
            <div className="container-alta">
                <div className="alta-left-side">
                    <div className="alta-header">
                        <h1>Alta</h1>
                        <Logo className="container-alta-logo"/>
                    </div>
                    <AltaCard formValues={this.state.form}/>
                </div>
                <AltaForm 
                    handleChange={this.handleChange} 
                    formValues={this.state.form}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default Alta