import React from 'react'
import { Link } from 'react-router-dom'

export default props => (

    <section className="content-header">
      <h1>
        {props.title}
        <small>{props.small}</small>
      </h1>
      <ol className="breadcrumb">
        <li><Link to="/"><i className="fa fa-dashboard"></i> Dashboard</Link></li>
        
        <li className="active">{props.title}</li>
      </ol>
    </section>
)