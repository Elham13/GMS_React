import {
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  CONTACT_US_REQUEST,
  CONTACT_US_SUCCESS,
  CONTACT_US_FAILURE,
} from "./userTypes";

const getUsersReducer = (state = { res: [] }, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        loading: true,
        res: [],
      };
    case GET_USERS_SUCCESS:
      return {
        loading: false,
        res: action.payload,
      };
    case GET_USERS_FAILURE:
      return {
        loading: false,
        res: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

const updateUserReducer = (state = { res: [] }, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
        res: [],
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        res: action.payload,
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        loading: false,
        res: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

const contactUsReducer = (state = { res: "" }, action) => {
  switch (action.type) {
    case CONTACT_US_REQUEST:
      return {
        loading: true,
        res: "",
      };
    case CONTACT_US_SUCCESS:
      return {
        loading: false,
        res: action.payload,
      };
    case CONTACT_US_FAILURE:
      return {
        loading: false,
        res: "",
        error: action.payload,
      };

    default:
      return state;
  }
};

export { updateUserReducer, getUsersReducer, contactUsReducer };
