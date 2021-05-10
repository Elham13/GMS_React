import {combineReducers} from 'redux'
import modalReducer from './modal/modalReducer'
import serviceReducer from './services/serviceReducer'

const rootReducer = combineReducers({ 
    modal: modalReducer,
    service: serviceReducer
}) 

export default rootReducer