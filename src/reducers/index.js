import {combineReducers} from 'redux';
// import ajaxCallInProgress from "./ajaxStatusReducer";
import ormReducer from './ormReducer';

const rootReducers = combineReducers({
    // ajaxCallInProgress,

    ormReducer,
   
});


export default rootReducers;