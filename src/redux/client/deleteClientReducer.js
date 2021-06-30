import {
  DELETE_CLIENT_REQUEST,
  DELETE_CLIENT_FAILURE,
  DELETE_CLIENT_SUCCESS,
} from "./clientTypes";

const initialState = {
  deleteClientLoading: false,
  deleteClientResponse: {},
  deleteClientError: "",
};

const deleteClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CLIENT_REQUEST:
      return {
        ...state,
        deleteClientLoading: true,
      };
    case DELETE_CLIENT_SUCCESS:
      return {
        deleteClientLoading: false,
        deleteClientResponse: action.payload,
        deleteClientError: "",
      };
    case DELETE_CLIENT_FAILURE:
      return {
        deleteClientLoading: false,
        deleteClientResponse: {},
        deleteClientError: action.payload,
      };
    default:
      return state;
  }
};

export default deleteClientReducer;
