import React from 'react'


export default props => (
    <li>
        <a href="../UI/general.html">
        <i className={`fa fa-${props.icon}`}></i> 
            {props.name}
        </a>
    </li>
)