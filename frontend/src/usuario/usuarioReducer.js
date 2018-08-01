import { GET_USUARIOS, GET_COUNT_USUARIO } from './usuarioActions'


const INITIAL_STATE = { list: [],  count: 0 }


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USUARIOS:
            return { ...state, list: action.payload.data }
       
        case GET_COUNT_USUARIO:
            return { ...state, count: action.payload.data }



        default:
            return state
    }
}

