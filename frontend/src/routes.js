import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Oficios from './oficio/oficioTeste'
import Dashboard from './dashboard/dashboard'
//import TiposOficio from './tiposOficio/tiposOficio'

export default props => (
    <div className='content-wrapper'> 
        <Switch>
            <Route exact path='/' component={Dashboard} />           
            <Route path='/oficios' component={Oficios} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)