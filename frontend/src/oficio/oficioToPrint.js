import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactToPrint from "react-to-print";
import { init } from "./oficioActions";
import "./oficioToPrint.css";
import logo from "../images/logo-sspds.png";
import IF from '../common/operator/if'

function formatNumero(number) {
  const length = number.length;
  switch (length) {
    case 1:
      return "000" + number;
    case 2:
      return "00" + number;
    case 3:
      return "0" + number;
    default:
      return number;
  }
}

class OficioContent extends React.Component {
  componentDidMount() {
    const divConteudo = document.querySelector(".conteudo");
    divConteudo.innerHTML = this.props.oficio.conteudo;
  }
  render() {
    const { oficio } = this.props;

    return (
      <div className="body-report">
        <img className="logo" src={logo} alt="logo sspds" />
        <p>
          <strong>
            Oficio Nº: {formatNumero(oficio.numero + "")} - Ajd. Sec.
            CBPChoque/CPE
          </strong>
          <IF test={oficio.assunto !== ''}>
          <br />
          <strong>Assunto: </strong>{oficio.assunto}
          </IF>
            
          

        </p>
        <br />
        <div className="conteudo" />
        <div className="footer">
          <strong>
            <i>Célula do Batalhão de Polícia de Choque</i>
          </strong>
          <br />
          <strong>
            <i>“Coragem, Abnegação e Sacrifício"</i>
          </strong>          
          <hr />          
          <i>
            Rua Antônio Pompeu, 260, CEP 60.040-000, Centro, Fortaleza-CEARÁ
          </i>
          <br />
          <i>
            FONES: 31014951 FAX 31014952 E-MAIL:
            bpchoqueoperacoesespeciais@gmail.com
          </i>
        </div>
      </div>
    );
  }
}

class OficioToPrint extends React.Component {
  render() {
    const { oficio } = this.props;
    return (
      <div className="box-body">
        <div className="btn-group">
          <ReactToPrint
            trigger={() => (
              <button className="btn btn-primary btn-sm">
                <i className="fa fa-print fa-lg" aria-hidden="true" /> Imprimir
              </button>
            )}
            content={() => this.componentRef}
          />
          <button className="btn btn-primary btn-sm" onClick={this.props.init}>
            <i className="fa fa-arrow-left fa-lg" aria-hidden="true" /> Voltar
          </button>
        </div>
        <OficioContent oficio={oficio} ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  oficio: state.oficio.oficioAtual
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      init
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OficioToPrint);
