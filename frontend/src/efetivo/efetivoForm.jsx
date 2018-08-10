import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";
import {
  init,
  updateConteudo,
  getCount,
  updateTipoEfetivo,
  updateSugestoes,
  updateUser,
  updateStatusAtual
} from "./efetivoActions";
import LabelAndInput from "../common/form/labelAndInput";
import LabelAndLabel from "../common/form/labelAndLabel";
import LabelAndTextArea from "../common/form/labelAndTextArea";
import LabelAndRickTextArea from "../common/form/labelAndRickTextArea";
import LabelAndSelect from "../common/form/labelAndSelect";
import { createTextMask } from "redux-form-input-masks";



const dataMask = createTextMask({
  pattern: "99/99/9999"
});

class EfetivoForm extends Component {
  
  statusList = ["Aberto", "Em transito", "Arquivado", "Cancelado"];

  componentDidMount() {
   
  }

  updateTipo = event => {
    const { tabUpdate, tabDelete, updateSugestoes, tiposEfetivos } = this.props;
    const value = event.target.value;

    updateTipoEfetivo(value);
    if (!tabUpdate && !tabDelete) {
      const tipoEfetivo = tiposEfetivos.filter(tipo => tipo.nome === value);

      updateSugestoes(tipoEfetivo[0]);
    }
  };
  

  onChangeConteudo = value => {
    this.props.updateConteudo(value);
    
  };

  formatNumero(number) {
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


  render() {
    const {
      handleSubmit,
      readOnly,
      tiposEfetivos,
      status,
      statusAtual,
      numero,
      efetivo,
    } = this.props;
    const tiposNomes = []
    

    return (
      <form onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="numero"
            component={LabelAndLabel}
            readOnly={readOnly}
            label="Número"
            cols="12 3"
            valor={this.formatNumero(numero + "")}
          />

          
          <Field
            name="tipo"
            component={LabelAndSelect}
            readOnly={readOnly}
            label="Tipo"
            cols="12 6"
            placeholder="Selecione um tipo!"
            itens={tiposNomes}
            onChange={this.updateTipo}
          />
         
         

          <Field
            name="assunto"
            component={LabelAndInput}
            readOnly={readOnly}
            label="Assunto"
            cols="12"
            placeholder="Informe um assunto"
          />

          <Field
            name="referencia"
            component={LabelAndTextArea}
            readOnly={readOnly}
            label="Referência/Determinação"
            cols="12"
            placeholder="Informe de quem foi a determinação"
          />

          <Field
            name="anexo"
            component={LabelAndTextArea}
            readOnly={readOnly}
            label="Anexo"
            cols="12"
            placeholder="Informe uma descrição"
          />

          <Field
            name="destino"
            component={LabelAndTextArea}
            readOnly={readOnly}
            label="Destino"
            cols="12"
            placeholder="Informe o local da missão"
          />

          <LabelAndRickTextArea
            name="conteudo"
            readOnly={readOnly}
            label="Conteúdo"
            cols="12"
            onChange={this.onChangeConteudo}
            value={efetivo.conteudo}
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

EfetivoForm = reduxForm({ form: "efetivoForm", destroyOnUnmount: false })(
  EfetivoForm
);

const selector = formValueSelector("efetivoForm");
const mapStateToProps = state => ({
  numero: selector(state, "numero"),
  assunto: selector(state, "assunto"),
  conteudo: selector(state, "conteudo"),
  status: selector(state, "status"),
  statusAtual: selector(state, "statusAtual"),
  efetivo: selector(
    state,
    "numero",
    "assunto",
    "referencia",
    "conteudo",
    "data",
    "destino"
  ),

  
  
  user: state.auth.user
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      init,
      
      getCount,
      
      updateSugestoes,
      updateUser,
      
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EfetivoForm);
