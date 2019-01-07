import {combineReducers} from 'redux'
import ajaxStatus from './ajaxStatusReducer'
import ormReducer from './ormReducer'

const rootReducers = combineReducers({
  ajaxStatus,
  ormReducer

})

export default rootReducers
