import { AuthProvider } from "../state/auth/useAuth";

const Provider = ({ storage, container, children }) => {
  const { registerUser, signinUser } = container;
  return (
    <AuthProvider
      registerUser={registerUser}
      signinUser={signinUser}
      storage={storage}
    >
      {children}
    </AuthProvider>
  );
};

export default Provider;
