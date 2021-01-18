import React, {Component} from 'react'

import SearchHeader from '../components/SearchHeader'
import SearchCardList from '../components/SearchCardList'

import './styles/Search.css'

class Search extends Component {

    constructor(){
        super()
        this.state = {
            pacientes: [],
            filteredPacientes: []
        }
        this.handleSearch = this.handleSearch.bind(this)
    }

    componentDidMount(){
        fetch('/api/pacientes')
            .then(res => res.json())
            .then(res => this.setState({
                pacientes: res
            }))
            .then(res => this.setState({
                filteredPacientes: this.state.pacientes
            }))
            .catch(err => console.error(err.message))
    }

    handleSearch(e){
        const filteredPacientes = this.state.pacientes.filter((paciente) => {
            return `${paciente.folio} ${paciente.nombre.toLowerCase()}`.includes(e.target.value)
        })
        this.setState({
            filteredPacientes: filteredPacientes
        })
    }

    render(){
        return(
            <div>
                <SearchHeader handleSearch={this.handleSearch}/>
                <SearchCardList pacientes={this.state.filteredPacientes}/>
            </div>
        )
    }
}

export default Search