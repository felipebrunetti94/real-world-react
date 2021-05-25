// @ts-check

import AuthPage from "./AuthPage";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../state/auth/context";

const LoginPage = () => {
  const { onUserLogin, error, authInfo, updateAuthInfo, isLoading } =
    useAuthContext();
  return (
    <AuthPage
      onSubmit={onUserLogin}
      title="Sign in"
      getLink={() => <Link to="/register">Need an account?</Link>}
      error={error}
      updateAuthInfo={updateAuthInfo}
      authInfo={authInfo}
      isLoading={isLoading}
    />
  );
};

export default LoginPage;
