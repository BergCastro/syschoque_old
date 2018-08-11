import React, { Component } from "react";

export default props => {
  return (
    <ul className="nav nav-tabs" role="tablist">
      <li role="presentation" className="active">
        <a href="#dados" aria-controls="home" role="tab" data-toggle="tab">
          <i className="fa fa-pencil" /> Dados
        </a>
      </li>
      <li role="presentation">
        <a href="#enderecoContato" aria-controls="home" role="tab" data-toggle="tab">
          <i className="fa fa-pencil" /> Endereço/Contato
        </a>
      </li>
      <li role="presentation">
        <a
          href="#documentos"
          aria-controls="profile"
          role="tab"
          data-toggle="tab"
        >
          <i className="fa fa-pencil" /> Documentos
        </a>
      </li>
      <li role="presentation">
        <a href="#ferias" aria-controls="messages" role="tab" data-toggle="tab">
          <i className="fa fa-pencil" /> Férias
        </a>
      </li>
      <li role="presentation">
        <a
          href="#recompensas"
          aria-controls="settings"
          role="tab"
          data-toggle="tab"
        >
          <i className="fa fa-pencil" /> Recompensas
        </a>
      </li>
      <li role="presentation">
        <a href="#cursos" aria-controls="settings" role="tab" data-toggle="tab">
          <i className="fa fa-pencil" /> Cursos
        </a>
      </li>
      <li role="presentation">
        <a
          href="#promocoes"
          aria-controls="settings"
          role="tab"
          data-toggle="tab"
        >
          <i className="fa fa-pencil" /> Promoções
        </a>
      </li>
      <li role="presentation">
        <a
          href="#sancoes"
          aria-controls="settings"
          role="tab"
          data-toggle="tab"
        >
          <i className="fa fa-pencil" /> Sanções
        </a>
      </li>
    </ul>
  );
};
