import { DISPLAY_ATL, DISPLAY_BTL, DISPLAY_DIGITAL } from "./featuredAdsTypes";

const initialState = {
  showAtl: false,
  showBtl: false,
  showDigital: false,
};

const featuredAdsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ATL:
      return {
        showAtl: true,
        showBtl: false,
        showDigital: false,
      };
    case DISPLAY_BTL:
      return {
        showAtl: false,
        showBtl: true,
        showDigital: false,
      };
    case DISPLAY_DIGITAL:
      return {
        showAtl: false,
        showBtl: false,
        showDigital: true,
      };
    default:
      return state;
  }
};

export default featuredAdsReducer;
