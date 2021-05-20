import {combineReducers} from 'redux'
import modalReducer from './modal/modalReducer'
import serviceReducer from './services/serviceReducer'
import loginReducer from './login/loginReducer'
import signupReducer from './login/signupReducer'

const rootReducer = combineReducers({ 
    modal: modalReducer,
    service: serviceReducer,
    login: loginReducer,
    signup: signupReducer,
}) 

export default rootReducer