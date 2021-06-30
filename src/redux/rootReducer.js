import { combineReducers } from "redux";
import modalReducer from "./modal/modalReducer";
import serviceReducer from "./services/serviceReducer";
import loginReducer from "./login/loginReducer";
import signupReducer from "./login/signupReducer";
import singleServiceReducer from "./services/singleServiceReducer";
import featuredAdsReducer from "./featuredAds/featuredAdsReducer";
import clientReducer from "./client/clientReducers";
import getClientReducer from "./client/getClientReducere";
import deleteClientReducer from "./client/deleteClientReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  service: serviceReducer,
  login: loginReducer,
  signup: signupReducer,
  singleService: singleServiceReducer,
  featured: featuredAdsReducer,
  addClient: clientReducer,
  getClient: getClientReducer,
  deleteClient: deleteClientReducer,
});

export default rootReducer;
