import React from 'react'

export default props => (

    <li className="treeview">
          <a href="">
            <i className={`fa fa-${props.icon}`}></i>
            <span>{props.name}</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul className="treeview-menu" style={{display: 'none'}}>
            {props.children}
            
          </ul>
    </li>
)