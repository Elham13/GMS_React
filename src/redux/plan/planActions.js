import { PLAN_REQUEST, PLAN_SUCCESS, PLAN_FAILURE } from "./planTypes";
import axios from "axios";
import { localAPI } from "../api";

const postPlan = (plan) => {
  return async (dispatch) => {
    dispatch({ type: PLAN_REQUEST });

    try {
      const { data } = await axios.post(`${localAPI}/plan`, plan);
      dispatch({ type: PLAN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PLAN_FAILURE, payload: error.message });
    }
  };
};

export { postPlan };
