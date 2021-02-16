// @ts-check

import AuthPage from "./AuthPage";
import { Link } from "react-router-dom";
import useAuth from "../../state/auth/useAuth";

const LoginPage = () => {
  const {
    onUserLogin,
    errors,
    authInfo,
    updateAuthInfo,
    isLoading,
  } = useAuth();
  return (
    <AuthPage
      onSubmit={onUserLogin}
      title="Sign in"
      getLink={() => <Link to="/register">Need an account?</Link>}
      errors={errors}
      updateAuthInfo={updateAuthInfo}
      authInfo={authInfo}
      isLoading={isLoading}
    />
  );
};

export default LoginPage;
