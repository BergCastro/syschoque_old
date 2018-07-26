import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { docDefinition } from './oficioPdfConfig'
import pdfMake from 'pdfmake/build/pdfmake.js'
import pdfFonts from "pdfmake/build/vfs_fonts"
import ckeditor from 'admin-lte/bower_components/ckeditor/ckeditor'



import {
    init,
    updateConteudo,
    getCount,
    updateTipoOficio,
    updateSugestoes,
    updateUser,
    updateStatusAtual,

} from './oficioActions'
//import {updateControle} from '../controleDocumento/controleDocumentoActions'
import LabelAndInput from '../common/form/labelAndInput'
import LabelAndLabel from '../common/form/labelAndLabel'
import LabelAndInputHidden from '../common/form/labelAndInputHidden'
import LabelAndTextArea from '../common/form/labelAndTextArea'
import LabelAndRTE from '../common/form/labelAndRTE'

import LabelAndSelect from '../common/form/labelAndSelect'

import ListStatus from './oficioStatusList'


class OficioForm extends Component {



    prioridades = [
        'OBRIGATÓRIA',
        'PARCIAL',
        'DE ACORDO COM A DEMANDA'
    ]

    statusList = [

        'Aberto',
        'Em transito',
        'Arquivado',
        'Cancelado'

    ]







    componentDidMount() {

        const { conteudo, user, updateUser } = this.props

        updateUser(user.cargo + " " + user.nomeGuerra)

        //CKEDITOR.replace('editor1')







    }



    updateTipo = (event) => {
        const { tabUpdate, tabDelete, updateSugestoes, tiposOficios } = this.props
        const value = event.target.value

        updateTipoOficio(value)
        if (!tabUpdate && !tabDelete) {
            const tipoOficio = tiposOficios.filter((tipo) => tipo.nome === value)

            updateSugestoes(tipoOficio[0])

        }



    }
    updateStatus = (event) => {
        const { user, updateStatusAtual } = this.props
        const value = event.target.value

        updateStatusAtual(value, user.cargo + " " + user.nomeGuerra)
    }



    onChange = (value) => {
        this.setState({ value })

        this.props.updateConteudo(value.toString('html'))

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


    handlePdfDownload = () => {
        pdfMake.vfs = pdfFonts.pdfMake.vfs
        pdfMake.createPdf(docDefinition()).download('ope.pdf')

    }

    handlePdfPrint = () => {
        pdfMake.vfs = pdfFonts.pdfMake.vfs
        pdfMake.createPdf(docDefinition()).print()
    }

    handlePdfOpen = () => {
        const { oficio } = this.props
        pdfMake.vfs = pdfFonts.pdfMake.vfs
        pdfMake.createPdf(docDefinition(oficio)).open();
    }



    render() {
        const { handleSubmit, readOnly, tiposOficios, status, user, statusAtual, numero, oficio } = this.props
        const tiposNomes = tiposOficios.map((tipo) => tipo.nome)
        const statusOficio = status || []
        const statusUltilizados = statusOficio.map((stat) => stat.status) || []
        console.log('oficio: ' + oficio)
        const statusDisponiveis = this.statusList.filter(function (item) {
            return !statusUltilizados.includes(item);
        })
        statusDisponiveis.push(statusAtual)

        const statusCombo = statusDisponiveis || []


        return (

            <form onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='numero' component={LabelAndLabel} readOnly={readOnly}
                        label='Número' cols='12 2' valor={this.formatNumero(numero + "")} />

                    <Field name='dataMissao' component={LabelAndInput} readOnly={readOnly}
                        label='Data da Missão' cols='12 3' placeholder='Informe a data da missão' />

                    <Field name='assunto' component={LabelAndSelect} readOnly={readOnly}
                        label='Tipo' cols='12 4' placeholder='Selecione um tipo!' itens={tiposNomes} onChange={this.updateTipo} />

                    <Field name='statusAtual' component={LabelAndSelect} readOnly={readOnly}
                        label='Status Atual' cols='12 3' placeholder='Selecione um tipo!' itens={statusCombo} onChange={this.updateStatus} disabled={statusOficio.length === 0 ? true : false} />


                    <Field name='referencia' component={LabelAndTextArea} readOnly={readOnly}
                        label='Referência/Determinação' cols='12' placeholder='Informe de quem foi a determinação' />

                    <Field name='anexo' component={LabelAndTextArea} readOnly={readOnly}
                        label='Anexo' cols='12' placeholder='Informe uma descrição' />

                    <Field name='destino' component={LabelAndTextArea} readOnly={readOnly}
                        label='Destino' cols='12' placeholder='Informe o local da missão' />

                    <Field name='conteudo' component={LabelAndRTE} readOnly={readOnly}
                        label='Conteudo' cols='12' placeholder='Informe o local da missão' />




                    <Field name='user' component={LabelAndInputHidden} readOnly={readOnly}
                        label='User' cols='12' placeholder='Informe a data da missão' valor={user.name} />



                    <div className="box-body pad">

                        <textarea id="editor1" name="editor1" rows="10" cols="80">
                            This is my textarea to be replaced with CKEditor.
                    </textarea>


                    </div>

                    <ListStatus list={statusOficio} />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>Cancelar</button>
                    <button type='button' className='btn btn-default'
                        onClick={this.handlePdfOpen}>Imprimir</button>

                </div>
            </form>
        )
    }
}

OficioForm = reduxForm({ form: 'oficioForm', destroyOnUnmount: false })(OficioForm)

const selector = formValueSelector('oficioForm')
const mapStateToProps = state => ({
    numero: selector(state, 'numero'),
    assunto: selector(state, 'assunto'),
    conteudo: selector(state, 'conteudo'),
    status: selector(state, 'status'),
    statusAtual: selector(state, 'statusAtual'),
    oficio: selector(state, 'numero', 'assunto', 'referencia', 'conteudo', 'data', 'destino'),

    //tabUpdate: state.tab.visible.tabUpdate,
    // tabDelete: state.tab.visible.tabDelete,
    tiposOficios: state.oficio.tiposOficios,
    user: state.auth.user,



})
const mapDispatchToProps = dispatch => bindActionCreators({
    init,
    updateConteudo,
    getCount,
    updateTipoOficio,
    updateSugestoes,
    updateUser,
    updateStatusAtual,


}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(OficioForm)