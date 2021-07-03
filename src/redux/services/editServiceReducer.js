import {
  UPDATE_SERVICE_REQUEST,
  UPDATE_SERVICE_SUCCESS,
  UPDATE_SERVICE_FAILURE,
} from "./serviceTypes";

const initialState = {
  updateServiceLoading: false,
  updateServiceRes: {},
  updateServiceErr: "",
};

const updateServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SERVICE_REQUEST:
      return {
        ...state,
        updateServiceLoading: true,
      };
    case UPDATE_SERVICE_SUCCESS:
      return {
        updateServiceLoading: false,
        updateServiceRes: action.payload,
        updateServiceErr: "",
      };
    case UPDATE_SERVICE_FAILURE:
      return {
        updateServiceLoading: false,
        updateServiceRes: {},
        updateServiceErr: action.payload,
      };
    default:
      return state;
  }
};

export default updateServiceReducer;
