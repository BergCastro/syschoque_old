import React, { Component } from "react";
import { Field } from "redux-form";
import LabelAndInput from "../../common/form/labelAndInput";
import LabelAndSelect from "../../common/form/labelAndSelect";
import { createTextMask } from "redux-form-input-masks";
import {
  
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
const cepMask = createTextMask({
  pattern: "99999-999",
  maskDefinitions: myCustomMaskDefinitions
});
const numeroMask = createTextMask({
  pattern: "99999",
  maskDefinitions: myCustomMaskDefinitions
});

class EnderecoContatoForm extends Component {
  

  render() {
    const { readOnly } = this.props;    
    

    return (
      <div className="box-body">
        <Field
          name="endereco.logradouro"
          component={LabelAndInput}
          readOnly={readOnly}
          label="Logradouro:"
          cols="12 6"
          
        />
        <Field
          name="endereco.numero"
          component={LabelAndInput}
          readOnly={readOnly}
          label="Número:"
          cols="12 3"
         
        />
        <Field
          name="endereco.complemento"
          component={LabelAndInput}
          readOnly={readOnly}
          label="Complemento:"
          cols="12 3"
         
        />  
        <Field
          name="endereco.bairro"
          component={LabelAndInput}
          readOnly={readOnly}
          label="Bairro:"
          cols="12 4"
          
        />
        <Field
          name="endereco.cidade"
          component={LabelAndInput}
          readOnly={readOnly}
          label="Cidade:"
          cols="12 4"
         
        />
        <Field
          name="endereco.estado"
          component={LabelAndInput}
          readOnly={readOnly}
          label="UF:"
          cols="12 2"
         
        />
        <Field
          name="endereco.cep"
          component={LabelAndInput}
          readOnly={readOnly}
          label="CEP:"
          cols="12 2"
          {...cepMask}
         
        />                

        
      </div>
    );
  }
}

export default EnderecoContatoForm
