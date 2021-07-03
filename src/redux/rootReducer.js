import { combineReducers } from "redux";
import modalReducer from "./modal/modalReducer";
import serviceReducer from "./services/serviceReducer";
import addServiceReducer from "./services/addServiceReducer";
import updateServiceReducer from "./services/editServiceReducer";
import loginReducer from "./login/loginReducer";
import signupReducer from "./login/signupReducer";
import singleServiceReducer from "./services/singleServiceReducer";
import featuredAdsReducer from "./featuredAds/featuredAdsReducer";
import clientReducer from "./client/clientReducers";
import getClientReducer from "./client/getClientReducere";
import deleteClientReducer from "./client/deleteClientReducer";
import updateClientReducer from "./client/updateClientReducer";
import planReducer from "./plan/planReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  createService: addServiceReducer,
  updateService: updateServiceReducer,
  service: serviceReducer,
  login: loginReducer,
  signup: signupReducer,
  singleService: singleServiceReducer,
  featured: featuredAdsReducer,
  addClient: clientReducer,
  getClient: getClientReducer,
  editClient: updateClientReducer,
  deleteClient: deleteClientReducer,
  plan: planReducer,
});

export default rootReducer;
