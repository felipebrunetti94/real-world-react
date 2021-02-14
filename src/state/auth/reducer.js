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
    case AUTH.LOGIN_USER:
    case AUTH.REGISTER_USER:
      return {
        ...state,
        isLoading: true,
        errors: [],
      };
    case AUTH.REGISTER_USER_ERROR:
      return {
        ...state,
        errors: [...action.errors],
        isLoading: false,
      };
    case AUTH.LOGIN_USER_ERROR:
      return {
        ...state,
        authInfo: {
          ...state.authInfo,
          password: "",
        },
        errors: [...action.errors],
        isLoading: false,
      };
    case AUTH.LOGIN_USER_SUCCESS:
    case AUTH.REGISTER_USER_SUCCESS:
      return {
        ...state,
        authInfo: {},
        errors: [],
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
