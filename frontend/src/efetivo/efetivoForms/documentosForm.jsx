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
          name="tituloEleitoral"
          component={LabelAndInput}
          readOnly={readOnly}
          label="Título Eleitoral n°:"
          cols="12 3"
         
        />      
        <Field
          name="tituloEleitoralZona"
          component={LabelAndInput}
          readOnly={readOnly}
          label="Título Eleitoral Zona:"
          cols="12 3"
         
        />      
        <Field
          name="tituloEleitoralSecao"
          component={LabelAndInput}
          readOnly={readOnly}
          label="Título Eleitoral Seção:"
          cols="12 3"
         
        />      

        <Field
          name="reservista"
          component={LabelAndInput}
          readOnly={readOnly}
          label="Reservista n°:"
          cols="12 3"
         
        />        
        <Field
          name="reservistaOrgaoExp"
          component={LabelAndInput}
          readOnly={readOnly}
          label="Reservista Orgão:"
          cols="12 3"
         
        />  
        <Field
          name="reservistaSerie"
          component={LabelAndInput}
          readOnly={readOnly}
          label="Reservista Série:"
          cols="12 3"
         
        />             

        <Field
          name="reservistaTipo"
          component={LabelAndInput}
          readOnly={readOnly}
          label="Reservista Tipo:"
          cols="12 3"
         
        />       
        <Field
          name="pisPasepNis"
          component={LabelAndInput}
          readOnly={readOnly}
          label="PIS/PASEP/NIS:"
          cols="12 3"
         
        />       
        <Field
          name="cnh"
          component={LabelAndInput}
          readOnly={readOnly}
          label="CNH n°:"
          cols="12 3"
         
        />       
        <Field
          name="cnhCategoria"
          component={LabelAndInput}
          readOnly={readOnly}
          label="CNH Categoria:"
          cols="12 3"
         
        />   
        <Field
          name="cnhValidade"
          component={LabelAndInput}
          readOnly={readOnly}
          label="CNH Validade:"
          cols="12 3"
          {...dataMask}
         
        />           
      </div>
    );
  }
}

export default EfetivoDadosForm
