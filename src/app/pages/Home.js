import React from 'react'
import './styles/Home.css'
import Menu from '../components/Menu'

const ChangingArea = ()=> {
    return(
        <div className="Changingarea flex-column">
            <img className="Changingarea__img" src="https://i.ibb.co/RHfqSh3/dental.jpg" alt="dentista" />
        </div>
    )
}

const Inicio = () => {

    return(
        <div className="blue-container">
            <img className="Inicio_logo" src="https://i.ibb.co/HKZpPN7/denti-home.png" />
            <Menu />
            <ChangingArea />
        </div>
    )
}


export default Inicio