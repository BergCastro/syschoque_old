import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete, showPrint } from './oficioActions'
import sortBy from 'sort-by'
import ReactTable from "react-table"
import "react-table/react-table.css"
import matchSorter from 'match-sorter'


class OficioList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    formatDate(date) {
        const data = new Date(date)
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }

        return data.toLocaleDateString('pt-BR', options)
    }
    formatNumero(number) {
        const length = number.length
        switch (length) {
            case 1:
                return '000' + number
            case 2:
                return '00' + number
            case 3:
                return '0' + number
            default:
                return number

        }

    }
    styleFontRed = {
        color: 'red',
        //fontWeight: 'bold'
    }

    pivotDefaults = {
        previousText: 'Previous',
        nextText: 'Próximo',
        loadingText: 'Loading...',
        noDataText: 'No rows found',
        pageText: 'Page',
        ofText: 'de',
        rowsText: 'rows',
    }


    render() {
        const list = this.props.list || []
        const listByNumero = list.sort(sortBy('-numero'))
        return (
           
                    <ReactTable
                        data={listByNumero}
                        filterable
                        columns={[

                            {
                                Header: "Número",
                                id: "numero",
                                accessor: d => this.formatNumero(d.numero + ''),
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["numero"] }),
                                filterAll: true,
                                maxWidth: 80
                            },
                            {
                                Header: "Data Ofício",
                                id: "data",
                                accessor: d => this.formatDate(d.data),
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["data"] }),
                                filterAll: true,
                                maxWidth: 130

                            },

                            {
                                Header: "Tipo",
                                id: "tipo",
                                accessor: d => d.tipo,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["tipo"] }),
                                filterAll: true
                            },
                            {
                                Header: "Destino",
                                id: "destino",
                                accessor: d => d.destino,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["destino"] }),
                                filterAll: true
                            },
                            {
                                Header: "Status Atual",
                                id: 'statusAtual',
                                accessor: s => s.statusAtual,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["statusAtual"] }),
                                filterAll: true,
                                maxWidth: 130
                            },
                            {
                                Header: "Ações",
                                id: 'acoes',
                                accessor: d => (
                                    <div>
                                    <button className='btn btn-success'  onClick={() => this.props.showPrint(d)} >
                                        <i className='fa fa-print'></i>
                                    </button>
                                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(d)}>
                                        <i className='fa fa-pencil'></i>
                                    </button>
                                    </div>
                                ),
                                filterable: false,
                                maxWidth: 100

                            }
                            
                            

                        ]}
                        
                        
                        defaultPageSize={10}
                        className="-striped -highlight"
                        previousText={'Anterior'}
                        nextText={'Próximo'}
                        loadingText={'Carregando'}
                        noDataText={'Nenhum resultado encontrado'}
                        pageText={'Página'}
                        ofText={'de'}
                        rowsText={'linhas'}
                    />
            

        )
    }
}

const mapStateToProps = state => ({ list: state.oficio.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete, showPrint }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OficioList)