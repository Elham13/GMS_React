import { combineReducers } from "redux";
import modalReducer from "./modal/modalReducer";
import loginReducer from "./login/loginReducer";
import signupReducer from "./login/signupReducer";
import featuredAdsReducer from "./featuredAds/featuredAdsReducer";
import clientReducer from "./client/clientReducers";
import getClientReducer from "./client/getClientReducere";
import deleteClientReducer from "./client/deleteClientReducer";
import updateClientReducer from "./client/updateClientReducer";
import planReducer from "./plan/planReducer";
import {
  mobileReducer,
  serviceReducer,
  addServiceReducer,
  updateServiceReducer,
  topServiceReducer,
  singleServiceReducer,
  getPaginatedServiceReducer,
  countServicesReducer,
} from "./services/serviceReducers";
import {
  updateUserReducer,
  getUsersReducer,
  contactUsReducer,
} from "./user/userReducers";

const rootReducer = combineReducers({
  modal: modalReducer,
  createService: addServiceReducer,
  updateService: updateServiceReducer,
  topServices: topServiceReducer,
  paginatedServices: getPaginatedServiceReducer,
  countServices: countServicesReducer,
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
  mobile: mobileReducer,
  updateProfile: updateUserReducer,
  getAllUsers: getUsersReducer,
  contactUs: contactUsReducer,
});

export default rootReducer;
