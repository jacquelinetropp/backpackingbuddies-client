import {
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  SET_USER_ERRORS,
  LOADING_USER_UI,
  CLEAR_USER_ERRORS,
} from "../types";

const initialState = {
  loading: false,
  errors: null,
  userLoading: false,
  userErrors: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case SET_USER_ERRORS:
      return {
        ...state,
        userLoading: false,
        userErors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    case CLEAR_USER_ERRORS:
      return {
        ...state,
        userLoading: false,
        errors: null,
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };
    case LOADING_USER_UI:
      return {
        ...state,
        userLoading: true,
      };
    case STOP_LOADING_UI:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
