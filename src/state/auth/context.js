import { createContext, useContext } from "react";
import useAuth from "./useAuth";

const AuthContext = createContext(null);

const AuthProvider = ({
  children,
  registerUser,
  loginUser,
  editUser,
  cache,
}) => {
  const value = useAuth({ registerUser, loginUser, editUser, cache });
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
