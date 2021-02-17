import { AuthProvider } from "../state/auth/useAuth";

const Provider = ({ storage, container, children }) => {
  const { registerUser, loginUser } = container;
  return (
    <AuthProvider
      registerUser={registerUser}
      loginUser={loginUser}
      storage={storage}
    >
      {children}
    </AuthProvider>
  );
};

export default Provider;
