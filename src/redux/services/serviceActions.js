import axios from 'axios'
import {
    SERVICE_REQUEST,
    SERVICE_SUCCESS,
    SERVICE_FAILURE,
    ADD_SERVICE_REQUEST,
    ADD_SERVICE_SUCCESS,
    ADD_SERVICE_FAILURE,
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
            const {data} = await axios.post(`${localAPI}/`, datum)
            dispatch({type: ADD_SERVICE_SUCCESS, payload: data.products})
        } catch (error) {
            dispatch({type: ADD_SERVICE_FAILURE, payload: error.message})
        }
    }
}

export {getServices, postService}