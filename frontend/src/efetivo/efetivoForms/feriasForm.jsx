import React, { Component, Fragment } from "react";
import { Field } from "redux-form";
import LabelAndInput from "../../common/form/labelAndInput";
import LabelAndSelect from "../../common/form/labelAndSelect";
import { createTextMask } from "redux-form-input-masks";
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from "match-sorter";
import Modal from "react-responsive-modal";
import InputMask from "react-input-mask";

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

const tipos = [
  'CONCESSÃO',
  'GOZO',
  'ADIAMENTO'
]

class FeriasForm extends Component {
  state = {
    open: false,
    data: "",
    documento: "",
    inicio: "",
    fim: "",
    obs: ""
  };

  styleModal = {
    minWidth: "400px",
    minHeight: "100px"
  };

  onOpenModal = e => {
    e.preventDefault();
    this.setState({ open: true });
  };

  onCloseModal = e => {
    e.preventDefault();
    this.setState({ open: false });
  };

  onChangeData = e => {
    const value = e.target.value;
    console.log("Data: " + value);
    this.setState({
      data: value
    });
  };
  onChangeDocumento = e => {
    const value = e.target.value;
    console.log("Documento: " + value);
    this.setState({
      documento: value
    });
  };
  onChangeInicio = e => {
    const value = e.target.value;
    this.setState({
      inicio: value
    });
  };
  onChangeFim = e => {
    const value = e.target.value;
    this.setState({
      fim: value
    });
  };
  onChangeObs = e => {
    const value = e.target.value;
    this.setState({
      obs: value
    });
  };

  render() {
    const { readOnly, list = [] } = this.props;
    const { open } = this.state;

    return (
      <div className="box-body">
        <ReactTable
          data={list}
          filterable
          columns={[
            {
              Header: "Data",
              id: "dataPublicacao",
              accessor: d => d.dataPublicacao,
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["dataPublicacao"] }),
              filterAll: true,
              maxWidth: 80
            },
            {
              Header: "Documento",
              id: "documento",
              accessor: d => d.documento,
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["documento"] }),
              filterAll: true,
              maxWidth: 130
            },

            {
              Header: "Tipo",
              id: "tipo",
              accessor: d => d.tipo,
              filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["tipo"] }),
              filterAll: true,
              maxWidth: 130
            },
            {
              Header: "Início",
              id: "inicio",
              accessor: d => d.inicio,
              filterAll: true
            },
            {
              Header: "Fim",
              id: "fim",
              accessor: s => s.fim,

              filterAll: true,
              maxWidth: 130
            },
            {
              Header: "Ações",
              id: "acoes",
              accessor: d => (
                <Fragment>
                  <button
                    className="btn btn-warning"
                    onClick={() => this.props.showUpdate(d)}
                  >
                    <i className="fa fa-pencil" />
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.props.showDelete(d)}
                  >
                    <i className="fa fa-trash-o" />
                  </button>
                </Fragment>
              ),
              filterable: false,
              maxWidth: 130
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
          previousText={"Anterior"}
          nextText={"Próximo"}
          loadingText={"Carregando"}
          noDataText={"Nenhum resultado encontrado"}
          pageText={"Página"}
          ofText={"de"}
          rowsText={"linhas"}
        />
        <button className="btn btn-success" onClick={this.onOpenModal}>
          <i className="fa fa-plus" /> Adicionar
        </button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="modal-header">
            <h4 className="modal-title">Adicionar</h4>
          </div>
          <div className="modal-body" style={this.styleModal}>
            <div className="row">
              <div className="col-xs-6">
                <label>Data da Publicação:</label>
                <InputMask
                  {...this.props}
                  mask="99/99/9999"
                  maskChar=" "
                  className="form-control"
                  onChange={this.onChangeData}
                />
              </div>

              <div className="col-xs-6">
                <label>Documento</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={this.onChangeDocumento}
                />
              </div>
            </div>
            <div className="row">
            <div className="form-group">
              <label />
              <input
                type="password"
                className="form-control"
                onChange={this.onChangeDocumento}
              />
            </div>
            <LabelAndSelect label='Tipo' name='tipo' cols='12 6' itens={tipos}/>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
          </div>
        </Modal>
      </div>
     
    );
  }
}

export default FeriasForm;
