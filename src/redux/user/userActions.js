import axios from "axios";
import { localAPI } from "../api";
import {
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  CONTACT_US_REQUEST,
  CONTACT_US_SUCCESS,
  CONTACT_US_FAILURE,
} from "./userTypes";

const updateUserAction = (load) => {
  return async (dispatch, getState) => {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    try {
      const {
        login: { loginResponse },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${loginResponse.token}`,
        },
      };
      const { data } = await axios.post(
        `${localAPI}/updateProfile`,
        load,
        config
      );
      localStorage.removeItem("userInfo");
      localStorage.setItem("userInfo", JSON.stringify(data.user));
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: UPDATE_PROFILE_FAILURE, payload: error.message });
    }
  };
};

const getUsersAction = () => {
  return async (dispatch) => {
    dispatch({ type: GET_USERS_REQUEST });

    try {
      const res = await axios.get(`${localAPI}/getUsers`);

      if (res.status === 202) {
        dispatch({ type: GET_USERS_FAILURE, payload: res.data.message });
      } else {
        dispatch({ type: GET_USERS_SUCCESS, payload: res.data });
      }
    } catch (error) {
      dispatch({ type: GET_USERS_FAILURE, payload: error.message });
    }
  };
};

const contactUsAction = (load) => {
  return async (dispatch) => {
    dispatch({ type: CONTACT_US_REQUEST });

    try {
      const { data } = await axios.post(`${localAPI}/contactUs`, load);
      dispatch({ type: CONTACT_US_SUCCESS, payload: data.message });
    } catch (error) {
      dispatch({ type: CONTACT_US_FAILURE, payload: error.message });
    }
  };
};

export { updateUserAction, getUsersAction, contactUsAction };
