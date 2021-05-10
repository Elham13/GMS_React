import {
    SERVICE_REQUEST,
    SERVICE_SUCCESS,
    SERVICE_FAILURE
} from './serviceTypes'

const initialState = {
    serviceLoading: false,
    serviceData: [],
    serviceError: ''
}

const serviceReducer = (state=initialState, action) => {
    switch(action.type){
        case SERVICE_REQUEST: 
            return {
                ...state,
                serviceLoading: true
            }
        case SERVICE_SUCCESS:
            return {
                serviceLoading: false,
                serviceData: action.payload,
                serviceError: ''
            }
        case SERVICE_FAILURE:
            return {
                serviceError: action.payload,
                serviceLoading: false,
                serviceData: []
            }
        default: return state
    }
}

export default serviceReducer