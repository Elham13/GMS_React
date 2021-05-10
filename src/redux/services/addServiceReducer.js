import {
    ADD_SERVICE_REQUEST,
    ADD_SERVICE_SUCCESS,
    ADD_SERVICE_FAILURE,
} from '../services/serviceTypes'

const initialState = {
    addServiceLoading: false,
    addServiceData: [],
    addServiceError: ''
}

const addServiceReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_SERVICE_REQUEST: 
            return {
                ...state,
                addServiceLoading: true
            }
        case ADD_SERVICE_SUCCESS:
            return {
                addServiceLoading: false,
                addServiceData: action.payload,
                addServiceError: ''
            }
        case ADD_SERVICE_FAILURE:
            return {
                addServiceLoading: false,
                addServiceData: [],
                addServiceError: action.payload,
            }
        default: return state
    }
}

export default addServiceReducer

