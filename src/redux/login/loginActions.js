import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
} from "./loginTypes";
import { localAPI } from "../api";
import axios from "axios";

const login = (loginData) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    try {
      const res = await axios.post(`${localAPI}/login`, loginData);

      if (res.status === 202) {
        dispatch({ type: LOGIN_FAILURE, payload: res.data.message });
      } else {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        localStorage.setItem("userInfo", JSON.stringify(res.data));
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
  };
};

const logout = async () => {
  localStorage.removeItem("userInfo");
  const { data } = await axios.post(`${localAPI}/logout`);

  console.log("From redux: ", data);
};

const signup = (signupData) => {
  return async (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });

    try {
      const res = await axios.post(`${localAPI}/signup`, signupData);
      if (res.status === 202) {
        dispatch({ type: SIGNUP_FAILURE, payload: res.data.message });
      } else {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        localStorage.setItem("userInfo", JSON.stringify(res.data));
      }
    } catch (error) {
      dispatch({ type: SIGNUP_FAILURE, payload: error.message });
    }
  };
};

export { login, signup, logout };
