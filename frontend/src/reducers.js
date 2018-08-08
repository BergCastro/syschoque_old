import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import DashboardReducer from './dashboard/dashboardReducer'
import TabReducer from './common/tab/tabReducer'
import OficioReducer from './oficio/oficioReducer'
import TiposOficioReducer from './tiposOficio/tiposOficioReducer'
import UsuarioReducer from './usuario/usuarioReducer'
import ReducersForms from './reducersForms'
import AuthReducer from './auth/authReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    oficio: OficioReducer,
    tiposOficio: TiposOficioReducer,
    form: ReducersForms,
    toastr: toastrReducer,
    auth: AuthReducer,
    usuario: UsuarioReducer
})

export default rootReducer