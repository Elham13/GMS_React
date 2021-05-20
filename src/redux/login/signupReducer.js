import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS, 
    SIGNUP_FAILURE,
} from './loginTypes'

const initialState = {
    signupLoading: false,
    signupResponse: {},
    signupError: ''
}

const signupReducer = (state=initialState, action) => {
    switch(action.type){
        case SIGNUP_REQUEST:
            return {
                ...state,
                signupLoading: true
            }
        case SIGNUP_SUCCESS:
            return {
                signupLoading: false,
                signupResponse: action.payload,
                signupError: ''
            }
        case SIGNUP_FAILURE:
            return {
                signupLoading: false,
                signupResponse: {},
                signupError: action.payload
            }
        default: return state
    }
}

export default signupReducer