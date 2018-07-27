import { BILLING_SUMMARY_FETCHED } from './dashboardActions'
const INITIAL_STATE = {
    efetivoGeral: 0,
    efetivoCotam: 0,
    efetivoCdc: 0,
    efetivoGate: 0,
    efetivoCanil: 0,
    efetivoCotar: 0
}

 export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case BILLING_SUMMARY_FETCHED:
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}