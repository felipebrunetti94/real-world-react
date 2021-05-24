import { createContext, useContext } from "react";
import useAuth from "./useAuth";

const AuthContext = createContext(null);

const AuthProvider = ({ children, registerUser, loginUser, cache }) => {
  const value = useAuth({ registerUser, loginUser, cache });
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
