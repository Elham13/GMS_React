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
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAILURE,
  GET_PAGINATED_SERVICE_REQUEST,
  GET_PAGINATED_SERVICE_SUCCESS,
  GET_PAGINATED_SERVICE_FAILURE,
  GET_SERVICES_COUNT_REQUEST,
  GET_SERVICES_COUNT_SUCCESS,
  GET_SERVICES_COUNT_FAILURE,
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

const getPaginatedServices = (pageNumber = "", keyword = "") => {
  return async (dispatch) => {
    dispatch({ type: GET_PAGINATED_SERVICE_REQUEST });
    try {
      const { data } = await axios.get(
        `${localAPI}/getProducts?keyword=${keyword}&pageNumber=${pageNumber}`
      );
      dispatch({ type: GET_PAGINATED_SERVICE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_PAGINATED_SERVICE_FAILURE, payload: error.message });
    }
  };
};

const getProductsCount = () => {
  return async (dispatch) => {
    dispatch({ type: GET_SERVICES_COUNT_REQUEST });

    try {
      const { data } = await axios.get(`${localAPI}/getProductsCount`);
      dispatch({ type: GET_SERVICES_COUNT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_SERVICES_COUNT_FAILURE, payload: error.message });
    }
  };
};

const getTopServices = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_TOP_REQUEST });

      const { data } = await axios.get(`${localAPI}/getTopProducts`);

      dispatch({
        type: PRODUCT_TOP_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_TOP_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
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
  console.log(id);
  return async (dispatch) => {
    dispatch({ type: DELETE_SERVICE_REQUEST });
    try {
      const { data } = await axios.get(`${localAPI}/deletProduct/${id.id}`, id);
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
      const res = await axios.post(`${localAPI}/mobilNumber`, obj);
      if (res.status === 203) {
        dispatch({ type: POST_MOBILE_FAILURE, payload: res.data.message });
      }
      dispatch({ type: POST_MOBILE_SUCCESS, payload: res.data.message });
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
  getTopServices,
  postService,
  getProductsCount,
  getPaginatedServices,
  deleteService,
  postMobileNumber,
  getSingleService,
  updateService,
};
