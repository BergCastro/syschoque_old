import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { createNumberMask, createTextMask } from "redux-form-input-masks";
import { cargoList } from "../consts";
import { init } from "./usuarioActions";
import LabelAndInput from "../common/form/labelAndInput";
import LabelAndSelect from "../common/form/labelAndSelect";

const currencyMask = createNumberMask({
  prefix: "US$ ",
  suffix: " per item",
  decimalPlaces: 2,
  locale: "en-US"
});
const matriculaMask = createTextMask({
  pattern: "999.999-9-9"
});

const pinMask = createTextMask({
  pattern: "9999"
});

class UsuarioForm extends Component {

  
  componentDidMount() {
    //const { conteudo, user, updateUser } = this.props;
    // updateUser(user.cargo || "" + " " + user.nomeGuerra || "");
    //CKEDITOR.replace('editor1')
  }

  


  updateCargo = event => {
    const value = event.target.value;

    //updateStatusAtual(value, user.cargo + " " + user.nomeGuerra);
    console.log("cargoAtual: " + value);
  };

  onChange = value => {
    this.setState({ value });

    this.props.updateConteudo(value.toString("html"));
  };

  render() {
    const { handleSubmit, readOnly } = this.props;
    const list = cargoList.map(cargo => cargo.cargo);

    return (
      <form onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={LabelAndInput}
            readOnly={readOnly}
            label="Nome do Usuario"
            cols="12"
            placeholder="Informe o nome completo"
          />

          <Field
            name="matricula"
            component={LabelAndInput}
            readOnly={readOnly}
            label="Matrícula"
            cols="12 4"
            placeholder="Informe a matrícula"
            {...matriculaMask}
          />

          <Field
            name="cargo"
            component={LabelAndSelect}
            readOnly={readOnly}
            label="Cargos"
            cols="12 4"
            placeholder="Selecione um tipo!"
            itens={list}
            onChange={this.updateCargo}
          />

          <Field
            name="nomeGuerra"
            component={LabelAndInput}
            readOnly={readOnly}
            label="Nome de Guerra"
            cols="12 4"
            placeholder="Informe o nome de guerra"
          />

          <Field
            name="email"
            component={LabelAndInput}
            readOnly={readOnly}
            label="Email"
            cols="12 6"
            placeholder="Informe o email"
          />

          <Field
            name="password"
            component={LabelAndInput}
            readOnly={readOnly}
            label="Senha"
            type="password"
            cols="12 3"
            onChange={this.onChangePassword}
            placeholder="Informe a senha"
          />

          <Field
            name="pin"
            component={LabelAndInput}
            readOnly={readOnly}
            label="PIN"
            type="password"
            cols="12 3"
            placeholder="Informe o PIN de 4 dígitos"
            
          />

          <Field
            name="perfilAcesso"
            component={LabelAndInput}
            readOnly={readOnly}
            label="Perfis de Acesso - ''adm p1 p3 combtl desp adjunto''"
            cols="12"
            placeholder="Informe os perfis serparado por espaços"
          />
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.init}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}

UsuarioForm = reduxForm({ form: "usuarioForm", destroyOnUnmount: false })(
  UsuarioForm
);

const selector = formValueSelector("usuarioForm");
const mapStateToProps = state => ({
  
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      init,
     
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsuarioForm);
