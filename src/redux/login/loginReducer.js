import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './loginTypes'

const initialState = {
    loginLoading: false,
    loginResponse: {},
    loginError: ''
}

const loginReducer = (state=initialState, action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return {
                ...state,
                loginLoading: true
            }
        case LOGIN_SUCCESS:
            return {
                loginLoading: false,
                loginResponse: action.payload,
                loginError: ''
            }
        case LOGIN_FAILURE:
            return {
                loginLoading: false,
                loginResponse: {},
                loginError: action.payload
            }
        default: return state
    }
}

export default loginReducer