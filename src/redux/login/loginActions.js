import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS, 
    SIGNUP_FAILURE,
} from './loginTypes'
import {localAPI} from '../api'
import axios from 'axios'

const login = (loginData) => {
    return async (dispatch) => {
        dispatch({type: LOGIN_REQUEST})

        try {
            const {data} = await axios.post(`${localAPI}/login`, loginData)
            dispatch({type: LOGIN_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: LOGIN_FAILURE, payload: error})
        }
    }
}

const signup = (signupData) => {
    return async (dispatch) => {
        dispatch({type: SIGNUP_REQUEST})

        try {
            const {data} = await axios.post(`${localAPI}/signup`, signupData)
            dispatch({type: SIGNUP_SUCCESS, payload: data})
        } catch (error) {
            dispatch({type: SIGNUP_FAILURE, payload: error})
        }
    }
}

export {login, signup}