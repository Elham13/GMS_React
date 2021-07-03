import {
  UPDATE_CLIENT_REQUEST,
  UPDATE_CLIENT_SUCCESS,
  UPDATE_CLIENT_FAILURE,
} from "./clientTypes";

const initialState = {
  loading: false,
  response: "",
  error: "",
};

const updateClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CLIENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_CLIENT_SUCCESS:
      return {
        loading: false,
        response: action.payload,
        error: "",
      };
    case UPDATE_CLIENT_FAILURE:
      return {
        loading: false,
        response: "",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default updateClientReducer;
