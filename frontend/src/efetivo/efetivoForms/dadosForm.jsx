import React, { Component } from "react";
import { Field } from "redux-form";
import LabelAndInput from "../../common/form/labelAndInput";
import LabelAndSelect from "../../common/form/labelAndSelect";
import { createTextMask } from "redux-form-input-masks";
import {
  cargoList,
  unidades,
  comportamentos,
  situacaoFuncionalList,
  sexos,
  tiposSanguineo,
  escolaridades,
  estadosCivis
} from "../../consts";

const myCustomMaskDefinitions = {
  9: {
    regExp: /[0-9]/
  },
  A: {
    regExp: /[A-Za-z0-9]/,
    transform: char => char.toUpperCase()
  }
};

const dataMask = createTextMask({
  pattern: "99/99/9999"
});
const matriculaMask = createTextMask({
  pattern: "999.999-9-A",
  maskDefinitions: myCustomMaskDefinitions
});
const numeroMask = createTextMask({
  pattern: "99999",
  maskDefinitions: myCustomMaskDefinitions
});

class DadosForm extends Component {
  

  render() {
    const { readOnly } = this.props;    
    const cargos = cargoList.map(cargo => cargo.cargo);
    const sexosList = sexos.map(sexo => sexo.nome);

    return (
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
          {...dataMask}
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
          name="naturalidade"
          component={LabelAndInput}
          readOnly={readOnly}
          label="Naturalidade:"
          cols="12 3"
        />
        <Field
          name="nacionalidade"
          component={LabelAndInput}
          readOnly={readOnly}
          label="Nacionalidade:"
          cols="12 3"
        />
        <Field
          name="dataIngresso"
          component={LabelAndInput}
          readOnly={readOnly}
          label="Data de Ingresso:"
          cols="12 3"
          {...dataMask}
        />
        <Field
          name="documentoIngresso"
          component={LabelAndInput}
          readOnly={readOnly}
          label="Documento Ingresso:"
          cols="12 3"
        />

        
      </div>
    );
  }
}

export default DadosForm
