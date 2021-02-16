// @ts-check

import AuthPage from "./AuthPage";
import { Link } from "react-router-dom";
import useAuth from "../../state/auth/useAuth";

const LoginPage = () => {
  const {
    onRegisterUser,
    errors,
    authInfo,
    updateAuthInfo,
    isLoading,
  } = useAuth();
  return (
    <AuthPage
      onSubmit={onRegisterUser}
      title="Sign in"
      getLink={() => <Link to="/login">Have an account?</Link>}
      errors={errors}
      authInfo={authInfo}
      updateAuthInfo={updateAuthInfo}
      showUsername
      isLoading={isLoading}
    />
  );
};

export default LoginPage;
