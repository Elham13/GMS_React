import axios from 'axios'
import {
    SERVICE_REQUEST,
    SERVICE_SUCCESS,
    SERVICE_FAILURE,
    ADD_SERVICE_REQUEST,
    ADD_SERVICE_SUCCESS,
    ADD_SERVICE_FAILURE,
    DELETE_SERVICE_REQUEST,
    DELETE_SERVICE_SUCCESS,
    DELETE_SERVICE_FAILURE,
    POST_MOBILE_REQUEST,
    POST_MOBILE_SUCCESS,
    POST_MOBILE_FAILURE,
} from './serviceTypes'
import {localAPI} from '../api'


const getServices = () => {
    return async (dispatch) => {
        dispatch({type: SERVICE_REQUEST})
        try {
            const {data} = await axios.get(`${localAPI}/`) 
            dispatch({type: SERVICE_SUCCESS, payload: data.products})
        } catch (error) {
            dispatch({type: SERVICE_FAILURE, payload: error.message})
        }
        
    }
}

const postService = (datum) => {
    return async (dispatch) => { 
        dispatch({type: ADD_SERVICE_REQUEST}) 
        try {
            const {data} = await axios.post(`${localAPI}/addProduct`, datum)
            dispatch({type: ADD_SERVICE_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: ADD_SERVICE_FAILURE, payload: error.message}) 
        }
    }
}

const deleteService = (id) => {
    return async (dispatch) => {
        dispatch({type: DELETE_SERVICE_REQUEST})
        try {
            const {data} = await axios.post(`${localAPI}/deletProduct`, id)
            dispatch({type: DELETE_SERVICE_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: DELETE_SERVICE_FAILURE, payload: error})
        }
    }
}


const postMobileNumber = (obj) => {
    return async (dispatch) => {
        dispatch({type: POST_MOBILE_REQUEST})
        try {
            const {data} = await axios.post(`${localAPI}/mobilNumber`, obj)
            dispatch({type: POST_MOBILE_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: POST_MOBILE_FAILURE, payload: error})
        }
    }
}

export {getServices, postService, deleteService, postMobileNumber}