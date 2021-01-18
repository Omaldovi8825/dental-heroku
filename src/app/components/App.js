import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Search from '../pages/Search'
import Alta from '../pages/Alta'
import PacienteDetails from '../pages/PacienteDetails'
import PacienteEdit from '../pages/PacienteEdit'

const App = () => {
    return(
        <HashRouter>
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={Search} />            
            <Route exact path='/alta' component={Alta} />
            <Route exact path='/paciente/:pacienteId' component={PacienteDetails} />                        
            <Route exact path='/paciente/:pacienteId/edit' component={PacienteEdit} />                        
        </HashRouter>
    )
}

export default App