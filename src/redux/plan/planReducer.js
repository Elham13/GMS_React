import { PLAN_REQUEST, PLAN_SUCCESS, PLAN_FAILURE } from "./planTypes";

const initialState = {
  planLoading: false,
  planRes: {},
  planErr: "",
};

const planReducer = (state = initialState, action) => {
  switch (action.tyep) {
    case PLAN_REQUEST:
      return {
        ...state,
        planLoading: true,
      };
    case PLAN_SUCCESS:
      return {
        planLoading: false,
        planRes: action.payload,
        planErr: "",
      };
    case PLAN_FAILURE:
      return {
        planLoading: false,
        planRes: {},
        planErr: action.payload,
      };
    default:
      return state;
  }
};

export default planReducer;
