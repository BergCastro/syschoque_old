import { combineReducers } from 'redux'

import DashboardReducer from './dashboard/dashboardReducer'
import TabReducer from './common/tab/tabReducer'
import OficioReducer from './oficio/oficioReducer'
import ReducersForms from './reducersForms'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    oficio: OficioReducer,
    form: ReducersForms
})

export default rootReducer