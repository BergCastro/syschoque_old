import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './tiposOficioActions'
import sortBy from 'sort-by'
import ReactTable from "react-table"
import "react-table/react-table.css"
import matchSorter from 'match-sorter'

class TiposOficioList extends Component {

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

    

    render() {
        const list = this.props.list || []
        const listByNome = list.sort(sortBy('nome'))
        return (
            <div>
                <div>
                    <ReactTable
                        data={listByNome}
                        filterable
                        columns={[

                            {
                                Header: "Nome",
                                id: "nome",
                                accessor: d => d.nome,
                                filterMethod: (filter, rows) =>
                                    matchSorter(rows, filter.value, { keys: ["nome"] }),
                                filterAll: true
                               
                            },
                           
                            {
                                Header: "Ações",
                                id: 'acoes',
                                accessor: d => (
                                    <div>                                    
                                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(d)}>
                                        <i className='fa fa-pencil'></i>
                                    </button>
                                    <button className='btn btn-danger'  onClick={() => this.props.showDelete(d)} >
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

const mapStateToProps = state => ({list: state.tiposOficio.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TiposOficioList)