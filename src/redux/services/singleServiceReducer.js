import {
    GET_SINGLE_SERVICE_REQUEST,
    GET_SINGLE_SERVICE_SUCCESS,
    GET_SINGLE_SERVICE_FAILURE,
} from "../services/serviceTypes";

const initialState = {
    singleServiceLoading: false,
    singleServiceData: {},
    singleServiceError: "",
};

const singleServiceReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SINGLE_SERVICE_REQUEST:
            return {
                ...state,
                singleServiceLoading: true,
            };
        case GET_SINGLE_SERVICE_SUCCESS:
            return {
                singleServiceLoading: false,
                singleServiceData: action.payload,
                singleServiceError: "",
            };
        case GET_SINGLE_SERVICE_FAILURE:
            return {
                singleServiceLoading: false,
                singleServiceData: {},
                singleServiceError: action.payload,
            };
        default:
            return state;
    }
};

export default singleServiceReducer;
