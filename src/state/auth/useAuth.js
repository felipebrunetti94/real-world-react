import { useReducer, createContext, useContext, useMemo } from "react";
import initialState from "./initialState";
import * as AUTH from "./types";
import reducer from "./reducer";

const AuthContext = createContext(null);

export const AuthProvider = ({
  children,
  registerUser,
  loginUser,
  storage,
}) => {
  const [state, dispatch] = useReducer(
    reducer,
    storage.user ? storage : initialState
  );

  const value = useMemo(() => {
    const onRegisterUser = (authInfo) => {
      dispatch({ type: AUTH.REGISTER_USER_REQUEST });
      return registerUser(authInfo, {
        onSuccess: (user) =>
          dispatch({ type: AUTH.REGISTER_USER_REQUEST_SUCCESS, user }),
        onError: (errors) =>
          dispatch({ type: AUTH.REGISTER_USER_REQUEST_ERROR, errors }),
      });
    };

    const onUserLogin = (authInfo) => {
      dispatch({ type: AUTH.LOGIN_USER_REQUEST });
      return loginUser(authInfo, {
        onSuccess: (user) =>
          dispatch({ type: AUTH.LOGIN_USER_REQUEST_SUCCESS, user }),
        onError: (errors) =>
          dispatch({ type: AUTH.LOGIN_USER_REQUEST_ERROR, errors }),
      });
    };

    const updateAuthInfo = (authInfo) =>
      dispatch({ type: AUTH.UPDATE_AUTH_INFO, authInfo });

    return {
      ...state,
      user: state.user || {},
      updateAuthInfo,
      onRegisterUser,
      onUserLogin,
    };
  }, [state, dispatch, registerUser, loginUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export default useAuth;
