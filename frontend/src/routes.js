import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Oficios from './oficio/oficio'
import Dashboard from './dashboard/dashboard'
//import TiposOficio from './tiposOficio/tiposOficio'
import Auth from './auth/auth'

export default props => (
    <div className='content-wrapper' style={{height: '100%'}}> 
        <Switch>
            <Route exact path='/' component={Dashboard} />           
            <Route path='/oficios' component={Oficios} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)