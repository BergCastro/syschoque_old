import React from 'react'
import user from 'admin-lte/dist/img/user2-160x160.jpg'
export default props => (

    <nav className="navbar navbar-static-top">
      
      <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </a>

      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
                   
          <li className="dropdown user user-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <img src={user} className="user-image" alt="User Image"/>
              <span className="hidden-xs">Sgt Castro</span>
            </a>
            <ul className="dropdown-menu">
              
              <li className="user-header">
                <img src={user} className="img-circle" alt="User Image"/>

                <p>
                  Lindemberg Nunes de Castro - admin
                  <small>fireberg2500@hotmail.com</small>
                </p>
              </li>
              
              
              
              <li className="user-footer">
               
                <div className="pull-right">
                  <a href="#" className="btn btn-default btn-flat">Sair</a>
                </div>
              </li>
            </ul>
          </li>
          
         
        </ul>
      </div>
    </nav>
)