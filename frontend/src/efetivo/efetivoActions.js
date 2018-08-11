import axios from 'axios'
import { Urls } from '../consts'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'



const BASE_URL = Urls.API_URL
const INITIAL_VALUES = {
    numero: '',
    matricula: '',
    nome: '',
    nomeDeGuerra: '',
    cargo: '',
    unidadePolicial: '',
    comportamento: '',
    situacaoFuncional: '',
    dataNascimento: '',
    sexo: '',
    tipoSanguineo: '',
    nomeMae: '',
    nomePai: '',
    escolaridade: '',
    estadoCivil: '',
    naturalidade: '',
    nacionalidade: '',
    uniforme: {},
    fichaMilitar: {},
    dataIngresso: '',
    documentoIngresso: '',
    cpf: '',    
    reservista: '',
    reservistaOrgaoExp: '',
    reservistaSerie: '',
    reservistaTipo: '',
    tituloEleitoral: '',
    tituloEleitoralZona: '',
    tituloEleitoralSecao: '',
    pisPasepNis: '',
    cnh: '',
    cnhCategoria: '',
    cnhValidade: '',
    endereco: {
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        cep: '',
    },
    telefones: [],
    email: '',
    dadoBancario: {},
    dadoSomatico: {}   
}

export const GET_EFETIVO = 'GET_EFETIVO'
export const GET_PM = 'GET_PM'
export const GET_COUNT_EFETIVO = 'GET_COUNT_EFETIVO'
export const UPDATE_CONTEUDO = 'UPDATE_CONTEUDO'
export const UPDATE_TIPO_EFETIVO = 'UPDATE_TIPO_EFETIVO'
export const UPDATE_SUGESTOES_EFETIVO = 'UPDATE_SUGESTOES_EFETIVO'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_NUMERO = 'UPDATE_NUMERO'
export const UPDATE_STATUS_ATUAL = 'UPDATE_STATUS_ATUAL'


export function getList() {
    const request = axios.get(`${BASE_URL}/efetivo`)
    return {
        type: GET_EFETIVO,
        payload: request
    }
}

export function getPM(pm) {
     
    return {
        type: GET_PM,
        payload: pm
    }
}



export function getCount() {
    const response = axios.get(`${BASE_URL}/efetivo/count`)
    return {
        type: GET_COUNT_EFETIVO,
        payload: response
    }
}

export function updateConteudo(value) {

    return {
        type: UPDATE_CONTEUDO,
        payload: value
    }
}

export function updateTipoEfetivo(value) {

    return {
        type: UPDATE_TIPO_EFETIVO,
        payload: value
    }
}

export function updateSugestoes(value) {

    return {
        type: UPDATE_SUGESTOES_EFETIVO,
        payload: value
    }
}

export function updateUser(value) {

    return {
        type: UPDATE_USER,
        payload: value
    }
}

export function updateNumero(value) {

    return {
        type: UPDATE_NUMERO,
        payload: value
    }
}

export function updateStatusAtual(value, user) {
    const newStatus = {

        status: value,
        dataHora: Date.now(),
        responsavel: user
    }

    return {
        type: UPDATE_STATUS_ATUAL,
        payload: newStatus

    }
}


export function create(values) {
    console.log(values)
   
    return submit(values, 'post')
}



export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {

        const id = values._id ? values._id : ''

        axios[method](`${BASE_URL}/efetivo/${id}`, values)
            .then(resp => {
                toastr.success(`Sucesso`, 'Operação Realizada com sucesso.')
                dispatch(init())

            })
            .catch(e => {

                toastr.warning('Um erro ocorreu!', 'Pode já ter sido deletado.')
                dispatch(init())


            })
    }
}

export function showUpdate(efetivo) {
    
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('efetivoForm', efetivo)
    ]
}

export function showPrint(pm) {
    
    return [
        showTabs('tabPrint'),
        selectTab('tabPrint'),
        getPM(pm)
    ]
}



export function showDelete(efetivo) {

    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('efetivoForm', efetivo)
    ]
}

export function init() {

    return [ //array de actions possivel por causa do redux multi
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('efetivoForm', INITIAL_VALUES),
       // getCount()

    ]
}