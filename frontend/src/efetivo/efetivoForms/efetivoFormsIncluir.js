import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";
import {
  init,
  getCount,
  updateTipoEfetivo,
  updateSugestoes,
  updateUser,
 
} from "../efetivoActions";
import DadosForm from './dadosForm'
import DocumentosForm from './documentosForm'
import TabHeaderIncluir from './tabHeaderIncluir'
import TabsContentIncluir from './tabsContentIncluir'
import TabContentIncluir from './tabContentIncluir'




class EfetivoFormsIncluir extends Component {
  
 


  render() {
   const {handleSubmit} = this.props

    return (
      <form onSubmit={handleSubmit}>
      <TabHeaderIncluir />
                  <TabsContentIncluir>
                    <TabContentIncluir classAtive="in active" id="dados">
                      <DadosForm />
                    </TabContentIncluir>
                    <TabContentIncluir id="documentos">
                      <DocumentosForm />
                    </TabContentIncluir>
                    <TabContentIncluir id="ferias">
                    Ferias
                    </TabContentIncluir> 
                    <TabContentIncluir id="recompensas">
                    Recompensas
                    </TabContentIncluir>   
                    <TabContentIncluir id="cursos">
                    Cursos
                    </TabContentIncluir>
                    <TabContentIncluir id="promocoes">
                    Promoções
                    </TabContentIncluir>  
                    <TabContentIncluir id="sancoes">
                     Sanções
                    </TabContentIncluir>         
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

EfetivoFormsIncluir = reduxForm({ form: "efetivoForm", destroyOnUnmount: false })(
  EfetivoFormsIncluir
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
)(EfetivoFormsIncluir);
