import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";
import {
  init,
  getCount,
  updateTipoEfetivo,
  updateSugestoes,
  updateUser
} from "../efetivoActions";
import DadosForm from "./dadosForm";
import DocumentosForm from "./documentosForm";
import EnderecoContatoForm from "./enderecoContatoForm";
import TabHeaderIncluir from "./tabHeaderIncluir";
import TabsContentIncluir from "./tabsContentIncluir";
import TabContentIncluir from "./tabContentIncluir";
import FeriasForm from './feriasForm'

class EfetivoFormsIncluir extends Component {
  render() {
    const { handleSubmit, readOnly, fichaMilitar } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <TabHeaderIncluir />
        <TabsContentIncluir>
          <TabContentIncluir classAtive="in active" id="dados">
            <DadosForm readOnly={readOnly} />
          </TabContentIncluir>
          <TabContentIncluir id="enderecoContato">
            <EnderecoContatoForm readOnly={readOnly} />
          </TabContentIncluir>
          <TabContentIncluir id="documentos">
            <DocumentosForm readOnly={readOnly} />
          </TabContentIncluir>
          <TabContentIncluir id="ferias"><FeriasForm list={fichaMilitar.ferias}/></TabContentIncluir>
          <TabContentIncluir id="recompensas">Recompensas</TabContentIncluir>
          <TabContentIncluir id="cursos">Cursos</TabContentIncluir>
          <TabContentIncluir id="promocoes">Promoções</TabContentIncluir>
          <TabContentIncluir id="sancoes">Sanções</TabContentIncluir>
        </TabsContentIncluir>

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

EfetivoFormsIncluir = reduxForm({
  form: "efetivoForm",
  destroyOnUnmount: false
})(EfetivoFormsIncluir);

const selector = formValueSelector("efetivoForm");
const mapStateToProps = state => ({
  fichaMilitar: selector(state, "fichaMilitar"),
  

  user: state.auth.user
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      init,

      getCount,

      updateSugestoes,
      updateUser
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EfetivoFormsIncluir);
