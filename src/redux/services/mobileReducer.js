import {
  POST_MOBILE_REQUEST,
  POST_MOBILE_SUCCESS,
  POST_MOBILE_FAILURE,
} from "./serviceTypes";

const initialState = {
  loading: false,
  res: "",
  err: "",
};

const mobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_MOBILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_MOBILE_SUCCESS:
      return {
        loading: false,
        res: action.payload,
        err: "",
      };
    case POST_MOBILE_FAILURE:
      return {
        loading: false,
        res: "",
        err: action.payload,
      };
    default:
      return state;
  }
};

export default mobileReducer;
