import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './usuarioActions'
import sortBy from 'sort-by'
import ReactTable from "react-table"
import "react-table/react-table.css"
import matchSorter from 'match-sorter'

class OficioList extends Component {

    componentWillMount() {
        this.props.getList()
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
        const listByNumero = list.sort(sortBy('-name'))
        return (
            <div>
                <div>
                    <ReactTable
                        data={listByNumero}
                        filterable
                        columns={[

                            {
                                Header: "Cargo",
                                id: "cargo",
                                accessor: d => d.cargo,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["cargo"] }),
                                filterAll: true,
                                maxWidth: 100
                                
                            },
                            {
                                Header: "Nome",
                                id: "name",
                                accessor: d => d.name,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["name"] }),
                                filterAll: true,
                                
                            },
                            {
                                Header: "Email",
                                id: "email",
                                accessor: d => d.email,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["email"] }),
                                filterAll: true,
                                

                            },

                                                     
                            {
                                Header: "Ações",
                                id: 'acoes',
                                accessor: d => (
                                    <div>
                                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(d)}>
                                        <i className='fa fa-pencil'></i>
                                    </button>
                                    <button className='btn btn-danger' onClick={() => this.props.showDelete(d)}>
                                        <i className='fa fa-trash-o'></i>
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
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({ list: state.usuario.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OficioList)