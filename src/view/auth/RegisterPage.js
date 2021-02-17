// @ts-check

import AuthPage from "./AuthPage";
import { Link } from "react-router-dom";
import useAuth from "../../state/auth/useAuth";

const RegisterPage = () => {
  const {
    onRegisterUser,
    error,
    authInfo,
    updateAuthInfo,
    isLoading,
  } = useAuth();
  return (
    <AuthPage
      onSubmit={onRegisterUser}
      title="Sign in"
      getLink={() => <Link to="/login">Have an account?</Link>}
      error={error}
      authInfo={authInfo}
      updateAuthInfo={updateAuthInfo}
      showUsername
      isLoading={isLoading}
    />
  );
};

export default RegisterPage;
