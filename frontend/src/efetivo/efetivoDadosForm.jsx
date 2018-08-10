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
import { cargoList,
         unidades, 
         comportamentos,
         situacaoFuncionalList,
         sexos,
         tiposSanguineo,
         escolaridades,
         estadosCivis
} from '../consts'

const myCustomMaskDefinitions = {
  9: {
    regExp: /[0-9]/,
  },
  A: {
    regExp: /[A-Za-z0-9]/,
    transform: char => char.toUpperCase(),
  },
};

const dataMask = createTextMask({
  pattern: "99/99/9999"
});
const matriculaMask = createTextMask({
  pattern: "999.999-9-A",
  maskDefinitions: myCustomMaskDefinitions,
});
const numeroMask = createTextMask({
  pattern: "99999",
  maskDefinitions: myCustomMaskDefinitions,
});


class EfetivoDadosForm extends Component {
  
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
    const cargos = cargoList.map(cargo => cargo.cargo);
    const sexosList = sexos.map(sexo => sexo.nome);
    

    return (
      <form onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="numero"
            component={LabelAndInput}
            readOnly={readOnly}
            label="Número PM"
            cols="12 2"
            {...numeroMask}
            
          />

          <Field
            name="matricula"
            component={LabelAndInput}
            readOnly={readOnly}
            label="Matrícula"
            cols="12 3"
            {...matriculaMask}
            
          />

          <Field
            name="cargo"
            component={LabelAndSelect}
            readOnly={readOnly}
            label="Posto/Grad."
            cols="12 3"
            placeholder="Selecione um tipo!"
            itens={cargos}
            onChange={this.updateTipo}
          />
          
          <Field
            name="nomeDeGuerra"
            component={LabelAndInput}
            readOnly={readOnly}
            label="Nome de Guerra:"
            cols="12 4"
            
          />
          <Field
            name="nome"
            component={LabelAndInput}
            readOnly={readOnly}
            label="Nome:"
            cols="12"
            
          />
          <Field
            name="unidadePolicial"
            component={LabelAndSelect}
            readOnly={readOnly}
            label="Unidade Policial:"
            cols="12 3"
            placeholder="Selecione um unidade!"
            itens={unidades}
            onChange={this.updateTipo}
          />

          <Field
            name="comportamento"
            component={LabelAndSelect}
            readOnly={readOnly}
            label="Comportamento:"
            cols="12 3"
            placeholder="Selecione um comportamento!"
            itens={comportamentos}
            onChange={this.updateTipo}
          />

          <Field
            name="situacaoFuncional"
            component={LabelAndSelect}
            readOnly={readOnly}
            label="Situação Funcional:"
            cols="12 3"
            placeholder="Selecione um comportamento!"
            itens={situacaoFuncionalList}
            onChange={this.updateTipo}
          />
           <Field
            name="dataNascimento"
            component={LabelAndInput}
            readOnly={readOnly}
            label="Data de Nascimento:"
            cols="12 3"
            
          />

          <Field
            name="sexo"
            component={LabelAndSelect}
            readOnly={readOnly}
            label="Sexo:"
            cols="12 3"
            placeholder="Selecione um sexo!"
            itens={sexosList}
            onChange={this.updateTipo}
          />
          <Field
            name="tipoSanguineo"
            component={LabelAndSelect}
            readOnly={readOnly}
            label="Tipo Sanguíneo:"
            cols="12 3"
            placeholder="Selecione um sexo!"
            itens={tiposSanguineo}
            onChange={this.updateTipo}
          />
          <Field
            name="escolaridade"
            component={LabelAndSelect}
            readOnly={readOnly}
            label="Escolaridade:"
            cols="12 3"
            placeholder="Selecione um opção!"
            itens={escolaridades}
            onChange={this.updateTipo}
          />
          <Field
            name="estadoCivil"
            component={LabelAndSelect}
            readOnly={readOnly}
            label="Estado Civil:"
            cols="12 3"
            placeholder="Selecione um opção!"
            itens={estadosCivis}
            onChange={this.updateTipo}
          />
          <Field
            name="nomePai"
            component={LabelAndInput}
            readOnly={readOnly}
            label="Nome do Pai:"
            cols="12 6"
            
          />
          <Field
            name="nomeMae"
            component={LabelAndInput}
            readOnly={readOnly}
            label="Nome da Mãe:"
            cols="12 6"
            
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

EfetivoDadosForm = reduxForm({ form: "efetivoForm", destroyOnUnmount: false })(
  EfetivoDadosForm
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
)(EfetivoDadosForm);
