import AuthProvider from "../state/auth/context";

const Provider = ({ cache, container, children }) => {
  const { registerUser, loginUser } = container;
  return (
    <AuthProvider
      registerUser={registerUser}
      loginUser={loginUser}
      cache={cache}
    >
      {children}
    </AuthProvider>
  );
};

export default Provider;
