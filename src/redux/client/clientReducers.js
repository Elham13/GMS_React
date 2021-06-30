import {
  ADD_CLIENT_REQUEST,
  ADD_CLIENT_SUCCESS,
  ADD_CLIENT_FAILURE,
} from "./clientTypes";

const initialState = {
  addClientLoading: false,
  response: {},
  addClientError: "",
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLIENT_REQUEST:
      return {
        ...state,
        addClientLoading: true,
      };
    case ADD_CLIENT_SUCCESS:
      return {
        addClientLoading: false,
        response: action.payload,
        addClientError: "",
      };
    case ADD_CLIENT_FAILURE:
      return {
        addClientLoading: false,
        response: {},
        addClientError: action.payload,
      };
    default:
      return state;
  }
};

export default clientReducer;
