import axios from "axios";
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
  GET_SINGLE_SERVICE_REQUEST,
  GET_SINGLE_SERVICE_SUCCESS,
  GET_SINGLE_SERVICE_FAILURE,
  UPDATE_SERVICE_REQUEST,
  UPDATE_SERVICE_SUCCESS,
  UPDATE_SERVICE_FAILURE,
} from "./serviceTypes";
import { localAPI } from "../api";

const getServices = () => {
  return async (dispatch) => {
    dispatch({ type: SERVICE_REQUEST });
    try {
      const { data } = await axios.get(`${localAPI}/`);
      dispatch({ type: SERVICE_SUCCESS, payload: data.products });
    } catch (error) {
      dispatch({ type: SERVICE_FAILURE, payload: error.message });
    }
  };
};

const postService = () => {
  return async (dispatch, getState) => {
    dispatch({ type: ADD_SERVICE_REQUEST });
    try {
      const {
        login: { loginResponse },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${loginResponse.token}`,
        },
      };
      const res = await axios.post(`${localAPI}/addProduct`, {}, config);
      if (res.status === 202) {
        dispatch({ type: ADD_SERVICE_FAILURE, payload: res.data.message });
      } else {
        dispatch({ type: ADD_SERVICE_SUCCESS, payload: res.data });
      }
    } catch (error) {
      dispatch({ type: ADD_SERVICE_FAILURE, payload: error.message });
    }
  };
};

const updateService = (formData) => {
  return async (dispatch, getState) => {
    dispatch({ type: UPDATE_SERVICE_REQUEST });
    try {
      const {
        login: { loginResponse },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${loginResponse.token}`,
        },
      };
      const res = await axios.post(`${localAPI}/editProduct`, formData, config);
      if (res.status === 202) {
        dispatch({ type: UPDATE_SERVICE_FAILURE, payload: res.data.message });
      } else {
        dispatch({ type: UPDATE_SERVICE_SUCCESS, payload: res.data });
      }
    } catch (error) {
      dispatch({ type: UPDATE_SERVICE_FAILURE, payload: error.message });
    }
  };
};

const deleteService = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_SERVICE_REQUEST });
    try {
      const { data } = await axios.post(`${localAPI}/deletProduct`, id);
      dispatch({ type: DELETE_SERVICE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: DELETE_SERVICE_FAILURE, payload: error });
    }
  };
};

const postMobileNumber = (obj) => {
  return async (dispatch) => {
    dispatch({ type: POST_MOBILE_REQUEST });
    try {
      const { data } = await axios.post(`${localAPI}/mobilNumber`, obj);
      dispatch({ type: POST_MOBILE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: POST_MOBILE_FAILURE, payload: error });
    }
  };
};

const getSingleService = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_SINGLE_SERVICE_REQUEST });

    try {
      const { data } = await axios.get(`${localAPI}/singleProduct/${id}`);
      dispatch({ type: GET_SINGLE_SERVICE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_SINGLE_SERVICE_FAILURE, payload: error });
    }
  };
};

export {
  getServices,
  postService,
  deleteService,
  postMobileNumber,
  getSingleService,
  updateService,
};
