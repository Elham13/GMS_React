import {
  ADD_CLIENT_REQUEST,
  ADD_CLIENT_SUCCESS,
  ADD_CLIENT_FAILURE,
  GET_CLIENT_REQUEST,
  GET_CLIENT_FAILURE,
  GET_CLIENT_SUCCESS,
  DELETE_CLIENT_REQUEST,
  DELETE_CLIENT_SUCCESS,
  DELETE_CLIENT_FAILURE,
  UPDATE_CLIENT_REQUEST,
  UPDATE_CLIENT_SUCCESS,
  UPDATE_CLIENT_FAILURE,
} from "./clientTypes";

import axios from "axios";
import { localAPI } from "../api";

const addClient = () => {
  return async (dispatch, getState) => {
    dispatch({ type: ADD_CLIENT_REQUEST });

    try {
      const {
        login: { loginResponse },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${loginResponse.token}`,
        },
      };

      const { data } = await axios.post(`${localAPI}/addClient`, {}, config);
      dispatch({ type: ADD_CLIENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ADD_CLIENT_FAILURE, payload: error.message });
    }
  };
};

const getClients = () => {
  return async (dispatch) => {
    dispatch({ type: GET_CLIENT_REQUEST });

    try {
      const { data } = await axios.get(`${localAPI}/getClients`);
      dispatch({ type: GET_CLIENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_CLIENT_FAILURE, payload: error.message });
    }
  };
};

const deleteClient = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_CLIENT_REQUEST });

    try {
      console.log("Redux: ", id);
      const { data } = await axios.get(`${localAPI}/deleteClient/${id}`);
      dispatch({ type: DELETE_CLIENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: DELETE_CLIENT_FAILURE, payload: error.message });
    }
  };
};

const updateClient = (formDate) => {
  return async (dispatch, getState) => {
    dispatch({ type: UPDATE_CLIENT_REQUEST });

    try {
      const {
        login: { loginResponse },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${loginResponse.token}`,
        },
      };

      const res = await axios.post(`${localAPI}/editClient`, formDate, config);
      if (res.status === 202) {
        dispatch({ type: UPDATE_CLIENT_FAILURE, payload: res.data.message });
      } else {
        dispatch({ type: UPDATE_CLIENT_SUCCESS, payload: res.data.message });
      }
    } catch (error) {
      dispatch({ type: UPDATE_CLIENT_FAILURE, payload: error.message });
    }
  };
};

export { addClient, getClients, deleteClient, updateClient };
