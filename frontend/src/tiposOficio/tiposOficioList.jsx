import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './tiposOficioActions'

class TiposOficioList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    formatDate(date){
        const data = new Date(date)
       
        return data.toLocaleDateString()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(tiposOficio => (
            <tr key={tiposOficio._id}>
                <td>{tiposOficio.nome}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(tiposOficio)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(tiposOficio)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.tiposOficio.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TiposOficioList)