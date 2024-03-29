import { useReducer, useEffect } from "react";
import initialState from "./initialState";
import * as AUTH from "./types";
import reducer from "./reducer";

const AUTH_KEY = "AUTH";

const useAuth = ({ registerUser, loginUser, editUser, cache }) => {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    const stored = cache.get(AUTH_KEY);
    if (stored) {
      return { ...init, user: stored };
    }
    return init;
  });

  useEffect(() => {
    cache.set(AUTH_KEY, state.user);
  }, [state.user, cache]);

  const onRegisterUser = (authInfo) => {
    dispatch({ type: AUTH.REGISTER_USER_REQUEST });
    return registerUser(authInfo, {
      onSuccess: (user) =>
        dispatch({ type: AUTH.REGISTER_USER_REQUEST_SUCCESS, user }),
      onError: (error) =>
        dispatch({ type: AUTH.REGISTER_USER_REQUEST_ERROR, error }),
    });
  };

  const onUserLogin = (authInfo) => {
    dispatch({ type: AUTH.LOGIN_USER_REQUEST });
    return loginUser(authInfo, {
      onSuccess: (user) =>
        dispatch({ type: AUTH.LOGIN_USER_REQUEST_SUCCESS, user }),
      onError: (error) =>
        dispatch({ type: AUTH.LOGIN_USER_REQUEST_ERROR, error }),
    });
  };

  const updateAuthInfo = (authInfo) =>
    dispatch({ type: AUTH.UPDATE_AUTH_INFO, authInfo });

  const onSignOut = () => {
    dispatch({ type: AUTH.SIGN_OUT });
    cache.clear(AUTH_KEY);
  };

  const setUserInfo = (user) => {
    dispatch({ type: AUTH.SET_USER_INFO, user });
  };

  const onEditUser = () => {
    dispatch({ type: AUTH.EDIT_USER_REQUEST });
    return editUser(state.user, {
      onSuccess: (user) =>
        dispatch({ type: AUTH.EDIT_USER_REQUEST_SUCCESS, user }),
      onError: (error) =>
        dispatch({ type: AUTH.EDIT_USER_REQUEST_ERROR, error }),
    });
  };

  return {
    ...state,
    loggedIn: !!state.user.token,
    updateAuthInfo,
    onRegisterUser,
    onUserLogin,
    onSignOut,
    onEditUser,
    setUserInfo,
  };
};

export default useAuth;
