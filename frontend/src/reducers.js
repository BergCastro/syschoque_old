import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import DashboardReducer from './dashboard/dashboardReducer'
import TabReducer from './common/tab/tabReducer'
import OficioReducer from './oficio/oficioReducer'
import ReducersForms from './reducersForms'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    oficio: OficioReducer,
    form: ReducersForms,
    toastr: toastrReducer
})

export default rootReducer