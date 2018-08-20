import React, { Component, Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList, showUpdate, showDelete, showPrint } from "./efetivoActions";
import sortBy from "sort-by";
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from "match-sorter";

class EfetivoList extends Component {
  componentWillMount() {
    this.props.getList();
  }

  formatDate(date) {
    const data = new Date(date);
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    };

    return data.toLocaleDateString("pt-BR", options);
  }
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
  styleFontRed = {
    color: "red"
    //fontWeight: 'bold'
  };

  pivotDefaults = {
    previousText: "Previous",
    nextText: "Próximo",
    loadingText: "Loading...",
    noDataText: "No rows found",
    pageText: "Page",
    ofText: "de",
    rowsText: "rows"
  };

  render() {
    const list = this.props.list || [];
    const listByNumero = list.sort(sortBy("-numero"));
    return (
      <ReactTable
        data={listByNumero}
        filterable
        columns={[
          {
            Header: "Matrícula",
            id: "matricula",
            accessor: d => d.matricula,
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ["matricula"] }),
            filterAll: true,
            maxWidth: 80
          },
          {
            Header: "Número",
            id: "numero",
            accessor: d => d.numero,
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ["numero"] }),
            filterAll: true,
            maxWidth: 130
          },

          {
            Header: "Posto/Grad.",
            id: "cargo",
            accessor: d => d.cargo,
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ["cargo"] }),
            filterAll: true,
            maxWidth: 130
          },
          {
            Header: "Nome",
            id: "nome",
            accessor: d => d.nome,
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ["nome"] }),
            filterAll: true
          },
          {
            Header: "Unidade Policial",
            id: "unidadePolicial",
            accessor: s => s.unidadePolicial,
            filterMethod: (filter, rows) =>
              matchSorter(rows, filter.value, { keys: ["unidadePolicial"] }),
            filterAll: true,
            maxWidth: 130
          },
          {
            Header: "Ações",
            id: "acoes",
            accessor: d => (
              <Fragment>
                <button
                  className="btn btn-success"
                  onClick={() => this.props.showPrint(d)}
                >
                  <i className="fa fa-print" />
                </button>
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
    );
  }
}

const mapStateToProps = state => ({ list: state.efetivo.list });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getList, showUpdate, showDelete, showPrint }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EfetivoList);
