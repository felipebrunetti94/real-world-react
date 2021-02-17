import * as AUTH from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case AUTH.UPDATE_AUTH_INFO:
      return {
        ...state,
        authInfo: {
          ...state.authInfo,
          ...action.authInfo,
        },
      };
    case AUTH.LOGIN_USER_REQUEST:
    case AUTH.REGISTER_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: {},
      };
    case AUTH.REGISTER_USER_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case AUTH.LOGIN_USER_REQUEST_ERROR:
      return {
        ...state,
        authInfo: {
          ...state.authInfo,
          password: "",
        },
        error: action.error,
        isLoading: false,
      };
    case AUTH.LOGIN_USER_REQUEST_SUCCESS:
    case AUTH.REGISTER_USER_REQUEST_SUCCESS:
      return {
        ...state,
        authInfo: {},
        error: {},
        isLoading: false,
        user: action.user,
      };
    case AUTH.SIGN_OUT:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default reducer;
