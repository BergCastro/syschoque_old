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
const cpfMask = createTextMask({
  pattern: "999.999.999-99",
  maskDefinitions: myCustomMaskDefinitions
});
const numeroMask = createTextMask({
  pattern: "99999",
  maskDefinitions: myCustomMaskDefinitions
});

class EfetivoDadosForm extends Component {
  

  render() {
    const { readOnly } = this.props;    
    

    return (
      <div className="box-body">
        <Field
          name="cpf"
          component={LabelAndInput}
          readOnly={readOnly}
          label="CPF:"
          cols="12 3"
          {...cpfMask}
        />

        <Field
          name="reservista"
          component={LabelAndInput}
          readOnly={readOnly}
          label="Reservista:"
          cols="12 3"
         
        />        
      </div>
    );
  }
}

export default EfetivoDadosForm
