import React from 'react'

import NavBar from './navbar' 

export default props => {
  
  return(
    <header className="main-header">
   
    <a href="../../index2.html" className="logo">
      
      <span className="logo-mini"><i className='fa fa-shield'></i></span>
      
      <span className="logo-lg">
      <i className='fa fa-shield'></i>
      <b> Sys</b>Choque
      </span>
    </a>
    <NavBar />
    
  </header>
  )
}