import React, {Component} from 'react'
import './styles/Home.css'
import Menu from '../components/Menu'
import Logo from '../components/Logo'

const ChangingArea = ()=> {
    return(
        <div className="Changingarea flex-column">
            <img className="Changingarea__img" src="https://i.ibb.co/RHfqSh3/dental.jpg" alt="dentista" />
        </div>
    )
}

class Inicio extends Component {
    render(){
        return(
            <div className="blue-container">
                <Logo />
                <Menu />
                <ChangingArea />
            </div>
        )
    }
}

export default Inicio