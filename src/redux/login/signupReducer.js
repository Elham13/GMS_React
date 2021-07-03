import { SIGNUP_REQUEST, SIGNUP_FAILURE } from "./loginTypes";

const initialState = {
  signupLoading: false,
  signupError: "",
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        signupLoading: true,
      };
    case SIGNUP_FAILURE:
      return {
        signupLoading: false,
        signupError: action.payload,
      };
    default:
      return state;
  }
};

export default signupReducer;
