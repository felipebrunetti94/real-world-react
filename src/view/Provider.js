import AuthProvider from "../state/auth/context";

const Provider = ({ cache, container, children }) => {
  const { registerUser, loginUser, editUser } = container;
  return (
    <AuthProvider
      registerUser={registerUser}
      loginUser={loginUser}
      editUser={editUser}
      cache={cache}
    >
      {children}
    </AuthProvider>
  );
};

export default Provider;
