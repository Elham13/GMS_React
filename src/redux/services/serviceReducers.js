import {
  SERVICE_REQUEST,
  SERVICE_SUCCESS,
  SERVICE_FAILURE,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_SUCCESS,
  ADD_SERVICE_FAILURE,
  POST_MOBILE_REQUEST,
  POST_MOBILE_SUCCESS,
  POST_MOBILE_FAILURE,
  GET_SINGLE_SERVICE_REQUEST,
  GET_SINGLE_SERVICE_SUCCESS,
  GET_SINGLE_SERVICE_FAILURE,
  UPDATE_SERVICE_REQUEST,
  UPDATE_SERVICE_SUCCESS,
  UPDATE_SERVICE_FAILURE,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAILURE,
  GET_PAGINATED_SERVICE_REQUEST,
  GET_PAGINATED_SERVICE_SUCCESS,
  GET_PAGINATED_SERVICE_FAILURE,
  GET_SERVICES_COUNT_REQUEST,
  GET_SERVICES_COUNT_SUCCESS,
  GET_SERVICES_COUNT_FAILURE,
} from "./serviceTypes";

const addServiceReducer = (
  state = {
    addServiceLoading: false,
    addServiceData: {},
    addServiceError: "",
  },
  action
) => {
  switch (action.type) {
    case ADD_SERVICE_REQUEST:
      return {
        ...state,
        addServiceLoading: true,
      };
    case ADD_SERVICE_SUCCESS:
      return {
        addServiceLoading: false,
        addServiceData: action.payload,
        addServiceError: "",
      };
    case ADD_SERVICE_FAILURE:
      return {
        addServiceLoading: false,
        addServiceData: {},
        addServiceError: action.payload,
      };
    default:
      return state;
  }
};

const mobileReducer = (
  state = {
    loading: false,
    res: "",
    err: "",
  },
  action
) => {
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

const singleServiceReducer = (
  state = {
    singleServiceLoading: false,
    singleServiceData: {},
    singleServiceError: "",
  },
  action
) => {
  switch (action.type) {
    case GET_SINGLE_SERVICE_REQUEST:
      return {
        ...state,
        singleServiceLoading: true,
      };
    case GET_SINGLE_SERVICE_SUCCESS:
      return {
        singleServiceLoading: false,
        singleServiceData: action.payload,
        singleServiceError: "",
      };
    case GET_SINGLE_SERVICE_FAILURE:
      return {
        singleServiceLoading: false,
        singleServiceData: {},
        singleServiceError: action.payload,
      };
    default:
      return state;
  }
};

const updateServiceReducer = (
  state = {
    updateServiceLoading: false,
    updateServiceRes: {},
    updateServiceErr: "",
  },
  action
) => {
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

const serviceReducer = (
  state = {
    serviceLoading: false,
    serviceData: [],
    serviceError: "",
  },
  action
) => {
  switch (action.type) {
    case SERVICE_REQUEST:
      return {
        ...state,
        serviceLoading: true,
      };
    case SERVICE_SUCCESS:
      return {
        serviceLoading: false,
        serviceData: action.payload,
        serviceError: "",
      };
    case SERVICE_FAILURE:
      return {
        serviceError: action.payload,
        serviceLoading: false,
        serviceData: [],
      };
    default:
      return state;
  }
};

const topServiceReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_TOP_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_TOP_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const getPaginatedServiceReducer = (state = { res: [] }, action) => {
  switch (action.type) {
    case GET_PAGINATED_SERVICE_REQUEST:
      return { loading: true, res: [] };
    case GET_PAGINATED_SERVICE_SUCCESS:
      return {
        loading: false,
        res: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case GET_PAGINATED_SERVICE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const countServicesReducer = (state = { res: 0 }, action) => {
  switch (action.type) {
    case GET_SERVICES_COUNT_REQUEST:
      return { loading: true, res: 0 };
    case GET_SERVICES_COUNT_SUCCESS:
      return {
        loading: false,
        res: action.payload,
      };
    case GET_SERVICES_COUNT_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export {
  topServiceReducer,
  addServiceReducer,
  updateServiceReducer,
  mobileReducer,
  serviceReducer,
  singleServiceReducer,
  getPaginatedServiceReducer,
  countServicesReducer,
};
