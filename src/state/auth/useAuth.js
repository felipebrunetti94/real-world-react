// @ts-check

import { useReducer } from "react";
import initialState from "./initialState";
import * as AUTH from "./types";
import reducer from "./reducer";

const useAuth = ({ registerUser, loginUser }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    ...state,
    updateAuthInfo: (authInfo) =>
      dispatch({ type: AUTH.UPDATE_AUTH_INFO, authInfo }),
    onRegisterUser: (authInfo) => {
      dispatch({ type: AUTH.REGISTER_USER_REQUEST });
      return registerUser(authInfo, {
        onSuccess: () => dispatch({ type: AUTH.REGISTER_USER_REQUEST_SUCCESS }),
        onError: (errors) =>
          dispatch({ type: AUTH.REGISTER_USER_REQUEST_ERROR, errors }),
      });
    },
    onUserLogin: (authInfo) => {
      dispatch({ type: AUTH.LOGIN_USER_REQUEST });
      return loginUser(authInfo, {
        onSuccess: () => dispatch({ type: AUTH.LOGIN_USER_REQUEST_SUCCESS }),
        onError: (errors) =>
          dispatch({ type: AUTH.LOGIN_USER_REQUEST_ERROR, errors }),
      });
    },
  };
};

export default useAuth;
