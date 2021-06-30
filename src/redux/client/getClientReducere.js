import {
  GET_CLIENT_REQUEST,
  GET_CLIENT_FAILURE,
  GET_CLIENT_SUCCESS,
} from "./clientTypes";

const initialState = {
  getClientLoading: false,
  getClientResponse: [],
  getClientError: "",
};

const getClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENT_REQUEST:
      return {
        ...state,
        getClientLoading: true,
      };
    case GET_CLIENT_SUCCESS:
      return {
        getClientLoading: false,
        getClientResponse: action.payload,
        getClientError: "",
      };
    case GET_CLIENT_FAILURE:
      return {
        getClientLoading: false,
        getClientResponse: [],
        getClientError: action.payload,
      };
    default:
      return state;
  }
};

export default getClientReducer;
