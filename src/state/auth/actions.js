import * as AUTH from "./types";

export const updateAuthInfo = (authInfo) => ({
  type: AUTH.UPDATE_AUTH_INFO,
  authInfo,
});

export const registerUser = (authInfo) => ({
  type: AUTH.REGISTER_USER,
  authInfo,
});

export const registerUserSuccess = (authInfo) => ({
  type: AUTH.REGISTER_USER_SUCCESS,
  authInfo,
});

export const registerUserError = (errors) => ({
  type: AUTH.REGISTER_USER_ERROR,
  errors,
});

export const loginUser = (authInfo) => ({
  type: AUTH.LOGIN_USER,
  authInfo,
});

export const loginUserSuccess = (authInfo) => ({
  type: AUTH.LOGIN_USER_SUCCESS,
  authInfo,
});

export const loginUserError = (errors) => ({
  type: AUTH.LOGIN_USER_ERROR,
  errors,
});
